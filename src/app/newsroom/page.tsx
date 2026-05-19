import type { Metadata } from 'next';
import { PAGE_METADATA, SITE_URL } from '@/lib/metadata';
import { PRESS_ARTICLES, NEWS_VIDEOS, OFFICIAL_TWEETS } from '@/lib/newsroom';
import { PageHero } from '@/components/layout/page-hero';
import { CTAStrip } from '@/components/layout/cta-strip';
import { NewsroomClient } from './newsroom-client';
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

      <PageHero
        eyebrow="— In the news"
        title="Field, plant,"
        italic="and the policy frame around it."
        body="Press coverage, regulatory updates, and statements from officials shaping the biomass co-firing policy environment in India."
        kicker={['Press', 'Policy', 'Videos', 'Officials']}
      />

      <NewsroomClient
        articles={PRESS_ARTICLES}
        videos={NEWS_VIDEOS}
        tweets={OFFICIAL_TWEETS}
      />

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
