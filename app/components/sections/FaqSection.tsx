import { faqs } from "@/lib/content";

export function FaqSection() {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto w-full max-w-5xl px-6">
        <h2 className="text-3xl font-semibold text-slate-900">Häufige Fragen von Führungsteams</h2>
        <div className="mt-8 space-y-6">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
              <summary className="cursor-pointer text-base font-semibold text-slate-900">
                {faq.question}
              </summary>
              <p className="mt-4 text-sm text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
