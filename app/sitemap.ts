import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { tools } from "@/data/tools";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = [
    "",
    "/articles",
    "/tools",
    "/methodology",
    "/contact",
    "/legal/privacy",
    "/legal/affiliate-disclosure"
  ];
  const articlePages = articles.map((article) => `/articles/${article.slug}`);
  const toolPages = tools.map((tool) => `/tools/${tool.slug}`);

  return [...staticPages, ...articlePages, ...toolPages].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7
  }));
}
