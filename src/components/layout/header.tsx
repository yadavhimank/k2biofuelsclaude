"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { K2_ROUTES } from "@/lib/navigation";
import { K2Logo } from "./logo";

interface K2HeaderProps {
  dark?: boolean;
}

/* ── Icons ─────────────────────────────────────────────────────────────────── */

function ArrowRightIcon() {
  return (
    <svg
      className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      aria-hidden="true"
    >
      <rect y="0" width="22" height="2" rx="1" fill="currentColor" />
      <rect y="7" width="22" height="2" rx="1" fill="currentColor" />
      <rect y="14" width="22" height="2" rx="1" fill="currentColor" />
    </svg>
  );
}

function CloseMenuIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <line
        x1="2"
        y1="2"
        x2="18"
        y2="18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="18"
        y1="2"
        x2="2"
        y2="18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Brand button styling ───────────────────────────────────────────────────
   The "Request quote" pill is the page's signature element: a vivid amber
   lozenge with dark text and a soft glowing halo. Centralised here so the
   desktop CTA and the mobile panel CTA stay identical.
───────────────────────────────────────────────────────────────────────────── */
const CTA_TEXT = "#3A2410";
const CTA_BG = "linear-gradient(180deg, #FB8124 0%, #F26A12 100%)";
const CTA_BORDER = "1px solid rgba(255,168,82,0.85)";
const CTA_GLOW =
  "0 0 0 1px rgba(255,150,60,.35), 0 8px 22px rgba(245,120,25,.55), 0 0 34px 4px rgba(255,150,50,.55), 0 0 60px 10px rgba(255,140,40,.30)";
const CTA_GLOW_SOFT =
  "0 0 0 1px rgba(255,150,60,.30), 0 8px 24px rgba(245,120,25,.45), 0 0 30px 4px rgba(255,150,50,.45)";

/* ── Pill geometry: S-curve white-panel edge ────────────────────────────────
   The white logo panel's right edge is a true S-curve (sigmoid), not a simple
   concave dip: the panel is WIDER at the top (`topX`) and tapers to a NARROWER
   point at the bottom (`botX`), with a smooth inflection in the middle.

   It's a single cubic Bézier whose two control points share the endpoints'
   x-coordinates but sit at 40% / 60% of the height — the classic CSS S-curve
   technique (see stackoverflow.com/q/33035548). Pulling them off the exact
   midpoint (0.5 / 0.5) keeps the S gentle rather than plateauing into vertical
   segments at the top and bottom. The pill's overflow:hidden rounds the outer
   corners automatically.
───────────────────────────────────────────────────────────────────────────── */
const DESKTOP_H = 80; // pill height px
const DESKTOP_TOP_X = 238; // white edge x at the top (wide)
const DESKTOP_BOT_X = 158; // white edge x at the bottom (narrow)

const MOBILE_H = 82; // mobile pill height px
const MOBILE_TOP_X = 182; // white edge x at the top (wide)
const MOBILE_BOT_X = 124; // white edge x at the bottom (narrow)

// S-curve (sigmoid) right edge for the white panel.
function sCurveClip(topX: number, botX: number, h: number) {
  const c1 = (h * 0.4).toFixed(2); // upper control point y
  const c2 = (h * 0.6).toFixed(2); // lower control point y
  return `path("M 0,0 H ${topX} C ${topX},${c1} ${botX},${c2} ${botX},${h} H 0 Z")`;
}

/* ── Component ──────────────────────────────────────────────────────────────── */

