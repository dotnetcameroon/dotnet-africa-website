# .NET Conf Africa — Website

The official website for **.NET Conf Africa 2026** — three days of talks,
workshops, and community for .NET developers across the continent.
Johannesburg, **Nov 24–26, 2026**.

A community-run, open-source project by [.NET Cameroon](https://github.com/dotnetcameroon).

## Stack

- **[Next.js 16](https://nextjs.org/)** (App Router, React Server Components, Turbopack)
- **[React 19](https://react.dev/)**
- **[Tailwind CSS v4](https://tailwindcss.com/)** — CSS-first config via `@theme`
- **[Motion](https://motion.dev/)** (Framer Motion v12) for scroll & gesture animation
- **[lucide-react](https://lucide.dev/)** for icons
- **TypeScript**, **pnpm**, **ESLint**

## Quick start

Requirements: **Node 20+** and **pnpm 10+**.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
pnpm build   # production build
pnpm start   # serve the production build
pnpm lint    # ESLint
```

## Project structure

```text
app/             Next.js App Router (layout, page, globals.css with @theme tokens)
components/      UI components, split by purpose
  layout/          Nav, Footer, Logo, SocialIcons
  home/            Home-page sections (Hero, Marquee, …, CTA)
  ui/              Reusable primitives (Button, Chip, Badge, Reveal, …)
  effects/         Browser-only effects (HeroCanvas, CustomCursor, GrainOverlay)
data/            Typed content (speakers, schedule)
lib/             Small framework-agnostic helpers
docs/            Design system, architecture, libraries — start at docs/README.md
```

## Documentation

Full project documentation lives in [`docs/`](docs/README.md):

- [Design system](docs/design-system/README.md) — tokens, typography, components, motion
- [Architecture](docs/architecture.md) — folder layout, server/client boundaries, data layer
- [Libraries](docs/libraries.md) — third-party deps and gotchas

## Contributing

We welcome contributions from the community — see
[CONTRIBUTING.md](CONTRIBUTING.md) for setup, coding conventions, and the
PR process. All participants are expected to follow our
[Code of Conduct](CODE_OF_CONDUCT.md).

## Security

To report a vulnerability privately, see [SECURITY.md](SECURITY.md).

## License

[MIT](LICENSE) © 2026 .NET Cameroon
