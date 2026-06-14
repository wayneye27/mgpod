import { NextResponse } from "next/server";
import { getAffiliateUrl } from "@/lib/affiliates";

type Params = {
  params: Promise<{ slug: string }>;
};

export async function GET(request: Request, { params }: Params) {
  const { slug } = await params;
  const targetUrl = getAffiliateUrl(slug, "mgpod_reviews");

  if (targetUrl === "#") {
    return NextResponse.json({ error: "Affiliate link not found" }, { status: 404 });
  }

  const { searchParams } = new URL(request.url);
  const ref = request.headers.get("referer") || "direct";

  console.info(
    JSON.stringify({
      event: "affiliate_click",
      slug,
      ref,
      page: searchParams.get("page"),
      at: new Date().toISOString()
    })
  );

  return NextResponse.redirect(targetUrl, 302);
}
