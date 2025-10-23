export function GuaranteeSection() {
  return (
    <section className="bg-primary/5">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-semibold text-slate-900">30-Tage Implementierungsgarantie</h2>
          <p className="mt-4 text-base text-slate-600">
            Wir wissen, dass Leadership-Zeit kostbar ist. Deshalb garantieren wir messbare Fortschritte innerhalb der ersten 30
            Tage. Sollten Sie keine Verbesserung Ihrer Prioritätenarchitektur sehen, begleiten wir Sie persönlich oder erstatten
            das Investment.
          </p>
        </div>
        <div className="md:w-1/3">
          <div className="rounded-2xl border border-primary/20 bg-white p-6 shadow-lg shadow-primary/10">
            <h3 className="text-lg font-semibold text-primary">Was in der Garantie inkludiert ist</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Persönliches Onboarding mit KPI-Definition</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Individuelle Kalendersichtung & Quick-Wins</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Live-Support bei Delegations-Implementierung</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
