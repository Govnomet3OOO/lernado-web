import Link from "next/link";

import { Logo } from "./Logo";
import { RedactedName } from "./RedactedName";
import { ThemeToggle } from "./ThemeToggle";
import { productList } from "../lib/products";
import { paths, site } from "../lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-line/80 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5">
        <Link
          href={paths.home}
          aria-label={`${site.name} home`}
          className="flex items-center text-foreground"
        >
          <Logo className="h-8 w-auto" />
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <nav aria-label="Apps" className="flex items-center gap-5 text-sm">
            {productList.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                aria-label={product.nameHidden ? "Upcoming app" : undefined}
                className="text-muted transition-colors hover:text-foreground"
              >
                {product.nameHidden ? <RedactedName /> : product.navLabel}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
