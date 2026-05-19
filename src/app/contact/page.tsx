import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/lib/metadata';
import { Eyebrow } from '@/components/ui/eyebrow';
import { ImgSlot } from '@/components/ui/img-slot';
import { ContactForm } from '@/components/ui/contact-form';
import { PageHero } from '@/components/layout/page-hero';

export const metadata: Metadata = PAGE_METADATA.contact;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="— Talk to us"
        title="Send us your boiler."
        italic="We'll send you a sample."
        body="50 kg trial in 48 hours. Indicative quote within 24. Volume-protected contracts from there. Mon-Sat, English & Hindi."
        kicker={['Response within 24 hours', 'Mon–Sat business hours', 'English · Hindi · Punjabi']}
      />

      {/* Split form + sidebar */}
      <section style={{ padding: '80px 32px' }}>
        <div className="k2-grid-split" style={{ maxWidth: 1320, margin: '0 auto', gap: 80, alignItems: 'start' }}>
          <ContactForm />

          {/* Right column — addresses + contact lines */}
          <div>
            <div style={{ marginBottom: 40 }}>
              <Eyebrow style={{ marginBottom: 14 }}>Corporate office</Eyebrow>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--k2-text-2)', margin: 0 }}>
                K2 Biofuels Pvt. Ltd.<br />
                608-609, 6th Floor, S.S. Omania<br />
                Sector 86, Gurgaon<br />
                Haryana — India
              </p>
            </div>

            <div style={{ marginBottom: 40 }}>
              <Eyebrow style={{ marginBottom: 14 }}>Plant address</Eyebrow>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--k2-text-2)', margin: 0 }}>
                Village Khurshed Nagar, PO–Nahar<br />
                District Rewari, Haryana — 123303<br />
                India
              </p>
            </div>

            <div style={{ marginBottom: 40 }}>
              <Eyebrow style={{ marginBottom: 14 }}>Direct lines</Eyebrow>
              <div style={{ fontFamily: 'var(--k2-mono)', fontSize: 14, lineHeight: 2.1, color: 'var(--k2-ink)' }}>
                <div>info@k2biofuels.com</div>
                <div>+91 88750 07733</div>
                <div>+91 70141 77300</div>
              </div>
            </div>

            <div style={{ padding: 24, background: 'var(--k2-stone)', borderLeft: '3px solid var(--k2-cta)' }}>
              <Eyebrow accent="var(--k2-cta)" style={{ marginBottom: 10 }}>Response SLA</Eyebrow>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--k2-text-2)', margin: 0 }}>
                <strong style={{ color: 'var(--k2-ink)' }}>Within 24 hours, Mon–Sat.</strong> For sample requests with full boiler specs, we typically reply same day with an indicative quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder strip */}
      <section style={{ padding: '32px 32px 96px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <Eyebrow style={{ marginBottom: 14 }}>— Find us</Eyebrow>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.1153303610813!2d76.36082057570407!3d28.44593957576716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39129974f52c2419%3A0xec866e577d57c3d3!2sK2%20Biofuels%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1779174242956!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="K2 Biofuels Pvt. Ltd. — Rewari plant location"
          />
        </div>
      </section>
    </>
  );
}
