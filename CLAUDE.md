# CLAUDE.md — System Heuristics Website

Guidance for Claude Code (and other agents) working in this repo.

@AGENTS.md

## Project

Marketing site for **System Heuristics** — AI agents, automation, integrations, and custom software for Healthcare and Construction.

| Item | Detail |
|------|--------|
| Stack | Next.js **16** (App Router), React 19, Ant Design 6, CSS Modules |
| Language | JavaScript (no TypeScript app code) |
| Alias | `@/*` → `./src/*` |
| Deploy | Vercel |

## Commands

```bash
npm run dev      # local server (http://localhost:3000)
npm run build    # production build
npm run start    # serve production build
```

## Architecture

```
src/
  app/                    # App Router routes + API
    (website)/            # main site pages (route group)
    api/contact/          # contact form
    api/careers/apply/    # careers applications
    discovery-call/       # booking redirect
  components/
    pages/                # page-level composers
    website/              # section UI (home, about, etc.)
    ui/                   # small shared UI
  data/                   # copy, links, content (edit here first)
    pages/                # per-page content
    components/           # navbar, footer
  utils/                  # navbar, footer, buttons, email, floating CTA
public/                   # static assets (images, favicons, robots, sitemap)
```

### Content vs UI

- **Copy / links / lists** → `src/data/pages/...` or `src/data/components/...`
- **Layout / sections** → `src/components/website/...`
- **Route entry** → `src/app/(website)/.../page.js` (thin; imports page composers)

Prefer editing data files for text changes. Prefer CSS Modules next to the component for styling.

## Design system

Tokens live in `src/app/variables.js` and are applied as CSS variables on `:root`.

| Token | Value |
|-------|-------|
| Primary | `#00b3ff` |
| Dark | `#001830` |
| Text | `#00213a` |
| Font | Quicksand (primary) |

Reuse existing section patterns (`home-shared.module.css`, about/contact shared modules). Match nearby sections for spacing, radii, and motion. Do not invent a new visual language unless asked.

## Conventions

- Keep page files thin; put section logic in `components/website`.
- Use CSS Modules (`.module.css`); avoid global CSS except `globals.css` / tokens.
- Client components only when needed (`"use client"` for hooks, observers, interactive UI).
- Images: `next/image`; put files under `public/` and bust cache with new filenames when replacing assets.
- Email: templates in `src/utils/email-templates/`, send helpers in `src/utils/email/`.
- Secrets: `.env.local` only — never commit credentials.
- Do not commit unless the user asks.
- Before changing Next.js APIs, read guides under `node_modules/next/dist/docs/` (this Next version differs from older docs).

## Remotes

This repo may have more than one Git remote (e.g. `origin` and `sh-website`). Confirm the target remote before pushing. Prefer non-destructive pushes; force-push only when the user explicitly requests it.

## Scope discipline

- Change only what the task requires.
- Do not refactor unrelated files or rewrite docs unprompted.
- Preserve existing brand patterns when editing UI.
