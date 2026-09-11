import type { Metadata } from "next";

import { Logo } from "../components/Logo";
import { ProductCard } from "../components/ProductCard";
import { productList } from "../lib/products";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${site.name} — ${site.tagline}`,
  },
  description: site.description,
};

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5">
      <section className="flex flex-col items-center py-20 text-center sm:py-24">
        <Logo className="mb-8 h-20 w-auto" />
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {site.name}
        </h1>
        <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-accent">
          {site.tagline}
        </p>
        <p className="mt-5 max-w-md text-[17px] leading-7 text-muted">
          Focused apps for learning English. Start with vocabulary.
          Stories come next.
        </p>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-muted">
          Apps
        </h2>
        <ul className="grid gap-5 sm:grid-cols-2">
          {productList.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
