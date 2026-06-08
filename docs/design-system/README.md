# Design System

The .NET Conf Africa visual language is editorial, dark, and bold —
inspired by the rhythm of African textiles and the precision of a
technical conference. The palette draws from the four pan-African
flag colors (red, green, gold) plus a supporting teal.

> The canonical spec sheet is [design-system.png](../design-system.png).
> Anything ambiguous in the docs should be resolved by comparing to it.

## Pages

| Page | Covers |
| --- | --- |
| [Tokens](tokens.md) | Colors, surfaces, radii, shadows, container, easing |
| [Typography](typography.md) | Font families, type scale, when to use which |
| [Components](components.md) | Buttons, badges, chips, section tags, etc. |
| [Motion](motion.md) | Animation tokens, easing, scroll patterns |

## Philosophy

1. **Tokens, not values.** Every recurring number lives in
   [globals.css](../../app/globals.css) under `@theme`. Tailwind utilities
   read from there, so changing one token re-skins the whole site.
2. **Server-first.** Most components are React Server Components;
   `"use client"` is only on islands that need state, browser APIs, or
   the WebGL canvas. See [architecture.md](../architecture.md).
3. **Editorial density.** Generous type, asymmetric grids, monospace
   eyebrows. Borrow from print, not dashboards.
4. **Motion is purposeful.** Reveal-on-scroll, magnetic CTAs, and the
   metaballs hero. Decorative motion has reduced-motion fallbacks.

## Brand colors at a glance

| Token | Hex | Role |
| --- | --- | --- |
| `--color-brand-red` | `#E03131` | Primary action, brand mark |
| `--color-brand-green` | `#1B7A4B` | Secondary accent, "Made in Africa" |
| `--color-brand-gold` | `#F2A900` | Tertiary highlight (".NET" wordmark glow) |
| `--color-brand-teal` | `#2F9E9E` | Quaternary accent for cards / tags |

Full list in [tokens.md](tokens.md).
