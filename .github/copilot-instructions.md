# SigDaddy Marketing Website

Static marketing site for sigdaddy.com.

## Umbrella workspace context
This repo lives inside the SigDaddy umbrella workspace (its own git repo, one level up). When working from the umbrella root, read `../agents.md` (product context, deployment matrix, brand rules) and `../.github/copilot-instructions.md` (session-start protocol, writing style, autonomy and scope rules) first — they apply here too.

- **Brand:** palette, typography, and logo rules are defined in `../agents.md` (Brand & Visual Identity). Assets in `../Brand/`.
- **Deploy warning:** pushing to `main` triggers a production deploy to Azure Static Web Apps via GitHub Actions. Land changes via PR.
- **Scratch files:** go in `tmp/` (gitignored) with a `tmp-` prefix, never the repo root. Recycle when done (from the umbrella: `..\scripts\tools\recycle.ps1`).

## Architecture

| Aspect | Details |
|--------|---------|
| Framework | Astro 5.0 (static site generator) |
| CSS | Tailwind CSS v4 (via Vite plugin) |
| Output | Static HTML (pre-rendered) |
| Hosting | Azure Static Web Apps |
| CI/CD | GitHub Actions — push to `main` triggers deploy |
| Domain | `www.sigdaddy.com` |

## Pages

- `src/pages/index.astro` — Marketing homepage (hero, features, CTA → portal.sigdaddy.com)
- `src/pages/privacy.astro` — Privacy policy
- `src/pages/terms.astro` — Terms of service

## Layout

Single layout: `src/layouts/Base.astro` — head (meta, OG tags, canonical), global CSS, slot.

## Styling

Tailwind CSS v4 via `@tailwindcss/vite` plugin. Brand colors as CSS custom properties in `src/styles/global.css`. Custom animations: `animate-float`, `animate-float-delay`, fade-up reveals.

## Build & Deploy

```bash
npm run dev      # Local dev server
npm run build    # Static build to dist/
npm run preview  # Preview built site
```

Push to `main` → Azure Static Web Apps deploys automatically (atomic swap, zero downtime).

## Public Assets

- Logo variants in `public/` (colour, white)
- `staticwebapp.config.json` — SPA fallback, security headers (HSTS, CSP, Frame-Options), caching rules
- Auto-generated `sitemap.xml` via `@astrojs/sitemap`

## Conventions

- Page-based routing (Astro auto-routes `src/pages/*.astro`)
- Minimal site — pages and layouts only, no component library
- Inline Tailwind utilities in templates
- Brand gradient: `#59A52C` → `#6FCA3A`
- Font: Inter
