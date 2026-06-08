# Typography

Three families, three purposes — kept separate to maintain editorial
contrast. All three load via [`next/font/google`](https://nextjs.org/docs/app/api-reference/components/font)
in [app/layout.tsx](../../app/layout.tsx) and are exposed as
CSS variables so the `@theme` block can wire them into Tailwind.

## Families

| Family | CSS variable | Tailwind utility | Use |
| --- | --- | --- | --- |
| **Space Grotesk** | `--font-display` | `font-display` | Headlines, big numbers, marquee, logo |
| **Inter** | `--font-sans` | `font-sans` (default `body`) | All body copy and UI text |
| **JetBrains Mono** | `--font-mono` | `font-mono` | Eyebrows, metadata, times, code-like labels |

Loaded weights:

- Space Grotesk — 400, 500, 600, 700
- Inter — 400, 500, 600, 700
- JetBrains Mono — 400, 500, 600

## Type scale

Defined in [globals.css](../../app/globals.css) under `@theme`. Each entry
includes `--text-*--line-height` (and `--text-*--letter-spacing` where it
matters) so the Tailwind `text-*` utility applies the whole spec, not just
the font size.

| Utility | Size | Use |
| --- | --- | --- |
| `text-display-2xl` | `clamp(48px, 9.2vw, 150px)` | Hero `<h1>` |
| `text-display-xl` | `clamp(40px, 6.5vw, 86px)` | CTA `<h2>` |
| `text-display-lg` | `clamp(34px, 5vw, 68px)` | Section `<h2>` |
| `text-display-md` | `34px` | Marquee tokens |
| `text-h2` | `24px` | Feature card title (default) |
| `text-h3` | `20px` | Speaker name, session title |
| `text-body-lg` | `18px` | CTA paragraph, intro copy |
| `text-body` | `16px` | Default body copy |
| `text-body-sm` | `14px` | Footer links, secondary copy |
| `text-eyebrow` | `12px` w/ `0.16em` tracking | Section tags, pill labels |
| `text-mono-sm` | `12px` | Editorial markers (e.g. `/ 01 · HOME`) |

## Usage rules

1. **Display** — Reserved for `<h1>` and `<h2>` elements, plus a few
   editorial flourishes (the speaker initials in the avatar card, the
   marquee tokens). Always `font-bold` or `font-semibold`.
2. **Sans (Inter)** — Default body font. Don't switch to display for
   sub-headings smaller than `text-h2`.
3. **Mono** — Acts as a typographic accent. Use sparingly to mark
   metadata: times, durations, country counts, section numbers. Always
   pair with `text-eyebrow` or `text-mono-sm`.
4. **Letter-spacing** — Display sizes ship with negative tracking
   (`-0.03em` and tighter). Don't override it.
5. **Color** — Default to `text-ink`. Use `text-ink-dim` for body
   paragraphs at `text-body-sm` and smaller. `text-ink-faint` is for
   metadata only.

## Examples

```tsx
// Hero headline — display, biggest
<h1 className="font-display text-display-2xl font-bold">
  Where Africa
</h1>

// Section heading — display, mid
<h2 className="font-display text-display-lg font-bold">
  Built for the African .NET community
</h2>

// Body
<p className="text-body text-ink-dim">…</p>

// Editorial eyebrow
<span className="font-mono text-eyebrow tracking-[0.16em] text-brand-red">
  WHY ATTEND
</span>
```

## Don't

- Don't introduce a fourth typeface.
- Don't apply `text-display-*` to non-heading elements.
- Don't use `font-mono` for paragraph text — it's an accent only.
