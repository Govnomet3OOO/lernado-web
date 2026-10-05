export type ProductStatus = "coming-soon";

export type ProductFeature = {
  title: string;
  body: string;
};

export type Product = {
  id: string;
  name: string;
  navLabel: string;
  tagline?: string;
  description: string;
  href: string;
  status: ProductStatus;
  statusLabel: string;
  features: readonly ProductFeature[];
  packageName?: string;
  termsHref?: string;
  privacyHref?: string;
  deleteAccountHref?: string;
  testHref?: string;
};

export const products = {
  lernado: {
    id: "lernado",
    name: "Lernado",
    navLabel: "Vocabulary Builder",
    tagline: "Vocabulary Builder",
    description:
      "Learn English vocabulary with short daily sessions, personal dictionaries, and practice that checks your sentences.",
    href: "/",
    status: "coming-soon",
    statusLabel: "Google Play · Coming soon",
    packageName: "com.lernado.vocab",
    termsHref: "/terms",
    privacyHref: "/privacy",
    deleteAccountHref: "/delete-account",
    testHref: "/test",
    features: [
      {
        title: "Daily repetitions",
        body: "Small daily goals and spaced review so new English words actually stick.",
      },
      {
        title: "Your dictionaries",
        body: "Start from built-in word lists, then grow personal dictionaries of the words you care about.",
      },
      {
        title: "Spoken practice",
        body: "Write sentences, get feedback, and run short mini-dialogs around the words you are learning.",
      },
    ],
  },
} as const satisfies Record<string, Product>;

export const productList: Product[] = Object.values(products);
