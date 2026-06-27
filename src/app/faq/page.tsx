import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/lib/metadata';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Em } from '@/components/ui/em';
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

      {/* Hero — full-bleed FAQ banner */}
      <section style={{ position: 'relative', minHeight: 520, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/faqbanner.png"
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.52)' }} />
        <div className="k2-section-pad" style={{ position: 'relative', zIndex: 1, width: '100%', color: 'var(--k2-on-ink)' }}>
          <div style={{ maxWidth: 1320, margin: '0 auto' }}>
            <Eyebrow accent="#FFB37A" style={{ marginBottom: 22 }}>— Frequently asked questions</Eyebrow>
            <h1 className="k2-h1" style={{ lineHeight: 1.04, letterSpacing: '-0.03em', fontWeight: 500, margin: '0 0 28px', maxWidth: 980 }}>
              Everything procurement <Em color="#FFB37A">needs to ask.</Em>
            </h1>
            <p className="k2-body-lg" style={{ lineHeight: 1.6, maxWidth: 720, color: 'rgba(250,250,247,0.78)', margin: 0 }}>
              30 commonly asked questions across five categories — specs and GCV, sustainability and compliance, logistics, partnerships, and regulatory requirements.
            </p>
            <div className="k2-hero-kicker" style={{ marginTop: 36, paddingTop: 24, borderTop: '1px solid rgba(250,250,247,0.15)', color: 'rgba(250,250,247,0.6)' }}>
              {['Products · 12', 'Sustainability · 6', 'Logistics · 5', 'Partnerships · 4', 'Compliance · 3'].map((k, i) => <span key={i}>● {k}</span>)}
            </div>
          </div>
        </div>
      </section>

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
