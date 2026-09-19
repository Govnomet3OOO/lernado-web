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
        <div className="relative isolate inline-block text-4xl sm:text-5xl">
          <Logo className="pointer-events-none absolute top-1/2 left-0 -z-10 h-[3cap] w-auto max-w-none -translate-x-[8%] -translate-y-[33%]" />
          <h1 className="relative z-10 font-semibold leading-none tracking-tight text-foreground">
            {site.name}
          </h1>
        </div>
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
