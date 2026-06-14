import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "Affiliate disclosure for MGPod Reviews."
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="text-4xl font-black text-ink">Affiliate Disclosure</h1>
      <section className="prose-content mt-6 rounded-lg border border-line bg-white p-6 shadow-soft">
        <p>
          Some links on MGPod Reviews are affiliate links. If you click a link and buy a product,
          we may earn a commission at no additional cost to you.
        </p>
        <p>
          Affiliate relationships do not guarantee a positive recommendation. Our pages should
          explain who a tool is for, where it may fall short, and what alternatives are worth
          considering.
        </p>
        <p>
          Always verify current pricing, features, terms, and refund policies on the product
          website before purchasing.
        </p>
      </section>
    </main>
  );
}
