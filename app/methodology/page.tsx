import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Review Methodology",
  description:
    "How MGPod Reviews evaluates trending products, affiliate offers, customer feedback, and buyer-intent keywords."
};

export default function MethodologyPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12">
      <p className="text-sm font-black uppercase text-clay">Editorial standards</p>
      <h1 className="mt-3 text-4xl font-black leading-tight text-ink md:text-5xl">
        How MGPod evaluates trending products and affiliate offers
      </h1>
      <p className="mt-5 text-lg leading-8 text-moss">
        MGPod is built as a buyer-intent review site. We prioritize products that already show
        demand through search behavior, social discussion, marketplace adoption, customer feedback,
        and clear commercial intent.
      </p>

      <section className="prose-content mt-8 rounded-lg border border-line bg-white p-6 shadow-soft">
        <h2>1. Trend and keyword signals</h2>
        <p>
          We look for products and categories with durable search demand, rising interest, or
          consistent buyer-intent keywords. Useful signals include Google Trends, Google Search
          Console, keyword tools, YouTube search suggestions, Reddit discussions, marketplace
          rankings, and affiliate network popularity.
        </p>

        <h2>2. Customer feedback signals</h2>
        <p>
          We do not copy customer reviews into articles. Instead, we summarize recurring public
          feedback patterns such as ease of use, pricing concerns, support quality, feature gaps,
          onboarding friction, and common reasons buyers recommend or leave a product.
        </p>

        <h2>3. Video and demo evidence</h2>
        <p>
          Product pages may reference official demos, YouTube walkthroughs, launch videos, and
          credible third-party tutorials when available. Video proof helps readers see the product
          before clicking an affiliate link.
        </p>

        <h2>4. Affiliate disclosure</h2>
        <p>
          Some links are affiliate links. We may earn a commission when readers buy through those
          links. Commission potential does not override buyer fit, limitations, or competing
          alternatives.
        </p>

        <h2>5. What we avoid</h2>
        <ul>
          <li>Fake first-hand claims when a product has not been tested directly.</li>
          <li>Copied reviews, copied vendor copy, or unsupported earnings promises.</li>
          <li>Artificial urgency, fake discounts, or claims that a tool guarantees results.</li>
          <li>Ranking products only by commission instead of buyer fit and demand quality.</li>
        </ul>
      </section>
    </main>
  );
}
