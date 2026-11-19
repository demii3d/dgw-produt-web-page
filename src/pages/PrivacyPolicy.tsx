import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import LegalLayout from '../components/LegalLayout'
import { privacySections } from '../content/privacyPolicy'

export default function PrivacyPolicy() {
  return (
    <>
      <Seo path="/privacy-policy" />
      <LegalLayout title="Privacy Policy" sections={privacySections}>
        <p className="mt-10 font-semibold text-navy-900">© 2026 DigitWallet. All Rights Reserved.</p>
        <p className="mt-2 text-sm text-slate-soft">See also our <Link className="font-medium text-navy-700 underline underline-offset-4" to="/terms-of-use">Terms of Use</Link>.</p>
      </LegalLayout>
    </>
  )
}
