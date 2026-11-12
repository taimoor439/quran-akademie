"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { CtaBand } from "@/components/Shared";

const BASE_URL = "https://onlinekoran.de";
const SLUG = "/blog/how-online-quran-classes-work";
// Cover image assigned for this guide (curl-verified HTTP 200): mosque arches.
const COVER =
  "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=80";

const EN_META = {
  title: "How Do Online Quran Classes Work? Step by Step",
  description:
    "Live 1-on-1 Quran lessons on Zoom or Google Meet, in Germany time. Book a free trial, meet your tutor, get a learning plan — here's exactly how it works.",
};

const DE_META = {
  title: "Wie funktioniert Online-Koranunterricht? Ablauf",
  description:
    "Live-Einzelunterricht per Zoom oder Google Meet, nach deutscher Zeit. Kostenlose Probestunde buchen, Lehrkraft kennenlernen, Lernplan erhalten — so läuft es ab.",
};

interface Subsection {
  heading: string;
  paragraphs: string[];
  links?: { href: string; label: string }[];
}

interface Section {
  heading: string;
  paragraphs: string[];
  list?: string[];
  ordered?: string[];
  table?: { headers: string[]; rows: string[][] };
  arabic?: string;
  subsections?: Subsection[];
}

interface LocaleContent {
  crumbHome: string;
  crumbBlog: string;
  category: string;
  readTime: string;
  title: string;
  intro: string;
  coverAlt: string;
  author: string;
  updated: string;
  sections: Section[];
  faqHeading: string;
  faqs: { q: string; a: string }[];
  relatedHeading: string;
  related: { href: string; label: string }[];
  nextStep: {
    heading: string;
    body: string;
    courseLabel: string;
    courseHref: string;
    trialLabel: string;
  };
  back: string;
}

