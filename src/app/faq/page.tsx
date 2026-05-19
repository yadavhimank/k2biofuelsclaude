import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/lib/metadata';
import { PageHero } from '@/components/layout/page-hero';
import { CTAStrip } from '@/components/layout/cta-strip';
import { FAQShell } from './faq-shell';
import { FAQ_ITEMS } from './data';

export const metadata: Metadata = PAGE_METADATA.faq;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="— Frequently asked questions"
        title="Everything procurement"
        italic="needs to ask."
        body="30 commonly asked questions across five categories — specs and GCV, sustainability and compliance, logistics, partnerships, and regulatory requirements."
        kicker={['Products · 12', 'Sustainability · 6', 'Logistics · 5', 'Partnerships · 4', 'Compliance · 3']}
      />

      <FAQShell />

      <CTAStrip
        eyebrow="— Talk to sales"
        title="Didn't find"
        italic="your answer?"
        body="Our sales team responds within one business day. For urgent matters, call +91 88750 07733."
        primary="Start a conversation →"
        secondary="Download brochure"
        primaryTo="/contact"
      />
    </>
  );
}
