import Image from "next/image";

interface K2LogoProps {
  size?: number;
}

export function K2Logo({ size = 120 }: K2LogoProps) {
  return (
    <div className="k2-logo-wrap" style={{ width: size, flexShrink: 0 }}>
      <Image
        src="/k2biofuelslogo.png"
        alt="K2 Biofuels"
        width={size}
        height={size}
        style={{ display: 'block', objectFit: 'contain', width: '100%', height: 'auto' }}
        priority
      />
    </div>
  );
}
