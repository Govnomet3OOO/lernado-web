export type ProductStatus = "coming-soon" | "in-development";

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
  nameHidden?: boolean;
};

export const products = {
  lernado: {
    id: "lernado",
    name: "Lernado",
    navLabel: "Vocabulary Builder",
    tagline: "Vocabulary Builder",
    description:
      "Learn English vocabulary with short daily sessions, personal dictionaries, and practice that checks your sentences.",
    href: "/lernado",
    status: "coming-soon",
    statusLabel: "Google Play · Coming soon",
    packageName: "com.lernado.app",
    termsHref: "/lernado/terms",
    privacyHref: "/lernado/privacy",
    deleteAccountHref: "/lernado/delete-account",
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
  stories: {
    id: "stories",
    name: "Upcoming app",
    navLabel: "Upcoming app",
    nameHidden: true,
    description: "Learn English through stories.",
    href: "/stories",
    status: "in-development",
    statusLabel: "In development",
    features: [
      {
        title: "A story that waits",
        body: "It does not move until you do.",
      },
      {
        title: "English in the plot",
        body: "The language is the world you walk through, not a list on the side.",
      },
      {
        title: "More than one ending",
        body: "What you say, and which way you turn, changes the page.",
      },
    ],
  },
} as const satisfies Record<string, Product>;

export const productList: Product[] = Object.values(products);
