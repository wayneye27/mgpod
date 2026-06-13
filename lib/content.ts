import { articles, type Article } from "@/data/articles";
import { tools, type Tool } from "@/data/tools";

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getTool(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getFeaturedTools(article: Article): Tool[] {
  return article.featuredTools
    .map((slug) => getTool(slug))
    .filter((tool): tool is Tool => Boolean(tool));
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category.toLowerCase() === category.toLowerCase());
}
