# Thread & Pixel

Landing page for Thread & Pixel — a Chattanooga, TN based web design and development business serving local small businesses.

## Stack

Single-file static site (`index.html`) with embedded CSS and vanilla JS. No build step, no dependencies.

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

- JSON-LD `LocalBusiness` schema
- Open Graph + Twitter Card meta tags
- Geo targeting meta tags
- Semantic HTML5 with proper heading hierarchy
- Sitemap link hint at `/sitemap.xml` (create separately)
