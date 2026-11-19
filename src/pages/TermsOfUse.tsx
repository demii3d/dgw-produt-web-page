import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import LegalLayout from '../components/LegalLayout'
import { termsSections } from '../content/termsOfUse'

export default function TermsOfUse() {
  return (
    <>
      <Seo path="/terms-of-use" />
      <LegalLayout title="Terms of Use" sections={termsSections}>
        <p className="mt-10 font-semibold text-navy-900">© 2026 DigitWallet. All Rights Reserved.</p>
        <p className="mt-2 text-sm text-slate-soft">See also our <Link className="font-medium text-navy-700 underline underline-offset-4" to="/privacy-policy">Privacy Policy</Link>.</p>
      </LegalLayout>
    </>
  )
}