export function K2Header({ dark = false }: K2HeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const items = K2_ROUTES.filter((r) => r.path !== "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Dark olive→charcoal vertical gradient gives the pill depth (lighter top edge).
  const pillBg = scrolled
    ? "linear-gradient(180deg, rgba(48,50,40,0.98) 0%, rgba(34,35,28,0.99) 100%)"
    : "linear-gradient(180deg, rgba(58,60,49,0.92) 0%, rgba(40,41,33,0.94) 100%)";
  const pillShadow = scrolled
    ? "0 20px 72px rgba(0,0,0,.34)"
    : "0 16px 56px rgba(0,0,0,.24)";

  return (
    <header className="fixed inset-x-0 top-5 z-50">
      {/* ═══════════════════════════════════════════════════════════════════════
          DESKTOP  xl+
      ═══════════════════════════════════════════════════════════════════════ */}
      <div className="hidden xl:block px-8">
        <div className="max-w-[1600px] mx-auto">
          {/* Outer pill */}
          <div
            className="relative overflow-hidden border border-white/[0.07] transition-all duration-500"
            style={{
              height: `${DESKTOP_H}px`,
              borderRadius: `${DESKTOP_H / 2}px`,
              background: pillBg,
              boxShadow: pillShadow,
              backdropFilter: "blur(28px) saturate(180%)",
              WebkitBackdropFilter: "blur(28px) saturate(180%)",
            }}
          >
            {/* ── White logo panel ──────────────────────────────────────────────
                drop-shadow follows the clipped edge and gives the panel depth.
            ──────────────────────────────────────────────────────────────── */}
            <div
              className="absolute left-0 inset-y-0 z-10 pointer-events-none"
              style={{
                width: `${DESKTOP_TOP_X + 14}px`,
                filter: "drop-shadow(4px 0 10px rgba(0,0,0,0.13))",
              }}
              aria-hidden="true"
            >
              <div
                className="absolute inset-0 bg-white"
                style={{
                  clipPath: sCurveClip(DESKTOP_TOP_X, DESKTOP_BOT_X, DESKTOP_H),
                }}
              />
            </div>

            {/* Logo — above white panel */}
            <Link
              href="/"
              className="absolute left-9 top-1/2 -translate-y-1/2 z-20"
            >
              <K2Logo size={70} />
            </Link>

            {/* ── Grid: [logo-spacer | nav-center | cta-right] ─────────────────
                Spacer = white section width so nav never overlaps logo panel.
                Nav gets 1fr → always perfectly centered in remaining space.
            ──────────────────────────────────────────────────────────────── */}
            <div
              className="h-full relative z-10"
              style={{
                display: "grid",
                gridTemplateColumns: `${DESKTOP_TOP_X + 8}px 1fr 260px`,
                alignItems: "center",
              }}
            >
              {/* spacer */}
              <div />

              {/* Nav links */}
              <nav className="flex items-center justify-center gap-5 2xl:gap-7">
                {items.map((r) => {
                  const active =
                    pathname === r.path || pathname.startsWith(r.path + "/");
                  return (
                    <Link
                      key={r.path}
                      href={r.path}
                      className="group relative text-[13.5px] 2xl:text-[15px] font-medium tracking-[-0.01em] whitespace-nowrap transition-all duration-300 hover:-translate-y-px"
                      style={{
                        color: active ? "#FF8A2B" : "rgba(255,255,255,0.92)",
                      }}
                    >
                      {r.label}
                      {/* Underline — expands from center on hover */}
                      <span
                        className={`absolute left-1/2 -translate-x-1/2 -bottom-[5px] h-[2px] rounded-full bg-[#FF8A2B] transition-all duration-300 ${
                          active ? "w-[72%]" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* CTA button — signature amber glow + dark text */}
              <div className="flex items-center justify-end pr-[14px]">
                <Link
                  href="/contact"
                  className="group flex items-center gap-2.5 rounded-full px-6 2xl:px-7 text-[14px] 2xl:text-[15px] font-bold whitespace-nowrap transition-all duration-300 hover:-translate-y-px hover:brightness-105"
                  style={{
                    height: "52px",
                    color: CTA_TEXT,
                    background: CTA_BG,
                    border: CTA_BORDER,
                    boxShadow: CTA_GLOW,
                  }}
                >
                  Request quote
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          MOBILE  < xl  ——  same two-section pill: white logo | dark hamburger
      ═══════════════════════════════════════════════════════════════════════ */}
      <div
        className="xl:hidden relative mx-4 overflow-hidden border border-white/[0.07]"
        style={{
          height: `${MOBILE_H}px`,
          borderRadius: `${MOBILE_H / 2}px`,
          background:
            "linear-gradient(180deg, rgba(58,60,49,0.94) 0%, rgba(40,41,33,0.96) 100%)",
          boxShadow: "0 10px 36px rgba(0,0,0,.24)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
      >
        {/* White logo panel */}
        <div
          className="absolute left-0 inset-y-0 z-10 pointer-events-none"
          style={{
            width: `${MOBILE_TOP_X + 12}px`,
            filter: "drop-shadow(4px 0 8px rgba(0,0,0,0.11))",
          }}
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 bg-white"
            style={{
              clipPath: sCurveClip(MOBILE_TOP_X, MOBILE_BOT_X, MOBILE_H),
            }}
          />
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20"
        >
          <K2Logo size={46} />
        </Link>

        {/* Hamburger button — sits in the dark section */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full text-white/90 hover:bg-white/10 transition-colors duration-150"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          <MenuIcon />
        </button>
      </div>

      {/* ── Mobile slide-in panel ──────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="xl:hidden fixed inset-0 z-60">
          {/* Dim backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* White slide-in panel from right */}
          <div
            className="absolute right-0 top-0 bottom-0 w-[78%] sm:w-100 bg-white flex flex-col"
            style={{
              boxShadow: "-8px 0 48px rgba(0,0,0,0.18)",
              animation: "k2PanelIn 0.28s cubic-bezier(0.32,0.72,0,1) both",
            }}
          >
            {/* Panel header */}
            <div className="flex items-center justify-between px-7 py-5 border-b border-gray-100">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <K2Logo size={44} />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:bg-gray-100 transition-colors duration-150"
                aria-label="Close menu"
              >
                <CloseMenuIcon />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto">
              {items.map((r) => {
                const active =
                  pathname === r.path || pathname.startsWith(r.path + "/");
                return (
                  <Link
                    key={r.path}
                    href={r.path}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-7 py-[18px] text-[18px] font-medium border-b border-gray-100 transition-colors duration-150"
                    style={{ color: active ? "#FF8A2B" : "#111111" }}
                  >
                    {r.label}
                  </Link>
                );
              })}
            </nav>

            {/* Bottom CTA — matches the signature amber glow button */}
            <div className="px-7 py-6">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="group flex items-center justify-center gap-2.5 w-full rounded-2xl font-bold py-4 text-[16px] transition-all duration-200 hover:brightness-105"
                style={{
                  color: CTA_TEXT,
                  background: CTA_BG,
                  boxShadow: CTA_GLOW_SOFT,
                }}
              >
                Request a quote
                <ArrowRightIcon />
              </Link>
              <p className="text-center text-[11.5px] text-gray-400 mt-3 tracking-wide">
                Sample dispatched in 48 h
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
