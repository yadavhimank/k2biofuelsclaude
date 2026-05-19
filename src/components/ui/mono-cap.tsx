import React from 'react';

interface MonoCapProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function MonoCap({ children, style }: MonoCapProps) {
  return (
    <span style={{ fontFamily: 'var(--k2-mono)', fontSize: 13, opacity: 0.7, ...style }}>
      {children}
    </span>
  );
}
