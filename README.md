# DigitWallet website

React + Vite + TypeScript + Tailwind v4 + Framer Motion + Lucide.

## Run
    npm install
    npm run dev        # local dev
    npm run build      # typecheck + build + postbuild (per-route HTML, sitemap.xml, robots.txt)
    npm run preview    # serve dist/

## Configure (copy .env.example to .env.local)
VITE_SITE_URL (canonical/sitemap/OG), VITE_SUPPORT_EMAIL, VITE_PRIVACY_EMAIL,
VITE_CONTACT_ENDPOINT (e.g. Formspree), VITE_APP_STORE_URL, VITE_GOOGLE_PLAY_URL.
Empty values render visible placeholders / "Coming soon"; nothing is faked.

## Privacy Policy text
Paste the authoritative wording into `src/content/privacyPolicy.ts` (currently placeholders).

## Deploy
Upload `dist/` to Netlify, Vercel or Cloudflare Pages. `dist/about/index.html` etc. make
direct route loads work; `_redirects` / `vercel.json` handle other URLs. Set VITE_SITE_URL before building.
