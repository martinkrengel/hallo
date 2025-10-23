# Zeitmanagement 1x1 Premium MVP

Dieses Repository enthält den MVP für die Premium Edition des Kurses "Zeitmanagement 1x1", ausgerichtet auf Führungskräfte, Selbstständige und KMU-Inhaber:innen. Der MVP umfasst eine Next.js 14 Anwendung (App Router, TypeScript, Tailwind CSS) mit einer Landingpage, die die im PRD definierten Kernabschnitte abbildet.

## Projektstruktur

```
.
├── app/
│   ├── api/leads/route.ts          # Stub-Endpunkt für Lead-Capture
│   ├── components/sections/        # Isolierte UI-Sektionen gemäß PRD
│   ├── globals.css                 # Tailwind-Basisstyles & Design-Token
│   ├── layout.tsx                  # Globale Layout- und Navigationsstruktur
│   └── page.tsx                    # Zusammenstellung der Landingpage-Sektionen
├── docs/                           # Produktdokumentation (PRD)
├── lib/content.ts                  # Strukturierte Inhalte & Copy-Module
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Entwicklung

1. Dependencies installieren: `npm install`
2. Entwicklungsserver starten: `npm run dev`
3. Anwendung unter `http://localhost:3000` öffnen

## Nächste Schritte

- Anbindung eines echten CRM/Marketing-Automation-Systems im Lead-Endpunkt
- Validierung der Copy mit Zielkund:innen und A/B-Testing der Hero-Sektion
- Erstellung finaler Executive-Assets (Planner, Scorecard, ROI-Kalkulator)
