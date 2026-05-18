import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Instrument_Serif } from 'next/font/google';
import { SITE_URL } from '@/lib/metadata';
import { K2Header } from '@/components/layout/header';
import { K2Footer } from '@/components/layout/footer';
import './globals.css';

/* Helvetica Neue is the prototype's default body font — it's a system font,
   no Google Font needed. Inter is loaded as the self-hosted fallback and
   becomes available when the tweak panel switches to the "inter" font preset. */
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jbm',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

/* Instrument Serif is used for italic Em spans in headlines. */
const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
});

// Fallback metadata — individual pages override title and description.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'K2BioFuels Pvt. Ltd. | Biofuels & Renewable Energy Solutions',
    template: '%s',
  },
  description:
    'Industrial-grade biomass pellets and briquettes from agricultural residue. 252 TPD manufacturing in Rewari, Haryana.',
  openGraph: {
    siteName: 'K2 Biofuels',
    type: 'website',
  },
};

// Organization + LocalBusiness JSON-LD.
// Two nodes: the registered company (Gurgaon corporate office) and the
// manufacturing plant (Rewari) — addresses verbatim from the footer.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'K2 Biofuels Pvt. Ltd.',
      legalName: 'K2 Biofuels Pvt. Ltd.',
      url: SITE_URL,
      description:
        'Industrial-grade biomass pellets and briquettes from agricultural residue. 252 TPD pellet manufacturing in Rewari, Haryana. A subsidiary of K2 Group of Industries.',
      foundingDate: '2021',
      telephone: ['+918875007733', '+917014177300'],
      email: 'info@k2biofuels.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '608-609, 6th Floor, S.S. Omania, Sector 86',
        addressLocality: 'Gurgaon',
        addressRegion: 'Haryana',
        addressCountry: 'IN',
      },
      logo: `${SITE_URL}/logo.png`,
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#plant`,
      name: 'K2 Biofuels — Rewari Manufacturing Plant',
      url: `${SITE_URL}/infrastructure`,
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
      telephone: '+918875007733',
      email: 'info@k2biofuels.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Village Khurshed Nagar, PO–Nahar',
        addressLocality: 'Rewari',
        addressRegion: 'Haryana',
        postalCode: '123303',
        addressCountry: 'IN',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <K2Header />
        {children}
        <K2Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
