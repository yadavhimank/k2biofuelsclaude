'use client';

import { useState, useEffect } from 'react';

interface ImageRotatorProps {
  images: { src: string; alt: string }[];
  height: number | string;
  intervalMs?: number;
  objectPosition?: string;
  fill?: boolean;
}

export function ImageRotator({ images, height, intervalMs = 4000, objectPosition = 'center', fill = false }: ImageRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div
      style={{
        position: fill ? 'absolute' : 'relative',
        inset: fill ? 0 : undefined,
        width: '100%',
        height,
        overflow: 'hidden',
      }}
    >
      {images.map((img, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          aria-hidden={img.alt ? undefined : true}
          loading={i === 0 ? 'eager' : 'lazy'}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition, display: 'block',
            opacity: i === index ? 1 : 0,
            transition: 'opacity 1.2s ease',
          }}
        />
      ))}
    </div>
  );
}
