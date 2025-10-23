export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-24 md:flex-row md:items-center">
        <div className="md:w-3/5">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Leadership-Zeitmanagement neu gedacht
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Führen mit Fokus: In 6 Wochen zu 10 Stunden Mehrwert-Zeit pro Woche
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Die Premium Edition des Zeitmanagement 1x1 übersetzt bewährte Strategien in skalierbare Führungsrituale für
            Selbstständige, Unternehmer:innen und Executive-Teams. Erleben Sie, wie Delegation, Kalenderarchitektur und
            Energie-Management zu messbarem Wachstum führen.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-light"
            >
              Jetzt Premium-Zugang sichern
            </a>
            <a
              href="#lead-capture"
              className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary-light hover:text-primary-light"
            >
              Executive Checkliste erhalten
            </a>
          </div>
        </div>
        <div className="md:w-2/5">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-primary/10">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Ergebnisse unserer Kund:innen</p>
            <ul className="mt-4 space-y-4 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                <span>10+ Stunden Führungszeit pro Woche zurückgewonnen</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                <span>92% bestätigen eine klarere Prioritätenarchitektur</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                <span>4,8/5 Zufriedenheit in Executive-Teams</span>
              </li>
            </ul>
            <p className="mt-6 text-xs text-slate-500">
              Enthält Bonusmaterial: Executive Planner, Delegation Scorecard, ROI-Kalkulator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
