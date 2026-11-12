"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLocale, type Locale } from "@/lib/i18n";
import { CtaBand } from "@/components/Shared";

// TODO: update base URL at launch to the real domain.
const BASE_URL = "https://taimoor439.github.io/quran-akademie";
const SLUG = "/blog/noorani-qaida-explained";

// Cover image: Noorani Qaida book cover. Verified HTTP 200 on 2026-11-12.
// (Same cover already used for the Noorani Qaida course card.)
const COVER =
  "https://www.barakahislamicstore.com/cdn/shop/files/Noorani-Qaeda1_grande_33b8a558-42bc-4bdd-8e32-e9171343fa01.png?v=1706029182";

const EN_META = {
  title: "What Is Noorani Qaida? Stages, Timeline & Next Steps",
  description:
    "Noorani Qaida is the beginner's primer for reading the Quran — alphabet, vowels and joining. What it covers, how long it takes (3–6 months) and what comes next.",
};

const DE_META = {
  title: "Was ist die Noorani Qaida? Stufen, Dauer & Ablauf",
  description:
    "Die Noorani Qaida ist das Anfänger-Lehrbuch zum Koranlesen — Alphabet, Vokale und Verbinden. Was sie umfasst, wie lange sie dauert und was danach kommt.",
};

interface Section {
  heading: string;
  paragraphs: string[];
  list?: string[];
  ordered?: string[];
  table?: { headers: string[]; rows: string[][] };
  arabic?: string;
}

interface LocaleContent {
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
  related: { title: string; href: string }[];
  ctaHeading: string;
  ctaText: string;
  ctaButton: string;
  back: string;
  breadcrumbHome: string;
  breadcrumbBlog: string;
}

