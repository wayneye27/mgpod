import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { ToolCard } from "@/components/ToolCard";
import { articles } from "@/data/articles";
import { tools } from "@/data/tools";

export default function HomePage() {
  const featuredArticles = articles.filter((article) => article.review).slice(0, 6);
  const featuredTools = tools.slice(5, 11);

  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div>
          <p className="text-sm font-black uppercase text-clay">Trend-led affiliate research</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-ink md:text-6xl">
            Product reviews built around demand, proof, and buyer intent.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-moss">
            MGPod tracks high-intent product categories, compares affiliate offers, and publishes
            practical reviews for readers who want a confident purchase path instead of thin
            promotional lists.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/articles/shopify-review-for-affiliate-marketers"
              className="inline-flex min-h-11 items-center rounded-md bg-clay px-5 py-2 text-sm font-bold text-white shadow-soft"
            >
              Read top review
            </Link>
            <Link
              href="/methodology"
              className="inline-flex min-h-11 items-center rounded-md border border-line bg-white px-5 py-2 text-sm font-bold text-ink"
            >
              Review methodology
            </Link>
          </div>
        </div>
        <div className="rounded-lg border border-line bg-white p-6 shadow-soft">
          <p className="text-sm font-black uppercase text-clay">What we optimize for</p>
          <div className="mt-5 grid gap-4">
            {[
              ["Demand", "Google Trends, search intent, social discussion, and category momentum."],
              ["Proof", "Public customer feedback, support signals, demo videos, and product documentation."],
              ["Conversion", "Clear buyer fit, honest limitations, and affiliate links that match the reader's intent."]
            ].map(([label, copy]) => (
              <div key={label} className="border-t border-line pt-4 first:border-t-0 first:pt-0">
                <h2 className="text-lg font-black text-ink">{label}</h2>
                <p className="mt-1 text-sm leading-6 text-moss">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="text-sm font-black uppercase text-clay">Buyer-intent reviews</p>
            <h2 className="mt-2 text-3xl font-black text-ink">Reviews for products people already search for</h2>
          </div>
          <Link href="/articles" className="text-sm font-bold text-moss">
            View all
          </Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8">
        <div>
          <p className="text-sm font-black uppercase text-clay">Affiliate product desk</p>
          <h2 className="mt-2 text-3xl font-black text-ink">Products with strong commercial intent</h2>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>
    </main>
  );
}
