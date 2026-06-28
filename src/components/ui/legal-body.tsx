import { Eyebrow } from './eyebrow';

interface Section {
  h: string;
  b: string;
}

export function LegalBody({ sections }: { sections: Section[] }) {
  return (
    <section className="k2-legal-body">
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div className="k2-legal-grid">
          <nav className="k2-legal-nav">
            <Eyebrow style={{ marginBottom: 14 }}>On this page</Eyebrow>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13 }}>
              {sections.map((s, i) => (
                <a key={i} href={`#sect-${i}`}
                  style={{ color: 'var(--k2-text-2)', textDecoration: 'none' }}>
                  {String(i + 1).padStart(2, '0')} — {s.h}
                </a>
              ))}
            </div>
          </nav>
          <div>
            {sections.map((s, i) => (
              <div key={i} id={`sect-${i}`} style={{ marginBottom: 48 }}>
                <Eyebrow style={{ marginBottom: 10 }}>— {String(i + 1).padStart(2, '0')}</Eyebrow>
                <h2 style={{ fontSize: 28, margin: '0 0 18px', fontWeight: 500, letterSpacing: '-0.02em' }}>{s.h}</h2>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--k2-text-2)', margin: 0 }}>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
