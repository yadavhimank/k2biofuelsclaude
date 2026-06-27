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
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      padding: '12px 20px',
      pointerEvents: 'none',
    }}>
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
          <Link href="/" style={{
            display: 'flex', alignItems: 'center',
            color: 'inherit', textDecoration: 'none',
          }}>
            <K2Logo size={40} />
          </Link>

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

        {mobileOpen && (
          <div style={{
            borderTop: `1px solid ${onDark ? 'rgba(250,250,247,0.08)' : 'rgba(0,0,0,0.07)'}`,
          }} className="k2-nav-mobile k2-mobile-menu">
            {items.map((r) => (
              <Link key={r.path} href={r.path}
                onClick={() => setMobileOpen(false)}
                className="k2-mobile-nav-link"
                style={{
                  fontSize: 15, fontWeight: 500,
                  borderBottom: `1px solid ${onDark ? 'rgba(250,250,247,0.06)' : 'rgba(0,0,0,0.06)'}`,
                  color: pathname === r.path ? linkActiveColor : linkColor,
                  textDecoration: 'none',
                }}>
                {r.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
