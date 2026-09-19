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
        <h1 className="relative isolate inline-flex items-baseline text-4xl font-semibold leading-none tracking-tight text-foreground sm:text-5xl">
          <Logo className="pointer-events-none relative -z-10 h-[3cap] w-auto shrink-0 -mr-[1.55em]" />
          <span className="relative z-10">{site.name}</span>
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
