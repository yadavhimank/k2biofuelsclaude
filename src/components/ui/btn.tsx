'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'accent';
  light?: boolean;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  light = true,
  style,
  onClick,
  type,
  disabled,
}: ButtonProps) {
  const base: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '12px 22px', fontSize: 13, fontWeight: 500,
    letterSpacing: 0.1, lineHeight: 1, cursor: 'pointer',
    transition: 'all .18s ease', textDecoration: 'none', border: 'none',
    fontFamily: 'inherit', borderRadius: 2, whiteSpace: 'nowrap',
  };
  const variants: Record<'primary' | 'outline' | 'accent', React.CSSProperties> = {
    primary: { background: 'var(--k2-ink)', color: 'var(--k2-on-ink)' },
    outline: {
      background: 'transparent',
      color: light ? 'var(--k2-ink)' : 'var(--k2-on-ink)',
      border: `1px solid ${light ? 'var(--k2-ink)' : 'rgba(250,250,247,0.3)'}`,
    },
    accent: { background: 'var(--k2-cta)', color: '#FFFFFF' },
  };
  return (
    <button
      type={type || 'button'}
      disabled={disabled}
      onClick={onClick}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
    >
      {children}
    </button>
  );
}
