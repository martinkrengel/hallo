"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  company: "",
  persona: "self-employed"
};

type FormState = typeof initialForm;

type Status = "idle" | "loading" | "success" | "error";

export function LeadCaptureSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Lead konnte nicht gespeichert werden.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="lead-capture" className="bg-white">
      <div className="mx-auto w-full max-w-4xl rounded-3xl border border-slate-200 bg-slate-50/80 px-6 py-14 shadow-lg">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900">
            Executive Checkliste & ROI-Kalkulator sichern
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Hinterlassen Sie Ihre Kontaktdaten und erhalten Sie sofortigen Zugriff auf unsere Checkliste für leadership-taugliche
            Zeitarchitektur sowie einen ROI-Kalkulator zur internen Business-Case-Argumentation.
          </p>
        </div>
        <form className="mt-10 grid gap-6" onSubmit={handleSubmit}>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="text-left">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-600" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Vor- und Nachname"
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="text-left">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-600" htmlFor="email">
                Geschäftliche E-Mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="name@unternehmen.de"
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="text-left">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-600" htmlFor="company">
                Unternehmen
              </label>
              <input
                id="company"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Unternehmensname"
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="text-left">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-600" htmlFor="persona">
                Ich vertrete ein
              </label>
              <select
                id="persona"
                name="persona"
                value={form.persona}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="self-employed">Selbstständiges Unternehmen</option>
                <option value="sme">KMU (10-200 Mitarbeitende)</option>
                <option value="corporate">Corporate / Konzern</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-light disabled:cursor-not-allowed disabled:bg-primary/70"
          >
            {status === "loading" ? "Wird gesendet…" : "Zugang anfordern"}
          </button>
          {status === "success" && (
            <p className="text-sm font-semibold text-green-700">Vielen Dank! Wir haben Ihnen die Materialien per E-Mail gesendet.</p>
          )}
          {status === "error" && (
            <p className="text-sm font-semibold text-red-600">
              Entschuldigung, etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
