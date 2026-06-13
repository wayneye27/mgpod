import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AffiliateButton } from "@/components/AffiliateButton";
import { tools } from "@/data/tools";
import { getTool } from "@/lib/content";

type Params = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) {
    return {};
  }

  return {
    title: `${tool.name} Review`,
    description: tool.description
  };
}

export default async function ToolPage({ params }: Params) {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-5 py-12">
      <p className="text-sm font-black uppercase text-clay">{tool.category}</p>
      <h1 className="mt-3 text-4xl font-black text-ink">{tool.name} Review</h1>
      <p className="mt-4 text-lg leading-8 text-moss">{tool.description}</p>
      <div className="mt-6">
        <AffiliateButton slug={tool.affiliateSlug} label={`Visit ${tool.name}`} />
      </div>
      <section className="prose-content mt-8 rounded-lg border border-line bg-white p-6 shadow-soft">
        <h2>Best for</h2>
        <p>{tool.bestFor}</p>
        <h2>Core features</h2>
        <ul>
          {tool.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <h2>Pricing note</h2>
        <p>
          {tool.pricing} Pricing changes often, so always verify current plans on the product
          website before purchasing.
        </p>
      </section>
    </main>
  );
}
