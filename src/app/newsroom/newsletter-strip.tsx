'use client';

import { useState } from 'react';
import { Em } from '@/components/ui/em';
import { Eyebrow } from '@/components/ui/eyebrow';

export function NewsroomNewsletterStrip() {
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
      borderTop: '1px solid var(--k2-border)',
      borderBottom: '1px solid var(--k2-border)',
      padding: '64px 32px',
      background: 'var(--k2-stone)',
    }}>
      <div style={{
        maxWidth: 1320,
        margin: '0 auto',
        display: 'flex',
        gap: 64,
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
        {/* Left: copy */}
        <div style={{ flex: '1 1 280px' }}>
          <Eyebrow style={{ marginBottom: 16 }}>— Media digest</Eyebrow>
          <h2 style={{
            fontSize: 'clamp(22px, 3vw, 32px)',
            margin: '0 0 14px',
            fontWeight: 500,
            letterSpacing: '-0.025em',
            lineHeight: 1.15,
            color: 'var(--k2-ink)',
          }}>
            Policy updates <Em>to your inbox.</Em>
          </h2>
          <p style={{
            fontSize: 14,
            lineHeight: 1.65,
            color: 'var(--k2-text-2)',
            margin: 0,
            maxWidth: 380,
          }}>
            Monthly digest of regulatory updates, press coverage, and market signals relevant to biomass co-firing in India.
          </p>
        </div>

        {/* Right: form + RSS */}
        <div style={{ flex: '1 1 280px' }}>
          {status === 'done' ? (
            <div style={{
              fontFamily: 'var(--k2-mono)',
              fontSize: 15,
              color: 'var(--k2-text-2)',
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
                    background: 'var(--k2-canvas)',
                    border: '1px solid var(--k2-border-med)',
                    borderRight: 'none',
                    fontFamily: 'inherit',
                    fontSize: 14,
                    color: 'var(--k2-ink)',
                    outline: 'none',
                    borderRadius: 0,
                    minWidth: 0,
                  }}
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  style={{
                    background: 'var(--k2-ink)',
                    color: 'var(--k2-on-ink)',
                    border: 'none',
                    padding: '13px 20px',
                    fontSize: 14,
                    fontFamily: 'var(--k2-mono)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    cursor: status === 'submitting' ? 'wait' : 'pointer',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    opacity: status === 'submitting' ? 0.65 : 1,
                    transition: 'opacity 0.2s ease',
                  }}
                >
                  {status === 'submitting' ? 'Sending…' : 'Subscribe →'}
                </button>
              </div>
              <div style={{
                marginTop: 12,
                display: 'flex',
                gap: 18,
                alignItems: 'center',
              }}>
                <p style={{
                  margin: 0,
                  fontSize: 13,
                  color: 'var(--k2-text-3)',
                  fontFamily: 'var(--k2-mono)',
                  letterSpacing: '0.02em',
                }}>
                  Unsubscribe any time. No spam, ever.
                </p>
                <a
                  href="/rss.xml"
                  style={{
                    fontFamily: 'var(--k2-mono)',
                    fontSize: 12,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--k2-eyebrow)',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    flexShrink: 0,
                  }}
                >
                  <span style={{
                    display: 'inline-block',
                    width: 12, height: 12,
                    background: 'var(--k2-eyebrow)',
                    color: '#fff',
                    fontSize: 8,
                    textAlign: 'center',
                    lineHeight: '12px',
                    borderRadius: 2,
                  }}>
                    ⌘
                  </span>
                  RSS feed
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
