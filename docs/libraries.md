# Libraries

External dependencies, why we use them, and the gotchas.

## Runtime

### `next` — 16.2.7

The framework. Notable choices in this repo:

- **App Router** (`app/`) — Server Components by default, opt-in to
  `"use client"`.
- **Turbopack** is enabled out of the box in dev and build.
- **Fonts via `next/font/google`** — self-hosted, zero CLS, no
  third-party requests at runtime. Configured in
  [app/layout.tsx](../app/layout.tsx).

> The project's [AGENTS.md](../AGENTS.md) flags that this Next.js version
> has breaking changes vs older training data. Before adding non-trivial
> framework code, consult `node_modules/next/dist/docs/` rather than memory.

### `react`, `react-dom` — 19.x

Server Components, the `use` hook, the modern transitions API. Most of
this is used implicitly via the App Router.

### `tailwindcss` — v4

The styling layer. The project uses Tailwind's new CSS-first config:

- All design tokens live in the `@theme` block of
  [app/globals.css](../app/globals.css) — there is **no**
  `tailwind.config.js`.
- Custom utilities are defined with the new `@utility` directive in the
  same file.
- The PostCSS plugin is wired via `@tailwindcss/postcss` (see
  [postcss.config.mjs](../postcss.config.mjs)).

### `motion` — 12.x

The successor package to `framer-motion`. Used for:

- [`Reveal`](../components/ui/Reveal.tsx) — `whileInView` animations
- [`Hero`](../components/home/Hero.tsx) — `useScroll` parallax + mount animations
- [`StatsBand`](../components/home/StatsBand.tsx) — `useMotionValue` + `animate` for counters

Imports use the namespaced entry point:

```ts
import { motion, useScroll, useTransform } from "motion/react";
```

This entry point ships only the React bindings — keeps the client bundle
trim.

### `lucide-react` — 1.x

Icon library. Tree-shaken; only the icons you import are bundled.

> **Gotcha:** Lucide v1 dropped all **brand** icons (GitHub, LinkedIn,
> YouTube, Twitter/X) because they violate the brand-asset guidelines of
> the respective companies. We keep static inline SVGs for these in
> [components/layout/SocialIcons.tsx](../components/layout/SocialIcons.tsx).
> If you need another brand icon, add it there — don't reach for a
> separate brand-icon package for one-offs.

## Dev

| Package | Purpose |
| --- | --- |
| `typescript` | Static typing; strict mode is on (see [tsconfig.json](../tsconfig.json)) |
| `eslint` + `eslint-config-next` | Linting via flat config — see [eslint.config.mjs](../eslint.config.mjs) |
| `@types/*` | Type definitions for Node, React, React-DOM |
| `@tailwindcss/postcss` | Tailwind v4 PostCSS plugin |

## Package manager

`pnpm` (`pnpm-workspace.yaml` exists for future workspaces). Use
`pnpm install` / `pnpm add <pkg>` — never mix in npm or yarn lockfiles.

## Versioning policy

Pin minor versions for `next`, `react`, and `react-dom` (already pinned to
the exact patch in [package.json](../package.json)). The rest tracks `^`
within major.
