export type Persona = {
  name: string;
  title: string;
  description: string;
  goals: string[];
};

export type CurriculumModule = {
  title: string;
  summary: string;
  outcomes: string[];
};

export type PricingTier = {
  name: string;
  price: string;
  cadence?: string;
  description: string;
  features: string[];
  cta: string;
};

export const personas: Persona[] = [
  {
    name: "Sophie Kramer",
    title: "Gründerin & Geschäftsführerin einer Marketingagentur",
    description:
      "Skaliert ein 10-köpfiges Team und sucht nach mehr Fokuszeit für Business Development sowie Systemaufbau.",
    goals: [
      "10+ Stunden pro Woche für Wachstumsvorhaben freischaufeln",
      "Teamprozesse professionalisieren",
      "Reactive Firefighting reduzieren"
    ]
  },
  {
    name: "Daniel Vogt",
    title: "Geschäftsführer eines mittelständischen Produktionsbetriebs",
    description:
      "Verbringt zu viele Stunden in Ad-hoc-Meetings und sucht nach skalierbaren Führungsroutinen.",
    goals: [
      "Meeting-Disziplin und Delegation verbessern",
      "Transparente Priorisierung etablieren",
      "Zeit für Coaching und Innovation schaffen"
    ]
  },
  {
    name: "Aylin Berger",
    title: "VP Operations in einem europaweiten Scale-up",
    description:
      "Steuert mehrere Regionen und braucht belastbare Energie- und Fokusrituale.",
    goals: [
      "Führungsenergie langfristig erhalten",
      "Delegationsketten stabilisieren",
      "OKR-getriebene Planung stärken"
    ]
  }
];

export const curriculum: CurriculumModule[] = [
  {
    title: "Strategic Time Architecture",
    summary: "Architektur-Workshop für eine Führungskalender-Logik mit klaren Prioritäten.",
    outcomes: [
      "Executive Scorecard zur Wochenpriorisierung",
      "Ritual für Monday Focus Briefings",
      "Quartals-OKR-Verknüpfung"
    ]
  },
  {
    title: "Delegation Operating System",
    summary: "Delegations-Framework für Verantwortlichkeiten, Feedback-Loops und Check-ins.",
    outcomes: [
      "Delegation Canvas und Rollenbriefings",
      "30-60-90-Minute Meeting-Agenden",
      "Accountability Dashboard Templates"
    ]
  },
  {
    title: "Executive Resilience Toolkit",
    summary: "Leistungsfähige Routinen zur Stress- und Energie-Steuerung für Spitzenführungskräfte.",
    outcomes: [
      "Boundary Playbook für Fokusblöcke",
      "Regenerationsprotokolle",
      "Peer-Review-Formate zur Reflexion"
    ]
  },
  {
    title: "Scalable Workflow Automation",
    summary: "Tech-Stack-Empfehlungen und Automationspfade für Lean Teams.",
    outcomes: [
      "Zapier & Make Playbooks",
      "CRM/Projektmanagement Integrations-Checkliste",
      "ROI-Kalkulator für Automationspotenziale"
    ]
  }
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Premium",
    price: "€497",
    cadence: "einmalig",
    description: "Ideal für Solo-Leader:innen, die sofort ihre Führungszeit zurückerobern wollen.",
    features: [
      "Vollzugriff auf alle Module",
      "Executive Planner & Delegation Scorecard",
      "30-Tage Implementierungsgarantie"
    ],
    cta: "Jetzt buchen"
  },
  {
    name: "Team Pack",
    price: "€1.995",
    cadence: "5 Lizenzen",
    description: "Für Leadership-Teams, die gemeinsame Rituale und KPI-Transparenz aufbauen.",
    features: [
      "Fünf Premium-Sitze mit Team-Analytics",
      "Workshop-Kit für interne Roll-outs",
      "Priority Support & Onboarding-Call"
    ],
    cta: "Team-Access sichern"
  },
  {
    name: "Executive Intensive",
    price: "€4.995",
    cadence: "6 Wochen",
    description: "Für Führungskräfte, die Live-Coaching und individuelle Skalierungspfade brauchen.",
    features: [
      "Premium-Inhalte plus 3 Gruppen-Coachings",
      "Persönliches OKR-Review",
      "Delegation Audit durch Expert:in"
    ],
    cta: "Intensiv-Programm anfragen"
  }
];

export const faqs = [
  {
    question: "Wie lange habe ich Zugriff auf die Inhalte?",
    answer:
      "Alle Pakete beinhalten 12 Monate Zugriff inklusive Updates, sodass Ihre Teams nachhaltig verankern können."
  },
  {
    question: "In welcher Sprache sind die Materialien verfügbar?",
    answer:
      "Der Kurs ist auf Deutsch. Englische Fassungen der Templates können auf Anfrage bereitgestellt werden."
  },
  {
    question: "Wie funktioniert die Implementierungsgarantie?",
    answer:
      "Sollten Sie nach 30 Tagen keine messbare Verbesserung in Ihrer Wochenstruktur sehen, erhalten Sie persönlichen Support oder Ihr Geld zurück."
  },
  {
    question: "Können wir eine interne Kohorte starten?",
    answer:
      "Ja, das Team Pack und Executive Intensive beinhalten Moderationsleitfäden für unternehmensinterne Kohorten."
  }
];

export const metrics = [
  { label: "Ø Stunden pro Woche zurückgewonnen", value: "10+" },
  { label: "Führungskräfte, die den ROI bestätigen", value: "92%" },
  { label: "Durchschnittliche Zufriedenheit", value: "4.8/5" }
];

export const pains = [
  "Kalender voller Firefighting und Ad-hoc-Themen",
  "Delegation führt zu Rückfragen statt Ownership",
  "Keine Zeitfenster für Strategie, Coaching oder Innovation",
  "Meetingkultur ohne klare Agenda oder Entscheidungswege"
];

export const promises = [
  "Kalenderarchitektur mit 70% Fokus auf Wertschöpfung",
  "Delegationssysteme, die Entscheidungen beschleunigen",
  "Rituale für energievolle Führung über alle Wochen hinweg",
  "OKR- und KPI-gesteuerte Meetingstrukturen"
];

export const testimonials = [
  {
    quote:
      "Innerhalb von drei Wochen hatten wir eine neue Meeting- und Delegationslogik, die mich zwei Tage pro Woche für Wachstum freispielt.",
    name: "Sophie Kramer",
    role: "Geschäftsführerin, BrightLabs Agency"
  },
  {
    quote:
      "Unsere Führungskaskade hat endlich einheitliche Prioritäten. Die Templates aus dem Kurs sind jetzt Standard in allen Standorten.",
    name: "Daniel Vogt",
    role: "Managing Director, Vogt Manufacturing"
  },
  {
    quote:
      "Ich konnte mein Team neu strukturieren, ohne mehr Stunden zu arbeiten. Die Delegation Audits waren Gold wert.",
    name: "Aylin Berger",
    role: "VP Operations, NovaScale"
  }
];
