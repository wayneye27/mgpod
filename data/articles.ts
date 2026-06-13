export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  intent: "affiliate" | "comparison" | "tutorial";
  featuredTools: string[];
};

export const articles: Article[] = [
  {
    slug: "best-ai-tools-for-etsy-sellers",
    title: "Best AI Tools for Etsy Sellers",
    description:
      "A practical shortlist of AI and ecommerce tools for improving Etsy listings, visuals, SEO, and repeatable workflows.",
    category: "Etsy",
    publishedAt: "2026-06-13",
    readingTime: "8 min read",
    intent: "affiliate",
    featuredTools: ["canva", "semrush", "printify"]
  },
  {
    slug: "best-ai-product-description-generators",
    title: "Best AI Product Description Generators",
    description:
      "Compare tools and workflows for turning product notes into clear, conversion-focused ecommerce descriptions.",
    category: "AI writing",
    publishedAt: "2026-06-13",
    readingTime: "7 min read",
    intent: "affiliate",
    featuredTools: ["shopify", "semrush"]
  },
  {
    slug: "best-etsy-seo-tools",
    title: "Best Etsy SEO Tools for Keyword Research",
    description:
      "A seller-focused guide to choosing Etsy SEO tools and using keyword data without over-optimizing listings.",
    category: "SEO",
    publishedAt: "2026-06-13",
    readingTime: "9 min read",
    intent: "affiliate",
    featuredTools: ["semrush", "canva"]
  },
  {
    slug: "shopify-vs-etsy-for-beginners",
    title: "Shopify vs Etsy for Beginners",
    description:
      "A plain-English comparison for new sellers deciding between marketplace traffic and a standalone ecommerce store.",
    category: "Comparison",
    publishedAt: "2026-06-13",
    readingTime: "10 min read",
    intent: "comparison",
    featuredTools: ["shopify", "klaviyo", "printify"]
  },
  {
    slug: "how-to-write-etsy-product-descriptions-with-ai",
    title: "How to Write Etsy Product Descriptions with AI",
    description:
      "A repeatable workflow for writing useful, search-friendly Etsy product descriptions with AI assistance.",
    category: "Tutorial",
    publishedAt: "2026-06-13",
    readingTime: "6 min read",
    intent: "tutorial",
    featuredTools: ["canva", "semrush"]
  }
];
