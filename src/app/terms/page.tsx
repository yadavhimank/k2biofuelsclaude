import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/lib/metadata';
import { LegalBody } from '@/components/ui/legal-body';
import { CTAStrip } from '@/components/layout/cta-strip';
import { PageHero } from '@/components/layout/page-hero';

export const metadata: Metadata = PAGE_METADATA.terms;

const termsSections = [
  { h: 'Use of this website', b: 'This website is provided for informational and commercial enquiry purposes. You agree to use it lawfully, not to attempt unauthorised access, and not to scrape content for republication without written permission.' },
  { h: 'Intellectual property', b: 'All content, branding, photography (when present), and documentation on this website is owned by K2 Biofuels Pvt. Ltd. or its licensors. You may share links and reasonable excerpts with attribution.' },
  { h: 'Product specifications', b: 'Specifications listed on the products page are typical values measured on representative batches. Actual values may vary within published tolerances. Lab reports issued with each commercial dispatch supersede website figures.' },
  { h: 'Commercial relationships', b: 'Enquiries received through this site do not constitute a binding offer. Commercial supply is governed by a separate signed agreement covering pricing, volumes, payment terms and quality remedies.' },
  { h: 'Limitation of liability', b: 'To the maximum extent permitted by law, K2 Biofuels is not liable for indirect or consequential damages arising from website use. Liability under commercial contracts is governed by the relevant signed agreement.' },
  { h: 'Governing law', b: 'These terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of the courts at Gurugram, Haryana.' },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="— Legal · Terms" title="Terms of service." italic="" body="Last updated · 17 May 2026. By using this website and our services, you agree to the terms below." />
      <LegalBody sections={termsSections} />
      <CTAStrip eyebrow="— Legal questions" title="Need clarification" italic="on contract terms?" body="Our commercial team handles contract language for ongoing supply agreements." primary="Talk to commercial →" secondary="View privacy policy" />
    </>
  );
}
