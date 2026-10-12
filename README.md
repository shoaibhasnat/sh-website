# 🚀 System Heuristics – Modern AI & Software Solutions Platform

> A production‑grade, animation‑rich, SEO‑optimized React + Vite web platform powering **System Heuristics** — designed for scalability, reusability, and high‑end UX.

---

## ✨ Overview

**System Heuristics** is a modern front‑end platform built with **React + Vite**, focused on:

* AI & Automation services
* Healthcare & enterprise solutions
* High‑performance animations (GSAP + Lenis)
* SEO‑friendly architecture
* Client‑side PDF generation
* Strong design system & component reuse

The project follows **strict separation of concerns**:

* UI ≠ Data ≠ Logic ≠ Assets
* Every page, section, and component is modular

---

## 🧠 Architecture Philosophy

* **Component‑driven UI** (atomic + page‑level)
* **Data‑driven pages** (no hardcoded content)
* **Scroll‑based storytelling** using GSAP + Lenis
* **SEO‑aware SPA** (static OG + dynamic meta)
* **PDF generation fully client‑side**

---

## 🗂️ Project Structure (High Level)

```txt
public/        # Static assets, SEO, fonts, images
src/           # Application source
│
├── components # UI & page‑level components
├── data       # Page + component data (JSON/JS)
├── pages      # Route entry points
├── routes     # React Router configuration
├── utils      # Shared utilities (GSAP, PDF, layout)
├── hooks      # Custom React hooks
├── seo        # SEO utilities & meta configs
│
index.html     # Static SEO, OG, preload config
vite.config.js # Vite + build config
```

---

## 📁 `public/` – Static Assets & SEO

### Key Responsibilities

* Favicons, fonts, OG images
* Preloaded hero images
* SEO files (`robots.txt`, `sitemap.xml`)

### Notable Paths

```txt
public/
├── favicon/           # All favicon formats
├── fonts/             # Quicksand font family
├── images/
│   ├── og/            # Open Graph images
│   ├── pages/         # Page‑specific images
│   ├── pdf-images/    # PDF logo & watermark
│   └── tech-icons/    # Tech stack icons
├── robots.txt
├── sitemap.xml
└── manifest.json
```

📌 **Important**

* All images that must load early are **preloaded in `index.html`**
* All other images are lazy‑loaded via `LazyImage.jsx`

---

## 🧩 `src/components/` – Component System

### 1️⃣ `components/pages`

Page‑specific building blocks (Hero, Sections, Forms, etc.)

```txt
components/pages/home/
├── hero/
│   ├── Hero.jsx
│   ├── hero.module.css
│   └── HeroUtils.jsx
├── faq-section/
├── portfolio-section/
└── HomeMain.jsx  # Page entry component
```

🧠 **Pattern**

* Every section lives in its own folder
* CSS is scoped via `.module.css`
* Extra logic is isolated in `Utils` files

---

### 2️⃣ `components/ui`

Reusable, design‑system‑level components

```txt
components/ui/
├── button/
├── page-hero/
├── section-intro/
├── animated-text/
├── gradient-reveal-animation/
├── gradient-scroll-animation/
├── slider/
├── splash-cursor/
└── footer/
```

📌 **Rules**

* No page‑specific logic
* Fully reusable
* Styled via CSS Modules

---

## 📊 `src/data/` – Content & Configuration

All textual + structural content lives here.

```txt
data/
├── pages/
│   ├── home/HomePageData.jsx
│   ├── services/ServicesPageData.jsx
│   ├── portfolio/PortfolioData.jsx
│   └── industries/
├── components/
│   ├── nav/
│   └── footer/
├── seo/              # SEO meta configs
└── under-maintenance/
```

✅ Pages never hardcode content

---

## 🧭 Routing System

```txt
src/routes/ProjectRoutes.jsx
```

* Uses **React Router**
* Each route maps to a page in `src/pages/`
* Pages delegate rendering to `components/pages/*Main.jsx`

```txt
/pages/home/Home.jsx
 → /components/pages/home/HomeMain.jsx
```

---

## 🎞️ Animation & Scroll System (GSAP)

### Key Concepts

#### 🔹 ScrollSection

* Defines scroll‑aware sections
* Used for animation triggers

#### 🔹 LenisScrollSync

* Smooth scrolling engine
* Syncs GSAP with Lenis

#### 🔹 PageSectionsWrapper

* Wraps pages
* Injects Lenis instance
* Manages scroll context

📁 Location

```txt
src/utils/gsap/
```

---

## 🎨 Styling Strategy

* **CSS Modules** everywhere
* No global overrides
* Design tokens via `variables.css`

```txt
src/globals.css
src/variables.css
```

---

## 🖨️ PDF Generation System

Client‑side PDF generation using **jsPDF**.

📁 Location

```txt
src/utils/pdf/
├── PDFPage.jsx
└── pdf-gen-utils/
```

### Features

* On‑click PDF generation
* Hero, sections, FAQs
* Logo + watermark
* Footer on every page
* Auto‑download

📌 PDF is generated **only when user clicks**

---

## 🔐 Global Configuration

### `Colors.jsx`

* All colors used across JS files

### `Constants.jsx`

* Company name
* Email
* Phone
* Social links

📁 Location

```txt
src/utils/global/
```

---

## 🔍 SEO Strategy

### Static (index.html)

* OG tags
* Twitter cards
* Canonical URL
* Preloaded images

### Dynamic (React)

* `react-helmet`
* Per‑page metadata

📌 OG images live in:

```txt
public/images/og/system-heuristics-og.png
```

---

## 🧪 Utilities & Helpers

```txt
src/utils/
├── layout/            # Protected layouts, wrappers
├── pdf/               # PDF generation
├── temp/              # Experimental utilities
└── gsap/              # Scroll & animation logic
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

---

## 📦 Tech Stack

* **React + Vite**
* **GSAP + Lenis**
* **Material UI**
* **jsPDF**
* **Lucide Icons**
* **React Router**
* **react‑helmet‑async**

---

## 🏁 Final Notes

This codebase is built to:

* Scale cleanly
* Stay maintainable
* Deliver premium UX

> Designed & engineered by **System Heuristics**

---

📩 Questions or improvements? Reach out to the core team.
