# Seller AI Tools Affiliate Site

A Next.js affiliate content site for AI tools, ecommerce software, comparison pages, and free seller utilities.

## What is included

- Next.js App Router project structure
- Tailwind CSS styling
- Article, tool, and affiliate data models
- `/go/[slug]` affiliate redirect route
- Article, tool, category, legal, and contact pages
- Sitemap and robots routes
- Free product description generator
- Example high-intent article pages

## Local setup

```bash
npm install
npm run dev
```

## Overseas deployment

This project is configured for Vercel hosting with `mgpod.com` as the canonical domain.
See [DEPLOYMENT.md](./DEPLOYMENT.md) for Alibaba Cloud, Cloudflare, Vercel, and Search Console steps.

Set the canonical domain before launch. The project defaults to `https://mgpod.com`, and you can
override it per environment:

```bash
NEXT_PUBLIC_SITE_URL=https://mgpod.com
```

## Launch checklist

- Verify the contact email before launch
- Add real affiliate URLs after approval
- Verify all pricing claims before publishing
- Connect Google Search Console and analytics
- Submit `https://your-domain.com/sitemap.xml`
- Add more original examples, screenshots, and hands-on notes to each review
