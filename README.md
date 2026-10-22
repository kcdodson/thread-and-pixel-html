# Thread & Pixel

Landing page for Thread & Pixel — a Chattanooga, TN based web design and development business serving local small businesses.

## Stack

Plain static HTML/CSS/JS — no build step, no dependencies. Every page is a standalone `index.html` (clean URLs, served by Cloudflare Pages).

- `assets/site.css` — the shared design system ("running stitch meets pixel grid": forest/copper/linen palette, Fraunces + Inter Tight + JetBrains Mono, dashed stitch details)
- `assets/site.js` — mobile menu, scroll reveals, and the Web3Forms contact-form handler (only runs on pages with `#contact-form`)
- `fonts/` — self-hosted, latin-subset WOFF2 (Fraunces roman/italic, Inter Tight, JetBrains Mono)
- `og-image.html` — source for `og-image.jpg` (1200×630 social share image; screenshot it at 1200×630 to regenerate)
- `404.html` — custom not-found page (also stops Cloudflare Pages from serving the homepage for unknown URLs)

## Contact Form

The contact form uses [Web3Forms](https://web3forms.com) for serverless form submission.

1. Sign up at [web3forms.com](https://web3forms.com) and get a free access key
2. Open `index.html` and find this line:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
   ```
3. Replace `YOUR_ACCESS_KEY` with your key

## Development

Open `index.html` directly in a browser, or use any static file server:

```bash
npx serve .
# or
python3 -m http.server
```

## Deployment

Drop `index.html` (and any assets) into any static host — Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.

## SEO

- One `<h1>` per page, unique title + meta description, canonical, Open Graph + Twitter tags on every page
- JSON-LD: homepage `@graph` with `Organization`, `WebSite`, `LocalBusiness`/`ProfessionalService` (name, phone, email, city-level address, `areaServed`, hours, service catalog), `WebPage`, `BreadcrumbList`, `FAQPage`; inner pages keep their `Service`/`BlogPosting`/`FAQPage` blocks and all have a `BreadcrumbList`
- `sitemap.xml` (all 23 indexable URLs; privacy and terms stay `noindex` as before) and `robots.txt`
- NAP is identical everywhere: **Thread & Pixel · Chattanooga, TN · (423) 314-5206 · hello@threadandpixel.com**
