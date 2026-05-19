/**
 * Viewport audit script.
 * Takes screenshots and runs checks for each page × viewport combo.
 * Outputs a JSON report alongside the screenshots.
 */
import { chromium } from 'playwright';
import { writeFileSync } from 'fs';

const BASE   = 'http://localhost:3099';
const PAGES  = ['/', '/products', '/about', '/contact'];
const VIEWS  = [
  { name: '375', width: 375,  height: 812  },
  { name: '768', width: 768,  height: 1024 },
  { name: '1280', width: 1280, height: 900 },
];

const issues = [];

function flag(page, view, msg) {
  issues.push({ page, view, msg });
  console.warn(`  ⚠  [${view}] ${msg}`);
}

const browser = await chromium.launch();

for (const pageRoute of PAGES) {
  console.log(`\n=== ${pageRoute} ===`);

  for (const vp of VIEWS) {
    const ctx  = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await ctx.newPage();

    await page.goto(`${BASE}${pageRoute}`, { waitUntil: 'networkidle', timeout: 20000 });
    await page.waitForTimeout(300);

    const slug = pageRoute === '/' ? 'home' : pageRoute.slice(1);
    const file = `/Users/himankyadav/Desktop/k2BiofuelsClaude/screenshots/${slug}_${vp.name}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log(`  📸 ${file}`);

    // ── 1. Horizontal scroll ──────────────────────────────────────────────
    const hScroll = await page.evaluate(() => {
      // intentional scrollers (sticky nav, products nav) excluded
      const scrollers = ['k2-products-nav-scroll', 'k2-table-scroll-mobile'];
      const excess = document.documentElement.scrollWidth - document.documentElement.clientWidth;
      return excess;
    });
    if (hScroll > 2) flag(pageRoute, vp.name, `Horizontal overflow on <body>: ${hScroll}px`);

    // ── 2. Tap targets ────────────────────────────────────────────────────
    if (vp.width <= 768) {
      const smallTargets = await page.evaluate(() => {
        const results = [];
        const els = document.querySelectorAll('a, button');
        for (const el of els) {
          // skip hidden elements
          const style = getComputedStyle(el);
          if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') continue;
          const rect = el.getBoundingClientRect();
          if (rect.width === 0 && rect.height === 0) continue; // off-screen / display:none
          if (rect.height > 0 && rect.height < 40) {
            // only report if visually rendered
            const text = (el.textContent || '').trim().slice(0, 60);
            results.push(`"${text}" h=${Math.round(rect.height)}px`);
          }
        }
        return results.slice(0, 10); // cap report
      });
      if (smallTargets.length) {
        flag(pageRoute, vp.name, `Small tap targets (<40px): ${smallTargets.join(' | ')}`);
      }
    }

    // ── 3. Font sizes ─────────────────────────────────────────────────────
    const tinyText = await page.evaluate(() => {
      const results = [];
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const seen = new Set();
      let node;
      while ((node = walker.nextNode())) {
        const el = node.parentElement;
        if (!el) continue;
        const style = getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden') continue;
        const size = parseFloat(style.fontSize);
        // body text < 13px; caption text < 11px treated as absolute minimum
        if (size < 11 && node.textContent.trim().length > 3) {
          const snippet = node.textContent.trim().slice(0, 40);
          if (!seen.has(snippet)) {
            seen.add(snippet);
            results.push(`"${snippet}" ${size}px`);
          }
        }
      }
      return results.slice(0, 8);
    });
    if (tinyText.length) {
      flag(pageRoute, vp.name, `Text below 11px: ${tinyText.join(' | ')}`);
    }

    // ── 4. Images pushing content sideways ───────────────────────────────
    const wideImgs = await page.evaluate((vpWidth) => {
      const imgs = document.querySelectorAll('img');
      const bad = [];
      for (const img of imgs) {
        const rect = img.getBoundingClientRect();
        if (rect.right > vpWidth + 2) bad.push(`src=${img.src.slice(-40)} right=${Math.round(rect.right)}`);
      }
      return bad;
    }, vp.width);
    if (wideImgs.length) flag(pageRoute, vp.name, `Images overflowing viewport: ${wideImgs.join(' | ')}`);

    // ── 5. Hamburger menu (mobile only) ──────────────────────────────────
    if (vp.width <= 768 && pageRoute === '/') {
      const burgerVisible = await page.evaluate(() => {
        const b = document.querySelector('.k2-nav-burger');
        if (!b) return false;
        const s = getComputedStyle(b);
        return s.display !== 'none';
      });
      if (!burgerVisible) {
        flag(pageRoute, vp.name, 'Hamburger button not visible on mobile');
      } else {
        // click it and check menu appears
        await page.click('.k2-nav-burger');
        await page.waitForTimeout(150);
        const menuVisible = await page.evaluate(() => {
          const m = document.querySelector('.k2-nav-mobile');
          return !!m;
        });
        if (!menuVisible) flag(pageRoute, vp.name, 'Mobile menu did not appear after burger click');
        // close
        await page.click('.k2-nav-burger');
      }
    }

    // ── 6. Contact form ───────────────────────────────────────────────────
    if (pageRoute === '/contact') {
      // check form-grid stacks on mobile
      if (vp.width <= 639) {
        const formGridCols = await page.evaluate(() => {
          const g = document.querySelector('.k2-form-grid');
          if (!g) return null;
          return getComputedStyle(g).gridTemplateColumns;
        });
        // on mobile should be single column — value won't be "repeat(2,…)"
        if (formGridCols && formGridCols.includes(' ') && !formGridCols.match(/^\d+px$/)) {
          // two separate column values = still 2-col
          const cols = formGridCols.trim().split(/\s+/);
          if (cols.length > 1 && cols.length !== 1) {
            flag(pageRoute, vp.name, `Contact form still 2-col on mobile: "${formGridCols}"`);
          }
        }
        // submit button — check width vs form width
        const btnWider = await page.evaluate(() => {
          const btn = document.querySelector('button[type="submit"]');
          if (!btn) return false;
          const form = document.querySelector('form');
          if (!form) return false;
          const bRect = btn.getBoundingClientRect();
          const fRect = form.getBoundingClientRect();
          // report if button is much narrower than form (not full-width)
          return bRect.width < fRect.width * 0.5;
        });
        if (btnWider) flag(pageRoute, vp.name, 'Submit button not full-width on mobile');
      }
    }

    // ── 7. Applications matrix + careers table ────────────────────────────
    if (pageRoute === '/products' && vp.width <= 767) {
      const matrixCardCheck = await page.evaluate(() => {
        const rows = document.querySelectorAll('.k2-apps-matrix-row');
        if (!rows.length) return 'no .k2-apps-matrix-row elements found';
        const first = rows[0];
        const style = getComputedStyle(first);
        return style.display; // should be 'flex' on mobile
      });
      if (matrixCardCheck !== 'flex') {
        flag(pageRoute, vp.name, `Applications matrix rows display="${matrixCardCheck}" (expected flex)`);
      }
    }
    if (pageRoute === '/about') {
      // no table check needed on about
    }

    await ctx.close();
  }
}

await browser.close();

// ── Write report ──────────────────────────────────────────────────────────
const reportPath = '/Users/himankyadav/Desktop/k2BiofuelsClaude/screenshots/report.json';
writeFileSync(reportPath, JSON.stringify({ timestamp: new Date().toISOString(), issues }, null, 2));

console.log(`\n${'─'.repeat(60)}`);
if (issues.length === 0) {
  console.log('✅  No issues found across all pages and viewports.');
} else {
  console.log(`❌  ${issues.length} issue(s) found:\n`);
  for (const i of issues) {
    console.log(`  [${i.page}] [${i.view}px] ${i.msg}`);
  }
}
console.log(`Report: ${reportPath}`);
console.log(`Screenshots: /Users/himankyadav/Desktop/k2BiofuelsClaude/screenshots/`);
