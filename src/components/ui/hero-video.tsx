'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface HeroVideoProps {
  imageSrc: string;
  imageAlt: string;
  /** MP4 source, served from /public. Drop the file in and the hero will
   *  crossfade from the still image into it automatically — until then this
   *  component just quietly keeps showing the image (no broken UI). */
  videoSrc: string;
}

/**
 * Home hero background: shows the still image immediately (so first paint is
 * instant and LCP isn't blocked on a video download), then crossfades into a
 * muted, looping, autoplaying video once it's actually able to play.
 * Respects prefers-reduced-motion by never starting the video.
 */
export function HeroVideo({ imageSrc, imageAlt, videoSrc }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const showVideo = () => setVideoVisible(true);
    video.addEventListener('playing', showVideo);

    // autoPlay + muted should be enough almost everywhere, but some mobile
    // browsers still want an explicit .play() call after the element mounts.
    const playPromise = video.play();
    if (playPromise) playPromise.catch(() => { /* stays on the still image */ });

    return () => video.removeEventListener('playing', showVideo);
  }, []);

  return (
    <>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          opacity: videoVisible ? 0 : 1,
          transition: 'opacity 1.1s ease',
        }}
        sizes="100vw"
      />
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          opacity: videoVisible ? 1 : 0,
          transition: 'opacity 1.1s ease',
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </>
  );
}
