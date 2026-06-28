'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { K2_ROUTES } from '@/lib/navigation';
import { K2Logo } from './logo';

interface K2HeaderProps {
  dark?: boolean;
}

function ArrowRightIcon() {
  return (
    <svg
      className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
      width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"
    >
      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect y="4"  width="22" height="2" rx="1" fill="currentColor"/>
      <rect y="10" width="22" height="2" rx="1" fill="currentColor"/>
      <rect y="16" width="22" height="2" rx="1" fill="currentColor"/>
    </svg>
  );
}

function CloseMenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <line x1="2"  y1="2"  x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="18" y1="2"  x2="2"  y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function K2Header({ dark = false }: K2HeaderProps) {
  const pathname   = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const items = K2_ROUTES.filter((r) => r.path !== '/');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  /* ── Derived styles ─────────────────────────────────────────────────────── */
  const pillBg     = scrolled ? 'rgba(42,43,36,0.97)' : 'rgba(58,59,50,0.90)';
  const pillShadow = scrolled
    ? '0 24px 80px rgba(0,0,0,.32)'
    : '0 20px 60px rgba(0,0,0,.22)';

  return (
    <header className="fixed inset-x-0 top-6 z-50">

      {/* ════════════════════════════════════════════════════════════════════
          DESKTOP  xl+
      ════════════════════════════════════════════════════════════════════ */}
      <div className="hidden xl:block px-8">
        <div className="max-w-[1600px] mx-auto">

          {/* Pill */}
          <div
            className="relative h-24 rounded-[36px] overflow-hidden border border-white/[0.08] transition-shadow duration-500"
            style={{
              background:           pillBg,
              boxShadow:            pillShadow,
              backdropFilter:       'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              transition:           'background 0.5s, box-shadow 0.5s',
            }}
          >

            {/* ── White logo section ──────────────────────────────────────────
                Outer wrapper carries drop-shadow so it follows the clipped edge.
                Inner div uses clip-path: path() with a concave cubic bezier on
                the right side — both control points pulled LEFT to x=192,
                creating a ~17px inward dip (≈ 75px equivalent radius).

                Geometry (height 96px):
                  flat top/bottom at x=215
                  concave midpoint at x=197.75  (dip = 17.25px)
                  R ≈ 75px  (within the 70–90px spec)

                The pill's overflow:hidden clips the left rounded corners to
                match border-radius:36px — no extra work needed on the left side.
            ─────────────────────────────────────────────────────────────── */}
            <div
              className="absolute left-0 inset-y-0 z-10 pointer-events-none"
              style={{ width: '260px', filter: 'drop-shadow(4px 0 12px rgba(0,0,0,0.14))' }}
              aria-hidden="true"
            >
              <div
                className="absolute inset-0 bg-white"
                style={{ clipPath: 'path("M 0,0 H 215 C 192,0 192,96 215,96 H 0 Z")' }}
              />
            </div>

            {/* Logo — pointer-events on, sits above white area */}
            <Link href="/" className="absolute left-10 top-1/2 -translate-y-1/2 z-20">
              <K2Logo size={74} />
            </Link>

            {/* ── CSS Grid: [logo-spacer | nav | cta] ─────────────────────────
                220px spacer clears the white area's max extent (215px) plus
                the 4px shadow spread, so nav never overlaps white.
                Nav gets 1fr — always perfectly centered.
            ─────────────────────────────────────────────────────────────── */}
            <div
              className="h-full items-center relative z-10"
              style={{ display: 'grid', gridTemplateColumns: '220px 1fr 256px' }}
            >
              {/* spacer */}
              <div />

              {/* Navigation */}
              <nav className="flex items-center justify-center gap-6 2xl:gap-[40px]">
                {items.map((r) => {
                  const active = pathname === r.path || pathname.startsWith(r.path + '/');
                  return (
                    <Link
                      key={r.path}
                      href={r.path}
                      className="group relative text-[15px] 2xl:text-[18px] font-semibold tracking-[-0.02em] whitespace-nowrap transition-all duration-350 hover:-translate-y-0.5"
                      style={{ color: active ? '#FF8A2B' : 'rgba(255,255,255,0.92)' }}
                    >
                      {r.label}
                      {/* Underline — expands from center on hover, 75% on active */}
                      <span
                        className={`absolute left-1/2 -translate-x-1/2 -bottom-[5px] h-[2px] rounded-full bg-[#FF8A2B] transition-all duration-[350ms] ${
                          active ? 'w-[75%]' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* CTA — 16px inset from right edge */}
              <div className="flex items-center justify-end pr-4">
                <Link
                  href="/contact"
                  className="group flex h-[58px] items-center gap-3 rounded-full border border-[#FF8C2A] bg-[#F06518] px-6 2xl:px-8 text-[15px] 2xl:text-[17px] font-semibold text-white whitespace-nowrap transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#FF7422]"
                  style={{ boxShadow: '0 12px 32px rgba(240,101,24,.40)' }}
                >
                  Request quote
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ════════════════════════════════════════════════════════════════════
          MOBILE  < xl
      ════════════════════════════════════════════════════════════════════ */}
      {/* ── Mobile top bar ── */}
      <div
        className="xl:hidden flex items-center justify-between px-5 h-[60px] mx-4 rounded-full border border-white/[0.08]"
        style={{
          background:           'rgba(58,59,50,0.94)',
          boxShadow:            '0 8px 32px rgba(0,0,0,.22)',
          backdropFilter:       'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        }}
      >
        <Link href="/" className="shrink-0">
          <K2Logo size={40} />
        </Link>
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-white/10 transition-colors duration-150"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          <MenuIcon />
        </button>
      </div>

      {/* ── Mobile slide-in panel ── */}
      {mobileOpen && (
        <div className="xl:hidden fixed inset-0 z-60">

          {/* Dim backdrop — click to close */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* White panel sliding in from right */}
          <div
            className="absolute right-0 top-0 bottom-0 w-[78%] sm:w-100 bg-white flex flex-col"
            style={{ boxShadow: '-8px 0 48px rgba(0,0,0,0.18)', animation: 'k2PanelIn 0.28s cubic-bezier(0.32,0.72,0,1) both' }}
          >

            {/* Panel header */}
            <div className="flex items-center justify-between px-7 py-5 border-b border-gray-100">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <K2Logo size={44} />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-10 h-10 rounded-full text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                aria-label="Close menu"
              >
                <CloseMenuIcon />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto">
              {items.map((r) => {
                const active = pathname === r.path || pathname.startsWith(r.path + '/');
                return (
                  <Link
                    key={r.path}
                    href={r.path}
                    onClick={() => setMobileOpen(false)}
                    className="block px-7 py-4.5 text-[19px] font-medium border-b border-gray-100 transition-colors duration-150"
                    style={{ color: active ? '#FF8A2B' : '#111111' }}
                  >
                    {r.label}
                  </Link>
                );
              })}
            </nav>

            {/* Bottom CTA */}
            <div className="px-7 py-7">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#0A1F0E] hover:bg-[#142B18] font-semibold py-4.25 text-[17px] transition-colors duration-200"
                style={{ color: '#ffffff' }}
              >
                Request a quote
                <ArrowRightIcon />
              </Link>
              <p className="text-center text-[12px] text-gray-400 mt-3" style={{ fontFamily: 'var(--k2-mono)' }}>
                Sample dispatched in 48 h
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
