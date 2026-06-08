# Components

Reusable UI primitives live in [components/ui/](../../components/ui/).
Each is small, composable, and styled exclusively with tokens. Sections
(`components/home/`) and layout (`components/layout/`) compose these
primitives — they should rarely need bespoke CSS.

## Button — [`components/ui/Button.tsx`](../../components/ui/Button.tsx)

Polymorphic button: renders as `<Link>` if `href` is set, otherwise
`<button>`.

### API

| Prop | Type | Default |
| --- | --- | --- |
| `variant` | `"primary" \| "ghost" \| "white"` | `"primary"` |
| `size` | `"md" \| "lg"` | `"lg"` |
| `href` | `string?` | — (renders `<button>` if absent) |
| `className` | `string?` | — |

### Variants

| Variant | When to use |
| --- | --- |
| `primary` | The single most important action on the page (Register, Get ticket). Red fill with glow shadow. |
| `ghost` | Secondary CTA (Watch recap, Group rates, View all). Glass background with subtle border. |
| `white` | Used on saturated gradient backgrounds (the CTA banner) where red wouldn't pop. |

### Examples

```tsx
<Button href="#register">Register now <ArrowRight /></Button>
<Button href="#" variant="ghost">Watch 2025 recap</Button>
<Button href="#" variant="white">Get your ticket</Button>
```

Wrap a Button in [`Magnetic`](../../components/ui/Magnetic.tsx) to enable
cursor-tracking hover for the most important CTAs.

## Chip — [`components/ui/Chip.tsx`](../../components/ui/Chip.tsx)

Small glass pill used for floating hero decorations (`C# 14`, `.NET 10`).
Mono font, blurred background, drop shadow.

```tsx
<Chip><Sparkles className="size-3.5" /> .NET 10</Chip>
```

Do *not* use Chip for status or metadata inside lists — use Badge or the
session tag (defined inline in [Schedule](../../components/home/Schedule.tsx))
instead.

## Badge — [`components/ui/Badge.tsx`](../../components/ui/Badge.tsx)

Black-tint pill rendered over imagery — used for the speaker-card category
(`KEYNOTE`, `AI & ML`, `COMMUNITY`). Mono font, semi-transparent black
backdrop with blur so it remains legible on bright gradients.

```tsx
<Badge>KEYNOTE</Badge>
```

## SectionTag — [`components/ui/SectionTag.tsx`](../../components/ui/SectionTag.tsx)

Editorial section header marker: `02 — WHY ATTEND ───`.

```tsx
<SectionTag num="02" label="WHY ATTEND" />
```

One per section, placed directly above the section's `<h2>`.

## Reveal — [`components/ui/Reveal.tsx`](../../components/ui/Reveal.tsx)

Wraps any element to animate it into view on scroll. Replaces the
hand-rolled `IntersectionObserver`/`.in` pattern from the prototype.

| Prop | Type | Default |
| --- | --- | --- |
| `delay` | `number` (seconds) | `0` |
| `y` | `number` (initial translateY) | `40` |
| `as` | `"div" \| "section" \| "h1" \| "h2" \| "h3" \| "p" \| "span" \| "header"` | `"div"` |

Polymorphic so it can render the actual semantic element (e.g. `<h2>`)
rather than a wrapping `<div>`.

```tsx
<Reveal as="h2" delay={0.08}>Learn from the best</Reveal>
```

## Magnetic — [`components/ui/Magnetic.tsx`](../../components/ui/Magnetic.tsx)

Wraps a child to translate it toward the cursor on hover. Hand-rolled
because Framer Motion would fight other transforms (and we use a small
strength factor).

```tsx
<Magnetic strength={0.3}>
  <Button>Register now</Button>
</Magnetic>
```

Reserved for the **two** most important CTAs (the hero `Register now` and
the CTA banner `Get your ticket`). Overuse dilutes the effect.

## Logo — [`components/layout/Logo.tsx`](../../components/layout/Logo.tsx)

The brand mark. Used by [Nav](../../components/layout/Nav.tsx) and
[Footer](../../components/layout/Footer.tsx). Pass `className` for layout
overrides — never restyle the inner pieces.

## Social icons — [`components/layout/SocialIcons.tsx`](../../components/layout/SocialIcons.tsx)

Inline SVG components for X, LinkedIn, YouTube, and GitHub. Lucide v1
dropped brand icons (see [libraries.md](../libraries.md)), so we keep
these as static SVG.

## When to make a new primitive

Promote a pattern to `components/ui/` when:

- It's used in **at least three** distinct sections, OR
- It's tricky enough that re-implementing risks divergence (e.g. the
  magnetic hover).

Otherwise, inline the markup in the section component. Premature
abstraction is more painful than three similar div trees.
