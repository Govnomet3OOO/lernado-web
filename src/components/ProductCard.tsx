import Link from "next/link";

import { RedactedName } from "./RedactedName";
import type { Product } from "../lib/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={product.href}
      className="group flex flex-col rounded-2xl border border-line bg-card p-6 transition-colors hover:border-accent/40"
    >
      <p className="text-xs font-medium uppercase tracking-wider text-accent">
        {product.statusLabel}
      </p>
      <h2 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
        {product.nameHidden ? <RedactedName /> : product.name}
      </h2>
      {product.tagline ? (
        <p className="mt-1 text-sm font-medium text-foreground/80">
          {product.tagline}
        </p>
      ) : null}
      <p className="mt-3 text-sm leading-6 text-muted">{product.description}</p>
      <span className="mt-5 text-sm font-medium text-accent group-hover:underline group-hover:underline-offset-2">
        Learn more
      </span>
    </Link>
  );
}
