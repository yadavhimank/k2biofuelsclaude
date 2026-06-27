export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Sustainability' | 'Industry' | 'Policy' | 'Operations' | 'Company';
  publishedAt: string;
  author: { name: string; role: string };
  readingMinutes: number;
  coverTone: 'paddy' | 'mustard' | 'rice' | 'plant' | 'field' | 'sky';
  coverImage?: string;
  body: Array<
    | { type: 'p'; text: string }
    | { type: 'h2'; text: string }
    | { type: 'quote'; text: string; cite?: string }
    | { type: 'list'; items: string[] }
  >;
};

export type BlogPostCard = Omit<BlogPost, 'body'>;

export const BLOG_POSTS: BlogPost[] = [
  // ── 1 ────────────────────────────────────────────────────────────────────
  {
    slug: 'what-caqm-paddy-straw-mission-mandates',
    title: 'What the CAQM paddy-straw mission actually mandates',
    excerpt:
      'The CAQM paddy-straw direction is not a suggestion — it creates hard co-firing obligations for Delhi-NCR thermal plants. Here is what the mandate requires, what it does not require, and where K2 Biofuels sits in the supply chain it created.',
    category: 'Policy',
    publishedAt: '2026-04-28',
    author: { name: 'Priya Mehta', role: 'Head of Policy & Compliance' },
    readingMinutes: 7,
    coverTone: 'sky',
    coverImage: '/blogpostpolicy.png',
    body: [
      {
        type: 'p',
        text: 'The Commission for Air Quality Management issued a direction in 2021 requiring coal-based thermal power plants in Delhi-NCR to co-fire a specified percentage of paddy-straw based biomass pellets. The framing matters: it is a direction, not a guideline. Plants that do not comply face regulatory consequences from CAQM, which holds statutory authority over air quality management in the region.',
      },
      { type: 'h2', text: 'The mandate in plain language' },
      {
        type: 'p',
        text: 'The direction covers all coal-based thermal power plants in the NCR and the adjoining states of Punjab, Haryana, Rajasthan, and Uttar Pradesh. It requires co-firing using biomass pellets manufactured from paddy straw — not any biomass, specifically paddy straw — in proportions that CAQM specifies by plant category and boiler type. The percentage targets have stepped up over successive compliance cycles.',
      },
      {
        type: 'p',
        text: 'What the mandate does not require is a complete switch to biomass. Co-firing at 5–10% biomass blend is the operational range most plants are working within, and CAQM\'s direction acknowledges that FBC and CFBC boilers have different operational constraints than older drum boilers. The blend ratio applicable to a given plant depends on its boiler type, furnace design, and installed material handling capacity.',
      },
      { type: 'h2', text: 'Why paddy straw specifically' },
      {
        type: 'p',
        text: 'The crop residue burning problem in NCR is predominantly a paddy straw problem. Post-harvest, paddy straw left in the field after combine harvesting is difficult to manage — too bulky to transport economically in raw form, too wet to burn efficiently indoors, and too short-fibred to make good animal feed. Open-field burning is the default disposal method, and it accounts for a substantial fraction of the PM2.5 load that blankets the NCR in October and November.',
      },
      {
        type: 'p',
        text: 'By specifying paddy straw as the feedstock, CAQM creates a demand signal at the exact point in the supply chain where the burning problem is worst. Plants cannot satisfy the mandate by co-firing wood chips or agricultural waste of other types — the feedstock specification is deliberate and enforced.',
      },
      { type: 'h2', text: 'The supply chain problem the mandate created' },
      {
        type: 'p',
        text: 'Paddy straw is seasonal, bulky, and geographically concentrated. Harvesting is in October–November; the rest of the year the supply comes from storage. To supply a thermal plant at 5% blend year-round requires a densification facility — a pellet mill — that can process the raw straw and hold finished stock. Raw paddy straw has a bulk density of roughly 40–60 kg/m³. Pelletised, it reaches 600–700 kg/m³. The economics of transport only work with the pelletised form.',
      },
      {
        type: 'quote',
        text: 'The mandate creates a floor for demand. Our job is to be positioned well above that floor — not to chase compliance at the margin.',
        cite: 'Priya Mehta, Head of Policy & Compliance',
      },
      { type: 'h2', text: 'Where K2 Biofuels sits' },
      {
        type: 'p',
        text: 'Our Rewari, Haryana plant is 70 km from the Delhi-NCR boundary, placing us inside the CAQM priority zone for feedstock sourcing. We are MNRE-registered and produce paddy-straw based pellets that meet the feedstock specification. The proximity to both the paddy straw source areas of Haryana and Punjab and the thermal plants of the NCR is a structural advantage — not a coincidence of location, but a deliberate choice made at the time of site selection.',
      },
      { type: 'h2', text: 'What to watch in the next compliance cycle' },
      {
        type: 'p',
        text: 'CAQM has indicated that co-firing percentages will continue to increase. Plants currently at 5% are expected to scale toward 10% and, for newer installations, higher. The enforcement mechanism has also strengthened — CAQM now has direct authority to issue directions to Central and State Government entities, and the liability for non-compliance rests with plant operators, not just the fuel suppliers. For procurement teams at thermal plants, this means the mandate is not a checkbox to satisfy once — it is an ongoing operational requirement that will tighten.',
      },
      {
        type: 'p',
        text: 'For K2 Biofuels, the trajectory is clear. Our 252 TPD installed capacity is sized to supply the near-term demand from plants in our radius. As the mandate tightens, we are positioned to scale feedstock aggregation and pellet output in proportion. The policy risk for us is low; the policy risk for plants that have not yet established supply chain relationships is higher than many procurement managers currently price.',
      },
    ],
  },

  // ── 2 ────────────────────────────────────────────────────────────────────
  {
    slug: 'mustard-husk-burns-cleaner-than-coal-afbc',
    title: 'Why mustard husk burns cleaner than coal in your AFBC boiler',
    excerpt:
      'The combustion chemistry of mustard husk makes it one of the most effective biomass fuels for AFBC applications — lower sulphur, manageable ash, and a calorific value that closes the gap with coal.',
    category: 'Industry',
    publishedAt: '2026-04-14',
    author: { name: 'Vikram Anand', role: 'Head of Product & Quality' },
    readingMinutes: 6,
    coverTone: 'mustard',
    coverImage: '/blogpostindustry.png',
    body: [
      {
        type: 'p',
        text: 'When we talk about GCV, we are talking about the amount of heat released per kilogram of fuel burned under controlled conditions in a bomb calorimeter. Our mustard-blend pellets deliver approximately 3,800–3,900 kcal/kg. For context, imported thermal coal for power generation typically runs 4,200–5,000 kcal/kg, and domestic coal used in smaller industrial boilers is often in the 3,500–4,200 range. The gap in raw GCV is real, but it is not the whole story.',
      },
      { type: 'h2', text: 'What AFBC boilers actually care about' },
      {
        type: 'p',
        text: 'Atmospheric Fluidised Bed Combustion boilers are different from older stoker-fed or pulverised coal boilers. In an AFBC, the fuel is combusted in a bed of inert material — typically sand or ash — kept in suspension by an upward airflow. The combustion temperature is deliberately kept below 900°C, which suppresses thermal NOx formation. This design also makes AFBC boilers significantly more tolerant of fuel variability in terms of moisture and particle size than their predecessors.',
      },
      {
        type: 'p',
        text: 'For biomass, the AFBC\'s lower temperature window is an advantage. Biomass has a lower ash fusion temperature than coal — at high temperatures, biomass ash can slag and foul the bed. AFBC\'s lower operating temperature keeps ash in a friable, non-agglomerating state. This is one of the reasons AFBC was identified early as the preferred boiler type for biomass co-firing in the CAQM framework.',
      },
      { type: 'h2', text: 'The sulphur argument' },
      {
        type: 'p',
        text: 'Mustard husk contains approximately 0.1–0.3% sulphur by dry weight. Indian thermal coal ranges from 0.3% to upward of 0.5%, with some grades running higher. The SOx reduction from co-firing at 10% biomass blend is proportional — roughly 10% reduction in sulphur dioxide emissions at stack, all else equal. For plants near or at their environmental consent limits for SOx, this margin matters operationally and not just for reporting.',
      },
      {
        type: 'quote',
        text: 'Every percentage point of biomass co-firing is a percentage point of sulphur load reduction. At scale, that becomes a meaningful buffer against stack compliance risk.',
        cite: 'Vikram Anand, Head of Product & Quality',
      },
      { type: 'h2', text: 'Ash handling in practice' },
      {
        type: 'p',
        text: 'Mustard husk ash is high in potassium and silica, with a typical ash content of 4–6% depending on the feedstock quality. This is lower than most Indian thermal coals, which run 25–40% ash. For an industrial boiler operator, lower ash means less ash handling per tonne of fuel, lower wear on conveyors and handling systems, and a smaller ash disposal or off-take logistics problem. The potassium-rich biomass ash has known applications as a soil amendment, giving it a secondary value that coal ash typically does not carry.',
      },
      { type: 'h2', text: 'Practical considerations for blend ratio' },
      {
        type: 'p',
        text: 'The optimal blend ratio for your specific boiler depends on: bed temperature targets, the chlorine content of the biomass (mustard husk is low-chlorine compared to rice husk, which reduces corrosion risk), moisture in the incoming fuel, and your existing ash removal system capacity. We typically recommend starting at 5% biomass blend and running three dispatch cycles of data before committing to 10%. The lab report on each load gives you the GCV and moisture you need to model the blend precisely.',
      },
      {
        type: 'list',
        items: [
          'Pellet GCV: 3,800–3,900 kcal/kg (mustard blend)',
          'Ash content: 4–6% (vs. 25–40% for typical Indian coal)',
          'Sulphur: 0.1–0.3% (significantly below coal)',
          'Chlorine: low — reduces fireside corrosion risk versus rice husk blends',
          'Moisture: ≤14% on dispatch',
        ],
      },
      {
        type: 'p',
        text: 'Send us your boiler model and current fuel specifications and we will model the blend economics for your specific plant. The heat-rate calculation tells you whether the lower GCV is offset by lower fuel cost, lower ash handling cost, and any compliance headroom value you assign to sulphur reduction. In most cases the economics close before you factor in compliance benefits.',
      },
    ],
  },

  // ── 3 ────────────────────────────────────────────────────────────────────
  {
    slug: 'inside-the-lab-gcv-measurement',
    title: 'Inside the lab: how we measure GCV on every batch',
    excerpt:
      'Our on-site bomb calorimeter runs a test on every batch before dispatch. Here is what the test measures, why we do it in-house rather than outsourcing, and what the numbers on your lab report actually mean.',
    category: 'Operations',
    publishedAt: '2026-03-31',
    author: { name: 'Ritu Sharma', role: 'Quality Lab Manager' },
    readingMinutes: 5,
    coverTone: 'plant',
    coverImage: '/blogpostoperations.png',
    body: [
      {
        type: 'p',
        text: 'A bomb calorimeter measures calorific value by burning a precisely weighed fuel sample inside a sealed oxygen-pressurised vessel submerged in a known mass of water. The heat released by combustion raises the water temperature, and from the temperature rise — corrected for the heat capacity of the vessel — you calculate the gross calorific value in kcal/kg or MJ/kg. The instrument we use at the Rewari quality lab runs this cycle in approximately 12–15 minutes per sample.',
      },
      { type: 'h2', text: 'Why in-house testing' },
      {
        type: 'p',
        text: 'Third-party laboratory testing takes 48–72 hours for a result and costs per-test. For a plant running at 252 TPD, with batches going out daily, outsourcing would mean dispatching product without a current GCV measurement, or holding stock for three days waiting for a result. Neither is operationally or commercially acceptable. The capital cost of an in-house instrument is recovered inside the first year on test frequency alone.',
      },
      {
        type: 'p',
        text: 'There is a quality control argument that is equally important. An in-house lab means the sample is handled by our team from sampling to result — no transit time during which the sample could pick up moisture, no chain-of-custody questions, and no wait for a queue at an external facility. When a result looks anomalous, we can re-test the same day.',
      },
      { type: 'h2', text: 'What the test actually measures' },
      {
        type: 'p',
        text: 'The bomb calorimeter gives you gross calorific value at constant volume (GCV or higher heating value). This is the number quoted on our lab report. It measures the total heat released including the latent heat of water vapour condensation. Net calorific value (NCV, or lower heating value) is lower by the heat of vaporisation of moisture in the fuel — for pellets at ≤14% moisture, the difference is typically 200–400 kcal/kg. When comparing to coal specifications, confirm which basis the coal is quoted on; industrial coal contracts in India are usually specified on a net calorific value basis.',
      },
      {
        type: 'quote',
        text: 'The number on the lab report is not a promise — it is a measurement of the actual batch you are receiving. If the batch underperforms, we can trace it to the sample and the instrument run.',
        cite: 'Ritu Sharma, Quality Lab Manager',
      },
      { type: 'h2', text: 'Other parameters on the report' },
      {
        type: 'list',
        items: [
          'Moisture (%): Measured by oven-drying at 105°C to constant mass. Our specification is ≤14%.',
          'Ash content (%): Measured by burning the sample at 550°C in a muffle furnace. Residual mass as percentage of original.',
          'Fines (%): Sieve test. Fraction passing 3.15 mm expressed as percentage of total mass. Our specification is ≤5% for pellets.',
          'Proximate analysis: Breakdown into moisture, volatile matter, fixed carbon, and ash — useful for boiler operators modelling combustion profiles.',
        ],
      },
      { type: 'h2', text: 'Retained samples' },
      {
        type: 'p',
        text: 'Every batch sampled for GCV testing has a sealed reference sample retained in our lab for 90 days post-dispatch. Sample ID and retention date are printed on the dispatch documentation. This means that if you receive a batch and your in-house test produces a significantly different result, we can run a comparative test using the retained sample from the same batch. In our experience, significant discrepancies almost always trace to sampling methodology differences rather than actual product variation — but the retained sample gives us a basis for resolution that does not depend on memory or documentation alone.',
      },
      {
        type: 'p',
        text: 'We also run intake testing on incoming feedstock — raw mustard stalk, paddy straw, or rice husk — measuring moisture and checking for contamination before the material enters the mill. This intake data is not on the customer dispatch report, but it is available on request and forms part of the traceability documentation for customers working on carbon credit applications.',
      },
    ],
  },

  // ── 4 ────────────────────────────────────────────────────────────────────
  {
    slug: 'supply-chain-8400-acres-feedstock-sourcing',
    title: 'The 8,400-acre supply chain: how K2 sources feedstock',
    excerpt:
      'K2 Biofuels aggregates biomass from an area covering roughly 8,400 acres across three states. This is how we source, test, and trace every tonne of feedstock before it enters the mill.',
    category: 'Sustainability',
    publishedAt: '2026-03-17',
    author: { name: 'Suresh Yadav', role: 'Head of Supply Chain' },
    readingMinutes: 8,
    coverTone: 'field',
    coverImage: '/blogpostSustainability.png',
    body: [
      {
        type: 'p',
        text: 'At 252 TPD pellet output with an efficiency ratio of approximately 1.4:1 (feedstock to pellet), we process roughly 350 tonnes of raw biomass on a full production day. Spread over a year and accounting for seasonal variability, this requires a feedstock catchment of substantial scale. Our current aggregator panel covers farms across Haryana, Punjab, and western Uttar Pradesh — an area we estimate at approximately 8,400 acres of cultivated land in our active sourcing radius.',
      },
      { type: 'h2', text: 'Why aggregators, not direct farm procurement' },
      {
        type: 'p',
        text: 'Direct procurement from individual farms is operationally feasible at small scale but breaks down above a few thousand tonnes per month. The logistics of coordinating hundreds of small landholders — each with different harvest timings, different varieties, different distances from our plant — require a layer of local knowledge and relationship management that is better handled by regional aggregators than by a central procurement team.',
      },
      {
        type: 'p',
        text: 'Our aggregator panel consists of individuals and small firms who have existing relationships with farming communities in their districts. They coordinate collection, run initial moisture checks in the field, arrange local transport to our intake point, and take commercial responsibility for feedstock quality at the gate. We audit their practices, not just their product. An aggregator who delivers low-moisture, uncontaminated feedstock consistently gets contract renewal and volume growth. One who does not gets replaced.',
      },
      { type: 'h2', text: 'What we test at intake' },
      {
        type: 'list',
        items: [
          'Moisture: Every load is moisture-checked at the intake weighbridge before unloading. Loads above our threshold are rejected or renegotiated.',
          'Visual contamination: Stones, soil, excessive dirt, or non-biomass material trigger a rejection or partial discount depending on severity.',
          'Feedstock identity: We verify that paddy straw loads are actually paddy straw, not mixed with lower-value materials. Misrepresentation of feedstock breaks the CAQM traceability requirement.',
          'Weight: Certified weighbridge measurement at intake forms the basis of the supplier payment.',
        ],
      },
      { type: 'h2', text: 'The seasonality problem' },
      {
        type: 'p',
        text: 'Paddy straw availability peaks in October–November following the kharif harvest. Mustard is a rabi crop with availability in March–April. Rice husk, as a byproduct of rice milling rather than field harvesting, is more continuous but geographically concentrated near milling clusters. Holding supply constant through the year requires either storing raw feedstock (high volume, moisture risk), blending across feedstock types as season dictates, or holding finished pellet inventory between seasons.',
      },
      {
        type: 'p',
        text: 'We use all three strategies, weighted by economics. Raw feedstock storage is kept to a minimum — moisture ingress during storage degrades quality and creates fire risk in large quantities. Our 5,500 MT covered storage at the Rewari plant holds finished pellets rather than raw material wherever possible. The blend composition shifts by season: paddy-heavy in November–January, mustard-heavy in April–May, rice husk through the lean months. The GCV is managed across the blend to stay within our specified output range.',
      },
      { type: 'h2', text: 'Traceability from farm to dispatch' },
      {
        type: 'p',
        text: 'Each intake load is logged against the aggregator, the district of origin, and the estimated land parcel. GPS coordinates of the collection point are recorded for loads that come with field collection documentation. This data links through our batch production records to the finished pellet dispatch. The result is a traceable chain: from a given dispatch lot, we can identify which aggregators supplied the feedstock and the approximate farm origin area.',
      },
      {
        type: 'quote',
        text: 'Traceability is not just a compliance requirement for us — it is how we catch quality problems early and keep the aggregator panel honest. If a batch performs poorly, we can trace it back to source.',
        cite: 'Suresh Yadav, Head of Supply Chain',
      },
      { type: 'h2', text: 'What this means for customers' },
      {
        type: 'p',
        text: 'For customers working on carbon credit applications under VCS or Gold Standard, feedstock traceability from field to dispatch is a documentation requirement. We can provide origin certificates and supply chain traceability reports on a per-dispatch basis. For customers making ESG claims about supply chain emissions, the traceability chain lets us calculate avoided burning emissions against a specific feedstock and volume. This is not a standard part of the dispatch documentation — it requires a brief commercial discussion to structure the reporting correctly for your application.',
      },
    ],
  },

  // ── 5 ────────────────────────────────────────────────────────────────────
  {
    slug: 'pellet-vs-briquette-which-fits-your-kiln',
    title: 'Pellet vs briquette — which one fits your kiln?',
    excerpt:
      'The choice between pellets and briquettes is not primarily about calorific value — both formats deliver comparable GCV. It is about combustion profile, handling infrastructure, and what your boiler was designed to burn.',
    category: 'Industry',
    publishedAt: '2026-03-03',
    author: { name: 'Vikram Anand', role: 'Head of Product & Quality' },
    readingMinutes: 6,
    coverTone: 'paddy',
    coverImage: '/blogpostindustey1.png',
    body: [
      {
        type: 'p',
        text: 'The most common misconception we encounter in a first conversation with a new customer is that the pellet vs briquette decision is a GCV comparison. It is not. Our mustard-blend pellets deliver approximately 3,900 kcal/kg. Our 90 mm briquettes also deliver 3,200–3,600 kcal/kg. The calorific values are essentially equivalent. The difference lies in what happens when those fuels meet your specific combustion system.',
      },
      { type: 'h2', text: 'What pellets do well' },
      {
        type: 'p',
        text: 'Pellets are a controlled-geometry fuel. At ≤25 mm diameter and ≤35 mm length, they flow predictably through auger feeders, pneumatic conveying systems, and spreader-stoker mechanisms. If your boiler was designed for automated fuel feeding — particularly if you are running an AFBC with a gravimetric feeder or a pellet burner installed for a small industrial boiler — pellets are the format your handling system was engineered around.',
      },
      {
        type: 'p',
        text: 'Pellets also work well in co-firing with coal. At 5–10% blend ratios, the size difference between a pellet and a coal particle is manageable in most existing handling systems without modification. For Delhi-NCR thermal plants complying with the CAQM mandate, pellets are the specified format — the mandate explicitly refers to biomass pellets, not briquettes.',
      },
      { type: 'h2', text: 'What briquettes do well' },
      {
        type: 'p',
        text: 'Briquettes at 90 mm diameter and 100–300 mm length are a high-density fuel designed for manual or semi-mechanised feeding into large-capacity combustion chambers. Their density — typically 1,000–1,100 kg/m³ compared to pellets at 600–700 kg/m³ — means they have a slower burn rate per unit volume. In a brick kiln, a distillery boiler, or an industrial furnace where a sustained, even heat output over a long cycle is the requirement, briquettes outperform pellets precisely because they do not burn through quickly.',
      },
      {
        type: 'quote',
        text: 'A briquette is not a fat pellet. It is a different combustion model — slower, more sustained, better suited to applications where you want four hours of heat, not one.',
        cite: 'Vikram Anand, Head of Product & Quality',
      },
      {
        type: 'p',
        text: 'Moisture at ≤6% (vs. pellets at ≤14%) means briquettes have a higher net calorific value for the same gross GCV — less heat is lost vaporising moisture during combustion. For continuous-load applications like a distillery boiler or a paper mill steam system running 20-hour shifts, this difference accumulates into a meaningful efficiency gain over time.',
      },
      { type: 'h2', text: 'The decision framework' },
      {
        type: 'list',
        items: [
          'AFBC boiler with automated feeding: pellets',
          'CAQM co-firing at a thermal power plant: pellets (mandated format)',
          'Brick kiln with manual firing: briquettes',
          'Distillery or sugar mill cogen (continuous load): briquettes',
          'Food processing or chemical plant (process heat): briquettes',
          'Pellet stove or small commercial boiler: pellets',
          'Mixed use or uncertain application: request samples of both and run trials',
        ],
      },
      { type: 'h2', text: 'When to run trials before committing' },
      {
        type: 'p',
        text: 'If your boiler has run exclusively on coal for more than five years, there is operational value in a supervised trial before committing to a full supply contract. The trial tells you about ash accumulation patterns, feed rate adjustments needed, and any maintenance items that need attention before running a high percentage of biomass. We dispatch 50 kg samples within 48 hours, and our technical team can join a first firing trial at no cost for customers in our road radius.',
      },
      {
        type: 'p',
        text: 'Send us your boiler model, installed fuel handling system, and current monthly fuel consumption. We will give you a format recommendation, an approximate blend ratio to start at, and the landed cost per kcal for your location. The comparison handles itself from there.',
      },
    ],
  },

  // ── 6 ────────────────────────────────────────────────────────────────────
  {
    slug: 'vcs-gold-standard-carbon-credits-math',
    title: 'VCS, Gold Standard, and the math behind carbon credits',
    excerpt:
      'Biomass co-firing generates carbon credits by displacing coal and avoiding open-field burning. Here is how the two major voluntary standards work, how the displacement is calculated, and what customers need to file a co-claim.',
    category: 'Sustainability',
    publishedAt: '2026-02-17',
    author: { name: 'Priya Mehta', role: 'Head of Policy & Compliance' },
    readingMinutes: 7,
    coverTone: 'field',
    coverImage: '/blogpostSustainability1.png',
    body: [
      {
        type: 'p',
        text: 'There are two things happening when a thermal plant burns K2 Biofuels pellets instead of coal. First, the coal that would have been burned is not burned — its embodied carbon stays unburned. Second, the paddy straw that would have been burned in a field is instead burned in a controlled industrial combustion environment at higher efficiency, with the emissions counted and inventoried rather than uncontrolled. Both displacement effects contribute to the carbon credit calculation.',
      },
      { type: 'h2', text: 'VCS versus Gold Standard' },
      {
        type: 'p',
        text: 'Verra\'s Verified Carbon Standard (VCS) is the largest voluntary carbon market standard globally by volume. It provides methodologies for biomass energy projects and is the standard most commonly used in India for industrial biomass applications. Gold Standard, originally developed with WWF involvement, places a higher emphasis on sustainable development co-benefits and requires evidence of community or environmental impact alongside the carbon accounting. For K2 Biofuels supply chain projects, both standards are applicable; the choice between them depends primarily on the buyer\'s preference and target market.',
      },
      { type: 'h2', text: 'The displacement calculation' },
      {
        type: 'p',
        text: 'The core of the carbon credit calculation is an emission factor comparison. Coal combustion emits approximately 2.3–2.5 tonnes of CO₂ per tonne of coal burned (depending on coal grade). Biomass is considered carbon-neutral on a lifecycle basis under both VCS and Gold Standard methodologies — the carbon released during combustion was fixed from the atmosphere during the growing season of the crop that produced the straw. The net credit per tonne of biomass fuel displacing coal is calculated from the coal emission factor multiplied by the energy equivalence ratio.',
      },
      {
        type: 'p',
        text: 'The avoided burning component adds a second term. Paddy straw burned in an open field emits methane (CH₄) and nitrous oxide (N₂O) in addition to CO₂ — both of which carry higher global warming potential than CO₂ alone. When that straw is pelletised and burned in an industrial boiler instead, the methane and N₂O emissions are largely avoided (replaced by the more complete combustion products CO₂ and water). This avoided emission is a credit-generating activity under both VCS and Gold Standard, using IPCC emission factors for crop residue burning.',
      },
      {
        type: 'quote',
        text: 'The math behind carbon credits from biomass is not complicated once you have the emission factors. What is complicated is the documentation — and that is where we can help.',
        cite: 'Priya Mehta, Head of Policy & Compliance',
      },
      { type: 'h2', text: 'What the numbers look like' },
      {
        type: 'p',
        text: 'A rough order-of-magnitude calculation: substituting 1,000 tonnes of biomass pellets for an energy-equivalent amount of coal avoids approximately 800–1,000 tonnes of CO₂-equivalent emissions from coal combustion, plus 200–350 tonnes of CO₂-equivalent from avoided paddy straw field burning. At voluntary carbon market rates in the range of $10–25 per tonne, a 1,000 tonne/month biomass supply could support generation of credits worth $12,000–35,000 per month before certification and verification costs. These are illustrative numbers — your actual credit yield depends on your specific boiler efficiency, the coal grade being displaced, and the verification methodology.',
      },
      { type: 'h2', text: 'What customers need to file a co-claim' },
      {
        type: 'list',
        items: [
          'Feedstock origin documentation — which farms or districts the biomass came from',
          'Quantity and GCV of each dispatch lot, with lab reports',
          'Evidence of combustion (boiler operating records for the relevant period)',
          'Baseline documentation — coal consumption history and coal specifications for the pre-biomass period',
          'Third-party verification — both VCS and Gold Standard require an accredited verifier to sign off on the calculation',
        ],
      },
      {
        type: 'p',
        text: 'We provide the feedstock documentation and dispatch records in a format structured for VCS and Gold Standard applications. We do not provide third-party verification — that must come from an independent accredited body. For customers who are new to carbon credit applications, we recommend engaging a project developer or carbon credit aggregator who can structure the project registration and manage the verification cycle. We can facilitate introductions.',
      },
    ],
  },

  // ── 7 ────────────────────────────────────────────────────────────────────
  {
    slug: 'building-252-tpd-plant-70km-delhi',
    title: 'Building a 252 TPD plant 70km from Delhi: the bet',
    excerpt:
      'In 2021, we committed capital to a greenfield pellet plant in Rewari, Haryana — before the CAQM mandate gained teeth, before carbon credits came to India\'s front pages, and before biomass made the policy agenda.',
    category: 'Company',
    publishedAt: '2026-02-03',
    author: { name: 'Arun Kumar', role: 'Managing Director' },
    readingMinutes: 9,
    coverTone: 'plant',
    coverImage: '/blogpostcompany.png',
    body: [
      {
        type: 'p',
        text: 'The K2 Group of Industries has been operating industrial businesses in Haryana for over two decades. When we looked at the biomass opportunity in 2020, we were not looking at a speculative technology bet. We were looking at an agricultural residue problem — vast quantities of paddy straw being burned in fields within 200 km of our existing operations — and at an emerging regulatory framework that was going to create demand for a solution. We decided to be the solution.',
      },
      { type: 'h2', text: 'Why Rewari' },
      {
        type: 'p',
        text: 'Site selection for a feedstock-dependent manufacturing facility is constrained by two radii: the feedstock catchment radius (how far you can economically transport raw biomass) and the customer dispatch radius (how far you can deliver at competitive landed cost). Rewari sits inside both. It is 70 km from the Delhi-NCR boundary — close enough to be within the CAQM priority zone for paddy straw sourcing and close enough to supply NCR thermal plants economically. It is also within the paddy and mustard growing regions of southern Haryana, giving us access to the primary feedstocks.',
      },
      {
        type: 'p',
        text: 'The district also has reliable three-phase power supply, access to the national highway network for outbound dispatch, and an existing industrial workforce with relevant manufacturing skills. We looked at six sites before choosing Khurshed Nagar. The others had two of the three requirements; Khurshed Nagar had all three.',
      },
      { type: 'h2', text: 'The capital decision' },
      {
        type: 'p',
        text: 'The capital commitment for a 252 TPD greenfield facility is not trivial. Pellet mills at industrial scale, the drying system, storage infrastructure, on-site power supply, weighbridge, and quality laboratory represent a multi-crore investment that takes multiple years to recover. In 2021, the biomass pellet market in India was thin. There were buyers, but there were very few industrial-scale suppliers within the NCR radius. The policy signal was clear in the CAQM direction, but enforcement was still developing.',
      },
      {
        type: 'quote',
        text: 'We were not making a bet on the technology — pelletisation is a proven process. We were making a bet on the policy timeline. We believed enforcement would catch up with the direction within two to three years. It did.',
        cite: 'Arun Kumar, Managing Director',
      },
      { type: 'h2', text: 'What the build involved' },
      {
        type: 'p',
        text: 'The plant is designed around a pellet mill capacity of 252 TPD at target moisture content. The drying system — essential for bringing incoming feedstock from field moisture levels of 20–35% down to the 10–12% required for pelletisation — is the largest capital component. We use a rotary drum dryer system with a heat source that can run on biomass byproducts, reducing our energy input cost relative to gas or grid power-based drying.',
      },
      {
        type: 'p',
        text: 'The quality laboratory was not an afterthought. We specified in-house testing capability from the beginning — bomb calorimeter, muffle furnace for ash testing, oven and moisture balance, and a sieve set for fines analysis. The cost of the lab is recovered in the first year of operations from avoided outsourcing cost and from the commercial value of same-day quality data.',
      },
      { type: 'h2', text: 'The feedstock challenge we underestimated' },
      {
        type: 'p',
        text: 'The hardest part of the first operating year was not the plant — it was the aggregator network. Building a reliable feedstock supply chain from scratch, in a region where biomass aggregation at industrial scale had not previously existed, required more time and relationship-building than we had modelled. The aggregators who are now our most reliable suppliers are people we worked with through a full harvest cycle, calibrated quality expectations with, and established payment terms that work for their cashflow. That process cannot be rushed.',
      },
      {
        type: 'p',
        text: 'We also underestimated the seasonal variability in feedstock moisture. October–November paddy straw arrives from the field at 20–25% moisture when it has been cut and baled quickly, or at 30–35% when it has been rained on between cut and collection. Our drying capacity was designed for the average, not the worst case. We have since added buffer drying capacity to handle high-moisture intake months without reducing output.',
      },
      { type: 'h2', text: 'Where we are now' },
      {
        type: 'p',
        text: 'The plant has been operating for more than three years. We have regular customers across thermal power, sugar, brick manufacturing, and food processing sectors. The policy environment has continued to move in the direction we anticipated. Our view is that the next five years will see significantly more demand than supply for quality biomass fuel in the NCR radius — not because supply will not grow, but because the installed base of industrial combustion equipment that is switching from coal is growing faster. The bet has paid off. The next one is capacity expansion.',
      },
    ],
  },

  // ── 8 ────────────────────────────────────────────────────────────────────
  {
    slug: 'co-firing-trials-ncr-thermal-plants',
    title: 'Co-firing trials at NCR thermal plants — what we learned',
    excerpt:
      'We ran co-firing trials at three different thermal plants in the NCR region with different boiler types and sizes. Here is what the data showed about blend ratios, GCV targeting, and ash handling.',
    category: 'Industry',
    publishedAt: '2026-01-20',
    author: { name: 'Vikram Anand', role: 'Head of Product & Quality' },
    readingMinutes: 6,
    coverTone: 'sky',
    coverImage: '/blogpostindustry2.png',
    body: [
      {
        type: 'p',
        text: 'Co-firing trials are not a marketing exercise — they are the only rigorous way to understand how a specific biomass fuel performs in a specific boiler. The combustion behaviour of biomass in a fluidised bed is different from coal, and the operational adjustments required depend on the boiler design, age, instrumentation, and existing operational practices. Generalisations about co-firing are useful for initial planning; what matters for procurement is how the fuel behaves in your plant.',
      },
      { type: 'h2', text: 'Three plants, three different problems' },
      {
        type: 'p',
        text: 'Plant A was a 100 MW CFBC unit running on a blend of domestic coal and imported low-sulphur coal. Their primary concern before trialling biomass was ash handling — they had invested in a specific fly ash extraction system and were concerned that biomass ash with different aerodynamic properties would bypass the collection equipment. Plant B was a smaller AFBC at 30 MW, recently commissioned, with a programmable fuel feed system that could adjust blend ratio in real time. Plant C was an older stoker-fed boiler at 25 MW — the most constrained case in terms of fuel geometry tolerance.',
      },
      { type: 'h2', text: 'What the data showed at Plant A' },
      {
        type: 'p',
        text: 'At 5% biomass blend, the fly ash collection efficiency at Plant A showed no statistically significant change from the coal-only baseline. At 10%, there was a measurable but operationally acceptable reduction in collection efficiency — approximately 3% — which the plant engineering team attributed to the finer particle size of biomass ash at high combustion temperatures. The finding was that 7–8% is the practical upper limit for this plant without modifications to the ash extraction system. The plant is now running at 7% on a regular basis with no operational issues.',
      },
      {
        type: 'p',
        text: 'The SOx readings at Plant A\'s stack monitoring equipment showed a reduction proportional to the biomass co-firing percentage. This was expected given the sulphur differential between coal and mustard-blend pellets, but having the stack data confirmed the calculation rather than relying on the theoretical estimate.',
      },
      { type: 'h2', text: 'Plant B: the clean case' },
      {
        type: 'p',
        text: 'Plant B was straightforward. The programmable feed system made blend ratio adjustment a software setting rather than a physical change to the fuel handling system. We trialled at 5%, 8%, and 10% over three consecutive weeks, with daily GCV logging on both the coal and biomass inputs. Heat rate stability at 10% blend was within the plant\'s normal operating variance. Plant B is now our reference site for customers asking what the 10% case looks like in practice.',
      },
      {
        type: 'quote',
        text: 'The trial at Plant B was the clearest data we have that a well-designed AFBC can run at 10% biomass blend without operational compromise. The difficulty is not the fuel — it is the handling system.',
        cite: 'Vikram Anand, Head of Product & Quality',
      },
      { type: 'h2', text: 'Plant C: the constraints of an older stoker' },
      {
        type: 'p',
        text: 'Plant C was the hardest case. The stoker feed mechanism has geometric constraints — fuel pieces that are too light or too long cause irregular feeding, which creates combustion instability. At 5% pellet co-firing, the operators reported irregular feeding events that required manual intervention approximately three times per shift. Reducing pellet length to the lower end of our specification (≤25 mm rather than ≤35 mm) reduced the feeding events significantly but did not eliminate them entirely. Our recommendation for Plant C was 3% blend until they upgrade the fuel handling equipment — a recommendation they accepted.',
      },
      { type: 'h2', text: 'What this means for a new customer' },
      {
        type: 'list',
        items: [
          'Boiler age and feed mechanism type are the primary determinants of workable blend ratio',
          'Modern AFBC/CFBC with automated feeding: 10% is typically achievable',
          'Older stoker-fed systems: 3–5% is a safe starting point',
          'Ash handling system capacity should be evaluated before committing to >8% blend',
          'A supervised first trial is worth the one-day delay — it produces data that months of theory cannot replace',
        ],
      },
      {
        type: 'p',
        text: 'We are willing to participate in first-trial co-firing at customer plants within our road dispatch radius. The trial covers three to five truck deliveries of pellets at agreed blend ratios, with our quality team on-site for the first firing session to document feed rates, combustion stability, and any operational observations. The findings from your trial become part of your ongoing supply specification — blend ratio, fuel format, and GCV targeting aligned to your actual operational data rather than industry averages.',
      },
    ],
  },
];
