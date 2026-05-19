import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  bullet?: boolean;
  accent?: string;
  style?: React.CSSProperties;
}

export function Eyebrow({ children, bullet, accent, style }: EyebrowProps) {
  return (
    <div style={{
      fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase',
      fontWeight: 500, color: accent || 'var(--k2-eyebrow)',
      ...style,
    }}>
      {bullet && <span style={{ marginRight: 6 }}>●</span>}
      {children}
    </div>
  );
}
