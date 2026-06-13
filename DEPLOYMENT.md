# Overseas Deployment Plan for mgpod.com

Use this setup:

- Domain registrar: Alibaba Cloud
- DNS provider: Cloudflare or Alibaba Cloud DNS
- Hosting: Vercel
- Primary market: United States, Canada, United Kingdom, Australia
- Canonical domain: `https://mgpod.com`

## Option A: Keep DNS at Alibaba Cloud

1. Create a Vercel account.
2. Import this project from GitHub.
3. Add this environment variable in Vercel:

```bash
NEXT_PUBLIC_SITE_URL=https://mgpod.com
```

4. Add both domains in Vercel:

```text
mgpod.com
www.mgpod.com
```

5. In Alibaba Cloud DNS, add the records shown by Vercel.
   Vercel usually asks for:

```text
Type: A
Host: @
Value: 76.76.21.21

Type: CNAME
Host: www
Value: cname.vercel-dns.com
```

Always follow the exact values shown inside your Vercel domain settings.

## Option B: Move DNS to Cloudflare

1. Add `mgpod.com` to Cloudflare.
2. Cloudflare will show two nameservers.
3. In Alibaba Cloud domain settings, change the domain nameservers to Cloudflare's nameservers.
4. Wait for propagation.
5. Add the Vercel DNS records in Cloudflare.
6. Keep Cloudflare SSL mode as `Full`.

Recommended Cloudflare settings:

- SSL/TLS: Full
- Always Use HTTPS: On
- Auto Minify: Off for now
- Bot Fight Mode: Off for now
- Cache Rules: leave default until launch is stable

## Vercel Build Settings

Vercel should auto-detect Next.js.

```text
Install Command: npm install
Build Command: npm run build
Output: .next
Node.js: 20 or newer
```

## After Deployment

Check these URLs:

```text
https://mgpod.com
https://mgpod.com/articles
https://mgpod.com/tools
https://mgpod.com/sitemap.xml
https://mgpod.com/robots.txt
https://mgpod.com/legal/affiliate-disclosure
```

Then submit the sitemap in Google Search Console:

```text
https://mgpod.com/sitemap.xml
```

## Affiliate Readiness

Before applying to affiliate networks:

- Publish at least 10-15 useful articles.
- Keep the affiliate disclosure visible.
- Replace placeholder affiliate URLs with approved tracking links.
- Add original screenshots, examples, and buyer notes.
- Avoid fake first-hand claims.
