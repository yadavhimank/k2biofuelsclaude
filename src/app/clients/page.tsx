import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/lib/metadata';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Em } from '@/components/ui/em';
import { MonoCap } from '@/components/ui/mono-cap';
import { CTAStrip } from '@/components/layout/cta-strip';
import { PageHero } from '@/components/layout/page-hero';

export const metadata: Metadata = PAGE_METADATA.clients;

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="— Clients & partnerships"
        title="We supply industries,"
        italic="not consumers."
        body="Industrial clients across north India trust K2 to deliver consistent, lab-tested biomass fuel — on rolling weekly trucks, under volume-protected contracts."
        kicker={['Volume-protected contracts', 'Weekly dispatch', 'Lab report per load']}
      />

      {/* Segments */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
            <div>
              <Eyebrow style={{ marginBottom: 14 }}>— 01 / Industry segments</Eyebrow>
              <h2 style={{ fontSize: 42, margin: 0, lineHeight: 1.1, letterSpacing: '-0.025em', fontWeight: 500 }}>
                Six industries.<br />
                <Em>Two product lines.</Em>
              </h2>
            </div>
            <div style={{ maxWidth: 320, textAlign: 'right', fontSize: 14, color: 'var(--k2-text-2)', lineHeight: 1.6 }}>
              Each segment gets a tailored blend, packaging format and dispatch schedule.
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { tag: 'Energy', name: 'Thermal power utilities', desc: 'Paddy-blend pellets for co-firing under the CAQM mandate. Direct dispatch to NCR plants.', spec: 'Loose tipper · 28 MT/load' },
              { tag: 'Sugar', name: 'Sugar mill cogen', desc: 'Off-season biomass fuel for cogen units. Mixed blend, weekly rolling dispatch.', spec: 'Jumbo bag · 1 MT' },
              { tag: 'Paper', name: 'Paper & pulp', desc: 'Briquettes for steady steam load. Mustard-blend pellets for kiln operations.', spec: 'Bulk bag · 25–35 kg' },
              { tag: 'Ceramic', name: 'Brick & ceramic kilns', desc: 'High-density 90mm briquettes for high-temperature continuous burn applications.', spec: 'Bag · 40–60 kg' },
              { tag: 'Process', name: 'Food & vegetable processing', desc: 'Clean-ash briquettes for distilleries, food units, vegetable processors. Lower handling cost.', spec: 'Bag · 40–60 kg' },
              { tag: 'Chemical', name: 'Chemical & steam plants', desc: 'Briquettes for continuous-load chemical processing. Custom-blend pellets on request.', spec: 'Custom bulk supply' },
            ].map((c) => (
              <div key={c.name}
                className="k2-segment-card"
                style={{
                  background: 'var(--k2-surface)',
                  border: '1px solid var(--k2-border-med)',
                  padding: 28,
                  transition: 'transform .2s ease, border-color .2s ease',
                }}
              >
                <div style={{
                  display: 'inline-block', padding: '4px 10px',
                  background: 'var(--k2-ink)', color: 'var(--k2-on-ink)',
                  fontSize: 10, letterSpacing: 1, textTransform: 'uppercase',
                  marginBottom: 24,
                }}>{c.tag}</div>
                <h3 style={{ fontSize: 22, margin: '0 0 14px', fontWeight: 500, letterSpacing: '-0.015em' }}>{c.name}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--k2-text-2)', margin: '0 0 22px' }}>{c.desc}</p>
                <div style={{
                  paddingTop: 16, borderTop: '1px solid var(--k2-border)',
                  fontFamily: 'var(--k2-mono)', fontSize: 11, color: 'var(--k2-text-3)',
                }}>
                  {c.spec}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section style={{ padding: '96px 32px', background: 'var(--k2-stone)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
            <div>
              <Eyebrow style={{ marginBottom: 14 }}>— 02 / How we work</Eyebrow>
              <h2 style={{ fontSize: 42, margin: 0, lineHeight: 1.1, letterSpacing: '-0.025em', fontWeight: 500 }}>
                Sample to contract<br />
                <Em>in three steps.</Em>
              </h2>
            </div>
            <div style={{ maxWidth: 280, textAlign: 'right', fontSize: 14, color: 'var(--k2-text-2)', lineHeight: 1.6 }}>
              From first email to weekly rolling dispatch — typically 2–4 weeks.
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '2px solid var(--k2-ink)' }}>
            {[
              { n: '01', h: 'You share your boiler.', b: 'Boiler model, monthly volume requirement, ash and chlorine tolerances, location. Anything we should know about your fuel handling system.' },
              { n: '02', h: 'We send sample + quote.', b: '50 kg sample of recommended blend dispatched within 48 hours, with full lab report. Indicative quote within 24 hours of brief.' },
              { n: '03', h: 'Trial load, then contract.', b: 'A 25–28 MT trial load to verify in-boiler performance. Rolling monthly off-take contract from there, with volume protection.' },
            ].map((s, i) => (
              <div key={s.n} style={{
                padding: '40px 32px 40px',
                borderRight: i < 2 ? '1px solid var(--k2-border-med)' : 'none',
              }}>
                <div style={{ fontFamily: 'var(--k2-mono)', fontSize: 36, color: 'var(--k2-cta)', letterSpacing: '-0.02em', marginBottom: 20, fontWeight: 300 }}>
                  {s.n}
                </div>
                <h3 style={{ fontSize: 22, margin: '0 0 14px', fontWeight: 500, letterSpacing: '-0.015em' }}>{s.h}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--k2-text-2)', margin: 0 }}>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership philosophy */}
      <section style={{ padding: '112px 32px' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center' }}>
          <Eyebrow style={{ marginBottom: 24 }}>— 03 / Partnership philosophy</Eyebrow>
          <p style={{
            fontFamily: 'var(--k2-serif)', fontStyle: 'italic',
            fontSize: 40, lineHeight: 1.2, letterSpacing: '-0.015em',
            margin: '0 0 36px', color: 'var(--k2-ink)', fontWeight: 400,
          }}>
            &ldquo;We don&apos;t chase spot orders. We sign 12-month rolling contracts at protected volume, ship every week without a missed dispatch, and publish lab data with every load.&rdquo;
          </p>
          <MonoCap style={{ color: 'var(--k2-text-3)', letterSpacing: 1.2 }}>— Sales philosophy · K2 Biofuels</MonoCap>
        </div>
      </section>

      <CTAStrip
        eyebrow="— Become a buyer"
        title="Send us your"
        italic="boiler specs."
        body="50 kg trial in 48 hours. Indicative quote within 24. Volume-protected contracts available."
        primary="Start a conversation →"
        secondary="Talk to sales directly"
      />
    </>
  );
}
