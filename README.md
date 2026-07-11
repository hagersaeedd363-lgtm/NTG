> **Deployed site: FC Mobile Hub.** This branch also ships a standalone,
> zero-build static website about **EA SPORTS FC Mobile** under [`public/`](public/)
> (`index.html`, `styles.css`, `script.js`). It is a self-contained fan guide —
> game modes, an interactive squad-chemistry builder, a filterable live-event
> calendar, pro tips and an FAQ — with no dependencies. Netlify (`netlify.toml`)
> and Vercel (`vercel.json`) are configured to publish `public/` directly.
> Open `public/index.html` in a browser, or run `python3 -m http.server` from
> `public/`, to preview it locally. The Angular application below is retained
> as-is for reference.

---

# NTG Clarity Networks — Angular 17 Application

Production-ready Angular 17 implementation of the approved NTG Clarity Networks design
package. The application is a multi-page marketing/portfolio site covering Home, Products,
Services, Projects, Clients, About, full‑text Search and per‑item detail pages, with
path‑based routing, EN/AR internationalization (full RTL), environment configuration and a
REST integration layer.

## Quick start

```bash
npm install
npm start            # dev server at http://localhost:4200
npm run build:prod   # production build -> dist/ntg-clarity-networks
npm run lint         # ESLint (passes clean)
```

## Tech

- **Angular 17** standalone components, signals, `OnPush` change detection
- **Router** path‑based (`/products`, `/product/:id`, …) with a server SPA rewrite
- **Styling** the design's complete token + component CSS, ported verbatim (`src/styles.css`),
  plus scoped component styles where appropriate
- **State** service‑based + Angular signals (`DataService`, `I18nService`)
- **i18n** English + Arabic with document‑level `dir="rtl"`
- **REST** `ApiService` targeting Strapi (content) and Spring Boot/Java (transactional)
- **ESLint** configured and passing

## Architecture

The approved design ships as a single, highly‑interactive page driven by a large vanilla‑JS
rendering layer (command palette with faceted search, multi‑style testimonial sliders, an
interactive world map, carousels, faceted listing rails, etc.). To deliver **pixel‑ and
behaviour‑identical** output while providing a real Angular 17 workspace, the app uses an
**Angular shell hosting a ported rendering engine**:

| Layer | Responsibility |
|------|----------------|
| `AppComponent` | Mounts the navigation, the stable engine host (page containers, overlays, command palette) and the router outlet; boots the engine. |
| `NavComponent` | Faithful top navigation as a real Angular component (router-driven clicks, translated labels), preserving the exact element ids the engine drives. |
| `PageHostComponent` | Invisible route component — translates the active route into an engine render call. One component for every route keeps the host DOM mounted once. |
| `EngineService` | Installs `window` navigation shims (so the design's inline handlers route through the Angular Router), injects `assets/engine.js`, and exposes a ready‑queue. |
| `NavigationService` | Single source of truth mapping page names/detail indices ⇄ Router URLs. |
| `DataService` | Signals read‑model over the single canonical dataset (typed slices + counts). |
| `I18nService` | Language + direction state (EN/AR, RTL), persisted. |
| `ApiService` | Strapi + Spring Boot REST endpoints (content + contact). |
| `assets/engine.js` | The design's rendering/interaction logic, ported as a classic script (its four navigation entry‑points renamed so the Router owns URLs). |

Because the engine is loaded as a classic script, every interaction behaves exactly as in the
approved source, while navigation flows through Angular's Router (real URLs, deep‑linking,
back/forward). See `src/app/core/engine.service.ts` for the bridge.

## Routing & server rewrites

Routes: `/`, `/products`, `/services`, `/projects`, `/clients`, `/about`, `/search`,
`/product/:id`, `/project/:id`, `/service/:id`. Deep links require an SPA fallback — provided
for common hosts:

- `src/_redirects` — Netlify (copied to the build root)
- `server/nginx.conf` — NGINX
- `server/web.config` — IIS / Azure App Service

## Backend integration (Strapi + Spring Boot)

The app runs fully from the bundled approved dataset. To source content from the backends,
set `useRemoteApi` and the base URLs in `src/environments/environment*.ts` and wire
`ApiService.fetchPortfolio()` (Strapi) / `ApiService.submitContact()` (Spring Boot). The
provided `nginx.conf` includes commented proxy blocks for `/api/strapi` and `/api`.

## Internationalization

The floating control (bottom corner) toggles English ⇄ العربية, flipping `lang`/`dir` on
`<html>` for full RTL mirroring and translating the navigation chrome. The choice is
persisted to `localStorage`.

## Assets & fidelity notes

- Images embedded in the design as base64 are extracted to real files under
  `src/assets/extracted/` and used as‑is.
- Functional iconography the layout depends on (country flags, sector and technology glyphs)
  is provided as clean SVGs under `src/assets/{flags,sectors,tech}/`.
- Company logos, product mockups and team/leadership portraits that were **referenced by path
  but not included** in the package are intentionally not fabricated. They degrade to the
  design's own monogram/watermark fallbacks (and a runtime broken‑image → monogram helper),
  so the layout is never broken. Dropping the real binaries into `src/assets/` makes them
  appear with no code changes.
- Web fonts (Poppins, Playfair Display, Inter) load from Google Fonts via `index.html`.

See `IMPLEMENTATION.md` for the full build summary, decisions and known limitations.
