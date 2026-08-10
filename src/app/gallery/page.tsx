import type { Metadata } from 'next';
import Image from 'next/image';
import { PAGE_METADATA } from '@/lib/metadata';
import { CTAStrip } from '@/components/layout/cta-strip';
import { GalleryClient } from './gallery-client';
import { GalleryHeroCopy } from './gallery-hero-copy';
import { GALLERY_ITEMS } from './data';

export const metadata: Metadata = PAGE_METADATA.gallery;

export default function GalleryPage() {
  return (
    <>
      {/* Hero — full-bleed banner */}
      <section
        className="k2-gallery-hero"
        style={{
          position: 'relative',
          height: '100vh',
          minHeight: 600,
          marginTop: '-120px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden',
        }}
      >
        <div className="k2-gallery-hero-media">
          <Image
            src="/gallerynew1.png"
            alt=""
            aria-hidden="true"
            fill
            preload
            sizes="100vw"
            className="k2-gallery-hero-img"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(7,17,12,0.66) 0%, rgba(7,17,12,0.42) 48%, rgba(7,17,12,0.20) 68%, rgba(7,17,12,0.72) 100%)',
          }}
        />

        <GalleryHeroCopy
          kickers={[
            `${GALLERY_ITEMS.length} photos`,
            'Plant · Products',
            'Inauguration · Sustainability',
          ]}
        />
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
