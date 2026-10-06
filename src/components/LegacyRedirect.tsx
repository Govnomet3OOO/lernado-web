"use client";

import { useEffect } from "react";

export function LegacyRedirect({ href }: { href: string }) {
  useEffect(() => {
    window.location.replace(href);
  }, [href]);

  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${href}`} />
      <link rel="canonical" href={href} />
      <p className="px-5 py-16 text-sm leading-6 text-muted">
        This page has moved to{" "}
        <a
          href={href}
          className="font-semibold text-foreground underline decoration-accent/40 underline-offset-4"
        >
          {href}
        </a>
        .
      </p>
    </>
  );
}