const content: { en: LocaleContent; de: LocaleContent } = {
  en: {
    crumbHome: "Home",
    crumbBlog: "Blog",
    category: "Guides",
    readTime: "6 min read",
    title: "How Do Online Quran Classes Work? A Step-by-Step Guide",
    intro:
      "Online Quran classes at Quran Akademie are live 1-on-1 video lessons with a certified tutor, held on Zoom or Google Meet at a time that fits the German school day. You book a free 30-minute trial class, meet your tutor, get a personal learning plan — and start learning, usually within a day or two.",
    coverAlt: "Arches inside a mosque",
    author: "By the Quran Akademie teaching team",
    updated: "Last updated: 12 November 2026",
    sections: [
      {
        heading: "How do online Quran classes work, step by step?",
        paragraphs: [
          "Getting started takes five steps, and most families go from first contact to first lesson within a day or two. There is no waiting list: lessons are 1-on-1, so your start date is the day you choose.",
        ],
        ordered: [
          "Book a free trial class: choose a time that suits you on the free trial page — no payment details needed. We match you with a tutor for your level and age group, male or female as you prefer.",
          "Meet your tutor and check your level: in the 30-minute trial, the tutor listens to your recitation, checks what you already know, and answers your questions. It is a real lesson, not a sales call.",
          "Get a personal learning plan: after the trial, your tutor sets out your path — Noorani Qaida for beginners, then fluent reading (Nazra), Tajweed, and Hifz or Tafseer for those who want to go further — with clear goals for the first three months.",
          "Start your live 1-on-1 lessons: regular lessons on Zoom or Google Meet, at your chosen days and times in Germany time (CET/CEST). Your tutor teaches you alone — no group, no waiting for other students.",
          "Track progress with reports and check-ins: parents receive a monthly progress report showing what their child has covered and what comes next. The Standard plan also includes a parent check-in with the tutor.",
        ],
      },
      {
        heading: "What happens in the free trial class?",
        paragraphs: [
          "The free trial is a full 30-minute lesson with the tutor you would actually learn with. For a child, that means a warm welcome, a few minutes getting to know each other, and then real learning: the tutor listens to the child read, gently corrects pronunciation, and teaches something new. For an adult beginner, it means an honest level check and a clear picture of the road ahead.",
          "After the trial, there is no obligation and no pressure. You decide whether the tutor and the format feel right — and only then do you choose a plan. If the fit is not right, you can ask for a different tutor. The trial exists to answer the one question no website can: does my child like learning with this teacher?",
        ],
      },
      {
        heading: "What does a normal lesson look like?",
        paragraphs: [
          "A lesson follows the same rhythm every time, so children always know what is coming. It opens with a short revision of the last lesson — the tutor listens while the student recites what they practised at home. Then comes the new material: new letters, words or verses, taught slowly and repeated until they are secure. The lesson closes with the tutor setting the week's practice and telling the student exactly what to work on.",
          "Lesson length depends on the plan: 25 minutes on the Basic plan, 30 minutes on Standard, and 45 minutes on Hifz Intensive. Short, frequent lessons work better than long ones — a 25-minute lesson four times a week keeps a child's attention and builds a daily habit, where a single hour-long weekly session is mostly forgotten by the next week.",
        ],
      },
      {
        heading: "What do I need at home?",
        paragraphs: [
          "Very little — if you can make a video call, you can take a Quran class. There is no special software to install and nothing to buy before your first lesson.",
        ],
        list: [
          "A device with a camera and microphone: a laptop or tablet works best; a phone works too.",
          "A stable internet connection: any normal home broadband or Wi-Fi connection is enough for a video lesson.",
          "A quiet spot: a corner of a room where your child can sit comfortably and hear the tutor clearly.",
          "Zoom or Google Meet: both are free, and your tutor sends you the link before each lesson — just click to join.",
          "A Quran or Qaida book for practice between lessons (your tutor will tell you which one after the trial).",
        ],
      },
      {
        heading: "When are classes held?",
        paragraphs: [
          "Lessons run in Germany time (CET/CEST), fitted around the German school day: after-school slots from the early afternoon, and evening slots for adults and older students. You choose your own days — four or five lessons a week depending on your plan — and the same tutor teaches you at the same times each week, so the routine becomes part of the family week.",
          "School holidays and Ramadan are planned around, not through: tell us your family's dates and we adjust the schedule. And because lessons are online, a holiday or a move within Germany never interrupts learning — your tutor is one click away wherever you are.",
        ],
      },
      {
        heading: "How much do online Quran classes cost?",
        paragraphs: [
          "Three plans cover every stage, and every plan starts with a free 30-minute trial class. Plans are priced in USD and the EUR equivalent is charged at checkout at the current rate — the amount you see at checkout is the amount you pay. A second child from the same family gets 10% off their plan every month.",
        ],
        table: {
          headers: ["Plan", "Price", "Classes per week", "Lesson length"],
          rows: [
            ["Basic", "$35/month", "4 classes", "25 minutes"],
            ["Standard (most popular)", "$59/month", "5 classes", "30 minutes"],
            ["Hifz Intensive", "$99/month", "5 classes", "45 minutes"],
          ],
        },
      },
      {
        heading: "What if we need to move or miss a lesson?",
        paragraphs: [
          "Life happens — a school trip, an illness, a family visit. The Standard plan includes flexible rescheduling, so lessons can be moved when your week changes. If you need a longer break, you can pause — there is no lock-in and no hidden fee for stopping. The best approach is simple: tell us as early as you can, and we will find a new slot that works.",
        ],
      },
    ],
    faqHeading: "Frequently asked questions",
    faqs: [
      {
        q: "How do online Quran classes work for young children?",
        a: "Young children learn best in short, lively 1-on-1 lessons — 25 minutes, four times a week — with a patient tutor who uses praise, repetition and small goals. Parents sit nearby for the first lessons, and the monthly progress report shows exactly what their child is learning.",
      },
      {
        q: "Do I need to install any software?",
        a: "No special software. Lessons run on Zoom or Google Meet, both free — your tutor sends a link before each lesson and you click to join. Any laptop, tablet or phone with a camera and microphone works.",
      },
      {
        q: "Are online Quran classes as effective as in-person lessons?",
        a: "For recitation, yes — Quran learning is mouth-to-ear, and a live video lesson gives your tutor the same view of your reading as sitting across a table. The 1-on-1 format means every minute of the lesson is yours, with no waiting for other students.",
      },
      {
        q: "Can adults learn Quran online from scratch?",
        a: "Yes. Adults typically reach reading fluency in 6–12 months from scratch, starting with Noorani Qaida (3–6 months). Evening lessons in Germany time fit around work, and the pace is set entirely around you.",
      },
      {
        q: "Is there a waiting list?",
        a: "No. Lessons are 1-on-1 with instant start — you book a free trial class, meet your tutor, and begin, usually within a day or two. There is no group to fill and no term to wait for.",
      },
    ],
    relatedHeading: "Related guides",
    related: [
      { href: "/blog/how-to-choose-an-online-quran-teacher", label: "How to Choose an Online Quran Teacher" },
      { href: "/blog/online-vs-in-person-quran-classes", label: "Online vs In-Person Quran Classes" },
      { href: "/blog/how-much-do-online-quran-classes-cost", label: "How Much Do Online Quran Classes Cost?" },
      { href: "/blog/noorani-qaida-explained", label: "Noorani Qaida Explained" },
      { href: "/courses/noorani-qaida", label: "Noorani Qaida course" },
      { href: "/pricing", label: "Pricing" },
    ],
    nextStep: {
      heading: "Start with a free trial class",
      body: "The best way to understand how online Quran classes work is to try one. Book a free 30-minute trial — a real lesson with a certified tutor, no payment details — and see how your child responds. Most beginners start with Noorani Qaida, the first step on the path to reading the Quran.",
      courseLabel: "See the Noorani Qaida course",
      courseHref: "/courses/noorani-qaida",
      trialLabel: "Book your free trial class",
    },
    back: "← Back to all articles",
  },
  de: {
    crumbHome: "Startseite",
    crumbBlog: "Blog",
    category: "Ratgeber",
    readTime: "6 Min. Lesezeit",
    title: "Wie funktioniert Online-Koranunterricht? Eine Schritt-für-Schritt-Anleitung",
    intro:
      "Online-Koranunterricht bei der Quran Akademie ist Live-Einzelunterricht per Video mit einer zertifizierten Lehrkraft — über Zoom oder Google Meet, zu einer Zeit, die in den deutschen Schulalltag passt. Sie buchen eine kostenlose 30-minütige Probestunde, lernen Ihre Lehrkraft kennen, erhalten einen persönlichen Lernplan — und fangen an, meist innerhalb von ein oder zwei Tagen.",
    coverAlt: "Bögen im Inneren einer Moschee",
    author: "Vom Lehrteam der Quran Akademie",
    updated: "Zuletzt aktualisiert: 12. November 2026",
    sections: [
      {
        heading: "Wie funktioniert Online-Koranunterricht, Schritt für Schritt?",
        paragraphs: [
          "Der Einstieg braucht fünf Schritte, und die meisten Familien kommen innerhalb von ein oder zwei Tagen vom ersten Kontakt zur ersten Stunde. Es gibt keine Warteliste: Der Unterricht ist Einzelunterricht, also ist Ihr Starttermin der Tag, den Sie wählen.",
        ],
        ordered: [
          "Kostenlose Probestunde buchen: Wählen Sie auf der Probestunden-Seite eine Zeit, die Ihnen passt — ohne Angabe von Zahlungsdaten. Wir finden eine Lehrkraft für Ihr Niveau und Ihre Altersgruppe, männlich oder weiblich, wie Sie wünschen.",
          "Lehrkraft kennenlernen und Niveau prüfen: In der 30-minütigen Probestunde hört die Lehrkraft Ihre Rezitation, prüft, was Sie bereits können, und beantwortet Ihre Fragen. Es ist eine echte Stunde, kein Verkaufsgespräch.",
          "Persönlichen Lernplan erhalten: Nach der Probestunde legt Ihre Lehrkraft Ihren Weg fest — Noorani Qaida für Anfänger, dann flüssiges Lesen (Nazra), Tadschwied, und Hifz oder Tafsir für alle, die weitergehen möchten — mit klaren Zielen für die ersten drei Monate.",
          "Live-Einzelstunden beginnen: Regelmäßige Stunden über Zoom oder Google Meet, an den Tagen und zu den Zeiten Ihrer Wahl nach deutscher Zeit (MEZ/MESZ). Ihre Lehrkraft unterrichtet nur Sie — keine Gruppe, kein Warten auf andere Schüler.",
          "Fortschritt verfolgen mit Berichten und Gesprächen: Eltern erhalten einen monatlichen Fortschrittsbericht, der zeigt, was ihr Kind behandelt hat und was als Nächstes kommt. Der Standard-Tarif enthält zusätzlich ein Elterngespräch mit der Lehrkraft.",
        ],
      },
      {
        heading: "Was passiert in der kostenlosen Probestunde?",
        paragraphs: [
          "Die kostenlose Probestunde ist eine volle 30-minütige Stunde mit der Lehrkraft, mit der Sie tatsächlich lernen würden. Für ein Kind heißt das: eine herzliche Begrüßung, ein paar Minuten Kennenlernen und dann echtes Lernen — die Lehrkraft hört dem Kind beim Lesen zu, korrigiert die Aussprache sanft und lehrt etwas Neues. Für einen erwachsenen Anfänger heißt das: eine ehrliche Niveau-Einschätzung und ein klares Bild des Weges, der vor ihm liegt.",
          "Nach der Probestunde gibt es keine Verpflichtung und keinen Druck. Sie entscheiden, ob Lehrkraft und Format sich richtig anfühlen — und erst dann wählen Sie einen Tarif. Passt es nicht, können Sie um eine andere Lehrkraft bitten. Die Probestunde beantwortet die eine Frage, die keine Website beantworten kann: Lernt mein Kind gern mit dieser Lehrkraft?",
        ],
      },
      {
        heading: "Wie sieht eine normale Stunde aus?",
        paragraphs: [
          "Eine Stunde folgt jedes Mal demselben Rhythmus, sodass Kinder immer wissen, was kommt. Sie beginnt mit einer kurzen Wiederholung der letzten Stunde — die Lehrkraft hört zu, während der Schüler aufsagt, was er zu Hause geübt hat. Dann kommt der neue Stoff: neue Buchstaben, Wörter oder Verse, langsam gelehrt und wiederholt, bis sie sitzen. Die Stunde endet damit, dass die Lehrkraft die Übung für die Woche festlegt und dem Schüler genau sagt, woran er arbeiten soll.",
          "Die Stundendauer hängt vom Tarif ab: 25 Minuten im Basis-Tarif, 30 Minuten im Standard-Tarif und 45 Minuten im Tarif Hifz Intensiv. Kurze, häufige Stunden wirken besser als lange — eine 25-minütige Stunde viermal pro Woche hält die Aufmerksamkeit eines Kindes und baut eine tägliche Gewohnheit auf, während eine einzige einstündige Wochenstunde bis zur nächsten Woche meist vergessen ist.",
        ],
      },
      {
        heading: "Was brauche ich zu Hause?",
        paragraphs: [
          "Sehr wenig — wer einen Videoanruf führen kann, kann auch Koranunterricht nehmen. Es gibt keine spezielle Software zu installieren und nichts zu kaufen vor der ersten Stunde.",
        ],
        list: [
          "Ein Gerät mit Kamera und Mikrofon: Laptop oder Tablet eignen sich am besten; ein Handy funktioniert auch.",
          "Eine stabile Internetverbindung: Ein normaler Heimanschluss oder WLAN reicht für eine Videostunde völlig aus.",
          "Ein ruhiger Platz: Eine Ecke im Zimmer, in der Ihr Kind bequem sitzen und die Lehrkraft gut hören kann.",
          "Zoom oder Google Meet: Beides ist kostenlos, und Ihre Lehrkraft schickt Ihnen vor jeder Stunde den Link — einfach anklicken und teilnehmen.",
          "Ein Koran- oder Qaida-Buch zum Üben zwischen den Stunden (Ihre Lehrkraft sagt Ihnen nach der Probestunde, welches).",
        ],
      },
      {
        heading: "Wann finden die Stunden statt?",
        paragraphs: [
          "Die Stunden laufen nach deutscher Zeit (MEZ/MESZ), abgestimmt auf den deutschen Schulalltag: Nachmittagsstunden ab dem frühen Nachmittag und Abendstunden für Erwachsene und ältere Schüler. Sie wählen Ihre eigenen Tage — vier oder fünf Stunden pro Woche je nach Tarif — und dieselbe Lehrkraft unterrichtet Sie jede Woche zu denselben Zeiten, sodass die Routine Teil der Familienwoche wird.",
          "Schulferien und Ramadan werden eingeplant, nicht einfach durchgezogen: Teilen Sie uns die Termine Ihrer Familie mit und wir passen den Stundenplan an. Und weil der Unterricht online stattfindet, unterbrechen weder Urlaub noch ein Umzug innerhalb Deutschlands das Lernen — Ihre Lehrkraft ist überall nur einen Klick entfernt.",
        ],
      },
      {
        heading: "Was kostet Online-Koranunterricht?",
        paragraphs: [
          "Drei Tarife decken jede Stufe ab, und jeder Tarif beginnt mit einer kostenlosen 30-minütigen Probestunde. Die Tarife sind in USD angegeben; an der Kasse wird der Euro-Gegenwert zum aktuellen Kurs berechnet — der Betrag, den Sie an der Kasse sehen, ist der Betrag, den Sie zahlen. Ein zweites Kind aus derselben Familie erhält jeden Monat 10 % Rabatt auf seinen Tarif.",
        ],
        table: {
          headers: ["Tarif", "Preis", "Stunden pro Woche", "Stundendauer"],
          rows: [
            ["Basis", "35 $/Monat", "4 Stunden", "25 Minuten"],
            ["Standard (am beliebtesten)", "59 $/Monat", "5 Stunden", "30 Minuten"],
            ["Hifz Intensiv", "99 $/Monat", "5 Stunden", "45 Minuten"],
          ],
        },
      },
      {
        heading: "Was, wenn wir eine Stunde verschieben oder verpassen müssen?",
        paragraphs: [
          "Das Leben passiert — ein Schulausflug, eine Krankheit, ein Familienbesuch. Der Standard-Tarif enthält flexible Terminverschiebung, sodass Stunden verlegt werden können, wenn sich Ihre Woche ändert. Wenn Sie eine längere Pause brauchen, können Sie pausieren — es gibt keine Mindestlaufzeit und keine versteckte Gebühr fürs Aufhören. Der beste Weg ist einfach: Sagen Sie uns so früh wie möglich Bescheid, und wir finden einen neuen Termin, der passt.",
        ],
      },
    ],
    faqHeading: "Häufige Fragen",
    faqs: [
      {
        q: "Wie funktioniert Online-Koranunterricht für kleine Kinder?",
        a: "Kleine Kinder lernen am besten in kurzen, lebendigen Einzelstunden — 25 Minuten, viermal pro Woche — mit einer geduldigen Lehrkraft, die mit Lob, Wiederholung und kleinen Zielen arbeitet. Eltern sitzen bei den ersten Stunden in der Nähe, und der monatliche Fortschrittsbericht zeigt genau, was ihr Kind lernt.",
      },
      {
        q: "Muss ich eine Software installieren?",
        a: "Keine spezielle Software. Die Stunden laufen über Zoom oder Google Meet, beides kostenlos — Ihre Lehrkraft schickt vor jeder Stunde einen Link und Sie klicken einfach darauf. Jeder Laptop, jedes Tablet oder Handy mit Kamera und Mikrofon funktioniert.",
      },
      {
        q: "Ist Online-Koranunterricht so wirksam wie Präsenzunterricht?",
        a: "Für die Rezitation ja — Koranlernen geschieht von Mund zu Ohr, und eine Live-Videostunde gibt Ihrer Lehrkraft denselben Blick auf Ihr Lesen wie das Sitzen am selben Tisch. Im Einzelunterricht gehört jede Minute der Stunde Ihnen, ohne Warten auf andere Schüler.",
      },
      {
        q: "Können Erwachsene den Koran online von Grund auf lernen?",
        a: "Ja. Erwachsene erreichen in der Regel in 6–12 Monaten ab Null Leseflüssigkeit, beginnend mit der Noorani Qaida (3–6 Monate). Abendstunden nach deutscher Zeit passen zum Beruf, und das Tempo richtet sich ganz nach Ihnen.",
      },
      {
        q: "Gibt es eine Warteliste?",
        a: "Nein. Der Unterricht ist Einzelunterricht mit sofortigem Start — Sie buchen eine kostenlose Probestunde, lernen Ihre Lehrkraft kennen und fangen an, meist innerhalb von ein oder zwei Tagen. Es gibt keine Gruppe zu füllen und kein Semester, auf das man warten müsste.",
      },
    ],
    relatedHeading: "Verwandte Leitfäden",
    related: [
      { href: "/blog/how-to-choose-an-online-quran-teacher", label: "Koranlehrer online finden: 12 Fragen" },
      { href: "/blog/online-vs-in-person-quran-classes", label: "Online- vs Präsenz-Koranunterricht" },
      { href: "/blog/how-much-do-online-quran-classes-cost", label: "Was kostet Online-Koranunterricht?" },
      { href: "/blog/noorani-qaida-explained", label: "Noorani Qaida erklärt" },
      { href: "/courses/noorani-qaida", label: "Noorani-Qaida-Kurs" },
      { href: "/pricing", label: "Preise" },
    ],
    nextStep: {
      heading: "Beginnen Sie mit einer kostenlosen Probestunde",
      body: "Der beste Weg zu verstehen, wie Online-Koranunterricht funktioniert, ist, eine Stunde auszuprobieren. Buchen Sie eine kostenlose 30-minütige Probestunde — eine echte Stunde mit einer zertifizierten Lehrkraft, ohne Angabe von Zahlungsdaten — und sehen Sie, wie Ihr Kind reagiert. Die meisten Anfänger starten mit der Noorani Qaida, dem ersten Schritt auf dem Weg zum Koranlesen.",
      courseLabel: "Zum Noorani-Qaida-Kurs",
      courseHref: "/courses/noorani-qaida",
      trialLabel: "Kostenlose Probestunde buchen",
    },
    back: "← Zurück zu allen Artikeln",
  },
};

