'use client';

import { useState, useEffect } from 'react';

interface ImageRotatorProps {
  images: { src: string; alt: string }[];
  height: number;
  intervalMs?: number;
}

export function ImageRotator({ images, height, intervalMs = 4000 }: ImageRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div style={{ position: 'relative', width: '100%', height, overflow: 'hidden' }}>
      {images.map((img, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', display: 'block',
            opacity: i === index ? 1 : 0,
            transition: 'opacity 0.8s ease',
          }}
        />
      ))}
    </div>
  );
}
