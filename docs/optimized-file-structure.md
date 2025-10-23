# Optimized Project File Structure

This document outlines a scalable, maintainable file structure tailored for the Zeitmanagement 1x1 premium landing experience. It keeps the current MVP lightweight while creating clear extension points for future capabilities such as gated content, payments, and CRM integrations.

## Guiding Principles

- **Separation of concerns**: Group UI, data, API, and configuration layers to reduce coupling and simplify maintenance.
- **Future-ready**: Reserve namespaces for upcoming features (e.g., authenticated dashboards, marketing automation) without disrupting today’s pages.
- **Reusable primitives**: Centralize typography, layout primitives, and utilities for consistent branding and faster iteration.
- **Documentation-first**: Keep architecture decisions close to the code so new contributors can ramp up quickly.

## High-Level Layout

```text
/
├── app/
│   ├── (marketing)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── components/
│   │   │   ├── sections/
│   │   │   ├── layouts/
│   │   │   └── ui/
│   │   ├── data/
│   │   └── legal/
│   ├── (dashboard)/
│   │   └── ... (reserved for post-MVP client portal)
│   ├── api/
│   │   ├── leads/route.ts
│   │   ├── crm/route.ts (placeholder for external CRM sync)
│   │   └── payments/route.ts (placeholder for checkout provider)
│   └── globals.css
├── lib/
│   ├── content/
│   │   ├── index.ts
│   │   └── types.ts
│   ├── analytics/
│   ├── crm/
│   ├── payments/
│   └── utils/
├── public/
│   ├── images/
│   ├── fonts/
│   └── icons/
├── styles/
│   └── tokens.css (design tokens shared between Tailwind and CSS)
├── tests/
│   ├── e2e/
│   └── unit/
├── docs/
│   ├── prd/
│   ├── architecture/
│   └── decisions/
├── scripts/
│   ├── generate-sitemap.ts
│   └── sync-crm.ts
├── .env.example
├── README.md
└── package.json
```

## Directory Details

### `app/(marketing)/`
The public marketing surface for the Zeitmanagement 1x1 offer. Keeping it in its own route group isolates marketing-only dependencies from future authenticated areas.

- **`layout.tsx`**: Provides the shared navigation, footer, and SEO defaults for all marketing pages.
- **`components/sections/`**: Hero, personas, pricing, testimonials, FAQ, and other long-form sections broken into self-contained components.
- **`components/layouts/`**: Shared layout shells such as split grids, feature lists, or content-with-media patterns.
- **`components/ui/`**: Primitive UI elements (buttons, badges, cards) aligned with the premium brand system.
- **`data/`**: Local JSON/TS modules that power static marketing copy to keep components declarative.
- **`legal/`**: Static legal disclosures (`impressum`, privacy policy) that share the marketing layout.

### `app/api/`
Server-only handlers that wrap external services and business logic.

- **`leads/route.ts`**: Receives lead submissions from the marketing form and delegates to CRM adapters.
- **`crm/route.ts` (future)**: Accepts CRM webhooks (e.g., HubSpot, Pipedrive) for lead status updates.
- **`payments/route.ts` (future)**: Normalizes checkout events from Stripe or Paddle.

### `lib/`
Business logic and integration layers shared across the app.

- **`content/`**: Typed content sources, markdown loaders, and helper utilities for cross-section reuse.
- **`analytics/`**: Client/server wrappers for analytics vendors with privacy-aware defaults.
- **`crm/`**: Adapter pattern for CRM systems; includes data mappers and service clients.
- **`payments/`**: Abstractions for billing providers, useful once premium upsells go live.
- **`utils/`**: Generic helpers (formatting, validation, feature flags).

### `public/`
Static assets served directly (logos, photography, pdfs). Grouping assets by type keeps the tree predictable for designers and marketers.

### `styles/`
Central home for design tokens and shared CSS. Tailwind’s configuration can import token values to guarantee parity between utility classes and custom CSS.

### `tests/`
Testing harness organized by type.

- **`unit/`**: React Testing Library + Vitest suites for components and hooks.
- **`e2e/`**: Playwright tests covering the main marketing funnel (form submit, pricing modal, etc.).

### `docs/`
Product and engineering documentation.

- **`prd/`**: Source PRDs and user research summaries.
- **`architecture/`**: High-level diagrams, ADRs, and file-structure docs (including this file).
- **`decisions/`**: Architecture Decision Records for meaningful changes.

### `scripts/`
One-off Node scripts used for automation (e.g., CRM sync, sitemap generation). Keeping them in one place simplifies CI/CD integration.

### `.env.example`
Template capturing all environment variables required for local development and deployment.

## Migration Notes

1. **Establish route groups**: Move the existing `app/page.tsx`, legal pages, and section components into `app/(marketing)/` to keep the root `app/` clean as the product grows.
2. **Modularize UI primitives**: Extract shared buttons, badges, headings, and layout primitives into `app/(marketing)/components/ui` so sections can stay content-focused.
3. **Centralize content**: Relocate `lib/content.ts` into `lib/content/index.ts` and introduce `lib/content/types.ts` for strong typing. Consider moving static copy to JSON for CMS readiness.
4. **Document ADRs**: Use `docs/decisions/` to track major architectural choices, starting with the migration to grouped routes and shared content modules.
5. **Add testing harness**: Create `tests/unit` and `tests/e2e` scaffolding once dependencies install successfully to avoid future large refactors.

By adopting this structure incrementally, the team can support new premium offerings without disrupting the lean marketing site already in production.
