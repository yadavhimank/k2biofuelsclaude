import type { Metadata } from 'next';
import { PAGE_METADATA, SITE_URL } from '@/lib/metadata';
import { NEWSROOM_ITEMS } from '@/lib/newsroom';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Em } from '@/components/ui/em';
import { CTAStrip } from '@/components/layout/cta-strip';
import { UnifiedNewsroomClient } from './unified-newsroom-client';
import { NewsroomNewsletterStrip } from './newsletter-strip';

export const metadata: Metadata = PAGE_METADATA.newsroom;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'K2 Biofuels Newsroom',
  description: 'Press coverage, policy updates, and media from K2 Biofuels.',
  url: `${SITE_URL}/newsroom`,
  publisher: {
    '@type': 'Organization',
    name: 'K2 Biofuels Pvt. Ltd.',
    url: SITE_URL,
  },
};

export default function NewsroomPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero — full-bleed newsroom banner */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 600, marginTop: '-120px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/newsroom1.png"
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.30) 68%, rgba(0,0,0,0.75) 100%)' }} />

        {/* Top — eyebrow, title, body */}
        <div className="k2-section-pad" style={{ position: 'relative', zIndex: 1, width: '100%', color: 'var(--k2-on-ink)', paddingTop: 160 }}>
          <div style={{ maxWidth: 1320, margin: '0 auto' }}>
            <Eyebrow accent="#FFB37A" style={{ marginBottom: 22 }}>— Newsroom</Eyebrow>
            <h1 className="k2-h1" style={{ lineHeight: 1.04, letterSpacing: '-0.03em', fontWeight: 500, margin: '0 0 28px', maxWidth: 980, textShadow: '0 2px 24px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.9)' }}>
              News, insights &amp; stories from <Em color="#FFB37A">K2 Biofuels.</Em>
            </h1>
            <p className="k2-body-lg" style={{ lineHeight: 1.6, maxWidth: 720, color: 'rgba(250,250,247,0.92)', margin: 0, textShadow: '0 1px 12px rgba(0,0,0,0.8)' }}>
              Explore the latest news, industry insights, policy developments, sustainability initiatives and stories from our operations.
            </p>
          </div>
        </div>

        {/* Bottom — kicker */}
        <div className="k2-section-pad" style={{ position: 'relative', zIndex: 1, width: '100%', color: 'var(--k2-on-ink)', paddingBottom: 48 }}>
          <div style={{ maxWidth: 1320, margin: '0 auto' }}>
            <div className="k2-hero-kicker" style={{ paddingTop: 24, borderTop: '1px solid rgba(250,250,247,0.15)', color: 'rgba(250,250,247,0.6)' }}>
              {['Press', 'Industry & Policy', 'Sustainability', 'Operations'].map((k, i) => <span key={i}>● {k}</span>)}
            </div>
          </div>
        </div>
      </section>

      <UnifiedNewsroomClient items={NEWSROOM_ITEMS} />

      <NewsroomNewsletterStrip />

      <CTAStrip
        eyebrow="— Press contact"
        title="Writing about"
        italic="biofuels or air quality?"
        body="For press enquiries, interview requests, or plant visit arrangements, reach our communications team directly."
        primary="Email press team →"
        secondary="Download media kit"
        primaryTo="/contact"
      />
    </>
  );
}
