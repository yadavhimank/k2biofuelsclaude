'use client';

import { useState, useCallback, useEffect, useMemo } from 'react';
import { MonoCap } from '@/components/ui/mono-cap';
import { GALLERY_CATEGORIES } from './data';
import type { GalleryItem, GalleryCategory } from './data';

const CATEGORY_LABELS: Record<GalleryCategory, string> = {
  plant: 'Plant',
  inauguration: 'Inauguration',
  products: 'Products',
  sustainability: 'Sustainability',
  media: 'Media',
  culture: 'Culture',
};

interface Props {
  items: GalleryItem[];
}

export function GalleryClient({ items }: Props) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightbox, setLightbox] = useState<{ item: GalleryItem; idx: number } | null>(null);

  const filtered = useMemo(
    () => activeCategory === 'all' ? items : items.filter(i => i.category === activeCategory),
    [items, activeCategory],
  );

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: items.length };
    items.forEach(i => { map[i.category] = (map[i.category] || 0) + 1; });
    return map;
  }, [items]);

  const openLightbox = useCallback((item: GalleryItem, idx: number) => {
    setLightbox({ item, idx });
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const navigate = useCallback((dir: 1 | -1) => {
    if (!lightbox) return;
    const newIdx = (lightbox.idx + dir + filtered.length) % filtered.length;
    setLightbox({ item: filtered[newIdx], idx: newIdx });
  }, [lightbox, filtered]);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') navigate(1);
      else if (e.key === 'ArrowLeft') navigate(-1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, closeLightbox, navigate]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <>
      {/* ── Category filter strip ─────────────────────────────────────── */}
      <div
        style={{
          background: 'var(--k2-ink)',
          borderBottom: '1px solid rgba(250,250,247,0.1)',
          padding: '14px 32px',
        }}
      >
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div className="k2-gallery-filter">
            {GALLERY_CATEGORIES.map(cat => {
              const count = counts[cat.id] ?? 0;
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  className={`k2-gallery-filter-btn${active ? ' k2-gallery-active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                  aria-pressed={active}
                >
                  {cat.label}
                  <span
                    style={{
                      fontSize: 11,
                      padding: '1px 7px',
                      borderRadius: 10,
                      background: active
                        ? 'rgba(10,31,14,0.12)'
                        : 'rgba(250,250,247,0.1)',
                      opacity: active ? 0.65 : 0.5,
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Gallery grid ──────────────────────────────────────────────── */}
      <section style={{ padding: '40px 32px 96px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          {filtered.length === 0 ? (
            <div
              style={{
                padding: '96px 0',
                textAlign: 'center',
                color: 'var(--k2-text-3)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--k2-mono)',
                  fontSize: 12,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 12,
                }}
              >
                No photos yet
              </div>
              <p style={{ fontSize: 15, margin: 0, color: 'var(--k2-text-2)' }}>
                Photos coming soon — drop images in{' '}
                <code
                  style={{
                    fontFamily: 'var(--k2-mono)',
                    fontSize: 13,
                    background: 'var(--k2-stone)',
                    padding: '2px 6px',
                    borderRadius: 2,
                  }}
                >
                  /public/gallery/
                </code>{' '}
                and add them to{' '}
                <code
                  style={{
                    fontFamily: 'var(--k2-mono)',
                    fontSize: 13,
                    background: 'var(--k2-stone)',
                    padding: '2px 6px',
                    borderRadius: 2,
                  }}
                >
                  data.ts
                </code>
              </p>
            </div>
          ) : (
            <div className="k2-gallery-grid">
              {filtered.map((item, idx) => (
                <button
                  key={item.id}
                  className={`k2-gallery-item${item.span === 'wide' ? ' k2-gallery-wide' : ''}`}
                  onClick={() => openLightbox(item, idx)}
                  aria-label={`View photo: ${item.caption}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <div className="k2-gallery-overlay">
                    <MonoCap
                      style={{
                        fontSize: 10,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        opacity: 0.6,
                        marginBottom: 5,
                        color: '#fff',
                      }}
                    >
                      {CATEGORY_LABELS[item.category]}
                    </MonoCap>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: '#fff',
                        lineHeight: 1.3,
                      }}
                    >
                      {item.caption}
                    </div>
                    {item.subcaption && (
                      <div
                        style={{
                          fontSize: 12,
                          color: 'rgba(255,255,255,0.62)',
                          marginTop: 3,
                        }}
                      >
                        {item.subcaption}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox ──────────────────────────────────────────────────── */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.item.caption}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(5,12,7,0.94)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px 72px',
          }}
          onClick={closeLightbox}
        >
          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); navigate(-1); }}
            aria-label="Previous photo"
            style={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 44,
              height: 44,
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              borderRadius: 2,
              zIndex: 1001,
              transition: 'background 0.15s',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M12 3L6 9l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Image + caption */}
          <div
            onClick={e => e.stopPropagation()}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '88vw',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={lightbox.item.id}
              src={lightbox.item.src}
              alt={lightbox.item.alt}
              style={{
                maxWidth: '88vw',
                maxHeight: '72vh',
                objectFit: 'contain',
                display: 'block',
              }}
            />
            <div
              style={{
                marginTop: 18,
                textAlign: 'center',
                color: '#fff',
                maxWidth: 560,
              }}
            >
              <div style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.35 }}>
                {lightbox.item.caption}
              </div>
              {lightbox.item.subcaption && (
                <div
                  style={{
                    fontSize: 12,
                    opacity: 0.55,
                    marginTop: 5,
                    fontFamily: 'var(--k2-mono)',
                  }}
                >
                  {lightbox.item.subcaption}
                </div>
              )}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 12,
                  marginTop: 12,
                  opacity: 0.35,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--k2-mono)',
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {CATEGORY_LABELS[lightbox.item.category]}
                </span>
                <span style={{ fontSize: 10 }}>·</span>
                <span style={{ fontFamily: 'var(--k2-mono)', fontSize: 11 }}>
                  {lightbox.idx + 1} / {filtered.length}
                </span>
              </div>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); navigate(1); }}
            aria-label="Next photo"
            style={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 44,
              height: 44,
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              borderRadius: 2,
              zIndex: 1001,
              transition: 'background 0.15s',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M6 3l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Close */}
          <button
            onClick={closeLightbox}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              width: 40,
              height: 40,
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              borderRadius: 2,
              zIndex: 1001,
            }}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M1.5 1.5l12 12M13.5 1.5l-12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
