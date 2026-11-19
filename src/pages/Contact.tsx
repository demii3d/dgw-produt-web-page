import { useRef, useState, type FormEvent } from 'react'
import { AlertCircle, CheckCircle2, Mail } from 'lucide-react'
import Seo from '../components/Seo'
import { site } from '../config/site'

type Values = { name: string; email: string; subject: string; message: string }
type Errors = Partial<Record<keyof Values, string>>
type Status = 'idle' | 'sending' | 'sent' | 'unconnected' | 'error'

function validate(v: Values): Errors {
  const e: Errors = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.'
  if (!v.email.trim()) e.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (v.subject.trim().length < 3) e.subject = 'Please enter a subject.'
  if (v.message.trim().length < 10) e.message = 'Please enter a message of at least 10 characters.'
  return e
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-navy-900">{label}</label>
      {children}
      {error && <p id={`${id}-error`} role="alert" className="mt-2 flex items-center gap-1.5 text-sm font-medium text-red-600"><AlertCircle size={15} />{error}</p>}
    </div>
  )
}
const inputCls = (err?: string) =>
  `w-full rounded-xl border bg-white px-4 py-3.5 text-base text-ink placeholder:text-slate-400 transition-colors focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-brand/50 ${err ? 'border-red-400' : 'border-[#cdd7e8]'}`

export default function Contact() {
  const [v, setV] = useState<Values>({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const formRef = useRef<HTMLFormElement>(null)
  const set = (k: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setV((p) => ({ ...p, [k]: e.target.value }))
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }))
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    const errs = validate(v)
    setErrors(errs)
    const first = Object.keys(errs)[0]
    if (first) { formRef.current?.querySelector<HTMLElement>(`#${first}`)?.focus(); return }
    if (!site.contactEndpoint) { setStatus('unconnected'); return }
    setStatus('sending')
    try {
      const res = await fetch(site.contactEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v) })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      setV({ name: '', email: '', subject: '', message: '' })
    } catch { setStatus('error') }
  }

  const supportShown = site.supportEmail
  const mailto = site.supportEmail
    ? `mailto:${site.supportEmail}?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(`${v.message}\n\n— ${v.name} (${v.email})`)}`
    : ''

  return (
    <>
      <Seo path="/contact" />
      <section className="navy-surface pt-[72px] text-white">
        <div className="container-x py-14 md:py-20">
          <p className="eyebrow">Contact us</p>
          <h1 className="mt-4 text-[40px] font-semibold leading-[1.05] tracking-[-0.025em] text-white sm:text-6xl">We're here to help.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">Have a question about DigitWallet, connecting your virtual cards or using the application? Get in touch with our team.</p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1.3fr_.7fr] lg:gap-16">
          <div className="card p-6 sm:p-9">
            {status === 'sent' ? (
              <div role="status" className="py-10 text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-sky-100 text-cyan-500"><CheckCircle2 size={32} /></span>
                <h2 className="mt-6 text-2xl font-semibold text-navy-900">Message sent</h2>
                <p className="mt-3 text-slate-soft">Thank you for getting in touch. We'll respond to the email address you provided.</p>
                <button className="btn btn-outline mt-8" onClick={() => setStatus('idle')}>Send another message</button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={onSubmit} noValidate aria-label="Contact form" className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Full name" error={errors.name}>
                    <input id="name" name="name" autoComplete="name" value={v.name} onChange={set('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} className={inputCls(errors.name)} placeholder="Your full name" />
                  </Field>
                  <Field id="email" label="Email address" error={errors.email}>
                    <input id="email" name="email" type="email" autoComplete="email" value={v.email} onChange={set('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} className={inputCls(errors.email)} placeholder="you@example.com" />
                  </Field>
                </div>
                <Field id="subject" label="Subject" error={errors.subject}>
                  <input id="subject" name="subject" value={v.subject} onChange={set('subject')} aria-invalid={!!errors.subject} aria-describedby={errors.subject ? 'subject-error' : undefined} className={inputCls(errors.subject)} placeholder="How can we help?" />
                </Field>
                <Field id="message" label="Message" error={errors.message}>
                  <textarea id="message" name="message" rows={6} value={v.message} onChange={set('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} className={`${inputCls(errors.message)} resize-y`} placeholder="Tell us a little more…" />
                </Field>

                <div aria-live="polite">
                  {status === 'unconnected' && (
                    <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
                      <b>Your message has not been sent.</b> Online messaging isn't connected yet.{' '}
                      {mailto ? <>Please <a className="font-semibold underline" href={mailto}>email us directly</a> instead.</> : <>Please email us at {supportShown} once the address is published.</>}
                    </div>
                  )}
                  {status === 'error' && <div role="alert" className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-800">Something went wrong and your message was not sent. Please try again.</div>}
                </div>

                <button type="submit" disabled={status === 'sending'} className="btn btn-dark w-full sm:w-auto disabled:opacity-60">{status === 'sending' ? 'Sending…' : 'Send message'}</button>
              </form>
            )}
          </div>

          <aside className="space-y-5">
            <div className="card p-6">
              <Mail className="text-cyan-500" size={22} />
              <h2 className="mt-4 text-sm font-semibold uppercase tracking-[.14em] text-slate-soft">Support email</h2>
              <p className="mt-1 break-words text-lg font-semibold text-navy-900">{<a href={`mailto:${site.supportEmail}`}>{supportShown}</a>}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
