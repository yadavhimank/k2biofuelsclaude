'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { K2_ROUTES } from '@/lib/navigation';
import { K2Logo } from './logo';

interface K2HeaderProps {
  dark?: boolean;
}

export function K2Header({ dark = false }: K2HeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const onDark = dark;
  const items = K2_ROUTES.filter((r) => r.path !== '/');

  const linkColor      = onDark ? 'rgba(250,250,247,0.72)' : 'var(--k2-text-2)';
  const linkActiveColor = onDark ? 'var(--k2-on-ink)' : 'var(--k2-ink)';

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: onDark ? 'var(--k2-ink)' : 'var(--k2-canvas)',
      borderBottom: `1px solid ${onDark ? 'rgba(250,250,247,0.08)' : 'var(--k2-border)'}`,
      color: onDark ? 'var(--k2-on-ink)' : 'var(--k2-ink)',
    }}>
      <div className="k2-header-inner" style={{
        maxWidth: 1320, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 24,
      }}>
        <Link href="/" style={{
          display: 'flex', alignItems: 'center',
          color: 'inherit', textDecoration: 'none',
        }}>
          <K2Logo size={44} />
        </Link>

        <nav style={{
          display: 'flex', gap: 28, fontSize: 15, alignItems: 'center',
        }} className="k2-nav-desktop">
          {items.map((r) => {
            const active = pathname === r.path;
            return (
              <Link key={r.path} href={r.path} style={{
                color: active ? linkActiveColor : linkColor,
                paddingBottom: 2,
                borderBottom: active ? `1px solid ${linkActiveColor}` : '1px solid transparent',
                transition: 'color .15s ease, border-color .15s ease',
                textDecoration: 'none',
              }}>
                {r.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Link href="/contact"
            className="k2-header-quote"
            style={{
              fontSize: 14, padding: '8px 14px',
              border: `1px solid ${onDark ? 'rgba(250,250,247,0.3)' : 'var(--k2-ink)'}`,
              letterSpacing: 0.2, transition: 'all .15s ease',
              color: 'inherit', textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = onDark ? 'rgba(250,250,247,0.06)' : 'var(--k2-ink)';
              e.currentTarget.style.color = 'var(--k2-on-ink)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'inherit';
            }}
          >
            Request quote →
          </Link>
          <button
            className="k2-nav-burger"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            style={{
              display: 'none', background: 'transparent', border: 'none', padding: 8,
              cursor: 'pointer', color: 'inherit', minHeight: 44, minWidth: 44,
              fontSize: 20, lineHeight: 1,
            }}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Backdrop overlay */}
      <div
        className={`k2-mobile-overlay${mobileOpen ? ' k2-mobile-overlay-open' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in panel from right */}
      <div className={`k2-mobile-panel${mobileOpen ? ' k2-mobile-panel-open' : ''}`}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: 8, paddingBottom: 20,
          borderBottom: '1px solid var(--k2-border)',
        }}>
          <K2Logo size={32} />
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            style={{
              background: 'transparent', border: 'none', cursor: 'pointer',
              padding: 8, color: 'var(--k2-ink)', fontSize: 20, lineHeight: 1,
              minHeight: 44, minWidth: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ✕
          </button>
        </div>
        {items.map((r) => (
          <Link key={r.path} href={r.path}
            onClick={() => setMobileOpen(false)}
            className="k2-mobile-nav-link"
            style={{
              fontSize: 15, fontWeight: 500,
              borderBottom: '1px solid var(--k2-border)',
              color: pathname === r.path ? 'var(--k2-ink)' : 'var(--k2-text-2)',
              textDecoration: 'none',
            }}>
            {r.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setMobileOpen(false)}
          style={{
            display: 'block', marginTop: 24,
            background: 'var(--k2-ink)', color: 'var(--k2-on-ink)',
            textAlign: 'center', padding: '12px 20px',
            fontSize: 14, letterSpacing: 0.2, textDecoration: 'none',
          }}
        >
          Request quote →
        </Link>
      </div>
    </header>
  );
}
