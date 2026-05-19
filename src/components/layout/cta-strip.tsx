import Link from 'next/link';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Em } from '@/components/ui/em';
import { Button } from '@/components/ui/btn';

interface CTAStripProps {
  eyebrow?: string;
  title?: string;
  italic?: string;
  body?: string;
  primary?: string;
  secondary?: string;
  primaryTo?: string;
}

export function CTAStrip({
  eyebrow   = '— Get in touch',
  title     = "Let's talk about",
  italic    = "your boiler's fuel.",
  body,
  primary   = 'Start a conversation →',
  secondary = 'Download brochure',
  primaryTo = '/contact',
}: CTAStripProps) {
  return (
    <section style={{
      background: 'var(--k2-ink)', color: 'var(--k2-on-ink)',
      padding: '96px 32px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', right: -20, bottom: -60,
        fontSize: 'clamp(160px, 40vw, 320px)', fontWeight: 300, letterSpacing: '-0.05em',
        color: 'rgba(232,101,26,0.07)', pointerEvents: 'none', lineHeight: 1,
      }}>
        K2
      </div>
      <div style={{ maxWidth: 1320, margin: '0 auto', position: 'relative' }}>
        <Eyebrow accent="var(--k2-cta)" style={{ marginBottom: 18 }}>{eyebrow}</Eyebrow>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 56px)', margin: '0 0 24px', maxWidth: 720,
          lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 500,
        }}>
          {title}<br />
          <Em color="#FFB37A">{italic}</Em>
        </h2>
        {body && (
          <p style={{ fontSize: 17, color: 'rgba(250,250,247,0.72)', maxWidth: 560, lineHeight: 1.6, margin: '0 0 36px' }}>
            {body}
          </p>
        )}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href={primaryTo} style={{ textDecoration: 'none' }}>
            <Button variant="accent">{primary}</Button>
          </Link>
          <Button variant="outline" light={false}>{secondary}</Button>
        </div>
      </div>
    </section>
  );
}
