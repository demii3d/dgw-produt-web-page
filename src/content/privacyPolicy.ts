import type { LegalSection } from '../components/LegalLayout'

/**
 * PRIVACY POLICY CONTENT
 * Paste the authoritative policy wording here, verbatim, using the block helpers below.
 * Section titles follow the 16-section structure of the supplied policy.
 * Blocks: { t: 'p', text } | { t: 'h3', text } | { t: 'ul', items } | { t: 'ol', items }
 */
const pending = [{ t: 'p' as const, text: '[POLICY TEXT PENDING — insert the authoritative wording for this section.]' }]

const titles = [
  'Introduction',
  'Information We Collect',
  'How We Use Your Information',
  'Card Importation and Third-Party Provider Integration',
  'Third-Party Services and Information Sharing',
  'Data Storage and Security',
  'Data Retention',
  'User Privacy Rights',
  'Account and Card Deletion',
  'Cookies and Analytics',
  'International Data Transfers',
  "Children's Privacy",
  'Third-Party Websites and Services',
  'Legal Compliance',
  'Changes to This Privacy Policy',
  'Contact Us',
]

export const privacySections: LegalSection[] = titles.map((title) => ({
  id: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  title,
  blocks: pending,
}))
