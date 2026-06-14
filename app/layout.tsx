import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-line/80 bg-oat/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <Link href="/" className="text-lg font-black tracking-normal text-ink">
              MGPod Reviews
            </Link>
            <nav className="flex items-center gap-5 text-sm font-semibold text-moss">
              <Link href="/articles">Articles</Link>
              <Link href="/tools">Tools</Link>
              <Link href="/methodology">Methodology</Link>
              <Link href="/legal/affiliate-disclosure">Disclosure</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="mt-16 border-t border-line bg-white/60">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 text-sm text-moss md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <p className="font-bold text-ink">MGPod Reviews</p>
              <p className="mt-2 max-w-md">
                Trend-led buyer guides and affiliate reviews for software, creator tools, commerce
                platforms, and high-intent digital products.
              </p>
            </div>
            <div className="grid gap-2">
              <Link href="/legal/privacy">Privacy Policy</Link>
              <Link href="/legal/affiliate-disclosure">Affiliate Disclosure</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <p>
              Some links may be affiliate links. We may earn a commission if you buy through them,
              at no extra cost to you. Recommendations are written around buyer fit, source signals,
              and clear limitations.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
