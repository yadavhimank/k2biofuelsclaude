import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import { PAGE_METADATA } from '@/lib/metadata';
import { BLOG_POSTS, type BlogPostCard } from '@/lib/blog-posts';
import { Em } from '@/components/ui/em';
import { ImgSlot } from '@/components/ui/img-slot';
import { Eyebrow } from '@/components/ui/eyebrow';
import { BlogFilter } from './blog-filter';
import { BlogNewsletterCTA } from './newsletter-cta';

export const metadata: Metadata = PAGE_METADATA.blog;

function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${day} ${months[month - 1]} ${year}`;
}

export default function BlogPage() {
  // Sort descending by date; featured = most recent
  const sorted = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  const featured = sorted[0];
  const rest = sorted.slice(1);

  // Strip body before passing through server→client boundary
  const cards: BlogPostCard[] = rest.map(({ body: _body, ...card }) => card);

  return (
    <>
      {/* Hero — full-bleed blog banner */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 600, marginTop: '-120px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/blogbanner.png"
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.10) 70%, rgba(0,0,0,0.65) 100%)' }} />

        {/* Top — eyebrow, title, body */}
        <div className="k2-section-pad" style={{ position: 'relative', zIndex: 1, width: '100%', color: 'var(--k2-on-ink)', paddingTop: 160 }}>
          <div style={{ maxWidth: 1320, margin: '0 auto' }}>
            <Eyebrow accent="#FFB37A" style={{ marginBottom: 22 }}>— Field notes &amp; analysis</Eyebrow>
            <h1 className="k2-h1" style={{ lineHeight: 1.04, letterSpacing: '-0.03em', fontWeight: 500, margin: '0 0 28px', maxWidth: 980 }}>
              Writing from <Em color="#FFB37A">the plant floor.</Em>
            </h1>
            <p className="k2-body-lg" style={{ lineHeight: 1.6, maxWidth: 720, color: 'rgba(250,250,247,0.92)', margin: 0, textShadow: '0 1px 12px rgba(0,0,0,0.8)' }}>
              Our technical team, policy analysts, and operations managers write about what they actually work on — combustion chemistry, feedstock sourcing, regulatory compliance, and the economics of switching from coal.
            </p>
          </div>
        </div>

        {/* Bottom — kicker */}
        <div className="k2-section-pad" style={{ position: 'relative', zIndex: 1, width: '100%', color: 'var(--k2-on-ink)', paddingBottom: 48 }}>
          <div style={{ maxWidth: 1320, margin: '0 auto' }}>
            <div className="k2-hero-kicker" style={{ paddingTop: 24, borderTop: '1px solid rgba(250,250,247,0.15)', color: 'rgba(250,250,247,0.6)' }}>
              {['Industry', 'Policy', 'Sustainability', 'Operations'].map((k, i) => <span key={i}>● {k}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured post ─────────────────────────────────────────────────── */}
      <section style={{ padding: '48px 32px 0', borderBottom: '1px solid var(--k2-border)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ marginBottom: 20 }}>
            <Eyebrow>— Latest</Eyebrow>
          </div>

          <Link
            href={`/blog/${featured.slug}`}
            className="k2-blog-featured k2-grid-stack-mobile"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: 0,
              border: '1px solid var(--k2-border-med)',
              textDecoration: 'none',
              color: 'inherit',
              marginBottom: 64,
            }}
          >
            {featured.coverImage
              ? /* eslint-disable-next-line @next/next/no-img-element */
                <img src={featured.coverImage} alt={featured.title} style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }} />
              : <ImgSlot tone={featured.coverTone} height={420} />
            }

            <div style={{
              padding: '40px 44px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              borderLeft: '1px solid var(--k2-border-med)',
            }}>
              <Eyebrow style={{ marginBottom: 18 }}>{featured.category}</Eyebrow>
              <h2 style={{
                fontSize: 'clamp(22px, 2.8vw, 36px)',
                margin: '0 0 18px',
                fontWeight: 500,
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
                color: 'var(--k2-ink)',
              }}>
                {featured.title}
              </h2>
              <p style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: 'var(--k2-text-2)',
                margin: '0 0 32px',
                flex: 1,
              }}>
                {featured.excerpt}
              </p>
              <div style={{
                fontFamily: 'var(--k2-mono)',
                fontSize: 13,
                color: 'var(--k2-text-3)',
                letterSpacing: '0.04em',
                display: 'flex',
                gap: 12,
                flexWrap: 'wrap',
                alignItems: 'center',
              }}>
                <span>{formatDate(featured.publishedAt)}</span>
                <span>·</span>
                <span>{featured.readingMinutes} min read</span>
                <span>·</span>
                <span>{featured.author.name}</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Remaining posts with filter ───────────────────────────────────── */}
      <section style={{ padding: '48px 0 0' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ marginBottom: 28 }}>
            <Eyebrow>— All posts</Eyebrow>
          </div>
        </div>
      </section>
      <Suspense fallback={null}>
        <BlogFilter posts={cards} />
      </Suspense>

      {/* ── Newsletter CTA ────────────────────────────────────────────────── */}
      <BlogNewsletterCTA />
    </>
  );
}
