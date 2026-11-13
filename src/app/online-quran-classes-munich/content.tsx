"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { plans } from "@/lib/plans";
import { SectionHeading, CtaBand } from "@/components/Shared";

const BASE_URL = "https://onlinekoran.de";
const PAGE_PATH = "/online-quran-classes-munich";

const EN_META = {
  title: "Online Quran Classes in Munich — 1-on-1 Live Lessons",
  description:
    "Live 1-on-1 Quran classes for families in Munich — Sendling, Neuperlach & Hasenbergl. After-school times in Munich time, free trial class.",
};

const DE_META = {
  title: "Online-Koranunterricht München — Live-Einzelunterricht",
  description:
    "Live-Koranunterricht 1-zu-1 für Familien in München — Sendling, Neuperlach & Hasenbergl. Nachmittags nach Münchner Zeit, kostenlose Probestunde.",
};

const HERO_IMAGE =
  "https://images.pexels.com/photos/4213371/pexels-photo-4213371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

interface QaLink {
  href: string;
  label: string;
}

interface QaSection {
  heading: string;
  direct: string;
  paragraphs: string[];
  links?: QaLink[];
}

interface Faq {
  q: string;
  a: string;
  link?: QaLink;
}

interface District {
  name: string;
  body: string;
}

interface LocaleContent {
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCta1: string;
  heroCta2: string;
  heroNote: string;
  heroAlt: string;
  intro: string;
  whyHeading: string;
  whyDirect: string;
  whyParagraphs: string[];
  districtsEyebrow: string;
  districtsTitle: string;
  districtsIntro: string;
  districts: District[];
  districtsAlso: string;
  schoolSection: QaSection;
  learnSection: QaSection;
  plansEyebrow: string;
  plansTitle: string;
  plansSubtitle: string;
  perMonth: string;
  classesWeek: string;
  popular: string;
  plansCta: string;
  faqEyebrow: string;
  faqTitle: string;
  faqs: Faq[];
  jsonLdName: string;
  jsonLdDescription: string;
}

