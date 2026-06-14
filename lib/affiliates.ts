import affiliates from "@/data/affiliates.json";

export type Affiliate = {
  slug: string;
  name: string;
  targetUrl: string;
  network: string;
  commission: string;
  notes: string;
};

export function getAffiliate(slug: string): Affiliate | undefined {
  return (affiliates as Affiliate[]).find((affiliate) => affiliate.slug === slug);
}

export function getAffiliateUrl(slug: string, source = "site"): string {
  const affiliate = getAffiliate(slug);

  if (!affiliate) {
    return "#";
  }

  const url = new URL(affiliate.targetUrl);
  url.searchParams.set("utm_source", source);
  url.searchParams.set("utm_medium", "affiliate");
  url.searchParams.set("utm_campaign", "mgpod_reviews");

  return url.toString();
}
