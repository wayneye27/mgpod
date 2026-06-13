import type { Tool } from "@/data/tools";
import { AffiliateButton } from "@/components/AffiliateButton";

export function ComparisonTable({ tools }: { tools: Tool[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-line bg-white">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-mint text-ink">
          <tr>
            <th className="p-4 font-black">Tool</th>
            <th className="p-4 font-black">Best for</th>
            <th className="p-4 font-black">Pricing</th>
            <th className="p-4 font-black">Rating</th>
            <th className="p-4 font-black">Link</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool) => (
            <tr key={tool.slug} className="border-t border-line align-top">
              <td className="p-4 font-bold text-ink">{tool.name}</td>
              <td className="p-4 text-moss">{tool.bestFor}</td>
              <td className="p-4 text-moss">{tool.pricing}</td>
              <td className="p-4 text-moss">{tool.rating.toFixed(1)}</td>
              <td className="p-4">
                <AffiliateButton slug={tool.affiliateSlug} label="Visit site" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
