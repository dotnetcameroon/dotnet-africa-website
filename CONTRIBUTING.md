# Contributing

Thanks for your interest in helping build the .NET Conf Africa website!
This is a community-run project — contributions of all sizes are welcome,
from fixing a typo to designing a new section.

## Code of Conduct

This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md).
By participating, you agree to uphold it.

## Ways to contribute

- **Report a bug** — open an issue using the [Bug report](https://github.com/dotnetcameroon/dotnet-africa-website/issues/new?template=bug_report.yml) template.
- **Suggest a feature** — open an issue using the [Feature request](https://github.com/dotnetcameroon/dotnet-africa-website/issues/new?template=feature_request.yml) template.
- **Ask a question** — use [GitHub Discussions](https://github.com/dotnetcameroon/dotnet-africa-website/discussions) (please don't open an issue for questions).
- **Submit a pull request** — see below.

## Development setup

Requirements: **Node 20+** and **pnpm 10+**.

```bash
git clone https://github.com/dotnetcameroon/dotnet-africa-website.git
cd dotnet-africa-website
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Before opening a PR, verify locally:

```bash
pnpm lint     # ESLint
pnpm build    # production build (also runs the TypeScript checker)
```

## Branch model

- `dev` is the default branch and the **target for all PRs**.
- Branch names use `kind/short-description`, e.g.
  - `feat/speaker-detail-page`
  - `fix/marquee-pause-on-mobile`
  - `docs/clarify-tokens`
- Common kinds: `feat`, `fix`, `refactor`, `docs`, `chore`, `test`, `style`.

## Commit style

- Imperative mood, lowercase first word, no trailing period.
  - `add speaker bios to data layer`
  - `fix nav hide threshold on small screens`
- Body wraps at ~72 chars; explain the *why* when it isn't obvious from
  the diff.

## Pull requests

- Open against `dev`.
- Keep PRs **focused** — one feature or fix per PR. A small refactor
  alongside a fix is usually fine; a large refactor bundled with a fix is
  hard to review.
- Fill in the PR template — summary + test plan, at minimum.
- Link the issue with `Fixes #123` / `Closes #123` so it auto-closes on
  merge.
- Be ready for review feedback; we aim for a first response within a few
  days.

## Coding conventions

The full set of conventions lives in [`docs/`](docs/README.md). The
short version:

### Components

- **Server-first.** Add `"use client"` only when a component needs state,
  effects, browser APIs, or event handlers. See
  [docs/architecture.md](docs/architecture.md#server-vs-client-components).
- **Reuse primitives.** Use `<Button>`, `<Chip>`, `<Badge>`, `<Reveal>`,
  etc. from `components/ui/` instead of rebuilding them.
- **Path alias.** Always import via `@/…` — never relative `../../…`.

### Styling

- **Use tokens.** Never type a raw hex, font size, or px shadow.
  Add a new `@theme` token in [`app/globals.css`](app/globals.css) and
  document it in [`docs/design-system/tokens.md`](docs/design-system/tokens.md).
- **No `tailwind.config.js`** — Tailwind v4 reads from the CSS.
- **Mobile-first** breakpoints. Tailwind's default scale; the only
  hand-picked breakpoint is `880px` for the nav links.

### Data

- Static content (speakers, schedule, etc.) lives under [`data/`](data/)
  with TypeScript types. To add a speaker or session, edit the relevant
  data file — section components will pick it up automatically.

### Tests

The project doesn't have an automated test suite yet. Until it does,
verify changes in the browser at multiple breakpoints and (ideally) on a
touch device.

## License

By contributing, you agree that your contributions will be licensed under
the [MIT License](LICENSE).
