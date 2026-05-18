import React from 'react';

interface SpecRowProps {
  label: React.ReactNode;
  value: React.ReactNode;
  mono?: boolean;
}

export function SpecRow({ label, value, mono = true }: SpecRowProps) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between',
      alignItems: 'baseline', padding: '10px 0',
      borderBottom: '1px solid rgba(10,31,14,0.08)',
      fontSize: 13,
    }}>
      <span style={{ color: 'var(--k2-text-2)' }}>{label}</span>
      <span style={{
        fontFamily: mono ? 'var(--k2-mono)' : 'inherit',
        color: 'var(--k2-text-1)',
      }}>{value}</span>
    </div>
  );
}
