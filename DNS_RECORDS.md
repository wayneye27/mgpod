# DNS Records for mgpod.com

Use the exact records shown in Vercel after you add `mgpod.com` and `www.mgpod.com`.

Common Vercel records are:

```text
Type   Host   Value
A      @      76.76.21.21
CNAME  www    cname.vercel-dns.com
```

## Alibaba Cloud DNS Steps

1. Open Alibaba Cloud Domain Console.
2. Go to `mgpod.com`.
3. Open DNS management.
4. Add or update the root domain record:

```text
Type: A
Host: @
Value: 76.76.21.21
TTL: 10 minutes or default
```

5. Add or update the `www` record:

```text
Type: CNAME
Host: www
Value: cname.vercel-dns.com
TTL: 10 minutes or default
```

6. Return to Vercel and click verify.

## After DNS Works

Check:

```text
https://mgpod.com
https://www.mgpod.com
https://mgpod.com/sitemap.xml
https://mgpod.com/robots.txt
```

Submit sitemap to Google Search Console:

```text
https://mgpod.com/sitemap.xml
```
