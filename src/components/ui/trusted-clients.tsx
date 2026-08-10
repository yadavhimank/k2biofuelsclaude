import Link from 'next/link';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Em } from '@/components/ui/em';

type Client = {
  number: string;
  name: string;
  facility: string;
  location: string;
  capacity: string;
  type: string;
  description: string;
};

const CLIENTS: Client[] = [
  {
    number: '01',
    name: 'NTPC Jhajjar',
    facility: 'Indira Gandhi Super Thermal Power Project',
    location: 'Jharli, Jhajjar, Haryana',
    capacity: '1,500 MW',
    type: 'Thermal Power Project',
    description: 'Supplied to the IGSTPP facility in Jharli, configured as three 500 MW units.',
  },
  {
    number: '02',
    name: 'NTPC Dadri',
    facility: 'National Capital Power Station',
    location: 'Gautam Budh Nagar, Uttar Pradesh',
    capacity: '1,820 MW',
    type: 'Multi-Fuel Power Station',
    description: 'Supplied to the National Capital Power Station in Dadri, Uttar Pradesh.',
  },
  {
    number: '03',
    name: 'Jindal Power – Jhajjar',
    facility: 'Jindal Jhajjar Power Limited',
    location: 'Jhajjar, Haryana',
    capacity: '1,320 MW',
    type: 'Supercritical Thermal Power Plant',
    description: 'Supplied to Jindal Jhajjar Power Limited, a supercritical thermal power facility.',
  },
];

const STATS = [
  ['4,640+ MW', 'Combined installed generation capacity represented'],
  ['3', 'Major power-generation clients'],
  ['North India', 'Regional supply network'],
];

export function TrustedClients() {
  return (
    <section id="trusted-clients" className="k2-trusted-clients" aria-labelledby="trusted-clients-title">
      <div className="k2-trusted-clients-inner">
        <header className="k2-section-header k2-trusted-clients-header">
          <div>
            <Eyebrow accent="var(--k2-cta)" style={{ marginBottom: 16 }}>
              — Our clients
            </Eyebrow>
            <h2 id="trusted-clients-title" className="k2-h2 k2-trusted-clients-title">
              Trusted by leading<br />
              <Em color="#FFB37A">power generators.</Em>
            </h2>
          </div>
          <p className="k2-trusted-clients-intro">
            Our products are supplied to established power-generation facilities,
            supporting their fuel and sustainability requirements.
          </p>
        </header>

        <div className="k2-trusted-clients-grid">
          {CLIENTS.map((client) => (
            <article className="k2-trusted-client-card" key={client.name}>
              <span className="k2-trusted-client-number" aria-hidden="true">
                {client.number}
              </span>
              <div className="k2-trusted-client-logo" aria-label="Official logo placeholder">
                <span>Official logo</span>
                <span>placeholder</span>
              </div>
              <div className="k2-trusted-client-content">
                <h3>{client.name}</h3>
                <p className="k2-trusted-client-facility">{client.facility}</p>
                <p className="k2-trusted-client-location">{client.location}</p>
                <div className="k2-trusted-client-capacity">
                  <span>Installed capacity</span>
                  <strong>{client.capacity}</strong>
                </div>
                <div className="k2-trusted-client-type">{client.type}</div>
                <p className="k2-trusted-client-description">{client.description}</p>
                <span className="k2-trusted-client-link">
                  Supplied to <span aria-hidden="true">→</span>
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="k2-trusted-clients-stats" aria-label="Client portfolio statistics">
          {STATS.map(([value, label]) => (
            <div className="k2-trusted-client-stat" key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="k2-trusted-clients-cta">
          <p>Looking for a reliable biomass fuel supplier?</p>
          <Link href="/contact" className="k2-trusted-clients-button">
            Talk to Our Team <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
