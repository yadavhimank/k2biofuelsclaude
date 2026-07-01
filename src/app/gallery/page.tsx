import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/lib/metadata';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Em } from '@/components/ui/em';
import { CTAStrip } from '@/components/layout/cta-strip';
import { GalleryClient } from './gallery-client';
import { GALLERY_ITEMS } from './data';

export const metadata: Metadata = PAGE_METADATA.gallery;

export default function GalleryPage() {
  return (
    <>
      {/* Hero — full-bleed banner */}
      <section
        style={{
          position: 'relative',
          height: '70vh',
          minHeight: 520,
          marginTop: '-120px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/infrabanner.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.42) 55%, rgba(0,0,0,0.12) 72%, rgba(0,0,0,0.68) 100%)',
          }}
        />

        {/* Top — eyebrow, title, body */}
        <div
          className="k2-section-pad"
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            color: 'var(--k2-on-ink)',
            paddingTop: 160,
          }}
        >
          <div style={{ maxWidth: 1320, margin: '0 auto' }}>
            <Eyebrow accent="#FFB37A" style={{ marginBottom: 22 }}>
              — Media gallery · 2026
            </Eyebrow>
            <h1
              className="k2-h1"
              style={{
                lineHeight: 1.04,
                letterSpacing: '-0.03em',
                fontWeight: 500,
                margin: '0 0 28px',
                maxWidth: 860,
              }}
            >
              K2 Biofuels,{' '}
              <Em color="#FFB37A">in pictures.</Em>
            </h1>
            <p
              className="k2-body-lg"
              style={{
                lineHeight: 1.6,
                maxWidth: 640,
                color: 'rgba(250,250,247,0.90)',
                margin: 0,
                textShadow: '0 1px 12px rgba(0,0,0,0.8)',
              }}
            >
              Plant operations, inauguration milestones, products in the field,
              and the farms behind our feedstock.
            </p>
          </div>
        </div>

        {/* Bottom — kicker */}
        <div
          className="k2-section-pad"
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            color: 'var(--k2-on-ink)',
            paddingBottom: 40,
          }}
        >
          <div style={{ maxWidth: 1320, margin: '0 auto' }}>
            <div
              className="k2-hero-kicker"
              style={{
                paddingTop: 20,
                borderTop: '1px solid rgba(250,250,247,0.15)',
                color: 'rgba(250,250,247,0.58)',
              }}
            >
              {[
                `${GALLERY_ITEMS.length} photos`,
                'Plant · Products',
                'Inauguration · Sustainability',
              ].map((k, i) => (
                <span key={i}>● {k}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter bar + gallery grid + lightbox (client) */}
      <GalleryClient items={GALLERY_ITEMS} />

      <CTAStrip
        eyebrow="— Get in touch"
        title="Tour the plant."
        italic="See it yourself."
        body="We welcome procurement heads, energy managers and consultants. Schedule a site visit to Rewari — sample dispatch on the same day."
        primary="Schedule a visit →"
        secondary="Request brochure"
      />
    </>
  );
}
