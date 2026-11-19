import { Link } from 'react-router-dom'
import { assets } from '../config/site'

/** Official logo (light-cyan version, designed for navy backgrounds). Never recoloured or distorted. */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" aria-label="DigitWallet home" className={`inline-flex items-center ${className}`}>
      <img src={assets.logo} alt="DigitWallet — Powering Financial Freedom" width={131} height={32} className="block h-8 w-auto" />
    </Link>
  )
}
