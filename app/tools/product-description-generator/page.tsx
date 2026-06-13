import type { Metadata } from "next";
import { ProductDescriptionGenerator } from "@/components/Generator";

export const metadata: Metadata = {
  title: "Free Product Description Generator",
  description:
    "Create a starter ecommerce product description for Etsy or Shopify listings, then refine it with accurate product details."
};

export default function ProductDescriptionGeneratorPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12">
      <h1 className="text-4xl font-black text-ink">Free Product Description Generator</h1>
      <p className="mt-4 text-lg leading-8 text-moss">
        Generate a starting description for Etsy, Shopify, and print-on-demand products. Add real
        materials, sizing, care details, and shipping information before publishing.
      </p>
      <div className="mt-8">
        <ProductDescriptionGenerator />
      </div>
    </main>
  );
}
