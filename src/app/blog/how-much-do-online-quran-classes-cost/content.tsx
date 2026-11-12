"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { CtaBand } from "@/components/Shared";

const BASE_URL = "https://onlinekoran.de";
const SLUG = "how-much-do-online-quran-classes-cost";

// Cover image verified 200 on 2026-11-12 (ornate Quran).
const COVER =
  "https://images.pexels.com/photos/18387340/pexels-photo-18387340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const EN_META = {
  title: "How Much Do Online Quran Classes Cost? | Online Quran",
  description:
    "Online Quran classes cost $35–$99/month at Online Quran for live 1-on-1 lessons with a tutor. See our plans, what drives the price, and how we compare.",
};

const DE_META = {
  title: "Was kostet Online-Koranunterricht? Preise 2026",
  description:
    "Online-Koranunterricht kostet bei der Online Quran 35–99 $ pro Monat für Live-Einzelunterricht. Alle Tarife, Preisfaktoren und Marktvergleich im Überblick.",
};

interface Section {
  heading: string;
  answer: string;
  paragraphs?: string[];
  table?: { headers: string[]; rows: string[][] };
  list?: string[];
  ordered?: string[];
  closing?: string;
}

interface FaqItem {
  q: string;
  a: string;
}

interface RelatedLink {
  href: string;
  label: string;
}

interface GuideContent {
  category: string;
  readTime: string;
  title: string;
  author: string;
  updated: string;
  intro: string;
  coverAlt: string;
  sections: Section[];
  faqHeading: string;
  faqs: FaqItem[];
  relatedHeading: string;
  related: RelatedLink[];
  ctaTitle: string;
  ctaText: string;
  ctaCourse: string;
  ctaTrial: string;
  back: string;
}

