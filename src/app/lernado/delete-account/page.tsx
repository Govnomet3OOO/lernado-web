import type { Metadata } from "next";
import Link from "next/link";

import { DeleteAccountForm } from "../../../components/DeleteAccountForm";
import { products } from "../../../lib/products";
import { site } from "../../../lib/site";

const product = products.lernado;

export const metadata: Metadata = {
  title: {
    absolute: `Delete account — ${product.name}`,
  },
  description: `Delete your ${product.name} account and the server records tied to it.`,
};

export default function LernadoDeleteAccountPage() {
  return (
    <div className="relative mx-auto w-full max-w-lg px-6 pb-20 pt-8 sm:px-8">
      <p>
        <Link
          href={product.href}
          className="text-sm font-semibold text-muted transition-colors hover:text-primary"
        >
          {product.name}
        </Link>
      </p>

      <section className="pt-14 sm:pt-16">
        <h1 className="text-[44px] font-extrabold leading-none tracking-[-0.06em] text-foreground">
          Delete account
        </h1>
        <div className="mt-3.5 h-[3px] w-9 rounded-sm bg-primary/70" />
        <p className="mt-3 max-w-sm text-base leading-[22px] text-muted">
          Confirm the email on your {product.name} account, enter the code we
          send, then permanently delete the account and its server data.
        </p>
      </section>

      <section className="mt-10">
        <DeleteAccountForm />
      </section>

      <p className="mt-10 text-sm leading-5 text-muted">
        Questions:{" "}
        <a
          href={`mailto:${site.contactEmail}`}
          className="font-semibold text-muted transition-colors hover:text-primary"
        >
          {site.contactEmail}
        </a>
      </p>
    </div>
  );
}
