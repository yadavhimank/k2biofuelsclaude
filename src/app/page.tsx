import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Button } from '@/components/ui/btn';
import { ImgSlot } from '@/components/ui/img-slot';
import { MonoCap } from '@/components/ui/mono-cap';
import { Em } from '@/components/ui/em';
import { CTAStrip } from '@/components/layout/cta-strip';
import { PAGE_METADATA } from '@/lib/metadata';
import { BLOG_POSTS } from '@/lib/blog-posts';
import { PRESS_ARTICLES, NEWS_VIDEOS } from '@/lib/newsroom';

export const metadata: Metadata = PAGE_METADATA.home;

const metrics: [string, string, string][] = [
  ['252',  'TPD',           'Pellet manufacturing capacity'],
  ['~80K', 'MT/yr',         'Annual pellet output'],
  ['2',    'product lines', 'Pellets · Briquettes'],
  ['70',   'km',            'From Delhi-NCR — CAQM-priority zone'],
];

const products = [
  {
    tone:   'paddy' as const,
    eb:     'Non-Torrefied · 6–8 mm dia',
    name:   'Biomass pellets',
    desc:   'Cylindrical 6–8 mm pellets pressed from paddy straw & mustard straw. Consistent moisture, low fines, suited to industrial boilers, furnaces and power-plant co-firing.',
    specs:  [['GCV', '3,400 – 3,850 kcal/kg'], ['Moisture', '< 14 %'], ['Diameter', '6–8 mm'], ['Fines', '≤ 4 %']],
    anchor: '#pellets',
    stock:  '● In stock',
    tag:    'Pellets',
  },
  {
    tone:   'mustard' as const,
    eb:     'Industrial grade · 90 mm dia',
    name:   'Biomass briquettes',
    desc:   'High-density 90 mm cylindrical briquettes for brick kilns, vegetable & food processing, distilleries and steam-generation plants.',
    specs:  [['GCV', '3,800–3,900 kcal/kg'], ['Moisture', '6–8 %'], ['Ash', '< 10 %'], ['Fines', '< 2 %']],
    anchor: '#briquettes',
    stock:  '★ Premium',
    tag:    'Briquettes',
  },
];

const sustainabilityRows: [string, string][] = [
  ['Carbon credit eligibility', 'VCS · Gold Standard'],
  ['Regulatory alignment',      'CAQM · MoP · MNRE'],
  ['Quality management',        'In-house lab, every batch'],
];

const infraSpecs: [string, string][] = [
  ['Installed capacity', '252 TPD'],
  ['Annual output',      '~80,000 MT'],
  ['Storage capacity',   '5,500 MT covered'],
  ['Workforce',          '800+ across the K2 Group'],
];

