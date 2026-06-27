import type { Metadata } from 'next';
import Link from 'next/link';
import { PAGE_METADATA } from '@/lib/metadata';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Em } from '@/components/ui/em';
import { ImgSlot } from '@/components/ui/img-slot';
import { MonoCap } from '@/components/ui/mono-cap';
import { Button } from '@/components/ui/btn';
import { FAQList } from '@/components/ui/faq-list';
import { CTAStrip } from '@/components/layout/cta-strip';


export const metadata: Metadata = PAGE_METADATA.products;

const pelletSpecs = [
  { p: 'Base material', t: 'Agro residue', s: 'Paddy straw & Mustard straw' },
  { p: 'Shape', t: 'Cylindrical', s: 'Pressed pellet' },
  { p: 'Diameter', t: '6 – 8 mm', s: 'Non-Torrefied', hi: true },
  { p: 'Fines (length < 3 mm)', t: '≤ 4 %', s: 'ARB · on-dispatch' },
  { p: 'Moisture', t: '< 14 %', s: 'ARB · on-dispatch' },
  { p: 'GCV', t: '3,400 – 3,850 kcal/kg', s: 'Non-Torrefied ARB', hi: true },
  { p: 'Sulphur content', t: '0 %', s: 'ARB · on-dispatch' },
];

const briquetteSpecs = [
  { p: 'Base material', t: 'Agro residue', s: 'Paddy Straw & Mustard Straw' },
  { p: 'Shape', t: 'Cylindrical', s: 'High-density' },
  { p: 'Diameter', t: '90 mm', s: 'Spec dimension' },
  { p: 'Moisture', t: '6 – 8 %', s: 'On-dispatch', hi: true },
  { p: 'GCV', t: '3,200 – 3,600 kcal/kg', s: 'Typical', hi: true },
  { p: 'Sulphur content', t: '0 %', s: 'On-dispatch' },
  { p: 'Fines', t: '< 2 %', s: 'On-dispatch' },
  { p: 'Ash content', t: '< 10 %', s: 'On-dispatch' },
];

