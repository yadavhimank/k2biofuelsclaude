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

// ponytail: hero-video.mp4 is a pillarboxed 16:9 clip baked into a 9:16
// canvas (black bars + burned-in title/logo). object-fit:cover can't crop
// those out on phone-shaped viewports, so mobile just keeps the full-bleed
// still image instead — same as every other page hero. Re-export a true
// vertical clip (no letterboxing) to lift this.
const MOBILE_QUERY = '(max-width: 639px)';

/**
 * Home hero background: shows the still image immediately (so first paint is
 * instant and LCP isn't blocked on a video download), then crossfades into a
 * muted, looping, autoplaying video once it's actually able to play.
 * Respects prefers-reduced-motion, and never loads/plays the video on mobile.
 */
export function HeroVideo({ imageSrc, imageAlt, videoSrc }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoVisible, setVideoVisible] = useState(false);
  const [canPlayVideo, setCanPlayVideo] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia(MOBILE_QUERY).matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isMobile && !reduceMotion) setCanPlayVideo(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!canPlayVideo || !video) return;

    const showVideo = () => setVideoVisible(true);
    video.addEventListener('playing', showVideo);

    // autoPlay + muted should be enough almost everywhere, but some mobile
    // browsers still want an explicit .play() call after the element mounts.
    const playPromise = video.play();
    if (playPromise) playPromise.catch(() => { /* stays on the still image */ });

    return () => video.removeEventListener('playing', showVideo);
  }, [canPlayVideo]);

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
      {canPlayVideo && (
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
      )}
    </>
  );
}
