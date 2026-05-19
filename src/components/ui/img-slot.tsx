import React from 'react';

type Tone = 'field' | 'pellet' | 'plant' | 'sky' | 'paddy' | 'mustard' | 'rice' | 'ash' | 'olive';

interface ImgSlotProps {
  ratio?: string;
  caption?: string;
  tone?: Tone;
  tall?: boolean;
  height?: number | string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function ImgSlot({ ratio = '16/9', caption, tone = 'field', tall, height, style, children }: ImgSlotProps) {
  const tones: Record<Tone, { bg: string; stripe: string; fg: string }> = {
    field:   { bg: 'linear-gradient(135deg, #d9c98a 0%, #b89a55 60%, #8b6f2c 100%)', stripe: 'rgba(255,255,255,0.08)', fg: '#fff' },
    pellet:  { bg: 'linear-gradient(135deg, #c9a876 0%, #8b6f2c 100%)',               stripe: 'rgba(255,255,255,0.06)', fg: '#fff' },
    plant:   { bg: 'linear-gradient(135deg, #3a4a3d 0%, #1a2a1f 100%)',               stripe: 'rgba(255,255,255,0.05)', fg: '#fafaf7' },
    sky:     { bg: 'linear-gradient(180deg, #c9b896 0%, #8b6f2c 100%)',               stripe: 'rgba(255,255,255,0.05)', fg: '#fff' },
    paddy:   { bg: 'linear-gradient(135deg, #E8DCC4, #8B6F2C)',                       stripe: 'rgba(255,255,255,0.05)', fg: '#fff' },
    mustard: { bg: 'linear-gradient(135deg, #D4B45C, #6B4F1A)',                       stripe: 'rgba(255,255,255,0.05)', fg: '#fff' },
    rice:    { bg: 'linear-gradient(135deg, #E8C77A, #A37D2E)',                       stripe: 'rgba(255,255,255,0.05)', fg: '#fff' },
    ash:     { bg: 'linear-gradient(135deg, #4a4538 0%, #2a261d 100%)',               stripe: 'rgba(255,255,255,0.04)', fg: '#fafaf7' },
    olive:   { bg: 'linear-gradient(135deg, #5a6347 0%, #2d3325 100%)',               stripe: 'rgba(255,255,255,0.04)', fg: '#fafaf7' },
  };
  const t = tones[tone] || tones.field;
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      aspectRatio: tall || height ? undefined : ratio,
      height: height || undefined,
      background: t.bg,
      backgroundImage: `${t.bg}, repeating-linear-gradient(135deg, transparent 0 8px, ${t.stripe} 8px 9px)`,
      overflow: 'hidden',
      color: t.fg,
      ...style,
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `repeating-linear-gradient(135deg, transparent 0 14px, ${t.stripe} 14px 15px)`,
        pointerEvents: 'none',
      }} />
      {caption && (
        <div style={{
          position: 'absolute', left: 14, bottom: 12,
          fontFamily: 'var(--k2-mono)', fontSize: 12, letterSpacing: 0.5,
          textTransform: 'uppercase', opacity: 0.75,
          background: 'rgba(0,0,0,0.25)', padding: '4px 8px',
          borderRadius: 2,
        }}>
          {caption}
        </div>
      )}
      {children}
    </div>
  );
}
