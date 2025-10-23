const pillars = [
  {
    title: "Strategic Time Architecture",
    description:
      "Designen Sie Führungskalender und Entscheidungsfenster so, dass 70% Ihrer Zeit auf Wachstumsinitiativen einzahlt."
  },
  {
    title: "Delegation Operating System",
    description:
      "Standardisieren Sie Ownership, Feedback-Loops und Kontrollpunkte, damit Ihr Team Entscheidungen beschleunigt."
  },
  {
    title: "Executive Resilience Toolkit",
    description:
      "Schaffen Sie Routinen für Energie-Management, Grenzen und Fokus – ohne Abstriche bei Performance oder Gesundheit."
  },
  {
    title: "Scalable Workflow Automation",
    description:
      "Automatisieren Sie wiederkehrende Abläufe mit einem kuratierten Tech-Stack, abgestimmt auf Lean Leadership-Teams."
  }
];

export function ValuePillarsSection() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-slate-900">Die vier Wertpfeiler der Premium Edition</h2>
        <p className="mt-4 max-w-3xl text-base text-slate-600">
          Jede Lektion ist so aufgebaut, dass Sie direkt in bestehende Führungsprozesse eingreifen können. Templates, Checklisten
          und Coaching-Impulse transformieren individuelle Gewohnheiten in teamweite Standards.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-white bg-white p-8 shadow-lg shadow-primary/10 transition hover:-translate-y-1 hover:shadow-primary/20"
            >
              <h3 className="text-xl font-semibold text-primary">{pillar.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
