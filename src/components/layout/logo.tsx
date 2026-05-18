interface K2LogoProps {
  size?: number;
}

export function K2Logo({ size = 28 }: K2LogoProps) {
  return (
    <div style={{
      width: size, height: size, display: 'flex',
      overflow: 'hidden', borderRadius: 3,
    }}>
      <div style={{ flex: 1, background: 'var(--k2-eyebrow)' }} />
      <div style={{ flex: 1, background: 'var(--k2-cta)' }} />
    </div>
  );
}
