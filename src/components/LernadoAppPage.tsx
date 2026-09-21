import Link from "next/link";

import { products } from "../lib/products";
import { paths } from "../lib/site";

const product = products.lernado;

export function LernadoAppPage() {
  return (
    <div className="relative mx-auto w-full max-w-lg px-6 pb-20 pt-8 sm:px-8">
      <p>
        <Link
          href={paths.home}
          className="text-sm font-semibold text-muted transition-colors hover:text-primary"
        >
          All apps
        </Link>
      </p>

      <section className="pt-14 sm:pt-16">
        <p className="text-xl font-bold tracking-tight text-foreground">
          Welcome to
        </p>
        <h1 className="mt-1.5 text-[44px] font-extrabold leading-none tracking-[-0.06em] text-foreground">
          {product.name}
        </h1>
        <div className="mt-3.5 h-[3px] w-9 rounded-sm bg-primary/70" />
        <p className="mt-2.5 text-[17px] font-semibold leading-snug text-foreground">
          Smart vocabulary trainer
        </p>
        <p className="mt-3 max-w-[300px] text-base leading-[22px] text-muted">
          Learn words in action — that&apos;s how language stays with you
          forever.
        </p>
        <button
          type="button"
          className="store-cta mt-8 flex h-16 w-full cursor-pointer items-center justify-center rounded-[32px] border px-6 text-base font-bold tracking-[-0.02em] select-none"
        >
          {product.statusLabel}
        </button>
      </section>

      <section className="mt-16 space-y-8">
        {product.features.map((feature) => (
          <div key={feature.title}>
            <h2 className="text-[17px] font-semibold text-foreground">
              {feature.title}
            </h2>
            <p className="mt-1.5 max-w-sm text-base leading-[22px] text-muted">
              {feature.body}
            </p>
          </div>
        ))}
      </section>

      <nav
        aria-label={`${product.name} legal`}
        className="mt-16 flex flex-wrap gap-5 text-sm font-semibold text-muted"
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
