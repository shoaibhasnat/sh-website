# System Heuristics Website — Complete Project Documentation

**Product:** System Heuristics marketing & company website  
**Live domain:** https://systemheuristics.com  
**Stack:** Next.js 16 (App Router) · React 19 · Ant Design 6 · CSS Modules · Nodemailer  
**Deploy:** Vercel  
**Last documented:** September 2026

This document explains how the website works, how to run it locally, how to edit content and code, every major page and slug, API and email flows, SEO files, Git remotes, and how to deploy on Vercel with a custom domain.

---

## Table of contents

1. [Overview](#1-overview)
2. [Requirements](#2-requirements)
3. [How to run locally](#3-how-to-run-locally)
4. [Environment variables](#4-environment-variables)
5. [Architecture & folder structure](#5-architecture--folder-structure)
6. [How to operate & how to code](#6-how-to-operate--how-to-code)
7. [Design system](#7-design-system)
8. [Site features (by page)](#8-site-features-by-page)
9. [Routes, pages & slugs](#9-routes-pages--slugs)
10. [Projects](#10-projects)
11. [Case studies](#11-case-studies)
12. [Careers](#12-careers)
13. [API routes](#13-api-routes)
14. [Email sending logic](#14-email-sending-logic)
15. [Shared UI (navbar, footer, CTA, buttons)](#15-shared-ui-navbar-footer-cta-buttons)
16. [SEO & public files (robots, sitemap, llms.txt, favicons)](#16-seo--public-files-robots-sitemap-llmstxt-favicons)
17. [GitHub — remotes & how to push](#17-github--remotes--how-to-push)
18. [Vercel deploy & custom domain (DNS)](#18-vercel-deploy--custom-domain-dns)
19. [Troubleshooting](#19-troubleshooting)
20. [Quick reference](#20-quick-reference)

---

## 1. Overview

System Heuristics is a technology consultancy site focused on:

- Sales systems and CRM automation  
- Marketing automation and customer journeys  
- AI agents (sales, marketing, support, assistants)  
- Business process automation and integrations  
- Custom software (dashboards, portals, internal apps, SaaS, APIs)

The site is **industry-neutral**, with deeper published experience in **Healthcare** and **Construction**.

**Engagement path (as published on the site):**

1. **Start Free** — share the business problem via the contact form  
2. **The Audit** — discovery and implementation roadmap  
3. **Custom Build** — design and build the solution  

**Book a consultation:** https://systemheuristics.com/discovery-call  

**Primary contact:** info@systemheuristics.com · **HR:** hr@systemheuristics.com  

---

## 2. Requirements

### Software

| Requirement | Notes |
|-------------|--------|
| **Node.js** | LTS recommended (18+ or 20+). No `engines` field is locked in `package.json`. |
| **npm** | Used with `package-lock.json` (npm install). |
| **Git** | For cloning and pushing to GitHub. |
| **Code editor** | Any (Cursor / VS Code recommended). |

### Runtime dependencies (from `package.json`)

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | `16.3.2` | Framework (App Router) |
| `react` / `react-dom` | `19.2.8` | UI |
| `antd` | `^6.6.1` | Forms, Collapse, Drawer, icons ecosystem |
| `@ant-design/icons` | `^6.3.2` | Icons |
| `@ant-design/nextjs-registry` | `^1.3.0` | Ant Design + Next.js App Router registry |
| `nodemailer` | `^9.0.5` | SMTP email for contact & careers |

### Dev dependencies

| Package | Purpose |
|---------|---------|
| `@types/nodemailer` | Types for Nodemailer |

### Language & tooling notes

- Application code is **JavaScript** (not TypeScript).  
- Path alias: `@/*` → `./src/*` (`jsconfig.json`).  
- This is **Next.js 16** — APIs may differ from older Next.js docs. Prefer `node_modules/next/dist/docs/` when unsure (`AGENTS.md`).

### Accounts / services needed for full production

| Service | Why |
|---------|-----|
| **GitHub** | Source control (one or more remotes) |
| **Vercel** | Hosting / CI deploys from Git |
| **SMTP mailbox** (e.g. Gmail App Password) | Contact + careers emails |
| **Domain registrar** | Custom domain + DNS records pointing to Vercel |
| **Booking calendar URL** | Discovery-call redirect & contact auto-reply CTA |

---

## 3. How to run locally

### Clone & install

```bash
git clone https://github.com/HuzaifaQaiser/system-heuristics.git
cd system-heuristics-website-v3   # or the folder name after clone
npm install
```

### Configure environment

1. Copy or create `.env.local` in the project root (never commit this file).  
2. Fill the variables listed in [§4 Environment variables](#4-environment-variables).  
3. Without SMTP vars, the **UI still runs**; contact/careers API calls return `503` until mail is configured.

### Start development server

```bash
npm run dev
```

Open **http://localhost:3000**

### Production build locally

```bash
npm run build
npm run start
```

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `next dev` | Hot-reload development |
| `build` | `next build` | Production build |
| `start` | `next start` | Serve the production build |

---

## 4. Environment variables

Create **`.env.local`** in the repo root. Do **not** commit secrets.

### SMTP (required for emails)

| Variable | Purpose |
|----------|---------|
| `SMTP_HOST` | SMTP server hostname (e.g. `smtp.gmail.com`) |
| `SMTP_PORT` | Port (e.g. `465` or `587`) |
| `SMTP_SECURE` | `"true"` for TLS (typically port 465) |
| `SMTP_USER` | SMTP username / from mailbox |
| `SMTP_APP_PASSWORD` | SMTP password or app password |

### Contact form

| Variable | Purpose |
|----------|---------|
| `CONTACT_RECEIVER_EMAIL` | Inbox that receives new leads |
| `CONTACT_FROM_NAME` | Display name on outbound mail |

### Careers applications

| Variable | Purpose |
|----------|---------|
| `CAREERS_RECEIVER_EMAIL` | Inbox that receives applications + resumes |
| `CAREERS_FROM_NAME` | Display name on careers outbound mail |

### Booking

| Variable | Purpose |
|----------|---------|
| `BOOKING_CALENDAR_LINK` | Used by `/discovery-call` redirect and contact auto-reply CTA |

If `BOOKING_CALENDAR_LINK` is missing, code falls back to a Google Calendar link defined in the API / discovery-call page.

### Vercel

Add the **same variable names** under the Vercel project → **Settings → Environment Variables** (Production / Preview as needed), then redeploy.

---

## 5. Architecture & folder structure

### High-level architecture

```
Browser
  → Next.js App Router (src/app)
      → Page composers (src/components/pages)
          → Section UI (src/components/website)
              ← Copy/data (src/data)
      → API routes (src/app/api/*)
          → Nodemailer + email templates (src/utils/email*)
  → Static files (public/)
```

**Principles:**

- Routes stay **thin** (metadata + import a page composer).  
- **Copy lives in data files**, not hardcoded inside section components when possible.  
- **CSS Modules** sit next to components.  
- Shared chrome (navbar, footer, floating CTA) wraps website pages via `(website)/layout.js`.

### Top-level tree

```
system-heuristics-website-v3/
├── src/
│   ├── app/                      # App Router: layouts, pages, APIs, globals, tokens
│   ├── components/
│   │   ├── pages/                # Page-level composers (Home, About, …)
│   │   ├── website/              # Section components by area
│   │   └── ui/                   # Small shared UI pieces
│   ├── data/
│   │   ├── pages/                # Per-page content (edit text here first)
│   │   ├── components/           # Navbar / footer link data
│   │   └── not-found/
│   └── utils/
│       ├── navbar/
│       ├── footer/
│       ├── buttons/
│       ├── floating-cta/
│       ├── email/
│       ├── email-templates/
│       ├── Constants.js          # Company name, site URL, contacts, socials
│       └── CompanyContacts.js
├── public/                       # Images, favicons, robots.txt, sitemap.xml, llms.txt
├── documentation/                # Project documentation (this file)
├── scripts/                      # Helpers (e.g. email logo generation)
├── AGENTS.md                     # Agent / AI coding guide
├── CLAUDE.md                     # Claude-oriented guide (references AGENTS.md)
├── package.json
├── jsconfig.json
├── next.config.mjs
└── .env.local                    # Local secrets (gitignored)
```

### `src/app` routes (conceptual)

```
src/app/
├── layout.js                     # Root layout: fonts, Ant Design, metadata, CSS vars
├── globals.css
├── variables.js                  # Design tokens
├── (website)/                    # Route group — URLs do NOT include "(website)"
│   ├── layout.js                 # Navbar + main + Footer + FloatingCta
│   ├── page.js                   # Home → /
│   ├── home/page.js              # Redirect → /
│   ├── about/
│   ├── contact/
│   ├── careers/ + [slug]/
│   ├── case-studies/ + [id]/
│   ├── projects/ + [slug]/
│   ├── privacy-policy/
│   └── terms-and-conditions/
├── discovery-call/page.js        # External booking redirect (noindex)
└── api/
    ├── contact/route.js
    └── careers/apply/route.js
```

---

## 6. How to operate & how to code

### Day-to-day content edits (non-developers)

| What to change | Where |
|----------------|--------|
| Home headlines, stats, FAQ, agents copy | `src/data/pages/home/HomeData.js` |
| About copy | `src/data/pages/about/AboutData.js` |
| Contact copy | `src/data/pages/contact/ContactData.js` |
| Careers listing / process copy | `src/data/pages/careers/` |
| Job postings (titles, slugs, descriptions) | `src/data/pages/careers/CareersJobsData.js` |
| Case studies marketing sections | `src/data/pages/case-studies/CaseStudiesData.js` |
| Portfolio projects | `src/data/pages/projects/PortfolioData.js` (+ helpers in `ProjectsData.js`) |
| Legal documents | `src/data/pages/legal/LegalData.js` |
| Navbar / footer links | `src/data/components/navbar/NavbarData.js`, `…/footer/FooterData.js` |
| Company email, phone, socials, site URL | `src/utils/Constants.js` |

After editing data, refresh the browser (`npm run dev`). For production, commit, push, and let Vercel redeploy.

### Coding conventions

1. **Prefer editing `src/data` for text**; prefer `src/components/website` for layout/UI behavior.  
2. Keep `src/app/**/page.js` thin: metadata + export a page composer.  
3. Style with **CSS Modules** (`Component.module.css`). Avoid new global CSS unless tokens/globals truly need it.  
4. Use **`"use client"`** only when required (hooks, IntersectionObserver, Ant Form/Collapse, interactive navbar).  
5. Images: `next/image`; store files under `public/`. When replacing an image with the same visual, use a **new filename** so caches bust.  
6. Match existing section patterns (shared modules like `home-shared.module.css`, about/contact shared CSS).  
7. Do not invent a new visual language unless explicitly requested.  
8. Do not commit secrets or `.env.local`.  
9. Confirm **which Git remote and branch** before pushing (see §17).

### Adding a new marketing section on Home (example)

1. Add copy to `HomeData.js`.  
2. Create `src/components/website/home/home-xyz/HomeXyz.js` + `home-xyz.module.css`.  
3. Import and mount it in `HomeMain` (under `src/components/pages/home` or the home main file used by the page).  
4. Keep mobile styles in the same CSS module (`@media` breakpoints consistent with siblings).

### Adding a new career job

1. Add an object to `CareersJobsData.js` with a unique `slug`, title, `active: true`, and content fields used by the detail page.  
2. Route `/careers/[slug]` picks it up via `generateStaticParams` / lookup.  
3. Inactive jobs (`active: false`) should stay out of public listings if the listing filters on `active`.

### Adding a new public project

1. Add a project object to `PortfolioData.js`.  
2. Slug is derived via `slugify(projectName)` in `ProjectsData.js`.  
3. Set `private: true` to hide from the public listing but still allow a direct detail URL if static params include private projects.  
4. Set industry tags so `/projects?industry=healthcare|construction` filters work.

---

## 7. Design system

Tokens are defined in `src/app/variables.js` and injected as CSS variables on `:root`.

### Brand colors

| Token | Value | Role |
|-------|--------|------|
| Primary | `#00b3ff` | CTAs, accents, highlights |
| Primary hover | `#0092d0` | Hover state |
| Primary light | `#daedff` | Soft backgrounds |
| Dark | `#001830` | Deep navy (heroes, dark sections) |
| Text | `#00213a` | Body text |
| Secondary | `#8f9eae` | Muted / supporting text |

### Typography

| Role | Font |
|------|------|
| Primary UI | **Quicksand** (loaded via `next/font/google` in root layout) |
| Secondary | Arial |
| Tertiary | Times New Roman |

Weights used: 400–700. Heading and body size scales live in `variables.js`.

### Layout tokens

- Card / control radius: `8px` (`--radius`)  
- Pill radius: `100px`  
- Shared section padding patterns live in page shared CSS modules  

Reuse existing spacing and motion; prefer subtle transitions over heavy effects.

---

## 8. Site features (by page)

### Home — `/`

| Feature / section | Description |
|-------------------|-------------|
| Hero | Brand-forward hero, CTAs, proof points; responsive media treatment |
| Problems / What We Solve | Problem framing cards |
| Plans | Engagement / plan steps |
| AI Agents | Niche agent cards with images |
| Stats | **Animated count-up** when section enters viewport |
| Reviews | Testimonials UI (client interaction) |
| Clients | Client logos / links |
| FAQ | Ant Design **Collapse** accordion |
| Contact embed | Shared contact form → `POST /api/contact` |
| Closing CTA | Final conversion block |
| Floating CTA | Sitewide FAB; **peek animation on home** → `/discovery-call` |

### About — `/about`

| Feature / section | Description |
|-------------------|-------------|
| Hero | About hero (client interactions as implemented) |
| Capabilities | What the company delivers |
| Principles | Principles stage + imagery |
| Process | Process steps with **auto-cycling highlight** |
| Mission | Mission statement block |

> Some About data/components (e.g. philosophy, industries, CTA) may exist in the codebase but not all are mounted in the current `AboutMain`. Prefer the mounted tree as source of truth for live UI.

### Contact — `/contact`

| Feature / section | Description |
|-------------------|-------------|
| Hero | Intro + scroll-to-form behavior |
| Contact form | Ant Design form → `POST /api/contact` |
| Plans | Reuses home plans |
| Challenges | Challenge content |
| CTA | Scrolls back to form |

### Careers — `/careers` and `/careers/[slug]`

| Feature | Description |
|---------|-------------|
| Jobs list | Open roles with category filtering |
| Job detail | Static content per slug |
| Application form | Multipart form + resume upload → `POST /api/careers/apply` |
| Process | Hiring process section |
| CTA | Conversion to apply / open roles |

### Case studies — `/case-studies`

Marketing page with hero, industry categories (links into projects filters), approach, challenges, outcomes, CTA.  
**Per-study detail pages are not fully data-backed yet** (see §11).

### Projects — `/projects` and `/projects/[slug]`

| Feature | Description |
|---------|-------------|
| Filters | All / Healthcare / Construction (`?industry=`) |
| Featured + grid | Public projects only |
| Detail page | Hero, overview, challenge, solution, features, team, testimonials, FAQs, CTA |

### Legal

| Path | Content |
|------|---------|
| `/privacy-policy` | Privacy policy (`LegalDocument`) |
| `/terms-and-conditions` | Terms (`LegalDocument`) |

### Discovery call — `/discovery-call`

Server-side **redirect** to the booking calendar. Marked **noindex**. Disallowed in `robots.txt`.

---

## 9. Routes, pages & slugs

Route group `(website)` does **not** appear in the URL.

### Static routes

| URL | File | Behavior |
|-----|------|----------|
| `/` | `src/app/(website)/page.js` | Home |
| `/home` | `…/home/page.js` | Redirect → `/` |
| `/about` | `…/about/page.js` | About |
| `/contact` | `…/contact/page.js` | Contact |
| `/careers` | `…/careers/page.js` | Careers listing |
| `/case-studies` | `…/case-studies/page.js` | Case studies marketing |
| `/projects` | `…/projects/page.js` | Projects listing (`?industry=` supported) |
| `/privacy-policy` | `…/privacy-policy/page.js` | Privacy |
| `/terms-and-conditions` | `…/terms-and-conditions/page.js` | Terms |
| `/discovery-call` | `src/app/discovery-call/page.js` | External booking redirect |

### Dynamic routes

| Pattern | File | Notes |
|---------|------|-------|
| `/careers/[slug]` | `careers/[slug]/page.js` | Real slugs from careers data |
| `/projects/[slug]` | `projects/[slug]/page.js` | Slugs from portfolio (`slugify`) |
| `/case-studies/[id]` | `case-studies/[id]/page.js` | Placeholder stub — no full case-study IDs in data yet |

### Industry query params (projects)

- `/projects`  
- `/projects?industry=healthcare`  
- `/projects?industry=construction`  

---

## 10. Projects

Data: `src/data/pages/projects/PortfolioData.js`  
Helpers / industries / slugify: `src/data/pages/projects/ProjectsData.js`

### Public project slugs (examples from portfolio)

| Slug | Name | Featured (typical) |
|------|------|--------------------|
| `atara` | ATARA | yes |
| `aidn` | AIDN | yes |
| `one5-health` | One5 Health | yes |
| `drexel-construction-management` | Drexel Construction Management | yes |
| `ichiban-parts` | Ichiban Parts | |
| `my-digital-self-career-coaching-agency` | My Digital Self Career Coaching Agency | |
| `bayu-lestari-resort` | Bayu Lestari Resort | |
| `website-analytics-and-reporting` | Website Analytics & Reporting | |

Detail URL pattern: `/projects/<slug>`  
Example: https://systemheuristics.com/projects/atara

### Private projects

Some portfolio entries are marked `private: true` (automations, scrapers, etc.). They are **excluded from the public listing** but may still resolve on detail routes depending on `getAllProjectsIncludingPrivate()` / static params.

When documenting or linking publicly, prefer **non-private** projects only.

---

## 11. Case studies

Marketing data: `src/data/pages/case-studies/CaseStudiesData.js`

### What exists today

- Hero with Healthcare / Construction visuals  
- Categories linking into project industry filters  
- Approach, challenges, outcomes, CTA sections  

### What does **not** exist yet

- A full list of case-study **detail IDs/slugs** in data  
- A finished `/case-studies/[id]` experience (currently a placeholder)

Until detail pages are implemented, treat **`/case-studies`** as the public case-studies surface, and use **`/projects`** for concrete project stories.

---

## 12. Careers

Jobs data: `src/data/pages/careers/CareersJobsData.js`

### Active job slugs

| Slug | Title |
|------|--------|
| `backend-developer-fastapi` | Backend Developer (FastAPI) |
| `ai-engineer` | AI Engineer |
| `social-media-manager` | Social Media Manager |
| `software-qa-engineer` | Software QA Engineer |
| `research-assistant` | Research Assistant |
| `data-scientist` | Data Scientist |
| `executive-assistant` | Executive Assistant |

Detail URL: `/careers/<slug>`  
Example: https://systemheuristics.com/careers/ai-engineer

### Application flow

1. User opens Careers or a job detail.  
2. Fills the general application form (resume required).  
3. Browser sends `multipart/form-data` to `POST /api/careers/apply`.  
4. Server emails HR inbox + sends applicant confirmation.

---

## 13. API routes

Both routes use `export const runtime = "nodejs"` (Nodemailer needs Node).

### `POST /api/contact`

**File:** `src/app/api/contact/route.js`

**Purpose:** Capture sales/marketing leads from Home and Contact forms.

**Body:** JSON

| Field | Required | Notes |
|-------|----------|--------|
| `name` or `firstName`/`lastName` | yes | Combined into display name |
| `email` | yes | Validated with regex |
| `companyName` | yes | |
| `problem` | yes | Problem description |
| `phone` | no | |
| `companyWebsite` | no | |
| `industry` | no | |
| `companySize` | no | |
| `service` / `helpWith` | no | |
| `budget` | no | |
| `source` | no | |

**Responses:**

| Status | Meaning |
|--------|---------|
| `200` | `{ ok: true }` — internal mail sent (auto-reply attempted) |
| `400` | Validation errors |
| `503` | Missing SMTP / contact config |
| `500` | Send failure |

**Flow:**

1. Validate payload.  
2. Send **internal notification** to `CONTACT_RECEIVER_EMAIL` (must succeed).  
3. Wait ~1.5s, then send **auto-reply** to the lead (failures are logged; request can still succeed).

---

### `POST /api/careers/apply`

**File:** `src/app/api/careers/apply/route.js`

**Purpose:** Receive job applications with resume attachment.

**Body:** `multipart/form-data`

| Field | Rules |
|-------|--------|
| `fullName` | Required |
| `email` | Required, valid email |
| `phone` | As implemented in form |
| `expertise` | Must match allowed options |
| `linkedin` | Optional/as implemented |
| `portfolio` | Optional/as implemented |
| `introduction` | Minimum length (≈40 characters) |
| `resume` | Required file: `.pdf` / `.doc` / `.docx`, max **5 MB** |

**Responses:** Same general pattern as contact (`400` / `503` / `500` / `200`).

**Flow:**

1. Validate fields + resume.  
2. Email **HR** (`CAREERS_RECEIVER_EMAIL`) with resume attached.  
3. Delay + auto-reply to applicant confirming receipt.

---

## 14. Email sending logic

### Files

| Path | Role |
|------|------|
| `src/utils/email/sendMailWithRetry.js` | Retry wrapper for transient SMTP errors |
| `src/utils/email-templates/emailShell.js` | Shared HTML shell, escaping, detail rows, CTA button |
| `src/utils/email-templates/emailAssets.js` | Inline logo (CID) attachment |
| `src/utils/email-templates/contactNotification.js` | Internal lead email |
| `src/utils/email-templates/contactAutoReply.js` | Lead thank-you + book CTA |
| `src/utils/email-templates/careersNotification.js` | Internal application email |
| `src/utils/email-templates/careersAutoReply.js` | Applicant confirmation |
| `scripts/generate-email-logo.js` | Helper related to email logo assets |

### Retry behavior (`sendMailWithRetry`)

- Default **4 attempts**.  
- Backoff: `baseDelayMs * attempt` between tries.  
- Retries on transient SMTP issues (e.g. 421/450/451, busy, rate, timeout, reset).  
- Non-retryable errors throw immediately.

### Contact vs careers

| | Contact | Careers |
|--|---------|---------|
| Trigger | JSON form submit | Multipart form submit |
| Internal recipient | `CONTACT_RECEIVER_EMAIL` | `CAREERS_RECEIVER_EMAIL` |
| Attachment | Logo CID only | Resume file + logo |
| Auto-reply | Thank-you + booking link | Application received |
| Auto-reply failure | Does not fail the API after internal success | Same pattern |

### From address pattern

Outbound From is typically:

```text
"<FROM_NAME>" <SMTP_USER>
```

`replyTo` on internal contact mail is set to the lead’s email so the team can reply directly.

---

## 15. Shared UI (navbar, footer, CTA, buttons)

### Navbar — `src/utils/navbar/`

- Sticky / hide-on-scroll behavior  
- Desktop links + mobile Drawer  
- CTA **Talk To Human** → `/discovery-call`  
- Link data: `src/data/components/navbar/NavbarData.js`  

Typical nav destinations: Home, About, Case Studies, Careers, Contact.  
(Projects may be commented out in nav data while still linked from footer.)

### Footer — `src/utils/footer/`

- Brand block, socials, contact links  
- Column links (including projects / industry filters / legal)  
- Data: `src/data/components/footer/FooterData.js`

### Floating CTA — `src/utils/floating-cta/`

- Circular FAB → `/discovery-call`  
- Peek / attention animation emphasized on the homepage  

### Buttons — `src/utils/buttons/`

Shared variants such as `PrimaryButton`, `SecondaryButton`, `OutlineButton`, `GhostButton` for consistent CTAs across sections.

### Constants — `src/utils/Constants.js`

Single source for:

- Company name  
- Website URL (`https://systemheuristics.com`)  
- `info@` / `hr@` emails  
- Phone, maps URL, timings  
- Social URLs (WhatsApp, LinkedIn, Facebook, Instagram)

---

## 16. SEO & public files (robots, sitemap, llms.txt, favicons)

### `public/robots.txt`

- Allows crawling of public site content for major search and AI bots.  
- **Disallows:** `/api/`, assorted demo/test paths, and `/discovery-call`.  
- Declares sitemaps for apex and `www`:

```text
https://systemheuristics.com/sitemap.xml
https://www.systemheuristics.com/sitemap.xml
```

### `public/sitemap.xml`

Static sitemap file under `public/`.  

> **Important:** The checked-in sitemap may still list **legacy URLs** from an older site structure (e.g. `/services`, `/about-us`, `/case-study/N`). When updating SEO, regenerate or rewrite `sitemap.xml` to match **current** App Router paths (`/`, `/about`, `/case-studies`, `/projects`, `/careers`, `/contact`, legal pages, and real project/career slugs).

### `public/llms.txt`

Machine-readable brief for AI crawlers and agents. Includes:

- Company one-liner and positioning  
- Preferred sources (`llms.txt`, `robots.txt`, `sitemap.xml`)  
- Core page URLs  
- Industry project filters  
- Engagement path  
- Accuracy notes (don’t invent case studies; not Healthcare/Construction-only)

Public URL: https://systemheuristics.com/llms.txt

### Favicons & social metadata

Configured in `src/app/layout.js`:

- Favicon set under `/favicon/`  
- Apple touch icon / web manifest  
- `metadataBase`: `https://systemheuristics.com`  
- Open Graph / Twitter image: `/images/og/system-heuristics-og.png`  
- Title template: `%s | System Heuristics`

---

## 17. GitHub — remotes & how to push

This repository may use **more than one remote**.

### Known remotes (as configured on the primary machine)

| Remote name | URL | Typical use |
|-------------|-----|-------------|
| `origin` | `https://github.com/HuzaifaQaiser/system-heuristics.git` | Primary / original repo |
| `sh-website` | `https://github.com/shoaibhasnat/sh-website.git` | Second GitHub repo (e.g. Vercel linked project) |

Always confirm before pushing:

```bash
git remote -v
git branch --show-current
git status
```

### Push latest work to `origin` on `main`

```bash
git add .
git commit -m "Describe your change"
git push origin main
```

### Push to `sh-website` on branch `web-performance` (not main)

```bash
git checkout -b web-performance
# or: git checkout web-performance   # if it already exists

git add .
git commit -m "Describe your change"
git push -u sh-website web-performance
```

Later pushes on the same branch:

```bash
git push sh-website web-performance
```

### Force-push warning

Only force-push when you intentionally want to **overwrite** the remote branch (e.g. replacing an unrelated starter commit). Example (destructive):

```bash
git push sh-website main --force
```

Prefer normal pushes. Never force-push to a shared `main` unless the team agrees.

### Connect a new second remote

```bash
git remote add sh-website https://github.com/ORG_OR_USER/REPO.git
git remote -v
```

---

## 18. Vercel deploy & custom domain (DNS)

### A. Deploy the Next.js app on Vercel

1. Log in to [Vercel](https://vercel.com).  
2. **Add New Project** → Import the GitHub repo (`origin` or `sh-website`).  
3. Configure:

| Setting | Recommended value |
|---------|-------------------|
| Framework Preset | **Next.js** |
| Root Directory | `.` (repo root) |
| Build Command | `next build` (default) |
| Output Directory | **Leave empty** (do not set `public`) |
| Install Command | `npm install` |

4. Add all [environment variables](#4-environment-variables).  
5. Deploy. Vercel will give a `*.vercel.app` URL.

> If this Vercel project previously hosted a static `index.html` starter, clear any custom **Output Directory** and force Framework = Next.js, then **Redeploy**. Wrong output settings cause a successful build that still shows Vercel **404** on `/`.

### B. Link a custom domain (e.g. systemheuristics.com)

1. Open the Vercel project → **Settings → Domains**.  
2. Add:
   - `systemheuristics.com`  
   - `www.systemheuristics.com` (recommended)  
3. Vercel shows the **DNS records** you must create at your domain registrar / DNS host.

### C. Add Vercel DNS records at the domain provider

Log into the place that hosts DNS for the domain (GoDaddy, Namecheap, Cloudflare, Google Domains, etc.). Create the records Vercel displays. Typical patterns:

#### Apex domain (`systemheuristics.com`)

Often one of:

| Type | Name / Host | Value | Notes |
|------|-------------|--------|------|
| **A** | `@` | `76.76.21.21` | Common Vercel A record for apex (confirm in Vercel UI — values can change) |
| **or ALIAS / ANAME** | `@` | `cname.vercel-dns.com` | If your DNS provider supports ALIAS/ANAME |

#### WWW subdomain

| Type | Name / Host | Value |
|------|-------------|--------|
| **CNAME** | `www` | `cname.vercel-dns.com` |

#### Important DNS tips

- Prefer **exactly** the records shown in the Vercel Domains panel for your project.  
- Remove conflicting old A/CNAME records for `@` and `www`.  
- TTL can be 300–3600 seconds while testing.  
- Propagation can take minutes to 48 hours.  
- In Vercel, wait until the domain shows **Valid** / SSL issued.  
- Decide redirect policy: usually **www → apex** or **apex → www** (set in Vercel Domains).

### D. After DNS is connected

1. Visit https://systemheuristics.com and https://www.systemheuristics.com.  
2. Confirm homepage, contact form, and careers apply work (SMTP env vars set).  
3. Confirm `/discovery-call` redirects to the calendar.  
4. Optionally submit updated sitemap in Google Search Console once `sitemap.xml` matches live routes.

### E. Ongoing deploys

- Pushing to the Git branch connected to the Vercel project triggers a new deployment.  
- Preview deployments are created for non-production branches (e.g. `web-performance`).  
- Promote / merge to the production branch when ready for live.

---

## 19. Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Site builds on Vercel but `/` is 404 | Old static project settings / Output Directory set | Framework = Next.js, clear Output Directory, redeploy |
| Contact/careers returns 503 | Missing SMTP or receiver env vars | Set vars in `.env.local` / Vercel and redeploy |
| Emails intermittent | Gmail SMTP rate / 421 busy | Retries already implemented; check App Password & quotas |
| Image not updating | CDN/browser cache on same filename | Upload with a **new filename** and update data path |
| Wrong site after push | Pushed to wrong remote/branch | `git remote -v`, push to the remote Vercel is watching |
| Unrelated histories on second repo | Starter commit on empty GitHub repo | Force-push only if intentional overwrite is approved |
| `/case-studies/something` empty | Detail page is a stub | Use marketing page or implement data-backed details |
| Sitemap URLs 404 | Legacy sitemap entries | Update `public/sitemap.xml` to current routes |

---

## 20. Quick reference

### Commands

```bash
npm install
npm run dev
npm run build
npm run start
```

### Important URLs (production)

| Page | URL |
|------|-----|
| Home | https://systemheuristics.com/ |
| About | https://systemheuristics.com/about |
| Case Studies | https://systemheuristics.com/case-studies |
| Projects | https://systemheuristics.com/projects |
| Careers | https://systemheuristics.com/careers |
| Contact | https://systemheuristics.com/contact |
| Privacy | https://systemheuristics.com/privacy-policy |
| Terms | https://systemheuristics.com/terms-and-conditions |
| Discovery call | https://systemheuristics.com/discovery-call |
| llms.txt | https://systemheuristics.com/llms.txt |
| robots.txt | https://systemheuristics.com/robots.txt |
| sitemap | https://systemheuristics.com/sitemap.xml |

### Where to edit what

| Goal | Location |
|------|----------|
| Text / copy | `src/data/...` |
| Section UI | `src/components/website/...` |
| Page wiring | `src/components/pages/...` + `src/app/(website)/...` |
| Brand constants | `src/utils/Constants.js` |
| Design tokens | `src/app/variables.js` |
| Email templates | `src/utils/email-templates/` |
| SEO files | `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt` |

### Related agent docs

- `AGENTS.md` — full agent guide + Next.js 16 warning block  
- `CLAUDE.md` — Claude entrypoint (references `AGENTS.md`)

---

## Document maintenance

When the product changes, update this file especially for:

- New routes or slugs  
- New env vars  
- Email / API contract changes  
- Sitemap / robots / llms.txt  
- Git remotes or deployment branch conventions  

**End of complete project documentation.**
