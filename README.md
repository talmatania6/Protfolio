# Tal Matania Portfolio

A UX/UI portfolio built with [Astro](https://astro.build) as a fully static site. The design system is still hand-written CSS and vanilla JavaScript — Astro is here so content can be edited without touching markup.

## Commands

```bash
npm install      # once
npm run dev      # http://localhost:4321 with hot reload
npm run build    # → dist/
npm run preview  # serve the built dist/ locally
```

Astro is pinned to **5.18.2**. Astro 6+ requires Node ≥ 22.12.0; this machine runs Node 20.19.5, so don't bump the version until Node is upgraded.

Content errors are build errors: a mistyped frontmatter key or a missing required field fails `npm run build` and names the offending file and field, rather than silently rendering a blank section.

## Project structure

```text
├── astro.config.mjs           # site URL; static output, clean URLs
├── public/
│   └── assets/                # copied verbatim into dist/ — reference as /assets/...
│       ├── icons/favicon.svg  # the only asset any page actually loads
│       ├── images/            # portrait + social-share placeholders (og:image only)
│       ├── projects/          # per-project SVG placeholders (og:image only)
│       └── documents/         # put tal-matania-cv.pdf here
├── src/
│   ├── content.config.ts      # Zod schemas for all three content collections
│   ├── content/
│   │   ├── global/site.md     # email, LinkedIn, CV path, nav, brand, footer
│   │   ├── global/home.md     # every word on the homepage
│   │   └── cases/<slug>.md    # the uniform chrome of each case study (5 files)
│   ├── layouts/
│   │   └── BaseLayout.astro   # the only non-page .astro file
│   ├── pages/
│   │   ├── index.astro
│   │   └── cases/<slug>.astro # one per case study, filename matches the .md slug
│   ├── styles/styles.css      # the whole design system
│   └── scripts/main.js        # header state, mobile menu, reveal, scroll-spy, accordion
└── legacy/                    # the pre-Astro hand-written site, kept for reference
```

`legacy/` is the old site (`index.html`, `cases/`, `css/`, `js/`, `build/`, the root `assets/` copy, and the three one-off `update_*.py` scripts). Nothing in it is built or served — delete the folder once you're satisfied with the Astro output. It also holds `css/case-study.css` and `js/case-study.js`, which were already dead code before the migration: no page referenced them.

## Editing content

Almost every edit is a markdown edit, not a markup edit.

| To change | Edit |
|---|---|
| Email, LinkedIn, CV path, header nav, footer | `src/content/global/site.md` |
| Any homepage copy — hero, project cards, pillars, process, about, toolkit, CV banner | `src/content/global/home.md` |
| A case study's title, tags, tagline, subnav, at-a-glance cards, impact cards, next-case link | `src/content/cases/<slug>.md` |
| A case study's bespoke middle sections | `src/pages/cases/<slug>.astro` |
| The chrome shared by all six pages — `<head>`, header, footer, back-to-top | `src/layouts/BaseLayout.astro` |

Each case study is split deliberately: the uniform chrome (hero, at-a-glance, impact, next-case) is frontmatter, while the middle sections are bespoke markup that would lose more than it gains by being forced into a shared schema. The showcase media frame below each hero is also per-page markup, because the frames differ structurally.

### Two things to watch in frontmatter

**Escaping.** Fields marked `/** inline HTML */` in `src/content.config.ts` render through `set:html`, so write real tags and HTML entities in them — `<strong>Role:</strong>`, `&amp;`. Every other field is escaped on output, so write a plain `&` there. Writing `&amp;` in an escaped field renders the literal text "&amp;".

**YAML.** Quote any value containing a colon or starting with `#` — several case titles have colons, and the homepage project-card gradients are hex colors that YAML would otherwise read as comments. Use `>-` block scalars for long prose.

### Adding a case study

1. Add `src/content/cases/<slug>.md` with the same frontmatter shape as an existing one.
2. Copy an existing `src/pages/cases/<slug>.astro` and change the `getEntry('cases', '<slug>')` argument to match the filename.
3. Add it to the homepage grid in `src/content/global/home.md` under `projects.items`.
4. Point some other case's `nextCase` at it, and point its own `nextCase` onward.

The five case pages each carry their own copy of the ~70 lines of shared chrome (breadcrumb, hero, subnav, glance grid, impact grid), so a change to that chrome means five edits. That was a deliberate choice to keep the page markup readable in one place; if it becomes a chore, extracting a `CaseLayout.astro` is a mechanical refactor.

## Design system

Global colors, spacing, type stacks, layout width, radii, shadows, and animation timing are CSS custom properties in the `:root` block at the top of `src/styles/styles.css`. There is no per-page CSS — everything is in that one file.

The site is built almost entirely from inline-styled `<div>`s with emoji and CSS gradients rather than images; there are no `<img>` elements anywhere. The inline styles are the design and were carried over from the hand-written site verbatim.

## Typography

**Manrope** for headings and display type, **Plus Jakarta Sans** for body copy, navigation, labels, and buttons. Both are loaded from Google Fonts once, in `BaseLayout.astro`.

## Deploy

`npm run build` writes a static site to `dist/`; deploy that directory to any static host.

For GitHub Pages, publish `dist/` rather than the repository root — either with a GitHub Actions workflow (`withastro/action`) or by pushing `dist/` to a `gh-pages` branch. Pages will not build this site for you.

Paths are root-absolute (`/assets/...`, `/cases/<slug>/`), so the site must be served from a domain root, not a repository subdirectory. To serve it from a subpath, set `base` in `astro.config.mjs`. The canonical and `og:url` tags are generated from the `site` value in `astro.config.mjs` — update it if the domain changes.

## Known gaps

Carried over from the hand-written site, all content decisions rather than bugs:

- `public/assets/documents/tal-matania-cv.pdf` doesn't exist, so every CV link 404s.
- Three `og:image` paths point at files that were never added: `projects/game-generator/game-generator-hero.svg`, `projects/my-first-shift/hero-placeholder.svg`, `projects/surgical-ergonomics/hero-placeholder.svg`.
- `golden-time` isn't in the homepage project grid; it's reachable only via the next-case link on `video-editing`.
- Every SVG under `public/assets/projects/` and `public/assets/images/` is unused except as an `og:image` target, because the site has no `<img>` elements.
