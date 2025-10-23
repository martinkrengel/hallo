import { testimonials } from "@/lib/content";

export function TestimonialsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="md:flex md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Leadership-Stimmen, die Vertrauen schaffen</h2>
            <p className="mt-4 max-w-2xl text-base text-slate-600">
              Authentische Erfahrungsberichte aus Agenturen, dem Mittelstand und Corporate-Umfeldern unterstreichen den ROI des
              Programms und liefern Social Proof für Ihre Entscheidungsrunde.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-700">“{testimonial.quote}”</p>
              <footer className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                {testimonial.name} · {testimonial.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
