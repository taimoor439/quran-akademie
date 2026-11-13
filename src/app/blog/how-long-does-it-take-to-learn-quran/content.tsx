"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { CtaBand } from "@/components/Shared";

const BASE_URL = "https://onlinekoran.de";
const SLUG = "how-long-does-it-take-to-learn-quran";

// Cover image verified 200 on 2026-11-12 (open Quran).
const COVER =
  "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=1600&q=80";

const EN_META = {
  title: "How Long Does It Take to Learn the Quran? (2026)",
  description:
    "Most children reach Quran reading fluency in 12–18 months; adults take 6–12 months. See the full timeline — Qaida, Tajweed and Hifz — and what speeds it up.",
};

const DE_META = {
  title: "Wie lange dauert es, den Koran lesen zu lernen?",
  description:
    "Die meisten Kinder lesen den Koran nach 12–18 Monaten flüssig; Erwachsene brauchen 6–12 Monate. Alle Etappen im Zeitplan — Qaida, Tadschwied und Hifz.",
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
    category: "Learning",
    readTime: "8 min read",
    title: "How Long Does It Take to Learn the Quran?",
    author: "By the Online Quran teaching team",
    updated: "Last updated: 12 November 2026",
    intro:
      "Most children starting from scratch at age 5–7 reach basic Quran reading fluency in 12–18 months with regular lessons and 15–30 minutes of daily practice. Adults starting from scratch typically take 6–12 months. Tajweed accuracy takes a further 6–12 months, and full memorisation (Hifz) is a 3–6 year journey.",
    coverAlt: "An open Quran",
    sections: [
      {
        heading: "How long does it take to learn to read the Quran?",
        answer:
          "Most children starting from scratch at age 5–7 reach basic Quran reading fluency in 12–18 months with regular lessons and 15–30 minutes of daily practice. Adults starting from scratch typically take 6–12 months. Tajweed accuracy takes a further 6–12 months, and full memorisation (Hifz) is a 3–6 year journey.",
        paragraphs: [
          "Those numbers are realistic averages for students who keep a steady rhythm — a few short lessons a week, plus a little practice most days. Progress is rarely a straight line: children often seem to stall for weeks, then suddenly jump forward once the letters and joining rules 'click'. The timeline below shows each stage separately, because 'learning the Quran' means different things to different people.",
        ],
      },
      {
        heading: "What does 'learning the Quran' actually mean?",
        answer:
          "'Learning the Quran' can mean three different things, and each has its own timeline: reading the Quran (Nazra) — recognising the letters and reading fluently from the Mushaf; Tajweed — pronouncing every letter correctly, from its proper place; and memorisation (Hifz) — committing the whole Quran to memory. Most students start with reading, add Tajweed as they go, and choose Hifz later if they want it.",
        paragraphs: [
          "There is also a fourth goal: understanding. Tafseer — studying what the verses mean — usually comes after reading fluency, and it is a lifelong study rather than a course with a finish date. When someone asks 'how long does it take?', the honest answer always starts with another question: which of these goals do you mean? This guide covers all of them.",
        ],
        list: [
          "Reading (Nazra): recognising letters and reading fluently — the first goal for every student",
          "Tajweed: correct pronunciation and the rules of recitation — built on top of reading",
          "Hifz: memorising the Quran, all 604 pages — a multi-year commitment",
          "Tafseer: understanding the meaning — a lifelong study, not a fixed course",
        ],
      },
      {
        heading: "How long does each stage take?",
        answer:
          "The table below gives the realistic range for each stage, assuming regular lessons and daily practice. Your own timeline depends on age, frequency and practice — see the factors below — but these ranges are what most students actually experience.",
        table: {
          headers: ["Stage", "Typical time", "What it means"],
          rows: [
            [
              "Noorani Qaida (letters, joining, vowel marks)",
              "3–6 months",
              "Reading simple words; the foundation for everything",
            ],
            [
              "Reading fluency — children",
              "12–18 months",
              "Reading from the Mushaf with growing confidence",
            ],
            [
              "Reading fluency — adults",
              "6–12 months",
              "Adults learn faster: stronger focus, existing reading skills",
            ],
            [
              "Tajweed accuracy",
              "A further 6–12 months",
              "Correct makhraj and the core rules, applied while reading",
            ],
            [
              "Hifz (full memorisation)",
              "3–6 years",
              "All 30 juz, with daily revision to keep it strong",
            ],
          ],
        },
        paragraphs: [
          "Notice that the stages overlap rather than sitting in a neat queue. Tajweed begins during the Qaida stage — the tutor corrects pronunciation from the very first letter — and deepens for a year or more after reading fluency. Hifz students usually start memorising short surahs (Juz Amma, the 30th Juz) long before they finish the whole Quran, so memorisation and reading grow together.",
        ],
      },
      {
        heading: "What changes the timeline?",
        answer:
          "Four things change the timeline more than anything else: age, lessons per week, daily practice, and starting point. A child with five short lessons a week and 15 minutes of daily practice will finish the Qaida in three months; the same child with one lesson a week and no practice may take a year.",
        paragraphs: [
          "Daily practice is the factor families control most. Ten minutes of listening and repeating every day does more for fluency than an extra lesson a week, because reading is a skill built by repetition — and consistency beats intensity: steady practice over a year outperforms a burst of effort followed by a long break.",
        ],
        list: [
          "Age: adults and older children learn the mechanics faster; young children memorise by ear more easily",
          "Lessons per week: 4–5 short lessons build momentum; 1 lesson a week loses it between sessions",
          "Daily practice: 15–30 minutes a day matters more than the number of lessons",
          "Starting point: a child who already knows the Arabic alphabet starts ahead",
          "Consistency: long breaks — holidays without practice, months off — add months to the timeline",
        ],
      },
      {
        heading: "How long does it take to memorize the Quran?",
        answer:
          "Memorising the whole Quran (Hifz) typically takes 3–6 years, depending on pace and daily revision. The Quran has 604 pages, 114 surahs, 6,236 verses and 30 juz — so the journey is long, but it is made of small daily steps: half a page a day finishes the Quran in about 3.3 years.",
        paragraphs: [
          "The pace matters less than the revision. Memorising a page is the easy part; keeping it is the work — which is why Hifz programmes build in daily revision of old material (muraja'ah) alongside new memorisation. Students who revise every day keep their Hifz for life; students who memorise fast and never revise lose it within months. Our Hifz Intensive plan is built around this rhythm: five 45-minute classes a week with a dedicated Hifz tutor and a weekly memorisation and revision plan.",
        ],
      },
      {
        heading: "How can I learn the Quran faster?",
        answer:
          "You learn fastest by combining regular lessons with short daily practice: listen every day, revise before learning something new, and keep the routine even when progress feels slow. Speed comes from consistency, not from longer sessions — and a tutor who corrects you in the moment saves months of unlearning bad habits later.",
        ordered: [
          "Take short lessons often: four or five 25–30 minute classes a week beat one long weekly lesson",
          "Practise 15–30 minutes every day — listening, repeating, and reading the day's passage",
          "Revise before you move on: re-read yesterday's page before starting a new one",
          "Listen to a trusted reciter daily, and repeat each verse after them",
          "Set small goals: one page, one surah, one rule at a time — and celebrate finishing each one",
          "Keep going through slow weeks: plateaus are normal, and breakthroughs follow them",
        ],
        closing:
          "One caution: faster is not always better. Rushing through the Qaida to 'get to the Quran' leaves shaky foundations, and sloppy pronunciation learned early takes far longer to fix than it would have taken to learn properly. A good tutor will sometimes slow you down on purpose — that is not a delay, it is the shortcut.",
      },
    ],
    faqHeading: "Frequently asked questions",
    faqs: [
      {
        q: "How long does Noorani Qaida take?",
        a: "Most students finish the Noorani Qaida in 3–6 months with regular lessons and short daily practice. Children aged 4–6 are usually at the longer end of the range; older children and adults often finish in about three months.",
      },
      {
        q: "Can adults learn the Quran from scratch?",
        a: "Yes — adults typically learn to read the Quran within 6–12 months, often faster than children, because they can concentrate longer and already read fluently in another language. Adults often start with the alphabet and reach fluent reading within a year.",
      },
      {
        q: "How long does it take to become a Hafiz?",
        a: "Full memorisation of the Quran (Hifz) typically takes 3–6 years, depending on daily pace and revision. Half a page a day finishes the Quran in about 3.3 years; the key is daily revision to keep what you have memorised.",
      },
      {
        q: "How many classes per week do I need?",
        a: "Our plans offer four to five short classes a week, which is the rhythm most students need for steady progress. Short, frequent lessons with daily practice work better than one long lesson a week.",
      },
      {
        q: "Is it too late to start learning the Quran as an adult?",
        a: "No — there is no age limit. Adults learn the mechanics quickly, and many start from the alphabet in their thirties, forties and beyond. The best time to start is now.",
      },
    ],
    relatedHeading: "Related guides",
    related: [
      {
        href: "/blog/noorani-qaida-explained",
        label: "Noorani Qaida Explained",
      },
      { href: "/blog/what-is-tajweed", label: "What Is Tajweed?" },
      {
        href: "/blog/how-to-memorize-quran",
        label: "How to Memorize the Quran",
      },
      {
        href: "/blog/what-age-should-a-child-start-learning-quran",
        label: "What Age Should a Child Start Learning Quran?",
      },
    ],
    ctaTitle: "Start your timeline today",
    ctaText:
      "Every journey through the Quran starts with the Qaida — and the first step is a free trial class. Book yours today and get a realistic plan for your level, with no obligation.",
    ctaCourse: "Explore the Noorani Qaida course",
    ctaTrial: "Book a free trial class",
    back: "← Back to all articles",
  },
  de: {
    category: "Lernen",
    readTime: "8 Min. Lesezeit",
    title: "Wie lange dauert es, den Koran lesen zu lernen?",
    author: "Vom Lehrteam der Online Quran",
    updated: "Zuletzt aktualisiert: 12. November 2026",
    intro:
      "Die meisten Kinder, die mit 5–7 Jahren von vorn anfangen, lesen den Koran nach 12–18 Monaten flüssig — bei regelmäßigem Unterricht und 15–30 Minuten täglichem Üben. Erwachsene, die von vorn anfangen, brauchen in der Regel 6–12 Monate. Tadschwied-Genauigkeit dauert weitere 6–12 Monate, und das vollständige Auswendiglernen (Hifz) ist eine Reise von 3–6 Jahren.",
    coverAlt: "Ein aufgeschlagener Koran",
    sections: [
      {
        heading: "Wie lange dauert es, den Koran lesen zu lernen?",
        answer:
          "Die meisten Kinder, die mit 5–7 Jahren von vorn anfangen, lesen den Koran nach 12–18 Monaten flüssig — bei regelmäßigem Unterricht und 15–30 Minuten täglichem Üben. Erwachsene, die von vorn anfangen, brauchen in der Regel 6–12 Monate. Tadschwied-Genauigkeit dauert weitere 6–12 Monate, und das vollständige Auswendiglernen (Hifz) ist eine Reise von 3–6 Jahren.",
        paragraphs: [
          "Diese Zahlen sind realistische Durchschnittswerte für Schüler, die einen stetigen Rhythmus halten — ein paar kurze Stunden pro Woche plus ein wenig Üben an den meisten Tagen. Fortschritt verläuft selten geradlinig: Kinder scheinen oft wochenlang zu stagnieren und machen dann plötzlich einen Sprung, sobald Buchstaben und Verbindungsregeln „klicken\". Die folgende Tabelle zeigt jede Etappe einzeln — denn „den Koran lernen\" bedeutet für jeden etwas anderes.",
        ],
      },
      {
        heading: "Was bedeutet „den Koran lernen\" eigentlich?",
        answer:
          "„Den Koran lernen\" kann drei verschiedene Dinge bedeuten, und jedes hat seinen eigenen Zeitplan: den Koran lesen (Nazra) — die Buchstaben erkennen und flüssig aus dem Mushaf lesen; Tadschwied — jeden Buchstaben korrekt aussprechen, von der richtigen Stelle; und Auswendiglernen (Hifz) — den gesamten Koran (Quran) im Gedächtnis behalten. Die meisten Schüler beginnen mit dem Lesen, fügen Tadschwied nach und nach hinzu und wählen Hifz später, wenn sie es möchten.",
        paragraphs: [
          "Es gibt auch ein viertes Ziel: das Verstehen. Tafsir — zu studieren, was die Verse bedeuten — folgt meist nach der Leseflüssigkeit und ist ein lebenslanges Studium, kein Kurs mit Enddatum. Wenn jemand fragt „Wie lange dauert es?\", beginnt die ehrliche Antwort immer mit einer Gegenfrage: Welches dieser Ziele meinen Sie? Dieser Leitfaden behandelt sie alle.",
        ],
        list: [
          "Lesen (Nazra): Buchstaben erkennen und flüssig lesen — das erste Ziel für jeden Schüler",
          "Tadschwied: korrekte Aussprache und die Regeln der Rezitation — aufbauend auf dem Lesen",
          "Hifz: den Koran auswendig lernen, alle 604 Seiten — eine mehrjährige Verpflichtung",
          "Tafsir: die Bedeutung verstehen — ein lebenslanges Studium, kein Kurs mit festem Ende",
        ],
      },
      {
        heading: "Wie lange dauert jede Etappe?",
        answer:
          "Die folgende Tabelle gibt die realistische Spanne für jede Etappe an — bei regelmäßigem Unterricht und täglichem Üben. Ihr eigener Zeitplan hängt von Alter, Häufigkeit und Übung ab (siehe die Faktoren unten), aber diese Spannen entsprechen dem, was die meisten Schüler tatsächlich erleben.",
        table: {
          headers: ["Etappe", "Typische Dauer", "Was das bedeutet"],
          rows: [
            [
              "Noorani Qaida (Buchstaben, Verbinden, Vokalzeichen)",
              "3–6 Monate",
              "Einfache Wörter lesen; die Grundlage für alles",
            ],
            [
              "Leseflüssigkeit — Kinder",
              "12–18 Monate",
              "Mit wachsender Sicherheit aus dem Mushaf lesen",
            ],
            [
              "Leseflüssigkeit — Erwachsene",
              "6–12 Monate",
              "Erwachsene lernen schneller: stärkere Konzentration, vorhandene Lesefähigkeit",
            ],
            [
              "Tadschwied-Genauigkeit",
              "Weitere 6–12 Monate",
              "Korrekter Makhraj und die Kernregeln, beim Lesen angewendet",
            ],
            [
              "Hifz (vollständiges Auswendiglernen)",
              "3–6 Jahre",
              "Alle 30 Dschuz, mit täglicher Wiederholung, damit es sitzt",
            ],
          ],
        },
        paragraphs: [
          "Beachten Sie, dass sich die Etappen überschneiden, statt sauber hintereinander zu stehen. Tadschwied beginnt bereits in der Qaida-Phase — die Lehrkraft korrigiert die Aussprache vom allerersten Buchstaben an — und vertieft sich noch ein Jahr oder länger nach der Leseflüssigkeit. Hifz-Schüler beginnen meist schon lange vor dem Ende des gesamten Korans, kurze Suren auswendig zu lernen (Dschuz Amma, der 30. Dschuz), sodass Auswendiglernen und Lesen gemeinsam wachsen.",
        ],
      },
      {
        heading: "Was verändert den Zeitplan?",
        answer:
          "Vier Dinge verändern den Zeitplan mehr als alles andere: Alter, Stunden pro Woche, tägliches Üben und Ausgangspunkt. Ein Kind mit fünf kurzen Stunden pro Woche und 15 Minuten täglichem Üben beendet die Qaida in drei Monaten; dasselbe Kind mit einer Stunde pro Woche und ohne Üben braucht vielleicht ein Jahr.",
        paragraphs: [
          "Das tägliche Üben ist der Faktor, den Familien am meisten kontrollieren. Zehn Minuten Zuhören und Nachsprechen jeden Tag bringen mehr für die Flüssigkeit als eine zusätzliche Stunde pro Woche, weil Lesen eine Fähigkeit ist, die durch Wiederholung aufgebaut wird — und Regelmäßigkeit schlägt Intensität: Stetiges Üben über ein Jahr übertrifft einen Kraftakt, gefolgt von einer langen Pause.",
        ],
        list: [
          "Alter: Erwachsene und ältere Kinder lernen die Mechanik schneller; kleine Kinder lernen leichter über das Gehör auswendig",
          "Stunden pro Woche: 4–5 kurze Stunden bauen Schwung auf; 1 Stunde pro Woche verliert ihn zwischen den Terminen",
          "Tägliches Üben: 15–30 Minuten am Tag zählen mehr als die Zahl der Stunden",
          "Ausgangspunkt: Ein Kind, das das arabische Alphabet schon kennt, startet mit Vorsprung",
          "Regelmäßigkeit: Lange Pausen — Urlaub ohne Üben, monatelange Unterbrechungen — verlängern den Zeitplan um Monate",
        ],
      },
      {
        heading: "Wie lange dauert es, den Koran auswendig zu lernen?",
        answer:
          "Das Auswendiglernen des gesamten Korans (Hifz) dauert in der Regel 3–6 Jahre, je nach Tempo und täglicher Wiederholung. Der Koran hat 604 Seiten, 114 Suren, 6.236 Verse und 30 Dschuz — die Reise ist also lang, aber sie besteht aus kleinen täglichen Schritten: Eine halbe Seite am Tag beendet den Koran in etwa 3,3 Jahren.",
        paragraphs: [
          "Das Tempo zählt weniger als die Wiederholung. Eine Seite auswendig zu lernen, ist der einfache Teil; sie zu behalten, ist die Arbeit — weshalb Hifz-Programme tägliches Wiederholen des alten Stoffs (Muradschah) neben dem neuen Auswendiglernen einbauen. Schüler, die jeden Tag wiederholen, behalten ihren Hifz ein Leben lang; Schüler, die schnell auswendig lernen und nie wiederholen, verlieren ihn innerhalb von Monaten. Unser Hifz-Intensiv-Tarif ist auf diesen Rhythmus ausgelegt: fünf 45-minütige Stunden pro Woche mit einem persönlichen Hifz-Lehrer und einem wöchentlichen Lern- und Wiederholungsplan.",
        ],
      },
      {
        heading: "Wie kann ich den Koran schneller lernen?",
        answer:
          "Am schnellsten lernt man durch die Kombination aus regelmäßigem Unterricht und kurzem täglichem Üben: jeden Tag zuhören, wiederholen, bevor man etwas Neues lernt, und die Routine auch dann halten, wenn der Fortschritt langsam erscheint. Tempo entsteht durch Beständigkeit, nicht durch längere Einheiten — und eine Lehrkraft, die Sie im Moment korrigiert, spart Monate des Umlernens schlechter Gewohnheiten.",
        ordered: [
          "Kurze Stunden, oft: Vier oder fünf 25–30-minütige Stunden pro Woche schlagen eine lange wöchentliche Stunde",
          "15–30 Minuten täglich üben — zuhören, nachsprechen und die Passage des Tages lesen",
          "Wiederholen, bevor Sie weitergehen: Lesen Sie die Seite von gestern erneut, bevor Sie eine neue beginnen",
          "Täglich einem vertrauenswürdigen Rezitator zuhören und jeden Vers nachsprechen",
          "Kleine Ziele setzen: eine Seite, eine Sure, eine Regel nach der anderen — und jedes erreichte Ziel feiern",
          "Durch langsame Wochen hindurchhalten: Plateaus sind normal, und Durchbrüche folgen ihnen",
        ],
        closing:
          "Ein Hinweis: Schneller ist nicht immer besser. Durch die Qaida zu hetzen, um „zum Koran zu kommen\", hinterlässt wackelige Grundlagen, und eine schlampige Aussprache, die man früh lernt, braucht viel länger zum Korrigieren, als es gedauert hätte, sie gleich richtig zu lernen. Eine gute Lehrkraft wird Sie manchmal absichtlich bremsen — das ist keine Verzögerung, sondern die Abkürzung.",
      },
    ],
    faqHeading: "Häufig gestellte Fragen",
    faqs: [
      {
        q: "Wie lange dauert die Noorani Qaida?",
        a: "Die meisten Schüler beenden die Noorani Qaida in 3–6 Monaten bei regelmäßigem Unterricht und kurzem täglichem Üben. Kinder von 4–6 Jahren liegen meist am längeren Ende der Spanne; ältere Kinder und Erwachsene schaffen es oft in etwa drei Monaten.",
      },
      {
        q: "Können Erwachsene den Koran von vorn lernen?",
        a: "Ja — Erwachsene lernen in der Regel innerhalb von 6–12 Monaten, den Koran zu lesen, oft schneller als Kinder, weil sie sich länger konzentrieren können und in einer anderen Sprache bereits flüssig lesen. Erwachsene beginnen oft mit dem Alphabet und lesen innerhalb eines Jahres flüssig.",
      },
      {
        q: "Wie lange dauert es, Hafiz zu werden?",
        a: "Das vollständige Auswendiglernen des Korans (Hifz) dauert in der Regel 3–6 Jahre, je nach täglichem Tempo und Wiederholung. Eine halbe Seite am Tag beendet den Koran in etwa 3,3 Jahren; entscheidend ist die tägliche Wiederholung, um das Gelernte zu behalten.",
      },
      {
        q: "Wie viele Stunden pro Woche brauche ich?",
        a: "Unsere Tarife bieten vier bis fünf kurze Stunden pro Woche — der Rhythmus, den die meisten Schüler für stetige Fortschritte brauchen. Kurze, häufige Stunden mit täglichem Üben wirken besser als eine lange Stunde pro Woche.",
      },
      {
        q: "Ist es zu spät, als Erwachsener den Koran zu lernen?",
        a: "Nein — es gibt keine Altersgrenze. Erwachsene lernen die Mechanik schnell, und viele beginnen mit dreißig, vierzig oder später mit dem Alphabet. Die beste Zeit zum Anfangen ist jetzt.",
      },
    ],
    relatedHeading: "Verwandte Ratgeber",
    related: [
      {
        href: "/blog/noorani-qaida-explained",
        label: "Noorani Qaida erklärt",
      },
      { href: "/blog/what-is-tajweed", label: "Was ist Tadschwied?" },
      {
        href: "/blog/how-to-memorize-quran",
        label: "Koran auswendig lernen: Hifz-Guide",
      },
      {
        href: "/blog/what-age-should-a-child-start-learning-quran",
        label: "Ab welchem Alter sollte ein Kind den Koran lernen?",
      },
    ],
    ctaTitle: "Beginnen Sie Ihren Zeitplan heute",
    ctaText:
      "Jeder Weg durch den Koran beginnt mit der Qaida — und der erste Schritt ist eine kostenlose Probestunde. Buchen Sie sie noch heute und erhalten Sie einen realistischen Plan für Ihr Niveau, ohne Verpflichtung.",
    ctaCourse: "Noorani-Qaida-Kurs entdecken",
    ctaTrial: "Kostenlose Probestunde buchen",
    back: "← Zurück zu allen Artikeln",
  },
};

export default function TimelineGuideContent() {
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
          <p className="mt-8 text-xs font-bold tracking-wide text-gold-dark">
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
