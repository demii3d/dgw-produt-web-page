import { useEffect, useState, type ReactNode } from 'react'
import { ArrowUp, ChevronDown } from 'lucide-react'
import { placeholders, site } from '../config/site'

export type Block =
  | { t: 'p'; text: string }
  | { t: 'h3'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] }
  | { t: 'fields'; items: { label: string; value: string }[] }

export type LegalSection = { id: string; title: string; blocks: Block[] }

/** Resolves {{support}}, {{privacy}}, {{website}}, {{country}} tokens to config values or visible placeholders. */
export function resolveToken(v: string) {
  return v
    .replace('{{support}}', site.supportEmail || placeholders.support)
    .replace('{{privacy}}', site.privacyEmail || placeholders.privacy)
    .replace('{{website}}', hasUrl() ? site.url : placeholders.website)
    .replace('{{country}}', site.country)
}
function hasUrl() { return !!import.meta.env.VITE_SITE_URL }

function BlockView({ b }: { b: Block }) {
  switch (b.t) {
    case 'p': return <p>{b.text}</p>
    case 'h3': return <h3 className="!mt-8 text-lg font-semibold text-navy-900">{b.text}</h3>
    case 'ul': return <ul className="list-disc space-y-2 pl-6 marker:text-cyan-500">{b.items.map((i) => <li key={i}>{i}</li>)}</ul>
    case 'ol': return <ol className="list-decimal space-y-2 pl-6 marker:font-semibold marker:text-navy-700">{b.items.map((i) => <li key={i}>{i}</li>)}</ol>
    case 'fields':
      return (
        <dl className="rounded-2xl border border-line bg-sky-50 p-5 sm:p-6">
          {b.items.map((f) => (
            <div key={f.label} className="flex flex-col gap-0.5 border-b border-sky-200 py-3 first:pt-0 last:border-0 last:pb-0 sm:flex-row sm:gap-6">
              <dt className="font-semibold text-navy-900 sm:w-48 sm:shrink-0">{f.label}</dt>
              <dd className="break-words text-slate-soft">{resolveToken(f.value)}</dd>
            </div>
          ))}
        </dl>
      )
  }
}

export default function LegalLayout({ title, intro, sections, children }: { title: string; intro?: ReactNode; sections: LegalSection[]; children?: ReactNode }) {
  const [active, setActive] = useState(sections[0]?.id)
  const [tocOpen, setTocOpen] = useState(false)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (vis[0]) setActive(vis[0].target.id)
      },
      { rootMargin: '-90px 0px -65% 0px' },
    )
    els.forEach((e) => io.observe(e))
    const onScroll = () => setShowTop(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [sections])

  const toc = (
    <ol className="space-y-0.5 text-[14px]">
      {sections.map((s, i) => (
        <li key={s.id}>
          <a href={`#${s.id}`} onClick={() => setTocOpen(false)} aria-current={active === s.id ? 'true' : undefined}
            className={`flex gap-3 rounded-lg px-3 py-2 leading-snug transition-colors ${active === s.id ? 'bg-sky-100 font-semibold text-navy-900' : 'text-slate-soft hover:bg-sky-50 hover:text-ink'}`}>
            <span className="w-5 shrink-0 tabular-nums text-cyan-500">{i + 1}.</span><span>{s.title}</span>
          </a>
        </li>
      ))}
    </ol>
  )

  return (
    <div className="bg-white pt-[72px]">
      <header className="border-b border-line bg-gradient-to-b from-sky-50 to-white">
        <div className="container-x py-12 md:py-16">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy-900 md:text-5xl">{title}</h1>
          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-slate-soft">
            <div className="flex gap-2"><dt className="font-semibold text-navy-900">Effective Date:</dt><dd>{site.effectiveDate}</dd></div>
            <div className="flex gap-2"><dt className="font-semibold text-navy-900">Last Updated:</dt><dd>{site.lastUpdated}</dd></div>
          </dl>
          {intro}
        </div>
      </header>

      <div className="container-x grid gap-10 py-10 md:py-14 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
        <aside aria-label="Table of contents" className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:self-start lg:overflow-y-auto">
          <div className="lg:hidden">
            <button type="button" onClick={() => setTocOpen((v) => !v)} aria-expanded={tocOpen} aria-controls="toc-mobile"
              className="flex w-full items-center justify-between rounded-xl border border-line bg-white px-4 py-3.5 text-left font-semibold text-navy-900">
              Table of contents <ChevronDown size={18} className={`transition-transform ${tocOpen ? 'rotate-180' : ''}`} />
            </button>
            {tocOpen && <nav id="toc-mobile" className="mt-2 rounded-xl border border-line bg-white p-2">{toc}</nav>}
          </div>
          <nav className="hidden lg:block">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[.16em] text-slate-soft">Contents</p>
            {toc}
          </nav>
        </aside>

        <article className="min-w-0 max-w-[760px]">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-24 border-b border-line py-9 first:pt-0 last:border-0">
              <h2 className="flex gap-3 text-2xl font-semibold tracking-tight text-navy-900">
                <span className="text-cyan-500 tabular-nums">{i + 1}.</span><span>{s.title}</span>
              </h2>
              <div className="mt-5 space-y-4 text-[17px] leading-[1.75] text-[#2c3556]">
                {s.blocks.map((b, k) => <BlockView key={k} b={b} />)}
              </div>
            </section>
          ))}
          {children}
        </article>
      </div>

      <button type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-navy-800 text-cyan-brand shadow-xl transition-all ${showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}>
        <ArrowUp size={20} />
      </button>
    </div>
  )
}
