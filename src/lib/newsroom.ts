// TODO: Replace placeholder url, headline, body fields with real content as available. Structure is final.

export type PressArticle = {
  id: string;
  outlet: string;
  outletLogo?: string;
  headline: string;
  excerpt: string;
  url: string;
  publishedAt: string;
  category: 'Press' | 'Policy' | 'Industry';
  featured?: boolean;
  coverImage?: string;
};

export type NewsVideo = {
  id: string;
  source: 'ANI' | 'DD News' | 'YouTube';
  title: string;
  description: string;
  url: string;
  thumbnailTone: 'plant' | 'field' | 'paddy' | 'olive';
  thumbnailImage?: string;
  publishedAt: string;
  durationSeconds: number;
};

export type OfficialTweet = {
  id: string;
  handle: string;
  displayName: string;
  role: string;
  body: string;
  url: string;
  publishedAt: string;
  likes?: number;
  retweets?: number;
  coverImage?: string;
};

export const PRESS_ARTICLES: PressArticle[] = [
  {
    id: 'pa-etv-1',
    outlet: 'ETV Bharat',
    headline: 'New Bio-Energy Push Turns Stubble Into Profit With Assured Buy-Back For Farmers',
    excerpt: 'Union Minister Pralhad Joshi inaugurated the K2 Group\'s integrated bio-energy cluster in Rewari — four complementary facilities converting agricultural waste into fuel, electricity, and cattle feed, with assured buy-back prices for farmers.',
    url: 'https://www.etvbharat.com/en/state/new-bio-energy-push-turns-stubble-into-profit-with-assured-buy-back-for-farmers-enn25112405326',
    publishedAt: '2025-11-24',
    category: 'Press',
    featured: true,
    coverImage: '/news/etv-bharat-inauguration.jpg',
  },
  {
    id: 'pa-zeebiz-1',
    outlet: 'Zee Business',
    headline: 'Rewari Biomass Pellet Facility to Boost Clean Fuel and Rural Economy: Pralhad Joshi',
    excerpt: 'Union Minister Pralhad Joshi inaugurated K2 Biofuels\' pellet plant in Rewari, Haryana, calling it a milestone for India\'s clean energy transition and a model for converting agricultural residue into rural economic opportunity.',
    url: 'https://www.zeebiz.com/economy-infra/news-rewari-biomass-pellet-facility-to-boost-clean-fuel-and-rural-economy-pralhad-joshi-383926',
    publishedAt: '2025-11-24',
    category: 'Press',
    coverImage: '/news/ani-wire-inauguration.jpg',
  },
  {
    id: 'pa-1',
    outlet: 'Business Standard',
    headline: 'K2 Biofuels completes 252 TPD pellet plant commissioning in Rewari, targets NCR thermal supply chain',
    excerpt: 'The Haryana-based biomass manufacturer has commissioned its full-capacity plant ahead of the upcoming stubble season, positioning itself as a primary supplier to Delhi-NCR thermal plants under the CAQM co-firing directive.',
    url: 'https://www.business-standard.com/placeholder',
    publishedAt: '2026-04-22',
    category: 'Press',
    coverImage: '/news/joshi-pralhad-k2-visit.jpg',
  },
  {
    id: 'pa-2',
    outlet: 'Economic Times',
    headline: 'CAQM tightens co-firing norms: NCR thermal plants to increase biomass blend to 10% by FY2027',
    excerpt: 'The Commission for Air Quality Management has issued an updated direction requiring coal-based thermal power plants in the National Capital Region to progressively increase biomass co-firing to 10% by the end of FY2027.',
    url: 'https://economictimes.indiatimes.com/placeholder',
    publishedAt: '2026-04-10',
    category: 'Policy',
    coverImage: '/news/caqm-thermal-plant.jpg',
  },
  {
    id: 'pa-3',
    outlet: 'PIB',
    headline: 'PM Paddy Straw Mission: Government establishes 200 new pelletisation clusters across Punjab, Haryana and UP',
    excerpt: "Under the Prime Minister's paddy straw utilisation initiative, the Ministry of New and Renewable Energy has identified 200 new pelletisation cluster locations to be commissioned by March 2027.",
    url: 'https://pib.gov.in/placeholder',
    publishedAt: '2026-03-28',
    category: 'Policy',
  },
  {
    id: 'pa-4',
    outlet: 'ANI',
    headline: 'Biomass pellet capacity in north India doubles as thermal sector demand accelerates',
    excerpt: 'Industry data shows a doubling of operational biomass pellet manufacturing capacity in Haryana and Punjab over the last 18 months, driven by mandatory co-firing requirements and a surge in private industrial boiler conversions.',
    url: 'https://www.aninews.in/placeholder',
    publishedAt: '2026-03-14',
    category: 'Industry',
  },
  {
    id: 'pa-5',
    outlet: 'Hindustan Times',
    headline: 'Haryana biomass producers see record orders as CAQM mandate takes hold ahead of kharif season',
    excerpt: 'Biomass fuel producers in Haryana are reporting three to four times the order volume compared to the same period last year, as thermal plants accelerate procurement ahead of the October enforcement deadline.',
    url: 'https://www.hindustantimes.com/placeholder',
    publishedAt: '2026-02-27',
    category: 'Press',
  },
  {
    id: 'pa-6',
    outlet: 'Financial Express',
    headline: "From stubble smoke to industrial fuel: K2 Biofuels' Rewari model gains policy and market traction",
    excerpt: "A ground report from K2 Biofuels' 252 TPD plant in Rewari examines how the company is building a feedstock supply chain across 8,400 acres of farmland while supplying pellets and briquettes to thermal plants, sugar mills and brick kilns.",
    url: 'https://www.financialexpress.com/placeholder',
    publishedAt: '2026-02-10',
    category: 'Press',
  },
];

