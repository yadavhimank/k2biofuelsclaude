import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/lib/metadata';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Em } from '@/components/ui/em';
import { ImgSlot } from '@/components/ui/img-slot';
import { CTAStrip } from '@/components/layout/cta-strip';
import { PageHero } from '@/components/layout/page-hero';

export const metadata: Metadata = PAGE_METADATA.infrastructure;

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="— Plant & technology"
        title="A 252-tonne-a-day plant,"
        italic="engineered for throughput."
        body="Our Rewari facility runs modern pellet mills, in-line drying, automated bagging and an on-site quality lab — designed for 24/7 operation and consistent batch output."
        kicker={['Rewari · Haryana', 'In-house QC', 'Sealed weighbridge']}
      />

      {/* Plant overview spec card */}
      <section style={{ padding: '80px 32px', borderBottom: '1px solid var(--k2-border)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'start' }}>
          <ImgSlot tone="plant" height={520} caption="PLANT — AERIAL OR ELEVATED VIEW, RECEIVING YARD + MILL HALL + SILOS + DISPATCH WEIGHBRIDGE" />
          <div>
            <Eyebrow style={{ marginBottom: 14 }}>— 01 / Plant overview</Eyebrow>
            <h2 style={{ fontSize: 32, margin: '0 0 28px', lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 500 }}>
              Rewari facility · live specs
            </h2>
            <div style={{ borderTop: '2px solid var(--k2-ink)' }}>
              {[
                ['Location', 'Village Khurshed Nagar, Rewari, Haryana'],
                ['Land area', '~12 acres'],
                ['Installed capacity', '252 TPD'],
                ['Annual pellet output', '~80,000 MT'],
                ['Annual agro-residue intake', '~95,000 MT'],
                ['Storage capacity', '5,500 MT covered'],
                ['Bagging capacity', '180 TPD automated'],
                ['Weighbridge capacity', '60 MT load-cell, sealed'],
                ['Power load', '1.6 MW peak'],
                ['Operating shifts', '3 × 8 hrs · 24/7'],
              ].map(([k, v]) => (
                <div key={k} style={{
                  display: 'flex', justifyContent: 'space-between',
                  padding: '14px 0', borderBottom: '1px solid var(--k2-border)',
                  fontSize: 14,
                }}>
                  <span style={{ color: 'var(--k2-text-2)' }}>{k}</span>
                  <span style={{ fontFamily: 'var(--k2-mono)' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pellet mill cards */}
      <section style={{ padding: '96px 32px', background: 'var(--k2-stone)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
            <div>
              <Eyebrow style={{ marginBottom: 14 }}>— 02 / Pellet mills</Eyebrow>
              <h2 style={{ fontSize: 38, margin: 0, lineHeight: 1.1, letterSpacing: '-0.025em', fontWeight: 500 }}>
                Three mills,<br />
                <Em>tuned per feedstock.</Em>
              </h2>
            </div>
            <div style={{ maxWidth: 340, textAlign: 'right', fontSize: 14, color: 'var(--k2-text-2)', lineHeight: 1.6 }}>
              Each mill is dedicated to a primary feedstock stream so blends stay consistent across long production runs.
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { name: 'Mill A — Paddy line', tone: 'paddy' as const, cap: '90 TPD', desc: 'Dedicated paddy straw line. Highest throughput, optimised for CAQM-priority feedstock.' },
              { name: 'Mill B — Mustard line', tone: 'mustard' as const, cap: '90 TPD', desc: 'Mustard husk dedicated line. Highest GCV output, low ash, premium-grade pellets.' },
              { name: 'Mill C — Mixed line', tone: 'rice' as const, cap: '72 TPD', desc: 'Rice husk and mixed agro-blend line. Volume buffer and briquette feed.' },
            ].map((m) => (
              <div key={m.name} style={{ background: 'var(--k2-surface)', border: '1px solid var(--k2-border-med)' }}>
                <ImgSlot tone={m.tone} height={180} caption={`MILL · ${m.name.toUpperCase()} — DIE FACE, OPERATING`} />
                <div style={{ padding: 24 }}>
                  <Eyebrow style={{ marginBottom: 10 }}>{m.cap}</Eyebrow>
                  <h3 style={{ fontSize: 20, margin: '0 0 12px', fontWeight: 500, letterSpacing: '-0.015em' }}>{m.name}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.65, color: 'var(--k2-text-2)', margin: '0 0 20px' }}>{m.desc}</p>
                  <div style={{ fontFamily: 'var(--k2-mono)', fontSize: 11, lineHeight: 1.95, color: 'var(--k2-text-2)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Die diameter</span><span style={{ color: 'var(--k2-ink)' }}>8 mm</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Power</span><span style={{ color: 'var(--k2-ink)' }}>250 kW</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Avg uptime</span><span style={{ color: 'var(--k2-ink)' }}>92%</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process flow */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <Eyebrow style={{ marginBottom: 14 }}>— 03 / Process flow</Eyebrow>
          <h2 style={{ fontSize: 38, margin: '0 0 48px', lineHeight: 1.1, letterSpacing: '-0.025em', fontWeight: 500 }}>
            Eight stages,<br />
            <Em>field to firebox.</Em>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 4, position: 'relative' }}>
            {[
              ['01', 'Intake', 'Trucked agro residue weighed at gate.'],
              ['02', 'Moisture test', 'Lot rejected above 20% moisture.'],
              ['03', 'Drying', 'Rotary dryer brings down to ≤14%.'],
              ['04', 'Grinding', 'Sized to feed pellet die.'],
              ['05', 'Conditioning', 'Steam + binder for lignin activation.'],
              ['06', 'Pelletising', 'Pressed at 250 kW per mill.'],
              ['07', 'Cooling & screening', 'Fines recirculated. Output graded.'],
              ['08', 'Bagging & dispatch', 'HDPE bag, jumbo, or loose tipper.'],
            ].map(([n, h, b]) => (
              <div key={n} style={{
                background: 'var(--k2-surface)',
                border: '1px solid var(--k2-border-med)',
                padding: 20, minHeight: 160,
                display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ fontFamily: 'var(--k2-mono)', fontSize: 11, color: 'var(--k2-cta)', letterSpacing: 1.5, marginBottom: 12 }}>
                  {n}
                </div>
                <h4 style={{ fontSize: 15, margin: '0 0 8px', fontWeight: 500, letterSpacing: '-0.01em' }}>{h}</h4>
                <p style={{ fontSize: 11, lineHeight: 1.6, color: 'var(--k2-text-2)', margin: 0 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality lab */}
      <section style={{ padding: '96px 32px', background: 'var(--k2-ink)', color: 'var(--k2-on-ink)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80 }}>
          <div>
            <Eyebrow accent="var(--k2-cta)" style={{ marginBottom: 14 }}>— 04 / On-site quality lab</Eyebrow>
            <h2 style={{ fontSize: 38, margin: '0 0 24px', lineHeight: 1.1, letterSpacing: '-0.025em', fontWeight: 500 }}>
              Every batch,<br />
              <Em color="#FFB37A">tested before it ships.</Em>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(250,250,247,0.78)', margin: 0 }}>
              We run a fully-equipped fuel-analysis lab on-site at Rewari. Lab reports are dispatched with every truck. Buyers can request retained samples for independent re-test.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, borderTop: '1px solid rgba(250,250,247,0.15)' }}>
            {[
              ['Bomb calorimeter', 'GCV / NCV measurement, IS:1350 compliant.'],
              ['Moisture analyser', 'Hot-air loss-on-drying, per batch.'],
              ['Muffle furnace', 'Ash content, 850°C standard burn.'],
              ['Sieve shaker', 'Fines and length distribution.'],
              ['Pellet durability tester', 'PDI measurement on tumbling drum.'],
              ['Sulphur / chlorine titrator', 'Halide and sulphur trace levels.'],
              ['Density meter', 'Bulk density per IS standards.'],
              ['Retained sample archive', '50 g / batch · 90-day retention.'],
            ].map(([h, b], i) => (
              <div key={h} style={{
                padding: '20px 24px',
                borderBottom: '1px solid rgba(250,250,247,0.15)',
                borderRight: i % 2 === 0 ? '1px solid rgba(250,250,247,0.15)' : 'none',
              }}>
                <h4 style={{ fontSize: 14, margin: '0 0 6px', fontWeight: 500, color: '#fff' }}>{h}</h4>
                <p style={{ fontSize: 12, lineHeight: 1.6, color: 'rgba(250,250,247,0.65)', margin: 0 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        eyebrow="— Visit the plant"
        title="See the plant"
        italic="for yourself."
        body="We host serious buyers and partners at our Rewari facility. From receiving yard to dispatch — a 90-minute walkthrough."
        primary="Schedule a plant visit →"
        secondary="Download infrastructure brief"
      />
    </>
  );
}
