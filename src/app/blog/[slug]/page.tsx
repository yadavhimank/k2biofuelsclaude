import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS, type BlogPost } from '@/lib/blog-posts';
import { SITE_URL } from '@/lib/metadata';
import { ImgSlot } from '@/components/ui/img-slot';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Em } from '@/components/ui/em';
import { CTAStrip } from '@/components/layout/cta-strip';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Not Found' };
  const url = `${SITE_URL}/blog/${slug}`;
  return {
    title: `${post.title} | K2 Biofuels`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: 'K2 Biofuels',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [{ url: `${SITE_URL}/og/blog/${slug}.jpg`, width: 1200, height: 630 }],
    },
  };
}

function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];
  return `${day} ${months[month - 1]} ${year}`;
}

// ── Body block renderer ───────────────────────────────────────────────────────

function BodyBlock({ block }: { block: BlogPost['body'][number] }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 style={{
          fontSize: 'clamp(22px, 3vw, 32px)',
          fontWeight: 500,
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          margin: '52px 0 20px',
          maxWidth: 720,
          color: 'var(--k2-ink)',
        }}>
          {block.text}
        </h2>
      );

    case 'p':
      return (
        <p className="k2-blog-body-text" style={{
          lineHeight: 1.75,
          color: 'var(--k2-text-2)',
          margin: '0 0 24px',
          maxWidth: 720,
        }}>
          {block.text}
        </p>
      );

    case 'quote':
      return (
        <blockquote style={{
          borderLeft: '3px solid var(--k2-eyebrow)',
          margin: '40px 0',
          padding: '4px 0 4px 28px',
          maxWidth: 720,
        }}>
          <p style={{
            fontFamily: 'var(--k2-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            lineHeight: 1.45,
            color: 'var(--k2-ink)',
            margin: '0 0 12px',
            fontWeight: 400,
          }}>
            &ldquo;{block.text}&rdquo;
          </p>
          {block.cite && (
            <cite style={{
              fontFamily: 'var(--k2-mono)',
              fontSize: 13,
              color: 'var(--k2-text-3)',
              letterSpacing: '0.05em',
              fontStyle: 'normal',
            }}>
              — {block.cite}
            </cite>
          )}
        </blockquote>
      );

    case 'list':
      return (
        <ul style={{
          margin: '0 0 28px',
          paddingLeft: 20,
          maxWidth: 720,
        }}>
          {block.items.map((item, i) => (
            <li key={i} className="k2-blog-body-text" style={{
              lineHeight: 1.7,
              color: 'var(--k2-text-2)',
              marginBottom: 8,
            }}>
              {item}
            </li>
          ))}
        </ul>
      );
  }
}

// ── Related post card ─────────────────────────────────────────────────────────

