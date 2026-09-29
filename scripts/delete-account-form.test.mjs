import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const source = ts.transpileModule(fs.readFileSync('src/components/DeleteAccountForm.tsx', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
}).outputText;
const textOf = value => value == null || typeof value === 'boolean' ? '' : typeof value !== 'object' ? String(value)
  : Array.isArray(value) ? value.map(textOf).join(' ') : textOf(value.props?.children);
const descendants = node => Array.isArray(node) ? node.flatMap(descendants)
  : !node || typeof node !== 'object' ? [] : [node, ...descendants(node.props?.children)];
const tick = () => new Promise(setImmediate);

function setup(confirmError) {
  const hooks = [], requests = [];
  let cursor = 0, nextConfirmationError = confirmError;
  const jsx = (type, props) => ({ type, props });
  const dependencies = {
    react: { useState(initial) {
      const slot = cursor++;
      if (!(slot in hooks)) hooks[slot] = initial;
      return [hooks[slot], value => { hooks[slot] = typeof value === 'function' ? value(hooks[slot]) : value; }];
    } },
    'react/jsx-runtime': { jsx, jsxs: jsx },
    '../lib/accountDeletion': {
      deletionReasons: [{ id: 'other', label: 'Other' }],
      deletionErrorMessage: code => `Error: ${code}`,
      requestAccountDeletion: async body => {
        requests.push(body);
        if (body.step === 'confirm' && nextConfirmationError) {
          const error = nextConfirmationError;
          nextConfirmationError = undefined;
          return { ok: false, error };
        }
        return { ok: true };
      },
    },
  };
  const context = { exports: {}, require: name => {
    assert.ok(name in dependencies, `Unexpected dependency ${name}`);
    return dependencies[name];
  } };
  vm.runInNewContext(source, context);
  const render = () => { cursor = 0; return context.exports.DeleteAccountForm(); };
  const find = predicate => descendants(render()).find(predicate);
  const button = label => find(node => node.type === 'button' && textOf(node) === label);
  const input = name => find(node => node.type === 'input' && node.props.name === name);
  const edit = (name, value) => {
    const field = input(name);
    assert.ok(field, `Missing input ${name}`);
    field.props.onChange({ target: { value } });
  };
  const submit = async () => {
    const form = find(node => node.type === 'form');
    assert.ok(form, 'An actionable form must be visible');
    form.props.onSubmit({ preventDefault() {} });
    await tick();
  };
  const click = async label => {
    const target = button(label);
    assert.ok(target, `Missing button ${label}`);
    assert.ok(!target.props.disabled, `Disabled button ${label}`);
    target.props.onClick();
    await tick();
  };
  const chooseReason = () => {
    const checkbox = find(node => node.type === 'input' && node.props.type === 'checkbox');
    assert.ok(checkbox, 'Survey must be available after verified code');
    checkbox.props.onChange();
  };
  return { requests, render, button, input, edit, submit, click, chooseReason };
}

async function reachSurvey(app) {
  app.edit('email', 'disposable@example.invalid');
  await app.submit();
  app.edit('code', '123456');
  await app.submit();
  app.chooseReason();
  assert.ok(app.button('Delete my account'));
}

for (const error of ['expired', 'locked']) {
  test(`${error} during final confirmation offers resend and completes after a new code`, async () => {
    const app = setup(error);
    await reachSurvey(app);
    await app.submit();
    assert.ok(app.button('Resend code'), 'An expired/locked code must not trap the user in the survey');
    assert.ok(app.input('code'));
    assert.equal(app.button('Delete my account'), undefined);
    assert.match(textOf(app.render()), new RegExp(`Error: ${error}`));
    await app.click('Resend code');
    assert.equal(app.input('code').props.value, '');
    app.edit('code', '654321');
    await app.submit();
    app.chooseReason();
    await app.submit();
    assert.match(textOf(app.render()), /Your account is deleted/);
    assert.deepEqual(app.requests.map(request => request.step), ['send_code', 'verify_code', 'confirm', 'send_code', 'verify_code', 'confirm']);
    assert.equal(app.requests.at(-1).code, '654321');
  });
}

test('temporary network failure retains the survey and supports retry', async () => {
  const app = setup('network');
  await reachSurvey(app);
  await app.submit();
  assert.ok(app.button('Delete my account'));
  assert.equal(app.input('code'), undefined);
  assert.match(textOf(app.render()), /Error: network/);
  await app.submit();
  assert.match(textOf(app.render()), /Your account is deleted/);
});

test('successful confirmation reaches the completed state once', async () => {
  const app = setup();
  await reachSurvey(app);
  await app.submit();
  assert.match(textOf(app.render()), /Your account is deleted/);
  assert.equal(app.button('Delete my account'), undefined);
  assert.equal(app.requests.filter(request => request.step === 'confirm').length, 1);
});
