import { pricingTiers } from "@/lib/content";

export function PricingSection() {
  return (
    <section id="pricing" className="bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Investment in nachhaltige Führung</h2>
          <p className="mt-4 text-base text-slate-600">
            Wählen Sie das Paket, das zu Ihren Wachstumszielen passt. Alle Angebote beinhalten unsere 30-Tage
            Implementierungsgarantie und Zugriff auf sämtliche Premium-Assets.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div key={tier.name} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{tier.cadence}</p>
                <h3 className="mt-2 text-2xl font-semibold text-primary">{tier.name}</h3>
                <p className="mt-4 text-3xl font-bold text-slate-900">{tier.price}</p>
                <p className="mt-3 text-sm text-slate-600">{tier.description}</p>
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#lead-capture"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-light"
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-slate-500">
          Bezahlung via Kreditkarte oder Rechnung möglich · Flexible Zahlungspläne für Teams auf Anfrage
        </p>
      </div>
    </section>
  );
}
