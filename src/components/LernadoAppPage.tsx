import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { products } from "../lib/products";
import { paths } from "../lib/site";

const product = products.lernado;

const storeButtonClass =
  "store-cta inline-flex h-14 w-full cursor-pointer items-center justify-center rounded-[32px] border px-8 text-base font-bold tracking-[-0.02em] select-none sm:w-auto sm:min-w-72";

const cardNotes = [
  {
    title: "Hear it",
    body: "American English pronunciation, plus each verb form with its own sound.",
  },
  {
    title: "Read it",
    body: "A plain definition, and an example where the word is already doing the work.",
  },
  {
    title: "Keep or skip",
    body: "Swipe on. Mark a word you know, or hold onto it and learn it.",
  },
] as const;

const dialoguePoints = [
  "Play the question back before you answer",
  "The phrase stays pinned while you write",
  "The sentence is checked as soon as you send it",
] as const;

const featureMarks: Record<string, ReactNode> = {
  "Daily repetitions": <RepeatIcon />,
  "Your dictionaries": <BooksIcon />,
  "Spoken practice": <ChatIcon />,
};

export function LernadoAppPage() {
  return (
    <div className="relative mx-auto w-full max-w-3xl px-5 pb-24">
      <p className="pt-8">
        <Link
          href={paths.home}
          className="text-sm font-semibold text-muted transition-colors hover:text-primary"
        >
          All apps
        </Link>
      </p>

      <section className="mx-auto max-w-xl pt-14 text-center sm:pt-16">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {product.tagline}
        </p>
        <p className="mt-6 text-xl font-bold tracking-tight text-foreground">
          Welcome to
        </p>
        <h1 className="mt-1.5 text-[44px] font-extrabold leading-none tracking-[-0.06em] text-foreground sm:text-6xl">
          {product.name}
        </h1>
        <div className="mx-auto mt-3.5 h-[3px] w-9 rounded-sm bg-primary/70" />
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
      </section>

      <div className="mt-14 grid items-start gap-16 sm:mt-16 sm:grid-cols-2 sm:gap-12">
        <article>
          <PhoneShot
            src="/lernado/word-card.png"
            alt="Lernado word card for explain, with pronunciation, verb forms, a definition, and an example sentence."
            width={720}
            height={1426}
            priority
          />
          <h2 className="mt-6 text-xl font-bold tracking-[-0.03em] text-foreground">
            Meet it on the card
          </h2>
          <ul className="mt-5 space-y-4">
            {cardNotes.map((note) => (
              <li key={note.title}>
                <h3 className="text-[15px] font-semibold tracking-tight text-foreground">
                  {note.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted">{note.body}</p>
              </li>
            ))}
          </ul>
        </article>

        <article>
          <PhoneShot
            src="/lernado/dialogue.png"
            alt="Lernado dialogue asking for the phrase take on in a reply, with the sentence being checked."
            width={720}
            height={1422}
            late
          />
          <h2 className="mt-6 text-xl font-bold tracking-[-0.03em] text-foreground">
            Use it in a reply
          </h2>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-sm font-semibold text-foreground">
            take on
            <span className="font-medium text-muted">in your reply</span>
          </p>
          <p className="mt-4 text-sm leading-6 text-muted">
            A question sets a real situation — a busy week, a supervisor, a
            schedule. The phrase you need stays on screen. You write the line.
            Lernado checks it.
          </p>
          <ul className="mt-5 space-y-3">
            {dialoguePoints.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-6 text-muted">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <figure className="mx-auto mt-16 max-w-xl text-center sm:mt-20">
        <blockquote className="text-[26px] font-medium leading-snug tracking-[-0.03em] text-foreground sm:text-3xl">
          “Can you <span className="text-accent">explain</span> this grammar rule
          to me?”
        </blockquote>
        <figcaption className="mt-4 text-sm text-muted">
          The example already waiting on the card
        </figcaption>
      </figure>

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
      </section>

      <nav
        aria-label={`${product.name} legal`}
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

function PhoneShot({
  src,
  alt,
  width,
  height,
  priority,
  late,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  late?: boolean;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[22rem]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-8 bottom-8 rounded-full bg-accent/15 blur-3xl"
      />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        draggable={false}
        className={[
          "phone-shot relative z-[1] h-auto w-full",
          late ? "phone-shot-late" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      />
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
