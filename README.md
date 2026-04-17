# İleri Group Sigorta — Website

Statik olarak üretilen, çok dilli (TR/EN) kurumsal web sitesi. Next.js 16 ile yazılmış, GitHub Pages üzerinde host ediliyor.

**Canlı:** https://ilerigroupsigorta.com

---

## Tech Stack

| Katman | Araç |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| UI | React 19, Tailwind CSS v4, shadcn/ui (Radix primitives) |
| i18n | next-intl (`tr`, `en` — `localePrefix: "always"`) |
| TypeScript | 6.x |
| Paket yöneticisi | npm (lockfile: `package-lock.json`) |
| Host | GitHub Pages (custom domain) |
| CI/CD | GitHub Actions |

---

## Quick Start (Lokal Geliştirme)

```bash
npm install        # bağımlılıkları kur
npm run dev        # http://localhost:3000
```

Dil yollarıyla çalış:
- `http://localhost:3000/tr/` — Türkçe
- `http://localhost:3000/en/` — İngilizce
- `http://localhost:3000/` — `/tr/`'ye yönlendirir

Prod build'i lokal doğrulamak için:

```bash
npm run build      # out/ klasörüne statik export
npx serve out      # http://localhost:3000 üzerinden static sunumu test et
```

---

## Build & Deploy Akışı

Aşağıdaki diyagram, kod yazmaktan canlıya çıkmaya kadar olan akışı özetliyor.

```
┌─────────────────┐   feature branch            ┌─────────────┐
│  local dev      │ ───────────▶  PR #N  ─────▶ │    main     │  (geliştirme branch'i,
│  (feat/*, fix/*)│                             │  "clean HEAD"│   deploy YAPMAZ)
└─────────────────┘                             └──────┬──────┘
                                                        │
                                                        │  release PR
                                                        │  (main → release)
                                                        ▼
                                                ┌─────────────┐
                                                │   release   │  (prod branch;
                                                └──────┬──────┘   her push = deploy)
                                                        │
                                                        │ GitHub Actions tetiklenir
                                                        │  ┌────────────────────┐
                                                        └─▶│ build + deploy job │
                                                           │  (npm ci, next build,
                                                           │   GH Pages artifact)
                                                           └────────┬───────────┘
                                                                    ▼
                                                      https://ilerigroupsigorta.com
```

### Yeni bir özellik nasıl canlıya çıkar?

