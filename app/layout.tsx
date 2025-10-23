import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Zeitmanagement 1x1 Premium Edition",
  description:
    "Premium leadership-focused time management systems for self-employed founders, SME directors, and corporate executives.",
  metadataBase: new URL("https://zeitmanagement-premium.example")
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de">
      <body className="bg-white text-slate-900">
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
              <div className="text-lg font-semibold tracking-tight text-primary">
                Zeitmanagement 1x1 Premium
              </div>
              <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
                <a href="#pain-promise">Probleme &amp; Lösungen</a>
                <a href="#curriculum">Curriculum</a>
                <a href="#pricing">Pakete</a>
                <a href="#faq">FAQ</a>
              </nav>
              <a
                href="#lead-capture"
                className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-light"
              >
                Jetzt Premium-Zugang sichern
              </a>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-slate-200 bg-slate-50 py-6 text-sm text-slate-600">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} Zeitmanagement 1x1 Premium Edition</p>
              <div className="flex gap-4">
                <a href="mailto:hello@zeitmanagement-premium.example">Kontakt</a>
                <a href="#lead-capture">Demo anfragen</a>
                <a href="/legal/impressum" className="text-slate-500">
                  Impressum
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
