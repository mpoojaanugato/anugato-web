# anugato-web
anugato-web/
├── app/
│   ├── page.tsx                  # Home
│   ├── features/page.tsx
│   ├── pricing/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── resources/
│   │   ├── page.tsx               # Blog listing
│   │   └── [slug]/page.tsx        # Blog post detail
│   ├── admin/
│   │   ├── login/page.tsx
│   │   └── posts/page.tsx         # Minimal CMS, Supabase-auth protected
│   ├── api/
│   │   ├── lead/route.ts          # POST — contact/demo form
│   │   └── newsletter/route.ts    # POST — newsletter signup
│   ├── sitemap.ts                 # Auto-generated sitemap
│   ├── robots.ts
│   └── layout.tsx                 # Header, Footer, GTM script
├── components/
│   ├── ui/                        # Button, Card, Input, Badge, Pill
│   ├── layout/                    # Header, Footer, Nav
│   ├── sections/                  # Hero, StatsBand, ProcessRail, FeatureGrid,
│   │                               #   TemplatesGrid, IntegrationsStrip, CtaBand
│   └── forms/                     # ContactForm, NewsletterForm
├── lib/
│   ├── supabase/
│   │   ├── client.ts               # browser client (anon key)
│   │   └── server.ts               # server client (service role, server-only)
│   ├── analytics.ts                 # GA4 event helper (trackEvent)
│   └── validation.ts                # zod schemas for form input
├── styles/
│   └── tokens.css                   # design tokens as CSS variables
├── public/
├── .env.example
└── next.config.js
```
