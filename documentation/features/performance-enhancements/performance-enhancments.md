# Performance, Accessibility, Best Practices & Agentic Browsing Enhancements

**Feature:** Lighthouse audit remediation for System Heuristics  
**Target scores:** Performance 100 · Accessibility 100 · Best Practices 100 · SEO 100 · Agentic Browsing 3/3  
**Implemented:** September 2026  
**Related audit:** System Heuristics Website Audit Report (Lighthouse)

This document describes the code changes made to address Lighthouse findings for Performance, Accessibility, Best Practices, SEO foundations, and Agentic Browsing.

---

## 1. Goals

| Category | Audit issues addressed |
|----------|------------------------|
| **Performance** | LCP image discovery, image weight, unused JS/CSS, non-composited animations, floating-CTA CLS |
| **Accessibility** | Color contrast, ARIA on FAQ/reviews, focusable elements inside `aria-hidden`, placeholders |
| **Best Practices** | Security headers (HSTS, XFO, COOP, nosniff, Permissions-Policy) |
| **SEO** | Already strong; schema/metadata/sitemap remain in place (see `seo-schema` docs) |
| **Agentic Browsing** | Well-formed accessibility tree + standards-compliant `llms.txt` with Markdown links |

---

## 2. File map (what changed)

| Path | Change |
|------|--------|
| `src/app/variables.js` | Accessible primary/secondary tokens; `--color-primary-bright` |
| `src/app/globals.css` | `.sr-only`; Ant Design placeholder contrast |
| `src/app/layout.js` | Removed unused import; keeps SEO/schema |
| `src/app/(website)/layout.js` | Skip-to-content link |
| `next.config.mjs` | Image formats/qualities, `optimizePackageImports`, security headers |
| `public/llms.txt` | H1 + Markdown links (Agentic / GEO) |
| `src/components/website/home/HomeMain.js` | Dynamic imports for below-fold sections |
| `src/components/website/home/home-hero/HomeHero.js` | LCP: `fetchPriority`, quality, sizes |
| `src/components/website/home/home-hero/home-hero.module.css` | Transform/opacity-only pulse animations |
| `src/components/website/home/home-faq/HomeFaq.js` | Custom accessible accordion (no Ant Collapse) |
| `src/components/website/home/home-faq/home-faq.module.css` | Accordion styles |
| `src/components/website/home/home-reviews/HomeReviews.js` | ARIA/`inert`/active-only LinkedIn links |
| `src/components/website/home/home-reviews/home-reviews.module.css` | Composited transitions; accessible stars |
| `src/utils/buttons/buttons.module.css` | Primary button shadow uses accessible primary |
| `src/utils/floating-cta/floating-cta.module.css` | Fixed icon box to reduce CLS; accessible colors |

---

## 3. Accessibility fixes

### 3.1 Color contrast (WCAG AA)

**Problem:** Brand cyan `#00b3ff` and muted gray `#8f9eae` failed contrast on white for text, nav active links, eyebrows, indexes, and primary buttons with white labels.

**Solution** (`variables.js`):

| Token | Old | New | Use |
|-------|-----|-----|-----|
| `--color-primary` | `#00b3ff` | `#007099` | Buttons, text accents, nav active (≥4.5:1 with white) |
| `--color-primary-hover` | `#0092d0` | `#005f82` | Hover |
| `--color-primary-bright` | — | `#00b3ff` | Decorative glows on dark UI |
| `--color-secondary` | `#8f9eae` | `#5a6b7c` | Body muted text on light |

Ant Design `colorPrimary` inherits the accessible primary via `ConfigProvider`.

### 3.2 FAQ accordion ARIA

**Problem:** Ant Design `Collapse` failed “ARIA roles must contain required children,” and pulled large unused CSS.

**Solution:** Replaced with a custom accordion:

- `<button aria-expanded aria-controls>`
- Panel `role="region"` + `aria-labelledby`
- Accordion behavior (one open panel)
- No Ant Collapse dependency on the home FAQ

### 3.3 Reviews carousel ARIA

**Problem:**

- Cards with `aria-hidden="true"` still contained focusable LinkedIn links
- Star rating used `aria-label` on a generic `div` (prohibited / poorly exposed)

**Solution:**

- Inactive cards: `aria-hidden` + `inert` (not focusable)
- LinkedIn link rendered **only** on the active card
- Stars: visually hidden text (`srOnly`) + decorative SVGs with `aria-hidden`

### 3.4 Form placeholders

**Problem:** Ant Select / input placeholders failed contrast.

**Solution:** Global overrides in `globals.css` force placeholder color `#5a6b7c` at full opacity.

### 3.5 Skip link

**Solution:** “Skip to main content” link in `(website)/layout.js` targeting `#main-content`.

---

## 4. Agentic Browsing fixes (1/3 → 3/3)

Agentic audits re-used the same accessibility tree failures **plus** `llms.txt` format.

