import type { Metadata } from "next";

import { LernadoAppPage } from "../../components/LernadoAppPage";
import { products } from "../../lib/products";

const product = products.lernado;

export const metadata: Metadata = {
  title: {
    absolute: `${product.name} — ${product.tagline}`,
  },
  description: product.description,
};

export default function LernadoPage() {
  return <LernadoAppPage />;
}