const content: { en: LocaleContent; de: LocaleContent } = {
  en: {
    heroEyebrow: "Online Quran Classes · Munich",
    heroTitle: "Online Quran classes in Munich, live 1-on-1",
    heroSubtitle:
      "Live lessons for families in Sendling, Neuperlach and Hasenbergl — after school, in Munich time, with a free trial class.",
    heroCta1: "Book a Free Trial Class",
    heroCta2: "View pricing",
    heroNote: "No payment needed for the trial · 30 minutes · Zoom or Google Meet",
    heroAlt: "New Town Hall on Marienplatz in Munich at dusk",
    intro:
      "Families in Munich can learn the Quran online with a live, certified tutor — one-to-one, after school, in Munich time (CET/CEST). Online Quran teaches children and adults across the Bavarian capital, from Sendling in the south to Hasenbergl in the north, starting with a free 30-minute trial class.",
    whyHeading: "Why do Munich families choose online Quran classes?",
    whyDirect:
      "Because Munich is a busy, fast-moving city, and a weekend class across town — or a long U-Bahn ride with children — eats the afternoon. Online 1-on-1 lessons happen at home, after school, at a fixed time. No travel, no waiting list, and a tutor who teaches only your child.",
    whyParagraphs: [
      "Munich's families often live in the outer districts — Neuperlach in the south-east, Hasenbergl in the north — while weekend classes tend to meet near the centre. Crossing the city on a Saturday with children takes the best part of the afternoon. Online lessons give that time back to your family: the tutor appears on your screen at the agreed time, and the lesson starts.",
      "There is also no waiting list. Places at popular mosque schools can be limited, and waiting lists are common. At Online Quran, your child's first lesson is the free trial class — usually in the same week you book — and the same tutor teaches every lesson after that.",
    ],
    districtsEyebrow: "Munich districts",
    districtsTitle: "Which Munich districts do we teach in?",
    districtsIntro:
      "Every lesson is online, so we teach in all 25 Munich boroughs — from Sendling to Hasenbergl. These three districts are home to many of Munich's Muslim families, and each has its own character:",
    districts: [
      {
        name: "Sendling",
        body: "Sendling, just south of the city centre, is a diverse, family-friendly district with a long-established Turkish and Arab community around Lindwurmstraße and Harras. A 25-minute online lesson after school fits neatly between homework and dinner.",
      },
      {
        name: "Neuperlach",
        body: "Neuperlach, in the south-east of the city, is one of Munich's largest residential districts — a planned neighbourhood of families and young children. Online lessons save the trip into the centre for a weekend class.",
      },
      {
        name: "Hasenbergl",
        body: "Hasenbergl, in the north of Munich, is a close-knit residential district with many young families. After-school slots from 3pm work well for children coming home from Grundschule or Ganztagsschule.",
      },
    ],
    districtsAlso:
      "Also served: Schwabing, Milbertshofen, Laim, Pasing, Giesing, Trudering, Aubing, Freimann — home to the Islamic Centre Munich — and every other part of the city.",
    schoolSection: {
      heading: "How do lessons fit the Munich school day?",
      direct:
        "Munich schoolchildren are usually home by mid-afternoon — earlier at Grundschule, later at Ganztagsschule — so lessons run from 3pm to 8pm Munich time, with weekend-morning slots too. A 25- or 30-minute lesson fits between homework and dinner, and families can pause around the Bavarian school holidays.",
      paragraphs: [
        "Munich's school day usually ends between 1pm and 4pm, depending on the school and whether your child attends Ganztagsschule. Our lessons run from 3pm to 8pm Munich time, so there is always a slot after homework — and weekend mornings are available for families who prefer them.",
        "Bavaria's school holidays (Schulferien) are fixed by the state, and the Bavarian summer holidays traditionally start and end later than in most other Bundesländer. Because there is no lock-in, families can pause or shift lessons around them. The Standard plan also includes flexible rescheduling, so a single busy week never costs you a lesson.",
      ],
    },
    learnSection: {
      heading: "What will you learn in Munich?",
      direct:
        "The same full curriculum as everywhere in Germany: Noorani Qaida for beginners (3–6 months), reading fluency with Tajweed (12–18 months for children), Hifz memorisation (3–6 years), and Tafseer for understanding. Your Munich tutor follows the same structured path — the only difference is that lessons are timed to Munich.",
      paragraphs: [
        "Children usually start with the Noorani Qaida, learning the Arabic letters and how they join, before moving on to reading from the Mushaf with correct Tajweed. Adults starting from scratch typically reach reading fluency in 6–12 months. Whatever your starting point, the free trial class tells you exactly where you stand.",
        "Munich is part of our Germany-wide academy, so Munich families get everything German families get: certified tutors, female teachers, monthly progress reports and Germany-time scheduling. See the full picture on our Germany page — or start with the kids' page if you are choosing for a child.",
      ],
      links: [
        { href: "/online-quran-classes-germany", label: "Online Quran classes in Germany" },
        { href: "/quran-classes-for-kids", label: "Quran classes for kids" },
        { href: "/courses", label: "All courses" },
      ],
    },
    plansEyebrow: "Pricing",
    plansTitle: "Simple monthly plans",
    plansSubtitle:
      "No lock-in. Sibling discount 10%. Prices in USD — the EUR equivalent is charged at checkout.",
    perMonth: "per month",
    classesWeek: "classes / week",
    popular: "Most Popular",
    plansCta: "See full pricing",
    faqEyebrow: "Questions",
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        q: "Do you have a classroom in Munich?",
        a: "No — every lesson is taught online, live and one-to-one, on Zoom or Google Meet. There is no Munich classroom to travel to: your tutor teaches from their home to yours, at times set in Munich time (CET/CEST).",
      },
      {
        q: "Which Munich districts do you serve?",
        a: "All 25 Munich boroughs — Sendling, Neuperlach, Hasenbergl, Schwabing, Milbertshofen, Laim, Pasing, Giesing and every other district. Because lessons are online, your district is always covered.",
      },
      {
        q: "Can my child learn with a female teacher in Munich?",
        a: "Yes — female teachers are available for girls and boys across Munich. Mention your preference when you book the free trial class and we will match your child with a qualified female tutor.",
      },
      {
        q: "How do I book a free trial class in Munich?",
        a: "Book online in two minutes: choose a course and a time in Munich time. The trial class lasts 30 minutes, your child meets the tutor and tries a real lesson — and no payment details are needed to book it.",
        link: { href: "/free-trial", label: "Book your free trial class" },
      },
    ],
    jsonLdName: "Online Quran Classes in Munich",
    jsonLdDescription:
      "Live 1-on-1 Quran classes for families in Munich — Sendling, Neuperlach & Hasenbergl. After-school times, free trial class.",
  },
  de: {
    heroEyebrow: "Online-Koranunterricht · München",
    heroTitle: "Online-Koranunterricht in München, live 1-zu-1",
    heroSubtitle:
      "Live-Unterricht für Familien in Sendling, Neuperlach und Hasenbergl — nach der Schule, zur Münchner Zeit, mit einer kostenlosen Probestunde.",
    heroCta1: "Kostenlose Probestunde buchen",
    heroCta2: "Preise ansehen",
    heroNote: "Keine Zahlung für die Probestunde nötig · 30 Minuten · Zoom oder Google Meet",
    heroAlt: "Neues Rathaus am Marienplatz in München in der Abenddämmerung",
    intro:
      "Familien in München können den Koran online lernen, mit einer live zugeschalteten, zertifizierten Lehrkraft — 1-zu-1, nach der Schule, zur Münchner Zeit (MEZ/MESZ). Die Online Quran unterrichtet Kinder und Erwachsene in der bayerischen Landeshauptstadt, von Sendling im Süden bis Hasenbergl im Norden — beginnend mit einer kostenlosen 30-minütigen Probestunde.",
    whyHeading: "Warum wählen Münchner Familien Online-Koranunterricht?",
    whyDirect:
      "Weil München eine geschäftige, schnelle Stadt ist und ein Wochenendkurs quer durch die Stadt — oder eine lange U-Bahn-Fahrt mit Kindern — den ganzen Nachmittag kostet. Online-Einzelunterricht findet zu Hause statt, nach der Schule, zu einer festen Zeit. Keine Fahrt, keine Warteliste und eine Lehrkraft, die nur Ihr Kind unterrichtet.",
    whyParagraphs: [
      "Münchner Familien wohnen oft in den äußeren Stadtteilen — Neuperlach im Südosten, Hasenbergl im Norden — während Wochenendkurse meist in der Nähe der Innenstadt stattfinden. Quer durch die Stadt zu fahren, kostet am Samstag mit Kindern den halben Nachmittag. Online-Unterricht gibt Ihrer Familie diese Zeit zurück: Die Lehrkraft erscheint zur vereinbarten Zeit auf Ihrem Bildschirm, und die Stunde beginnt.",
      "Es gibt auch keine Warteliste. Plätze an beliebten Koranschulen können begrenzt sein, und Wartelisten sind üblich. Bei der Online Quran ist die erste Stunde Ihres Kindes die kostenlose Probestunde — meist in derselben Woche, in der Sie buchen — und danach unterrichtet dieselbe Lehrkraft jede Stunde.",
    ],
    districtsEyebrow: "Münchner Stadtbezirke",
    districtsTitle: "In welchen Münchner Stadtbezirken unterrichten wir?",
    districtsIntro:
      "Jede Stunde ist online, daher unterrichten wir in allen 25 Münchner Stadtbezirken — von Sendling bis Hasenbergl. Diese drei Stadtteile sind die Heimat vieler muslimischer Familien Münchens, und jeder hat seinen eigenen Charakter:",
    districts: [
      {
        name: "Sendling",
        body: "Sendling, direkt südlich der Innenstadt, ist ein vielfältiger, familienfreundlicher Stadtteil mit einer lange etablierten türkischen und arabischen Gemeinschaft rund um Lindwurmstraße und Harras. Eine 25-minütige Online-Stunde nach der Schule passt gut zwischen Hausaufgaben und Abendessen.",
      },
      {
        name: "Neuperlach",
        body: "Neuperlach, im Südosten der Stadt, ist einer der größten Wohnstadtteile Münchens — ein geplantes Viertel mit vielen Familien und kleinen Kindern. Online-Unterricht spart die Fahrt in die Innenstadt für einen Wochenendkurs.",
      },
      {
        name: "Hasenbergl",
        body: "Hasenbergl, im Norden Münchens, ist ein eng verbundenes Wohnviertel mit vielen jungen Familien. Nachmittagsstunden ab 15 Uhr passen gut für Kinder, die von der Grundschule oder Ganztagsschule nach Hause kommen.",
      },
    ],
    districtsAlso:
      "Ebenfalls versorgt: Schwabing, Milbertshofen, Laim, Pasing, Giesing, Trudering, Aubing, Freimann — Heimat des Islamischen Zentrums München — und jeder andere Teil der Stadt.",
    schoolSection: {
      heading: "Wie passen die Stunden zum Münchner Schulalltag?",
      direct:
        "Münchner Schulkinder sind meist bis zum Nachmittag zu Hause — früher an der Grundschule, später in der Ganztagsschule — daher läuft der Unterricht von 15 bis 20 Uhr Münchner Zeit, dazu vormittags am Wochenende. Eine 25- oder 30-minütige Stunde passt zwischen Hausaufgaben und Abendessen, und Familien können rund um die bayerischen Schulferien pausieren.",
      paragraphs: [
        "Der Münchner Schultag endet meist zwischen 13 und 16 Uhr, je nach Schule und ob Ihr Kind die Ganztagsschule besucht. Unser Unterricht läuft von 15 bis 20 Uhr Münchner Zeit, sodass es immer einen Termin nach den Hausaufgaben gibt — und vormittags am Wochenende gibt es weitere Termine für Familien, die das bevorzugen.",
        "Die bayerischen Schulferien werden vom Freistaat festgelegt, und die bayerischen Sommerferien beginnen und enden traditionell später als in den meisten anderen Bundesländern. Weil es keine Mindestlaufzeit gibt, können Familien rund um sie pausieren oder ihre Stunden verschieben. Der Standard-Tarif enthält außerdem eine flexible Terminverschiebung, sodass eine einzelne volle Woche nie eine Stunde kostet.",
      ],
    },
    learnSection: {
      heading: "Was lernt man in München?",
      direct:
        "Dasselbe vollständige Curriculum wie überall in Deutschland: Noorani Qaida für Anfänger (3–6 Monate), fließendes Lesen mit Tadschwid (12–18 Monate für Kinder), Hifz-Auswendiglernen (3–6 Jahre) und Tafsir zum Verstehen. Ihre Münchner Lehrkraft folgt demselben strukturierten Weg — der einzige Unterschied ist, dass die Stunden auf München abgestimmt sind.",
      paragraphs: [
        "Kinder beginnen meist mit der Noorani Qaida, lernen die arabischen Buchstaben und wie sie sich verbinden, bevor sie mit korrektem Tadschwid aus dem Mushaf lesen. Erwachsene, die von Grund auf beginnen, erreichen meist innerhalb von 6–12 Monaten fließendes Lesen. Wo auch immer Sie anfangen — die kostenlose Probestunde sagt Ihnen genau, wo Sie stehen.",
        "München ist Teil unserer deutschlandweiten Akademie, sodass Münchner Familien alles bekommen, was deutsche Familien bekommen: zertifizierte Lehrkräfte, Lehrerinnen, monatliche Fortschrittsberichte und Termine nach deutscher Zeit. Sehen Sie sich das ganze Bild auf unserer Deutschland-Seite an — oder beginnen Sie mit der Kinderseite, wenn Sie für ein Kind wählen.",
      ],
      links: [
        { href: "/online-quran-classes-germany", label: "Online-Koranunterricht in Deutschland" },
        { href: "/quran-classes-for-kids", label: "Koranunterricht für Kinder" },
        { href: "/courses", label: "Alle Kurse" },
      ],
    },
    plansEyebrow: "Preise",
    plansTitle: "Einfache Monatstarife",
    plansSubtitle:
      "Keine Mindestlaufzeit. Geschwisterrabatt 10 %. Preise in USD — der Euro-Gegenwert wird an der Kasse berechnet.",
    perMonth: "pro Monat",
    classesWeek: "Stunden / Woche",
    popular: "Beliebteste Wahl",
    plansCta: "Alle Preise ansehen",
    faqEyebrow: "Fragen",
    faqTitle: "Häufige Fragen",
    faqs: [
      {
        q: "Haben Sie ein Klassenzimmer in München?",
        a: "Nein — jede Stunde wird online unterrichtet, live und 1-zu-1, über Zoom oder Google Meet. Es gibt kein Münchner Klassenzimmer, zu dem Sie fahren müssten: Ihre Lehrkraft unterrichtet von ihrem Zuhause zu Ihrem, zu Zeiten nach Münchner Zeit (MEZ/MESZ).",
      },
      {
        q: "Welche Münchner Stadtbezirke versorgen Sie?",
        a: "Alle 25 Münchner Stadtbezirke — Sendling, Neuperlach, Hasenbergl, Schwabing, Milbertshofen, Laim, Pasing, Giesing und jeden anderen Stadtteil. Weil die Stunden online sind, ist Ihr Bezirk immer versorgt.",
      },
      {
        q: "Kann mein Kind in München bei einer Lehrerin lernen?",
        a: "Ja — Lehrerinnen sind für Mädchen und Jungen in ganz München verfügbar. Sagen Sie uns bei der Buchung der kostenlosen Probestunde Ihren Wunsch, und wir finden eine qualifizierte Lehrerin für Ihr Kind.",
      },
      {
        q: "Wie buche ich eine kostenlose Probestunde in München?",
        a: "Buchen Sie in zwei Minuten online: Wählen Sie einen Kurs und einen Termin nach Münchner Zeit. Die Probestunde dauert 30 Minuten, Ihr Kind lernt die Lehrkraft kennen und erlebt eine echte Stunde — und zur Buchung sind keine Zahlungsdaten nötig.",
        link: { href: "/free-trial", label: "Kostenlose Probestunde buchen" },
      },
    ],
    jsonLdName: "Online-Koranunterricht in München",
    jsonLdDescription:
      "Live-Koranunterricht 1-zu-1 für Familien in München — Sendling, Neuperlach & Hasenbergl. Nachmittags, kostenlose Probestunde.",
  },
};

