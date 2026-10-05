import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { products } from "../../lib/products";
import { site } from "../../lib/site";

const product = products.lernado;

const testersGroupUrl = "https://groups.google.com/g/lernado-testers";
const becomeTesterUrl =
  "https://play.google.com/apps/testing/com.lernado.vocab";
const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.lernado.vocab";

const stepLinkClass =
  "store-cta mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full border px-4 py-3 text-center text-sm font-bold leading-5 tracking-[-0.02em]";

export const metadata: Metadata = {
  title: {
    absolute: `Closed test — ${product.name}`,
  },
  description: `How to join the private Android test for ${product.name} and install the app from Google Play.`,
};

function Mark({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-accent">{children}</strong>;
}

const stepFrames = [
  "border-[#22e7ff]",
  "border-[#ff3df2]",
  "border-[#c8ff3d]",
];

const steps: {
  title: string;
  body: ReactNode;
  href: string;
  label: string;
}[] = [
  {
    title: "Join the Google Group",
    body: (
      <>
        Open the group and request to join. We admit testers from that list.
        Once you are in, Google Play can take <Mark>up to 20 minutes</Mark>{" "}
        before the test opens for your account.
      </>
    ),
    href: testersGroupUrl,
    label: "Join the Google Group",
  },
  {
    title: "Opt in on Google Play",
    body: (
      <>
        On the testing page, confirm that you want to take part. If Play says
        you cannot join, give it <Mark>up to 20 minutes</Mark> after the group
        accepted you. The same thing happens if the browser is signed in with a{" "}
        <Mark>different Google account</Mark>.
      </>
    ),
    href: becomeTesterUrl,
    label: "Become a tester",
  },
  {
    title: "Install the app",
    body: (
      <>
        The testing page can send you on to Google Play, and you can also open
        the store listing itself with the link below. Either way you get the
        same app. After that, updates arrive the usual way.
      </>
    ),
    href: playStoreUrl,
    label: "Install on Google Play",
  },
];

function ContactDevelopersButton() {
  return (
    <span className="mx-0.5 inline-flex items-center gap-1.5 rounded-lg border border-line bg-card px-2.5 py-2 align-middle text-[13px] font-medium leading-none text-foreground">
      <svg
        viewBox="0 0 24 24"
        className="size-3.5 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <path
          d="M5.2 6.6h13.6a1.6 1.6 0 0 1 1.6 1.6v6.6a1.6 1.6 0 0 1-1.6 1.6H9.4L6.4 19.2v-2.8H5.2a1.6 1.6 0 0 1-1.6-1.6V8.2a1.6 1.6 0 0 1 1.6-1.6Z"
          strokeLinejoin="round"
        />
      </svg>
      Contact the developers
      <svg
        viewBox="0 0 24 24"
        className="size-3 shrink-0 text-muted"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function LernadoClosedTestPage() {
  return (
    <div className="relative mx-auto w-full max-w-3xl px-5 pb-24">
      <p className="pt-8">
        <Link
          href={product.href}
          className="text-sm font-semibold text-muted transition-colors hover:text-primary"
        >
          {product.name}
        </Link>
      </p>

      <header className="pt-14 sm:pt-16">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Android, ahead of the public release
        </p>
        <h1 className="mt-4 text-[44px] font-extrabold leading-[0.95] tracking-[-0.06em] text-foreground sm:text-6xl">
          Join the closed test
        </h1>
        <div className="mt-4 h-[3px] w-9 rounded-sm bg-primary/70" />
        <p className="mt-6 text-base leading-7 text-muted">
          The test build is free. Nothing to pay, and no subscription starts
          when you join.
        </p>
      </header>

      <aside className="mt-8 rounded-2xl border border-accent/30 bg-accent-soft px-5 py-4 text-sm leading-6 text-foreground">
        Use the same Google account for all three steps.
      </aside>

      <ol className="mt-12 grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className={`flex flex-col rounded-2xl border bg-card p-5 ${stepFrames[index]}`}
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent">
              {index + 1}
            </span>
            <h2 className="mt-4 text-lg font-bold tracking-[-0.03em] text-foreground">
              {step.title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-6 text-muted">{step.body}</p>
            <a
              href={step.href}
              target="_blank"
              rel="noopener noreferrer"
              className={stepLinkClass}
            >
              {step.label}
            </a>
          </li>
        ))}
      </ol>

      <section className="mt-12 overflow-hidden rounded-2xl border border-accent/30 bg-card">
        <div className="bg-[linear-gradient(115deg,var(--primary),#042033)] px-5 py-3.5 text-white sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
            For active testers
          </p>
          <h2 className="mt-1 text-2xl font-extrabold tracking-[-0.04em]">
            Six months free
          </h2>
        </div>
        <div className="px-5 py-4 sm:px-6">
          <p className="text-sm leading-6 text-foreground">
            Active testers get a one-time promo code for six months of the
            subscription, free. I email it to the same Google account, if you
            are still in the testers group. The code works once the app is
            released. During the test it is free anyway.
          </p>
          <p className="mt-3 text-sm font-semibold text-foreground">
            Active means both of these:
          </p>
          <ul className="mt-2 space-y-2 text-sm leading-6 text-muted">
            <li>
              <span className="font-semibold text-foreground">
                Use the app for real.{" "}
              </span>
              A few times a week, over a couple of weeks. Not every day, and
              not a quick open-and-close.
            </li>
            <li>
              <span className="font-semibold text-foreground">
                Send at least one note.{" "}
              </span>
              A problem, a review, or a suggestion, from the app or by email.
            </li>
          </ul>
        </div>
      </section>

      <div className="mt-14 border-t border-line pt-10">
        <section className="max-w-xl">
          <h2 className="text-xl font-bold tracking-[-0.03em] text-foreground">
            Stay longer than 14 days
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Google will not move the app to a public release until testers have
            remained opted in for 14 days without a break. That stretch can
            still fall short on our side, so it helps if you stay{" "}
            <Mark>past 14 days</Mark>. If you leave the group or opt out, those
            days start again. Keep {product.name} installed until
            anyone can download it.
          </p>
        </section>

        <section className="mt-10 max-w-xl">
          <h2 className="text-xl font-bold tracking-[-0.03em] text-foreground">
            I&apos;d love to hear from you
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            If you find a problem, or you just want to leave a review or a
            suggestion, I&apos;m always glad to get it. You can send it from the
            app, or write to me.
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
            <li>
              <span className="font-semibold text-foreground">In the app. </span>
              Open Settings and scroll to the bottom. In Feedback, tap{" "}
              <ContactDevelopersButton />.
            </li>
            <li>
              <span className="font-semibold text-foreground">Or by email. </span>
              Write to me at{" "}
              <a
                href={`mailto:${site.contactEmail}`}
                className="font-semibold text-foreground underline decoration-accent/40 underline-offset-4 transition-colors hover:text-primary"
              >
                {site.contactEmail}
              </a>
              .
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
