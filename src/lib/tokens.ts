// Design tokens — verbatim port of K2_PALETTES / K2_FONTS / DENSITY from shared.jsx

export const K2_PALETTES = {
  duo: {
    label: 'Green + Orange',
    eyebrow: '#2D7A3D',
    cta: '#E8651A',
    ink: '#0A1F0E',
    canvas: '#FAFAF7',
    stone: '#F1EFE8',
  },
  orange: {
    label: 'Orange-forward',
    eyebrow: '#E8651A',
    cta: '#E8651A',
    ink: '#0A1F0E',
    canvas: '#FAFAF7',
    stone: '#F1EFE8',
  },
  ink: {
    label: 'Ink only',
    eyebrow: '#0A1F0E',
    cta: '#0A1F0E',
    ink: '#0A1F0E',
    canvas: '#FAFAF7',
    stone: '#F1EFE8',
  },
} as const;

export const K2_FONTS = {
  inter: {
    label: 'Inter + JetBrains Mono',
    sans: '"Inter", system-ui, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
    serif: '"Instrument Serif", Georgia, serif',
  },
  dmsans: {
    label: 'DM Sans + IBM Plex Mono',
    sans: '"DM Sans", system-ui, sans-serif',
    mono: '"IBM Plex Mono", ui-monospace, monospace',
    serif: '"Instrument Serif", Georgia, serif',
  },
  helvetica: {
    label: 'Helvetica Neue + JBM',
    sans: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
    serif: '"Instrument Serif", Georgia, serif',
  },
} as const;

export const DENSITY = {
  tight:    { sectionY: 56,  cardPad: 18, gap: 24 },
  regular:  { sectionY: 80,  cardPad: 24, gap: 32 },
  spacious: { sectionY: 112, cardPad: 32, gap: 40 },
} as const;

// Derived types
export type PaletteKey = keyof typeof K2_PALETTES;
export type FontKey    = keyof typeof K2_FONTS;
export type DensityKey = keyof typeof DENSITY;
