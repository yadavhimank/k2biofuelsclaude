import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/lib/metadata';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Em } from '@/components/ui/em';
import { CTAStrip } from '@/components/layout/cta-strip';
import Link from 'next/link';

export const metadata: Metadata = PAGE_METADATA.terms;

const sections = [
  {
    n: '01',
    h: 'Use of this website',
    b: 'This website is provided for informational and commercial enquiry purposes. You agree to use it lawfully, not to attempt unauthorised access, and not to scrape content for republication without written permission.',
  },
  {
    n: '02',
    h: 'Intellectual property',
    b: 'All content, branding, photography (when present), and documentation on this website is owned by K2 Biofuels Pvt. Ltd. or its licensors. You may share links and reasonable excerpts with attribution.',
  },
  {
    n: '03',
    h: 'Product specifications',
    b: 'Specifications listed on the products page are typical values measured on representative batches. Actual values may vary within published tolerances. Lab reports issued with each commercial dispatch supersede website figures.',
  },
  {
    n: '04',
    h: 'Commercial relationships',
    b: 'Enquiries received through this site do not constitute a binding offer. Commercial supply is governed by a separate signed agreement covering pricing, volumes, payment terms and quality remedies.',
  },
  {
    n: '05',
    h: 'Limitation of liability',
    b: 'To the maximum extent permitted by law, K2 Biofuels is not liable for indirect or consequential damages arising from website use. Liability under commercial contracts is governed by the relevant signed agreement.',
  },
  {
    n: '06',
    h: 'Governing law',
    b: 'These terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of the courts at Gurugram, Haryana.',
  },
];

const highlights = [
  { stat: '6',     unit: 'sections',        label: 'Covers website use, IP, specs, commercial terms, liability, and jurisdiction.' },
  { stat: 'India', unit: 'governing law',   label: 'Courts of Gurugram, Haryana hold exclusive jurisdiction over disputes.' },
  { stat: 'Lab',   unit: 'report governs',  label: 'Dispatch lab reports supersede any product specifications on this website.' },
];

export default function TermsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section
        className="k2-legal-hero-pad"
        style={{
          marginTop: '-120px',
          background: 'var(--k2-ink)',
          color: 'var(--k2-on-ink)',
        }}
      >
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <Eyebrow accent="var(--k2-cta)" style={{ marginBottom: 22 }}>— Legal · Terms</Eyebrow>
          <h1 className="k2-h1" style={{ lineHeight: 1.04, letterSpacing: '-0.03em', fontWeight: 500, margin: '0 0 24px', maxWidth: 860 }}>
            Terms of<br />
            <Em color="#FFB37A">service.</Em>
          </h1>
          <p style={{ fontSize: 'clamp(15px, 1.6vw, 18px)', lineHeight: 1.7, maxWidth: 640, color: 'rgba(250,250,247,0.78)', margin: '0 0 40px' }}>
            By using this website and our services, you agree to the terms below. Commercial supply is always governed by a separate signed agreement.
          </p>
          <div className="k2-privacy-meta" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              'Last updated · 17 May 2026',
              '6 sections',
              'Gurugram courts · India',
            ].map((chip) => (
              <span key={chip} style={{
                display: 'inline-block',
                padding: '6px 14px',
                border: '1px solid rgba(250,250,247,0.18)',
                borderRadius: 99,
                fontSize: 13,
                fontFamily: 'var(--k2-mono)',
                color: 'rgba(250,250,247,0.65)',
                letterSpacing: 0.3,
              }}>{chip}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Highlights strip ──────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--k2-stone)', borderBottom: '1px solid var(--k2-border-med)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }} className="k2-privacy-principles">
          {highlights.map((p, i) => (
            <div
              key={p.stat}
              className="k2-privacy-principle-item"
              style={{
                padding: '40px 32px',
                borderRight: i < highlights.length - 1 ? '1px solid var(--k2-border-med)' : 'none',
              }}
            >
              <div style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--k2-ink)', marginBottom: 6 }}>
                {p.stat}
                <span style={{ fontSize: '0.4em', fontWeight: 400, color: 'var(--k2-text-3)', marginLeft: 8, letterSpacing: 0 }}>{p.unit}</span>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--k2-text-2)', margin: 0, maxWidth: 260 }}>{p.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Terms sections ────────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(48px, 6vw, 96px) clamp(20px, 4vw, 32px)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ borderTop: '2px solid var(--k2-ink)' }}>
            {sections.map((s) => (
              <div
                key={s.n}
                id={`sect-${s.n}`}
                className="k2-privacy-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: '0 48px',
                  padding: 'clamp(28px, 3vw, 48px) 0',
                  borderBottom: '1px solid var(--k2-border)',
                  alignItems: 'start',
                }}
              >
                <div style={{ paddingTop: 4 }}>
                  <span style={{
                    fontFamily: 'var(--k2-mono)',
                    fontSize: 13,
                    color: 'var(--k2-cta)',
                    letterSpacing: 1.5,
                    display: 'block',
                    marginBottom: 8,
                  }}>— {s.n}</span>
                </div>
                <div>
                  <h2 style={{
                    fontSize: 'clamp(20px, 2.4vw, 28px)',
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.15,
                    margin: '0 0 16px',
                    color: 'var(--k2-ink)',
                  }}>{s.h}</h2>
                  <p style={{
                    fontSize: 'clamp(14px, 1.4vw, 16px)',
                    lineHeight: 1.75,
                    color: 'var(--k2-text-2)',
                    margin: 0,
                    maxWidth: 720,
                  }}>{s.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Jurisdiction note ─────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--k2-stone)',
        borderTop: '1px solid var(--k2-border-med)',
        padding: 'clamp(40px, 5vw, 80px) clamp(20px, 4vw, 32px)',
      }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }} className="k2-terms-note-grid">
          <div>
            <Eyebrow style={{ marginBottom: 14 }}>— Contract terms</Eyebrow>
            <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 16px' }}>
              Supply is governed<br />
              <Em>by signed agreement.</Em>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--k2-text-2)', margin: '0 0 28px', maxWidth: 420 }}>
              Enquiries on this site don't create binding contracts. All commercial supply — pricing, volumes, payment and quality remedies — is governed by a separate signed supply agreement.
            </p>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                height: 52,
                padding: '0 28px',
                background: 'var(--k2-ink)',
                color: 'var(--k2-on-ink)',
                borderRadius: 99,
                fontSize: 15,
                fontWeight: 600,
                textDecoration: 'none',
                letterSpacing: '-0.01em',
              }}
            >
              Talk to our commercial team →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
            {[
              { label: 'Pricing',         desc: 'Agreed per signed supply contract — not listed on this website.' },
              { label: 'Volume',          desc: 'Rolling monthly off-take with volume protection is contractual.' },
              { label: 'Quality remedy',  desc: 'Lab report governs. Dispute process is in the supply contract.' },
            ].map((r) => (
              <div key={r.label} style={{
                padding: '20px 24px',
                background: 'var(--k2-surface)',
                border: '1px solid var(--k2-border-med)',
              }}>
                <div style={{
                  fontFamily: 'var(--k2-mono)',
                  fontSize: 11,
                  letterSpacing: 1.5,
                  textTransform: 'uppercase',
                  color: 'var(--k2-eyebrow)',
                  marginBottom: 10,
                }}>{r.label}</div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--k2-text-2)', margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        eyebrow="— Also see"
        title="Read our"
        italic="privacy policy."
        body="Covers what data we collect, how we use it, retention periods, and your rights as a data subject."
        primary="View privacy policy →"
        secondary="Back to home"
        primaryTo="/privacy"
      />
    </>
  );
}
