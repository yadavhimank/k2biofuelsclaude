'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ImgSlot } from '@/components/ui/img-slot';
import type { BlogPostCard } from '@/lib/blog-posts';

type Category = 'All' | 'Sustainability' | 'Industry' | 'Policy' | 'Operations' | 'Company';
const CATS: Category[] = ['All', 'Sustainability', 'Industry', 'Policy', 'Operations', 'Company'];

function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${day} ${months[month - 1]} ${year}`;
}

function BlogCard({ post }: { post: BlogPostCard }) {
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
          <img src={post.coverImage} alt={post.title} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} />
        : <ImgSlot tone={post.coverTone} height={200} />
      }
      <div style={{ padding: '20px 22px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <span style={{
          fontFamily: 'var(--k2-mono)',
          fontSize: 12,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'var(--k2-eyebrow)',
          display: 'block',
          marginBottom: 10,
        }}>
          {post.category}
        </span>
        <h3 style={{
          margin: '0 0 10px',
          fontSize: 17,
          fontWeight: 500,
          letterSpacing: '-0.015em',
          lineHeight: 1.3,
          color: 'var(--k2-ink)',
          // 2-line clamp
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {post.title}
        </h3>
        <p style={{
          margin: '0 0 18px',
          fontSize: 15,
          lineHeight: 1.65,
          color: 'var(--k2-text-2)',
          flex: 1,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {post.excerpt}
        </p>
        <div style={{
          fontFamily: 'var(--k2-mono)',
          fontSize: 12,
          color: 'var(--k2-text-3)',
          letterSpacing: '0.04em',
          display: 'flex',
          gap: 10,
          alignItems: 'center',
        }}>
          <span>{formatDate(post.publishedAt)}</span>
          <span>·</span>
          <span>{post.readingMinutes} min</span>
        </div>
      </div>
    </Link>
  );
}

export function BlogFilter({ posts }: { posts: BlogPostCard[] }) {
  const searchParams = useSearchParams();
  const [active, setActive] = useState<Category>(() => {
    const cat = searchParams.get('category');
    return (CATS.includes(cat as Category) ? cat : 'All') as Category;
  });

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && CATS.includes(cat as Category)) setActive(cat as Category);
  }, [searchParams]);

  const counts = CATS.reduce<Record<string, number>>((acc, cat) => {
    acc[cat] = cat === 'All' ? posts.length : posts.filter((p) => p.category === cat).length;
    return acc;
  }, {});

  const visible = active === 'All' ? posts : posts.filter((p) => p.category === active);

  return (
    <section style={{ padding: '0 32px 80px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>

        {/* Filter pills */}
        <div style={{
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap',
          paddingBottom: 32,
          borderBottom: '1px solid var(--k2-border)',
          marginBottom: 32,
        }}>
          {CATS.map((cat) => {
            const isActive = active === cat;
            const count = counts[cat] ?? 0;
            if (count === 0 && cat !== 'All') return null;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: '7px 12px',
                  fontFamily: 'var(--k2-mono)',
                  fontSize: 13,
                  letterSpacing: '0.05em',
                  borderRadius: 2,
                  border: `1px solid ${isActive ? 'var(--k2-ink)' : 'var(--k2-border-med)'}`,
                  background: isActive ? 'var(--k2-ink)' : 'transparent',
                  color: isActive ? 'var(--k2-on-ink)' : 'var(--k2-text-2)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.15s ease, color 0.15s ease, border-color 0.15s ease',
                  minHeight: 36,
                }}
              >
                {cat} · {count}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        {visible.length > 0 ? (
          <div className="k2-grid-3" style={{ gap: 24 }}>
            {visible.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p style={{ color: 'var(--k2-text-3)', fontFamily: 'var(--k2-mono)', fontSize: 14 }}>
            No posts in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
