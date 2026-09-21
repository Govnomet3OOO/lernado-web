"use client";

import { useState } from "react";

import {
  deletionErrorMessage,
  deletionReasons,
  requestAccountDeletion,
  type DeletionReasonId,
} from "../lib/accountDeletion";

type Stage = "email" | "code" | "survey" | "done";

const fieldClassName =
  "mt-2 w-full rounded-2xl border border-line bg-card px-4 py-3 text-base text-foreground outline-none placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const primaryButtonClassName =
  "store-cta mt-6 flex h-14 w-full cursor-pointer items-center justify-center rounded-[32px] border px-6 text-base font-bold tracking-[-0.02em] select-none disabled:pointer-events-none disabled:opacity-55";

export function DeleteAccountForm() {
  const [stage, setStage] = useState<Stage>("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [reasons, setReasons] = useState<DeletionReasonId[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleReason = (id: DeletionReasonId) => {
    setReasons((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const sendCode = async () => {
    setBusy(true);
    setError(null);
    const result = await requestAccountDeletion({
      step: "send_code",
      email,
    });
    setBusy(false);
    if (!result.ok) {
      setError(deletionErrorMessage(result.error));
      return;
    }
    setCode("");
    setStage("code");
  };

  const verifyCode = async () => {
    setBusy(true);
    setError(null);
    const result = await requestAccountDeletion({
      step: "verify_code",
      email,
      code,
    });
    setBusy(false);
    if (!result.ok) {
      setError(deletionErrorMessage(result.error));
      if (result.error === "expired" || result.error === "locked") {
        setStage("code");
      }
      return;
    }
    setReasons([]);
    setStage("survey");
  };

  const confirmDeletion = async () => {
    if (reasons.length < 1) {
      setError("Choose at least one reason.");
      return;
    }
    setBusy(true);
    setError(null);
    const result = await requestAccountDeletion({
      step: "confirm",
      email,
      code,
      reasons,
    });
    setBusy(false);
    if (!result.ok) {
      setError(deletionErrorMessage(result.error));
      return;
    }
    setStage("done");
  };

  if (stage === "done") {
    return (
      <div className="rounded-2xl border border-line bg-card px-5 py-6">
        <h2 className="text-[17px] font-semibold text-foreground">
          Your account is deleted
        </h2>
        <p className="mt-2 text-base leading-[22px] text-muted">
          The Lernado account for {email} and the server records tied to it are
          gone. Learning data on a phone is cleared when you delete the account
          in the app or uninstall. A Google Play subscription is cancelled in
          the store, not here.
        </p>
      </div>
    );
  }

  return (
    <div>
      {stage === "email" ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            void sendCode();
          }}
        >
          <label className="block text-[17px] font-semibold text-foreground">
            Account email
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={fieldClassName}
              placeholder="you@email.com"
            />
          </label>
          <p className="mt-2 text-sm leading-5 text-muted">
            We will email a 6-digit code to confirm this is your account. If no
            Lernado account uses that address, you still see the next step —
            no code arrives.
          </p>
          <button
            type="submit"
            className={primaryButtonClassName}
            disabled={busy || email.trim().length < 3}
          >
            {busy ? "Sending…" : "Send code"}
          </button>
        </form>
      ) : null}

      {stage === "code" ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            void verifyCode();
          }}
        >
          <p className="text-sm text-muted">
            Code sent to <span className="text-foreground">{email}</span>
          </p>
          <label className="mt-4 block text-[17px] font-semibold text-foreground">
            Confirmation code
            <input
              type="text"
              name="code"
              inputMode="numeric"
              autoComplete="one-time-code"
              pattern="[0-9]{6}"
              maxLength={6}
              required
              value={code}
              onChange={(event) =>
                setCode(event.target.value.replace(/\D/g, "").slice(0, 6))
              }
              className={fieldClassName}
              placeholder="123456"
            />
          </label>
          <button
            type="submit"
            className={primaryButtonClassName}
            disabled={busy || code.length !== 6}
          >
            {busy ? "Checking…" : "Continue"}
          </button>
          <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold text-muted">
            <button
              type="button"
              className="transition-colors hover:text-primary disabled:opacity-55"
              disabled={busy}
              onClick={() => {
                setError(null);
                setStage("email");
              }}
            >
              Use a different email
            </button>
            <button
              type="button"
              className="transition-colors hover:text-primary disabled:opacity-55"
              disabled={busy}
              onClick={() => {
                void sendCode();
              }}
            >
              Resend code
            </button>
          </div>
        </form>
      ) : null}

      {stage === "survey" ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            void confirmDeletion();
          }}
        >
          <p className="text-sm text-muted">
            Confirmed <span className="text-foreground">{email}</span>
          </p>
          <fieldset className="mt-5">
            <legend className="text-[17px] font-semibold text-foreground">
              Why are you deleting your account?
            </legend>
            <p className="mt-1.5 text-sm leading-5 text-muted">
              Choose every option that applies. This is not linked to your
              email after deletion.
            </p>
            <div className="mt-4 space-y-2">
              {deletionReasons.map((reason) => {
                const checked = reasons.includes(reason.id);
                return (
                  <label
                    key={reason.id}
                    className="flex cursor-pointer items-start gap-3 rounded-2xl border border-line bg-card px-4 py-3 text-base text-foreground"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleReason(reason.id)}
                      className="mt-1 size-4 shrink-0 accent-[var(--accent)]"
                    />
                    <span>{reason.label}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
          <p className="mt-5 text-sm leading-5 text-muted">
            This permanently deletes the account and the server records we
            control. It does not cancel a Google Play subscription — do that
            in the store.
          </p>
          <button
            type="submit"
            className={primaryButtonClassName}
            disabled={busy || reasons.length < 1}
          >
            {busy ? "Deleting…" : "Delete my account"}
          </button>
        </form>
      ) : null}

      {error ? (
        <p className="mt-4 text-sm leading-5 text-[#f87171]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
