# İleri Group Sigorta — Website

Statically-generated, bilingual (TR/EN) corporate website. Built with Next.js 16, hosted on GitHub Pages.

**Live:** https://ilerigroupsigorta.com

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| UI | React 19, Tailwind CSS v4, shadcn/ui (Radix primitives) |
| i18n | next-intl (`tr`, `en` — `localePrefix: "always"`) |
| TypeScript | 6.x |
| Package manager | npm (lockfile: `package-lock.json`) |
| Hosting | GitHub Pages (custom domain) |
| CI/CD | GitHub Actions |

---

## Quick Start (Local Development)

```bash
npm install        # install dependencies
npm run dev        # http://localhost:3000
```

Work against locale paths:
- `http://localhost:3000/tr/` — Turkish
- `http://localhost:3000/en/` — English
- `http://localhost:3000/` — redirects to `/tr/`

Verify the production build locally:

```bash
npm run build      # static export into out/
npx serve out      # serve the static output on http://localhost:3000
```

---

## Build & Deploy Flow

The diagram below shows the path from writing code to shipping it live.

```
┌─────────────────┐   feature branch            ┌─────────────┐
│  local dev      │ ───────────▶  PR #N  ─────▶ │    main     │  (development branch,
│  (feat/*, fix/*)│                             │ "clean HEAD"│   does NOT deploy)
└─────────────────┘                             └──────┬──────┘
                                                       │
                                                       │  release PR
                                                       │  (main → release)
                                                       ▼
                                               ┌─────────────┐
                                               │   release   │  (prod branch;
                                               └──────┬──────┘   any push = deploy)
                                                      │
                                                      │ GitHub Actions fires
                                                      │  ┌────────────────────┐
                                                      └─▶│ build + deploy job │
                                                         │  (npm ci, next build,
                                                         │   GH Pages artifact)
                                                         └────────┬───────────┘
                                                                  ▼
                                                    https://ilerigroupsigorta.com
```

### Shipping a new feature

1. **Create a feature branch** (always from `main`):
   ```bash
   git checkout main && git pull
   git checkout -b feat/<short-name>
   ```
2. **Code and test** locally (`npm run dev`).
3. **Commit, push, open a PR to main:**
   ```bash
   git push -u origin feat/<short-name>
   gh pr create --base main --title "feat: ..." --body "..."
   ```
4. **Squash-merge the PR.** This **does not deploy** — it only lands on `main`.
5. **Open a release PR** (`main` → `release`):
   ```bash
   gh pr create --base release --head main --title "release: v0.3.x" --body "Changelog..."
   ```
6. **Merge the release PR.** The moment the commit lands on `release`, **GitHub Actions fires** and the site is live in ~45-60 s.
7. **Verify:** open the live site — does the footer show the new `· v0.3.x`?

### Why two branches?

- `main` = "where we work" — multiple features can land in parallel
- `release` = "what's live" — only vetted, shippable-together changes

This separation lets you control **release timing** — merging to main does not push anything to production.

---

## GitHub Actions Workflow

**File:** `.github/workflows/build-deploy.yml`

### Trigger

```yaml
on:
  push:
    branches: [release]   # only pushes to the release branch trigger a deploy
  workflow_dispatch:       # manual trigger from the Actions tab
```

### Job chain

1. **`build`** (~35-40 s):
   - `actions/checkout@v4`
   - `actions/setup-node@v6` (Node 24, npm cache)
   - `npm ci` (clean install from lockfile — ~520 packages)
   - `npm run build` (Next.js static export → `out/`)
   - `actions/configure-pages@v6`
   - `actions/upload-pages-artifact@v5` (produces the Pages-formatted tarball)

2. **`deploy`** (~8-10 s, depends on `build`):
   - `actions/deploy-pages@v5` — pushes the artifact to the Pages CDN

### Environment protection

The `github-pages` environment only allows deploys from `main` and `release`. Attempting to deploy from another branch raises *"Branch X is not allowed to deploy to github-pages"*.

To whitelist a new branch:

