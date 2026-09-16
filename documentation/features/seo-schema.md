# SEO, GEO & Schema Markup — Feature Documentation

**Feature:** On-site SEO / GEO / AEO foundations for System Heuristics  
**Live site:** https://systemheuristics.com  
**Status:** Implemented in codebase (September 2026)  
**Related playbook themes:** SEO, GEO (AI citations), AEO (answer/FAQ), Agent SEO (crawlability)

This document describes what was implemented, where it lives in the repo, how it works, how to maintain it, and what still requires off-site work (Search Console, backlinks, sitelinks timing, “green tick” reality).

---

## 1. Goals

| Goal | How this feature supports it |
|------|------------------------------|
| Rank for software / AI / healthcare / construction niches | Keyword-aware titles, descriptions, FAQ copy, ~220 keyword bank |
| Appear in AI answers (ChatGPT, Perplexity, Gemini, Claude) | `robots.txt` allows AI bots; `llms.txt`; extractable FAQ + schema |
| Earn Google sitelinks (main result + child pages) | Canonicals, nav links, WebSite + SearchAction, SiteNavigation, sitemap |
| Make pages machine-readable | JSON-LD (Organization, WebSite, FAQ, breadcrumbs, jobs, projects) |
| Keep crawl health clean | Dynamic `sitemap.xml`, robots disallow for API / discovery-call |

---

## 2. File map

| Path | Role |
|------|------|
| `src/utils/seo/siteSeo.js` | Site constants, **~220 keywords**, `buildPageMetadata()`, `absoluteUrl()` |
| `src/utils/seo/schemas.js` | JSON-LD builders (Organization, WebSite, nav, FAQ, breadcrumbs, services, JobPosting, CreativeWork) |
| `src/utils/seo/JsonLd.js` | Renders `<script type="application/ld+json">` blocks |
| `src/app/layout.js` | Root metadata + global schemas (Organization, WebSite, SiteNavigation, Services) |
| `src/app/(website)/layout.js` | Website chrome; `main#main-content` for accessibility / agents |
| `src/app/(website)/**/page.js` | Per-page metadata, canonicals, page-level JSON-LD |
| `src/app/sitemap.js` | **Dynamic** sitemap (current routes + projects + careers) |
| `public/robots.txt` | Search + AI crawler allow/deny rules |
| `public/llms.txt` | Curated machine-readable brand / niche brief for AI systems |
| `src/data/pages/home/HomeData.js` | Hero + FAQ copy (keyword-aware, feeds FAQPage schema) |
| `src/data/components/navbar/NavbarData.js` | Primary nav (includes Projects — helps sitelinks) |

> **Note:** The old static `public/sitemap.xml` was removed so Next.js serves `/sitemap.xml` from `src/app/sitemap.js` only.

---

## 3. Metadata system (`siteSeo.js`)

### 3.1 `buildPageMetadata({ title, description, path, keywords, noIndex })`

Every important page should use this helper. It sets:

- `title` / `description`
- `keywords` (defaults to full `PRIMARY_KEYWORDS` bank)
- `alternates.canonical` → absolute URL
- `robots` / `googleBot` (index/follow + snippet/image preview)
- Open Graph + Twitter cards
- Default OG image: `/images/og/system-heuristics-og.png`

### 3.2 Keyword bank (`PRIMARY_KEYWORDS`)

About **220** terms grouped by theme:

- Brand & commercial (“best software company”, “top 10 software houses”, …)
- Software house / agency
- AI automation & AI agents
- Custom software / custom solutions
- Business process & workflow automation
- CRM / sales / marketing automation
- Integrations & APIs
- Software / automation audits
- Healthcare software niche
- Construction software niche
- Platform / tech (SaaS, Next.js, etc.)
- Outcome & long-tail GEO questions
- Regional (Pakistan) variants

**How they are used**

- Root layout `metadata.keywords`
- Default for every `buildPageMetadata()` call
- Page-specific extras can be merged (e.g. home / about / contact pages)

**Important:** Meta keywords alone do **not** rank a site. Titles, content, internal links, schema, and backlinks matter more. The bank supports consistency and secondary engines / tooling.

