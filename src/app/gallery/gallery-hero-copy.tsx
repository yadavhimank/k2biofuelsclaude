'use client';

import { motion } from 'motion/react';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Em } from '@/components/ui/em';

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 26, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
};

interface Props {
  kickers: string[];
}

export function GalleryHeroCopy({ kickers }: Props) {
  return (
    <>
      <motion.div
        className="k2-section-pad"
        initial="hidden"
        animate="show"
        variants={container}
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          color: 'var(--k2-on-ink)',
          paddingTop: 160,
        }}
      >
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <motion.div variants={item}>
            <Eyebrow accent="#FFB37A" style={{ marginBottom: 22 }}>
              — Media gallery · 2026
            </Eyebrow>
          </motion.div>
          <motion.h1
            variants={item}
            className="k2-h1"
            style={{
              lineHeight: 1.04,
              letterSpacing: '-0.03em',
              fontWeight: 500,
              margin: '0 0 28px',
              maxWidth: 860,
            }}
          >
            K2 Biofuels, <Em color="#FFB37A">in pictures.</Em>
          </motion.h1>
          <motion.p
            variants={item}
            className="k2-body-lg"
            style={{
              lineHeight: 1.6,
              maxWidth: 640,
              color: 'rgba(250,250,247,0.90)',
              margin: 0,
              textShadow: '0 1px 12px rgba(0,0,0,0.8)',
            }}
          >
            Plant operations, inauguration milestones, products in the field,
            and the farms behind our feedstock.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className="k2-section-pad"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          color: 'var(--k2-on-ink)',
          paddingBottom: 40,
        }}
      >
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div
            className="k2-hero-kicker"
            style={{
              paddingTop: 20,
              borderTop: '1px solid rgba(250,250,247,0.15)',
              color: 'rgba(250,250,247,0.58)',
            }}
          >
            {kickers.map((k, i) => (
              <span key={i}>● {k}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
