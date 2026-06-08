# Motion

Animation enforces hierarchy and rewards exploration. We use four
categories of motion, each with a fixed easing curve.

## Easing

A single easing curve, `cubic-bezier(0.16, 1, 0.3, 1)` — sometimes called
"out-expo." It's stored as `--ease-out-expo` in the theme and as the array
`[0.16, 1, 0.3, 1]` in Framer Motion code.

Do not introduce a second easing. If a motion feels wrong, change the
*duration* or *distance*, not the curve.

## Categories

### 1. Scroll-reveal

Use the [`Reveal`](../../components/ui/Reveal.tsx) primitive. Standard
config: `y: 40`, `duration: 0.9s`, staggered via the `delay` prop in
`0.08s` increments.

```tsx
<Reveal>…</Reveal>
<Reveal delay={0.08}>…</Reveal>
<Reveal delay={0.16}>…</Reveal>
```

Hero content does *not* use Reveal — it animates on mount because the
viewport is already visible. See [Hero.tsx](../../components/home/Hero.tsx)
for the inline `motion.div` initial/animate pattern.

### 2. Hover micro-interactions

Driven by CSS transitions, **never** Framer Motion. Tokens:

- `transition-all duration-300 ease-out` — buttons, social icons
- `transition-all duration-500 ease-out-expo` — feature/speaker cards

Translate amounts: `-translate-y-0.5` for small elements, `-translate-y-2`
for cards.

### 3. Counters

The five stats in the diagonal band use `motion`'s `useMotionValue` +
`animate` to count from `0` to the target when in view. See
[StatsBand.tsx](../../components/home/StatsBand.tsx). Duration is `1.2s`
with the standard easing. Triggered exactly once via `useInView({ once: true })`.

### 4. Parallax

The two hero "chips" (`C# 14`, `.NET 10`) translate vertically on scroll
via `useScroll` + `useTransform`. Multipliers:

- Chip 1 (`c1`) — `[0, 1] → [0, 200]`
- Chip 2 (`c2`) — `[0, 1] → [0, 300]`

This replaces the hand-rolled `scroll` listener from the prototype.

## Keyframed animations

Three keyframes live in the `@theme` block (so Tailwind exposes them as
utilities **and** they remain referenceable by name in raw CSS).

| Utility | Effect |
| --- | --- |
| `animate-pulse-dot` | Pulses opacity + scale (used on the hero eyebrow dot) |
| `animate-marquee` | `translateX(-50%)` over 30s, infinite, linear |
| `animate-scroll-cue` | The vertical scroll-indicator line in the hero |

Pause-on-hover for the marquee is via the Tailwind arbitrary value
`group-hover:[animation-play-state:paused]`.

## WebGL hero

The animated metaballs background is a WebGL2 fragment shader, encapsulated
in [HeroCanvas.tsx](../../components/effects/HeroCanvas.tsx). It:

- Falls back to a static radial-gradient if WebGL2 is unavailable
- Caps DPR at 2 to avoid burning GPU on retina displays
- Cleans up the RAF loop and ResizeObserver on unmount

Colors and parameters are constants at the top of the file. If you change
the brand palette, update `COLORS` there too.

## Custom cursor

The dot + ring cursor is in [CustomCursor.tsx](../../components/effects/CustomCursor.tsx).
It only activates on `(pointer: fine)` devices, and adds a `is-hover` class
when over any `a`, `button`, `[role="button"]`, or `[data-hover]`.
Hover detection uses event delegation (one document-level listener) rather
than per-element listeners.

## Reduced motion

> **TODO:** None of the effects currently honor
> `@media (prefers-reduced-motion: reduce)`. Before launch, we should:
>
> - Disable the WebGL canvas (use the gradient fallback)
> - Skip the marquee animation
> - Set Reveal's `y` to `0` and `duration` to `0`
> - Pause the pulse dot
>
> Tracked work — not done yet.