export default function MunichContent() {
  const { locale } = useLocale();
  const t = content[locale];
  const meta = locale === "de" ? DE_META : EN_META;
  const pageUrl = `${BASE_URL}${PAGE_PATH}`;
  const germanyUrl = `${BASE_URL}/online-quran-classes-germany`;

  useEffect(() => {
    document.title = meta.title;
    const el = document.querySelector('meta[name="description"]');
    if (el) el.setAttribute("content", meta.description);
  }, [locale, meta.title, meta.description]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: t.jsonLdName,
        description: t.jsonLdDescription,
        inLanguage: locale,
        datePublished: "2026-11-12",
        dateModified: "2026-11-12",
        author: { "@type": "Organization", name: "Online Quran" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Online Quran", item: BASE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name:
              locale === "de"
                ? "Online-Koranunterricht in Deutschland"
                : "Online Quran Classes in Germany",
            item: germanyUrl,
          },
          { "@type": "ListItem", position: 3, name: t.jsonLdName, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="pattern-star bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-bold tracking-wide text-gold-dark">
              {t.heroEyebrow}
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-brand sm:text-5xl lg:text-[3.4rem]">
              {t.heroTitle}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">{t.heroSubtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/free-trial"
                className="rounded-full bg-brand px-8 py-3.5 text-center text-base font-bold text-white shadow-card transition hover:bg-brand-light"
              >
                {t.heroCta1}
              </Link>
              <Link
                href="/pricing"
                className="rounded-full border-2 border-brand px-8 py-3.5 text-center text-base font-bold text-brand transition hover:bg-brand-soft"
              >
                {t.heroCta2}
              </Link>
            </div>
            <p className="mt-5 text-sm font-medium text-ink/60">{t.heroNote}</p>
          </div>
          <div className="relative">
            <div
              className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border-2 border-gold/60"
              aria-hidden="true"
            />
            <img
              src={HERO_IMAGE}
              alt={t.heroAlt}
              className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lift"
            />
          </div>
        </div>
      </section>

      {/* ANSWER-FIRST INTRO */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xl font-semibold leading-relaxed text-brand">{t.intro}</p>
        </div>
      </section>

      {/* WHY MUNICH */}
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold leading-tight text-brand sm:text-4xl">
            {t.whyHeading}
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mt-6 text-lg font-semibold leading-relaxed text-ink/90">
            {t.whyDirect}
          </p>
          {t.whyParagraphs.map((p) => (
            <p key={p} className="mt-5 leading-relaxed text-ink/80">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* DISTRICTS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow={t.districtsEyebrow}
            title={t.districtsTitle}
            subtitle={t.districtsIntro}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.districts.map((district) => (
              <div key={district.name} className="rounded-3xl bg-cream p-8 shadow-card">
                <h3 className="font-display text-2xl font-bold text-brand">{district.name}</h3>
                <div className="mt-3 h-1 w-10 rounded-full bg-gold" />
                <p className="mt-4 leading-relaxed text-ink/70">{district.body}</p>
              </div>
            ))}
            <div className="flex flex-col justify-center rounded-3xl bg-brand p-8 text-white shadow-card">
              <h3 className="font-display text-2xl font-bold">
                {locale === "de" ? "Ihr Bezirk ist dabei" : "Your district is covered"}
              </h3>
              <p className="mt-4 leading-relaxed text-white/85">{t.districtsAlso}</p>
              <Link
                href="/free-trial"
                className="mt-6 inline-block rounded-full bg-gold px-6 py-3 text-center text-sm font-bold text-brand-deep transition hover:bg-gold-light"
              >
                {t.heroCta1}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOOL DAY */}
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold leading-tight text-brand sm:text-4xl">
            {t.schoolSection.heading}
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mt-6 text-lg font-semibold leading-relaxed text-ink/90">
            {t.schoolSection.direct}
          </p>
          {t.schoolSection.paragraphs.map((p) => (
            <p key={p} className="mt-5 leading-relaxed text-ink/80">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* WHAT YOU LEARN + HUB LINKS */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold leading-tight text-brand sm:text-4xl">
            {t.learnSection.heading}
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mt-6 text-lg font-semibold leading-relaxed text-ink/90">
            {t.learnSection.direct}
          </p>
          {t.learnSection.paragraphs.map((p) => (
            <p key={p} className="mt-5 leading-relaxed text-ink/80">
              {p}
            </p>
          ))}
          {t.learnSection.links && (
            <div className="mt-8 flex flex-wrap gap-3">
              {t.learnSection.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border-2 border-brand px-6 py-2.5 text-sm font-bold text-brand transition hover:bg-brand-soft"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PLANS SUMMARY */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow={t.plansEyebrow}
            title={t.plansTitle}
            subtitle={t.plansSubtitle}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 shadow-card ${
                  plan.popular ? "bg-brand text-white ring-4 ring-gold" : "bg-white"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold tracking-wide text-brand-deep">
                    {t.popular}
                  </span>
                )}
                <h3
                  className={`font-display text-xl font-bold ${
                    plan.popular ? "text-white" : "text-brand"
                  }`}
                >
                  {plan.name[locale]}
                </h3>
                <p className="mt-4">
                  <span
                    className={`font-display text-5xl font-bold ${
                      plan.popular ? "text-white" : "text-brand"
                    }`}
                  >
                    ${plan.priceUsd}
                  </span>
                  <span
                    className={`ml-2 text-sm font-semibold ${
                      plan.popular ? "text-white/70" : "text-ink/60"
                    }`}
                  >
                    / {t.perMonth}
                  </span>
                </p>
                <p
                  className={`mt-2 text-sm font-bold ${
                    plan.popular ? "text-gold-light" : "text-gold-dark"
                  }`}
                >
                  {plan.classesPerWeek} {t.classesWeek} · {plan.minutesPerClass} min
                </p>
                <ul
                  className={`mt-6 space-y-2.5 text-sm leading-relaxed ${
                    plan.popular ? "text-white/85" : "text-ink/70"
                  }`}
                >
                  {plan.features[locale].map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-gold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/free-trial"
                  className={`mt-8 block rounded-full py-3 text-center text-sm font-bold transition ${
                    plan.popular
                      ? "bg-gold text-brand-deep hover:bg-gold-light"
                      : "bg-brand text-white hover:bg-brand-light"
                  }`}
                >
                  {t.heroCta1}
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/pricing"
              className="inline-block rounded-full border-2 border-brand px-8 py-3 text-base font-bold text-brand transition hover:bg-brand-soft"
            >
              {t.plansCta}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading eyebrow={t.faqEyebrow} title={t.faqTitle} />
          <div className="mt-12 space-y-6">
            {t.faqs.map((faq) => (
              <div key={faq.q} className="rounded-3xl bg-cream p-8 shadow-card">
                <h3 className="font-display text-xl font-bold text-brand">{faq.q}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{faq.a}</p>
                {faq.link && (
                  <Link
                    href={faq.link.href}
                    className="mt-4 inline-block text-sm font-bold text-brand hover:underline"
                  >
                    {faq.link.label} →
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="inline-block rounded-full border-2 border-brand px-8 py-3 text-base font-bold text-brand transition hover:bg-brand-soft"
            >
              {locale === "de" ? "Alle häufig gestellten Fragen ansehen" : "See all frequently asked questions"}
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
