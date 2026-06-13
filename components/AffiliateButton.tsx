import Link from "next/link";

export function AffiliateButton({ slug, label }: { slug: string; label: string }) {
  return (
    <Link
      href={`/go/${slug}`}
      rel="sponsored nofollow"
      className="inline-flex min-h-11 items-center justify-center rounded-md bg-clay px-4 py-2 text-sm font-bold text-white shadow-soft transition hover:brightness-95"
    >
      {label}
    </Link>
  );
}
