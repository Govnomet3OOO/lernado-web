import Link from "next/link";
import type { ReactNode } from "react";

import { RedactedName } from "./RedactedName";
import type { Product } from "../lib/products";
import { paths } from "../lib/site";

type ProductPageProps = {
  product: Product;
  mark: ReactNode;
  note?: ReactNode;
};

export function ProductPage({ product, mark, note }: ProductPageProps) {
  return (
    <div className="mx-auto w-full max-w-3xl px-5">
      <p className="pt-8">
        <Link
          href={paths.home}
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          All apps
        </Link>
      </p>

      <section className="flex flex-col items-center py-16 text-center sm:py-20">
        <div className="mb-8">{mark}</div>
        {product.tagline ? (
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
            {product.tagline}
          </p>
        ) : null}
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {product.nameHidden ? <RedactedName /> : product.name}
        </h1>
        <p className="mt-5 max-w-md text-[17px] leading-7 text-muted">
          {product.description}
        </p>
        <p className="mt-8 inline-flex items-center rounded-full bg-accent-soft px-4 py-2 text-sm font-medium text-accent">
          {product.statusLabel}
        </p>
        {note ? (
          <div className="mt-4 max-w-md text-sm leading-6 text-muted">{note}</div>
        ) : null}
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <ul className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {product.features.map((feature) => (
            <li key={feature.title} className="text-left">
              <h2 className="text-[15px] font-semibold tracking-tight text-foreground">
                {feature.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted">{feature.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {product.termsHref || product.privacyHref ? (
        <section className="border-t border-line py-8 text-sm text-muted">
          <nav aria-label={`${product.nameHidden ? "App" : product.name} legal`} className="flex gap-5">
            {product.termsHref ? (
              <Link
                href={product.termsHref}
                className="transition-colors hover:text-foreground"
              >
                Terms of Use
              </Link>
            ) : null}
            {product.privacyHref ? (
              <Link
                href={product.privacyHref}
                className="transition-colors hover:text-foreground"
              >
                Privacy Policy
              </Link>
            ) : null}
          </nav>
        </section>
      ) : null}
    </div>
  );
}
