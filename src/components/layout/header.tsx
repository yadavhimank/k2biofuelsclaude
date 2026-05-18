'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
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

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: onDark ? 'var(--k2-ink)' : 'var(--k2-canvas)',
      borderBottom: `1px solid ${onDark ? 'rgba(250,250,247,0.08)' : 'var(--k2-border)'}`,
      color: onDark ? 'var(--k2-on-ink)' : 'var(--k2-ink)',
    }}>
      <div style={{
        maxWidth: 1320, margin: '0 auto',
        padding: '14px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 24,
      }}>
        <Link href="/" style={{
          display: 'flex', alignItems: 'center', gap: 12,
          color: 'inherit', textDecoration: 'none',
        }}>
          <K2Logo />
          <span style={{ fontWeight: 500, fontSize: 15, letterSpacing: '-0.01em' }}>
            K2 Biofuels
          </span>
        </Link>

        <nav style={{
          display: 'flex', gap: 28, fontSize: 13, alignItems: 'center',
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
            style={{
              fontSize: 12, padding: '8px 14px',
              border: `1px solid ${onDark ? 'rgba(250,250,247,0.3)' : 'var(--k2-ink)'}`,
              letterSpacing: 0.2, transition: 'all .15s ease',
              display: 'inline-block',
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
            aria-label="Menu"
            style={{
              display: 'none', background: 'transparent', border: 'none', padding: 8,
              cursor: 'pointer', color: 'inherit',
            }}
          >
            ☰
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div style={{
          background: onDark ? 'var(--k2-ink)' : 'var(--k2-canvas)',
          borderTop: '1px solid var(--k2-border)',
          padding: '12px 32px 20px',
        }} className="k2-nav-mobile">
          {items.map((r) => (
            <Link key={r.path} href={r.path}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block', padding: '10px 0',
                fontSize: 15, fontWeight: 500,
                borderBottom: '1px solid var(--k2-border)',
                color: pathname === r.path ? linkActiveColor : linkColor,
                textDecoration: 'none',
              }}>
              {r.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
