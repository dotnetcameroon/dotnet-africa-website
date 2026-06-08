# Architecture

How the codebase is organized and why.

## Folder layout

```
app/                  # Next.js App Router entry points
  globals.css           Tailwind v4 import + @theme tokens + utilities
  layout.tsx            Root layout, font wiring, metadata
  page.tsx              Home page (composition only)

components/           # All UI components
  layout/               Site chrome (Nav, Footer, Logo, SocialIcons)
  home/                 Home-page sections (Hero, Marquee, …, CTA)
  ui/                   Reusable primitives (Button, Chip, Badge, Reveal, …)
  effects/              Browser-only effects (HeroCanvas, CustomCursor, GrainOverlay)

data/                 # Typed content data
  speakers.ts           Speaker list + AccentColor type
  schedule.ts           Three-day schedule + accent class map

lib/                  # Small framework-agnostic helpers
  cn.ts                 className join helper

docs/                 # You are here
public/               # Static assets (currently empty)
```

## Path alias

`@/*` maps to the repo root (see [tsconfig.json](../tsconfig.json)).
Always import with the alias:

```tsx
import { Button } from "@/components/ui/Button";   // ✓
import { Button } from "../../components/ui/Button"; // ✗
```

## Server vs Client Components

By default, every component is a **React Server Component (RSC)** — they
render on the server, ship zero JS, and can read from filesystems or
databases. We opt into `"use client"` only when a component needs:

- React state or refs (`useState`, `useRef`)
- Effects (`useEffect`)
- Browser APIs (`window`, `navigator`, WebGL)
- Event handlers that need closure over component state

### Current client islands

| Component | Why |
| --- | --- |
| [Nav](../components/layout/Nav.tsx) | Scroll-direction state to hide on scroll-down |
| [Hero](../components/home/Hero.tsx) | `useScroll` for chip parallax + mount animation |
| [Schedule](../components/home/Schedule.tsx) | `useState` for selected day tab |
| [StatsBand](../components/home/StatsBand.tsx) | Motion-value counters |
| [Reveal](../components/ui/Reveal.tsx) | Framer Motion `whileInView` |
| [Magnetic](../components/ui/Magnetic.tsx) | `useRef` + mouse listeners |
| [CustomCursor](../components/effects/CustomCursor.tsx) | DOM listeners + RAF loop |
| [HeroCanvas](../components/effects/HeroCanvas.tsx) | WebGL2 context |

Everything else — Footer, Marquee, WhyAttend, Speakers, CTA, all of `ui/`
except `Reveal`/`Magnetic` — is an RSC.

### Why this matters

- **Smaller JS bundle** — only client islands ship to the browser.
- **Faster first paint** — server-rendered HTML arrives instantly.
- **Composition rule** — RSCs can render Client Components, and Client
  Components can receive RSCs as `children` props, but Client Components
  **cannot** `import` an RSC.

## Page composition

[app/page.tsx](../app/page.tsx) is intentionally trivial:

```tsx
export default function HomePage() {
  return (
    <>
      <GrainOverlay />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <WhyAttend />
        <StatsBand />
        <Speakers />
        <Schedule />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
```

Each section component owns its own layout, padding, and animation. The
page does not pass props to them.

## Data layer

Static content (speakers, schedule) lives in TypeScript modules under
[data/](../data/) with exported types. This gives us:

- Compile-time safety on every speaker / session field
- A single place to swap in a CMS or API later (the section components
  just import named exports)
- Type sharing — `AccentColor` is defined once in
  [data/speakers.ts](../data/speakers.ts) and imported by
  [data/schedule.ts](../data/schedule.ts).

### Adding a speaker

1. Append a `Speaker` object to the `speakers` array in
   [data/speakers.ts](../data/speakers.ts).
2. Pick an `accent` (`red | green | gold | teal`) and matching
   `gradient`. The Speakers section reads both.

### Adding a session

1. Add a `Session` to the appropriate `Day.sessions` in
   [data/schedule.ts](../data/schedule.ts).
2. `tag` is a fixed union (`KEYNOTE | SESSION | WORKSHOP | PANEL`) — extend
   the type if a new category is needed.

## Conventions

- **One default-export per file is fine.** We use named exports throughout
  for grep-ability and refactor safety.
- **Use Server Components by default.** Only add `"use client"` when
  there's a real reason; the lint reviewer will ask.
- **Tokens over raw values.** See [design-system/tokens.md](design-system/tokens.md).
- **Section components are flat.** A section like
  [WhyAttend](../components/home/WhyAttend.tsx) defines internal
  sub-components in the same file rather than splitting into many tiny
  ones.
