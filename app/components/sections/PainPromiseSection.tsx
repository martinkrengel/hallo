import { pains, promises } from "@/lib/content";

export function PainPromiseSection() {
  return (
    <section id="pain-promise" className="bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">Vom Firefighting zur Führungsarchitektur</h2>
          <p className="mt-4 text-base text-slate-600">
            Führungskräfte berichten von identischen Mustern: Dauerstress, ungefilterte Anfragen, keine Zeit für Strategie.
            Die Premium Edition adressiert diese Engpässe mit einem skalierbaren Betriebssystem für Fokus, Delegation und
            Accountability.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Schmerzpunkte</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {pains.map((pain) => (
                <li key={pain} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>{pain}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Transformation</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {promises.map((promise) => (
                <li key={promise} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>{promise}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
