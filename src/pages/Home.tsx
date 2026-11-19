import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowDownToLine, BadgeCheck, CheckCircle2, ClipboardCheck, LayoutDashboard, ListChecks, LockKeyhole, ScanSearch, ShieldCheck, SlidersHorizontal, Smartphone, UserCheck, KeyRound, Fingerprint, EyeOff } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import PhoneMockup from '../components/PhoneMockup'
import { assets, site } from '../config/site'

const orgLd = [
  { '@context': 'https://schema.org', '@type': 'Organization', name: 'DigitWallet', url: site.url, logo: site.url + assets.logo },
  {
    '@context': 'https://schema.org', '@type': 'MobileApplication', name: 'DigitWallet', applicationCategory: 'FinanceApplication',
    description: 'A virtual card management application for connecting and managing existing virtual cards from supported third-party providers.',
  },
]

function SectionHead({ eyebrow, title, children, center = true, light = false }: { eyebrow?: string; title: string; children?: React.ReactNode; center?: boolean; light?: boolean }) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={`mt-3 text-[32px] font-semibold leading-[1.1] tracking-tight md:text-5xl ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {children && <p className={`mt-5 text-base leading-relaxed md:text-lg ${light ? 'text-white/70' : 'text-slate-soft'}`}>{children}</p>}
    </div>
  )
}

/* ───────────── HERO ───────────── */
function Hero() {
  const reduce = useReducedMotion()
  return (
    <section className="navy-surface relative overflow-hidden pt-[72px] text-white">
      <div className="container-x grid items-center gap-10 pb-16 pt-12 md:pb-24 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
        <div className="max-w-xl">
          <motion.p initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[.16em] text-cyan-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" /> Your cards. One place.
          </motion.p>
          <motion.h1 initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.7 }}
            className="mt-6 text-[44px] font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl lg:text-[72px]">
            All your <span className="relative whitespace-nowrap">card<span aria-hidden className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded bg-cyan-500/50 md:h-4" /></span> needs.
          </motion.h1>
          <motion.p initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.7 }}
            className="mt-6 text-lg leading-relaxed text-white/70 md:text-xl">
            Manage your virtual cards for online transactions, subscriptions and bills — all from one simple application.
          </motion.p>
          <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.7 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/#features" className="btn btn-cyan">Explore DigitWallet <ArrowRight size={18} /></Link>
            <Link to="/#how-it-works" className="btn btn-ghost-light">Discover How It Works</Link>
          </motion.div>
          <motion.p initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="mt-8 flex items-center gap-2.5 text-sm font-medium text-white/65">
            <ShieldCheck size={18} className="text-cyan-500" /> One centralized platform for your connected virtual cards.
          </motion.p>
        </div>

        {/* Device composition */}
        <div className="relative mx-auto h-[520px] w-full max-w-[560px] sm:h-[640px] lg:h-[680px]">
          <div aria-hidden className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-cyan-400/30 to-transparent blur-3xl" />
          <motion.div initial={reduce ? false : { opacity: 0, x: -30, rotate: -8 }} animate={{ opacity: 1, x: 0, rotate: -6 }} transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-10 w-[46%] sm:w-[250px]">
            <PhoneMockup eager src={assets.onboarding} alt="DigitWallet onboarding screen: All your card needs, with two DigitWallet virtual cards" />
          </motion.div>
          <motion.div initial={reduce ? false : { opacity: 0, x: 30, y: 30 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 z-10 w-[52%] sm:w-[290px] lg:w-[300px]">
            <PhoneMockup eager src={assets.dashboard} alt="DigitWallet app confirmation screen: Card Added Successfully" />
          </motion.div>
          <div className="float-slow absolute bottom-16 left-0 z-20 hidden items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-xl shadow-navy-900/10 sm:flex">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-navy-700 text-cyan-brand"><CheckCircle2 size={18} /></span>
            <span className="text-sm leading-tight"><b className="block text-ink">Card connected</b><span className="text-slate-soft">Added to your dashboard</span></span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────── INTRO ───────────── */
const intro = [
  { icon: LayoutDashboard, title: 'One Centralized Dashboard', text: 'Access your connected virtual cards from a single dashboard.' },
  { icon: ArrowDownToLine, title: 'Simple Card Importation', text: 'Connect eligible virtual cards from supported third-party providers.' },
  { icon: SlidersHorizontal, title: 'Convenient Card Management', text: 'View and manage supported card information without constantly switching between different provider platforms.' },
]
function Intro() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <SectionHead eyebrow="Introducing DigitWallet" title="Your virtual cards, organized.">
          Managing multiple virtual cards across different platforms doesn't have to be complicated. DigitWallet brings your supported virtual cards together in one centralized experience, helping you access and organize your cards with ease.
        </SectionHead>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {intro.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="card group h-full p-7 transition-transform duration-300 hover:-translate-y-1">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 text-cyan-brand shadow-lg shadow-navy-900/25">
                  <f.icon size={26} strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-ink">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-soft">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────── HOW IT WORKS ───────────── */
const steps = [
  { n: '01', icon: ListChecks, title: 'Choose Your Provider', text: 'Select an available third-party card provider, such as Photon Pay.' },
  { n: '02', icon: ClipboardCheck, title: 'Enter Your Card Information', text: 'Provide the required card information through the card import interface.' },
  { n: '03', icon: ScanSearch, title: 'Secure Verification', text: "DigitWallet submits the necessary information through the provider's authorized verification process." },
  { n: '04', icon: BadgeCheck, title: 'Card Successfully Connected', text: 'If the provider successfully verifies the card, the relevant provider-issued card reference or authorization token is used to establish the connection. Your connected card becomes available in your DigitWallet dashboard.' },
]
function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-sky-50 py-20 md:py-28">
      <div className="container-x">
        <SectionHead eyebrow="How it works" title="Connect your cards in a few simple steps." />
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
          <ol className="relative space-y-2">
            <span aria-hidden className="absolute bottom-10 left-[27px] top-10 w-px bg-gradient-to-b from-cyan-400 via-sky-200 to-transparent" />
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 0.07} className="relative flex gap-5 rounded-2xl p-3 transition-colors hover:bg-white/70">
                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-navy-800 text-sm font-semibold tracking-wider text-cyan-brand shadow-lg shadow-navy-900/20 ring-4 ring-sky-50">{s.n}</span>
                <div className="pt-1">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-soft">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mx-auto w-full max-w-[290px]">
            <PhoneMockup src={assets.importCard} alt="DigitWallet card import screen: Enter Card Details with cardholder name, card number, expiry date and CVV fields" />
          </Reveal>
        </div>
        <p className="mx-auto mt-14 max-w-2xl rounded-2xl border border-sky-200 bg-white/70 px-5 py-4 text-center text-sm leading-relaxed text-slate-soft">
          Card compatibility depends on available integrations. Not every card from every provider is supported, and the provider decides whether a card is verified.
        </p>
      </div>
    </section>
  )
}

/* ───────────── SHOWCASE ───────────── */
const showcase = [
  { icon: LayoutDashboard, title: 'Your Card Dashboard', text: 'Get a clear overview of your connected virtual cards in one convenient dashboard.', img: assets.dashboard, alt: 'DigitWallet app showing the Card Added Successfully confirmation over the card import screen', tone: 'from-navy-700 to-navy-900' },
  { icon: ArrowDownToLine, title: 'Import Your Existing Cards', text: 'Connect eligible cards from supported providers using a straightforward verification process.', img: assets.importCard, alt: 'DigitWallet Enter Card Details screen with a Photon Pay card and a Verify Card button', tone: 'from-sky-200 to-sky-100' },
  { icon: UserCheck, title: 'Account Verification', text: 'Complete the identity verification process where required to access the relevant application features.', img: assets.kyc, alt: 'DigitWallet Verify your account screen listing a valid ID document and proof of address', tone: 'from-cyan-brand/70 to-sky-100' },
  { icon: Smartphone, title: 'A Seamless Mobile Experience', text: 'Enjoy a modern mobile interface designed to make managing your connected cards simple and convenient.', img: assets.onboarding, alt: 'DigitWallet onboarding screen: All your card needs', tone: 'from-navy-800 to-navy-950' },
]
function Showcase() {
  return (
    <section id="features" className="bg-white py-20 md:py-28">
      <div className="container-x">
        <SectionHead eyebrow="Features" title="Everything organized. One experience." />
        <div className="mt-16 space-y-20 md:space-y-28">
          {showcase.map((f, i) => (
            <div key={f.title} className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <Reveal>
                <div className={`relative mx-auto flex w-full max-w-[560px] justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br ${f.tone} px-6 pt-12 sm:pt-14`}>
                  <div aria-hidden className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/40" />
                  <div aria-hidden className="absolute -left-10 bottom-10 h-40 w-40 rounded-full border border-white/20" />
                  <div className="relative w-[240px] translate-y-6 sm:w-[270px]">
                    <PhoneMockup src={f.img} alt={f.alt} />
                  </div>
                  <div className="h-[460px] w-0 sm:h-[520px]" />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="max-w-lg">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-100 text-navy-700"><f.icon size={22} strokeWidth={1.7} /></span>
                  <p className="mt-6 text-sm font-semibold tracking-widest text-cyan-500">0{i + 1}</p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">{f.title}</h3>
                  <p className="mt-5 text-lg leading-relaxed text-slate-soft">{f.text}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────── SECURITY ───────────── */
const security = [
  { icon: EyeOff, title: 'No Permanent Storage of Complete Card Details', text: 'DigitWallet does not intentionally store complete virtual card numbers, expiration dates or CVV security codes in its permanent databases.' },
  { icon: Fingerprint, title: 'Provider-Based Verification', text: "Card information required during importation is submitted through the relevant provider's authorized verification process." },
  { icon: KeyRound, title: 'Secure Provider References', text: 'Provider-issued authorization tokens and card identification references are handled as sensitive information.' },
  { icon: LockKeyhole, title: 'Privacy-Focused Approach', text: 'Personal information is processed for account management, security, service delivery and other purposes explained in our Privacy Policy.' },
]
function Security() {
  return (
    <section className="bg-sky-50 py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">Security &amp; privacy</p>
              <h2 className="mt-3 text-[32px] font-semibold leading-[1.1] tracking-tight text-ink md:text-5xl">Your card details deserve protection.</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-soft">Your financial privacy matters. DigitWallet follows a data-minimization approach, retaining only the information necessary to maintain your connected card experience.</p>
              <Link to="/privacy-policy" className="btn btn-dark mt-8">Read Our Privacy Policy <ArrowRight size={18} /></Link>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {security.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07}>
                <div className="card h-full p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-800 text-cyan-brand"><s.icon size={22} strokeWidth={1.6} /></span>
                  <h3 className="mt-5 text-lg font-semibold leading-snug text-ink">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-soft">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────── CTA ───────────── */
function CallToAction() {
  return (
    <section id="get-started" className="bg-white px-0 py-16 md:py-24">
      <div className="container-x">
        <div className="navy-surface relative overflow-hidden rounded-[2rem] px-6 pt-14 text-white md:px-14 md:pt-20 lg:pb-0">
          <div aria-hidden className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-cyan-brand/20" />
          <div aria-hidden className="absolute -right-44 top-10 h-[34rem] w-[34rem] rounded-full border border-cyan-brand/10" />
          <div aria-hidden className="absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-cyan-brand/10 blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_.8fr]">
            <div className="max-w-xl pb-14 lg:pb-20">
              <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">Take control of your virtual cards.</h2>
              <p className="mt-5 text-lg leading-relaxed text-white/70">Bring your supported virtual cards together and enjoy a more organized way to manage your online payments.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/about" className="btn btn-cyan">Discover DigitWallet <ArrowRight size={18} /></Link>
                <Link to="/contact" className="btn btn-ghost-light">Contact us</Link>
              </div>
              <p className="mt-6 text-sm text-white/55">
                {site.appStoreUrl || site.googlePlayUrl ? 'Download DigitWallet from the links in the footer.' : 'App Store and Google Play listings will be linked here once they are available.'}
              </p>
            </div>
            <div className="relative mx-auto -mb-24 hidden w-[260px] lg:block lg:-mb-6">
              <PhoneMockup src={assets.importCard} alt="DigitWallet card import screen" className="translate-y-10 rotate-[4deg]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Seo path="/" jsonLd={orgLd} />
      <Hero />
      <Intro />
      <HowItWorks />
      <Showcase />
      <Security />
      <CallToAction />
    </>
  )
}