function RelatedCard({ post }: { post: (typeof BLOG_POSTS)[number] }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="k2-blog-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid var(--k2-border-med)',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      {post.coverImage
        ? /* eslint-disable-next-line @next/next/no-img-element */
          <img src={post.coverImage} alt={post.title} style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }} />
        : <ImgSlot tone={post.coverTone} height={160} />
      }
      <div style={{ padding: '18px 20px 22px', flex: 1 }}>
        <span style={{
          fontFamily: 'var(--k2-mono)',
          fontSize: 12,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'var(--k2-eyebrow)',
          display: 'block',
          marginBottom: 8,
        }}>
          {post.category}
        </span>
        <h3 style={{
          margin: '0 0 10px',
          fontSize: 15,
          fontWeight: 500,
          letterSpacing: '-0.01em',
          lineHeight: 1.35,
          color: 'var(--k2-ink)',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {post.title}
        </h3>
        <span style={{
          fontFamily: 'var(--k2-mono)',
          fontSize: 12,
          color: 'var(--k2-text-3)',
          letterSpacing: '0.04em',
        }}>
          {formatDate(post.publishedAt)} · {post.readingMinutes} min
        </span>
      </div>
    </Link>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  // Related: same category, excluding current post; fall back to most recent
  const related = BLOG_POSTS
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const sameCatA = a.category === post.category ? 1 : 0;
      const sameCatB = b.category === post.category ? 1 : 0;
      if (sameCatB !== sameCatA) return sameCatB - sameCatA;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    })
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'K2 Biofuels Pvt. Ltd.',
      url: SITE_URL,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${slug}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Back link ──────────────────────────────────────────────────────── */}
      <div style={{ padding: '20px 32px 0', maxWidth: 1320, margin: '0 auto' }}>
        <Link
          href="/blog"
          style={{
            fontFamily: 'var(--k2-mono)',
            fontSize: 13,
            letterSpacing: '0.06em',
            color: 'var(--k2-text-2)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            textTransform: 'uppercase',
          }}
        >
          ← All posts
        </Link>
      </div>

      {/* ── Article header ─────────────────────────────────────────────────── */}
      <header style={{ padding: '32px 32px 48px', borderBottom: '1px solid var(--k2-border)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <Eyebrow style={{ marginBottom: 20 }}>{post.category}</Eyebrow>

          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 56px)',
            margin: '0 0 28px',
            fontWeight: 500,
            letterSpacing: '-0.03em',
            lineHeight: 1.08,
            maxWidth: 880,
            color: 'var(--k2-ink)',
          }}>
            {post.title}
          </h1>

          <div style={{
            fontFamily: 'var(--k2-mono)',
            fontSize: 13,
            color: 'var(--k2-text-3)',
            letterSpacing: '0.05em',
            display: 'flex',
            gap: 14,
            flexWrap: 'wrap',
            alignItems: 'center',
          }}>
            <span>{formatDate(post.publishedAt)}</span>
            <span>·</span>
            <span>{post.readingMinutes} min read</span>
            <span>·</span>
            <span>{post.author.name}</span>
            <span>·</span>
            <span style={{ textTransform: 'none' }}>{post.author.role}</span>
          </div>
        </div>
      </header>

      {/* ── Cover image ────────────────────────────────────────────────────── */}
      <div style={{ padding: '0 32px', maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ maxWidth: 960, margin: '48px 0' }}>
          {post.coverImage
            ? /* eslint-disable-next-line @next/next/no-img-element */
              <img src={post.coverImage} alt={post.title} style={{ width: '100%', height: 480, objectFit: 'cover', display: 'block' }} />
            : <ImgSlot tone={post.coverTone} height={480} />
          }
        </div>
      </div>

      {/* ── Article body ───────────────────────────────────────────────────── */}
      <article style={{ padding: '0 32px 80px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          {post.body.map((block, i) => (
            <BodyBlock key={i} block={block} />
          ))}

          {/* Author card */}
          <div style={{
            marginTop: 64,
            paddingTop: 32,
            borderTop: '1px solid var(--k2-border)',
            maxWidth: 720,
            display: 'flex',
            gap: 20,
            alignItems: 'flex-start',
          }}>
            <div style={{
              width: 48, height: 48, flexShrink: 0,
              background: 'var(--k2-ink)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--k2-on-ink)',
              fontFamily: 'var(--k2-serif)', fontStyle: 'italic', fontSize: 20,
            }}>
              {post.author.name.charAt(0)}
            </div>
            <div>
              <div style={{ fontWeight: 500, fontSize: 15, marginBottom: 4 }}>
                {post.author.name}
              </div>
              <div style={{
                fontFamily: 'var(--k2-mono)', fontSize: 13,
                color: 'var(--k2-text-3)', letterSpacing: '0.04em',
              }}>
                {post.author.role} · K2 Biofuels
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* ── Related posts ──────────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section style={{
          padding: '64px 32px',
          background: 'var(--k2-stone)',
          borderTop: '1px solid var(--k2-border)',
        }}>
          <div style={{ maxWidth: 1320, margin: '0 auto' }}>
            <div style={{ marginBottom: 32 }}>
              <Eyebrow style={{ marginBottom: 10 }}>— Related</Eyebrow>
              <p style={{ fontSize: 15, color: 'var(--k2-text-2)', margin: 0 }}>
                More from the{' '}
                <Em>{post.category}</Em>
                {' '}category
              </p>
            </div>
            <div className="k2-grid-3" style={{ gap: 24 }}>
              {related.map((r) => (
                <RelatedCard key={r.slug} post={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTAStrip
        eyebrow="— Talk to sales"
        title="Ready to run a trial"
        italic="at your plant?"
        body="Sample dispatch within 48 hours. Lab report on every load. Our technical team can join your first co-firing session."
        primary="Request a trial →"
        secondary="Download brochure"
        primaryTo="/contact"
      />
    </>
  );
}
