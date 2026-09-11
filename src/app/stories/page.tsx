import type { Metadata } from "next";

import { ProductPage } from "../../components/ProductPage";
import { StoryMark } from "../../components/StoryMark";
import { products } from "../../lib/products";

const product = products.stories;

export const metadata: Metadata = {
  title: "New app",
  description: product.description,
};

export default function StoriesPage() {
  return (
    <ProductPage
      product={product}
      mark={<StoryMark className="h-20 w-20" />}
      note="The name isn’t public yet. The app is not out yet."
    />
  );
}
