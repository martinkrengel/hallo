import { metrics } from "@/lib/content";

export function MetricsSection() {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold">Messbare Resultate, die Vorstand und Team überzeugen</h2>
          <p className="mt-4 text-base text-primary-light/80">
            Unsere Kund:innen nutzen präzise Kennzahlen, um die Wirkung des Programms intern zu kommunizieren und Budgets zu
            sichern. Jeder KPI ist Teil des Executive Dashboards, das Sie im Kurs erhalten.
          </p>
        </div>
        <div className="grid flex-1 gap-6 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl bg-white/10 p-6 text-center shadow-lg shadow-black/10">
              <div className="text-4xl font-semibold">{metric.value}</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-white/80">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
