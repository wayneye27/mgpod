"use client";

import { useMemo, useState } from "react";

export function ProductDescriptionGenerator() {
  const [product, setProduct] = useState("");
  const [audience, setAudience] = useState("");
  const [benefit, setBenefit] = useState("");

  const result = useMemo(() => {
    if (!product.trim()) {
      return "";
    }

    const buyer = audience.trim() || "busy online shoppers";
    const outcome = benefit.trim() || "make everyday work easier";

    return `${product.trim()} is designed for ${buyer} who want to ${outcome}. It combines practical details with a clean, gift-ready presentation, making it easy to understand what the item does, who it is for, and why it is useful. Add material, size, care, and shipping details before publishing.`;
  }, [audience, benefit, product]);

  return (
    <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
      <h2 className="text-xl font-black text-ink">Free Product Description Generator</h2>
      <div className="mt-5 grid gap-4">
        <label className="grid gap-2 text-sm font-bold text-ink">
          Product name
          <input
            value={product}
            onChange={(event) => setProduct(event.target.value)}
            className="min-h-11 rounded-md border border-line bg-oat px-3 font-normal outline-none focus:border-moss"
            placeholder="Personalized ceramic mug"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Target buyer
          <input
            value={audience}
            onChange={(event) => setAudience(event.target.value)}
            className="min-h-11 rounded-md border border-line bg-oat px-3 font-normal outline-none focus:border-moss"
            placeholder="gift buyers, teachers, small business owners"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Main benefit
          <input
            value={benefit}
            onChange={(event) => setBenefit(event.target.value)}
            className="min-h-11 rounded-md border border-line bg-oat px-3 font-normal outline-none focus:border-moss"
            placeholder="create a thoughtful personalized gift"
          />
        </label>
      </div>
      {result && (
        <div className="mt-5 rounded-md bg-mint p-4 text-sm leading-6 text-ink">
          <p>{result}</p>
        </div>
      )}
    </section>
  );
}
