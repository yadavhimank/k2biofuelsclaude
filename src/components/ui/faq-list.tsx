'use client';

import { useState } from 'react';

const faqs: [string, string][] = [
  [
    'What is the GCV of K2 biomass pellets?',
    'Our non-torrefied pellets deliver 3,400–3,850 kcal/kg GCV (ARB), made from paddy straw and mustard straw. Moisture is held at below 14% on every dispatch. Lab reports accompany each load.',
  ],
  [
    'Are biomass pellets a drop-in replacement for coal?',
    'Our briquettes at 3,200–3,600 kcal/kg land within range of typical Indian coal GCV, and serve as a drop-in for thermal applications below 850°C. Co-firing trials of up to 10% biomass blend are widely supported across Indian thermal plants.',
  ],
  [
    'What is the CAQM pellet mandate?',
    'The Commission for Air Quality Management has directed Delhi-NCR thermal plants to prioritise paddy-straw based biomass pellets in their co-firing programs. K2 Biofuels is located 70 km from Delhi-NCR — within the CAQM priority zone.',
  ],
  [
    'How do you ensure pellet quality?',
    'Every batch is tested at intake (moisture, contamination) and at output (GCV via bomb calorimeter, ash, fines, moisture). Lab reports are dispatched with every load. Trial samples include the full report.',
  ],
  [
    'What are the typical lead times and minimum orders?',
    'Sample dispatched within 48 hours. First commercial order in 7–14 days. Direct truck dispatch up to 28 MT per truck, rake-load capability for distant deliveries. Rolling monthly off-take contracts available with volume protection.',
  ],
  [
    'Do you handle custom blends?',
    'Yes. Send us your boiler model, throughput, and any ash or chlorine constraints — we will recommend or formulate a feedstock blend that fits your handling system.',
  ],
];

export function FAQList() {
  const [open, setOpen] = useState(0);

  return (
    <div style={{ borderTop: '1px solid var(--k2-border)' }}>
      {faqs.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderBottom: '1px solid var(--k2-border)' }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                width: '100%', display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', gap: 32, padding: '24px 0',
                background: 'transparent', border: 'none', cursor: 'pointer',
                textAlign: 'left', fontFamily: 'inherit',
              }}
            >
              <span style={{ fontSize: 18, fontWeight: 500, color: 'var(--k2-ink)', letterSpacing: '-0.01em' }}>
                <span style={{ fontFamily: 'var(--k2-mono)', fontSize: 14, color: 'var(--k2-text-3)', marginRight: 14 }}>0{i + 1}</span>
                {q}
              </span>
              <span style={{ fontSize: 22, color: 'var(--k2-text-2)', transition: 'transform .2s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
            </button>
            {isOpen && (
              <p style={{
                fontSize: 15, lineHeight: 1.7, color: 'var(--k2-text-2)',
                margin: '0 0 28px', paddingLeft: 40, maxWidth: 720,
              }}>
                {a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