export default function GuideContent() {
  const { locale } = useLocale();
  const t = content[locale];
  const meta = locale === "de" ? DE_META : EN_META;

  useEffect(() => {
    document.title = meta.title;
    let el = document.querySelector('meta[name="description"]');
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("name", "description");
      document.head.appendChild(el);
    }
    el.setAttribute("content", meta.description);
  }, [locale, meta.title, meta.description]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${BASE_URL}${SLUG}#article`,
        headline: t.title,
        description: meta.description,
        image: COVER,
        author: { "@type": "Organization", name: "Quran Akademie" },
        publisher: {
          "@type": "Organization",
          name: "Quran Akademie",
          url: BASE_URL,
        },
        datePublished: "2026-11-12",
        dateModified: "2026-11-12",
        inLanguage: locale,
        mainEntityOfPage: `${BASE_URL}${SLUG}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.crumbHome, item: BASE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: t.crumbBlog,
            item: `${BASE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: t.title,
            item: `${BASE_URL}${SLUG}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: t.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

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
              {section.arabic && (
                <p
                  className="mt-5 rounded-2xl bg-cream px-5 py-4 text-center font-arabic text-2xl leading-relaxed text-brand"
                  dir="rtl"
                >
                  {section.arabic}
                </p>
              )}
              {section.paragraphs.map((p, i) => (
                <p key={i} className="mt-5 leading-relaxed text-ink/80">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="mt-5 space-y-2">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-ink/80">
                      <span className="mt-0.5 text-gold-dark" aria-hidden="true">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.ordered && (
                <ol className="mt-5 list-decimal space-y-3 pl-6">
                  {section.ordered.map((item) => (
                    <li key={item} className="leading-relaxed text-ink/80">
                      {item}
                    </li>
                  ))}
                </ol>
              )}
              {section.table && (
                <div className="mt-6 overflow-x-auto rounded-2xl border border-ink/10">
                  <table className="w-full min-w-[480px] border-collapse text-left text-sm">
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
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-cream"}>
                          {row.map((cell, j) => (
                            <td key={j} className="px-4 py-3 leading-relaxed text-ink/80">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {section.subsections &&
                section.subsections.map((sub) => (
                  <div key={sub.heading} className="mt-9">
                    <h3 className="font-display text-xl font-bold text-brand">
                      {sub.heading}
                    </h3>
                    {sub.paragraphs.map((p, i) => (
                      <p key={i} className="mt-3 leading-relaxed text-ink/80">
                        {p}
                      </p>
                    ))}
                    {sub.links &&
                      sub.links.map((l) => (
                        <p key={l.href} className="mt-3">
                          <Link
                            href={l.href}
                            className="font-bold text-brand underline decoration-gold decoration-2 underline-offset-4 hover:text-brand-light"
                          >
                            {l.label} →
                          </Link>
                        </p>
                      ))}
                  </div>
                ))}
            </section>
          ))}

          <section className="mt-14 border-t border-ink/10 pt-10">
            <h2 className="font-display text-2xl font-bold text-brand sm:text-3xl">
              {t.faqHeading}
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gold" />
            <div className="mt-8 space-y-6">
              {t.faqs.map((faq) => (
                <div key={faq.q} className="rounded-3xl bg-cream p-6 shadow-card sm:p-8">
                  <h3 className="font-display text-lg font-bold text-brand sm:text-xl">
                    {faq.q}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink/70">{faq.a}</p>
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
              {t.related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="block rounded-2xl border border-ink/10 bg-white px-5 py-4 font-bold text-brand shadow-card transition hover:border-gold hover:shadow-lift"
                  >
                    {r.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14 rounded-3xl bg-brand p-8 text-white shadow-card sm:p-10">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              {t.nextStep.heading}
            </h2>
            <p className="mt-4 leading-relaxed text-white/85">{t.nextStep.body}</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href={t.nextStep.courseHref}
                className="rounded-full bg-gold px-8 py-3.5 font-bold text-brand-deep transition hover:bg-gold-light"
              >
                {t.nextStep.courseLabel}
              </Link>
              <Link
                href="/free-trial"
                className="rounded-full border-2 border-white px-8 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                {t.nextStep.trialLabel}
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