const content: { en: GuideContent; de: GuideContent } = {
  en: {
    category: "Pricing",
    readTime: "7 min read",
    title: "How Much Do Online Quran Classes Cost?",
    author: "By the Online Quran teaching team",
    updated: "Last updated: 12 November 2026",
    intro:
      "Online Quran classes at Online Quran cost $35–$99 per month for live 1-to-1 lessons with a certified tutor: Basic is $35 a month for four 25-minute classes a week, Standard is $59 for five 30-minute classes, and Hifz Intensive is $99 for five 45-minute classes. Every plan starts with a free 30-minute trial class, and there is no lock-in contract.",
    coverAlt: "An ornate Quran with gold decoration",
    sections: [
      {
        heading: "How much do online Quran classes cost?",
        answer:
          "At Online Quran, live 1-to-1 online Quran classes cost $35–$99 per month, depending on how many classes you take each week and how long each class lasts. The Basic plan is $35 a month, the Standard plan is $59, and Hifz Intensive is $99. Prices are in USD, and the EUR equivalent is charged at checkout at the current rate.",
        paragraphs: [
          "That monthly price covers everything: live lessons with a certified tutor, a monthly progress report, and flexible scheduling in Germany time (CET/CEST). There are no registration fees, no charges for learning materials, and no lock-in contract — plans are month-to-month, and you can cancel or pause at any time. Every plan starts with a free 30-minute trial class, so you can meet the tutor before paying anything.",
        ],
      },
      {
        heading: "What do our plans include?",
        answer:
          "All three plans are live 1-to-1 lessons — your child learns alone with their tutor, never in a group. The difference between the plans is simply how often you meet and how long each lesson lasts. Most families choose Standard, which gives a daily rhythm of five 30-minute classes a week.",
        table: {
          headers: [
            "Plan",
            "Classes per week",
            "Minutes per class",
            "Price per month",
          ],
          rows: [
            ["Basic", "4", "25", "$35"],
            ["Standard (most popular)", "5", "30", "$59"],
            ["Hifz Intensive", "5", "45", "$99"],
          ],
        },
        paragraphs: [
          "Every plan includes a certified Quran tutor and a monthly progress report for parents, so you always know what your child is learning. Standard adds a parent check-in and flexible rescheduling, while Hifz Intensive comes with a dedicated Hifz tutor (a Hafiz or Hafiza), a weekly memorisation and revision plan, and priority scheduling.",
        ],
      },
      {
        heading: "What drives the price of online Quran classes?",
        answer:
          "Three things decide what online Quran classes cost: whether lessons are 1-to-1 or in a group, how qualified the tutor is, and how often you meet. One-to-one lessons cost more than group classes because the tutor's full attention is on one student — but they also move much faster, because every minute is spent on your child's level.",
        paragraphs: [
          "Tutor qualification matters too. A certified tutor who has studied Tajweed and holds an Ijazah — a licence to teach the Quran, passed teacher to student — charges more than an untrained volunteer, and the difference shows in your child's pronunciation. Frequency is the third factor: four or five short classes a week cost more per month than one class a week, but short, frequent lessons are how children actually build a habit.",
        ],
        list: [
          "1-to-1 vs group: full attention costs more — and progresses faster",
          "Tutor qualification: certified tutors and Ijazah holders cost more than untrained helpers",
          "Frequency: 4–5 short classes a week build a habit; 1 class a week is slower",
          "Lesson length: 25 minutes suits young children; Hifz students need 45 minutes",
          "Extras: progress reports, parent check-ins and flexible rescheduling add value",
        ],
      },
      {
        heading: "How do our prices compare with other options?",
        answer:
          "Published prices for live 1-to-1 online Quran classes worldwide typically range from $30 to $120 a month, and dedicated Hifz programmes are often listed at $120–$200 a month. Our plans — $35, $59 and $99 — sit at the affordable end of that range for live 1-to-1 teaching, with Hifz Intensive below the typical published Hifz range.",
        table: {
          headers: [
            "Option",
            "Typical price (as published)",
            "What you get",
          ],
          rows: [
            [
              "Live 1-to-1 online Quran classes (global market)",
              "$30–$120 per month",
              "Private lessons, 2–5 classes a week",
            ],
            [
              "Dedicated Hifz programmes",
              "$120–$200 per month",
              "Memorisation-focused, often 5 classes a week",
            ],
            [
              "Berlin-based online offers",
              "From €40 per month",
              "Varies by provider and format",
            ],
            [
              "German Zoom tutoring (per session)",
              "€7.49–€9.99 per 20-minute session",
              "Pay per session; four sessions a week works out at roughly €120–€160 a month",
            ],
            [
              "Online Quran (Basic / Standard / Hifz Intensive)",
              "$35 / $59 / $99 per month",
              "Live 1-to-1, certified tutor, progress reports, free trial",
            ],
          ],
        },
        paragraphs: [
          "Per-session tutoring can look cheap until you add it up: at €7.49–€9.99 per 20-minute session, four sessions a week come to roughly €120–€160 a month — more than our Standard plan, for shorter lessons. When comparing prices, always check what is included: group size, tutor qualifications, lesson length, and whether progress reports and rescheduling are part of the deal.",
        ],
      },
      {
        heading: "Are there discounts or ways to save?",
        answer:
          "Yes. Families with more than one child save 10% on the second child's plan every month with our sibling discount, applied automatically when you book together. And because every plan starts with a free 30-minute trial class, you can be sure the tutor is the right fit before you pay anything.",
        paragraphs: [
          "There is no lock-in contract, so you are never paying for months you do not use: plans are month-to-month, and you can cancel or pause for holidays at any time. If your child misses a class, let us know at least 12 hours in advance and we reschedule it to another day that week at no extra cost.",
        ],
      },
      {
        heading: "How do I pay?",
        answer:
          "Plans are billed monthly. At launch we accept card payments, PayPal and SEPA Direct Debit — the standard way to pay for subscriptions in Germany. Prices are shown in USD and the EUR equivalent is charged at checkout at the current rate, so the amount you see at checkout is the amount you pay.",
        paragraphs: [
          "Final EUR pricing is confirmed at launch. If you are unsure which plan fits your child, book the free trial class first — your tutor will assess your child's level in a single session and recommend the right plan, with no obligation.",
        ],
      },
    ],
    faqHeading: "Frequently asked questions",
    faqs: [
      {
        q: "Is the trial class really free?",
        a: "Yes. The first class is a free 30-minute trial with no payment details required. Your child meets the tutor, tries a real lesson, and we place them at the right level before you decide anything.",
      },
      {
        q: "Can I cancel or pause my plan?",
        a: "Yes. Plans are month-to-month with no lock-in. You can cancel or pause for holidays at any time, and the plan simply does not renew the following month.",
      },
      {
        q: "Do you offer a sibling discount?",
        a: "Yes — enrol a second child from the same family and save 10% on their plan every month. The discount applies automatically when you book together.",
      },
      {
        q: "Are prices in euros or dollars?",
        a: "Plans are priced in USD and the EUR equivalent is charged at checkout at the current rate. The amount you see at checkout is the amount you pay.",
      },
      {
        q: "What if my child misses a class?",
        a: "If you let us know at least 12 hours in advance, we reschedule the class to another day that week at no extra cost.",
      },
    ],
    relatedHeading: "Related guides",
    related: [
      { href: "/quran-classes-for-kids", label: "Quran Classes for Kids" },
      {
        href: "/online-quran-classes-germany",
        label: "Online Quran Classes in Germany",
      },
      {
        href: "/blog/how-long-does-it-take-to-learn-quran",
        label: "How Long Does It Take to Learn the Quran?",
      },
      {
        href: "/blog/how-to-choose-an-online-quran-teacher",
        label: "How to Choose an Online Quran Teacher",
      },
    ],
    ctaTitle: "Start with a free trial class",
    ctaText:
      "The best way to choose a plan is to try a real lesson. Book a free 30-minute trial class — your tutor will assess your child's level and recommend the right plan.",
    ctaCourse: "Explore the Noorani Qaida course",
    ctaTrial: "Book a free trial class",
    back: "← Back to all articles",
  },
  de: {
    category: "Preise",
    readTime: "7 Min. Lesezeit",
    title: "Was kostet Online-Koranunterricht?",
    author: "Vom Lehrteam der Online Quran",
    updated: "Zuletzt aktualisiert: 12. November 2026",
    intro:
      "Online-Koranunterricht bei der Online Quran kostet 35–99 $ pro Monat für Live-Einzelunterricht mit einer zertifizierten Lehrkraft: Basis kostet 35 $ pro Monat für vier 25-minütige Stunden pro Woche, Standard 59 $ für fünf 30-minütige Stunden und Hifz Intensiv 99 $ für fünf 45-minütige Stunden. Jeder Tarif beginnt mit einer kostenlosen 30-minütigen Probestunde, und es gibt keine Mindestlaufzeit.",
    coverAlt: "Ein verzierter Koran mit Golddekoration",
    sections: [
      {
        heading: "Was kostet Online-Koranunterricht?",
        answer:
          "Bei der Online Quran kostet Live-Einzelunterricht im Koran (Quran) 35–99 $ pro Monat — je nachdem, wie oft pro Woche Sie Unterricht nehmen und wie lang jede Stunde ist. Der Basis-Tarif kostet 35 $ pro Monat, der Standard-Tarif 59 $ und Hifz Intensiv 99 $. Die Preise sind in USD angegeben; an der Kasse wird der Euro-Gegenwert zum aktuellen Kurs berechnet.",
        paragraphs: [
          "Im Monatspreis ist alles enthalten: Live-Unterricht mit einer zertifizierten Lehrkraft, ein monatlicher Fortschrittsbericht und flexible Termine nach deutscher Zeit (MEZ/MESZ). Es gibt keine Anmeldegebühr, keine Kosten für Lernmaterialien und keine Mindestlaufzeit — die Tarife laufen monatlich, und Sie können jederzeit kündigen oder pausieren. Jeder Tarif beginnt mit einer kostenlosen 30-minütigen Probestunde, damit Sie die Lehrkraft kennenlernen, bevor Sie etwas zahlen.",
        ],
      },
      {
        heading: "Was ist in den Tarifen enthalten?",
        answer:
          "Alle drei Tarife sind Live-Einzelunterricht — Ihr Kind lernt allein mit seiner Lehrkraft, nie in einer Gruppe. Die Tarife unterscheiden sich nur darin, wie oft Sie sich treffen und wie lang jede Stunde dauert. Die meisten Familien wählen Standard: fünf 30-minütige Stunden pro Woche geben einen täglichen Rhythmus.",
        table: {
          headers: [
            "Tarif",
            "Stunden pro Woche",
            "Minuten pro Stunde",
            "Preis pro Monat",
          ],
          rows: [
            ["Basis", "4", "25", "35 $"],
            ["Standard (am beliebtesten)", "5", "30", "59 $"],
            ["Hifz Intensiv", "5", "45", "99 $"],
          ],
        },
        paragraphs: [
          "Jeder Tarif umfasst eine zertifizierte Koranlehrkraft und einen monatlichen Fortschrittsbericht für Eltern, damit Sie immer wissen, was Ihr Kind lernt. Standard ergänzt ein Elterngespräch und flexible Terminverschiebung; Hifz Intensiv bietet einen persönlichen Hifz-Lehrer (Hafiz oder Hafiza), einen wöchentlichen Lern- und Wiederholungsplan und bevorzugte Terminvergabe.",
        ],
      },
      {
        heading: "Was bestimmt den Preis von Online-Koranunterricht?",
        answer:
          "Drei Dinge bestimmen, was Online-Koranunterricht kostet: ob der Unterricht einzeln oder in einer Gruppe stattfindet, wie qualifiziert die Lehrkraft ist und wie oft Sie sich treffen. Einzelunterricht kostet mehr als Gruppenunterricht, weil die volle Aufmerksamkeit der Lehrkraft einem Schüler gilt — dafür geht es aber auch deutlich schneller voran, weil jede Minute auf das Niveau Ihres Kindes zugeschnitten ist.",
        paragraphs: [
          "Auch die Qualifikation der Lehrkraft spielt eine Rolle. Eine zertifizierte Lehrkraft, die Tadschwied studiert hat und eine Idschaza besitzt — eine Lehrerlaubnis für den Koran, die von Lehrer zu Schüler weitergegeben wird — kostet mehr als ein ungeschulter Helfer, und der Unterschied zeigt sich in der Aussprache Ihres Kindes. Der dritte Faktor ist die Häufigkeit: Vier oder fünf kurze Stunden pro Woche kosten pro Monat mehr als eine Stunde pro Woche, aber kurze, häufige Stunden sind der Weg, wie Kinder wirklich eine Gewohnheit aufbauen.",
        ],
        list: [
          "Einzel- vs. Gruppenunterricht: Volle Aufmerksamkeit kostet mehr — und bringt schnellere Fortschritte",
          "Qualifikation der Lehrkraft: Zertifizierte Lehrkräfte und Idschaza-Inhaber kosten mehr als ungeschulte Helfer",
          "Häufigkeit: 4–5 kurze Stunden pro Woche bauen eine Gewohnheit auf; 1 Stunde pro Woche ist langsamer",
          "Stundendauer: 25 Minuten passen zu jungen Kindern; Hifz-Schüler brauchen 45 Minuten",
          "Extras: Fortschrittsberichte, Elterngespräche und flexible Terminverschiebung sind inklusive",
        ],
      },
      {
        heading: "Wie schneiden unsere Preise im Marktvergleich ab?",
        answer:
          "Veröffentlichte Preise für Live-Einzelunterricht im Koran liegen weltweit typischerweise bei 30–120 $ pro Monat; reine Hifz-Programme werden oft mit 120–200 $ pro Monat angegeben. Unsere Tarife — 35 $, 59 $ und 99 $ — liegen am günstigen Ende dieser Spanne für Live-Einzelunterricht, und Hifz Intensiv liegt unter der üblichen veröffentlichten Spanne für Hifz-Programme.",
        table: {
          headers: [
            "Angebot",
            "Typischer Preis (wie veröffentlicht)",
            "Was Sie erhalten",
          ],
          rows: [
            [
              "Live-Einzelunterricht Koran (weltweiter Markt)",
              "30–120 $ pro Monat",
              "Privatstunden, 2–5 Stunden pro Woche",
            ],
            [
              "Reine Hifz-Programme",
              "120–200 $ pro Monat",
              "Fokus auf Auswendiglernen, oft 5 Stunden pro Woche",
            ],
            [
              "Online-Angebote aus Berlin",
              "Ab 40 € pro Monat",
              "Je nach Anbieter und Format unterschiedlich",
            ],
            [
              "Deutsche Zoom-Nachhilfe (pro Einheit)",
              "7,49–9,99 € pro 20-minütiger Einheit",
              "Bezahlung pro Einheit; vier Einheiten pro Woche ergeben rund 120–160 € pro Monat",
            ],
            [
              "Online Quran (Basis / Standard / Hifz Intensiv)",
              "35 $ / 59 $ / 99 $ pro Monat",
              "Live-Einzelunterricht, zertifizierte Lehrkraft, Fortschrittsberichte, Probestunde",
            ],
          ],
        },
        paragraphs: [
          "Nachhilfe pro Einheit wirkt günstig, bis man zusammenrechnet: Bei 7,49–9,99 € pro 20-minütiger Einheit kosten vier Einheiten pro Woche rund 120–160 € im Monat — mehr als unser Standard-Tarif, bei kürzeren Stunden. Achten Sie beim Preisvergleich immer darauf, was enthalten ist: Gruppengröße, Qualifikation der Lehrkraft, Stundendauer sowie Fortschrittsberichte und Terminverschiebung.",
        ],
      },
      {
        heading: "Gibt es Rabatte oder Möglichkeiten zu sparen?",
        answer:
          "Ja. Familien mit mehr als einem Kind sparen mit unserem Geschwisterrabatt jeden Monat 10 % auf den Tarif des zweiten Kindes — der Rabatt wird automatisch gewährt, wenn Sie gemeinsam buchen. Und weil jeder Tarif mit einer kostenlosen 30-minütigen Probestunde beginnt, können Sie sicher sein, dass die Lehrkraft passt, bevor Sie etwas zahlen.",
        paragraphs: [
          "Es gibt keine Mindestlaufzeit, Sie zahlen also nie für Monate, die Sie nicht nutzen: Die Tarife laufen monatlich, und Sie können jederzeit kündigen oder für den Urlaub pausieren. Wenn Ihr Kind eine Stunde verpasst, geben Sie uns mindestens 12 Stunden vorher Bescheid — wir verschieben die Stunde kostenlos auf einen anderen Tag in derselben Woche.",
        ],
      },
      {
        heading: "Wie bezahle ich?",
        answer:
          "Die Tarife werden monatlich abgerechnet. Zum Start akzeptieren wir Kartenzahlung, PayPal und SEPA-Lastschrift — die übliche Art, Abonnements in Deutschland zu bezahlen. Die Preise sind in USD angegeben; an der Kasse wird der Euro-Gegenwert zum aktuellen Kurs berechnet, sodass der Betrag, den Sie an der Kasse sehen, der Betrag ist, den Sie zahlen.",
        paragraphs: [
          "Die endgültigen Euro-Preise werden zum Start bestätigt. Wenn Sie unsicher sind, welcher Tarif zu Ihrem Kind passt, buchen Sie zuerst die kostenlose Probestunde — Ihre Lehrkraft schätzt das Niveau Ihres Kindes in einer einzigen Stunde ein und empfiehlt den passenden Tarif, ohne Verpflichtung.",
        ],
      },
    ],
    faqHeading: "Häufig gestellte Fragen",
    faqs: [
      {
        q: "Ist die Probestunde wirklich kostenlos?",
        a: "Ja. Die erste Stunde ist eine kostenlose 30-minütige Probestunde, ohne Angabe von Zahlungsdaten. Ihr Kind lernt den Lehrer kennen, erlebt eine echte Stunde, und wir bestimmen das passende Niveau, bevor Sie sich entscheiden.",
      },
      {
        q: "Kann ich meinen Tarif kündigen oder pausieren?",
        a: "Ja. Die Tarife laufen monatlich ohne Mindestlaufzeit. Sie können jederzeit kündigen oder für den Urlaub pausieren — der Tarif verlängert sich dann einfach nicht in den nächsten Monat.",
      },
      {
        q: "Gibt es einen Geschwisterrabatt?",
        a: "Ja — melden Sie ein zweites Kind aus derselben Familie an und sparen Sie jeden Monat 10 % auf dessen Tarif. Der Rabatt wird automatisch gewährt, wenn Sie gemeinsam buchen.",
      },
      {
        q: "Sind die Preise in Euro oder Dollar?",
        a: "Die Tarife sind in USD angegeben; an der Kasse wird der Euro-Gegenwert zum aktuellen Kurs berechnet. Der Betrag, den Sie an der Kasse sehen, ist der Betrag, den Sie zahlen.",
      },
      {
        q: "Was passiert, wenn mein Kind eine Stunde verpasst?",
        a: "Wenn Sie uns mindestens 12 Stunden vorher Bescheid geben, verschieben wir die Stunde kostenlos auf einen anderen Tag in derselben Woche.",
      },
    ],
    relatedHeading: "Verwandte Ratgeber",
    related: [
      { href: "/quran-classes-for-kids", label: "Koranunterricht für Kinder" },
      {
        href: "/online-quran-classes-germany",
        label: "Online-Koranunterricht in Deutschland",
      },
      {
        href: "/blog/how-long-does-it-take-to-learn-quran",
        label: "Wie lange dauert es, den Koran lesen zu lernen?",
      },
      {
        href: "/blog/how-to-choose-an-online-quran-teacher",
        label: "Den richtigen Online-Koranlehrer finden",
      },
    ],
    ctaTitle: "Beginnen Sie mit einer kostenlosen Probestunde",
    ctaText:
      "Der beste Weg, einen Tarif zu wählen, ist eine echte Stunde auszuprobieren. Buchen Sie eine kostenlose 30-minütige Probestunde — Ihre Lehrkraft schätzt das Niveau Ihres Kindes ein und empfiehlt den passenden Tarif.",
    ctaCourse: "Noorani-Qaida-Kurs entdecken",
    ctaTrial: "Kostenlose Probestunde buchen",
    back: "← Zurück zu allen Artikeln",
  },
};