const jumpLinks: [string, string][] = [
  ['pellets', 'Pellets'],
  ['briquettes', 'Briquettes'],
  ['applications', 'Applications'],
  ['dispatch', 'Dispatch & logistics'],
  ['faq', 'FAQ'],
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero — full-bleed products banner */}
      <section style={{ position: 'relative', height: 'calc(100vh - 96px)', minHeight: 520, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/productsbanner.png"
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.10) 70%, rgba(0,0,0,0.65) 100%)' }} />

        {/* Top — eyebrow, title, body */}
        <div className="k2-section-pad" style={{ position: 'relative', zIndex: 1, width: '100%', color: 'var(--k2-on-ink)', paddingTop: 96 }}>
          <div style={{ maxWidth: 1320, margin: '0 auto' }}>
            <Eyebrow accent="#FFB37A" style={{ marginBottom: 22 }}>— Product catalogue · 2026</Eyebrow>
            <h1 className="k2-h1" style={{ lineHeight: 1.04, letterSpacing: '-0.03em', fontWeight: 500, margin: '0 0 28px', maxWidth: 980 }}>
              Pellets and briquettes, <Em color="#FFB37A">one spec sheet you can actually trust.</Em>
            </h1>
            <p className="k2-body-lg" style={{ lineHeight: 1.6, maxWidth: 720, color: 'rgba(250,250,247,0.92)', margin: 0, textShadow: '0 1px 12px rgba(0,0,0,0.8)' }}>
              Every batch is lab-tested at intake and at output. We publish the spec sheet, not a marketing brochure. Send us your boiler model and we&apos;ll tell you which blend runs cleanest in your kiln.
            </p>
          </div>
        </div>

        {/* Bottom — kicker */}
        <div className="k2-section-pad" style={{ position: 'relative', zIndex: 1, width: '100%', color: 'var(--k2-on-ink)', paddingBottom: 48 }}>
          <div style={{ maxWidth: 1320, margin: '0 auto' }}>
            <div className="k2-hero-kicker" style={{ paddingTop: 24, borderTop: '1px solid rgba(250,250,247,0.15)', color: 'rgba(250,250,247,0.6)' }}>
              {['Lab report on every dispatch', 'Sample in 48 hours', 'Rolling monthly off-take'].map((k, i) => <span key={i}>● {k}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky dark index bar */}
      <div className="k2-products-nav-bar" style={{
        position: 'sticky', zIndex: 30,
        background: 'var(--k2-ink)', color: 'var(--k2-on-ink)',
        borderBottom: '1px solid rgba(250,250,247,0.1)',
      }}>
        <div className="k2-products-nav-scroll" style={{ maxWidth: 1320, margin: '0 auto' }}>
          <span style={{ opacity: 0.5, letterSpacing: 1, textTransform: 'uppercase', fontSize: 12 }}>Jump to</span>
          {jumpLinks.map(([id, label]) => (
            <a key={id} href={`#${id}`}
              className="k2-products-nav-link"
              style={{
                color: 'rgba(250,250,247,0.85)', textDecoration: 'none', cursor: 'pointer',
                paddingBottom: 2, borderBottom: '1px solid transparent',
                transition: 'border-color .15s ease',
              }}>
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* ====== PRODUCT 01 — PELLETS ====== */}
      <section id="pellets" data-screen-label="Products · Pellets" style={{ padding: '96px 32px', borderBottom: '1px solid var(--k2-border)' }}>
        <div className="k2-grid-stack-mobile" style={{ maxWidth: 1320, margin: '0 auto', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'start' }}>
          <div>
            <div style={{ position: 'relative', height: 380, overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/productpellet1.png" alt="Biomass pellets" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{
                position: 'absolute', top: 14, right: 14,
                background: 'rgba(255,255,255,0.95)', color: 'var(--k2-ink)',
                fontSize: 12, letterSpacing: 1, textTransform: 'uppercase',
                padding: '5px 10px', fontWeight: 500,
              }}>
                <span style={{ color: 'var(--k2-eyebrow)' }}>●</span> In stock
              </div>
              <div style={{ position: 'absolute', bottom: 18, left: 18, color: '#fff' }}>
                <div style={{ fontFamily: 'var(--k2-mono)', fontSize: 12, letterSpacing: 1.5, opacity: 0.8, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>
                  6 – 8 mm · Non-Torrefied
                </div>
                <div style={{ fontSize: 22, fontWeight: 500, marginTop: 4, textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>
                  Biomass pellet
                </div>
              </div>
            </div>

            <div style={{ marginTop: 32 }}>
              <Eyebrow style={{ marginBottom: 12 }}>Availability</Eyebrow>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--k2-text-2)', margin: 0 }}>
                Year-round supply from our aggregator panel across Haryana, Punjab and western UP. Peak feedstock season Oct–Feb. Volume-protected contracts available up to 8,000 MT/month.
              </p>
            </div>

            <div style={{
              marginTop: 28, background: 'rgba(45,122,61,0.06)',
              borderLeft: '3px solid var(--k2-eyebrow)', padding: 20,
            }}>
              <Eyebrow style={{ marginBottom: 6 }}>CAQM-priority feedstock</Eyebrow>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--k2-text-2)', margin: 0 }}>
                Our pellets meet the Commission for Air Quality Management mandate for paddy-straw co-firing at Delhi-NCR thermal plants.
              </p>
            </div>

            <div style={{
              marginTop: 16, background: 'rgba(45,122,61,0.06)',
              borderLeft: '3px solid var(--k2-eyebrow)', padding: 20,
            }}>
              <Eyebrow style={{ marginBottom: 6 }}>No synthetic binders</Eyebrow>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--k2-text-2)', margin: 0 }}>
                No external additives or chemical binders are used. Bonding occurs naturally through the lignin and silica present in the biomass, activated by high pressure, elevated temperature, steam conditioning and cooling during production.
              </p>
            </div>
          </div>

          <div>
            <MonoCap style={{ color: 'var(--k2-text-3)', letterSpacing: 1.2 }}>— 01</MonoCap>
            <h2 style={{ fontSize: 48, margin: '12px 0 24px', fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Biomass pellets
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--k2-text-2)', margin: '0 0 18px' }}>
              Pelletised from mustard waste, paddy waste and other agro residues under strict moisture and fines control. Consistent calorific value, optimised for industrial boilers, furnaces, thermal energy systems and domestic pellet stoves.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--k2-text-2)', margin: '0 0 36px' }}>
              Compact form, low moisture and a clean burn profile make pellets a direct replacement for coal and LPG in industrial heating — at typically lower long-term cost per kilocalorie.
            </p>

            {/* Spec table */}
            <div className="k2-table-scroll-mobile" style={{ borderTop: '2px solid var(--k2-ink)' }}>
              <div className="k2-spec-header-3" style={{
                display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr',
                padding: '14px 0', borderBottom: '1px solid var(--k2-border-med)',
                fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase',
                color: 'var(--k2-text-2)',
              }}>
                <div>Parameter</div>
                <div>Typical</div>
                <div>Specification</div>
              </div>
              {pelletSpecs.map((r) => (
                <div key={r.p} className="k2-spec-row-3" style={{
                  display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr',
                  padding: '14px 0', borderBottom: '1px solid var(--k2-border)',
                  fontSize: 14,
                }}>
                  <div style={{ color: 'var(--k2-text-2)' }}>{r.p}</div>
                  <div style={{ fontFamily: 'var(--k2-mono)', color: r.hi ? 'var(--k2-cta)' : 'var(--k2-ink)' }}>{r.t}</div>
                  <div style={{ fontFamily: 'var(--k2-mono)', color: 'var(--k2-text-2)' }}>{r.s}</div>
                </div>
              ))}
            </div>

            {/* Packaging + benefits row */}
            <div className="k2-grid-3" style={{ gap: 16, marginTop: 36 }}>
              {[
                ['Packaging', '25 – 35 kg HDPE bag · jumbo bags · custom bulk'],
                ['Best for', 'Industrial boilers, furnaces, thermal plants, pellet stoves'],
                ['Edge', 'Low emissions, easy storage, dependable cost-per-kcal'],
              ].map(([h, b]) => (
                <div key={h} style={{ padding: 20, border: '1px solid var(--k2-border-med)' }}>
                  <Eyebrow style={{ marginBottom: 8 }}>{h}</Eyebrow>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--k2-text-2)', margin: 0 }}>{b}</p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
              <Link href="/contact"><Button variant="primary">Request a sample · 50 kg →</Button></Link>
              <Button variant="outline">Download lab report PDF</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ====== PRODUCT 02 — BRIQUETTES ====== */}
      <section id="briquettes" data-screen-label="Products · Briquettes" style={{ padding: '96px 32px', background: 'var(--k2-stone)', borderBottom: '1px solid var(--k2-border)' }}>
        <div className="k2-grid-stack-mobile" style={{ maxWidth: 1320, margin: '0 auto', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'start' }}>
          <div>
            <MonoCap style={{ color: 'var(--k2-text-3)', letterSpacing: 1.2 }}>— 02</MonoCap>
            <h2 style={{ fontSize: 48, margin: '12px 0 24px', fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              Biomass briquettes
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--k2-text-2)', margin: '0 0 18px' }}>
              High-density 90 mm cylindrical briquettes, engineered for sustained industrial steam load. Used by vegetable &amp; food processing plants, brick manufacturers, distilleries and chemical processing units.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--k2-text-2)', margin: '0 0 36px' }}>
              At 3,200–3,600 kcal/kg GCV with ash content under 10% and moisture at 6–8%, briquettes outperform pellets in long-burn applications — and dramatically outperform coal on emissions.
            </p>

            <div className="k2-table-scroll-mobile" style={{ borderTop: '2px solid var(--k2-ink)' }}>
              <div className="k2-spec-header-3" style={{
                display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr',
                padding: '14px 0', borderBottom: '1px solid var(--k2-border-med)',
                fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase',
                color: 'var(--k2-text-2)',
              }}>
                <div>Parameter</div>
                <div>Typical</div>
                <div>Specification</div>
              </div>
              {briquetteSpecs.map((r) => (
                <div key={r.p} className="k2-spec-row-3" style={{
                  display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr',
                  padding: '14px 0', borderBottom: '1px solid var(--k2-border)',
                  fontSize: 14,
                }}>
                  <div style={{ color: 'var(--k2-text-2)' }}>{r.p}</div>
                  <div style={{ fontFamily: 'var(--k2-mono)', color: r.hi ? 'var(--k2-cta)' : 'var(--k2-ink)' }}>{r.t}</div>
                  <div style={{ fontFamily: 'var(--k2-mono)', color: 'var(--k2-text-2)' }}>{r.s}</div>
                </div>
              ))}
            </div>

            <div className="k2-grid-3" style={{ gap: 16, marginTop: 36 }}>
              {[
                ['Packaging', '40 – 60 kg bag · custom bulk supply'],
                ['Best for', 'Brick kilns, food processing, chemical plants, steam generation'],
                ['Edge', 'High density, clean ash, reduced fuel cost vs. coal/diesel'],
              ].map(([h, b]) => (
                <div key={h} style={{ padding: 20, border: '1px solid var(--k2-border-med)', background: 'var(--k2-surface)' }}>
                  <Eyebrow style={{ marginBottom: 8 }}>{h}</Eyebrow>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--k2-text-2)', margin: 0 }}>{b}</p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
              <Link href="/contact"><Button variant="primary">Request a sample · 50 kg →</Button></Link>
              <Button variant="outline">Download lab report PDF</Button>
            </div>
          </div>

          <div className="k2-product-img-right">
            <div style={{ position: 'relative', height: 380, overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Briquetteheroproduct02.png" alt="Biomass briquettes" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{
                position: 'absolute', top: 14, right: 14,
                background: 'rgba(255,255,255,0.95)', color: 'var(--k2-ink)',
                fontSize: 12, letterSpacing: 1, textTransform: 'uppercase',
                padding: '5px 10px', fontWeight: 500,
              }}>
                <span style={{ color: 'var(--k2-cta)' }}>★</span> Premium
              </div>
              <div style={{ position: 'absolute', bottom: 18, left: 18, color: '#fff' }}>
                <div style={{ fontFamily: 'var(--k2-mono)', fontSize: 12, letterSpacing: 1.5, opacity: 0.8, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>
                  90 mm × 100–300 mm
                </div>
                <div style={{ fontSize: 22, fontWeight: 500, marginTop: 4, textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>Biomass briquette</div>
              </div>
            </div>

            <div style={{ marginTop: 32, background: 'var(--k2-surface)', padding: 20, border: '1px solid var(--k2-border-med)' }}>
              <Eyebrow style={{ marginBottom: 8 }}>Closest coal substitute</Eyebrow>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--k2-text-2)', margin: 0 }}>
                At 3,200–3,600 kcal/kg, our briquettes deliver thermal output within range of typical Indian coal — at materially lower emissions and ash-handling cost.
              </p>
            </div>

            <div style={{ marginTop: 16, background: 'var(--k2-surface)', padding: 20, border: '1px solid var(--k2-border-med)' }}>
              <Eyebrow style={{ marginBottom: 8 }}>No synthetic binders</Eyebrow>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--k2-text-2)', margin: 0 }}>
                No external additives or chemical binders are used. Natural bonding is achieved through the lignin and silica in the biomass feedstock, activated under high pressure, elevated temperature, steam conditioning and cooling — making our briquettes a fully natural, environmentally friendly fuel.
              </p>
            </div>

            <div style={{ marginTop: 20 }}>
              <Eyebrow style={{ marginBottom: 12 }}>Why briquettes</Eyebrow>
              <ul style={{ paddingLeft: 18, fontSize: 14, lineHeight: 1.75, color: 'var(--k2-text-2)', margin: 0 }}>
                <li>Long, steady burn for continuous steam load</li>
                <li>Lower fuel cost than coal or diesel over rolling contracts</li>
                <li>Ash byproduct can be redeployed in agriculture</li>
                <li>Prevents open-field crop residue burning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ====== APPLICATIONS MATRIX ====== */}
      <section id="applications" data-screen-label="Products · Applications" style={{ padding: '96px 32px', borderBottom: '1px solid var(--k2-border)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div className="k2-section-header" style={{ marginBottom: 48 }}>
            <div>
              <Eyebrow style={{ marginBottom: 12 }}>— 03 / Applications</Eyebrow>
              <h2 style={{ fontSize: 42, margin: 0, lineHeight: 1.1, letterSpacing: '-0.025em', fontWeight: 500 }}>
                Which fuel fits<br />
                <Em>your application?</Em>
              </h2>
            </div>
            <div style={{ fontSize: 14, color: 'var(--k2-text-2)', maxWidth: 320, textAlign: 'right', lineHeight: 1.6 }}>
              A quick reference matrix. Not sure? Send us your boiler model and we&apos;ll recommend the blend.
            </div>
          </div>

          {/* Matrix */}
          <div className="k2-table-scroll-mobile" style={{ borderTop: '2px solid var(--k2-ink)' }}>
            <div className="k2-apps-matrix-header" style={{
              display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.5fr',
              padding: '14px 4px', borderBottom: '1px solid var(--k2-border-med)',
              fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase',
              color: 'var(--k2-text-2)',
            }}>
              <div>Application</div>
              <div>Pellets</div>
              <div>Briquettes</div>
              <div>Notes</div>
            </div>
            {([
              ['Thermal power co-firing',         'best', 'compat', 'CAQM mandate · NCR plants'],
              ['Industrial boilers (FBC)',         'best', 'best',   'High flexibility on blend'],
              ['Furnaces / process heating',       'compat','best',  'Long-burn applications'],
              ['Sugar mill cogen',                 'best', 'compat', 'Off-season biomass fuel'],
              ['Paper & pulp',                     'compat','best',  'Steady steam load'],
              ['Brick kilns',                      'compat','best',  'Highest density wins'],
              ['Food / vegetable processing',      'compat','best',  'Briquettes preferred'],
              ['Distilleries',                     'compat','best',  'Continuous-load burners'],
              ['Domestic pellet stoves',           'best', '—',      'Small-format only'],
            ] as [string, string, string, string][]).map(([app, pel, briq, note], i) => {
              const icon = (s: string) => {
                if (s === 'best')   return <span><span style={{ color: 'var(--k2-eyebrow)' }}>●</span> Best fit</span>;
                if (s === 'compat') return <span style={{ color: 'var(--k2-text-2)' }}>○ Compatible</span>;
                return <span style={{ color: 'var(--k2-text-3)' }}>—</span>;
              };
              return (
                <div key={i} className="k2-apps-matrix-row" style={{
                  display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.5fr',
                  padding: '16px 4px', borderBottom: '1px solid var(--k2-border)',
                  fontSize: 14, alignItems: 'center',
                }}>
                  <div style={{ fontWeight: 500 }}>{app}</div>
                  <div style={{ fontSize: 15 }}>{icon(pel)}</div>
                  <div style={{ fontSize: 15 }}>{icon(briq)}</div>
                  <div style={{ fontFamily: 'var(--k2-mono)', fontSize: 13, color: 'var(--k2-text-2)' }}>{note}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== DISPATCH ====== */}
      <section id="dispatch" data-screen-label="Products · Dispatch" style={{ background: 'var(--k2-ink)', color: 'var(--k2-on-ink)', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <Eyebrow accent="var(--k2-cta)" style={{ marginBottom: 24 }}>— 04 / Dispatch &amp; logistics</Eyebrow>
          <div className="k2-grid-3" style={{ gap: 48 }}>
            {[
              ['Packaging', 'Bulk-bag, jumbo-bag, loose tipper', '25–35 kg HDPE bags, 40–60 kg briquette bags, 1 MT jumbo bags or direct loose tipper dispatch up to 28 MT per truck. Loaded under cover.'],
              ['Geography', 'Delivered across north India', 'Direct truck dispatch within 400 km. Rake-load capability for distant deliveries. Sealed load-cell weighbridge at our Rewari plant.'],
              ['Lead time', '7–14 days for first order', 'Sample dispatched in 48 hours. Trial loads typically 2 weeks. Long-term contracts on rolling monthly off-take.'],
            ].map(([eb, h, body], i) => (
              <div key={i}>
                <Eyebrow accent="var(--k2-cta)" style={{ marginBottom: 14 }}>— 0{i + 1} / {eb}</Eyebrow>
                <h3 style={{ fontSize: 22, margin: '0 0 14px', fontWeight: 500, letterSpacing: '-0.015em' }}>{h}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(250,250,247,0.72)', margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section id="faq" data-screen-label="Products · FAQ" style={{ padding: '96px 32px' }}>
        <div className="k2-grid-stack-mobile" style={{ maxWidth: 1320, margin: '0 auto', gridTemplateColumns: '1fr 1.6fr', gap: 80 }}>
          <div>
            <Eyebrow style={{ marginBottom: 14 }}>— 05 / FAQ</Eyebrow>
            <h2 style={{ fontSize: 42, margin: 0, lineHeight: 1.1, letterSpacing: '-0.025em', fontWeight: 500 }}>
              Questions <Em>procurement<br />heads ask us.</Em>
            </h2>
          </div>
          <FAQList />
        </div>
        <div style={{ maxWidth: 1320, margin: '32px auto 0', textAlign: 'right' }}>
          <Link href="/faq" style={{
            fontFamily: 'var(--k2-mono)',
            fontSize: 14,
            letterSpacing: '0.05em',
            color: 'var(--k2-eyebrow)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--k2-eyebrow)',
            paddingBottom: 2,
          }}>
            Browse all 30+ questions →
          </Link>
        </div>
      </section>

      <CTAStrip
        eyebrow="— Request product information"
        title="Send us your boiler."
        italic="We'll send you a sample."
        body="50 kg trial in 48 hours. Indicative quote within 24. Rolling monthly off-take from there."
        primary="Request a sample →"
        secondary="Download brochure"
      />
    </>
  );
}
