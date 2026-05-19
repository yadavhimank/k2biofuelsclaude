'use client';

import { useState } from 'react';
import { Em } from '@/components/ui/em';
import { Eyebrow } from '@/components/ui/eyebrow';

export function BlogNewsletterCTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('submitting');
    setTimeout(() => setStatus('done'), 900);
  };

  return (
    <section style={{
      background: 'var(--k2-ink)',
      color: 'var(--k2-on-ink)',
      padding: '80px 32px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Watermark */}
      <div aria-hidden style={{
        position: 'absolute', right: -16, bottom: -48,
        fontSize: 'clamp(120px, 28vw, 240px)',
        fontWeight: 300, letterSpacing: '-0.05em',
        color: 'rgba(232,101,26,0.06)', pointerEvents: 'none', lineHeight: 1,
      }}>
        K2
      </div>

      <div style={{
        maxWidth: 1320, margin: '0 auto', position: 'relative',
        display: 'flex', gap: 64, alignItems: 'center', flexWrap: 'wrap',
      }}>
        <div style={{ flex: '1 1 280px' }}>
          <Eyebrow accent="var(--k2-cta)" style={{ marginBottom: 18 }}>— Field notes</Eyebrow>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            margin: '0 0 16px',
            fontWeight: 500,
            letterSpacing: '-0.025em',
            lineHeight: 1.1,
          }}>
            Want field notes <Em color="#FFB37A">in your inbox?</Em>
          </h2>
          <p style={{
            fontSize: 15,
            color: 'rgba(250,250,247,0.72)',
            margin: 0,
            lineHeight: 1.65,
            maxWidth: 400,
          }}>
            Monthly dispatch: technical notes, policy updates, and supply chain observations from the Rewari plant. No marketing — just the numbers.
          </p>
        </div>

        <div style={{ flex: '1 1 280px' }}>
          {status === 'done' ? (
            <div style={{
              fontFamily: 'var(--k2-mono)',
              fontSize: 13,
              color: 'rgba(250,250,247,0.85)',
              letterSpacing: '0.02em',
            }}>
              ✓ You&apos;re on the list. First dispatch lands next month.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  style={{
                    flex: 1,
                    padding: '13px 16px',
                    background: 'rgba(250,250,247,0.07)',
                    border: '1px solid rgba(250,250,247,0.2)',
                    borderRight: 'none',
                    fontFamily: 'inherit',
                    fontSize: 14,
                    color: 'var(--k2-on-ink)',
                    outline: 'none',
                    borderRadius: 0,
                    minWidth: 0,
                  }}
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  style={{
                    background: 'var(--k2-cta)',
                    color: '#fff',
                    border: 'none',
                    padding: '13px 22px',
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: status === 'submitting' ? 'wait' : 'pointer',
                    whiteSpace: 'nowrap',
                    fontFamily: 'inherit',
                    flexShrink: 0,
                    opacity: status === 'submitting' ? 0.7 : 1,
                    transition: 'opacity 0.2s ease',
                  }}
                >
                  {status === 'submitting' ? 'Sending…' : 'Subscribe →'}
                </button>
              </div>
              <p style={{
                margin: '10px 0 0',
                fontSize: 11,
                color: 'rgba(250,250,247,0.45)',
                fontFamily: 'var(--k2-mono)',
              }}>
                Unsubscribe any time. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