export const NEWS_VIDEOS: NewsVideo[] = [
  {
    id: 'nv-1',
    source: 'ANI',
    title: 'CAQM mandates paddy-straw biomass co-firing at NCR thermal plants — compliance timeline',
    description: "ANI reports on the Commission for Air Quality Management's updated direction on biomass co-firing, speaking to plant operators and biomass suppliers about implementation timelines and feedstock availability.",
    url: 'https://www.youtube.com/watch?v=placeholder1',
    thumbnailTone: 'field',
    thumbnailImage: '/ANIclip.png',
    publishedAt: '2026-04-15',
    durationSeconds: 214,
  },
  {
    id: 'nv-2',
    source: 'ANI',
    title: 'Environment Ministry: paddy straw mission to reduce crop residue burning by 40% in three years',
    description: "Union Environment Minister briefs press on the government's paddy straw utilisation targets, citing pelletisation capacity expansion and mandatory co-firing as the twin pillars of the strategy.",
    url: 'https://www.youtube.com/watch?v=placeholder2',
    thumbnailTone: 'field',
    publishedAt: '2026-03-20',
    durationSeconds: 178,
  },
  {
    id: 'nv-3',
    source: 'DD News',
    title: "From fields to furnaces: Haryana's biomass fuel story — DD News ground report",
    description: 'DD News visits biomass pellet manufacturing facilities in Rewari district and speaks to farmers, aggregators and plant operators about the economics of stubble collection and the emerging industrial fuel supply chain.',
    url: 'https://ddnews.gov.in/placeholder',
    thumbnailTone: 'paddy',
    thumbnailImage: '/DDnews.png',
    publishedAt: '2026-02-25',
    durationSeconds: 342,
  },
  {
    id: 'nv-4',
    source: 'YouTube',
    title: 'Inside K2 Biofuels | 252 TPD Biomass Pellet Plant Tour | Rewari, Haryana',
    description: "A walkthrough of K2 Biofuels' manufacturing facility in Rewari — covering the feedstock intake weighbridge, rotary drum dryers, pellet mills, quality laboratory, and 5,500 MT covered storage.",
    url: 'https://www.youtube.com/watch?v=placeholder4',
    thumbnailTone: 'plant',
    thumbnailImage: '/k2planttour.png',
    publishedAt: '2026-01-30',
    durationSeconds: 487,
  },
];

