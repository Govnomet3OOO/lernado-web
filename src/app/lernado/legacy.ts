import type { Metadata } from "next";

export const legacyRedirectMetadata: Metadata = {
  robots: { index: false, follow: false },
  title: { absolute: "Page moved" },
};
