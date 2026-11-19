// Generates per-route HTML (so /about, /contact etc. open directly with correct <head> metadata),
// plus sitemap.xml, robots.txt and SPA fallbacks for common hosts.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { loadEnv } from 'vite'

const env = loadEnv('production', process.cwd(), 'VITE_')
const site = (env.VITE_SITE_URL || process.env.VITE_SITE_URL || 'https://www.example.com').replace(/\/$/, '')
const seo = JSON.parse(readFileSync('src/config/seo.json', 'utf8'))
const base = readFileSync('dist/index.html', 'utf8')
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

for (const [route, m] of Object.entries(seo.routes)) {
  const url = site + (route === '/' ? '/' : route)
  const image = site + seo.ogImage
  let html = base
    .replace(/<title>.*?<\/title>/, `<title>${esc(m.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*"/, `$1${esc(m.description)}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${esc(m.title)}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${esc(m.description)}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:image" content=")[^"]*"/, `$1${image}"`)
    .replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${esc(m.title)}"`)
    .replace(/(<meta name="twitter:description" content=")[^"]*"/, `$1${esc(m.description)}"`)
    .replace(/(<meta name="twitter:image" content=")[^"]*"/, `$1${image}"`)
  if (route === '/') writeFileSync('dist/index.html', html)
  else { mkdirSync(`dist${route}`, { recursive: true }); writeFileSync(`dist${route}/index.html`, html) }
}

const lastmod = new Date().toISOString().slice(0, 10)
writeFileSync('dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  Object.keys(seo.routes).map((r) => `  <url><loc>${site}${r === '/' ? '/' : r}</loc><lastmod>${lastmod}</lastmod></url>`).join('\n') + `\n</urlset>\n`)
writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`)

// Unknown URLs: serve the app shell (client-side 404 page).
writeFileSync('dist/_redirects', '/* /index.html 200\n') // Netlify / Cloudflare Pages
writeFileSync('dist/vercel.json', JSON.stringify({ cleanUrls: true, rewrites: [{ source: '/(.*)', destination: '/index.html' }] }, null, 2))
console.log(`postbuild: ${Object.keys(seo.routes).length} routes, site URL ${site}`)