1. **Feature branch aç** (her zaman `main`'den):
   ```bash
   git checkout main && git pull
   git checkout -b feat/<short-name>
   ```
2. **Kodla + test et** lokalde (`npm run dev`).
3. **Commit + push + PR (main'e):**
   ```bash
   git push -u origin feat/<short-name>
   gh pr create --base main --title "feat: ..." --body "..."
   ```
4. **PR'ı merge et** (squash). Bu adımda **deploy olmaz** — sadece `main`'e giriyor.
5. **Release PR aç** (`main` → `release`):
   ```bash
   gh pr create --base release --head main --title "release: v0.3.x" --body "Changelog..."
   ```
6. **Release PR'ı merge et.** `release` branch'ine push olduğu an **GitHub Actions tetiklenir** ve canlıya gider (~45-60 sn).
7. **Doğrulama:** Canlı siteyi aç → footer'daki `· v0.3.x` yeni versiyon mu?

### Neden iki branch?

- `main` = "üzerinde çalıştığımız yer" — birden fazla feature paralel merge olabilir
- `release` = "canlıdaki hali" — sadece onaylı, birlikte deploy edilebilir değişiklikler içerir

Bu ayrım, main'e bir şey merge ettiğinde anında prod'a gitmesin diye — **release timing'i sende kalır**.

---

## GitHub Actions Workflow

**Dosya:** `.github/workflows/build-deploy.yml`

### Trigger

```yaml
on:
  push:
    branches: [release]   # ❗ sadece release branch'ine push'ta çalışır
  workflow_dispatch:       # manuel tetikleme (Actions sekmesinden)
```

### Job Zinciri

1. **`build`** (~35-40 sn):
   - `actions/checkout@v4`
   - `actions/setup-node@v6` (Node 24, npm cache)
   - `npm ci` (lockfile'dan temiz kurulum — 520+ paket)
   - `npm run build` (Next.js static export → `out/` klasörü)
   - `actions/configure-pages@v6`
   - `actions/upload-pages-artifact@v5` (tar.gz'li artifact üretir)

2. **`deploy`** (~8-10 sn, `build`'e bağımlı):
   - `actions/deploy-pages@v5` → artifact'i Pages CDN'ine push'lar

### Environment Protection

`github-pages` environment'ı sadece `main` ve `release` branch'lerinden deploy'a izin veriyor. Başka bir branch'ten deploy denersen "Branch X is not allowed to deploy to github-pages" hatası alırsın.

Yeni bir branch izin vermek için:

```bash
gh api --method POST /repos/ileri-group-sigorta/ileri-group-website/environments/github-pages/deployment-branch-policies \
  -f name=<branch-name> -f type=branch
```

---

## Custom Domain & DNS

**Domain:** `ilerigroupsigorta.com` (Namecheap'te kayıtlı)

### Namecheap DNS kayıtları

| Type | Host | Value | TTL |
|---|---|---|---|
| A | @ | `185.199.108.153` | Auto |
| A | @ | `185.199.109.153` | Auto |
| A | @ | `185.199.110.153` | Auto |
| A | @ | `185.199.111.153` | Auto |
| CNAME | www | `ileri-group-sigorta.github.io.` | Auto |

### GitHub tarafı

- **Repo Settings → Pages → Custom domain:** `ilerigroupsigorta.com`
- **Enforce HTTPS:** ✅ açık
- `public/CNAME` dosyası domain'i içeriyor — build sırasında `out/CNAME`'e kopyalanıyor (GH Pages custom domain bağlantısını kalıcı tutmak için gerekli)
- `public/.nojekyll` dosyası Jekyll yorumlayıcısını devre dışı bırakıyor (Next.js'in `_next/` klasörünün serve edilmesi için şart)

---

## Versioning

`package.json`'daki `version` alanı **canlıdaki versiyonun göstergesi** — footer'da küçük gri metin olarak gösteriliyor (`· v0.3.x`). Yeni bir sürüm yayınlarken:

1. Feature PR'ı içinde `"version"` alanını bump'la:
   - **patch** (`0.3.5` → `0.3.6`) — hot fix, CI değişiklikleri, küçük UI düzeltmeleri
   - **minor** (`0.3.5` → `0.4.0`) — yeni sayfa, yeni özellik
   - **major** (`0.3.5` → `1.0.0`) — kırıcı değişiklik (URL yapısı, i18n breaking vs.)
2. `npm install --package-lock-only` ile lockfile'ı güncelle.
3. Commit + PR.

Canlıda yeni versiyonu doğrulamak için footer'a bak: `© 2025 İleri Group Sigorta. ... · v0.3.6`

---

## Sık Karşılaşılan Sorunlar

**Build hatası: `Route /... used headers()`**
→ Bir page'de `setRequestLocale(locale)` çağrılmamış. Her `[locale]/**/page.tsx` dosyasında locale alındıktan hemen sonra bu çağrı olmalı (static export için şart).

**Deploy reddedildi: `Branch X is not allowed to deploy to github-pages`**
→ Environment protection rule'una o branch'i ekle (yukarıdaki `gh api` komutuna bak).

**Canlıda değişiklik görünmüyor**
→ (1) Workflow gerçekten `release`'e mi tetiklendi? `gh run list --branch release --limit 3`  (2) Tarayıcı cache'ini temizle (Ctrl+Shift+R). GitHub Pages CDN'inin TTL'i de ~10 dakika olabilir.

**DNS hatası: `NS_ERROR_NET_INADEQUATE_SECURITY_PROTOCOL`**
→ "Enforce HTTPS" toggle'ı Pages settings'te aktif mi? İlk sertifika provizyonu 15 dk kadar sürebilir.

**Dev modunda "hydration mismatch" uyarısı**
→ Büyük ihtimalle **Dark Reader** gibi tarayıcı eklentisi HTML'e attribute ekliyor. Gizli sekmede test et — gerçek bug'sa açık kalır.

---

## Dizin Yapısı

```
.
├── .github/workflows/build-deploy.yml   # CI/CD pipeline
├── messages/                            # i18n JSON'ları (tr.json, en.json)
├── public/
│   ├── CNAME                            # custom domain
│   └── .nojekyll                        # GH Pages Jekyll bypass
├── src/
│   ├── app/
│   │   ├── page.tsx                     # kök / redirect → /tr/
│   │   ├── layout.tsx                   # root layout (pass-through)
│   │   ├── sitemap.ts + robots.ts       # static metadata routes
│   │   └── [locale]/                    # lokalize sayfalar
│   │       ├── layout.tsx               # <html>, <body>, intl provider, schema.org
│   │       ├── page.tsx                 # Ana Sayfa
│   │       ├── hakkimizda/
│   │       ├── sigortalar/
│   │       ├── bireysel/
│   │       ├── kurumsal/
│   │       ├── saglik-turizmi/
│   │       ├── online-islemler/
│   │       └── iletisim/
│   ├── components/                      # UI component'ları (shadcn + custom)
│   ├── i18n/                            # next-intl config
│   └── lib/utils.ts
├── next.config.ts                       # output: 'export', trailingSlash vs.
└── package.json                         # version = canlıda görünen versiyon
```