const content: Record<Locale, LocaleContent> = {
  en: {
    category: "Learning",
    readTime: "7 min read",
    title: "Noorani Qaida Explained: What It Is & How Long It Takes",
    intro:
      "Noorani Qaida is the beginner's primer for reading the Quran: a short book that teaches the Arabic alphabet, vowels and joining rules step by step, so a complete beginner can read Arabic words — and then the Quran itself. Most learners finish it in 3–6 months with regular lessons and a little daily practice.",
    coverAlt: "Noorani Qaida book cover",
    author: "By the Quran Akademie teaching team",
    updated: "Last updated: 12 November 2026",
    sections: [
      {
        heading: "What is Noorani Qaida?",
        paragraphs: [
          "Noorani Qaida — also called al-Qaidah an-Nuraniah — is a small primer that teaches complete beginners to read Arabic. Traditionally attributed to the scholar Noor Muhammad, it has been used in Quran schools around the world for generations. Working through it page by page, a student goes from recognising single letters to reading whole words and short sentences.",
          "The Qaida is not the Quran itself — it is the ladder to it. Its pages contain carefully graded exercises: letters on their own, letters with vowels, joined letters, and finally short words and sentences built from Quranic vocabulary. Because every exercise builds on the one before it, students never face a page they are not ready for.",
          "Think of it like learning to read in any language: alphabet first, then sounds, then simple words. Noorani Qaida does the same for Arabic — with one important difference: from the very first lesson, correct pronunciation (makhraj) is part of the exercise, so students do not build bad habits they must later unlearn.",
        ],
        arabic: "القاعدة النورانية",
      },
      {
        heading: "What does Noorani Qaida teach?",
        paragraphs: [
          "Noorani Qaida teaches the Arabic alphabet and the complete system for reading Arabic words: the 28 letters, the short vowels (harakaat), joining rules, sukoon, shaddah, tanween and madd. By the final pages, a student can read connected Arabic text — the skill every Quran reader needs.",
          "Each stage is short, and each one is practised until it feels easy before the next begins. That is the secret of the Qaida's design: it never asks a student to run before they can walk. A one-to-one tutor can also spend extra time on the stages a student finds hard — the throat letters, for example, or joining.",
          "Parents sometimes ask whether their child should memorise the Qaida. The answer is no: the Qaida is a tool for learning to read, not a text to memorise. What matters is that the child can look at any letter or word in the book and read it correctly — that reading skill is what transfers to the Quran itself.",
        ],
        table: {
          headers: ["Stage", "What you learn", "What it looks like"],
          rows: [
            [
              "1. Letters",
              "The 28 Arabic letters — names, sounds and shapes",
              "ا ب ت ث — each letter on its own",
            ],
            [
              "2. Harakaat",
              "The short vowels: fathah (a), kasrah (i), dhammah (u)",
              "بَ بِ بُ — one letter, three sounds",
            ],
            [
              "3. Joining",
              "How letters change shape and connect in words",
              "Initial, medial and final forms: بـ ـبـ ـب",
            ],
            [
              "4. Sukoon & shaddah",
              "Closed syllables and doubled letters",
              "مِنْ (sukoon) and مَّ (shaddah)",
            ],
            [
              "5. Tanween & madd",
              "Nunation and the long vowels",
              "بً بٍ بٌ — and the stretch of ا و ي",
            ],
            [
              "6. Words & sentences",
              "Reading connected words and short Quranic phrases",
              "Short verses and phrases, read fluently",
            ],
          ],
        },
      },
      {
        heading: "How long does Noorani Qaida take?",
        paragraphs: [
          "Most learners complete Noorani Qaida in 3–6 months with two to three lessons a week and a little daily practice. Young children usually take the full six months, moving gently through the stages; older children and adults often finish faster, in three to four months. The exact pace depends on the student's age, lesson frequency and practice.",
          "Three factors matter most. First, lesson frequency: a child with five short lessons a week progresses much faster than one with a single weekly lesson. Second, practice between lessons: even ten minutes a day keeps the letters alive. Third, age: a four-year-old learns wonderfully, but slowly; a ten-year-old or an adult moves faster.",
          "There is no prize for rushing. A student who finishes the Qaida in three months but reads sloppily is worse off than one who takes six months and reads every letter correctly. Good tutors watch for real fluency — reading any page without hesitation — before moving a student on to the Quran itself.",
        ],
      },
      {
        heading: "Who is Noorani Qaida for?",
        paragraphs: [
          "Noorani Qaida is for anyone who cannot yet read Arabic — children from age 4, teenagers and adults alike. It is the standard starting point for children beginning their Quran journey, for adults who never had the chance to learn, and for new Muslims learning to read the Quran for the first time. No prior knowledge of Arabic is needed.",
          "For young children, lessons are kept short and playful — 25 minutes, broken into varied activities with reading, repetition, games and praise. For adults, the same book is taught at a faster pace with clear explanations of each rule. The Qaida works for both because its stages are the same; only the speed and the teaching style change.",
        ],
        list: [
          "Children aged 4 and above, starting their Quran journey",
          "Adults learning to read Arabic for the first time",
          "New Muslims who want to read the Quran in Arabic",
          "Anyone who can recognise letters but cannot yet read words",
        ],
      },
      {
        heading: "What comes after Noorani Qaida?",
        paragraphs: [
          "After Noorani Qaida comes Nazra — fluent reading of the Quran itself, starting with short surahs and building up to full pages. Once a student reads fluently, the next step is Tajweed: refining pronunciation rule by rule. From there, students choose their own path: memorisation (Hifz), understanding (Tafseer), or simply beautiful, confident daily reading.",
          "The full journey from complete beginner to fluent reader typically takes 12–18 months for children and 6–12 months for adults. Hifz — memorising the whole Quran — is a longer commitment of 3–6 years. There is no rush: each stage is valuable in itself.",
        ],
        ordered: [
          "Noorani Qaida (3–6 months) — learn to read Arabic from scratch.",
          "Nazra reading (6–12 months) — read the Quran fluently, page by page.",
          "Tajweed — refine pronunciation and learn the rules of recitation.",
          "Hifz or Tafseer — memorise the Quran, or study its meanings.",
        ],
      },
      {
        heading: "How do online Noorani Qaida classes work?",
        paragraphs: [
          "In a live one-to-one online lesson, the tutor shares the Qaida page on screen and the student reads aloud, letter by letter, while the tutor listens and corrects pronunciation in real time. Lessons run on Zoom or Google Meet, in Germany time (CET/CEST), after school or in the evening — and parents can sit nearby and listen in.",
          "You do not need to buy the book before your first lesson: the tutor works from on-screen pages. The first class is a free 30-minute trial — the tutor meets your child, checks their starting level, and shows you exactly how lessons will work.",
        ],
      },
    ],
    faqHeading: "Frequently asked questions",
    faqs: [
      {
        q: "At what age can a child start Noorani Qaida?",
        a: "Children can start from age 4, when they can recognise shapes and sit for a short lesson. Lessons for young children are 25 minutes and broken into varied activities, so they stay engaged. There is no upper age limit — teenagers and adults use the same book at a faster pace.",
      },
      {
        q: "How long does Noorani Qaida take to complete?",
        a: "Most learners finish in 3–6 months with two to three lessons a week and a little daily practice. Young children usually take the full six months; older children and adults often finish in three to four months. Fluency matters more than speed — a student should read any page without hesitation before moving on.",
      },
      {
        q: "Is Noorani Qaida only for children?",
        a: "No. The Qaida is for any beginner, whatever their age. Adults — including new Muslims and parents learning alongside their children — work through the same stages, usually faster and with more explanation of the rules.",
      },
      {
        q: "Do I need to know Arabic before starting Noorani Qaida?",
        a: "No — the Qaida starts from zero. The very first lesson is the first letter of the alphabet. You do not need to speak or understand Arabic; you learn the sounds and shapes one step at a time, and understanding the meanings comes later, with Tafseer.",
      },
      {
        q: "What is the difference between Noorani Qaida and Madani Qaida?",
        a: "Both are primers that teach beginners to read Arabic, and both cover the same ground: letters, vowels, joining and reading. Noorani Qaida is the most widely used primer in Quran schools worldwide; Madani Qaida is a similar book published by Dawat-e-Islami. Either one prepares a student to read the Quran.",
      },
    ],
    relatedHeading: "Related guides",
    related: [
      { title: "What Is Tajweed?", href: "/blog/what-is-tajweed" },
      {
        title: "How Long Does It Take to Learn the Quran?",
        href: "/blog/how-long-does-it-take-to-learn-quran",
      },
      {
        title: "What Age Should a Child Start Learning Quran?",
        href: "/blog/what-age-should-a-child-start-learning-quran",
      },
      { title: "How to Memorize the Quran", href: "/blog/how-to-memorize-quran" },
    ],
    ctaHeading: "Start reading with Noorani Qaida",
    ctaText:
      "Book a free trial class and let a patient, certified tutor take your child — or you — through the very first letters.",
    ctaButton: "Explore the Noorani Qaida course",
    back: "← Back to all articles",
    breadcrumbHome: "Home",
    breadcrumbBlog: "Blog",
  },
  de: {
    category: "Lernen",
    readTime: "7 Min. Lesezeit",
    title: "Noorani Qaida erklärt: Was sie ist & wie lange sie dauert",
    intro:
      "Die Noorani Qaida ist das Anfänger-Lehrbuch zum Koranlesen: ein kurzes Buch, das Schritt für Schritt das arabische Alphabet, die Vokale und die Verbindungsregeln lehrt, sodass ein absoluter Anfänger arabische Wörter lesen kann — und dann den Koran selbst. Die meisten Lernenden beenden sie in 3–6 Monaten mit regelmäßigem Unterricht und kurzer täglicher Übung.",
    coverAlt: "Buchcover der Noorani Qaida",
    author: "Vom Lehrteam der Quran Akademie",
    updated: "Zuletzt aktualisiert: 12. November 2026",
    sections: [
      {
        heading: "Was ist die Noorani Qaida?",
        paragraphs: [
          "Die Noorani Qaida — auch al-Qaidah an-Nuraniah genannt — ist ein kleines Lehrbuch, das absoluten Anfängern das arabische Lesen beibringt. Sie wird traditionell dem Gelehrten Noor Muhammad zugeschrieben und wird seit Generationen in Koranschulen auf der ganzen Welt verwendet. Seite für Seite geht ein Schüler vom Erkennen einzelner Buchstaben zum Lesen ganzer Wörter und kurzer Sätze über.",
          "Die Qaida ist nicht der Koran selbst — sie ist die Leiter dorthin. Ihre Seiten enthalten sorgfältig abgestufte Übungen: Buchstaben für sich, Buchstaben mit Vokalen, verbundene Buchstaben und schließlich kurze Wörter und Sätze aus dem Wortschatz des Korans (Quran). Weil jede Übung auf der vorherigen aufbaut, steht ein Schüler nie vor einer Seite, für die er nicht bereit ist.",
          "Man kann es mit dem Lesenlernen in jeder Sprache vergleichen: erst das Alphabet, dann Laute, dann einfache Wörter. Die Noorani Qaida macht dasselbe für Arabisch — mit einem wichtigen Unterschied: Von der allerersten Stunde an ist die korrekte Aussprache (Machradsch) Teil der Übung, sodass die Schüler keine schlechten Gewohnheiten aufbauen, die sie später wieder ablegen müssen.",
        ],
        arabic: "القاعدة النورانية",
      },
      {
        heading: "Was lehrt die Noorani Qaida?",
        paragraphs: [
          "Die Noorani Qaida lehrt das arabische Alphabet und das vollständige System zum Lesen arabischer Wörter: die 28 Buchstaben, die kurzen Vokale (Harakaat), die Verbindungsregeln, Sukun, Schadda, Tanwin und Madd. Auf den letzten Seiten kann ein Schüler zusammenhängenden arabischen Text lesen — die Fertigkeit, die jeder Koranleser braucht.",
          "Jede Stufe ist kurz, und jede wird geübt, bis sie sich leicht anfühlt, bevor die nächste beginnt. Das ist das Geheimnis des Aufbaus der Qaida: Sie verlangt von einem Schüler nie, zu rennen, bevor er gehen kann. Eine Lehrkraft im Einzelunterricht kann zudem mehr Zeit auf die Stufen verwenden, die einem Schüler schwerfallen — etwa die Kehlbuchstaben oder das Verbinden.",
          "Eltern fragen manchmal, ob ihr Kind die Qaida auswendig lernen soll. Die Antwort ist nein: Die Qaida ist ein Werkzeug zum Lesenlernen, kein Text zum Auswendiglernen. Was zählt, ist, dass das Kind jeden Buchstaben und jedes Wort im Buch korrekt lesen kann — diese Lesefertigkeit ist es, die sich auf den Koran selbst überträgt.",
        ],
        table: {
          headers: ["Stufe", "Was man lernt", "Wie es aussieht"],
          rows: [
            [
              "1. Buchstaben",
              "Die 28 arabischen Buchstaben — Namen, Klänge und Formen",
              "ا ب ت ث — jeder Buchstabe für sich",
            ],
            [
              "2. Harakaat",
              "Die kurzen Vokale: Fatha (a), Kasra (i), Damma (u)",
              "بَ بِ بُ — ein Buchstabe, drei Klänge",
            ],
            [
              "3. Verbinden",
              "Wie Buchstaben ihre Form ändern und sich in Wörtern verbinden",
              "Anfangs-, Mittel- und Endformen: بـ ـبـ ـب",
            ],
            [
              "4. Sukun & Schadda",
              "Geschlossene Silben und verdoppelte Buchstaben",
              "مِنْ (Sukun) und مَّ (Schadda)",
            ],
            [
              "5. Tanwin & Madd",
              "Nunation und die langen Vokale",
              "بً بٍ بٌ — und die Dehnung von ا و ي",
            ],
            [
              "6. Wörter & Sätze",
              "Verbundene Wörter und kurze koranische Sätze lesen",
              "Kurze Verse und Sätze, flüssig gelesen",
            ],
          ],
        },
      },
      {
        heading: "Wie lange dauert die Noorani Qaida?",
        paragraphs: [
          "Die meisten Lernenden beenden die Noorani Qaida in 3–6 Monaten mit zwei bis drei Stunden pro Woche und kurzer täglicher Übung. Kleine Kinder brauchen die vollen sechs Monate und gehen sanft durch die Stufen; ältere Kinder und Erwachsene sind oft schneller fertig, in drei bis vier Monaten. Das genaue Tempo hängt vom Alter, der Unterrichtshäufigkeit und der Übung ab.",
          "Drei Faktoren sind am wichtigsten. Erstens die Unterrichtshäufigkeit: Ein Kind mit fünf kurzen Stunden pro Woche kommt viel schneller voran als eines mit einer einzigen Wochenstunde. Zweitens die Übung zwischen den Stunden: Schon zehn Minuten am Tag halten die Buchstaben lebendig. Drittens das Alter: Ein Vierjähriger lernt wunderbar, aber langsam; ein Zehnjähriger oder ein Erwachsener bewegt sich schneller.",
          "Es gibt keinen Preis für Hetzen. Ein Schüler, der die Qaida in drei Monaten beendet, aber unsauber liest, ist schlechter dran als einer, der sechs Monate braucht und jeden Buchstaben korrekt liest. Gute Lehrkräfte achten auf echte Flüssigkeit — jede Seite ohne Zögern lesen zu können —, bevor sie einen Schüler zum Koran selbst weiterführen.",
        ],
      },
      {
        heading: "Für wen ist die Noorani Qaida geeignet?",
        paragraphs: [
          "Die Noorani Qaida ist für jeden, der noch kein Arabisch lesen kann — Kinder ab 4 Jahren, Jugendliche und Erwachsene gleichermaßen. Sie ist der Standard-Einstieg für Kinder, die ihre Koranreise beginnen, für Erwachsene, die nie die Gelegenheit hatten zu lernen, und für Neu-Muslime, die den Koran zum ersten Mal lesen lernen. Vorkenntnisse in Arabisch sind nicht nötig.",
          "Für kleine Kinder sind die Stunden kurz und spielerisch — 25 Minuten, aufgeteilt in abwechslungsreiche Aktivitäten mit Lesen, Wiederholung, Spielen und Lob. Für Erwachsene wird dasselbe Buch in schnellerem Tempo unterrichtet, mit klaren Erklärungen zu jeder Regel. Die Qaida funktioniert für beide, weil ihre Stufen dieselben sind; nur das Tempo und der Unterrichtsstil ändern sich.",
        ],
        list: [
          "Kinder ab 4 Jahren, die ihre Koranreise beginnen",
          "Erwachsene, die zum ersten Mal Arabisch lesen lernen",
          "Neu-Muslime, die den Koran auf Arabisch lesen möchten",
          "Alle, die Buchstaben erkennen, aber noch keine Wörter lesen können",
        ],
      },
      {
        heading: "Was kommt nach der Noorani Qaida?",
        paragraphs: [
          "Nach der Noorani Qaida kommt Nazra — das flüssige Lesen des Korans selbst, beginnend mit kurzen Suren und aufbauend bis zu ganzen Seiten. Sobald ein Schüler flüssig liest, folgt als nächster Schritt Tadschwied: die Aussprache Regel für Regel zu verfeinern. Von dort wählen die Schüler ihren eigenen Weg: Auswendiglernen (Hifz), Verstehen (Tafsir) oder einfach schönes, sicheres tägliches Lesen.",
          "Der gesamte Weg vom absoluten Anfänger zum flüssigen Leser dauert in der Regel 12–18 Monate für Kinder und 6–12 Monate für Erwachsene. Hifz — das Auswendiglernen des gesamten Korans — ist eine längere Verpflichtung von 3–6 Jahren. Es gibt keine Eile: Jede Stufe ist für sich wertvoll.",
        ],
        ordered: [
          "Noorani Qaida (3–6 Monate) — Arabisch von Grund auf lesen lernen.",
          "Nazra-Lesen (6–12 Monate) — den Koran flüssig lesen, Seite für Seite.",
          "Tadschwied — Aussprache verfeinern und die Rezitationsregeln lernen.",
          "Hifz oder Tafsir — den Koran auswendig lernen oder seine Bedeutungen studieren.",
        ],
      },
      {
        heading: "Wie läuft der Online-Unterricht mit der Noorani Qaida ab?",
        paragraphs: [
          "In einer Live-Einzelstunde online teilt die Lehrkraft die Qaida-Seite auf dem Bildschirm, und der Schüler liest laut vor — Buchstabe für Buchstabe —, während die Lehrkraft zuhört und die Aussprache in Echtzeit korrigiert. Die Stunden laufen über Zoom oder Google Meet, nach deutscher Zeit (MEZ/MESZ), nach der Schule oder am Abend — und Eltern können daneben sitzen und zuhören.",
          "Sie müssen das Buch vor der ersten Stunde nicht kaufen: Die Lehrkraft arbeitet mit Seiten auf dem Bildschirm. Die erste Stunde ist eine kostenlose 30-minütige Probestunde — die Lehrkraft lernt Ihr Kind kennen, prüft seinen Ausgangsstand und zeigt Ihnen genau, wie die Stunden ablaufen werden.",
        ],
      },
    ],
    faqHeading: "Häufig gestellte Fragen",
    faqs: [
      {
        q: "Ab welchem Alter kann ein Kind mit der Noorani Qaida beginnen?",
        a: "Kinder können ab 4 Jahren beginnen, wenn sie Formen erkennen und eine kurze Stunde durchhalten können. Die Stunden für kleine Kinder dauern 25 Minuten und sind in abwechslungsreiche Aktivitäten aufgeteilt, sodass sie interessiert bleiben. Es gibt keine Altersgrenze nach oben — Jugendliche und Erwachsene verwenden dasselbe Buch in schnellerem Tempo.",
      },
      {
        q: "Wie lange dauert es, die Noorani Qaida abzuschließen?",
        a: "Die meisten Lernenden beenden sie in 3–6 Monaten mit zwei bis drei Stunden pro Woche und kurzer täglicher Übung. Kleine Kinder brauchen in der Regel die vollen sechs Monate; ältere Kinder und Erwachsene sind oft in drei bis vier Monaten fertig. Flüssigkeit ist wichtiger als Tempo — ein Schüler sollte jede Seite ohne Zögern lesen können, bevor er weitergeht.",
      },
      {
        q: "Ist die Noorani Qaida nur für Kinder?",
        a: "Nein. Die Qaida ist für jeden Anfänger, egal welchen Alters. Erwachsene — darunter Neu-Muslime und Eltern, die gemeinsam mit ihren Kindern lernen — durchlaufen dieselben Stufen, meist schneller und mit mehr Erklärung der Regeln.",
      },
      {
        q: "Muss man Arabisch können, bevor man mit der Noorani Qaida beginnt?",
        a: "Nein — die Qaida beginnt bei null. Die allererste Stunde ist der erste Buchstabe des Alphabets. Sie müssen kein Arabisch sprechen oder verstehen; Sie lernen die Klänge und Formen Schritt für Schritt, und das Verstehen der Bedeutungen kommt später, mit dem Tafsir.",
      },
      {
        q: "Was ist der Unterschied zwischen Noorani Qaida und Madani Qaida?",
        a: "Beide sind Lehrbücher, die Anfängern das arabische Lesen beibringen, und beide behandeln denselben Stoff: Buchstaben, Vokale, Verbinden und Lesen. Die Noorani Qaida ist das weltweit am häufigsten verwendete Lehrbuch in Koranschulen; die Madani Qaida ist ein ähnliches Buch, herausgegeben von Dawat-e-Islami. Beide bereiten einen Schüler darauf vor, den Koran zu lesen.",
      },
    ],
    relatedHeading: "Verwandte Ratgeber",
    related: [
      { title: "Was ist Tadschwied?", href: "/blog/what-is-tajweed" },
      {
        title: "Wie lange dauert es, den Koran zu lernen?",
        href: "/blog/how-long-does-it-take-to-learn-quran",
      },
      {
        title: "Ab welchem Alter sollte ein Kind den Koran lernen?",
        href: "/blog/what-age-should-a-child-start-learning-quran",
      },
      { title: "Den Koran auswendig lernen", href: "/blog/how-to-memorize-quran" },
    ],
    ctaHeading: "Beginnen Sie das Lesen mit der Noorani Qaida",
    ctaText:
      "Buchen Sie eine kostenlose Probestunde und lassen Sie eine geduldige, zertifizierte Lehrkraft Ihr Kind — oder Sie selbst — durch die allerersten Buchstaben führen.",
    ctaButton: "Den Noorani-Qaida-Kurs entdecken",
    back: "← Zurück zu allen Artikeln",
    breadcrumbHome: "Start",
    breadcrumbBlog: "Blog",
  },
};

