import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { ToolCard } from "@/components/ToolCard";
import { articles } from "@/data/articles";
import { tools } from "@/data/tools";

export default function HomePage() {
  const featuredArticles = articles.slice(0, 3);
  const featuredTools = tools.slice(0, 3);

  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="text-sm font-black uppercase text-clay">AI tools for ecommerce sellers</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-ink md:text-6xl">
            Choose better software for Etsy and Shopify workflows.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-moss">
            Practical reviews, comparison pages, and free generators for sellers who want faster
            listings, cleaner product pages, and smarter marketing systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/articles/best-ai-tools-for-etsy-sellers"
              className="inline-flex min-h-11 items-center rounded-md bg-clay px-5 py-2 text-sm font-bold text-white shadow-soft"
            >
              Start with top tools
            </Link>
            <Link
              href="/tools/product-description-generator"
              className="inline-flex min-h-11 items-center rounded-md border border-line bg-white px-5 py-2 text-sm font-bold text-ink"
            >
              Try free generator
            </Link>
          </div>
        </div>
        <div className="rounded-lg border border-line bg-white p-5 shadow-soft">
          <p className="text-sm font-black uppercase text-clay">Featured comparison</p>
          <h2 className="mt-3 text-2xl font-black text-ink">Shopify vs Etsy for Beginners</h2>
          <p className="mt-3 text-sm leading-6 text-moss">
            Marketplace demand or owned storefront? Start with the tradeoffs before paying for
            tools, themes, or ads.
          </p>
          <Link
            href="/articles/shopify-vs-etsy-for-beginners"
            className="mt-5 inline-flex min-h-11 items-center rounded-md bg-ink px-4 py-2 text-sm font-bold text-white"
          >
            Read comparison
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="text-sm font-black uppercase text-clay">Latest guides</p>
            <h2 className="mt-2 text-3xl font-black text-ink">Start with high-intent pages</h2>
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
          <p className="text-sm font-black uppercase text-clay">Tool directory</p>
          <h2 className="mt-2 text-3xl font-black text-ink">Recommended ecommerce stack</h2>
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