### 4.1 Accessibility tree

Fixed by FAQ + reviews changes above (Collapse children, `aria-hidden` + focusable descendants, stars ARIA).

### 4.2 `llms.txt` recommendations

**Problem:** Lighthouse reported: *“File does not appear to contain any links.”*  
Plain `Home: https://…` lines are **not** counted as Markdown links.

**Solution:** Rewrite `public/llms.txt` to include:

- An `#` H1 heading
- Proper Markdown links: `[Home](https://systemheuristics.com/)`
- Linked sections for core pages, industry filters, contact, preferred sources

Public URL: https://systemheuristics.com/llms.txt

---

## 5. Performance fixes

### 5.1 LCP hero image

**Problem:** LCP element `img.home-hero-module__…mediaImage` needed high fetch priority and smaller payload.

**Solution** (`HomeHero.js`):

- First slide: `priority`, `fetchPriority="high"`, `loading="eager"`, `quality={72}`
- Later slides: `loading="lazy"`, `quality={65}`
- Tighter `sizes`: `(max-width: 900px) 100vw, 52vw`

### 5.2 Image pipeline (`next.config.mjs`)

- Prefer `image/avif` and `image/webp`
- Explicit `qualities` and responsive `deviceSizes` / `imageSizes`

### 5.3 Reduce unused JS/CSS on first paint

**Problem:** Large Ant Design / home chunks unused above the fold.

**Solution** (`HomeMain.js`):

Dynamic `import()` for below-fold sections:

- `HomeStats`, `HomeReviews`, `HomeClients`, `HomeFaq`, `HomeContact`, `HomeCta`

Hero + Problems + Plans + AI Agents stay eagerly loaded.

Also: `experimental.optimizePackageImports: ["antd", "@ant-design/icons"]`.

### 5.4 Non-composited animations

**Problem:** Animating `box-shadow` / border colors caused jank and CLS warnings.

**Solution:**

- Hero CTA pulse / live dot: **transform + opacity only**
- Reviews cards: transition only `transform` and `opacity`

### 5.5 Floating CTA CLS

**Problem:** Icon span contributed layout shift.

**Solution:** Fixed `64×64` (56×56 mobile) flex box with min-width/height; hover uses `scale` instead of changing shadow size alone.

### 5.6 What code cannot fully fix

| Insight | Notes |
|---------|--------|
| Document / TTFB latency (~1.7s) | Hosting, region, cold start, DNS — tune on Vercel (region, caching), not in React alone |
| Redirect chains | Prefer apex↔www configured once in Vercel Domains |
| Legacy JS polyfills | Mostly framework output; browserslist can be tightened later if needed |

---

## 6. Best Practices — security headers

Configured in `next.config.mjs` → `headers()` for `/:path*`:

| Header | Value |
|--------|--------|
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `Cross-Origin-Opener-Policy` | `same-origin` |
| `poweredByHeader` | disabled |

Also: `compress: true`.

> Full CSP / Trusted Types are stricter and can break third-party scripts; not enabled by default. Add incrementally if required.

---

## 7. SEO (unchanged foundations)

Already implemented earlier (see `documentation/features/seo-schema/`):

- Titles, descriptions, canonicals, keywords bank  
- JSON-LD (Organization, WebSite, FAQ, breadcrumbs, etc.)  
- Dynamic `sitemap.js`, `robots.txt`, Google site verification  

Lighthouse SEO category was already passing automated checks; keep validating structured data in Rich Results Test after deploy.

---

## 8. How to verify

1. Deploy to production (Vercel).  
2. Open an **incognito** window → DevTools → **Lighthouse** (Mobile + Desktop).  
3. Confirm categories: Performance, Accessibility, Best Practices, SEO, Agentic Browsing.  
4. Spot-check:
   - https://systemheuristics.com/llms.txt (Markdown links visible)
   - FAQ keyboard expand/collapse
   - Reviews: only active card LinkedIn is tabbable
   - Hero LCP image has high priority in Network panel  
5. Optional: [Rich Results Test](https://search.google.com/test/rich-results), axe DevTools.

```bash
npm run build
npm run start
# then Lighthouse against http://localhost:3000
```

---

## 9. Maintenance notes

- Prefer **accessible primary** for text/buttons; use **primary-bright** only for decorative accents on dark surfaces.  
- Do not reintroduce Ant `Collapse` on FAQ without fixing ARIA.  
- Keep `llms.txt` links in `[label](url)` form or Agentic audit may fail again.  
- When adding carousels: never put focusable controls inside `aria-hidden` nodes — use `inert` or omit controls.  
- New below-fold home sections should usually be `dynamic()` imported.

---

## 10. Related docs

- `documentation/features/seo-schema/` — SEO / schema / GEO documentation  
- `documentation/complete-project/complete-documentation.md` — full project guide  
- `AGENTS.md` — coding conventions  

**End of performance & accessibility enhancements documentation.**
