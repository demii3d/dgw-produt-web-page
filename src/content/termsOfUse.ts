import type { LegalSection } from '../components/LegalLayout'

const p = (text: string) => ({ t: 'p' as const, text })
const ul = (...items: string[]) => ({ t: 'ul' as const, items })
const ol = (...items: string[]) => ({ t: 'ol' as const, items })

export const termsSections: LegalSection[] = [
  { id: 'introduction', title: 'Introduction', blocks: [
    p('Welcome to DigitWallet.'),
    p('These Terms of Use ("Terms") govern your access to and use of the DigitWallet mobile application, website and related services.'),
    p('DigitWallet ("we", "our" or "us") is a virtual card management platform that enables users to connect, organize, view and manage existing virtual payment cards from supported third-party card providers through a centralized interface.'),
    p('By creating an account, accessing or using DigitWallet, you agree to these Terms and our Privacy Policy.'),
    p('If you do not agree with these Terms, you should discontinue using the application.'),
  ] },
  { id: 'eligibility', title: 'Eligibility', blocks: [
    p('To use DigitWallet, you must:'),
    ul('Be at least 18 years old.', 'Have the legal capacity to enter into a binding agreement.', 'Provide accurate and current registration information.', 'Use the application in accordance with applicable laws.', 'Have the necessary authorization to connect and manage the virtual cards you import.'),
    p('DigitWallet is not intended for use by individuals under 18 years of age.'),
  ] },
  { id: 'description-of-services', title: 'Description of Services', blocks: [
    p('DigitWallet provides a centralized interface for managing existing virtual cards issued by supported third-party card providers.'),
    p('Depending on the available integrations, features may include:'),
    ul('Connecting existing virtual cards.', 'Importing eligible virtual cards.', 'Viewing connected card information.', 'Monitoring card status.', 'Accessing available balance information.', 'Viewing transaction history where supported.', 'Managing connected card references.', 'Accessing supported card management functionality.'),
    p("The availability of individual features depends on the relevant provider's technical capabilities, API access and authorization permissions."),
    p('DigitWallet reserves the right to modify, improve, suspend or discontinue features where reasonably necessary.'),
  ] },
  { id: 'third-party-card-providers', title: 'Third-Party Card Providers', blocks: [
    p('DigitWallet connects to independent third-party virtual card providers.'),
    p('These providers are responsible for issuing and maintaining the underlying virtual cards.'),
    p('DigitWallet does not independently issue, own or guarantee the validity of imported virtual cards.'),
    p('By connecting a card, you acknowledge that:'),
    ul("Your card remains subject to the provider's terms and conditions.", 'The provider may independently approve or reject card verification.', 'Card compatibility depends on the supported integration.', 'Provider outages or API changes may affect DigitWallet functionality.', 'Certain card information may be unavailable depending on provider permissions.', 'You may need to maintain an active account with the relevant provider.'),
    p('DigitWallet is not responsible for independent decisions made by third-party providers.'),
    p("You are encouraged to review the relevant provider's terms and privacy policies."),
  ] },
  { id: 'card-importation-and-verification', title: 'Card Importation and Verification', blocks: [
    p('Users may import eligible virtual cards through the supported card import process.'),
    p('The general process involves:'),
    ol('Selecting an available card provider.', 'Providing the required card information.', "Submitting the information through the provider's authorized verification process.", 'Allowing the provider to authenticate and verify the card.', 'Establishing a connection following successful verification.'),
    p('A card will only be successfully connected if the relevant provider returns a successful verification response.'),
    p('DigitWallet does not guarantee that every card will be accepted or supported.'),
    p('You must only import cards that belong to you or that you are legally authorized to manage.'),
    p("You must not attempt to import another person's card without their authorization."),
  ] },
  { id: 'user-responsibilities', title: 'User Responsibilities', blocks: [
    p('You agree to:'),
    ul('Provide accurate registration information.', 'Maintain the confidentiality of your login credentials.', 'Protect your device and account access.', 'Only connect cards you own or are authorized to manage.', 'Use DigitWallet for lawful purposes.', 'Avoid attempting to bypass security or verification mechanisms.', 'Avoid reverse engineering, exploiting or disrupting the application.', "Avoid unauthorized access to other users' accounts or information.", 'Notify us promptly if you suspect unauthorized access to your account.'),
    p('You are responsible for activities performed through your account, subject to applicable law.'),
  ] },
  { id: 'account-security', title: 'Account Security', blocks: [
    p('You are responsible for maintaining the security of your DigitWallet account.'),
    p('We may implement authentication, monitoring and security mechanisms to protect user accounts.'),
    p('We reserve the right to temporarily restrict or suspend access where we reasonably suspect:'),
    ul('Unauthorized account access.', 'Fraudulent activity.', 'Security breaches.', 'Violations of these Terms.', 'Activities that may compromise the application or other users.'),
    p('Where reasonably possible, we may notify affected users of significant account restrictions.'),
  ] },
  { id: 'data-protection-and-card-information', title: 'Data Protection and Card Information', blocks: [
    p('DigitWallet follows a data-minimization approach when handling personal and card-related information.'),
    p('DigitWallet does not intentionally retain complete virtual card numbers, expiration dates or CVV security codes in its permanent databases.'),
    p('Full card details remain with the respective card providers.'),
    p('We may retain provider-issued tokens, card references, account identifiers and other limited information required to maintain authorized connections.'),
    p('Our collection, use, storage and processing of personal information are explained in our Privacy Policy.'),
    p('By using DigitWallet, you acknowledge that information may be transmitted to supported third-party providers to facilitate authentication, card verification and authorized functionality.'),
  ] },
  { id: 'third-party-services-and-integrations', title: 'Third-Party Services and Integrations', blocks: [
    p('DigitWallet may rely on third-party infrastructure, authentication services, cloud hosting providers and card provider APIs.'),
    p('We do not control the independent operation of these third-party services.'),
    p('We are not responsible for:'),
    ul('Third-party service interruptions.', 'Changes to provider APIs.', 'Provider account restrictions.', 'Card issuer decisions.', 'Provider-specific transaction disputes.', 'Errors originating from third-party systems.', 'The independent privacy or security practices of third-party providers.'),
    p('Your use of third-party services may be subject to additional terms and conditions.'),
  ] },
  { id: 'fees-and-payments', title: 'Fees and Payments', blocks: [
    p('DigitWallet will clearly communicate any fees associated with its own services where applicable.'),
    p("Any fees, card charges, transaction charges, foreign exchange charges or other costs imposed by a third-party card provider remain subject to that provider's applicable pricing and terms."),
    p('DigitWallet does not guarantee that third-party card services will be free of charge.'),
    p('Where applicable, users should review provider pricing before using their services.'),
  ] },
  { id: 'service-availability', title: 'Service Availability', blocks: [
    p('We aim to maintain reliable access to DigitWallet.'),
    p('However, uninterrupted availability cannot be guaranteed.'),
    p('Access may occasionally be affected by:'),
    ul('Scheduled maintenance.', 'Technical failures.', 'Internet connectivity problems.', 'Third-party provider outages.', 'Security incidents.', 'Software updates.', 'Circumstances beyond our reasonable control.'),
    p('We may temporarily suspend access to parts of the application where necessary to maintain security or system integrity.'),
  ] },
  { id: 'prohibited-activities', title: 'Prohibited Activities', blocks: [
    p('You must not use DigitWallet to:'),
    ul('Engage in fraudulent activities.', 'Connect stolen or unauthorized payment cards.', 'Facilitate financial crimes.', 'Violate applicable laws or regulations.', "Attempt to access another user's account.", 'Interfere with application infrastructure.', 'Introduce malicious software.', 'Exploit vulnerabilities without authorization.', 'Misrepresent your identity.', 'Abuse third-party provider integrations.'),
    p('We reserve the right to investigate suspected violations and take appropriate action.'),
  ] },
  { id: 'intellectual-property', title: 'Intellectual Property', blocks: [
    p('All intellectual property associated with DigitWallet, including its branding, logo, interface, software, website content, graphics and design elements, belongs to DigitWallet or its respective licensors unless otherwise stated.'),
    p('You may not copy, reproduce, distribute, modify or commercially exploit our intellectual property without prior written permission.'),
    p('Your use of the application does not grant you ownership of any DigitWallet intellectual property.'),
  ] },
  { id: 'disclaimer-of-warranties', title: 'Disclaimer of Warranties', blocks: [
    p('DigitWallet is provided on an "as available" and "as is" basis to the extent permitted by applicable law.'),
    p('We do not guarantee:'),
    ul('That every third-party virtual card will be compatible.', 'That every provider integration will remain continuously available.', 'That all transaction information will be immediately updated.', 'That all provider-reported balances will be available.', 'That the application will operate without interruptions or errors.'),
    p('DigitWallet is a card management interface and does not replace the underlying card issuer or provider.'),
    p('Nothing in these Terms excludes warranties or rights that cannot legally be excluded.'),
  ] },
  { id: 'limitation-of-liability', title: 'Limitation of Liability', blocks: [
    p('To the maximum extent permitted by applicable law, DigitWallet shall not be liable for indirect, incidental, special or consequential damages arising from the use of or inability to use the application.'),
    p('This includes losses resulting from third-party provider interruptions, unauthorized third-party actions, inaccurate provider information or service unavailability.'),
    p('Nothing in these Terms limits liability where such limitation is prohibited by applicable law, including liability for fraud, willful misconduct or other non-excludable obligations.'),
  ] },
  { id: 'account-suspension-and-termination', title: 'Account Suspension and Termination', blocks: [
    p('You may discontinue using DigitWallet at any time.'),
    p('We may suspend or terminate access where:'),
    ul('You materially violate these Terms.', 'Your account is involved in suspected fraudulent activity.', 'Your use creates security or legal risks.', 'We are required to do so by applicable law.', 'We discontinue the relevant service.'),
    p('Where appropriate, we will provide notice of account suspension or termination.'),
    p('Termination of a DigitWallet account does not automatically close any virtual cards maintained by third-party providers.'),
    p('You may need to contact those providers separately.'),
  ] },
  { id: 'account-deletion', title: 'Account Deletion', blocks: [
    p('You may request deletion of your DigitWallet account through the available application settings or by contacting our support team.'),
    p('Upon receiving a valid request, we will take reasonable steps to delete or anonymize personal information, remove connected card references and invalidate associated authorization tokens where supported.'),
    p('Certain information may be retained where required or permitted by applicable law.'),
    p('Deleting your DigitWallet account does not automatically close your underlying virtual cards or delete information maintained independently by third-party providers.'),
  ] },
  { id: 'privacy', title: 'Privacy', blocks: [
    p('Your use of DigitWallet is also governed by our Privacy Policy.'),
    p('Our Privacy Policy explains:'),
    ul('What information we collect.', 'How information is used.', 'How card information is handled.', 'How third-party integrations operate.', 'How information is stored and protected.', 'Your available privacy rights.'),
    p('Please review our Privacy Policy for additional information.'),
  ] },
  { id: 'changes-to-these-terms', title: 'Changes to These Terms', blocks: [
    p('We may update these Terms periodically to reflect changes in our services, integrations, technology or applicable legal requirements.'),
    p('Where material changes are made, we may provide notice through the application, email or our website.'),
    p('Your continued use of DigitWallet after updated Terms become effective constitutes acceptance of the revised Terms to the extent permitted by applicable law.'),
  ] },
  { id: 'governing-law', title: 'Governing Law', blocks: [
    p('These Terms shall be governed by and interpreted in accordance with the applicable laws of Nigeria, without prejudice to any mandatory consumer protection or other legal rights that may apply in your jurisdiction.'),
    p('Any disputes shall be handled by the courts of competent jurisdiction, subject to applicable law.'),
  ] },
  { id: 'contact-information', title: 'Contact Information', blocks: [
    p('For questions, complaints or enquiries regarding these Terms, please contact us.'),
    { t: 'fields', items: [
      { label: 'Application Name', value: 'DigitWallet' },
      { label: 'Company', value: 'DigitWallet' },
      { label: 'Support Email', value: '{{support}}' },
      { label: 'Website', value: '{{website}}' },
      { label: 'Country of Operation', value: '{{country}}' },
    ] },
  ] },
  { id: 'entire-agreement', title: 'Entire Agreement', blocks: [
    p('These Terms, together with our Privacy Policy and any applicable additional service terms, constitute the agreement governing your use of DigitWallet.'),
    p('If any provision is found to be unenforceable, the remaining provisions shall continue to apply to the extent permitted by law.'),
  ] },
]
