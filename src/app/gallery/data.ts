// Gallery data — add new items here and drop the image into /public/gallery/.
// Categories: plant | inauguration | products | sustainability | media | culture

export type GalleryCategory =
  | 'plant'
  | 'inauguration'
  | 'products'
  | 'sustainability'
  | 'media'
  | 'culture';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  subcaption?: string;
  category: GalleryCategory;
  span?: 'wide'; // spans 2 columns on desktop/tablet
}

export const GALLERY_CATEGORIES: { id: string; label: string }[] = [
  { id: 'all',            label: 'All' },
  { id: 'plant',          label: 'Plant & Infrastructure' },
  { id: 'inauguration',   label: 'Inauguration' },
  { id: 'products',       label: 'Products' },
  { id: 'sustainability', label: 'Sustainability' },
  { id: 'media',          label: 'Media Coverage' },
  { id: 'culture',        label: 'Cultural Activities' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // ── Plant & Infrastructure ────────────────────────────────────────────
  {
    id: 'plant-aerial',
    src: '/Plantaerialoverview.png',
    alt: 'Aerial overview of K2 Biofuels plant at Rewari, Haryana',
    caption: 'Aerial overview · Rewari plant',
    subcaption: 'Haryana, 2025',
    category: 'plant',
    span: 'wide',
  },
  {
    id: 'plant-mill-a',
    src: '/MillAPaddyline.png',
    alt: 'Mill A — paddy straw processing line',
    caption: 'Mill A — Paddy straw line',
    subcaption: 'Processing capacity: 3,000 MT / month',
    category: 'plant',
  },
  {
    id: 'plant-mill-b',
    src: '/MillBMustardline.png',
    alt: 'Mill B — mustard straw processing line',
    caption: 'Mill B — Mustard straw line',
    category: 'plant',
  },
  {
    id: 'plant-mill-c',
    src: '/MillCMixedline.png',
    alt: 'Mill C — mixed biomass processing line',
    caption: 'Mill C — Mixed biomass line',
    category: 'plant',
  },
  {
    id: 'plant-lab',
    src: '/Qualitylab.png',
    alt: 'Quality control laboratory at K2 Biofuels',
    caption: 'Quality control laboratory',
    subcaption: 'Lab-tested on every dispatch',
    category: 'plant',
  },
  {
    id: 'plant-infra',
    src: '/infrastructure.png',
    alt: 'Plant infrastructure — storage and dispatch area',
    caption: 'Plant infrastructure',
    category: 'plant',
  },
  {
    id: 'plant-tour',
    src: '/k2planttour.png',
    alt: 'Plant tour at K2 Biofuels Rewari facility',
    caption: 'Plant tour · Rewari',
    category: 'plant',
  },

  // ── Inauguration ──────────────────────────────────────────────────────
  {
    id: 'inaug-gadkari',
    src: '/news/nitin-gadkari-speech.jpg',
    alt: 'Union Minister Nitin Gadkari speaking at K2 Biofuels inauguration',
    caption: 'Union Minister Nitin Gadkari',
    subcaption: 'Inauguration address · 2024',
    category: 'inauguration',
    span: 'wide',
  },
  {
    id: 'inaug-etv',
    src: '/news/etv-bharat-inauguration.jpg',
    alt: 'ETV Bharat coverage — K2 Biofuels plant inauguration',
    caption: 'ETV Bharat · Plant inauguration',
    category: 'inauguration',
  },
  {
    id: 'inaug-ani',
    src: '/news/ani-inauguration-thumb.jpg',
    alt: 'ANI coverage — K2 Biofuels inauguration ceremony',
    caption: 'ANI · Inauguration ceremony',
    category: 'inauguration',
  },
  {
    id: 'inaug-ani-wire',
    src: '/news/ani-wire-inauguration.jpg',
    alt: 'ANI Wire — inauguration coverage',
    caption: 'ANI Wire · Inauguration',
    category: 'inauguration',
  },
  {
    id: 'inaug-joshi',
    src: '/news/joshi-pralhad-k2-visit.jpg',
    alt: "Minister Pralhad Joshi's visit to K2 Biofuels",
    caption: 'Minister Pralhad Joshi visits K2 Biofuels',
    subcaption: '2024',
    category: 'inauguration',
  },

  // ── Products ──────────────────────────────────────────────────────────
  {
    id: 'prod-pellet-hero',
    src: '/productpellet1.png',
    alt: 'Biomass pellets — 6–8 mm diameter',
    caption: 'Biomass pellets · 6–8 mm',
    subcaption: 'GCV 3,400–3,850 kcal/kg',
    category: 'products',
    span: 'wide',
  },
  {
    id: 'prod-pellets',
    src: '/pelletsimage.png',
    alt: 'Biomass pellets in production at K2 Biofuels',
    caption: 'Pellets in production',
    category: 'products',
  },
  {
    id: 'prod-briq-hero',
    src: '/Briquetteheroproduct02.png',
    alt: 'Biomass briquettes — 90 mm diameter',
    caption: 'Biomass briquettes · 90 mm',
    subcaption: 'GCV 3,200–3,600 kcal/kg',
    category: 'products',
  },
  {
    id: 'prod-briquettes',
    src: '/briquettes.png',
    alt: 'Briquettes ready for dispatch',
    caption: 'Briquettes · Ready for dispatch',
    category: 'products',
  },

  // ── Sustainability ────────────────────────────────────────────────────
  {
    id: 'sustain-field',
    src: '/Unburntpaddyfield.png',
    alt: 'Unburnt paddy field in Haryana — crop residue collected by K2 Biofuels',
    caption: 'Unburnt paddy field · Haryana',
    subcaption: 'Residue diverted from open burning',
    category: 'sustainability',
    span: 'wide',
  },
  {
    id: 'sustain-chain',
    src: '/feedstockchain.png',
    alt: 'Feedstock supply chain — agro residue collection',
    caption: 'Feedstock supply chain',
    subcaption: 'From field to factory',
    category: 'sustainability',
  },

  // ── Media Coverage ────────────────────────────────────────────────────
  {
    id: 'media-caqm',
    src: '/news/caqm-thermal-plant.jpg',
    alt: 'CAQM thermal plant briefing — biomass co-firing mandate',
    caption: 'CAQM · Thermal plant briefing',
    subcaption: 'NCR biomass co-firing mandate',
    category: 'media',
    span: 'wide',
  },
  {
    id: 'media-ani',
    src: '/ANIclip.png',
    alt: 'ANI news coverage of K2 Biofuels',
    caption: 'ANI · News coverage',
    category: 'media',
  },
  {
    id: 'media-dd',
    src: '/DDnews.png',
    alt: 'DD News broadcast — K2 Biofuels',
    caption: 'DD News · Broadcast',
    category: 'media',
  },

  // ── Cultural Activities ───────────────────────────────────────────────
  // Drop new images in /public/gallery/ and add entries below.
  // Example:
  // {
  //   id: 'culture-diwali-2024',
  //   src: '/gallery/diwali-2024.jpg',
  //   alt: 'Diwali celebration at K2 Biofuels, 2024',
  //   caption: 'Diwali 2024 · Rewari plant',
  //   subcaption: 'Celebrated with the full team',
  //   category: 'culture',
  // },
];
