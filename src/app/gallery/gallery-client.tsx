'use client';

import { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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

const EASE = [0.16, 1, 0.3, 1] as const;

interface Props {
  items: GalleryItem[];
}

export function GalleryClient({ items }: Props) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightbox, setLightbox] = useState<{ item: GalleryItem; idx: number } | null>(null);
  const [direction, setDirection] = useState(0);

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
    setDirection(0);
    setLightbox({ item, idx });
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const navigate = useCallback((dir: 1 | -1) => {
    setLightbox(current => {
      if (!current) return current;
      setDirection(dir);
      const newIdx = (current.idx + dir + filtered.length) % filtered.length;
      return { item: filtered[newIdx], idx: newIdx };
    });
  }, [filtered]);

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
      <div className="k2-gallery-filter-bar">
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
                  {active && (
                    <motion.span
                      layoutId="gallery-filter-pill"
                      className="k2-gallery-filter-pill"
                      transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 0.8 }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 1 }}>{cat.label}</span>
                  <span
                    style={{
                      position: 'relative',
                      zIndex: 1,
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
      <section style={{ padding: '48px 32px 96px' }}>
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
              <AnimatePresence initial={false}>
                {filtered.map((item, idx) => (
                  <GalleryCard
                    key={item.id}
                    item={item}
                    idx={idx}
                    onOpen={() => openLightbox(item, idx)}
                  />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            item={lightbox.item}
            idx={lightbox.idx}
            total={filtered.length}
            direction={direction}
            onClose={closeLightbox}
            onNavigate={navigate}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function GalleryCard({
  item,
  idx,
  onOpen,
}: {
  item: GalleryItem;
  idx: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }, []);

  return (
    <motion.button
      ref={ref}
      layout
      initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.22 } }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.55, delay: (idx % 6) * 0.05, ease: EASE }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      className={`k2-gallery-item${item.span === 'wide' ? ' k2-gallery-wide' : ''}`}
      onClick={onOpen}
      aria-label={`View photo: ${item.caption}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.src} alt={item.alt} loading="lazy" />

      <span className="k2-gallery-chip">{CATEGORY_LABELS[item.category]}</span>

      <div className="k2-gallery-spotlight" aria-hidden="true" />

      <div className="k2-gallery-overlay">
        <div className="k2-gallery-overlay-content">
          <div style={{ fontSize: 14, fontWeight: 500, color: '#fff', lineHeight: 1.3 }}>
            {item.caption}
          </div>
          {item.subcaption && (
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.62)', marginTop: 3 }}>
              {item.subcaption}
            </div>
          )}
        </div>
      </div>
    </motion.button>
  );
}

function Lightbox({
  item,
  idx,
  total,
  direction,
  onClose,
  onNavigate,
}: {
  item: GalleryItem;
  idx: number;
  total: number;
  direction: number;
  onClose: () => void;
  onNavigate: (dir: 1 | -1) => void;
}) {
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 0.28 }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(5,12,7,0.92)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 72px',
      }}
      onClick={onClose}
    >
      {/* Prev */}
      <motion.button
        onClick={e => { e.stopPropagation(); onNavigate(-1); }}
        aria-label="Previous photo"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
        className="k2-lightbox-nav-btn"
        style={{ left: 16 }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M12 3L6 9l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>

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
        <div style={{ position: 'relative', maxWidth: '88vw', maxHeight: '72vh' }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={item.id}
              src={item.src}
              alt={item.alt}
              initial={{ opacity: 0, x: direction * 48, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -direction * 48, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 0.6 }}
              style={{
                maxWidth: '88vw',
                maxHeight: '72vh',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </AnimatePresence>
        </div>

        <motion.div
          key={`${item.id}-caption`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            marginTop: 18,
            textAlign: 'center',
            color: '#fff',
            maxWidth: 560,
          }}
        >
          <div style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.35 }}>
            {item.caption}
          </div>
          {item.subcaption && (
            <div
              style={{
                fontSize: 12,
                opacity: 0.55,
                marginTop: 5,
                fontFamily: 'var(--k2-mono)',
              }}
            >
              {item.subcaption}
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
              {CATEGORY_LABELS[item.category]}
            </span>
            <span style={{ fontSize: 10 }}>·</span>
            <span style={{ fontFamily: 'var(--k2-mono)', fontSize: 11 }}>
              {idx + 1} / {total}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Next */}
      <motion.button
        onClick={e => { e.stopPropagation(); onNavigate(1); }}
        aria-label="Next photo"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
        className="k2-lightbox-nav-btn"
        style={{ right: 16 }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M6 3l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>

      {/* Close */}
      <motion.button
        onClick={onClose}
        aria-label="Close"
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.25 }}
        className="k2-lightbox-close-btn"
      >
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M1.5 1.5l12 12M13.5 1.5l-12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </motion.button>
    </motion.div>
  );
}
