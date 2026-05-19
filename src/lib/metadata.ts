import type { Metadata } from 'next';

export const SITE_URL = 'https://www.k2biofuels.com';

// Titles verbatim from the project's constants.ts source-of-truth.
// Descriptions written from prototype content; OG image paths are placeholders.
function page(
  path: string,
  title: string,
  description: string,
): Metadata {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'K2 Biofuels',
      images: [{ url: `${SITE_URL}/og${path === '/' ? '/home' : path}.png`, width: 1200, height: 630 }],
      type: 'website',
    },
  };
}

export const PAGE_METADATA = {
  home: page(
    '/',
    'K2BioFuels Pvt. Ltd. | Biofuels & Renewable Energy Solutions',
    'Industrial-grade biomass pellets and briquettes from agricultural residue. 252 TPD manufacturing in Rewari, Haryana. Supplied to thermal plants, sugar mills, paper plants and brick kilns across north India.',
  ),
  about: page(
    '/about',
    'About K2BioFuels Pvt. Ltd. | Renewable Energy Innovators',
    'K2 Biofuels was founded to turn agricultural waste into industrial fuel. Learn about our Rewari plant, leadership team, and our mission to end stubble burning across north India.',
  ),
  products: page(
    '/products',
    'Biofuel & Biomass Products | K2BioFuels Pvt. Ltd.',
    'Premium biomass pellets (8–25 mm, GCV up to 4,000 kcal/kg) and briquettes (90 mm, GCV 3,900 kcal/kg) from agricultural residue. Lab-tested on every dispatch.',
  ),
  sustainability: page(
    '/sustainability',
    'Sustainability & Carbon Neutral Energy | K2BioFuels Pvt. Ltd.',
    'Every tonne we pelletise is one tonne of paddy straw not burnt in the open. CAQM-aligned, MNRE-registered, and eligible for VCS and Gold Standard carbon credits.',
  ),
  infrastructure: page(
    '/infrastructure',
    'Biofuel Manufacturing Infrastructure | K2BioFuels Pvt. Ltd.',
    '252 TPD pellet manufacturing facility in Rewari, Haryana. Modern pellet mills, in-line drying, automated bagging, on-site quality lab and 5,500 MT covered storage.',
  ),
  clients: page(
    '/clients',
    'Our Clients | Trusted Biofuel Supplier',
    'K2 Biofuels supplies biomass pellets and briquettes to thermal power plants, sugar mills, paper & pulp plants, captive cogen units, brick kilns and distilleries across north India.',
  ),
  careers: page(
    '/careers',
    'Careers at K2BioFuels Pvt. Ltd.',
    'Join K2 Biofuels and help build India\'s biomass fuel supply chain. Open roles across manufacturing, supply chain, quality and operations at our Rewari plant and Gurgaon office.',
  ),
  contact: page(
    '/contact',
    'Contact K2BioFuels Pvt. Ltd. | Biofuel Supplier India',
    'Get in touch for quotes, samples or partnership inquiries. Corporate: Sector 86, Gurgaon. Plant: Rewari, Haryana – 123303. Call +91 88750 07733 or email info@k2biofuels.com.',
  ),
  faq: page(
    '/faq',
    'Frequently Asked Questions | K2BioFuels Pvt. Ltd.',
    'Answers to common questions about K2 Biofuels biomass pellets and briquettes — GCV specs, lead times, CAQM compliance, custom blends and quality assurance.',
  ),
  blog: page(
    '/blog',
    'Blog | K2BioFuels Pvt. Ltd.',
    'Insights on biomass energy, agricultural residue management, CAQM regulations, and the economics of switching from coal to biomass fuel in industrial applications.',
  ),
  newsroom: page(
    '/newsroom',
    'Newsroom | K2BioFuels Pvt. Ltd.',
    'Latest news, press releases and media coverage for K2 Biofuels Pvt. Ltd. — India\'s biomass pellet and briquette manufacturer based in Rewari, Haryana.',
  ),
  privacy: page(
    '/privacy',
    'Privacy Policy | K2BioFuels Pvt. Ltd.',
    'Privacy policy for K2 Biofuels Pvt. Ltd. — how we collect, use and protect your information.',
  ),
  terms: page(
    '/terms',
    'Terms of Service | K2BioFuels Pvt. Ltd.',
    'Terms of service governing your use of the K2 Biofuels website and services.',
  ),
} as const satisfies Record<string, Metadata>;