```bash
gh api --method POST /repos/ileri-group-sigorta/ileri-group-website/environments/github-pages/deployment-branch-policies \
  -f name=<branch-name> -f type=branch
```

---

## Custom Domain & DNS

**Domain:** `ilerigroupsigorta.com` (registered at Namecheap)

### Namecheap DNS records

| Type | Host | Value | TTL |
|---|---|---|---|
| A | @ | `185.199.108.153` | Auto |
| A | @ | `185.199.109.153` | Auto |
| A | @ | `185.199.110.153` | Auto |
| A | @ | `185.199.111.153` | Auto |
| CNAME | www | `ileri-group-sigorta.github.io.` | Auto |

### GitHub side

- **Repo Settings → Pages → Custom domain:** `ilerigroupsigorta.com`
- **Enforce HTTPS:** ✅ enabled
- `public/CNAME` contains the domain — copied to `out/CNAME` during build (required so Pages keeps the custom domain binding after each deploy)
- `public/.nojekyll` disables Jekyll processing (required for Next.js's `_next/` directory to be served)

---

## Versioning

The `version` field in `package.json` is **the indicator of what's live** — it's shown as a subtle grey line in the footer (`· v0.3.x`). When publishing a new release:

1. Bump `"version"` in the feature PR:
   - **patch** (`0.3.5` → `0.3.6`) — hot fix, CI tweaks, small UI corrections
   - **minor** (`0.3.5` → `0.4.0`) — new page, new feature
   - **major** (`0.3.5` → `1.0.0`) — breaking change (URL structure, i18n, etc.)
2. Refresh the lockfile: `npm install --package-lock-only`.
3. Commit and open a PR.

After deploy, check the footer: `© 2025 İleri Group Sigorta. ... · v0.3.6`.

---

## Troubleshooting

**Build error: `Route /... used headers()`**
→ A page is missing `setRequestLocale(locale)`. Every `[locale]/**/page.tsx` file must call it right after reading the locale (mandatory for static export).

**Deploy rejected: `Branch X is not allowed to deploy to github-pages`**
→ Add the branch to the environment protection rules (see the `gh api` command above).

**No change visible on the live site**
→ (1) Did the workflow actually fire on `release`? `gh run list --branch release --limit 3`  (2) Clear the browser cache (Ctrl+Shift+R). The Pages CDN TTL is also ~10 minutes.

**DNS error: `NS_ERROR_NET_INADEQUATE_SECURITY_PROTOCOL`**
→ Is the "Enforce HTTPS" toggle enabled in Pages settings? The first TLS certificate provisioning can take ~15 minutes.

**Dev-mode "hydration mismatch" warning**
→ Most likely a browser extension (e.g. **Dark Reader**) injecting attributes into the HTML. Test in an incognito tab — if the warning disappears, it's the extension, not a real bug.

---

## Directory Layout

```
.
├── .github/workflows/build-deploy.yml   # CI/CD pipeline
├── messages/                            # i18n JSON (tr.json, en.json)
├── public/
│   ├── CNAME                            # custom domain
│   └── .nojekyll                        # bypass Jekyll on GH Pages
├── src/
│   ├── app/
│   │   ├── page.tsx                     # root / redirect → /tr/
│   │   ├── layout.tsx                   # root layout (pass-through)
│   │   ├── sitemap.ts + robots.ts       # static metadata routes
│   │   └── [locale]/                    # localized pages
│   │       ├── layout.tsx               # <html>, <body>, intl provider, schema.org
│   │       ├── page.tsx                 # Home
│   │       ├── hakkimizda/              # About
│   │       ├── sigortalar/              # Insurance catalogue
│   │       ├── bireysel/                # Individual
│   │       ├── kurumsal/                # Corporate
│   │       ├── saglik-turizmi/          # Health tourism
│   │       ├── online-islemler/         # Online operations
│   │       └── iletisim/                # Contact
│   ├── components/                      # UI components (shadcn + custom)
│   ├── i18n/                            # next-intl config
│   └── lib/utils.ts
├── next.config.ts                       # output: 'export', trailingSlash, etc.
└── package.json                         # version = the number shown in the live footer
```
