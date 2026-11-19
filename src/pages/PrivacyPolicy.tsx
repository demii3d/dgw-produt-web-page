import Seo from '../components/Seo'
import LegalLayout from '../components/LegalLayout'
import { privacySections } from '../content/privacyPolicy'

export default function PrivacyPolicy() {
  return (
    <>
      <Seo path="/privacy-policy" />
      <LegalLayout title="Privacy Policy" sections={privacySections}>
        <section aria-labelledby="privacy-contact" className="mt-10 rounded-2xl border border-line bg-sky-50 p-6">
          <h2 id="privacy-contact" className="text-xl font-semibold text-navy-900">Contact details</h2>
          <dl className="mt-4 space-y-3 text-[17px]">
            <div className="flex flex-col sm:flex-row sm:gap-6"><dt className="font-semibold text-navy-900 sm:w-48">Privacy Email</dt><dd className="text-slate-soft">{import.meta.env.VITE_PRIVACY_EMAIL || '[PRIVACY EMAIL ADDRESS]'}</dd></div>
            <div className="flex flex-col sm:flex-row sm:gap-6"><dt className="font-semibold text-navy-900 sm:w-48">Official Website</dt><dd className="text-slate-soft">{import.meta.env.VITE_SITE_URL || '[OFFICIAL WEBSITE URL]'}</dd></div>
            <div className="flex flex-col sm:flex-row sm:gap-6"><dt className="font-semibold text-navy-900 sm:w-48">Country of Operation</dt><dd className="text-slate-soft">Nigeria</dd></div>
          </dl>
        </section>
      </LegalLayout>
    </>
  )
}