### 3.3 Default description

```text
System Heuristics is a top software company for AI automation, custom software
solutions, healthcare and construction systems, audits, and business process automation.
```

---

## 4. Schema markup (JSON-LD)

Rendered via `JsonLd` as JSON-LD in the document (schema.org vocabulary).

### 4.1 Sitewide (root `layout.js`)

| Schema | Function | Purpose |
|--------|----------|---------|
| Organization + ProfessionalService | `organizationSchema()` | Brand entity, contacts, `knowsAbout`, social `sameAs` |
| WebSite + SearchAction | `websiteSchema()` | Site entity; SearchAction targets `/projects?industry={search_term_string}` (sitelinks / search-box eligibility) |
| SiteNavigationElement list | `siteNavigationSchema()` | Primary nav URLs for crawlers |
| Service ItemList | `serviceSchema()` | AI automation, custom software, healthcare, construction, audits |

### 4.2 Per page

| Page | Extra schema |
|------|----------------|
| `/` | `WebPage`, `BreadcrumbList`, **`FAQPage`** (from `HomeData.faq.items`) |
| `/about` | `AboutPage`, breadcrumbs |
| `/contact` | `ContactPage`, breadcrumbs |
| `/case-studies` | `WebPage`, breadcrumbs |
| `/projects` | `CollectionPage`, breadcrumbs |
| `/projects/[slug]` | `WebPage`, breadcrumbs, **`CreativeWork`** |
| `/careers` | `WebPage`, breadcrumbs |
| `/careers/[slug]` | `WebPage`, breadcrumbs, **`JobPosting`** |
| Legal pages | `WebPage`, breadcrumbs |

### 4.3 Example: FAQPage (home)

Built from live FAQ data — keep questions answer-first and factual so GEO engines can cite them.

### 4.4 Validate

After deploy:

1. [Google Rich Results Test](https://search.google.com/test/rich-results)  
2. [Schema.org Validator](https://validator.schema.org/)  
3. Google Search Console → Enhancements / rich result reports  

---

## 5. Pages with optimized metadata

| URL | Title focus (summary) |
|-----|------------------------|
| `/` | Best Software Company for AI Automation & Custom Software |
| `/about` | About — Top Software House for AI & Custom Solutions |
| `/contact` | Contact — Software Audit, AI Automation & Custom Solutions |
| `/case-studies` | Case Studies — Healthcare, Construction & AI Automation |
| `/projects` | Projects — Custom Software, AI Automations & Industry Systems |
| `/careers` | Careers — Join a Top Software House |
| `/privacy-policy` | Privacy Policy |
| `/terms-and-conditions` | Terms & Conditions |
| `/projects/[slug]` | `{Project} — Custom Software & Automation Project` |
| `/careers/[slug]` | `{Role} — Careers at a Top Software House` |
| `/discovery-call` | **noindex** (redirect to calendar) |

Each public page sets a **canonical** absolute URL.

---

## 6. Sitemap (`src/app/sitemap.js`)

Dynamic sitemap at **https://systemheuristics.com/sitemap.xml** includes:

- Core pages: `/`, `/about`, `/case-studies`, `/projects`, `/careers`, `/contact`, legal  
- Industry filters: `/projects?industry=healthcare`, `/projects?industry=construction`  
- Public project detail URLs (`!private`)  
- Active career job URLs  

Priorities: home `1.0`, core marketing `0.85–0.9`, projects/careers lower.

**After deploy:** submit this URL in Google Search Console and Bing Webmaster Tools.

---

## 7. robots.txt (`public/robots.txt`)

- Allows `/` for `*` and major search bots (Googlebot, Bingbot, …)  
- Explicitly allows AI crawlers: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, Claude-SearchBot, PerplexityBot, Google-Extended, Applebot-Extended, and others  
- **Disallows:** `/api/`, demo/test paths, `/discovery-call`  
- Declares sitemap(s) for apex and `www`

---

## 8. llms.txt (`public/llms.txt`)

Published at **https://systemheuristics.com/llms.txt**

Includes:

- One-paragraph company definition (software company / AI automation / custom solutions)  
- Preferred sources (llms, robots, sitemap)  
- Core page links + industry project filters  
- Niche keyword guidance for accurate AI citations  
- Engagement path (Start Free → Audit → Custom Build)  
- Positioning rules (don’t invent awards/case studies; not Healthcare/Construction-only)

> Major AI platforms may or may not prioritize `llms.txt`; cost is near zero and it helps agentic tooling / documentation.

---

## 9. Content & navigation (on-page SEO)

### 9.1 Home FAQ

FAQ answers updated with natural niche language (software company, AI automation, healthcare/construction, audits, custom solutions). These feed **FAQPage** schema.

### 9.2 Home hero

Opening description states System Heuristics as a software company for AI automation and custom software (answer-first for GEO/SEO).

### 9.3 Navbar

Projects link is **enabled** in `NavbarData` so Google can discover a clear set of sitelink candidates: Home, About, Case Studies, Projects, Careers, Contact.

### 9.4 Semantic main

Website layout wraps content in `<main id="main-content">` for accessibility and agent SEO.

---

## 10. Google sitelinks vs “green tick”

### Sitelinks (main site + pages underneath)

Supported by this implementation:

- Strong unique titles & descriptions  
- Canonical URLs  
- Primary navigation + SiteNavigation schema  
- WebSite + SearchAction  
- Clean sitemap  
- Internal linking from home/footer  

Sitelinks are **earned by Google over time** after indexing — not guaranteed on day one. Brand searches (`system heuristics`, `systemheuristics`) are where they usually appear first.

### Green verification tick

A green checkmark beside every SERP title (as in some screenshots) is **not** something this codebase can force. It is typically:

- A **browser extension**, or  
- A separate Google brand / Knowledge Panel signal  

Do **not** expect a meta tag or schema field to add a green tick to organic results.

---

## 11. How to maintain / extend

### Add keywords

Edit `PRIMARY_KEYWORDS` in `src/utils/seo/siteSeo.js`. Keep terms relevant; avoid stuffing unrelated phrases.

### Add schema to a new page

1. Import `buildPageMetadata`, `JsonLd`, and needed schema helpers.  
2. Export `metadata = buildPageMetadata({ ... })`.  
3. Render `<JsonLd data={[ webPageSchema(...), breadcrumbSchema([...]), ... ]} />`.  

### Add a new public URL to the sitemap

Update `src/app/sitemap.js` static routes (or ensure project/career data drives it automatically).

### Change FAQ schema

Edit `HomeData.faq.items` — home page schema reads this automatically.

### Validate after changes

```bash
npm run build
```

Confirm `/sitemap.xml` is listed in the build output, then retest Rich Results after deploy.

---

## 12. Off-site checklist (not in code)

These are required for full SEO/GEO results and are **outside** this feature’s code:

1. Deploy to Vercel (production domain).  
2. Verify property in **Google Search Console** + **Bing Webmaster Tools**.  
3. Submit `https://systemheuristics.com/sitemap.xml`.  
4. Request indexing for key URLs.  
5. Set up **GA4**.  
6. Build topical content / backlinks over time (pillar pages, PR, partnerships).  
7. Monthly: rankings, GSC queries, AI citation spot-checks (ChatGPT / Perplexity / Gemini / Claude).  
8. Optional: Google Business Profile for local signals.  

---

## 13. Quick reference — code entry points

```text
src/utils/seo/siteSeo.js      → keywords + buildPageMetadata
src/utils/seo/schemas.js      → all JSON-LD builders
src/utils/seo/JsonLd.js       → script tag renderer
src/app/layout.js             → global metadata + global schema
src/app/sitemap.js            → dynamic sitemap
public/robots.txt             → crawl policy
public/llms.txt               → AI brief
src/app/(website)/page.js     → home metadata + FAQ schema
```

---

## 14. Related docs

- `documentation/complete-project/complete-documentation.md` — full project ops guide  
- `AGENTS.md` — coding conventions for agents  
- Playbook sections covered in-repo: on-page SEO, technical crawlability, schema, robots/llms, agent-friendly HTML foundations  

**End of SEO & schema feature documentation.**