export default function PricingGuideContent() {
  const { locale } = useLocale();
  const t = content[locale];

  useEffect(() => {
    const meta = locale === "de" ? DE_META : EN_META;
    document.title = meta.title;
    let el = document.querySelector('meta[name="description"]');
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("name", "description");
      document.head.appendChild(el);
    }
    el.setAttribute("content", meta.description);
  }, [locale]);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${BASE_URL}/blog/${SLUG}#article`,
      headline: t.title,
      description: t.intro,
      image: COVER,
      author: {
        "@type": "Organization",
        name: "Online Quran",
        logo: "https://onlinekoran.de/logo-horizontal.svg",
        url: BASE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: "Online Quran",
        logo: "https://onlinekoran.de/logo-horizontal.svg",
        url: BASE_URL,
      },
      datePublished: "2026-11-12",
      dateModified: "2026-11-12",
      inLanguage: locale,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}/blog/${SLUG}`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${BASE_URL}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: t.title,
          item: `${BASE_URL}/blog/${SLUG}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-4 pb-4 pt-10 sm:px-6">
          <Link
            href="/blog"
            className="text-sm font-bold text-brand hover:text-brand-light"
          >
            {t.back}
          </Link>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
            {t.category} · {t.readTime}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-brand sm:text-5xl">
            {t.title}
          </h1>
          <p className="mt-4 text-sm font-semibold text-ink/60">
            {t.author} · {t.updated}
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">{t.intro}</p>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          <img
            src={COVER}
            alt={t.coverAlt}
            className="h-72 w-full rounded-3xl object-cover shadow-card sm:h-96"
          />
        </div>

        <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
          {t.sections.map((section) => (
            <section key={section.heading} className="mt-12 first:mt-4">
              <h2 className="font-display text-2xl font-bold text-brand sm:text-3xl">
                {section.heading}
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-gold" />
              <p className="mt-5 text-lg font-medium leading-relaxed text-ink">
                {section.answer}
              </p>
              {section.table && (
                <div className="mt-6 overflow-x-auto rounded-2xl border border-ink/10">
                  <table className="w-full min-w-[560px] border-collapse text-left text-sm leading-relaxed">
                    <thead>
                      <tr className="bg-brand text-white">
                        {section.table.headers.map((h) => (
                          <th key={h} className="px-4 py-3 font-bold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, i) => (
                        <tr
                          key={i}
                          className={i % 2 === 0 ? "bg-white" : "bg-cream"}
                        >
                          {row.map((cell, j) => (
                            <td
                              key={j}
                              className={`px-4 py-3 text-ink/80 ${
                                j === 0 ? "font-bold text-ink" : ""
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {section.paragraphs?.map((p, i) => (
                <p key={i} className="mt-5 leading-relaxed text-ink/80">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="mt-5 space-y-2">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 leading-relaxed text-ink/80"
                    >
                      <span
                        className="mt-0.5 text-gold-dark"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.ordered && (
                <ol className="mt-5 space-y-3">
                  {section.ordered.map((item, i) => (
                    <li
                      key={item}
                      className="flex gap-3 leading-relaxed text-ink/80"
                    >
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white"
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              )}
              {section.closing && (
                <p className="mt-5 leading-relaxed text-ink/80">
                  {section.closing}
                </p>
              )}
            </section>
          ))}

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-brand sm:text-3xl">
              {t.faqHeading}
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gold" />
            <div className="mt-6 space-y-5">
              {t.faqs.map((faq) => (
                <div key={faq.q} className="rounded-3xl bg-cream p-6">
                  <h3 className="font-display text-lg font-bold text-brand">
                    {faq.q}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-brand sm:text-3xl">
              {t.relatedHeading}
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gold" />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {t.related.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-2xl border border-ink/10 bg-white p-5 font-bold text-brand shadow-card transition hover:shadow-lift"
                  >
                    {link.label} <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14 rounded-3xl bg-brand p-8 text-white shadow-card sm:p-10">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              {t.ctaTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-white/85">{t.ctaText}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/courses/noorani-qaida"
                className="rounded-full bg-gold px-8 py-3.5 font-bold text-brand-deep transition hover:bg-gold-light"
              >
                {t.ctaCourse}
              </Link>
              <Link
                href="/free-trial"
                className="rounded-full border-2 border-white/70 px-8 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                {t.ctaTrial}
              </Link>
            </div>
          </section>

          <div className="mt-14 border-t border-ink/10 pt-8">
            <Link
              href="/blog"
              className="text-sm font-bold text-brand hover:text-brand-light"
            >
              {t.back}
            </Link>
          </div>
        </div>
      </article>

      <CtaBand />
    </>
  );
}