export const OFFICIAL_TWEETS: OfficialTweet[] = [
  {
    id: 'ot-joshi-1',
    handle: '@JoshiPralhad',
    displayName: 'Pralhad Joshi',
    role: 'Union Minister · New and Renewable Energy',
    body: 'Visited K2 Group of Industries at Jhajjar, Haryana for the inauguration of a 240 TPD Pellet Plant. The facility will help reduce pollution, support rural livelihood and significantly strengthen India\'s clean energy ecosystem.',
    url: 'https://x.com/joshipralhad/status/1992951621861744799',
    publishedAt: '2025-11-24',
    coverImage: '/news/joshi-pralhad-k2-visit.jpg',
  },
  {
    id: 'ot-ani-1',
    handle: '@ANI',
    displayName: 'ANI',
    role: 'Asian News International',
    body: '#WATCH | Rewari, Haryana | Union Minister of New and Renewable Energy, Pralhad Joshi, inaugurated K2 Biofuels Pellet Plant, laid foundation for K2 Ethanol plant, today.',
    url: 'https://x.com/ani/status/1992911879002640569',
    publishedAt: '2025-11-24',
    coverImage: '/news/ani-inauguration-thumb.jpg',
  },
  {
    id: 'ot-1',
    handle: '@nitin_gadkari',
    displayName: 'Nitin Gadkari',
    role: 'Union Minister · MoRTH & MSME',
    body: 'Biomass pellets from agricultural residue are a win on three counts: clean air for our cities, rural income for farmers who previously burned crop residue, and energy security for industrial India. Working to make biomass a mainstream industrial fuel, not a compliance afterthought. The policy framework is in place. Now we need supply chain scale. #BiomassIndia #GreenEnergy',
    url: 'https://x.com/nitin_gadkari/status/placeholder1',
    publishedAt: '2026-04-18',
    likes: 3240,
    retweets: 1180,
    coverImage: '/news/nitin-gadkari-speech.jpg',
  },
  {
    id: 'ot-2',
    handle: '@byadavbjp',
    displayName: 'Bhupender Yadav',
    role: 'Union Minister · Environment, Forest & Climate Change',
    body: 'The CAQM direction on paddy-straw co-firing carries full legal force. Delhi-NCR thermal plants are required — not encouraged, required — to prioritise paddy-straw biomass pellets. This is not just about air quality. It is about giving farmers in Punjab and Haryana a market alternative to open-field burning. Compliance will be monitored and enforced. #CAQM #PaddyStraw #CleanAir',
    url: 'https://x.com/byadavbjp/status/placeholder2',
    publishedAt: '2026-04-05',
    likes: 1870,
    retweets: 720,
  },
  {
    id: 'ot-3',
    handle: '@MoP_India',
    displayName: 'Ministry of Power',
    role: 'Government of India · Ministry of Power',
    body: "India's thermal power sector is on a defined path toward reduced coal dependency. Biomass co-firing at 5–10% in coal-based plants is one of the near-term pathways. All state DISCOMs have been directed to facilitate biomass fuel procurement and logistics. Target: significant thermal capacity operating on biomass blend by FY2026. #GreenPower #EnergyTransition",
    url: 'https://x.com/MoP_India/status/placeholder3',
    publishedAt: '2026-03-25',
    likes: 920,
    retweets: 380,
  },
  {
    id: 'ot-4',
    handle: '@CPCB_INDIA',
    displayName: 'CPCB India',
    role: 'Central Pollution Control Board',
    body: 'Crop residue burning accounts for a significant fraction of the PM2.5 load in north India each October–November. Paddy straw pelletisation and industrial co-firing is the most scalable near-term intervention. CPCB supports the CAQM direction and is coordinating with state Pollution Control Boards on enforcement and monitoring. #AirQuality #StubbleBurning',
    url: 'https://x.com/CPCB_INDIA/status/placeholder4',
    publishedAt: '2026-03-12',
    likes: 640,
    retweets: 290,
  },
  {
    id: 'ot-5',
    handle: '@CAQM_Official',
    displayName: 'CAQM',
    role: 'Commission for Air Quality Management · NCR',
    body: 'CAQM Direction: All coal-based thermal power plants in NCR and the adjoining states of Punjab, Haryana, Rajasthan and Uttar Pradesh must co-fire paddy-straw based biomass pellets in proportions specified by plant category. Plants failing to meet co-firing targets will face action under the CAQM Act. Detailed compliance schedule available on the CAQM portal.',
    url: 'https://x.com/CAQM_Official/status/placeholder5',
    publishedAt: '2026-03-01',
    likes: 480,
    retweets: 340,
  },
  {
    id: 'ot-6',
    handle: '@PIB_India',
    displayName: 'PIB India',
    role: 'Press Information Bureau · Government of India',
    body: "PM Paddy Straw Mission update: Government has allocated dedicated funds for paddy straw collection and pelletisation infrastructure across Punjab, Haryana and UP. New pelletisation clusters to be established through MNRE and state nodal agencies. The mission targets zero open-field burning of crop residue in the target states by 2027. #PaddyStrawMission #CleanIndia",
    url: 'https://x.com/PIB_India/status/placeholder6',
    publishedAt: '2026-02-18',
    likes: 1240,
    retweets: 560,
  },
  {
    id: 'ot-7',
    handle: '@MNRE_India',
    displayName: 'MNRE India',
    role: 'Ministry of New and Renewable Energy',
    body: "India's biomass energy potential: 25 GW identified across agricultural, forest and agro-industrial residue streams. Biomass pelletisation under the MNRE framework creates distributed rural energy infrastructure while addressing agricultural waste at source. All MNRE-registered biomass manufacturing units eligible for applicable production incentives and certification support. #RenewableIndia",
    url: 'https://x.com/MNRE_India/status/placeholder7',
    publishedAt: '2026-02-05',
    likes: 780,
    retweets: 310,
  },
  {
    id: 'ot-8',
    handle: '@cmohry',
    displayName: 'Office of CM Haryana',
    role: "Chief Minister's Office · Haryana",
    body: "Haryana is leading India's response to stubble burning. Our state has committed to zero open-field crop residue burning targets, backed by pelletisation capacity support, aggregator incentives, and direct farmer outreach. Over 100 biomass pelletisation units operational in Haryana today. We are doubling this capacity. Rewari district is emerging as a key biomass manufacturing hub. #HaryanaGreenFuture",
    url: 'https://x.com/cmohry/status/placeholder8',
    publishedAt: '2026-01-22',
    likes: 560,
    retweets: 220,
  },
];
