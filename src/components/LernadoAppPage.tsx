import Link from "next/link";
import type { ReactNode } from "react";

import { ShotCarousel } from "./ShotCarousel";
import { products } from "../lib/products";

const product = products.lernado;

const storeButtonClass =
  "store-cta inline-flex h-14 w-full cursor-pointer items-center justify-center rounded-[32px] border px-8 text-base font-bold tracking-[-0.02em] select-none sm:w-auto sm:min-w-72";

const featureMarks: Record<string, ReactNode> = {
  "Daily repetitions": <RepeatIcon />,
  "Your dictionaries": <BooksIcon />,
  "Spoken practice": <ChatIcon />,
};

export function LernadoAppPage() {
  return (
    <div className="relative mx-auto w-full max-w-3xl px-5 pb-24">
      <section className="mx-auto max-w-xl pt-14 text-center sm:pt-16">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {product.tagline}
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 text-left">
          <img
            src="/lernado-icon.png"
            alt=""
            width={1024}
            height={1024}
            className="size-20 shrink-0 rounded-[18px]"
            aria-hidden="true"
          />
          <div>
            <p className="text-xl font-bold tracking-tight text-foreground">
              Welcome to
            </p>
            <h1 className="mt-1.5 text-[44px] font-extrabold leading-none tracking-[-0.06em] text-foreground sm:text-6xl">
              {product.name}
            </h1>
            <div className="mt-3.5 h-[3px] w-9 rounded-sm bg-primary/70" />
          </div>
        </div>
        <p className="mt-3 text-[17px] font-semibold leading-snug text-foreground">
          Smart vocabulary trainer
        </p>
        <p className="mt-4 text-base leading-7 text-muted">
          Learn words in action — that&apos;s how language stays with you
          forever. Meet the word on a card, then use it in a dialogue.
        </p>
        <button type="button" className={`${storeButtonClass} mt-8`}>
          {product.statusLabel}
        </button>
        {product.testHref ? (
          <p className="mt-5 text-sm text-muted">
            <Link
              href={product.testHref}
              className="font-semibold text-accent transition-colors hover:text-primary"
            >
              Join the closed test
            </Link>
          </p>
        ) : null}
      </section>

      <ShotCarousel />

      <p className="mx-auto mt-16 max-w-xl text-center text-[26px] font-medium leading-snug tracking-[-0.03em] text-foreground sm:mt-20 sm:text-3xl">
        A word you have used is a word you keep.
      </p>

      <section className="mt-16 border-t border-line pt-14 sm:mt-20 sm:pt-16">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          What you come back to
        </h2>
        <p className="mt-3 max-w-md text-base leading-7 text-muted">
          A few minutes a day. The words you chose. Practice that checks
          whether you can actually use them.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {product.features.map((feature) => (
            <li
              key={feature.title}
              className="rounded-2xl border border-line bg-card p-5 transition-colors hover:border-accent/40"
            >
              <div className="text-accent">{featureMarks[feature.title]}</div>
              <h3 className="mt-4 text-[15px] font-semibold tracking-tight text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{feature.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 rounded-3xl border border-line bg-card px-6 py-10 text-center sm:mt-20 sm:px-10">
        <h2 className="text-2xl font-bold tracking-[-0.04em] text-foreground sm:text-[28px]">
          A few minutes. Then the word is yours.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base leading-7 text-muted">
          Review what is due, meet one word properly, and use it in a sentence
          before you close the app.
        </p>
        <button type="button" className={`${storeButtonClass} mt-8`}>
          {product.statusLabel}
        </button>
        {product.testHref ? (
          <p className="mt-5 text-sm text-muted">
            <Link
              href={product.testHref}
              className="font-semibold text-accent transition-colors hover:text-primary"
            >
              Join the closed test
            </Link>
          </p>
        ) : null}
      </section>

      <nav
        aria-label={`${product.name} links`}
        className="mt-16 flex flex-wrap gap-5 border-t border-line pt-8 text-sm font-semibold text-muted"
      >
        <Link
          href={product.termsHref}
          className="transition-colors hover:text-primary"
        >
          Terms of Use
        </Link>
        <Link
          href={product.privacyHref}
          className="transition-colors hover:text-primary"
        >
          Privacy Policy
        </Link>
        {product.testHref ? (
          <Link
            href={product.testHref}
            className="transition-colors hover:text-primary"
          >
            Closed test
          </Link>
        ) : null}
        {product.deleteAccountHref ? (
          <Link
            href={product.deleteAccountHref}
            className="transition-colors hover:text-primary"
          >
            Delete account
          </Link>
        ) : null}
      </nav>
    </div>
  );
}

function RepeatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M4.5 13a7.5 7.5 0 0 1 12.8-5.3" strokeLinecap="round" />
      <path d="M16.5 4.5v4h-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.5 11a7.5 7.5 0 0 1-12.8 5.3" strokeLinecap="round" />
      <path d="M7.5 19.5v-4h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BooksIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M4 6.2h6.2V19H5.4A1.4 1.4 0 0 1 4 17.6V6.2Z" />
      <path d="M20 6.2h-6.2V19h4.8a1.4 1.4 0 0 0 1.4-1.4V6.2Z" />
      <path d="M12 6.2v12.8" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M5.5 6.5h13v8.2H9.2L5.5 18V6.5Z" strokeLinejoin="round" />
      <path d="M8.5 10h7M8.5 12.6h4" strokeLinecap="round" />
    </svg>
  );
}
