import { personas } from "@/lib/content";

export function PersonasSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-slate-900">Für welche Leader wurde das Programm gebaut?</h2>
        <p className="mt-4 max-w-2xl text-base text-slate-600">
          Validiert mit mehr als 20 Führungskräften aus Agenturen, dem gehobenen Mittelstand und Corporate-Scale-ups. Wählen Sie
          die Persona, die Ihrer Situation entspricht, und sehen Sie, welche Ergebnisse erreichbar sind.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {personas.map((persona) => (
            <article key={persona.name} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-primary">{persona.name}</h3>
              <p className="mt-2 text-xs uppercase tracking-wider text-slate-500">{persona.title}</p>
              <p className="mt-4 text-sm text-slate-600">{persona.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {persona.goals.map((goal) => (
                  <li key={goal} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
