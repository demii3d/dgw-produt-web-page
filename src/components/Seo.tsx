import { useEffect } from 'react'
import seo from '../config/seo.json'
import { site } from '../config/site'

type Props = { path: string; noindex?: boolean; jsonLd?: object | object[] }

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function Seo({ path, noindex, jsonLd }: Props) {
  useEffect(() => {
    const meta = (seo.routes as Record<string, { title: string; description: string }>)[path]
    if (!meta) return
    const url = site.url + (path === '/' ? '/' : path)
    const image = site.url + seo.ogImage
    document.title = meta.title
    setMeta('meta[name="description"]', 'name', 'description', meta.description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', meta.title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', meta.description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', url)
    setMeta('meta[property="og:image"]', 'property', 'og:image', image)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description)
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image)
    setMeta('meta[name="robots"]', 'name', 'robots', noindex ? 'noindex' : 'index,follow')
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = url

    document.head.querySelectorAll('script[data-seo-ld]').forEach((n) => n.remove())
    if (jsonLd) {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.dataset.seoLd = '1'
      s.text = JSON.stringify(jsonLd)
      document.head.appendChild(s)
    }
  }, [path, noindex, jsonLd])
  return null
}