export default function NooraniQaidaExplainedContent() {
  const { locale } = useLocale();
  const t = content[locale];
  const meta = locale === "de" ? DE_META : EN_META;

  useEffect(() => {
    document.title = meta.title;
    const descriptionEl = document.querySelector('meta[name="description"]');
    if (descriptionEl) {
      descriptionEl.setAttribute("content", meta.description);
    }
  }, [meta]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${BASE_URL}${SLUG}#article`,
        headline: t.title,
        description: meta.description,
        image: COVER,
        author: {
          "@type": "Organization",
          name: "Quran Akademie",
          url: BASE_URL,
        },
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
          {
            "@type": "ListItem",
            position: 1,
            name: t.breadcrumbHome,
            item: `${BASE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: t.breadcrumbBlog,
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
        mainEntity: t.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
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
          <nav aria-label="Breadcrumb" className="text-sm text-ink/60">
            <Link href="/" className="font-bold text-brand hover:text-brand-light">
              {t.breadcrumbHome}
            </Link>
            <span aria-hidden="true"> / </span>
            <Link href="/blog" className="font-bold text-brand hover:text-brand-light">
              {t.breadcrumbBlog}
            </Link>
            <span aria-hidden="true"> / </span>
            <span>{t.title}</span>
          </nav>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
            {t.category} · {t.readTime}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-brand sm:text-5xl">
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
              <h2 className="font-serif text-2xl font-bold text-brand sm:text-3xl">
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
                <ol className="mt-5 space-y-3">
                  {section.ordered.map((item, i) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-ink/80">
                      <span
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white"
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              )}
              {section.table && (
                <div className="mt-6 overflow-x-auto rounded-2xl border border-ink/10">
                  <table className="w-full min-w-[560px] border-collapse text-left text-sm leading-relaxed">
                    <thead>
                      <tr className="bg-brand text-white">
                        {section.table.headers.map((header) => (
                          <th key={header} className="px-4 py-3 font-bold">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr
                          key={row[0]}
                          className="border-t border-ink/10 odd:bg-white even:bg-cream"
                        >
                          {row.map((cell, i) => (
                            <td
                              key={i}
                              className={`px-4 py-3 align-top text-ink/80 ${
                                i === 0 ? "font-bold text-brand" : ""
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
            </section>
          ))}

          <section className="mt-14">
            <h2 className="font-serif text-2xl font-bold text-brand sm:text-3xl">
              {t.faqHeading}
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gold" />
            <div className="mt-6 space-y-5">
              {t.faqs.map((faq) => (
                <div key={faq.q} className="rounded-3xl bg-cream p-6 shadow-card sm:p-8">
                  <h3 className="font-serif text-xl font-bold text-brand">{faq.q}</h3>
                  <p className="mt-3 leading-relaxed text-ink/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-serif text-2xl font-bold text-brand sm:text-3xl">
              {t.relatedHeading}
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gold" />
            <ul className="mt-6 space-y-3">
              {t.related.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-2xl border border-ink/10 bg-white px-5 py-4 font-bold text-brand transition hover:border-gold hover:bg-cream"
                  >
                    {item.title} <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14 rounded-3xl bg-brand p-8 text-center text-white shadow-card sm:p-10">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">{t.ctaHeading}</h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/85">
              {t.ctaText}
            </p>
            <Link
              href="/courses/noorani-qaida"
              className="mt-6 inline-block rounded-full bg-gold px-8 py-3.5 font-bold text-brand-deep transition hover:bg-gold-light"
            >
              {t.ctaButton}
            </Link>
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
