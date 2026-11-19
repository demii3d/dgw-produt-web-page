/**
 * Central, easy-to-edit business configuration.
 * Anything left empty renders as a visible placeholder and is never faked.
 */
const env = import.meta.env

export const site = {
  name: 'DigitWallet',
  url: (env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || 'https://www.example.com',
  supportEmail: (env.VITE_SUPPORT_EMAIL as string) || '',
  privacyEmail: (env.VITE_PRIVACY_EMAIL as string) || '',
  country: 'Nigeria',
  effectiveDate: 'November 19, 2026',
  lastUpdated: 'November 19, 2026',
  contactEndpoint: (env.VITE_CONTACT_ENDPOINT as string) || '',
  // Leave empty until the real store listings exist. Links stay inactive until set.
  appStoreUrl: (env.VITE_APP_STORE_URL as string) || '',
  googlePlayUrl: (env.VITE_GOOGLE_PLAY_URL as string) || '',
}

export const placeholders = {
  support: '[SUPPORT EMAIL ADDRESS]',
  privacy: '[PRIVACY EMAIL ADDRESS]',
  website: '[OFFICIAL WEBSITE URL]',
}

export const hasRealUrl = !!(env.VITE_SITE_URL as string | undefined)

export const assets = {
  logo: '/assets/digitwallet-logo.png',
  onboarding: '/assets/screen-onboarding.png',
  dashboard: '/assets/screen-dashboard.png',
  importCard: '/assets/screen-import-card.png',
  kyc: '/assets/screen-kyc.png',
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Features', to: '/#features' },
  { label: 'Privacy', to: '/privacy-policy' },
  { label: 'Contact', to: '/contact' },
]
