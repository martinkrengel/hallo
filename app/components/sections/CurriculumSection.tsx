import { curriculum } from "@/lib/content";

export function CurriculumSection() {
  return (
    <section id="curriculum" className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="md:flex md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Curriculum als Leadership-System</h2>
            <p className="mt-4 max-w-2xl text-base text-slate-600">
              Jedes Modul liefert Frameworks, die unmittelbar in Ihren Führungsalltag implementiert werden können. Von
              Kalender-Architektur bis hin zu Automationen – alles ist auf ROI und Team-Skalierung ausgerichtet.
            </p>
          </div>
          <a href="#lead-capture" className="mt-6 inline-flex items-center text-sm font-semibold text-primary md:mt-0">
            Modulübersicht als PDF erhalten →
          </a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {curriculum.map((module) => (
            <article key={module.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-primary">{module.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{module.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {module.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>{outcome}</span>
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
