'use client';

import { useState, useEffect, useCallback } from 'react';
import { FAQ_ITEMS, CATEGORIES, type Category, type FAQItem } from './data';

// Precompute per-category totals (never changes at runtime)
const TOTAL_BY_CAT = CATEGORIES.reduce<Record<string, number>>((acc, cat) => {
  acc[cat] = FAQ_ITEMS.filter((i) => i.category === cat).length;
  return acc;
}, {});

const ALL_PILLS: (Category | 'All')[] = ['All', ...CATEGORIES];

// ── Accordion item ────────────────────────────────────────────────────────────

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <div id={item.id} style={{ borderBottom: '1px solid var(--k2-border)' }}>
      <button
        onClick={() => onToggle(item.id)}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 24,
          padding: '22px 0',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          fontFamily: 'inherit',
        }}
      >
        {/* spec: questions are h3 inside accordion button */}
        <h3 style={{
          margin: 0,
          fontSize: 17,
          fontWeight: 500,
          color: 'var(--k2-ink)',
          letterSpacing: '-0.01em',
          lineHeight: 1.4,
          flex: 1,
        }}>
          {item.q}
        </h3>
        <span aria-hidden style={{
          fontSize: 22,
          color: 'var(--k2-text-2)',
          transition: 'transform 0.2s ease',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          flexShrink: 0,
          lineHeight: 1,
          marginTop: 1,
          display: 'inline-block',
        }}>
          +
        </span>
      </button>

      <div style={{
        maxHeight: isOpen ? '2000px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.22s ease-out',
      }}>
        <p style={{
          fontSize: 15,
          lineHeight: 1.75,
          color: 'var(--k2-text-2)',
          margin: '0 0 28px',
          maxWidth: 720,
          paddingRight: 48,
        }}>
          {item.a}
        </p>
      </div>
    </div>
  );
}

// ── Category group (used in ungrouped view) ───────────────────────────────────

function CategoryGroup({
  category,
  items,
  openId,
  onToggle,
}: {
  category: Category;
  items: FAQItem[];
  openId: string | null;
  onToggle: (id: string) => void;
}) {
  return (
    <div style={{ marginBottom: 64 }}>
      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: 20,
        paddingBottom: 16,
        marginBottom: 0,
        borderBottom: '2px solid var(--k2-ink)',
      }}>
        {/* spec: categories are h2 — styled to match Eyebrow visual */}
        <h2 style={{
          margin: 0,
          fontSize: 11,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontWeight: 500,
          color: 'var(--k2-eyebrow)',
        }}>
          — {category}
        </h2>
        <span style={{
          fontFamily: 'var(--k2-mono)',
          fontSize: 10,
          color: 'var(--k2-text-3)',
          letterSpacing: '0.05em',
        }}>
          {items.length} {items.length === 1 ? 'question' : 'questions'}
        </span>
      </div>

      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

// ── Main shell ────────────────────────────────────────────────────────────────

export function FAQShell() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [openId, setOpenId] = useState<string | null>(null);

  // Auto-expand + scroll on anchor link
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const match = FAQ_ITEMS.find((f) => f.id === hash);
    if (!match) return;
    setOpenId(hash);
    setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 180);
  }, []);

  const handleToggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  const isFiltered = query.trim() !== '' || activeCategory !== 'All';

  const visible = FAQ_ITEMS.filter((item) => {
    if (activeCategory !== 'All' && item.category !== activeCategory) return false;
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q);
  });

  const grouped = CATEGORIES.map((cat) => ({
    category: cat,
    items: visible.filter((i) => i.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      {/* ── Sticky filter bar ─────────────────────────────────────────────── */}
      <div className="k2-faq-filter-bar">
        <div className="k2-faq-filter-inner">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions and answers…"
            style={{
              flex: 1,
              minWidth: 0,
              background: 'var(--k2-surface)',
              border: '1px solid var(--k2-border-med)',
              padding: '9px 14px',
              fontFamily: 'inherit',
              fontSize: 13,
              color: 'var(--k2-ink)',
              borderRadius: 2,
              outline: 'none',
              transition: 'border-color 0.15s ease',
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--k2-ink)'; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--k2-border-med)'; }}
          />

          <div className="k2-faq-pills">
            {ALL_PILLS.map((cat) => {
              const count = cat === 'All' ? FAQ_ITEMS.length : (TOTAL_BY_CAT[cat] ?? 0);
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    flexShrink: 0,
                    padding: '7px 12px',
                    fontFamily: 'var(--k2-mono)',
                    fontSize: 11,
                    letterSpacing: '0.05em',
                    borderRadius: 2,
                    border: `1px solid ${active ? 'var(--k2-ink)' : 'var(--k2-border-med)'}`,
                    background: active ? 'var(--k2-ink)' : 'transparent',
                    color: active ? 'var(--k2-on-ink)' : 'var(--k2-text-2)',
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
        </div>
      </div>

      {/* ── FAQ content ───────────────────────────────────────────────────── */}
      <section style={{ padding: '64px 32px 80px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>

          {visible.length === 0 ? (
            <div style={{ padding: '56px 0', borderTop: '2px solid var(--k2-ink)' }}>
              <span style={{
                fontFamily: 'var(--k2-mono)',
                fontSize: 12,
                color: 'var(--k2-text-3)',
                letterSpacing: '0.05em',
              }}>
                No matches for &ldquo;{query}&rdquo;
              </span>
            </div>
          ) : isFiltered ? (
            <>
              {/* Flat list with result count header */}
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 20,
                paddingBottom: 16,
                borderBottom: '2px solid var(--k2-ink)',
                marginBottom: 0,
              }}>
                <span style={{
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  color: 'var(--k2-eyebrow)',
                }}>
                  {visible.length} {visible.length === 1 ? 'result' : 'results'}
                  {query.trim() && ` for “${query.trim()}”`}
                  {activeCategory !== 'All' && ` · ${activeCategory}`}
                </span>
              </div>
              {visible.map((item) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={handleToggle}
                />
              ))}
            </>
          ) : (
            grouped.map((g) => (
              <CategoryGroup
                key={g.category}
                category={g.category}
                items={g.items}
                openId={openId}
                onToggle={handleToggle}
              />
            ))
          )}
        </div>
      </section>
    </>
  );
}
