import Link from "next/link";
import type { Tool } from "@/data/tools";
import { AffiliateButton } from "@/components/AffiliateButton";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <article className="rounded-lg border border-line bg-white p-5 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase text-clay">{tool.category}</p>
          <h3 className="mt-2 text-xl font-black text-ink">
            <Link href={`/tools/${tool.slug}`}>{tool.name}</Link>
          </h3>
        </div>
        <span className="rounded-md bg-mint px-2.5 py-1 text-sm font-bold text-moss">
          {tool.rating.toFixed(1)}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-moss">{tool.description}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={`/tools/${tool.slug}`}
          className="inline-flex min-h-11 items-center rounded-md border border-line px-4 py-2 text-sm font-bold text-ink"
        >
          Read review
        </Link>
        <AffiliateButton slug={tool.affiliateSlug} label="Visit site" />
      </div>
    </article>
  );
}
