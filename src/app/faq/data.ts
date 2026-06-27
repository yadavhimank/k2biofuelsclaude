export type Category = 'Products' | 'Sustainability' | 'Logistics' | 'Partnerships' | 'Compliance';

export interface FAQItem {
  id: string;
  category: Category;
  q: string;
  a: string;
}

export const CATEGORIES: Category[] = [
  'Products',
  'Sustainability',
  'Logistics',
  'Partnerships',
  'Compliance',
];

export const FAQ_ITEMS: FAQItem[] = [
  // ── Products (12) ────────────────────────────────────────────────────────
  {
    id: 'faq-products-gcv-pellets',
    category: 'Products',
    q: 'What is the GCV of your biomass pellets?',
    a: 'Our non-torrefied pellets deliver 3,400–3,850 kcal/kg GCV (ARB). Base feedstock is paddy straw and mustard straw. Moisture is held at <14% on every dispatch. The lab report dispatched with each load includes bomb calorimeter GCV, ash percentage, and moisture.',
  },
  {
    id: 'faq-products-gcv-briquettes',
    category: 'Products',
    q: 'What is the GCV of your biomass briquettes?',
    a: 'Our 90 mm cylindrical briquettes deliver a GCV of 3,200–3,600 kcal/kg — within range of typical Indian coal — with moisture 6–8%, ash content <10%, and sulphur 0%. Base feedstock is paddy straw and mustard straw. Lab reports accompany every dispatch.',
  },
  {
    id: 'faq-products-specs',
    category: 'Products',
    q: 'What are the moisture, ash, and fines specifications?',
    a: 'Pellets (Non-Torrefied): moisture <14%, fines ≤4% on dispatch, diameter 6–8 mm, GCV 3,400–3,850 kcal/kg, sulphur 0%. Briquettes: moisture 6–8%, ash <10%, fines <2% on dispatch, diameter 90 mm, GCV 3,200–3,600 kcal/kg, sulphur 0%. Both are tested at intake (feedstock) and at output (finished product) before dispatch. Lab reports accompany every load.',
  },
  {
    id: 'faq-products-binders',
    category: 'Products',
    q: 'Do your pellets and briquettes contain any chemical binders or additives?',
    a: 'No. Neither our biomass pellets nor our briquettes contain any external additives or synthetic chemical binders. Binding occurs naturally through the lignin and silica content present in the biomass feedstock. During production, the raw material is subjected to high pressure, elevated temperature, steam conditioning and subsequent cooling, which facilitates natural bonding of the particles. The result is a fully natural, environmentally friendly biofuel with no synthetic agents.',
  },
  {
    id: 'faq-products-coal-replacement',
    category: 'Products',
    q: 'Can biomass pellets or briquettes replace coal directly in my boiler?',
    a: "Briquettes at 3,200–3,600 kcal/kg land within the GCV range of typical Indian coal and serve as a drop-in for thermal applications below 850°C. Co-firing trials of up to 10% biomass blend are widely supported across Indian thermal plants under CAQM guidelines. For full substitution, send us your boiler model and throughput — we'll assess feasibility and recommend the right blend.",
  },
  {
    id: 'faq-products-custom-blends',
    category: 'Products',
    q: 'Do you offer custom feedstock blends?',
    a: "Yes. Send us your boiler model, throughput, and any ash or chlorine constraints. Our quality team will recommend or formulate a feedstock blend optimised for your handling system. Custom blends are available on rolling monthly contracts of 500 MT or more.",
  },
  {
    id: 'faq-products-briquette-use-cases',
    category: 'Products',
    q: 'What are the typical use cases for 90 mm briquettes?',
    a: 'Briquettes at 90 mm diameter are designed for sustained industrial steam load in applications that favour long, steady burn over quick ignition. Typical customers include brick kilns, food and vegetable processing plants, distilleries, chemical processing units, and paper mills. The high density and low moisture make them particularly effective in continuous-load burners where coal is currently used.',
  },
  {
    id: 'faq-products-pellets-vs-briquettes',
    category: 'Products',
    q: 'How do I decide between pellets and briquettes for my boiler?',
    a: "Pellets suit applications requiring controlled feed rates, co-firing with existing coal infrastructure, or smaller-format handling systems. Briquettes suit sustained high-load applications — brick kilns, large steam boilers, distilleries — where long burn time and high density reduce handling frequency. Send us your boiler model and current fuel and we'll give you a direct recommendation.",
  },
  {
    id: 'faq-products-batch-size',
    category: 'Products',
    q: 'What is the minimum batch size for a commercial order?',
    a: 'Commercial orders start at one full truck — 28 MT per truck for bulk loose dispatch. Bagged orders (25–35 kg HDPE) can be smaller depending on proximity to the Rewari plant. Rake-load dispatch is available for customers requiring 1,500 MT or more per month.',
  },
  {
    id: 'faq-products-sample',
    category: 'Products',
    q: 'How quickly can I get a sample?',
    a: 'Trial samples (50 kg) are dispatched within 48 hours of a confirmed request. Samples include the full lab report for the batch: GCV (bomb calorimeter), moisture, ash, fines, and proximate analysis. Call +91 88750 07733 or use the contact form to place a sample request.',
  },
  {
    id: 'faq-products-lab-report',
    category: 'Products',
    q: 'What does your lab report include?',
    a: 'Every dispatch is accompanied by a lab report covering: GCV by bomb calorimeter (kcal/kg), moisture (%), ash content (%), fines percentage (%), and proximate analysis. Reports are generated by our on-site quality laboratory at the Rewari plant. We also include batch intake testing results covering feedstock moisture and contamination.',
  },
  {
    id: 'faq-products-retained-samples',
    category: 'Products',
    q: 'Do you retain samples from each batch?',
    a: 'Yes. We retain a sealed reference sample from every batch for 90 days post-dispatch. This allows us to resolve any quality disputes with third-party testing against the same batch material. The sample ID and retention date are printed on the dispatch documentation.',
  },
  {
    id: 'faq-products-feedstocks',
    category: 'Products',
    q: 'What feedstocks do you use?',
    a: 'Our primary feedstocks are mustard stalk and husk, paddy straw, and rice husk — sourced from farms within a 150 km radius of the Rewari plant. Feedstock is procured through a panel of aggregators across Haryana, Punjab, and western Uttar Pradesh. The mix varies by season; we optimise blend composition to maintain consistent GCV output year-round.',
  },

  // ── Sustainability (6) ────────────────────────────────────────────────────
  {
    id: 'faq-sustainability-caqm',
    category: 'Sustainability',
    q: 'What is the CAQM biomass pellet mandate?',
    a: 'The Commission for Air Quality Management (CAQM) has directed Delhi-NCR thermal power plants to prioritise paddy-straw based biomass pellets in their co-firing programs. The mandate targets open-field crop residue burning — a major source of winter air pollution in the region. K2 Biofuels is located 70 km from Delhi-NCR, within the CAQM priority zone, and our paddy-straw pellets are fully aligned with the mandate.',
  },
  {
    id: 'faq-sustainability-carbon-credits',
    category: 'Sustainability',
    q: 'Are K2 Biofuels products eligible for carbon credits?',
    a: 'Yes. Biomass co-firing with our pellets and briquettes is eligible for carbon credit generation under VCS (Verified Carbon Standard) and Gold Standard methodologies. We can provide documentation to support your carbon credit application, including feedstock origin certificates and displacement calculations. Contact our team for a project-specific assessment.',
  },
  {
    id: 'faq-sustainability-iso-14001',
    category: 'Sustainability',
    q: 'Is K2 Biofuels ISO 14001 certified?',
    a: 'ISO 14001 certification is currently in process. We operate under the environmental management principles of the standard — documented waste handling, wastewater management, and air quality monitoring — and are targeting certification within the current financial year. We are MNRE-registered and hold valid state PCB consent to operate.',
  },
  {
    id: 'faq-sustainability-lifecycle',
    category: 'Sustainability',
    q: 'How do you calculate lifecycle emissions for your fuel?',
    a: 'Our lifecycle emissions methodology follows the MNRE biomass characterisation framework and is consistent with GHG Protocol standards. The calculation covers feedstock collection and transport, drying and densification energy, and outbound freight — offset against avoided emissions from open-field stubble burning. We can share a project-level emissions calculation sheet on request.',
  },
  {
    id: 'faq-sustainability-traceability',
    category: 'Sustainability',
    q: 'How do you trace the source of your feedstock?',
    a: "Every feedstock intake is logged against the supplier's land parcel, GPS-tagged at our intake weighbridge, and linked to the batch it feeds. This creates an end-to-end traceability chain from farm to dispatch. The traceability data is available on request and forms part of our carbon credit documentation package.",
  },
  {
    id: 'faq-sustainability-ash',
    category: 'Sustainability',
    q: 'What happens to the ash produced when burning your fuel?',
    a: 'Biomass ash is rich in potash and silica and is suitable for agricultural reuse as a soil amendment. We work with customers to connect ash buyers and farmers in the supply region. For customers who need ash disposal support, we can arrange collection through our aggregator network. Ash volumes and composition depend on the feedstock blend.',
  },

  // ── Logistics (5) ─────────────────────────────────────────────────────────
  {
    id: 'faq-logistics-lead-times',
    category: 'Logistics',
    q: 'What are the lead times for first orders and repeat orders?',
    a: 'Trial sample: within 48 hours. First commercial order: 7–14 days from order confirmation, depending on current stock and feedstock availability. Repeat orders on rolling monthly contracts: 3–5 days lead time with volume pre-committed. For rake-load orders, please allow 10–14 days for rail booking.',
  },
  {
    id: 'faq-logistics-geography',
    category: 'Logistics',
    q: 'Which geographies do you dispatch to?',
    a: 'Our Rewari, Haryana plant dispatches via road to any location in north India within a 600 km radius at competitive landed cost. For customers beyond 600 km, rake-load dispatch from the nearest railhead brings the landed cost in line with road freight for volumes above 1,500 MT/month. We currently supply regularly to Haryana, Punjab, Delhi-NCR, Rajasthan, and western Uttar Pradesh.',
  },
  {
    id: 'faq-logistics-packaging',
    category: 'Logistics',
    q: 'What packaging options are available?',
    a: 'Pellets: 25–35 kg HDPE bags, jumbo bags (500–1,000 kg), or custom bulk. Briquettes: 40–60 kg bags or custom bulk supply. For large volumes we can supply loose in truck beds (bulk discharge). Minimum quantities apply for each packaging type — contact us for a packaging quote based on your storage setup.',
  },
  {
    id: 'faq-logistics-moq',
    category: 'Logistics',
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'For bagged orders: 5 MT minimum subject to distance. For bulk truck dispatch: one full truck, 28 MT. For rake-load: 1,500 MT per rake. Rolling monthly contracts are available from 100 MT/month upward. Trial samples (50 kg) are available without MOQ for new customers.',
  },
  {
    id: 'faq-logistics-weighbridge',
    category: 'Logistics',
    q: 'Are your trucks weighbridge-certified?',
    a: 'All dispatches are weighed on our on-site Rewari weighbridge, certified by the Legal Metrology department. Weighment slips are included with every dispatch and form part of the invoice documentation. Third-party weighment at your destination is accepted — any discrepancy within 0.5% is absorbed; above that is handled per the commercial terms in your contract.',
  },

  // ── Partnerships (4) ──────────────────────────────────────────────────────
  {
    id: 'faq-partnerships-contracts',
    category: 'Partnerships',
    q: 'What contract lengths do you offer?',
    a: 'We primarily offer rolling monthly contracts with a 30-day notice period. Customers with volume commitments above 500 MT/month can negotiate 6- or 12-month contracts with locked pricing and volume protection. Long-term contracts include a price review clause linked to feedstock index and diesel freight rates.',
  },
  {
    id: 'faq-partnerships-volume-protection',
    category: 'Partnerships',
    q: 'How does volume protection work?',
    a: 'Under a rolling contract, K2 Biofuels reserves production capacity for your committed monthly volume. If your actual off-take falls below 80% of committed volume in any month, we may release reserved capacity to spot customers. Volume protection is fully activated for contracts above 500 MT/month with a 12-month commitment.',
  },
  {
    id: 'faq-partnerships-esg',
    category: 'Partnerships',
    q: 'Can we co-claim ESG benefits from using your biomass fuel?',
    a: 'Yes. We provide documentation supporting your ESG reporting — feedstock origin certificates, displacement methodology, and GHG savings calculations. For customers filing under CDP, BRSR, or GRI frameworks, we can structure a co-claim arrangement that attributes avoided stubble-burning emissions to your supply chain. Contact us to discuss the documentation package.',
  },
  {
    id: 'faq-partnerships-payment',
    category: 'Partnerships',
    q: 'What are your payment terms?',
    a: '100% advance for the first three orders, moving to 50% advance / 50% on proof of dispatch from order four onward. Established customers on 12-month contracts with a track record can negotiate net-30 terms. We do not offer credit terms to spot buyers.',
  },

  // ── Compliance (3) ────────────────────────────────────────────────────────
  {
    id: 'faq-compliance-factories-act',
    category: 'Compliance',
    q: 'Does K2 Biofuels hold consent to operate under the Factories Act?',
    a: 'Yes. Our Rewari plant operates under a valid licence issued under the Factories Act, 1948, registered with the Haryana Labour Department. The licence covers our current installed capacity and is renewed annually. A copy is available on request for procurement due diligence.',
  },
  {
    id: 'faq-compliance-boiler-act',
    category: 'Compliance',
    q: 'Is the plant or any equipment registered under the Indian Boiler Act?',
    a: 'K2 Biofuels manufactures biomass fuel — we are not a boiler operator. Our plant equipment includes pellet mills, dryers, and conveyors, none of which fall under Boiler Act registration. For customers who are boiler operators, we can provide fuel compliance documentation required by the IBR for biomass co-firing.',
  },
  {
    id: 'faq-compliance-cpcb',
    category: 'Compliance',
    q: 'Do you hold CPCB / State PCB environmental consent to operate?',
    a: 'Yes. We hold Consent to Operate (CTO) issued by the Haryana State Pollution Control Board (HSPCB) under the Air Act and Water Act. Our operations meet applicable stack emission and effluent discharge standards. The CTO is renewed periodically and a copy is available for procurement and audit purposes.',
  },
];
