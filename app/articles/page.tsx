import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Articles",
  description: "AI tool reviews, ecommerce tutorials, and software comparisons for online sellers."
};

export default function ArticlesPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="text-4xl font-black text-ink">Articles</h1>
      <p className="mt-3 max-w-2xl text-moss">
        Review pages, comparison guides, and tutorials built around buyer-intent search queries.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </main>
  );
}
