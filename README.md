# Toosie · Web3 portfolio

Next.js 15 (App Router) + TypeScript, Motion for animation, Lenis for smooth scrolling.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # TypeScript check
npm run build && npm start
```

## Before you deploy

1. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your real domain. It drives the canonical URL, sitemap, robots and social cards.
2. Deploy to Vercel (import the repo, add the same env variable).

## Where things live

| What | File |
| --- | --- |
| Handles, title, description (SEO) | `src/lib/site.ts` |
| All text, links, numbers, threads | `src/data/content.ts` |
| Sections | `src/components/*.tsx` |
| Styling and dark/light themes | `src/app/globals.css` |
| Images | `public/img/` |

To add a thread, add one line to the `threads` list in `content.ts`. To swap a screenshot or logo, replace the file in `public/img/` with the same name.

## SEO included

Metadata API (title template, canonical, Open Graph, Twitter card), generated social image, `sitemap.xml`, `robots.txt`, JSON-LD `Person` schema, semantic headings, alt text on every image, `next/font` and `next/image` (AVIF/WebP, lazy loading).
