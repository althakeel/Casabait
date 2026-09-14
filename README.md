# Casa Bait Property Consultant Website

Production-ready marketing website for Casa Bait Property Consultant (Casa Bait Real Estate, RERA ORN 36486) — a Dubai real estate agency.

## Tech Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (via swappable Icon wrapper)
- Next.js Metadata API for SEO

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
npm start
```

Deploy to Vercel with zero configuration.

## Project Structure

```
src/
├── app/                  # Pages & routes (App Router)
│   ├── about/
│   ├── areas/
│   ├── blog/[slug]/
│   ├── contact/
│   ├── off-plan/
│   ├── properties/[slug]/
│   ├── services/
│   ├── api/contact/      # Contact form API route
│   ├── layout.tsx
│   ├── page.tsx          # Home
│   ├── sitemap.ts
│   └── robots.ts
├── components/           # Reusable UI components
├── data/                 # Dummy JSON-like data (properties, blog, areas, etc.)
└── lib/                  # Constants, SEO helpers, types
public/
├── manifest.json
└── favicon.ico
```

## Pre-Launch Checklist

- [ ] Replace CSS variables in `src/app/globals.css` with final brand colors
- [ ] Swap Lucide icons in `src/components/Icon.tsx` with final icon set
- [ ] Add final logo/wordmark (replace text "Casa Bait" in Header/Footer)
- [ ] Replace Unsplash/Pexels stock images with licensed property photography
- [ ] Add real testimonials (currently placeholder quotes)
- [ ] Update phone number, email, WhatsApp link, and office address in `src/lib/constants.ts`
- [ ] Embed Google Maps on Contact and Property detail pages
- [ ] Connect contact form to email service (Resend, SendGrid, etc.) in `src/app/api/contact/route.ts`
- [ ] Add real OG social share image at `public/og-image.jpg`
- [ ] Update `SITE_URL` in `src/lib/constants.ts` to production domain
