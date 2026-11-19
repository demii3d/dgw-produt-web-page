import { Link } from 'react-router-dom'
import Logo from './Logo'
import { site } from '../config/site'

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[.16em] text-cyan-400">{title}</h2>
      <ul className="mt-5 space-y-3 text-[15px]">{children}</ul>
    </div>
  )
}
const linkCls = 'text-white/75 transition-colors hover:text-white'

function StoreItem({ label, href }: { label: string; href: string }) {
  return (
    <li>
      {href ? (
        <a href={href} className={linkCls} rel="noopener noreferrer" target="_blank">{label}</a>
      ) : (
        <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 whitespace-nowrap text-white/45" aria-disabled="true">
          {label}<span className="rounded-full border border-white/20 px-2 py-0.5 text-[10px] uppercase tracking-wider">Coming soon</span>
        </span>
      )}
    </li>
  )
}

export default function Footer() {
  return (
    <footer className="navy-surface text-white">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-md">
            <Logo />
            <p className="mt-6 text-[15px] leading-relaxed text-white/70">
              DigitWallet is a centralized virtual card management application designed to help users connect and manage their existing virtual cards from supported third-party providers.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <Col title="Product">
              <li><Link className={linkCls} to="/">Home</Link></li>
              <li><Link className={linkCls} to="/about">About</Link></li>
              <li><Link className={linkCls} to="/#features">Features</Link></li>
              <li><Link className={linkCls} to="/contact">Contact</Link></li>
            </Col>
            <Col title="Legal">
              <li><Link className={linkCls} to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link className={linkCls} to="/terms-of-use">Terms of Use</Link></li>
            </Col>
            <Col title="Other">
              <li><Link className={linkCls} to="/contact">Support</Link></li>
              <StoreItem label="App Store" href={site.appStoreUrl} />
              <StoreItem label="Google Play" href={site.googlePlayUrl} />
            </Col>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 DigitWallet. All Rights Reserved.</p>
          <p className="max-w-xl md:text-right">DigitWallet is not a card issuer, bank or payment processor. Connected cards remain issued and managed by their providers.</p>
        </div>
      </div>
    </footer>
  )
}
