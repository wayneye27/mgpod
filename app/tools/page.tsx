import type { Metadata } from "next";
import { ProductDescriptionGenerator } from "@/components/Generator";
import { ToolCard } from "@/components/ToolCard";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Tools",
  description: "A curated directory of ecommerce and AI tools for online sellers."
};

export default function ToolsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="text-4xl font-black text-ink">Tool Directory</h1>
      <p className="mt-3 max-w-2xl text-moss">
        Compare ecommerce platforms, AI writing tools, SEO software, image tools, and marketing
        systems for seller workflows.
      </p>
      <div className="mt-8">
        <ProductDescriptionGenerator />
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </main>
  );
}
