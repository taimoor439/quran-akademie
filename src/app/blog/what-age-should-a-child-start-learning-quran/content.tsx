"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { CtaBand } from "@/components/Shared";

const BASE_URL = "https://onlinekoran.de";
const SLUG = "what-age-should-a-child-start-learning-quran";

// Cover image verified 200 on 2026-11-12 (boy reading indoors).
const COVER =
  "https://images.pexels.com/photos/33451745/pexels-photo-33451745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const EN_META = {
  title: "What Age Should a Child Start Learning the Quran?",
  description:
    "Most children can start learning the Quran at age 4–5, and 5–7 is the ideal window. Learn the readiness signs, age-by-age stages, and what to expect first.",
};

const DE_META = {
  title: "Ab welchem Alter sollte ein Kind den Koran lernen?",
  description:
    "Die meisten Kinder können ab 4–5 Jahren mit dem Koranlernen beginnen; 5–7 Jahre ist das ideale Alter. Altersstufen, Bereitschaftsanzeichen und erste Schritte.",
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
    category: "For Parents",
    readTime: "7 min read",
    title: "What Age Should a Child Start Learning the Quran?",
    author: "By the Online Quran teaching team",
    updated: "Last updated: 12 November 2026",
    intro:
      "Most children can start learning the Quran at age 4–5, beginning with the sounds and letters of the Noorani Qaida, and ages 5–7 are the ideal window to start. But readiness matters more than the birthday: a child who can sit and focus for 15–20 minutes, recognise letters, and enjoys listening to short surahs is ready — whenever that happens.",
    coverAlt: "A young boy reading indoors",
    sections: [
      {
        heading: "What age should a child start learning Quran?",
        answer:
          "Most children can start learning the Quran at age 4–5, beginning with the sounds and letters of the Noorani Qaida, and ages 5–7 are the ideal window to start. But readiness matters more than the birthday: a child who can sit and focus for 15–20 minutes and enjoys listening to short surahs is ready — whenever that happens.",
        paragraphs: [
          "Young children learn the Quran first by ear — listening, repeating, and absorbing the sounds before they can read a single letter. That is why the early years are so powerful: a four-year-old who hears Surah Al-Fatiha, Al-Ikhlas and Al-Kawthar every day will often memorise them without ever being 'taught' in the formal sense. Formal lessons then build on that foundation, turning listening into reading, letter by letter.",
        ],
      },
      {
        heading: "How do I know if my child is ready?",
        answer:
          "Your child is ready when they can sit and focus for about 15–20 minutes, follow simple instructions, and show interest in letters, sounds or stories. They do not need to read already, know any Arabic, or sit perfectly still — a good tutor keeps young children engaged with short activities, repetition games and plenty of encouragement.",
        paragraphs: [
          "If your child is not there yet, that is fine — wait a few months and try again. Starting too early and making lessons feel like a chore does more harm than starting a little later with a child who is eager. The free trial class is a good test: in one 30-minute session, the tutor can tell you honestly whether your child is ready.",
        ],
        list: [
          "Can sit and focus for 15–20 minutes on one activity",
          "Follows simple two-step instructions ('open the book, point to the letter')",
          "Shows interest in letters, sounds, songs or stories",
          "Can repeat short phrases after hearing them once or twice",
          "Enjoys listening to Quran recitation or short surahs",
        ],
      },
      {
        heading: "What does each age learn?",
        answer:
          "Children learn the Quran in stages, and each stage has its own goals and lesson length. The table below shows what a typical path looks like — your child's tutor adapts it to their pace, because some children move faster and some need more time on the foundations.",
        table: {
          headers: ["Age", "What they learn", "Lesson length"],
          rows: [
            [
              "4–6",
              "Noorani Qaida: Arabic letters and sounds, joining letters; short surahs by ear (Al-Fatiha, Al-Ikhlas, Al-Falaq, An-Nas)",
              "25 minutes",
            ],
            [
              "7–10",
              "Reading fluency from the Mushaf, first Tajweed rules, memorising Juz Amma (the 30th Juz)",
              "25–30 minutes",
            ],
            [
              "11+",
              "Fluent reading with Tajweed, Hifz or Tafseer, longer surahs and independent revision",
              "30–45 minutes",
            ],
          ],
        },
        paragraphs: [
          "The youngest children start with the Noorani Qaida, which typically takes 3–6 months, and most children reach basic reading fluency within 12–18 months of starting. Older children often move faster because their concentration and reading skills in their first language are already stronger.",
        ],
      },
      {
        heading: "How long should a child's Quran lesson be?",
        answer:
          "For children aged 4–6, 25 minutes is the right lesson length — long enough to learn something real, short enough to end while they are still enjoying it. Children aged 7–10 can usually manage 25–30 minutes, and older children working on Hifz can handle 45-minute lessons with a break built in.",
        paragraphs: [
          "Short and frequent beats long and rare. Four or five short classes a week keep the sounds fresh in a child's ear, while one long weekly lesson is mostly forgotten by the next week. That is why our plans are built around 25-minute classes for younger children: the habit matters more than the hour count. Between lessons, 10–15 minutes of daily practice — listening to a short surah, repeating the day's letters — does more than a weekend cram session.",
        ],
      },
      {
        heading: "What should I expect in the first months?",
        answer:
          "In the first months, expect slow, steady progress: your child will learn the Arabic letters, how they join together, and the vowel marks — and will probably memorise a few short surahs by ear before they can read them. Progress feels slow at first, then speeds up suddenly once reading 'clicks'.",
        paragraphs: [
          "Most children finish the Noorani Qaida within 3–6 months and start reading short words from the Mushaf. You will get a monthly progress report so you can see exactly what your child has covered, and your tutor will tell you honestly if your child needs more time on a stage. The best thing parents can do is keep practice short, daily and positive — and let the tutor worry about the pace.",
        ],
        ordered: [
          "Listen together: play a short surah in the car or at bedtime",
          "Practise for 10 minutes a day — little and often beats long sessions",
          "Praise effort, not just results: 'you read that letter beautifully'",
          "Keep the routine: same time, same quiet place, every lesson day",
          "Talk to the tutor: share what is working and what is not",
        ],
      },
      {
        heading: "Is it too late to start at 10 or older?",
        answer:
          "No — it is never too late. Children who start at 10, 12 or older usually learn faster than younger children because they can concentrate longer, already read fluently in another language, and understand what they are learning. Many adults start from scratch too, and typically learn to read the Quran within 6–12 months.",
        paragraphs: [
          "The only real disadvantage of starting later is lost years of habit — and that is fixed by starting now. An older beginner goes through the same path — Qaida, then reading, then Tajweed — but often moves through the early stages in weeks rather than months. If your teenager feels embarrassed about starting 'late', a 1-to-1 lesson is ideal: there is no class to compare themselves with, and the tutor moves at exactly their pace.",
        ],
      },
    ],
    faqHeading: "Frequently asked questions",
    faqs: [
      {
        q: "Can my 4-year-old really learn the Quran?",
        a: "Yes — four-year-olds learn best by ear, through listening and repetition. Lessons at this age are short (25 minutes), playful and gentle: letters, sounds and short surahs, with no pressure to read before they are ready.",
      },
      {
        q: "Does my child need to know Arabic first?",
        a: "No. The Noorani Qaida teaches the Arabic letters and sounds from scratch as part of learning to read the Quran. Many of our students in Germany speak German or Turkish at home and no Arabic at all when they start.",
      },
      {
        q: "How many classes per week should my child take?",
        a: "Our plans offer four to five short classes a week, because short and frequent lessons build a lasting habit. Your tutor will recommend a rhythm that fits your child's age and your family's schedule.",
      },
      {
        q: "Are there female teachers for girls?",
        a: "Yes. We have qualified female tutors (Hafiza) for girls and sisters. You can request a female teacher when you book your free trial class.",
      },
      {
        q: "What if my child loses interest?",
        a: "It happens, and it is usually fixable. The tutor adapts the lesson — shorter activities, more games, a new short surah to memorise — and a short break is sometimes the right answer. Talk to us before giving up: most children come back to it.",
      },
    ],
    relatedHeading: "Related guides",
    related: [
      { href: "/quran-classes-for-kids", label: "Quran Classes for Kids" },
      {
        href: "/blog/how-long-does-it-take-to-learn-quran",
        label: "How Long Does It Take to Learn the Quran?",
      },
      {
        href: "/blog/noorani-qaida-explained",
        label: "Noorani Qaida Explained",
      },
      {
        href: "/online-quran-classes-germany",
        label: "Online Quran Classes in Germany",
      },
    ],
    ctaTitle: "Find out if your child is ready",
    ctaText:
      "Book a free 30-minute trial class. Your child will meet their tutor, try a real lesson, and you will get an honest answer about the right starting point — with no obligation.",
    ctaCourse: "Explore the Noorani Qaida course",
    ctaTrial: "Book a free trial class",
    back: "← Back to all articles",
  },
  de: {
    category: "Für Eltern",
    readTime: "7 Min. Lesezeit",
    title: "Ab welchem Alter sollte ein Kind den Koran lernen?",
    author: "Vom Lehrteam der Online Quran",
    updated: "Zuletzt aktualisiert: 12. November 2026",
    intro:
      "Die meisten Kinder können mit 4–5 Jahren anfangen, den Koran zu lernen — zunächst die Laute und Buchstaben der Noorani Qaida; das ideale Startalter ist 5–7 Jahre. Wichtiger als das Alter ist aber die Bereitschaft: Ein Kind, das 15–20 Minuten sitzen und sich konzentrieren kann, Buchstaben erkennt und gerne kurze Suren hört, ist bereit — wann immer das der Fall ist.",
    coverAlt: "Ein Junge liest drinnen ein Buch",
    sections: [
      {
        heading: "Ab welchem Alter sollte ein Kind den Koran lernen?",
        answer:
          "Die meisten Kinder können mit 4–5 Jahren anfangen, den Koran zu lernen — zunächst die Laute und Buchstaben der Noorani Qaida; das ideale Startalter ist 5–7 Jahre. Wichtiger als der genaue Geburtstag ist aber die Bereitschaft: Ein Kind, das 15–20 Minuten sitzen und sich konzentrieren kann und gerne kurze Suren hört, ist bereit — wann immer das der Fall ist.",
        paragraphs: [
          "Kleine Kinder lernen den Koran (Quran) zuerst über das Gehör — durch Zuhören, Nachsprechen und Aufnehmen der Klänge, lange bevor sie einen einzigen Buchstaben lesen können. Deshalb sind die frühen Jahre so wertvoll: Ein vierjähriges Kind, das täglich die Sure Al-Fatiha, Al-Ichlas und Al-Kauthar hört, lernt sie oft auswendig, ohne je im formalen Sinne „unterrichtet\" worden zu sein. Der formale Unterricht baut dann auf dieser Grundlage auf und macht aus dem Hören Schritt für Schritt das Lesen.",
        ],
      },
      {
        heading: "Woran erkenne ich, ob mein Kind bereit ist?",
        answer:
          "Ihr Kind ist bereit, wenn es etwa 15–20 Minuten sitzen und sich konzentrieren kann, einfachen Anweisungen folgt und Interesse an Buchstaben, Klängen oder Geschichten zeigt. Es muss noch nicht lesen können, kein Arabisch kennen und auch nicht perfekt stillsitzen — eine gute Lehrkraft hält kleine Kinder mit kurzen Aktivitäten, Wiederholungsspielen und viel Ermutigung bei der Sache.",
        paragraphs: [
          "Wenn Ihr Kind noch nicht so weit ist, ist das kein Problem — warten Sie ein paar Monate und versuchen Sie es erneut. Zu früh anzufangen und den Unterricht wie eine Pflicht wirken zu lassen, schadet mehr, als ein wenig später mit einem motivierten Kind zu beginnen. Die kostenlose Probestunde ist ein guter Test: In einer 30-minütigen Stunde kann die Lehrkraft ehrlich einschätzen, ob Ihr Kind bereit ist.",
        ],
        list: [
          "Kann 15–20 Minuten bei einer Aktivität sitzen und sich konzentrieren",
          "Folgt einfachen Anweisungen in zwei Schritten („Öffne das Buch, zeig auf den Buchstaben\")",
          "Zeigt Interesse an Buchstaben, Klängen, Liedern oder Geschichten",
          "Kann kurze Sätze nachsprechen, nachdem es sie ein- oder zweimal gehört hat",
          "Hört gerne Koranrezitation oder kurze Suren",
        ],
      },
      {
        heading: "Was lernt jedes Alter?",
        answer:
          "Kinder lernen den Koran in Etappen, und jede Etappe hat eigene Ziele und eine eigene Stundendauer. Die Tabelle zeigt den typischen Weg — die Lehrkraft Ihres Kindes passt ihn an sein Tempo an, denn manche Kinder gehen schneller voran und manche brauchen mehr Zeit für die Grundlagen.",
        table: {
          headers: ["Alter", "Was sie lernen", "Stundendauer"],
          rows: [
            [
              "4–6",
              "Noorani Qaida: arabische Buchstaben und Laute, Buchstaben verbinden; kurze Suren über das Gehör (Al-Fatiha, Al-Ichlas, Al-Falaq, An-Nas)",
              "25 Minuten",
            ],
            [
              "7–10",
              "Flüssiges Lesen aus dem Mushaf, erste Tadschwied-Regeln, Auswendiglernen von Dschuz Amma (dem 30. Dschuz)",
              "25–30 Minuten",
            ],
            [
              "11+",
              "Flüssiges Lesen mit Tadschwied, Hifz oder Tafsir, längere Suren und selbstständiges Wiederholen",
              "30–45 Minuten",
            ],
          ],
        },
        paragraphs: [
          "Die jüngsten Kinder beginnen mit der Noorani Qaida, die in der Regel 3–6 Monate dauert, und die meisten Kinder lesen innerhalb von 12–18 Monaten nach dem Start flüssig. Ältere Kinder kommen oft schneller voran, weil ihre Konzentration und ihre Lesefähigkeit in ihrer Muttersprache bereits stärker sind.",
        ],
      },
      {
        heading: "Wie lang sollte eine Koranstunde für Kinder sein?",
        answer:
          "Für Kinder von 4–6 Jahren sind 25 Minuten die richtige Stundendauer — lang genug, um etwas Richtiges zu lernen, und kurz genug, um aufzuhören, solange es noch Spaß macht. Kinder von 7–10 Jahren schaffen meist 25–30 Minuten, und ältere Kinder, die Hifz lernen, kommen mit 45-minütigen Stunden mit eingebauter Pause zurecht.",
        paragraphs: [
          "Kurz und häufig schlägt lang und selten. Vier oder fünf kurze Stunden pro Woche halten die Klänge im Ohr des Kindes frisch, während eine lange wöchentliche Stunde bis zur nächsten Woche meist vergessen ist. Deshalb sind unsere Tarife auf 25-minütige Stunden für jüngere Kinder ausgelegt: Die Gewohnheit zählt mehr als die Stundenzahl. Zwischen den Stunden wirken 10–15 Minuten tägliches Üben — eine kurze Sure anhören, die Buchstaben des Tages wiederholen — mehr als eine Lerneinheit am Wochenende.",
        ],
      },
      {
        heading: "Was erwartet uns in den ersten Monaten?",
        answer:
          "Rechnen Sie in den ersten Monaten mit langsamen, stetigen Fortschritten: Ihr Kind lernt die arabischen Buchstaben, wie sie sich verbinden, und die Vokalzeichen — und wird wahrscheinlich einige kurze Suren über das Gehör auswendig lernen, bevor es sie lesen kann. Der Fortschritt fühlt sich zunächst langsam an und beschleunigt sich dann plötzlich, sobald das Lesen „klickt\".",
        paragraphs: [
          "Die meisten Kinder beenden die Noorani Qaida innerhalb von 3–6 Monaten und beginnen, kurze Wörter aus dem Mushaf zu lesen. Sie erhalten einen monatlichen Fortschrittsbericht, damit Sie genau sehen, was Ihr Kind gelernt hat, und Ihre Lehrkraft sagt Ihnen ehrlich, wenn Ihr Kind für eine Etappe mehr Zeit braucht. Das Beste, was Eltern tun können: Üben kurz, täglich und positiv halten — und das Tempo der Lehrkraft überlassen.",
        ],
        ordered: [
          "Gemeinsam zuhören: eine kurze Sure im Auto oder vor dem Schlafengehen abspielen",
          "10 Minuten am Tag üben — wenig und oft schlägt lange Einheiten",
          "Anstrengung loben, nicht nur Ergebnisse: „Diesen Buchstaben hast du wunderschön gelesen\"",
          "Die Routine halten: gleiche Zeit, gleicher ruhiger Ort, an jedem Unterrichtstag",
          "Mit der Lehrkraft sprechen: teilen, was funktioniert und was nicht",
        ],
      },
      {
        heading: "Ist es zu spät, mit 10 Jahren oder später anzufangen?",
        answer:
          "Nein — es ist nie zu spät. Kinder, die mit 10, 12 oder später anfangen, lernen meist schneller als jüngere Kinder, weil sie sich länger konzentrieren können, in einer anderen Sprache bereits flüssig lesen und verstehen, was sie lernen. Auch viele Erwachsene fangen von vorn an und lernen in der Regel innerhalb von 6–12 Monaten, den Koran zu lesen.",
        paragraphs: [
          "Der einzige echte Nachteil eines späteren Starts sind verlorene Jahre der Gewohnheit — und das lässt sich beheben, indem man jetzt anfängt. Ein älterer Anfänger geht denselben Weg — Qaida, dann Lesen, dann Tadschwied — kommt aber durch die ersten Etappen oft in Wochen statt Monaten. Wenn Ihr Teenager sich schämt, „spät\" anzufangen, ist Einzelunterricht ideal: Es gibt keine Klasse zum Vergleichen, und die Lehrkraft geht genau in seinem Tempo vor.",
        ],
      },
    ],
    faqHeading: "Häufig gestellte Fragen",
    faqs: [
      {
        q: "Kann mein vierjähriges Kind wirklich den Koran lernen?",
        a: "Ja — Vierjährige lernen am besten über das Gehör, durch Zuhören und Nachsprechen. Der Unterricht in diesem Alter ist kurz (25 Minuten), spielerisch und behutsam: Buchstaben, Laute und kurze Suren, ohne Druck, lesen zu müssen, bevor sie bereit sind.",
      },
      {
        q: "Muss mein Kind zuerst Arabisch können?",
        a: "Nein. Die Noorani Qaida vermittelt die arabischen Buchstaben und Laute von Grund auf — als Teil des Koranlesens. Viele unserer Schüler in Deutschland sprechen zu Hause Deutsch oder Türkisch und kein Arabisch, wenn sie anfangen.",
      },
      {
        q: "Wie viele Stunden pro Woche braucht mein Kind?",
        a: "Unsere Tarife bieten vier bis fünf kurze Stunden pro Woche, weil kurze, häufige Stunden eine dauerhafte Gewohnheit aufbauen. Ihre Lehrkraft empfiehlt einen Rhythmus, der zum Alter Ihres Kindes und zum Zeitplan Ihrer Familie passt.",
      },
      {
        q: "Gibt es Lehrerinnen für Mädchen?",
        a: "Ja. Wir haben qualifizierte Lehrerinnen (Hafiza) für Mädchen und Schwestern. Bei der Buchung der kostenlosen Probestunde können Sie eine Lehrerin wünschen.",
      },
      {
        q: "Was, wenn mein Kind die Lust verliert?",
        a: "Das kommt vor und lässt sich meist beheben. Die Lehrkraft passt die Stunde an — kürzere Aktivitäten, mehr Spiele, eine neue kurze Sure zum Auswendiglernen — und manchmal ist eine kurze Pause die richtige Antwort. Sprechen Sie mit uns, bevor Sie aufgeben: Die meisten Kinder finden zurück.",
      },
    ],
    relatedHeading: "Verwandte Ratgeber",
    related: [
      { href: "/quran-classes-for-kids", label: "Koranunterricht für Kinder" },
      {
        href: "/blog/how-long-does-it-take-to-learn-quran",
        label: "Wie lange dauert es, den Koran lesen zu lernen?",
      },
      {
        href: "/blog/noorani-qaida-explained",
        label: "Noorani Qaida erklärt",
      },
      {
        href: "/online-quran-classes-germany",
        label: "Online-Koranunterricht in Deutschland",
      },
    ],
    ctaTitle: "Finden Sie heraus, ob Ihr Kind bereit ist",
    ctaText:
      "Buchen Sie eine kostenlose 30-minütige Probestunde. Ihr Kind lernt seine Lehrkraft kennen, erlebt eine echte Stunde, und Sie erhalten eine ehrliche Einschätzung zum richtigen Einstieg — ohne Verpflichtung.",
    ctaCourse: "Noorani-Qaida-Kurs entdecken",
    ctaTrial: "Kostenlose Probestunde buchen",
    back: "← Zurück zu allen Artikeln",
  },
};

export default function AgeGuideContent() {
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
