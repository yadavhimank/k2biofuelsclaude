'use client';

import Link from 'next/link';
import { K2_ROUTES } from '@/lib/navigation';
import { Eyebrow } from '@/components/ui/eyebrow';
import { K2Logo } from './logo';

export function K2Footer() {
  return (
    <footer className="k2-footer-outer" style={{
      background: 'var(--k2-ink)', color: 'var(--k2-on-ink)',
    }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
          gap: 56, paddingBottom: 48,
          borderBottom: '1px solid rgba(250,250,247,0.1)',
        }} className="k2-footer-grid">

          {/* Brand */}
          <div className="k2-footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <K2Logo size={26} />
              <span style={{ fontWeight: 500, fontSize: 15 }}>K2 Biofuels</span>
            </div>
            <p style={{
              fontSize: 15, lineHeight: 1.7, maxWidth: 320, margin: '0 0 24px',
              color: 'rgba(250,250,247,0.7)',
            }}>
              Industrial-grade biomass fuel from agricultural residue. Pellets and briquettes for thermal plants, sugar mills, paper plants and brick kilns across north India.
            </p>
            <div style={{
              fontFamily: 'var(--k2-mono)', fontSize: 13,
              color: 'rgba(250,250,247,0.55)', letterSpacing: 0.4,
            }}>
              CIN · U35100HR2021PTC094XXX
            </div>
          </div>

          {/* Pages — hover handled by .k2-footer-link CSS class */}
          <div>
            <Eyebrow accent="var(--k2-cta)" style={{ marginBottom: 16 }}>Pages</Eyebrow>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {K2_ROUTES.filter((r) => r.path !== '/').map((r) => (
                <Link key={r.path} href={r.path} className="k2-footer-link" style={{ fontSize: 15 }}>
                  {r.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <Eyebrow accent="var(--k2-cta)" style={{ marginBottom: 16 }}>Products</Eyebrow>
            <div className="k2-footer-col-links" style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15, color: 'rgba(250,250,247,0.7)' }}>
              <Link href="/products#pellets"      style={{ color: 'inherit', textDecoration: 'none' }}>Biomass pellets</Link>
              <Link href="/products#briquettes"   style={{ color: 'inherit', textDecoration: 'none' }}>Biomass briquettes</Link>
              <Link href="/products#applications" style={{ color: 'inherit', textDecoration: 'none' }}>Applications</Link>
              <Link href="/contact"               style={{ color: 'inherit', textDecoration: 'none' }}>Request a sample</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="k2-footer-contact">
            <Eyebrow accent="var(--k2-cta)" style={{ marginBottom: 16 }}>Reach us</Eyebrow>
            <div style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(250,250,247,0.7)' }}>
              <div style={{ marginBottom: 18 }}>
                <div style={{ color: 'var(--k2-on-ink)', marginBottom: 4, fontSize: 13, letterSpacing: 0.6, textTransform: 'uppercase' }}>
                  Corporate
                </div>
                608-609, 6th Floor, S.S. Omania<br />
                Sector 86, Gurgaon, Haryana
              </div>
              <div style={{ marginBottom: 18 }}>
                <div style={{ color: 'var(--k2-on-ink)', marginBottom: 4, fontSize: 13, letterSpacing: 0.6, textTransform: 'uppercase' }}>
                  Plant
                </div>
                Village Khurshed Nagar, PO–Nahar<br />
                District Rewari, Haryana – 123303
              </div>
              <div style={{ fontFamily: 'var(--k2-mono)', fontSize: 13, color: 'rgba(250,250,247,0.85)' }}>
                info@k2biofuels.com<br />
                +91 88750 07733<br />
                +91 70141 77300
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 13, color: 'rgba(250,250,247,0.55)', letterSpacing: 0.4,
          flexWrap: 'wrap', gap: 16,
        }}>
          <span>© 2026 K2 Biofuels Pvt. Ltd. — A subsidiary of K2 Group of Industries</span>
          <span style={{ display: 'flex', gap: 18 }}>
            <Link href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</Link>
            <span>·</span>
            <Link href="/terms"   style={{ color: 'inherit', textDecoration: 'none' }}>Terms</Link>
            <span>·</span>
            <Link href="/sitemap" style={{ color: 'inherit', textDecoration: 'none' }}>Sitemap</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
