'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { K2_ROUTES } from '@/lib/navigation';
import { K2Logo } from './logo';

interface K2HeaderProps {
  dark?: boolean;
}

function HamburgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect y="4"  width="22" height="2" rx="1" fill="currentColor" />
      <rect y="10" width="22" height="2" rx="1" fill="currentColor" />
      <rect y="16" width="22" height="2" rx="1" fill="currentColor" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="2" x2="2" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function K2Header({ dark = false }: K2HeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const onDark = dark;
  const items = K2_ROUTES.filter((r) => r.path !== '/');

  const linkColor       = onDark ? 'rgba(250,250,247,0.72)' : 'var(--k2-text-2)';
  const linkActiveColor = onDark ? 'var(--k2-on-ink)' : 'var(--k2-ink)';

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close panel on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      padding: '12px 20px',
      pointerEvents: 'none',
    }}>
      {/* ── Floating pill ── */}
      <div style={{
        maxWidth: 1320, margin: '0 auto',
        background: onDark ? 'rgba(18,18,18,0.88)' : 'rgba(250,250,247,0.88)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: `1px solid ${onDark ? 'rgba(250,250,247,0.10)' : 'rgba(0,0,0,0.08)'}`,
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        color: onDark ? 'var(--k2-on-ink)' : 'var(--k2-ink)',
        pointerEvents: 'auto',
        overflow: 'hidden',
      }}>
        <div className="k2-header-inner" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 24,
        }}>
          {/* Logo */}
          <Link href="/" style={{
            display: 'flex', alignItems: 'center',
            color: 'inherit', textDecoration: 'none',
          }}>
            <K2Logo size={40} />
          </Link>

          {/* Desktop nav */}
          <nav style={{
            display: 'flex', gap: 28, fontSize: 17, fontWeight: 500, alignItems: 'center',
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
            {/* Desktop CTA — hidden on mobile via CSS */}
            <Link href="/contact"
              className="k2-header-quote"
              style={{
                fontSize: 16, fontWeight: 500, padding: '8px 16px',
                border: `1px solid ${onDark ? 'rgba(250,250,247,0.3)' : 'var(--k2-ink)'}`,
                borderRadius: 8,
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

            {/* Hamburger — shown on mobile via CSS */}
            <button
              className="k2-nav-burger"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              style={{
                display: 'none', background: 'transparent', border: 'none',
                padding: 8, cursor: 'pointer', color: 'inherit',
                minHeight: 44, minWidth: 44,
              }}
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </div>

      {/* ── Backdrop overlay ── */}
      <div
        className={`k2-mobile-overlay${mobileOpen ? ' k2-mobile-overlay-open' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
        style={{ pointerEvents: mobileOpen ? 'auto' : 'none' }}
      />

      {/* ── Slide-in panel ── */}
      <div
        className={`k2-mobile-panel${mobileOpen ? ' k2-mobile-panel-open' : ''}`}
        aria-label="Site navigation"
        role="dialog"
        aria-modal="true"
        style={{ pointerEvents: 'auto' }}
      >
        {/* Panel header row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingBottom: 20, marginBottom: 8,
          borderBottom: '1px solid var(--k2-border)',
        }}>
          <Link href="/" onClick={() => setMobileOpen(false)} style={{ color: 'inherit', textDecoration: 'none' }}>
            <K2Logo size={32} />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            style={{
              background: 'transparent', border: 'none', cursor: 'pointer',
              padding: 8, color: 'var(--k2-ink)',
              minHeight: 44, minWidth: 44,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <CloseIcon />
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1 }}>
          {items.map((r) => {
            const active = pathname === r.path;
            return (
              <Link
                key={r.path}
                href={r.path}
                onClick={() => setMobileOpen(false)}
                className="k2-mobile-nav-link"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  fontSize: 17, fontWeight: active ? 600 : 500,
                  color: active ? 'var(--k2-ink)' : 'var(--k2-text-2)',
                  borderBottom: '1px solid var(--k2-border)',
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                }}
              >
                <span>{r.label}</span>
                <span style={{
                  fontSize: 12, color: active ? 'var(--k2-cta)' : 'var(--k2-text-3)',
                  opacity: active ? 1 : 0,
                  transition: 'opacity .15s ease',
                }}>●</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom CTA */}
        <div style={{ marginTop: 28 }}>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 8,
              background: 'var(--k2-ink)', color: 'var(--k2-on-ink)',
              padding: '14px 20px', borderRadius: 10,
              fontSize: 15, fontWeight: 600, letterSpacing: 0.2,
              textDecoration: 'none',
            }}
          >
            Request a quote →
          </Link>
          <p style={{
            marginTop: 12, textAlign: 'center',
            fontSize: 12, color: 'var(--k2-text-3)',
            fontFamily: 'var(--k2-mono)', letterSpacing: '0.04em',
          }}>
            Sample dispatched in 48 h
          </p>
        </div>
      </div>
    </header>
  );
}
