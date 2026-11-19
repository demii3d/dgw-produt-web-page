import { Link } from 'react-router-dom'
import { ArrowRight, Eye, Lightbulb, Lock, Sparkles, Target, Waypoints } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import PhoneMockup from '../components/PhoneMockup'
import { assets } from '../config/site'

const approach = [
  { icon: Waypoints, title: 'Simplicity', text: 'Make card management straightforward.' },
  { icon: Lock, title: 'Security', text: 'Prioritize responsible handling of sensitive information.' },
  { icon: Eye, title: 'Transparency', text: 'Clearly communicate what DigitWallet does and how it works.' },
  { icon: Sparkles, title: 'Innovation', text: 'Continuously improve the connected card management experience.' },
]

export default function About() {
  return (
    <>
      <Seo path="/about" />
      <section className="navy-surface pt-[72px] text-white">
        <div className="container-x grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="eyebrow">About us</p>
            <h1 className="mt-4 text-[40px] font-semibold leading-[1.05] tracking-[-0.025em] text-white sm:text-6xl">Making virtual card management simpler.</h1>
            <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-white/70">
              <p>DigitWallet was created to simplify the way people organize and manage their existing virtual payment cards.</p>
              <p>As more people rely on virtual cards for subscriptions, online purchases and digital services, managing cards across different providers can become inconvenient.</p>
              <p>DigitWallet addresses this challenge by providing a centralized mobile application where users can connect supported virtual cards and access available card management features in one place.</p>
            </div>
          </div>
          <Reveal className="mx-auto w-full max-w-[280px]">
            <PhoneMockup eager src={assets.onboarding} alt="DigitWallet onboarding screen: All your card needs" />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="navy-surface h-full rounded-[1.75rem] p-8 text-white md:p-10">
              <Target className="text-cyan-brand" size={28} strokeWidth={1.6} />
              <h2 className="mt-6 text-sm font-semibold uppercase tracking-[.16em] text-cyan-400">Our mission</h2>
              <p className="mt-4 text-2xl font-medium leading-snug md:text-[28px]">To make managing virtual cards simpler, more organized and more accessible through thoughtful technology.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-[1.75rem] border border-sky-200 bg-sky-50 p-8 md:p-10">
              <Lightbulb className="text-navy-700" size={28} strokeWidth={1.6} />
              <h2 className="mt-6 text-sm font-semibold uppercase tracking-[.16em] text-cyan-500">Our vision</h2>
              <p className="mt-4 text-2xl font-medium leading-snug text-ink md:text-[28px]">To become a trusted platform for centralized virtual card management.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sky-50 py-20 md:py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">Our approach</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-5xl">How we think about the product.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <div className="card h-full p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-800 text-cyan-brand"><a.icon size={22} strokeWidth={1.6} /></span>
                  <h3 className="mt-5 text-xl font-semibold text-ink">{a.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-soft">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-12 max-w-3xl rounded-2xl border border-sky-200 bg-white px-6 py-5 leading-relaxed text-slate-soft">
            DigitWallet is an independent card management interface. It is not a virtual card issuer, bank, payment processor or financial institution. Connected cards remain issued and managed by their respective providers.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 text-center">
        <div className="container-x">
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">See what DigitWallet can do.</h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/#features" className="btn btn-dark">Explore the application <ArrowRight size={18} /></Link>
            <Link to="/contact" className="btn btn-outline">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
