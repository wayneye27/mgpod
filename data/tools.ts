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
  },
  {
    slug: "hostinger",
    name: "Hostinger",
    category: "Web hosting",
    description:
      "A budget-friendly hosting and website platform for creators, affiliates, and small business sites.",
    bestFor: "Affiliate publishers who want low-cost hosting, WordPress, and simple site setup.",
    pricing: "Paid hosting plans with frequent promotions.",
    affiliateSlug: "hostinger",
    rating: 4.4,
    features: ["Managed WordPress", "Website builder", "Domain options", "Email and SSL tools"]
  },
  {
    slug: "getresponse",
    name: "GetResponse",
    category: "Email marketing",
    description:
      "An email marketing and automation platform with newsletters, landing pages, funnels, and ecommerce flows.",
    bestFor: "Affiliate marketers and small stores building owned email lists.",
    pricing: "Paid plans; free or trial availability may vary.",
    affiliateSlug: "getresponse",
    rating: 4.3,
    features: ["Email campaigns", "Automation", "Landing pages", "Webinars and funnels"]
  },
  {
    slug: "fiverr",
    name: "Fiverr",
    category: "Freelance marketplace",
    description:
      "A marketplace for hiring freelancers for design, copywriting, SEO, video, store setup, and marketing tasks.",
    bestFor: "Solo operators who need affordable help producing marketing assets quickly.",
    pricing: "Marketplace pricing varies by freelancer and service.",
    affiliateSlug: "fiverr",
    rating: 4.2,
    features: ["Freelance services", "Fiverr Pro", "Logo Maker", "Marketing and design categories"]
  },
  {
    slug: "surfer-seo",
    name: "Surfer SEO",
    category: "Content SEO",
    description:
      "A content optimization platform for planning, writing, and improving pages around search intent.",
    bestFor: "Content teams and affiliate publishers improving review and comparison pages.",
    pricing: "Paid SaaS plans.",
    affiliateSlug: "surfer-seo",
    rating: 4.4,
    features: ["Content editor", "SERP analysis", "Keyword planning", "Content audit"]
  },
  {
    slug: "jasper",
    name: "Jasper",
    category: "AI writing",
    description:
      "An AI writing and brand content platform for marketing teams producing campaigns, ads, and long-form drafts.",
    bestFor: "Marketers who need repeatable brand-safe copy across multiple channels.",
    pricing: "Paid SaaS plans.",
    affiliateSlug: "jasper",
    rating: 4.2,
    features: ["AI copywriting", "Brand voice", "Campaign workflows", "Team collaboration"]
  },
  {
    slug: "omnisend",
    name: "Omnisend",
    category: "Email marketing",
    description:
      "An ecommerce marketing automation platform focused on email, SMS, forms, and retention campaigns.",
    bestFor: "Shopify and ecommerce sellers who want email/SMS automation without enterprise complexity.",
    pricing: "Free tier for small lists; paid plans scale by contacts and sends.",
    affiliateSlug: "omnisend",
    rating: 4.4,
    features: ["Email automation", "SMS campaigns", "Forms", "Ecommerce segmentation"]
  },
  {
    slug: "kit",
    name: "Kit",
    category: "Creator email",
    description:
      "An email platform for creators, newsletter operators, course sellers, and digital product businesses.",
    bestFor: "Creators turning social traffic into an owned audience and product sales.",
    pricing: "Free tier and paid plans may vary by subscriber count.",
    affiliateSlug: "kit",
    rating: 4.3,
    features: ["Creator newsletters", "Landing pages", "Automations", "Digital product support"]
  },
  {
    slug: "clickfunnels",
    name: "ClickFunnels",
    category: "Sales funnels",
    description:
      "A funnel-building platform for landing pages, sales pages, checkout flows, upsells, and online offers.",
    bestFor: "Marketers selling courses, coaching, templates, or high-margin digital offers.",
    pricing: "Paid SaaS plans.",
    affiliateSlug: "clickfunnels",
    rating: 4.1,
    features: ["Funnel builder", "Checkout pages", "Upsells", "Marketing workflows"]
  },
  {
    slug: "webflow",
    name: "Webflow",
    category: "Website builder",
    description:
      "A visual website builder and CMS for polished marketing sites, directories, and landing pages.",
    bestFor: "Creators and agencies who want design control without maintaining custom infrastructure.",
    pricing: "Free starter options and paid site/workspace plans.",
    affiliateSlug: "webflow",
    rating: 4.5,
    features: ["Visual builder", "CMS", "Hosting", "Landing pages"]
  },
  {
    slug: "grammarly",
    name: "Grammarly",
    category: "Writing assistant",
    description:
      "An AI writing assistant for improving clarity, correctness, tone, and business communication.",
    bestFor: "Affiliate publishers, sellers, and teams editing content before publication.",
    pricing: "Free plan available; paid plans add advanced writing features.",
    affiliateSlug: "grammarly",
    rating: 4.4,
    features: ["Grammar checks", "Tone suggestions", "AI writing help", "Team writing controls"]
  },
  {
    slug: "nordvpn",
    name: "NordVPN",
    category: "VPN",
    description:
      "A consumer VPN and privacy suite with apps across desktop, mobile, browser, TV, and router workflows.",
    bestFor: "Privacy-conscious users, travelers, streamers, and remote workers comparing premium VPNs.",
    pricing: "Paid subscription plans with frequent long-term promotions.",
    affiliateSlug: "nordvpn",
    rating: 4.5,
    features: ["Large server network", "Threat protection", "Meshnet", "Multi-platform apps"]
  },
  {
    slug: "surfshark",
    name: "Surfshark",
    category: "VPN",
    description:
      "A privacy and VPN product known for broad device coverage, security add-ons, and competitive multi-year pricing.",
    bestFor: "Households and budget-conscious users who need VPN coverage across many devices.",
    pricing: "Paid subscription plans with long-term discounts.",
    affiliateSlug: "surfshark",
    rating: 4.4,
    features: ["VPN", "Alternative ID", "Antivirus bundle", "Unlimited device positioning"]
  },
  {
    slug: "monday",
    name: "monday.com",
    category: "Work management",
    description:
      "A work management and CRM platform for projects, workflows, sales pipelines, and team collaboration.",
    bestFor: "Teams that want visual workflow management, automations, and flexible boards.",
    pricing: "Free and paid plans vary by seats and product line.",
    affiliateSlug: "monday",
    rating: 4.5,
    features: ["Boards", "Automations", "Dashboards", "CRM and work management products"]
  },
  {
    slug: "coursera",
    name: "Coursera",
    category: "Online learning",
    description:
      "An online learning marketplace with university courses, professional certificates, specializations, and degrees.",
    bestFor: "Career switchers and learners seeking recognized courses from universities and companies.",
    pricing: "Free course access and paid certificates/subscriptions vary by course.",
    affiliateSlug: "coursera",
    rating: 4.3,
    features: ["Professional certificates", "University courses", "Specializations", "Degrees"]
  },
  {
    slug: "bluehost",
    name: "Bluehost",
    category: "Web hosting",
    description:
      "A WordPress-focused hosting provider for blogs, small business sites, and beginner affiliate websites.",
    bestFor: "Beginners who want a mainstream WordPress hosting option with setup guidance.",
    pricing: "Paid hosting plans with promotional first-term pricing.",
    affiliateSlug: "bluehost",
    rating: 4.1,
    features: ["WordPress hosting", "Domain options", "SSL", "Site builder tools"]
  },
  {
    slug: "elementor",
    name: "Elementor",
    category: "Website builder",
    description:
      "A WordPress page builder and hosting ecosystem for landing pages, business websites, and visual site design.",
    bestFor: "WordPress users who want visual design control without coding each page.",
    pricing: "Free plugin plus paid Pro and hosting options.",
    affiliateSlug: "elementor",
    rating: 4.4,
    features: ["Visual builder", "Theme builder", "Templates", "WordPress integrations"]
  },
  {
    slug: "hubspot",
    name: "HubSpot",
    category: "CRM",
    description:
      "A CRM and marketing platform with free tools plus paid hubs for marketing, sales, service, CMS, and operations.",
    bestFor: "Small and mid-size businesses that want CRM, forms, email, and pipeline tracking in one ecosystem.",
    pricing: "Free CRM tools and paid hub plans.",
    affiliateSlug: "hubspot",
    rating: 4.5,
    features: ["CRM", "Email marketing", "Forms", "Sales pipeline", "Marketing automation"]
  },
  {
    slug: "teachable",
    name: "Teachable",
    category: "Online courses",
    description:
      "A platform for selling online courses, coaching, digital downloads, and creator education products.",
    bestFor: "Creators turning expertise into courses, workshops, and paid digital products.",
    pricing: "Paid plans; transaction fees and feature limits vary by plan.",
    affiliateSlug: "teachable",
    rating: 4.2,
    features: ["Course builder", "Checkout", "Coaching", "Digital downloads"]
  },
  {
    slug: "adobe-express",
    name: "Adobe Express",
    category: "Design tools",
    description:
      "A lightweight design and content creation tool for social graphics, short videos, flyers, and brand assets.",
    bestFor: "Creators and small businesses that want fast design assets in the Adobe ecosystem.",
    pricing: "Free and paid plans.",
    affiliateSlug: "adobe-express",
    rating: 4.3,
    features: ["Templates", "Quick video tools", "Brand kits", "Adobe asset ecosystem"]
  },
  {
    slug: "notion",
    name: "Notion",
    category: "Productivity",
    description:
      "A connected workspace for notes, docs, databases, wikis, projects, and lightweight team workflows.",
    bestFor: "Creators, students, teams, and founders organizing knowledge and project systems.",
    pricing: "Free and paid workspace plans.",
    affiliateSlug: "notion",
    rating: 4.5,
    features: ["Docs", "Databases", "Templates", "Projects", "AI add-ons"]
  }
];

export const categories = Array.from(new Set(tools.map((tool) => tool.category)));
