export type Tool = {
  slug: string;
  name: string;
  category: string;
  description: string;
  bestFor: string;
  pricing: string;
  affiliateSlug: string;
  rating: number;
  features: string[];
};

export const tools: Tool[] = [
  {
    slug: "canva",
    name: "Canva",
    category: "Product images",
    description:
      "A design platform for creating product mockups, listing images, Pinterest pins, and short promotional graphics.",
    bestFor: "Etsy and Shopify sellers who need polished visuals without a design team.",
    pricing: "Free plan available; paid plans vary by region.",
    affiliateSlug: "canva",
    rating: 4.6,
    features: ["Product image templates", "AI design tools", "Brand kits", "Social export formats"]
  },
  {
    slug: "shopify",
    name: "Shopify",
    category: "Store builder",
    description:
      "A hosted ecommerce platform for launching and managing online stores, payments, products, and apps.",
    bestFor: "Sellers who want more control than a marketplace-only business.",
    pricing: "Paid plans with trials or promotions depending on region.",
    affiliateSlug: "shopify",
    rating: 4.7,
    features: ["Hosted storefront", "App marketplace", "Payments", "Inventory management"]
  },
  {
    slug: "klaviyo",
    name: "Klaviyo",
    category: "Email marketing",
    description:
      "An ecommerce-focused email and SMS marketing platform for automated flows, segmentation, and campaigns.",
    bestFor: "Stores ready to improve repeat purchases and abandoned cart recovery.",
    pricing: "Free tier for small lists; paid plans scale by contacts.",
    affiliateSlug: "klaviyo",
    rating: 4.5,
    features: ["Email flows", "Segmentation", "Revenue attribution", "SMS options"]
  },
  {
    slug: "semrush",
    name: "Semrush",
    category: "SEO",
    description:
      "A search marketing suite for keyword research, competitor analysis, audits, and content planning.",
    bestFor: "Sellers and content teams investing in organic search.",
    pricing: "Paid SaaS plans.",
    affiliateSlug: "semrush",
    rating: 4.4,
    features: ["Keyword research", "Site audits", "Competitor reports", "Content planning"]
  },
  {
    slug: "printify",
    name: "Printify",
    category: "Print on demand",
    description:
      "A print-on-demand network that connects ecommerce stores with print providers for custom products.",
    bestFor: "Etsy and Shopify sellers testing products without holding inventory.",
    pricing: "Free plan available; premium plans may reduce product costs.",
    affiliateSlug: "printify",
    rating: 4.3,
    features: ["Product catalog", "Provider network", "Store integrations", "Mockups"]
  }
];

export const categories = Array.from(new Set(tools.map((tool) => tool.category)));
