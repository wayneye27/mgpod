import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AffiliateButton } from "@/components/AffiliateButton";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ProductDescriptionGenerator } from "@/components/Generator";
import { articles } from "@/data/articles";
import { getArticle, getFeaturedTools, getTool } from "@/lib/content";
import { site } from "@/lib/site";

type Params = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/articles/${article.slug}`
    }
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const featuredTools = getFeaturedTools(article);
  const reviewedTool = article.review ? getTool(article.review.productSlug) : undefined;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    author: {
      "@type": "Organization",
      name: site.author
    }
  };

  return (
    <main className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-[minmax(0,1fr)_320px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="min-w-0">
        <p className="text-sm font-black uppercase text-clay">{article.category}</p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-ink md:text-5xl">
          {article.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-moss">{article.description}</p>
        <p className="mt-3 text-sm font-semibold text-moss">
          Updated {article.publishedAt} / {article.readingTime}
        </p>
        {article.review && reviewedTool && (
          <div className="mt-6 flex flex-wrap items-center gap-3 rounded-lg border border-line bg-mint p-4">
            <p className="text-sm font-bold text-ink">
              Affiliate-ready link: /go/{reviewedTool.affiliateSlug}
            </p>
            <AffiliateButton slug={reviewedTool.affiliateSlug} label={`Visit ${reviewedTool.name}`} />
          </div>
        )}

        <div className="prose-content mt-8 rounded-lg border border-line bg-white p-6 shadow-soft">
          {article.review && reviewedTool ? (
            <>
              <h2>Quick verdict</h2>
              <p>{article.review.verdict}</p>
              <h2>Who should use {reviewedTool.name}?</h2>
              <ul>
                {article.review.bestFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h2>Who should skip it?</h2>
              <ul>
                {article.review.notFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h2>Why this offer can convert</h2>
              <p>{article.review.whyItConverts}</p>
              {(article.review.trendSignals ||
                article.review.feedbackSources ||
                article.review.videoSources) && (
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {article.review.trendSignals && (
                    <section className="rounded-lg border border-line bg-oat p-4">
                      <h2 className="mt-0 text-lg">Trend signals</h2>
                      <ul>
                        {article.review.trendSignals.map((signal) => (
                          <li key={signal}>{signal}</li>
                        ))}
                      </ul>
                    </section>
                  )}
                  {article.review.feedbackSources && (
                    <section className="rounded-lg border border-line bg-oat p-4">
                      <h2 className="mt-0 text-lg">Feedback to verify</h2>
                      <ul>
                        {article.review.feedbackSources.map((source) => (
                          <li key={source}>{source}</li>
                        ))}
                      </ul>
                    </section>
                  )}
                  {article.review.videoSources && (
                    <section className="rounded-lg border border-line bg-oat p-4">
                      <h2 className="mt-0 text-lg">Video proof</h2>
                      <ul>
                        {article.review.videoSources.map((source) => (
                          <li key={source}>{source}</li>
                        ))}
                      </ul>
                    </section>
                  )}
                </div>
              )}
              <h2>Recommended stack</h2>
              <ComparisonTable tools={featuredTools} />
              {article.review.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  <p>{section.body}</p>
                </section>
              ))}
              <div className="mt-8 rounded-lg bg-mint p-5">
                <h2 className="mt-0">Affiliate link note</h2>
                <p>{article.review.commissionNote}</p>
                <div className="mt-4">
                  <AffiliateButton
                    slug={reviewedTool.affiliateSlug}
                    label={`Visit ${reviewedTool.name}`}
                  />
                </div>
              </div>
              <h2>FAQ</h2>
              {article.review.faqs.map((faq) => (
                <section key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </section>
              ))}
            </>
          ) : (
            <>
              <h2>Quick verdict</h2>
              <p>
                The best tool depends on your current bottleneck. New sellers usually need better
                product photos, clearer descriptions, and a repeatable keyword workflow before they
                need a large software stack.
              </p>
              <h2>Recommended tools</h2>
              <ComparisonTable tools={featuredTools} />
              <h2>How to choose</h2>
              <p>
                Start with the task that directly affects revenue: listing clarity, buyer trust,
                traffic quality, or repeat purchase automation. Avoid paying for overlapping tools
                until one workflow is consistently producing sales or measurable time savings.
              </p>
              <ul>
                <li>Pick design tools when visuals are slowing down listing production.</li>
                <li>Pick SEO tools when you already have products but weak search visibility.</li>
                <li>Pick email tools when you own the customer relationship through a store.</li>
              </ul>
              <h2>FAQ</h2>
              <h3>Should new sellers use AI for every listing?</h3>
              <p>
                AI is best used for drafts, variations, and checklists. Final copy should still
                include accurate product details, materials, sizing, shipping notes, and real
                customer language.
              </p>
              <h3>Are affiliate links included?</h3>
              <p>
                Yes. Some outbound links may be affiliate links. Our recommendations should be
                checked against your own budget, workflow, and current product needs.
              </p>
            </>
          )}
        </div>

        {article.slug.includes("product-description") && (
          <div className="mt-8">
            <ProductDescriptionGenerator />
          </div>
        )}
      </article>

      <aside className="h-fit rounded-lg border border-line bg-mint p-5">
        <p className="text-sm font-black uppercase text-clay">Disclosure</p>
        <p className="mt-3 text-sm leading-6 text-moss">
          We may earn commissions from some links. We aim to explain fit, tradeoffs, and useful
          alternatives so readers can make their own decision.
        </p>
      </aside>
    </main>
  );
}
