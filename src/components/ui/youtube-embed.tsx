'use client';

import { useState } from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  /** Static thumbnail shown before the viewer clicks play — keeps the page
   *  light since the YouTube iframe/player only loads on demand. */
  thumbnailSrc: string;
  /** Aspect ratio, e.g. '16/9'. */
  ratio?: string;
}

const PLACEHOLDER_ID = 'PLACEHOLDER_VIDEO_ID';

export function YouTubeEmbed({ videoId, title, thumbnailSrc, ratio = '16/9' }: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const isPlaceholder = videoId === PLACEHOLDER_ID;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: ratio,
        overflow: 'hidden',
        background: '#000',
      }}
    >
      {playing && !isPlaceholder ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
        />
      ) : (
        <button
          type="button"
          onClick={() => !isPlaceholder && setPlaying(true)}
          aria-label={isPlaceholder ? title : `Play video: ${title}`}
          disabled={isPlaceholder}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            padding: 0,
            border: 0,
            cursor: isPlaceholder ? 'default' : 'pointer',
            background: `url(${thumbnailSrc}) center / cover no-repeat`,
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.12) 45%, rgba(0,0,0,0.35) 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 76,
              height: 76,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.94)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 28px rgba(0,0,0,0.35)',
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: '13px solid transparent',
                borderBottom: '13px solid transparent',
                borderLeft: '21px solid #0A1F0E',
                marginLeft: 4,
              }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              left: 20,
              bottom: 16,
              color: '#fff',
              fontSize: 14,
              fontWeight: 500,
              textAlign: 'left',
              textShadow: '0 1px 8px rgba(0,0,0,0.6)',
            }}
          >
            {isPlaceholder ? 'Plant tour video — coming soon' : title}
          </div>
        </button>
      )}
    </div>
  );
}
