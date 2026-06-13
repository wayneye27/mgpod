import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";

type Params = {
  params: Promise<{ slug: string }>;
};

function normalize(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}

export function generateStaticParams() {
  const categories = Array.from(new Set(articles.map((article) => normalize(article.category))));
  return categories.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, " ")} Articles`,
    description: `Articles and tool recommendations in the ${slug.replace(/-/g, " ")} category.`
  };
}

export default async function CategoryPage({ params }: Params) {
  const { slug } = await params;
  const matches = articles.filter((article) => normalize(article.category) === slug);

  if (matches.length === 0) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="text-4xl font-black capitalize text-ink">{slug.replace(/-/g, " ")}</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {matches.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </main>
  );
}
