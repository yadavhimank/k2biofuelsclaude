import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/lib/metadata';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Em } from '@/components/ui/em';
import { CTAStrip } from '@/components/layout/cta-strip';
import Link from 'next/link';

export const metadata: Metadata = PAGE_METADATA.privacy;

const sections = [
  {
    n: '01',
    h: 'What we collect',
    b: 'When you fill our contact form, we collect your name, email, phone, company, monthly volume estimate, and boiler details. When you visit, we collect standard server logs (IP, browser, page visited) for security and analytics.',
  },
  {
    n: '02',
    h: 'How we use it',
    b: 'Enquiry data is used solely to respond to your enquiry, send samples and provide commercial quotes. We do not sell your data and do not share it with third parties beyond the courier handling your sample dispatch.',
  },
  {
    n: '03',
    h: 'Retention',
    b: 'Active enquiries are retained for the duration of any commercial relationship plus 7 years for statutory record-keeping. Inactive enquiries are deleted after 24 months unless legally required.',
  },
  {
    n: '04',
    h: 'Your rights',
    b: 'You may request a copy of all data we hold about you, ask us to correct it, or ask us to delete it. Email privacy@k2biofuels.com with the subject "Data request" and we will respond within 30 days.',
  },
  {
    n: '05',
    h: 'Cookies',
    b: 'We use first-party cookies only for session management and basic analytics. No third-party marketing trackers are loaded on this site.',
  },
  {
    n: '06',
    h: 'Updates to this policy',
    b: 'Material changes will be posted on this page with an updated "Last updated" date. Continued use of our website after such updates constitutes acceptance.',
  },
];

const principles = [
  { stat: '0',  unit: 'third parties', label: 'Your data is never sold or shared with advertisers.' },
  { stat: '30', unit: 'day response',   label: 'Maximum time to fulfil any data access or deletion request.' },
  { stat: '24', unit: 'month limit',    label: 'Inactive enquiry data is deleted after 24 months.' },
];

export default function PrivacyPage() {
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
          <Eyebrow accent="var(--k2-cta)" style={{ marginBottom: 22 }}>— Legal · Privacy</Eyebrow>
          <h1 className="k2-h1" style={{ lineHeight: 1.04, letterSpacing: '-0.03em', fontWeight: 500, margin: '0 0 24px', maxWidth: 860 }}>
            Your data.<br />
            <Em color="#FFB37A">Our responsibility.</Em>
          </h1>
          <p style={{ fontSize: 'clamp(15px, 1.6vw, 18px)', lineHeight: 1.7, maxWidth: 640, color: 'rgba(250,250,247,0.78)', margin: '0 0 40px' }}>
            We collect only what we need to respond to your enquiry, send a sample, and issue a quote. Nothing more.
          </p>
          <div className="k2-privacy-meta" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              'Last updated · 17 May 2026',
              '6 sections',
              'Governed by Indian law',
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

      {/* ── Principles strip ──────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--k2-stone)', borderBottom: '1px solid var(--k2-border-med)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }} className="k2-privacy-principles">
          {principles.map((p, i) => (
            <div
              key={p.stat}
              className="k2-privacy-principle-item"
              style={{
                padding: '40px 32px',
                borderRight: i < principles.length - 1 ? '1px solid var(--k2-border-med)' : 'none',
              }}
            >
              <div style={{ fontSize: 'clamp(40px, 5vw, 60px)', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--k2-ink)', marginBottom: 6 }}>
                {p.stat}
                <span style={{ fontSize: '0.45em', fontWeight: 400, color: 'var(--k2-text-3)', marginLeft: 8, letterSpacing: 0 }}>{p.unit}</span>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--k2-text-2)', margin: 0, maxWidth: 260 }}>{p.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Policy sections ───────────────────────────────────────────────────── */}
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

      {/* ── Contact block ─────────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--k2-stone)',
        borderTop: '1px solid var(--k2-border-med)',
        padding: 'clamp(40px, 5vw, 80px) clamp(20px, 4vw, 32px)',
      }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }} className="k2-privacy-contact-grid">
          <div>
            <Eyebrow style={{ marginBottom: 14 }}>— Data requests</Eyebrow>
            <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 1.15, margin: '0 0 16px' }}>
              Want to know<br />
              <Em>what we hold?</Em>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--k2-text-2)', margin: '0 0 28px', maxWidth: 400 }}>
              Email our DPO with the subject <strong style={{ color: 'var(--k2-ink)' }}>"Data request"</strong> and a copy of any K2 correspondence. We respond within 30 days.
            </p>
            <Link
              href="mailto:privacy@k2biofuels.com"
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
              privacy@k2biofuels.com →
            </Link>
          </div>
          <div className="k2-privacy-contact-cards">
            {[
              { label: 'Access', desc: 'Request a full copy of all personal data we hold about you.' },
              { label: 'Correct', desc: 'Ask us to fix inaccurate or incomplete records.' },
              { label: 'Delete', desc: 'Request erasure of your data where no legal retention applies.' },
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
        italic="terms of service."
        body="Covers website use, intellectual property, product specification disclaimers, and governing law."
        primary="View terms of service →"
        secondary="Back to home"
        primaryTo="/terms"
      />
    </>
  );
}