function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${day} ${months[month - 1]} ${year}`;
}

export default function HomePage() {
  const recentPress = [...PRESS_ARTICLES]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 2);

  const recentVideo = [...NEWS_VIDEOS]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())[0];

  const recentBlog = [...BLOG_POSTS]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())[0];

  return (
    <>
      {/* =========== HERO — image-led =========== */}
      <section data-screen-label="01 Home — Hero" className="k2-home-hero" style={{
        position: 'relative',
        overflow: 'hidden',
        height: 'clamp(320px, 44vw, 540px)',
      }}>
        <Image
          src="/heroimage.png"
          alt="K2 Biofuels pellet plant, Rewari, Haryana"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="100vw"
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, rgba(10,31,14,0.78) 0%, rgba(10,31,14,0.45) 50%, rgba(10,31,14,0.15) 100%)',
        }} />
        <div className="k2-home-hero-overlay" style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          color: '#FAFAF7',
        }}>
          <div className="k2-hero-content" style={{ maxWidth: 1320, margin: '0 auto', width: '100%' }}>
            <Eyebrow bullet accent="#FFB37A" style={{ marginBottom: 22 }}>
              Biomass pellet manufacturing · Rewari, Haryana
            </Eyebrow>
            <h1 className="k2-h1" style={{
              lineHeight: 1.03, letterSpacing: '-0.035em',
              fontWeight: 500, margin: '0 0 28px', maxWidth: 980,
              textShadow: '0 1px 24px rgba(0,0,0,0.2)',
            }}>
              Industrial-grade biomass fuel,<br />
              <Em color="#FFB37A">engineered for thermal plants.</Em>
            </h1>
            <p className="k2-body-lg" style={{
              lineHeight: 1.55, color: 'rgba(250,250,247,0.85)',
              maxWidth: 580, margin: '0 0 36px',
            }}>
              Pellets and briquettes from agricultural residue, supplied to NCR thermal plants, sugar mills, paper plants and brick kilns across north India.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/products" style={{ textDecoration: 'none' }}>
                <Button variant="accent">View product catalogue →</Button>
              </Link>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Button variant="outline" light={false}>Talk to sales</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========== METRICS STRIP =========== */}
      <section style={{
        background: 'var(--k2-ink)', color: 'var(--k2-on-ink)',
        padding: '48px 32px',
      }}>
        <div className="k2-grid-4 k2-numbers-strip" style={{ maxWidth: 1320, margin: '0 auto', gap: 32 }}>
          {metrics.map(([num, unit, label], i) => (
            <div key={i} style={{
              paddingLeft: i === 0 ? 0 : 24,
              borderLeft: i === 0 ? 'none' : '1px solid rgba(250,250,247,0.12)',
            }}>
              <div className="k2-metric-num" style={{ fontSize: 48, fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1 }}>
                {num}
                <span style={{ fontSize: 14, color: i === 3 ? 'var(--k2-cta)' : 'rgba(250,250,247,0.55)', marginLeft: 6 }}>
                  {unit}
                </span>
              </div>
              <div style={{ fontSize: 14, color: 'rgba(250,250,247,0.65)', marginTop: 10 }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========== INTRO PARAGRAPH (under metrics, anchors home story) =========== */}
      <section className="k2-home-intro-section">
        <div className="k2-grid-split-narrow k2-home-intro-grid" style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div>
            <Eyebrow style={{ marginBottom: 14 }}>— 01 / Who we are</Eyebrow>
            <h2 style={{
              fontSize: 42, lineHeight: 1.1, letterSpacing: '-0.025em',
              fontWeight: 500, margin: 0,
            }}>
              We turn agricultural residue<br />
              <Em>into industrial fuel.</Em>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--k2-text-2)', margin: '0 0 22px' }}>
              K2 Biofuels Pvt. Ltd. is a renewable energy company headquartered in Gurgaon with a pellet manufacturing plant in Rewari, Haryana. We pelletise and briquette agricultural residues — paddy straw, mustard husk, rice husk and other agro waste — into a clean, drop-in fuel for industrial boilers.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--k2-text-2)', margin: '0 0 28px' }}>
              Every tonne we ship is one tonne of straw that would otherwise have been set on fire in the open. Every tonne also displaces roughly one tonne of imported coal. The math is uncomplicated.
            </p>
            <Link href="/about" style={{
              color: 'inherit', textDecoration: 'none',
              fontSize: 15, fontWeight: 500, letterSpacing: 0.2,
              borderBottom: '1px solid var(--k2-ink)', paddingBottom: 2,
            }}>
              Read about the company →
            </Link>
          </div>
        </div>
      </section>

      {/* =========== PRODUCT MATRIX =========== */}
      <section className="k2-home-products-section" style={{ padding: '80px 32px', background: 'var(--k2-stone)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div className="k2-home-products-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
            <div>
              <Eyebrow style={{ marginBottom: 12 }}>— 02 / Products</Eyebrow>
              <h2 className="k2-home-products-h2" style={{ fontSize: 42, margin: 0, maxWidth: 720, lineHeight: 1.1, letterSpacing: '-0.025em', fontWeight: 500 }}>
                Pellets and briquettes,<br className="k2-home-products-br" />
                <Em>lab-tested at every batch.</Em>
              </h2>
            </div>
            <div className="k2-home-products-desc" style={{ fontSize: 14, color: 'var(--k2-text-2)', maxWidth: 320, textAlign: 'right', lineHeight: 1.6 }}>
              Two product lines, multiple agro-residue blends. GCV, moisture and fines tested on every dispatch.
            </div>
          </div>

          <div className="k2-grid-2" style={{ gap: 20 }}>
            {products.map((p) => (
              <Link key={p.name} href={`/products${p.anchor}`} style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
                <div
                  className="k2-product-card"
                  style={{
                    background: 'var(--k2-surface)',
                    border: '1px solid var(--k2-border-med)',
                    cursor: 'pointer',
                    transition: 'transform .25s ease, border-color .2s ease, box-shadow .2s ease',
                  }}
                >
                  <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
                    {p.tag === 'Pellets' ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src="/pelletsimage.png" alt="Biomass pellets" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    ) : p.tag === 'Briquettes' ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src="/briquettes.png" alt="Biomass briquettes" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    ) : (
                      <ImgSlot tone={p.tone} height={220} />
                    )}
                    <div style={{
                      position: 'absolute', top: 14, right: 14,
                      background: 'rgba(255,255,255,0.95)', color: 'var(--k2-ink)',
                      fontSize: 12, letterSpacing: 1, textTransform: 'uppercase',
                      padding: '5px 10px', fontWeight: 500,
                    }}>
                      <span style={{ color: p.stock.includes('★') ? 'var(--k2-cta)' : 'var(--k2-eyebrow)' }}>{p.stock.slice(0, 1)}</span>{p.stock.slice(1)}
                    </div>
                    <div style={{
                      position: 'absolute', bottom: 14, left: 14,
                      fontFamily: 'var(--k2-mono)', fontSize: 12, letterSpacing: 1.5,
                      color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase',
                    }}>
                      / {p.tag}
                    </div>
                  </div>
                  <div style={{ padding: 32 }}>
                    <Eyebrow style={{ marginBottom: 12 }}>{p.eb}</Eyebrow>
                    <h3 style={{ fontSize: 26, margin: '0 0 12px', fontWeight: 500, letterSpacing: '-0.015em' }}>{p.name}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--k2-text-2)', margin: '0 0 24px' }}>{p.desc}</p>
                    <div style={{ fontFamily: 'var(--k2-mono)', fontSize: 13, color: 'var(--k2-text-2)', lineHeight: 1.95, marginBottom: 22 }}>
                      {p.specs.map(([k, v]) => (
                        <div key={k} style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>{k}</span><span style={{ color: 'var(--k2-ink)' }}>{v}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{
                      paddingTop: 16, borderTop: '1px solid var(--k2-border)',
                      fontSize: 15, display: 'flex', justifyContent: 'space-between',
                    }}>
                      <MonoCap style={{ color: 'var(--k2-text-3)' }}>From agro residue</MonoCap>
                      <span style={{ fontWeight: 500 }}>View full spec →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========== SUSTAINABILITY =========== */}
      <section className="k2-home-sustain-section">
        <div className="k2-grid-stack-mobile k2-home-sustain-grid" style={{ maxWidth: 1320, margin: '0 auto', gridTemplateColumns: '1fr 1.3fr', alignItems: 'start' }}>
          <div>
            <Eyebrow style={{ marginBottom: 14 }}>— 03 / Sustainability</Eyebrow>
            <h2 style={{ fontSize: 42, margin: '0 0 24px', lineHeight: 1.1, letterSpacing: '-0.025em', fontWeight: 500 }}>
              Every tonne we ship<br />
              <Em>keeps a field unburnt.</Em>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--k2-text-2)', margin: '0 0 32px' }}>
              We source agricultural residue directly from farmers and aggregators across Haryana, Punjab and western UP — under the CAQM Paddy Straw Mission framework. Every tonne we pelletise is one tonne not set on fire on the field.
            </p>
            <div style={{ borderTop: '1px solid var(--k2-border-med)' }}>
              {sustainabilityRows.map(([k, v]) => (
                <div key={k} style={{
                  display: 'flex', justifyContent: 'space-between',
                  flexWrap: 'wrap', gap: '4px 12px',
                  padding: '14px 0', borderBottom: '1px solid var(--k2-border-med)',
                  fontSize: 15,
                }}>
                  <span style={{ color: 'var(--k2-text-2)' }}>{k}</span>
                  <span style={{ fontFamily: 'var(--k2-mono)' }}>{v}</span>
                </div>
              ))}
            </div>
            <Link href="/sustainability" style={{
              color: 'inherit', textDecoration: 'none',
              display: 'inline-block', marginTop: 28,
              fontSize: 15, fontWeight: 500, letterSpacing: 0.2,
              borderBottom: '1px solid var(--k2-ink)', paddingBottom: 2,
            }}>
              Read our sustainability commitments →
            </Link>
          </div>

          <div className="k2-coal-diagram" style={{ background: 'var(--k2-surface)', border: '1px solid var(--k2-border-med)', padding: 40 }}>
            <Eyebrow style={{ marginBottom: 28 }}>Stubble → Pellet → Power</Eyebrow>
            <svg viewBox="0 0 600 340" style={{ width: '100%', height: 'auto', display: 'block' }}>
              <g>
                <rect x="20" y="40" width="160" height="80" fill="none" stroke="#0A1F0E" strokeWidth="1" />
                <text x="100" y="72" textAnchor="middle" fontSize="11" fontFamily="var(--k2-mono)" letterSpacing="1.5" fill="#0A1F0E">FIELD</text>
                <text x="100" y="92" textAnchor="middle" fontSize="10" fill="#3A4A3D">Agro residue collection</text>
                <text x="100" y="108" textAnchor="middle" fontSize="9" fontFamily="var(--k2-mono)" fill="#6B7A6E">Haryana · Punjab · UP</text>
              </g>
              <line x1="180" y1="80" x2="220" y2="80" stroke="#0A1F0E" strokeWidth="1" />
              <polygon points="220,76 228,80 220,84" fill="#0A1F0E" />
              <g>
                <rect x="228" y="40" width="160" height="80" fill="#0A1F0E" />
                <text x="308" y="72" textAnchor="middle" fontSize="11" fontFamily="var(--k2-mono)" letterSpacing="1.5" fill="#FAFAF7">K2 PLANT</text>
                <text x="308" y="92" textAnchor="middle" fontSize="10" fill="rgba(250,250,247,0.75)">Drying · Pelletising</text>
                <text x="308" y="108" textAnchor="middle" fontSize="9" fontFamily="var(--k2-mono)" fill="var(--k2-cta)">Rewari · 252 TPD</text>
              </g>
              <line x1="388" y1="80" x2="428" y2="80" stroke="#0A1F0E" strokeWidth="1" />
              <polygon points="428,76 436,80 428,84" fill="#0A1F0E" />
              <g>
                <rect x="436" y="40" width="144" height="80" fill="none" stroke="#0A1F0E" strokeWidth="1" />
                <text x="508" y="72" textAnchor="middle" fontSize="11" fontFamily="var(--k2-mono)" letterSpacing="1.5" fill="#0A1F0E">BOILER</text>
                <text x="508" y="92" textAnchor="middle" fontSize="10" fill="#3A4A3D">NCR thermal · industrial</text>
                <text x="508" y="108" textAnchor="middle" fontSize="9" fontFamily="var(--k2-mono)" fill="#6B7A6E">Co-firing · steam</text>
              </g>
              <line x1="300" y1="140" x2="300" y2="200" stroke="#0A1F0E" strokeWidth="1" strokeDasharray="3,3" />
              <polygon points="296,200 300,208 304,200" fill="#0A1F0E" />
              <g>
                <text x="300" y="240" textAnchor="middle" fontSize="14" fill="#3A4A3D">Coal displaced per tonne pelletised</text>
                <text x="300" y="290" textAnchor="middle" fontSize="56" fontWeight="300" letterSpacing="-0.03em" fill="#E8651A">~1.0</text>
                <text x="300" y="316" textAnchor="middle" fontSize="12" fontFamily="var(--k2-mono)" letterSpacing="1" fill="#3A4A3D">tonne / tonne</text>
              </g>
            </svg>
            <p style={{
              fontSize: 14, fontStyle: 'italic', color: 'var(--k2-text-3)',
              fontFamily: 'var(--k2-serif)', marginTop: 16, textAlign: 'center',
            }}>
              Fig. 01 — Coal displacement chain, field to firebox.
            </p>
          </div>
        </div>
      </section>

      {/* =========== INFRASTRUCTURE TEASER =========== */}
      <section style={{ padding: '80px 32px', background: 'var(--k2-stone)' }}>
        <div className="k2-grid-stack-mobile" style={{ maxWidth: 1320, margin: '0 auto', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/infrastructure.png" alt="K2 Biofuels Rewari plant" style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }} />
          <div>
            <Eyebrow style={{ marginBottom: 14 }}>— 04 / Infrastructure</Eyebrow>
            <h2 style={{ fontSize: 38, margin: '0 0 22px', lineHeight: 1.1, letterSpacing: '-0.025em', fontWeight: 500 }}>
              A 252-tonne-a-day plant,<br />
              <Em>engineered for throughput.</Em>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--k2-text-2)', margin: '0 0 28px' }}>
              Our Rewari facility runs modern pellet mills, in-line drying, automated bagging and an on-site quality lab. Designed for sustained 24/7 operation and consistent batch output.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
              {infraSpecs.map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 15, paddingBottom: 10, borderBottom: '1px solid var(--k2-border)' }}>
                  <span style={{ color: 'var(--k2-text-2)' }}>{k}</span>
                  <span style={{ fontFamily: 'var(--k2-mono)' }}>{v}</span>
                </div>
              ))}
            </div>
            <Link href="/infrastructure" style={{ textDecoration: 'none' }}>
              <Button variant="outline">Tour the facility →</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* =========== CLIENTS BAR =========== */}
      <section style={{
        padding: '64px 32px',
        borderTop: '1px solid var(--k2-border)',
        borderBottom: '1px solid var(--k2-border)',
      }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', textAlign: 'center' }}>
          <Eyebrow style={{ marginBottom: 28 }}>— 05 / Trusted by industrial buyers across north India</Eyebrow>
          <div style={{
            fontFamily: 'var(--k2-serif)', fontStyle: 'italic',
            fontSize: 28, color: 'var(--k2-text-2)', opacity: 0.8,
            display: 'flex', justifyContent: 'center', gap: 0, flexWrap: 'wrap',
          }}>
            <span>Thermal power</span>
            <span className="k2-clients-sep" style={{ margin: '0 22px', opacity: 0.4 }}>·</span>
            <span>Sugar mills</span>
            <span className="k2-clients-sep" style={{ margin: '0 22px', opacity: 0.4 }}>·</span>
            <span>Paper &amp; pulp</span>
            <span className="k2-clients-sep" style={{ margin: '0 22px', opacity: 0.4 }}>·</span>
            <span>Captive cogen</span>
            <span className="k2-clients-sep" style={{ margin: '0 22px', opacity: 0.4 }}>·</span>
            <span>Brick kilns</span>
            <span className="k2-clients-sep" style={{ margin: '0 22px', opacity: 0.4 }}>·</span>
            <span>Distilleries</span>
          </div>
        </div>
      </section>

      {/* =========== LATEST FROM NEWSROOM + BLOG =========== */}
      <section style={{ padding: '80px 32px', background: 'var(--k2-stone)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', marginBottom: 40,
            flexWrap: 'wrap', gap: 16,
          }}>
            <div>
              <Eyebrow style={{ marginBottom: 12 }}>— 06 / Latest</Eyebrow>
              <h2 style={{
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                margin: 0, lineHeight: 1.1,
                letterSpacing: '-0.025em', fontWeight: 500,
              }}>
                From the newsroom<br /><Em>and the blog.</Em>
              </h2>
            </div>
            <div style={{
              display: 'flex', gap: 24, alignItems: 'center',
              fontFamily: 'var(--k2-mono)', fontSize: 13, letterSpacing: '0.05em',
            }}>
              <Link href="/newsroom" style={{ color: 'var(--k2-ink)', textDecoration: 'none', borderBottom: '1px solid var(--k2-ink)', paddingBottom: 2 }}>
                Newsroom →
              </Link>
              <Link href="/blog" style={{ color: 'var(--k2-ink)', textDecoration: 'none', borderBottom: '1px solid var(--k2-ink)', paddingBottom: 2 }}>
                Blog →
              </Link>
            </div>
          </div>

          <div className="k2-grid-4" style={{ gap: 16 }}>
            {/* 2 most recent press articles */}
            {recentPress.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="k2-blog-card"
                style={{
                  background: 'var(--k2-canvas)',
                  border: '1px solid var(--k2-border-med)',
                  textDecoration: 'none', color: 'inherit',
                  display: 'flex', flexDirection: 'column',
                  padding: '22px 22px 20px',
                  minHeight: 180,
                }}
              >
                <span style={{
                  fontFamily: 'var(--k2-mono)', fontSize: 9,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: 'var(--k2-eyebrow)', display: 'block', marginBottom: 10,
                }}>
                  Press · {article.outlet}
                </span>
                <h3 style={{
                  fontSize: 15, fontWeight: 500, lineHeight: 1.35,
                  letterSpacing: '-0.01em', color: 'var(--k2-ink)',
                  margin: '0 0 auto', flex: 1,
                  display: '-webkit-box', WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical', overflow: 'hidden',
                }}>
                  {article.headline}
                </h3>
                <div style={{
                  marginTop: 16, display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: 'var(--k2-mono)', fontSize: 12,
                  color: 'var(--k2-text-3)', letterSpacing: '0.04em',
                }}>
                  <span>{formatDate(article.publishedAt)}</span>
                  <span style={{ color: 'var(--k2-eyebrow)' }}>↗</span>
                </div>
              </a>
            ))}

            {/* Most recent video */}
            <Link
              href="/newsroom"
              className="k2-blog-card"
              style={{
                background: 'var(--k2-canvas)',
                border: '1px solid var(--k2-border-med)',
                textDecoration: 'none', color: 'inherit',
                display: 'flex', flexDirection: 'column',
              }}
            >
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <ImgSlot tone={recentVideo.thumbnailTone} height={110} />
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 38, height: 38,
                  background: 'rgba(255,255,255,0.9)', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '10px solid #0A1F0E', marginLeft: 2 }} />
                </div>
                <div style={{
                  position: 'absolute', top: 8, left: 8,
                  background: 'rgba(204,34,0,0.9)', color: '#fff',
                  fontFamily: 'var(--k2-mono)', fontSize: 8,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  padding: '2px 5px',
                }}>
                  {recentVideo.source}
                </div>
              </div>
              <div style={{ padding: '14px 18px 16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  fontFamily: 'var(--k2-mono)', fontSize: 9,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: 'var(--k2-eyebrow)', display: 'block', marginBottom: 8,
                }}>Video</span>
                <h3 style={{
                  fontSize: 13, fontWeight: 500, lineHeight: 1.35,
                  letterSpacing: '-0.01em', color: 'var(--k2-ink)',
                  margin: '0 0 auto', flex: 1,
                  display: '-webkit-box', WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical', overflow: 'hidden',
                }}>
                  {recentVideo.title}
                </h3>
                <span style={{
                  fontFamily: 'var(--k2-mono)', fontSize: 12,
                  color: 'var(--k2-text-3)', letterSpacing: '0.04em', marginTop: 10,
                }}>
                  {formatDate(recentVideo.publishedAt)}
                </span>
              </div>
            </Link>

            {/* Most recent blog post */}
            <Link
              href={`/blog/${recentBlog.slug}`}
              className="k2-blog-card"
              style={{
                background: 'var(--k2-canvas)',
                border: '1px solid var(--k2-border-med)',
                textDecoration: 'none', color: 'inherit',
                display: 'flex', flexDirection: 'column',
              }}
            >
              <ImgSlot tone={recentBlog.coverTone} height={110} />
              <div style={{ padding: '14px 18px 16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  fontFamily: 'var(--k2-mono)', fontSize: 9,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: 'var(--k2-eyebrow)', display: 'block', marginBottom: 8,
                }}>
                  Blog · {recentBlog.category}
                </span>
                <h3 style={{
                  fontSize: 13, fontWeight: 500, lineHeight: 1.35,
                  letterSpacing: '-0.01em', color: 'var(--k2-ink)',
                  margin: '0 0 auto', flex: 1,
                  display: '-webkit-box', WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical', overflow: 'hidden',
                }}>
                  {recentBlog.title}
                </h3>
                <span style={{
                  fontFamily: 'var(--k2-mono)', fontSize: 12,
                  color: 'var(--k2-text-3)', letterSpacing: '0.04em', marginTop: 10,
                }}>
                  {formatDate(recentBlog.publishedAt)} · {recentBlog.readingMinutes} min
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========== FINAL CTA =========== */}
      <CTAStrip
        eyebrow="— Get in touch"
        title="Let's talk about"
        italic="your boiler's fuel."
        body="Send us your boiler specs and monthly off-take volume. Sample dispatched in 48 hours, lab report attached. Indicative quote within 24 hours."
        primary="Start a conversation →"
        secondary="Download brochure"
      />
    </>
  );
}
