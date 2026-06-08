# Design Tokens

All tokens are declared as CSS custom properties inside the
`@theme` block of [app/globals.css](../../app/globals.css). Tailwind v4
generates utility classes from them automatically.

> **Rule of thumb:** if you find yourself typing a raw hex, px value, or
> shadow, stop and add a token instead.

## Color

### Brand

| Token | Hex | Tailwind utility examples |
| --- | --- | --- |
| `--color-brand-red` | `#E03131` | `bg-brand-red`, `text-brand-red`, `border-brand-red` |
| `--color-brand-red-dim` | `#B02525` | `bg-brand-red-dim` (used in the stats-band gradient) |
| `--color-brand-green` | `#1B7A4B` | `text-brand-green` |
| `--color-brand-gold` | `#F2A900` | `text-brand-gold` |
| `--color-brand-teal` | `#2F9E9E` | `text-brand-teal` |

### Surfaces (dark theme is primary)

| Token | Hex | Use |
| --- | --- | --- |
| `--color-bg` | `#0B0A0A` | Page background |
| `--color-bg-2` | `#121011` | Cards, marquee, footer, schedule hover |
| `--color-bg-3` | `#1A1718` | Reserved for elevated surfaces |

### Ink (foreground text)

| Token | Hex | Use |
| --- | --- | --- |
| `--color-ink` | `#F4F1F0` | Primary text |
| `--color-ink-dim` | `#A8A2A0` | Body copy, secondary text |
| `--color-ink-faint` | `#6E6866` | Section numbers, metadata, captions |

### Neutral scale

`--color-n-50` through `--color-n-900`. Use these for cases where the
ink/surface tokens aren't expressive enough (e.g. a button on the gradient
CTA needs `text-n-900` for sufficient contrast on white).

### Lines & glass

| Token | Value | Use |
| --- | --- | --- |
| `--color-line` | `rgba(255,255,255,0.09)` | Default borders, dividers |
| `--color-line-strong` | `rgba(255,255,255,0.22)` | Hover-state borders |
| `--color-glass` | `rgba(255,255,255,0.045)` | Glass surfaces (chip, ghost button) |

## Radii

| Token | Value | Use |
| --- | --- | --- |
| `--radius-xs` | `8px` | Logo mark |
| `--radius-sm` | `11px` | Social icons |
| `--radius-md` | `14px` | Chip, day-tabs, badge |
| `--radius-lg` | `18px` | Hero side-card |
| `--radius-xl` | `22px` | Feature card, speaker card |
| `--radius-2xl` | `34px` | CTA banner |
| `--radius-pill` | `100px` | Buttons, nav, eyebrows |

## Shadows

| Token | Value | Use |
| --- | --- | --- |
| `--shadow-glow-red` | `0 0 24px rgba(224,49,49,0.4)` | Primary buttons, nav CTA |
| `--shadow-glow-red-lg` | `0 10px 40px rgba(224,49,49,0.55)` | Primary button hover |
| `--shadow-glass` | `0 14px 40px rgba(0,0,0,0.5)` | Floating chips |

## Container

| Token | Value | Use |
| --- | --- | --- |
| `--container-page` | `1240px` | Max width for content blocks |
| `--spacing-page-gutter` | `24px` | Gutter applied left/right of `container-page` |

Apply with the custom utility:

```html
<section class="container-page">…</section>
```

## Easing

| Token | Value | Use |
| --- | --- | --- |
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | All hover transitions & reveals |

When using Framer Motion / `motion`, pass `[0.16, 1, 0.3, 1]` directly to
`transition.ease`.

## Animations

Keyframes are declared inside `@theme`, so Tailwind exposes them as
`animate-*` utilities and they can be referenced by name in raw CSS.

| Token | Use |
| --- | --- |
| `--animate-pulse-dot` | The pulsing red dot in the hero eyebrow |
| `--animate-marquee` | Horizontal infinite track in [Marquee](../../components/home/Marquee.tsx) |
| `--animate-scroll-cue` | Vertical scroll-indicator line in the hero |

## Custom utilities

| Utility | Purpose |
| --- | --- |
| `container-page` | Page max-width + horizontal gutter |
| `text-gradient-warm` | Linear gradient (gold → red) clipped to text |
| `bg-grain` | Inline SVG noise overlay |

Defined at the bottom of [globals.css](../../app/globals.css) under
`@utility`.

## Adding a token

1. Add a `--color-…` / `--radius-…` / `--shadow-…` etc. to the `@theme`
   block in [globals.css](../../app/globals.css).
2. Document it in this file under the right section.
3. Use it through the generated Tailwind utility — don't restate the
   hex elsewhere.
