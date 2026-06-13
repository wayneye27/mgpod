import Link from "next/link";
import type { Article } from "@/data/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="block rounded-lg border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-moss/40"
    >
      <div className="flex items-center gap-2 text-xs font-bold uppercase text-clay">
        <span>{article.category}</span>
        <span aria-hidden="true">/</span>
        <span>{article.readingTime}</span>
      </div>
      <h2 className="mt-3 text-xl font-black leading-tight text-ink">{article.title}</h2>
      <p className="mt-3 text-sm leading-6 text-moss">{article.description}</p>
    </Link>
  );
}
