import type { Metadata } from 'next';
import Link from 'next/link';
import { PAGE_METADATA } from '@/lib/metadata';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Em } from '@/components/ui/em';
import { MonoCap } from '@/components/ui/mono-cap';
import { CTAStrip } from '@/components/layout/cta-strip';
import { PageHero } from '@/components/layout/page-hero';

export const metadata: Metadata = PAGE_METADATA.careers;

const openRoles: [string, string, string, string, string][] = [
  ['Plant Operations Manager', 'Operations · Rewari', 'Full-time', '8–12 yrs · Pellet/feed mill ops', '/contact'],
  ['Quality Lab Chemist', 'QA · Rewari', 'Full-time', '3–6 yrs · IS:1350 testing', '/contact'],
  ['Sales — Industrial accounts', 'Commercial · Gurgaon', 'Full-time', '5–10 yrs · Thermal/sugar B2B', '/contact'],
  ['Feedstock Aggregation Lead', 'Supply · Rewari', 'Full-time', 'Hindi/Punjabi essential', '/contact'],
  ['Logistics Coordinator', 'Operations · Rewari', 'Full-time', '2–5 yrs · Bulk freight', '/contact'],
  ['Finance Analyst', 'Group · Gurgaon', 'Full-time', '2–4 yrs · CA inter / MBA', '/contact'],
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="— Careers at K2"
        title="Build the energy"
        italic="transition, in person."
        body="We're a small team running a 252 TPD industrial plant in Rewari and a corporate operation in Gurgaon. If you live within commute of either, and you want to build something durable in renewable energy, we want to talk."
        kicker={['Rewari plant', 'Gurgaon HQ', 'Group hiring across 3 companies']}
      />

      {/* Open roles */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div className="k2-section-header" style={{ marginBottom: 40 }}>
            <div>
              <Eyebrow style={{ marginBottom: 14 }}>— 01 / Open positions</Eyebrow>
              <h2 style={{ fontSize: 38, margin: 0, lineHeight: 1.1, letterSpacing: '-0.025em', fontWeight: 500 }}>
                Currently hiring.
              </h2>
            </div>
            <MonoCap style={{ color: 'var(--k2-text-3)' }}>Updated weekly · 6 open</MonoCap>
          </div>

          <div className="k2-table-scroll-mobile" style={{ borderTop: '2px solid var(--k2-ink)' }}>
            {openRoles.map(([role, dept, type, exp, link]) => (
              <Link key={role} href={link}
                className="k2-job-row"
                style={{
                  display: 'grid', gridTemplateColumns: '2fr 1.4fr 1fr 1.4fr 80px',
                  padding: '24px 4px', borderBottom: '1px solid var(--k2-border)',
                  fontSize: 14, alignItems: 'center', cursor: 'pointer',
                  transition: 'background .15s ease',
                  color: 'inherit', textDecoration: 'none',
                }}
              >
                <div style={{ fontWeight: 500, fontSize: 17, letterSpacing: '-0.01em' }}>{role}</div>
                <div style={{ color: 'var(--k2-text-2)' }}>{dept}</div>
                <div style={{ fontFamily: 'var(--k2-mono)', fontSize: 13, color: 'var(--k2-text-2)' }}>{type}</div>
                <div style={{ color: 'var(--k2-text-2)', fontSize: 15 }}>{exp}</div>
                <div style={{ textAlign: 'right', fontWeight: 500, fontSize: 15 }}>Apply →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '96px 32px', background: 'var(--k2-stone)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <Eyebrow style={{ marginBottom: 14 }}>— 02 / How we work</Eyebrow>
          <h2 style={{ fontSize: 38, margin: '0 0 48px', lineHeight: 1.1, letterSpacing: '-0.025em', fontWeight: 500 }}>
            Three rules.
          </h2>
          <div className="k2-grid-3" style={{ gap: 24 }}>
            {[
              ['01', 'On-site beats remote.', 'For an industrial business this is non-negotiable. Plant roles are at the plant, six days a week.'],
              ['02', 'Numbers, not narratives.', 'Every claim — capacity, GCV, lead time, emissions — is backed by data. Our work is to measure, not to spin.'],
              ['03', 'Long horizons.', 'We sign 12-month rolling contracts, we plant trees on the plant boundary, and we hire to keep people for a decade.'],
            ].map(([n, h, b]) => (
              <div key={n} style={{ background: 'var(--k2-surface)', border: '1px solid var(--k2-border-med)', padding: 32 }}>
                <div style={{ fontFamily: 'var(--k2-mono)', fontSize: 32, color: 'var(--k2-cta)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: 20 }}>{n}</div>
                <h3 style={{ fontSize: 22, margin: '0 0 14px', fontWeight: 500, letterSpacing: '-0.015em' }}>{h}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--k2-text-2)', margin: 0 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        eyebrow="— Apply"
        title="Don't see your role?"
        italic="Write to us anyway."
        body="We're a growing group. Send your CV with a one-paragraph note about what you want to build."
        primary="Send your CV →"
        secondary="Talk to HR"
      />
    </>
  );
}
