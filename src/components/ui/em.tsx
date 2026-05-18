import React from 'react';

interface EmProps {
  children: React.ReactNode;
  color?: string;
}

export function Em({ children, color }: EmProps) {
  return (
    <span style={{
      fontFamily: 'var(--k2-serif)',
      fontStyle: 'italic',
      fontWeight: 400,
      color: color || 'var(--k2-eyebrow)',
    }}>
      {children}
    </span>
  );
}
