# Max Farnon Digital

The public marketing site for **Max Farnon Digital**, a digital consultancy and AI solutions agency. Static React application (React 19 + Vite + Tailwind 4), deployable to GitHub Pages, Vercel, or Netlify with no backend.

## Pages

| Route | Purpose |
|---|---|
| `/` | Homepage: hero, three service pillars, social proof, CTA |
| `/services` | Three services with "Best for" summaries |
| `/about` | Max's story, the AI pivot, and core values |
| `/portfolio` | Case Studies: Empower Over 50, Second Act Navigator, placeholder |
| `/blog` | Journal listing with featured post and category filter |
| `/blog/:slug` | Individual post template (three placeholder posts included) |
| `/contact` | Contact form and Calendly embed |
| `*` | Branded 404 page |

## Local development

```bash
pnpm install
pnpm dev       # starts Vite dev server on http://localhost:3000
pnpm build     # produces static output in dist/public
pnpm preview   # preview the built site
```

## Configuration

All site-wide placeholders live in `client/src/lib/site.ts`. Update these before launch:

- `email`: contact email
- `calendlyUrl`: your Calendly scheduling link (also used inside the embed)
- `linkedinUrl`, `youtubeUrl`, `twitterUrl`: social profiles
- `empowerOver50Url`: link to Empower Over 50
- `formspreeEndpoint`: Formspree form endpoint; while this still contains `your-form-id`, the contact form runs in demo mode and will not send a real email

### Google Analytics (GA4)

GA4 is wired as a commented block in `client/index.html`. Replace `G-XXXXXXXXXX` with your GA4 Measurement ID and uncomment the block before deploying.

### SEO

- Per-page titles, descriptions, Open Graph and Twitter tags are applied via the `useMeta` hook.
- `client/public/robots.txt` and `client/public/sitemap.xml` are included. Update the domain inside both if you launch on a different host.
- `client/public/og-image.svg` is a simple social preview. Swap in a bespoke image when available.

### Calendly

The contact page embeds `SITE.calendlyUrl` in an iframe. The embed will automatically pick up the real URL once `site.ts` is updated.

### Images

The design is intentionally image-light. All visible placeholders are labeled (About page headshot, blog featured artwork, and client logo slots) so they can be swapped for real assets without code changes.

## Deployment

This project builds a fully static site. The production output lives in `dist/public` after `pnpm build`.

### Vercel

1. Import the repo into Vercel.
2. Framework preset: **Vite**.
3. Build command: `pnpm build`.
4. Output directory: `dist/public`.

### Netlify

1. New site from Git, point to the repo.
2. Build command: `pnpm build`.
3. Publish directory: `dist/public`.
4. Add a `_redirects` file if you want SPA fallback, for example:
   ```
   /*  /index.html  200
   ```

### GitHub Pages

1. Build locally: `pnpm build`.
2. Deploy `dist/public` to the `gh-pages` branch (for example via `gh-pages` npm package or a GitHub Action).
3. Include a `404.html` that mirrors `index.html` to support client-side routing under GitHub Pages.

## Content management

Blog posts currently live as typed data in `client/src/lib/posts.ts`. The `Post` type is intentionally compatible with a future migration to markdown or a headless CMS; swap the data loader without touching the UI.

## Brand

- Palette: **Navy** (`#0E2A47`), **Ivory** (`#FAF7F1`), **Gold accent** (`#B8862F`).
- Typography: **Fraunces** (display serif) + **Inter** (body sans).
- Tone: editorial, restrained, operator-first. No buzzwords.
