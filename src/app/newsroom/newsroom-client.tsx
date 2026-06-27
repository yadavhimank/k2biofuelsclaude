'use client';

import { useState } from 'react';
import { ImgSlot } from '@/components/ui/img-slot';
import { Eyebrow } from '@/components/ui/eyebrow';
import type { PressArticle, NewsVideo, OfficialTweet } from '@/lib/newsroom';

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${day} ${months[month - 1]} ${year}`;
}

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function formatCount(n: number): string {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);
}

// ── Card components ───────────────────────────────────────────────────────────

function HeroArticleCard({ article }: { article: PressArticle }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="k2-newsroom-card"
      style={{
        display: 'block',
        position: 'relative',
        textDecoration: 'none',
        color: 'inherit',
        height: '100%',
        minHeight: 320,
      }}
    >
      {article.coverImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={article.coverImage}
          alt={article.headline}
          style={{ width: '100%', height: '100%', minHeight: 320, objectFit: 'cover', display: 'block' }}
        />
      ) : (
        <ImgSlot tone="paddy" style={{ height: '100%', minHeight: 320 }} />
      )}
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 55%, transparent 100%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '28px 28px 26px',
        color: '#fff',
      }}>
        <span style={{
          fontFamily: 'var(--k2-mono)',
          fontSize: 12,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.65)',
          display: 'block',
          marginBottom: 10,
        }}>
          {article.outlet} · {formatDate(article.publishedAt)}
        </span>
        <h2 style={{
          fontSize: 'clamp(18px, 1.8vw, 24px)',
          fontWeight: 500,
          lineHeight: 1.25,
          letterSpacing: '-0.015em',
          margin: '0 0 10px',
        }}>
          {article.headline}
        </h2>
        <p style={{
          fontSize: 15,
          lineHeight: 1.6,
          color: 'rgba(255,255,255,0.8)',
          margin: 0,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {article.excerpt}
        </p>
      </div>
    </a>
  );
}

function PressCard({ article }: { article: PressArticle }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="k2-newsroom-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        color: 'inherit',
        height: '100%',
      }}
    >
      {article.coverImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={article.coverImage}
          alt={article.headline}
          style={{ width: '100%', height: 260, objectFit: 'cover', display: 'block', flexShrink: 0 }}
        />
      )}
      <div style={{ padding: '20px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
      <span style={{
        fontFamily: 'var(--k2-mono)',
        fontSize: 12,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--k2-eyebrow)',
        display: 'block',
        marginBottom: 10,
      }}>
        {article.outlet} · {article.category}
      </span>
      <h3 style={{
        fontSize: 15,
        fontWeight: 500,
        lineHeight: 1.35,
        letterSpacing: '-0.01em',
        color: 'var(--k2-ink)',
        margin: '0 0 10px',
        flex: 1,
      }}>
        {article.headline}
      </h3>
      <p style={{
        fontSize: 15,
        lineHeight: 1.6,
        color: 'var(--k2-text-2)',
        margin: '0 0 16px',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}>
        {article.excerpt}
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'var(--k2-mono)',
        fontSize: 12,
        letterSpacing: '0.04em',
      }}>
        <span style={{ color: 'var(--k2-text-3)' }}>{formatDate(article.publishedAt)}</span>
        <span style={{ color: 'var(--k2-eyebrow)' }}>Read full article ↗</span>
      </div>
      </div>
    </a>
  );
}

const SOURCE_COLORS: Record<NewsVideo['source'], string> = {
  ANI: '#cc2200',
  'DD News': '#1a6b3c',
  YouTube: '#ff0000',
};

function VideoCard({ video }: { video: NewsVideo }) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="k2-newsroom-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        color: 'inherit',
        height: '100%',
      }}
    >
      {/* Thumbnail */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        {video.thumbnailImage
          ? /* eslint-disable-next-line @next/next/no-img-element */
            <img src={video.thumbnailImage} alt={video.title} style={{ width: '100%', height: 210, objectFit: 'cover', display: 'block' }} />
          : <ImgSlot tone={video.thumbnailTone} height={210} />
        }
        {/* Gradient overlay for bottom legibility */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)',
          pointerEvents: 'none',
        }} />
        {/* Play button */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 52, height: 52,
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
        }}>
          <div style={{
            width: 0, height: 0,
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            borderLeft: '14px solid #0A1F0E',
            marginLeft: 3,
          }} />
        </div>
        {/* Source badge */}
        <div style={{
          position: 'absolute', top: 10, left: 10,
          background: SOURCE_COLORS[video.source],
          color: '#fff',
          fontFamily: 'var(--k2-mono)',
          fontSize: 9,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '3px 8px',
          display: 'flex', alignItems: 'center', gap: 5,
        }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,0.85)', flexShrink: 0 }} />
          {video.source}
        </div>
        {/* Duration pill */}
        <div style={{
          position: 'absolute', bottom: 10, right: 10,
          background: 'rgba(0,0,0,0.75)',
          color: '#fff',
          fontFamily: 'var(--k2-mono)',
          fontSize: 12,
          padding: '2px 8px',
          letterSpacing: '0.04em',
        }}>
          {formatDuration(video.durationSeconds)}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '18px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: 0 }}>
        <div style={{
          fontFamily: 'var(--k2-mono)',
          fontSize: 11,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          color: 'var(--k2-eyebrow)',
          marginBottom: 10,
        }}>
          {video.source} · {formatDate(video.publishedAt)}
        </div>
        <h3 style={{
          fontSize: 15,
          fontWeight: 500,
          lineHeight: 1.4,
          letterSpacing: '-0.01em',
          color: 'var(--k2-ink)',
          margin: '0 0 10px',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {video.title}
        </h3>
        <p style={{
          fontSize: 13,
          lineHeight: 1.6,
          color: 'var(--k2-text-2)',
          margin: 0,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          flex: 1,
        }}>
          {video.description}
        </p>
        <div style={{
          marginTop: 16,
          paddingTop: 12,
          borderTop: '1px solid var(--k2-border)',
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
          <span style={{ fontFamily: 'var(--k2-mono)', fontSize: 12, color: 'var(--k2-eyebrow)', letterSpacing: '0.04em' }}>
            Watch video ↗
          </span>
        </div>
      </div>
    </a>
  );
}

function TweetCard({ tweet }: { tweet: OfficialTweet }) {
  return (
    <a
      href={tweet.url}
      target="_blank"
      rel="noopener noreferrer"
      className="k2-newsroom-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        color: 'inherit',
        padding: '18px 18px 16px',
        height: '100%',
        position: 'relative',
      }}
    >
      {/* X watermark */}
      <div aria-hidden style={{
        position: 'absolute', top: 14, right: 14,
        fontWeight: 700, fontSize: 15,
        color: 'var(--k2-text-3)',
      }}>
        𝕏
      </div>
      {/* Header */}
      <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 12 }}>
        <div style={{
          width: 34, height: 34, flexShrink: 0,
          background: 'var(--k2-ink)',
          color: 'var(--k2-on-ink)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--k2-serif)', fontStyle: 'italic', fontSize: 15,
        }}>
          {tweet.displayName.charAt(0)}
        </div>
        <div style={{ flex: 1, minWidth: 0, paddingRight: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 500, fontSize: 15, color: 'var(--k2-ink)' }}>{tweet.displayName}</span>
            <span style={{ color: '#1d9bf0', fontSize: 14, lineHeight: 1 }}>✓</span>
          </div>
          <div style={{ fontFamily: 'var(--k2-mono)', fontSize: 12, color: 'var(--k2-text-3)', letterSpacing: '0.02em' }}>
            {tweet.handle}
          </div>
        </div>
      </div>
      {/* Role */}
      <div style={{
        fontFamily: 'var(--k2-mono)',
        fontSize: 9,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        color: 'var(--k2-eyebrow)',
        marginBottom: 10,
      }}>
        {tweet.role}
      </div>
      {/* Body */}
      <p style={{
        fontSize: 15,
        lineHeight: 1.65,
        color: 'var(--k2-ink)',
        margin: '0 0 12px',
        display: '-webkit-box',
        WebkitLineClamp: tweet.coverImage ? 3 : 5,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        flex: tweet.coverImage ? undefined : 1,
      }}>
        {tweet.body}
      </p>
      {/* Attached photo */}
      {tweet.coverImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={tweet.coverImage}
          alt=""
          style={{
            width: '100%', height: 340, objectFit: 'cover',
            display: 'block', marginBottom: 12, flexShrink: 0,
            border: '1px solid var(--k2-border)',
          }}
        />
      )}
      {/* Footer */}
      <div style={{
        marginTop: 14,
        paddingTop: 12,
        borderTop: '1px solid var(--k2-border)',
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        fontFamily: 'var(--k2-mono)',
        fontSize: 12,
        color: 'var(--k2-text-3)',
        letterSpacing: '0.03em',
        flexWrap: 'wrap',
      }}>
        <span>{formatDate(tweet.publishedAt)}</span>
        {tweet.likes != null && <span>♥ {formatCount(tweet.likes)}</span>}
        {tweet.retweets != null && <span>↺ {formatCount(tweet.retweets)}</span>}
        <span style={{ marginLeft: 'auto', color: 'var(--k2-eyebrow)' }}>View on X ↗</span>
      </div>
    </a>
  );
}

// ── Layout sections ───────────────────────────────────────────────────────────

function FeaturedMosaic({
  articles, videos, tweets,
}: {
  articles: PressArticle[];
  videos: NewsVideo[];
  tweets: OfficialTweet[];
}) {
  const hero = articles.find((a) => a.featured) ?? articles[0];
  const featuredVideo = videos[0];
  const mosaicTweets = tweets.slice(0, 3);
  const mosaicPress = articles.filter((a) => !a.featured).slice(0, 3);

  return (
    <div className="k2-newsroom-mosaic" style={{ marginTop: 32 }}>
      <div className="k2-nm-hero"><HeroArticleCard article={hero} /></div>
      <div className="k2-nm-vid"><VideoCard video={featuredVideo} /></div>
      {mosaicTweets.map((tweet, i) => (
        <div key={tweet.id} className={`k2-nm-tw${i + 1}`}><TweetCard tweet={tweet} /></div>
      ))}
      {mosaicPress.map((article, i) => (
        <div key={article.id} className={`k2-nm-pr${i + 1}`}><PressCard article={article} /></div>
      ))}
    </div>
  );
}

function PressGrid({ articles }: { articles: PressArticle[] }) {
  return (
    <div style={{ marginTop: 32 }}>
      <div className="k2-grid-3" style={{ gap: 24 }}>
        {articles.map((article) => (
          <div key={article.id} style={{ background: 'var(--k2-canvas)', border: '1px solid var(--k2-border-med)' }}>
            <PressCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
}

function VideoGrid({ videos }: { videos: NewsVideo[] }) {
  return (
    <div style={{ marginTop: 32 }}>
      <div className="k2-grid-3" style={{ gap: 24 }}>
        {videos.map((video) => (
          <div key={video.id} style={{ background: 'var(--k2-canvas)', border: '1px solid var(--k2-border-med)' }}>
            <VideoCard video={video} />
          </div>
        ))}
      </div>
    </div>
  );
}

function TweetsGrid({ tweets }: { tweets: OfficialTweet[] }) {
  return (
    <div style={{ marginTop: 32 }}>
      <div className="k2-grid-3" style={{ gap: 24 }}>
        {tweets.map((tweet) => (
          <div key={tweet.id} style={{ background: 'var(--k2-canvas)', border: '1px solid var(--k2-border-med)' }}>
            <TweetCard tweet={tweet} />
          </div>
        ))}
      </div>
    </div>
  );
}

type TimelineItem =
  | { kind: 'article'; data: PressArticle; date: string }
  | { kind: 'tweet'; data: OfficialTweet; date: string };

function PolicyTimeline({ articles, tweets }: { articles: PressArticle[]; tweets: OfficialTweet[] }) {
  const policyArticles = articles.filter((a) => a.category === 'Policy');

  const items: TimelineItem[] = [
    ...policyArticles.map((a) => ({ kind: 'article' as const, data: a, date: a.publishedAt })),
    ...tweets.map((t) => ({ kind: 'tweet' as const, data: t, date: t.publishedAt })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div style={{ marginTop: 40, maxWidth: 800 }}>
      {items.map((item, i) => (
        <div key={item.data.id} style={{ display: 'flex', gap: 20, paddingBottom: 36, position: 'relative' }}>
          {/* Connector line */}
          {i < items.length - 1 && (
            <div style={{
              position: 'absolute', left: 15, top: 32, bottom: 0,
              width: 1, background: 'var(--k2-border)',
            }} />
          )}
          {/* Dot */}
          <div style={{ width: 32, flexShrink: 0, display: 'flex', justifyContent: 'center', paddingTop: 4 }}>
            <div style={{
              width: 10, height: 10, borderRadius: '50%',
              background: item.kind === 'article' ? 'var(--k2-eyebrow)' : 'var(--k2-ink)',
              border: '2px solid var(--k2-canvas)',
              outline: `2px solid ${item.kind === 'article' ? 'var(--k2-eyebrow)' : 'var(--k2-ink)'}`,
              flexShrink: 0,
            }} />
          </div>
          {/* Content */}
          <div style={{ flex: 1 }}>
            <span style={{
              fontFamily: 'var(--k2-mono)',
              fontSize: 12,
              color: 'var(--k2-text-3)',
              letterSpacing: '0.04em',
              display: 'block',
              marginBottom: 8,
            }}>
              {formatDate(item.date)} · {item.kind === 'article' ? item.data.outlet : item.data.handle}
            </span>
            {item.kind === 'article' ? (
              <a href={item.data.url} target="_blank" rel="noopener noreferrer"
                 style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <h3 style={{
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: 1.35,
                  letterSpacing: '-0.01em',
                  color: 'var(--k2-ink)',
                  margin: '0 0 8px',
                }}>
                  {item.data.headline}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--k2-text-2)', margin: '0 0 8px' }}>
                  {item.data.excerpt}
                </p>
                <span style={{ fontFamily: 'var(--k2-mono)', fontSize: 12, color: 'var(--k2-eyebrow)', letterSpacing: '0.04em' }}>
                  Read full article ↗
                </span>
              </a>
            ) : (
              <a href={item.data.url} target="_blank" rel="noopener noreferrer"
                 style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{
                  fontFamily: 'var(--k2-mono)',
                  fontSize: 9,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'var(--k2-eyebrow)',
                  marginBottom: 8,
                }}>
                  {item.data.displayName} · {item.data.role}
                </div>
                <p style={{
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: 'var(--k2-ink)',
                  margin: '0 0 8px',
                  display: '-webkit-box',
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {item.data.body}
                </p>
                <span style={{ fontFamily: 'var(--k2-mono)', fontSize: 12, color: 'var(--k2-eyebrow)', letterSpacing: '0.04em' }}>
                  View on X ↗
                </span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Tab bar + main shell ──────────────────────────────────────────────────────

type Tab = 'featured' | 'press' | 'videos' | 'officials' | 'policy';

const TABS: { id: Tab; label: string }[] = [
  { id: 'featured', label: 'Featured' },
  { id: 'press', label: 'Press articles' },
  { id: 'videos', label: 'Videos' },
  { id: 'officials', label: 'From officials' },
  { id: 'policy', label: 'Policy updates' },
];

export function NewsroomClient({
  articles,
  videos,
  tweets,
}: {
  articles: PressArticle[];
  videos: NewsVideo[];
  tweets: OfficialTweet[];
}) {
  const [tab, setTab] = useState<Tab>('featured');

  return (
    <>
      {/* Tab bar */}
      <div className="k2-newsroom-tab-bar">
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 32px' }}>
          <div className="k2-newsroom-tabs">
            {TABS.map((t) => {
              const isActive = tab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    borderBottom: `2px solid ${isActive ? 'var(--k2-ink)' : 'transparent'}`,
                    padding: '12px 20px 12px',
                    fontFamily: 'var(--k2-mono)',
                    fontSize: 13,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--k2-ink)' : 'var(--k2-text-2)',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.15s ease, border-color 0.15s ease',
                    minHeight: 44,
                  }}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <section style={{ padding: '0 32px 80px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          {tab === 'featured' && (
            <FeaturedMosaic articles={articles} videos={videos} tweets={tweets} />
          )}
          {tab === 'press' && <PressGrid articles={articles} />}
          {tab === 'videos' && <VideoGrid videos={videos} />}
          {tab === 'officials' && <TweetsGrid tweets={tweets} />}
          {tab === 'policy' && (
            <PolicyTimeline articles={articles} tweets={tweets} />
          )}
        </div>
      </section>
    </>
  );
}
