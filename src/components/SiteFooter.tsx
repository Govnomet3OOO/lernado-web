import Link from "next/link";

import { RedactedName } from "./RedactedName";
import { productList } from "../lib/products";
import { site } from "../lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line/80">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {site.copyrightYear} {site.name}
        </p>
        <nav aria-label="Apps" className="flex flex-wrap gap-5">
          {productList.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                aria-label={product.nameHidden ? "Upcoming app" : undefined}
                className="transition-colors hover:text-foreground"
              >
                {product.nameHidden ? <RedactedName /> : product.navLabel}
              </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
