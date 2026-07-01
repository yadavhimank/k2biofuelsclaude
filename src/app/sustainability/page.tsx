import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/lib/metadata';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Em } from '@/components/ui/em';
import { ImgSlot } from '@/components/ui/img-slot';
import { MonoCap } from '@/components/ui/mono-cap';
import { CTAStrip } from '@/components/layout/cta-strip';
import { ImageRotator } from '@/components/ui/image-rotator';

export const metadata: Metadata = PAGE_METADATA.sustainability;

export default function SustainabilityPage() {
  return (
    <>
      {/* Hero — full-bleed sustainability banner */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 600, marginTop: '-120px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/sustainablitybanner.png"
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.10) 70%, rgba(0,0,0,0.65) 100%)' }} />

        {/* Top — eyebrow, title, body */}
        <div className="k2-section-pad" style={{ position: 'relative', zIndex: 1, width: '100%', color: 'var(--k2-on-ink)', paddingTop: 160 }}>
          <div style={{ maxWidth: 1320, margin: '0 auto' }}>
            <Eyebrow accent="#FFB37A" style={{ marginBottom: 22 }}>— Sustainability &amp; impact</Eyebrow>
            <h1 className="k2-h1" style={{ lineHeight: 1.04, letterSpacing: '-0.03em', fontWeight: 500, margin: '0 0 28px', maxWidth: 980 }}>
              Carbon-neutral fuel, <Em color="#FFB37A">verified at the gate and at the gauge.</Em>
            </h1>
            <p className="k2-body-lg" style={{ lineHeight: 1.6, maxWidth: 720, color: 'rgba(250,250,247,0.92)', margin: 0, textShadow: '0 1px 12px rgba(0,0,0,0.8)' }}>
              Sustainability is the entire business — not a side commitment. Every tonne of pellets we ship is a tonne of imported coal not burnt, and a tonne of crop residue not set on fire in the open.
            </p>
          </div>
        </div>

        {/* Bottom — kicker */}
        <div className="k2-section-pad" style={{ position: 'relative', zIndex: 1, width: '100%', color: 'var(--k2-on-ink)', paddingBottom: 48 }}>
          <div style={{ maxWidth: 1320, margin: '0 auto' }}>
            <div className="k2-hero-kicker" style={{ paddingTop: 24, borderTop: '1px solid rgba(250,250,247,0.15)', color: 'rgba(250,250,247,0.6)' }}>
              {['VCS / Gold Standard eligible', 'CAQM aligned', 'ISO 14001 in progress'].map((k, i) => <span key={i}>● {k}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* Field image + impact statement */}
      <section style={{ padding: '96px 32px' }}>
        <div className="k2-grid-stack-mobile" style={{ maxWidth: 1320, margin: '0 auto', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'center' }}>
          <ImageRotator
            height={460}
            images={[
              { src: '/Unburntpaddyfield.png', alt: 'Unburnt paddy field' },
              { src: '/feedstockchain.png',    alt: 'Feedstock chain' },
            ]}
          />
          <div>
            <Eyebrow style={{ marginBottom: 14 }}>— 01 / Our commitment</Eyebrow>
            <h2 style={{ fontSize: 38, margin: '0 0 22px', lineHeight: 1.1, letterSpacing: '-0.025em', fontWeight: 500 }}>
              We utilise biomass<br />
              <Em>to minimise industrial carbon.</Em>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--k2-text-2)', margin: '0 0 22px' }}>
              Sustainability lies at the core of K2 Biofuels&apos; operations. We utilise biomass to minimise industrial carbon emissions and support global climate goals — by converting agricultural and organic waste into high-efficiency fuels for industrial applications.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--k2-text-2)', margin: 0 }}>
              The result is fuel that helps industries transition away from fossil sources while maintaining operational efficiency and regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Numbers strip */}
      <section style={{ padding: '64px 32px', background: 'var(--k2-ink)', color: 'var(--k2-on-ink)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <Eyebrow accent="var(--k2-cta)" style={{ marginBottom: 24 }}>— 02 / By the numbers</Eyebrow>
          <div className="k2-numbers-strip" style={{ gap: 24, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
            {[
              ['~80K', 'MT/yr',  'Pellets produced annually'],
              ['~80K', 'MT/yr',  'Agro residue diverted from burning'],
              ['~1:1', 'ratio',  'Tonne pelletised vs. coal displaced'],
              ['~6K',  'acres',  'Fields kept unburnt (est. last season)'],
              ['3.5',  'MW',     'On-site captive solar · 100% self-consumed'],
            ].map(([n, u, l], i) => (
              <div key={i} style={{ paddingLeft: i === 0 ? 0 : 24, borderLeft: i === 0 ? 'none' : '1px solid rgba(250,250,247,0.12)' }}>
                <div style={{ fontSize: 56, fontWeight: 300, letterSpacing: '-0.035em', lineHeight: 1 }}>
                  {n}<span style={{ fontSize: 14, color: 'rgba(250,250,247,0.55)', marginLeft: 6 }}>{u}</span>
                </div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,247,0.65)', marginTop: 12 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental benefits — pillar grid */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div className="k2-section-header" style={{ marginBottom: 48 }}>
            <div>
              <Eyebrow style={{ marginBottom: 14 }}>— 03 / Environmental benefits</Eyebrow>
              <h2 style={{ fontSize: 38, margin: 0, lineHeight: 1.1, letterSpacing: '-0.025em', fontWeight: 500 }}>
                The full impact ledger.
              </h2>
            </div>
            <div style={{ maxWidth: 320, textAlign: 'right', fontSize: 14, color: 'var(--k2-text-2)', lineHeight: 1.6 }}>
              Four interlinked outcomes. Each one feeds the next.
            </div>
          </div>
          <div className="k2-grid-4 k2-benefits-grid" style={{ gap: 0, borderTop: '2px solid var(--k2-ink)', borderBottom: '1px solid var(--k2-border-med)' }}>
            {[
              ['Reduced GHG emissions', 'Biomass combustion is broadly carbon-neutral over its lifecycle when sourced from agricultural residue. We measure and report displacement.'],
              ['Lower carbon footprint', 'Industries co-firing our pellets reduce Scope 1 emissions and de-risk against carbon-pricing exposure.'],
              ['Agricultural waste utilisation', 'Crop residue that would otherwise be burnt in the open becomes a saleable commodity for farmers and a fuel for industry.'],
              ['Renewable energy generation', 'Pellets and briquettes power thermal plants, sugar mills, paper plants and cogen units — displacing coal at point of use. Our 3.5 MW on-site solar plant generates ~52 lakh kWh per year, powering production itself on renewable electricity.'],
            ].map(([h, b], i) => (
              <div key={h} style={{
                padding: '32px 28px',
                borderRight: i < 3 ? '1px solid var(--k2-border-med)' : 'none',
              }}>
                <MonoCap style={{ color: 'var(--k2-text-3)', letterSpacing: 1.2 }}>— 0{i + 1}</MonoCap>
                <h3 style={{ fontSize: 18, margin: '14px 0 12px', fontWeight: 500, letterSpacing: '-0.015em' }}>{h}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--k2-text-2)', margin: 0 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carbon credit / certification block */}
      <section style={{ padding: '96px 32px', background: 'var(--k2-stone)' }}>
        <div className="k2-grid-stack-mobile" style={{ maxWidth: 1320, margin: '0 auto', gridTemplateColumns: '1fr 1.2fr', gap: 80 }}>
          <div>
            <Eyebrow style={{ marginBottom: 14 }}>— 04 / Carbon credits &amp; certifications</Eyebrow>
            <h2 style={{ fontSize: 38, margin: '0 0 22px', lineHeight: 1.1, letterSpacing: '-0.025em', fontWeight: 500 }}>
              Verifiable<br />
              <Em>at every step.</Em>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--k2-text-2)', margin: '0 0 22px' }}>
              Our coal-displacement activity at NCR thermal plants is registered for carbon-credit accounting under recognised methodologies. Buyers can co-claim Scope 3 reductions where contracts permit.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--k2-text-2)', margin: 0 }}>
              We publish our certification status openly — including items in progress — so procurement teams can plan their own ESG audits with full visibility.
            </p>
          </div>

          <div className="k2-cert-box" style={{ background: 'var(--k2-surface)', border: '1px solid var(--k2-border-med)', padding: 32 }}>
            <div className="k2-cert-table-scroll" style={{ borderTop: '2px solid var(--k2-ink)' }}>
              <div className="k2-cert-header-row" style={{
                display: 'grid', gridTemplateColumns: '1.6fr 1fr',
                padding: '14px 0', borderBottom: '1px solid var(--k2-border-med)',
                fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase',
                color: 'var(--k2-text-2)',
              }}>
                <div>Category</div>
                <div>Status</div>
              </div>
              {[
                ['On-site solar · 3.5 MW captive (100% self-consumed)', 'Active'],
                ['VCS / Gold Standard carbon project', 'In progress'],
                ['SBP certification', 'Target FY26'],
                ['ISO 14001 — Environmental management', 'In progress'],
                ['CAQM paddy-straw mission alignment', 'Active'],
                ['CPCB consent to operate', 'Active'],
                ['Factory Act compliance', 'Compliant'],
                ['Boiler Act compliance', 'Compliant'],
              ].map(([k, v]) => {
                const live = ['Active', 'Compliant'].includes(v);
                return (
                  <div key={k} className="k2-cert-data-row" style={{
                    display: 'grid', gridTemplateColumns: '1.6fr 1fr',
                    padding: '14px 0', borderBottom: '1px solid var(--k2-border)',
                    fontSize: 14, alignItems: 'center',
                  }}>
                    <div style={{ color: 'var(--k2-text-2)' }}>{k}</div>
                    <div style={{ fontFamily: 'var(--k2-mono)', fontSize: 14, color: live ? 'var(--k2-eyebrow)' : 'var(--k2-cta)' }}>
                      <span style={{ marginRight: 6 }}>{live ? '●' : '○'}</span>{v}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Long-term impact */}
      <section style={{ padding: '112px 32px' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center' }}>
          <Eyebrow style={{ marginBottom: 24 }}>— 05 / Long-term impact</Eyebrow>
          <p style={{
            fontFamily: 'var(--k2-serif)', fontStyle: 'italic',
            fontSize: 40, lineHeight: 1.2, letterSpacing: '-0.015em',
            margin: '0 0 40px', color: 'var(--k2-ink)', fontWeight: 400,
          }}>
            &ldquo;Biomass is not a transition fuel. For India&apos;s thermal industry, with the right logistics and the right pellet quality, it is the destination fuel.&rdquo;
          </p>
          <MonoCap style={{ color: 'var(--k2-text-3)', letterSpacing: 1.2 }}>— K2 Biofuels · Sustainability principles · 2026</MonoCap>
        </div>
      </section>

      <CTAStrip
        eyebrow="— Sustainability"
        title="Want the full"
        italic="impact report?"
        body="We publish an annual sustainability + lab-data report covering feedstock origin, GHG accounting, batch QC averages, and dispatched volume."
        primary="Request the report →"
        secondary="Talk to our ESG team"
      />
    </>
  );
}
