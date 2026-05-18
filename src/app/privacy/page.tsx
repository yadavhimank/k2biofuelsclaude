import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/lib/metadata';
import { LegalBody } from '@/components/ui/legal-body';
import { CTAStrip } from '@/components/layout/cta-strip';
import { PageHero } from '@/components/layout/page-hero';

export const metadata: Metadata = PAGE_METADATA.privacy;

const privacySections = [
  { h: 'What we collect', b: 'When you fill our contact form, we collect your name, email, phone, company, monthly volume estimate, and boiler details. When you visit, we collect standard server logs (IP, browser, page visited) for security and analytics.' },
  { h: 'How we use it', b: 'Enquiry data is used solely to respond to your enquiry, send samples and provide commercial quotes. We do not sell your data and do not share it with third parties beyond the courier handling your sample dispatch.' },
  { h: 'Retention', b: 'Active enquiries are retained for the duration of any commercial relationship plus 7 years for statutory record-keeping. Inactive enquiries are deleted after 24 months unless legally required.' },
  { h: 'Your rights', b: 'You may request a copy of all data we hold about you, ask us to correct it, or ask us to delete it. Email privacy@k2biofuels.com with the subject "Data request" and we will respond within 30 days.' },
  { h: 'Cookies', b: 'We use first-party cookies only for session management and basic analytics. No third-party marketing trackers are loaded on this site.' },
  { h: 'Updates to this policy', b: 'Material changes will be posted on this page with an updated "Last updated" date. Continued use of our website after such updates constitutes acceptance.' },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="— Legal · Privacy" title="Privacy policy." italic="" body="Last updated · 17 May 2026. This policy explains what data we collect, why, and how we use it." />
      <LegalBody sections={privacySections} />
      <CTAStrip eyebrow="— Privacy questions" title="Want to know" italic="what data we hold?" body="Write to our DPO with the subject 'Data request' and a copy of any K2 correspondence." primary="Contact privacy@k2biofuels.com →" secondary="View terms of service" />
    </>
  );
}
