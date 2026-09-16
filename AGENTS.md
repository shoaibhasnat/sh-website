<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# System Heuristics Website — Agent Guide

Marketing site for **System Heuristics** (AI agents, automation, integrations, custom software — Healthcare & Construction).

| Item | Detail |
|------|--------|
| Stack | Next.js **16** (App Router), React 19, Ant Design 6, CSS Modules |
| Language | JavaScript (no TypeScript app code) |
| Alias | `@/*` → `./src/*` |
| Deploy | Vercel |

## Commands

```bash
npm run dev      # http://localhost:3000
npm run build
npm run start
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

Prefer data files for text changes. Prefer CSS Modules next to the component for styling.

## Design system

Tokens: `src/app/variables.js` → CSS variables on `:root`.

| Token | Value |
|-------|-------|
| Primary | `#00b3ff` |
| Dark | `#001830` |
| Text | `#00213a` |
| Font | Quicksand (primary) |

Reuse existing section patterns (`home-shared.module.css`, about/contact shared modules). Match nearby sections. Do not invent a new visual language unless asked.

## Conventions

- Keep page files thin; put section logic in `components/website`.
- Use CSS Modules (`.module.css`); avoid global CSS except `globals.css` / tokens.
- `"use client"` only when needed (hooks, observers, interactive UI).
- Images: `next/image`; assets in `public/`; new filenames when replacing to bust cache.
- Email: `src/utils/email-templates/`, `src/utils/email/`.
- Secrets: `.env.local` only — never commit credentials.
- Do not commit unless the user asks.
- Before changing Next.js APIs, read `node_modules/next/dist/docs/`.

## Remotes

Multiple remotes may exist (`origin`, `sh-website`). Confirm target remote and branch before pushing. Force-push only when explicitly requested.

## Scope

- Change only what the task requires.
- No unrelated refactors or unprompted doc rewrites.
- Preserve existing brand patterns when editing UI.
