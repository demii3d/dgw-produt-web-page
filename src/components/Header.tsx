import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { nav } from '../config/site'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => setOpen(false), [pathname, hash])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', esc) }
  }, [open])

  const isActive = (to: string) =>
    to.includes('#') ? pathname === '/' && hash === '#features' : to === '/' ? pathname === '/' && hash !== '#features' : pathname === to

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'bg-navy-950 shadow-[0_8px_30px_-12px_rgba(0,0,0,.5)]' : 'bg-navy-950'} backdrop-blur-xl border-b border-white/10`}>
      <div className="container-x flex h-[72px] items-center justify-between">
        <Logo />
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <NavLink key={n.label} to={n.to} aria-current={isActive(n.to) ? 'page' : undefined}
              className={`relative rounded-lg px-4 py-2 text-[15px] font-medium transition-colors ${isActive(n.to) ? 'text-white' : 'text-white/65 hover:text-white'}`}>
              {n.label}
              {isActive(n.to) && <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded bg-cyan-brand" />}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/#get-started" className="btn btn-cyan !min-h-[44px] !px-5 hidden sm:inline-flex">Get Started</Link>
          <button type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-11 w-11 place-items-center rounded-xl border border-white/20 bg-white/5 text-white">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}
            className="lg:hidden absolute inset-x-0 top-[72px] h-[calc(100dvh-72px)] overflow-y-auto bg-navy-950">
            <nav aria-label="Mobile" className="container-x py-6 flex flex-col">
              {nav.map((n) => (
                <Link key={n.label} to={n.to} className="flex items-center justify-between border-b border-white/10 py-5 text-2xl font-semibold text-white">
                  {n.label}<span aria-hidden className="text-cyan-500">→</span>
                </Link>
              ))}
              <Link to="/#get-started" className="btn btn-cyan mt-8 !min-h-[54px]">Get Started</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
