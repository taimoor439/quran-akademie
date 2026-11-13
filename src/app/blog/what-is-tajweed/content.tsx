"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLocale, type Locale } from "@/lib/i18n";
import { CtaBand } from "@/components/Shared";

const BASE_URL = "https://onlinekoran.de";
const SLUG = "/blog/what-is-tajweed";

// Cover image: close-up of open Quran pages. Verified HTTP 200 on 2026-11-12.
const COVER =
  "https://images.pexels.com/photos/16111758/pexels-photo-16111758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const EN_META = {
  title: "What Is Tajweed? Rules, Meaning & How to Learn",
  description:
    "Tajweed is the art of reciting the Quran correctly: every letter from its right place, with its right sound and length. Learn the rules and how to start.",
};

const DE_META = {
  title: "Was ist Tadschwied? Regeln, Bedeutung & Lernen",
  description:
    "Tadschwied ist die Kunst, den Koran korrekt zu rezitieren — jeder Buchstabe von der richtigen Stelle, mit dem richtigen Klang. Lernen Sie die Regeln kennen.",
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
    title: "What Is Tajweed? A Complete Beginner's Guide",
    intro:
      "Tajweed is the set of rules for reciting the Quran exactly as it was revealed — giving every letter its correct sound, place and length. It is not singing or decoration: it is accuracy. Because small sound differences can change a word's meaning, Tajweed protects both the words of the Quran and the beauty of reciting them.",
    coverAlt: "Close-up of open Quran pages showing Arabic script",
    author: "By the Online Quran teaching team",
    updated: "Last updated: 12 November 2026",
    sections: [
      {
        heading: "What is Tajweed?",
        paragraphs: [
          "Tajweed is the science of reciting the Quran the way it was revealed — pronouncing every letter from its correct articulation point (makhraj), with its correct qualities (sifaat), and for its correct length. The word comes from the Arabic root j-w-d, meaning to make good or to beautify. In short, Tajweed means giving every letter of the Quran its due.",
          "The Quran itself commands this care. Allah says: “and recite the Quran with measured recitation” (Surah Al-Muzzammil, 73:4). The Prophet Muhammad ﷺ recited slowly and clearly, and his companions learned the Quran from him letter by letter. Tajweed is the careful preservation of that way of reciting, passed from teacher to student for over fourteen centuries.",
          "Tajweed is not about having a beautiful voice, and it is not about singing. A beautiful voice is a gift, but Tajweed is a skill — and anyone willing to practise can learn it.",
        ],
        arabic: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا",
      },
      {
        heading: "Why does Tajweed matter?",
        paragraphs: [
          "Tajweed matters because in Arabic, small differences in sound change meaning completely. The letters ح (haa) and ه (haa) sound similar to an untrained ear, but they are different letters — and mixing them up changes the word you are saying. Correct pronunciation is therefore not a matter of style; it is a matter of saying the right words.",
          "A clear error (lahn jali) changes letters, vowels or words — for example, reading ص as س — and can change a verse's meaning. A hidden error (lahn khafi) breaks a finer rule, such as holding a nasal sound too short. Avoiding clear errors is every reciter's duty; refining the finer rules is the work of a lifetime.",
        ],
      },
      {
        heading: "What are the main Tajweed rules?",
        paragraphs: [
          "The rules of Tajweed fall into families, each governing one aspect of pronunciation. The main families are makhraj (where each letter is produced), sifaat (the qualities of letters), the rules of noon sakinah and tanween, the rules of meem sakinah, ghunnah, qalqalah, madd (stretching), and waqf (stopping). Together, they cover every sound in the Quran.",
          "Beginners do not learn all of this at once. A good teacher introduces one rule family at a time, starting with makhraj — because if a letter comes from the wrong place, no other rule can fix it.",
          "Most students in Germany learn the recitation of Hafs 'an 'Asim — the narration transmitted through Imam Hafs, and the most widely used recitation in the world today. It is the recitation of the standard Medina mushaf, and the one our courses teach.",
        ],
        table: {
          headers: ["Rule family", "What it governs", "Example"],
          rows: [
            [
              "Makhraj",
              "Where each letter is produced: throat, tongue, lips, nose or mouth cavity",
              "ح from the middle of the throat; ق from the back of the tongue",
            ],
            [
              "Sifaat",
              "The qualities of letters, such as heaviness, softness and vibration",
              "ص is heavy (mufakhkham); س is light (murraqqaq)",
            ],
            [
              "Noon Sakinah & Tanween",
              "How a silent noon (نْ) or tanween sounds before the next letter",
              "Izhar, Idgham, Iqlab and Ikhfa — four rules",
            ],
            [
              "Meem Sakinah",
              "How a silent meem (مْ) sounds before the next letter",
              "Ikhfa shafawi before ب; idgham before م",
            ],
            [
              "Ghunnah",
              "The nasal sound held for two counts on ن and م with shaddah",
              "The نّ in إِنَّ is held and nasalised",
            ],
            [
              "Qalqalah",
              "The echoing bounce on ق ط ب ج د when they carry sukoon",
              "The ق in الْحَقْ bounces at the end of a verse",
            ],
            [
              "Madd",
              "Stretching long vowels for 2, 4 or 6 counts",
              "Madd asli: 2 counts; madd munfasil: 2, 4 or 5; madd laazim: 6",
            ],
            [
              "Waqf",
              "Where to stop, guided by the stopping signs in the mushaf",
              "م means a compulsory stop; لا means do not stop",
            ],
          ],
        },
      },
      {
        heading: "What is the difference between Tajweed and tarteel?",
        paragraphs: [
          "Tajweed is the science of correct pronunciation — the rules. Tarteel is the manner of recitation — slow, measured and deliberate, as commanded in Surah Al-Muzzammil (73:4). You need both: Tajweed tells you how each letter should sound, and tarteel gives you the pace to pronounce each letter properly.",
          "In practice, the two go together: rushing hides errors, while a measured pace lets you give every letter its due.",
        ],
      },
      {
        heading: "How long does it take to learn Tajweed?",
        paragraphs: [
          "Most learners who can already read Arabic can learn the foundations of Tajweed — makhraj, the noon sakinah rules and the basic madd — within 6–12 months of regular lessons. Reaching confident, accurate recitation takes longer, and even experienced reciters keep refining their Tajweed for years. Progress depends on lesson frequency and daily practice.",
          "If you cannot read Arabic yet, the journey starts one step earlier, with Noorani Qaida — the primer that teaches the alphabet, vowels and joining. Most learners complete it in 3–6 months, then move on to fluent reading (Nazra) and Tajweed. The full path to fluent reading with good Tajweed typically takes 12–18 months for children and 6–12 months for adults.",
        ],
      },
      {
        heading: "How do you learn Tajweed?",
        paragraphs: [
          "Tajweed is learned mouth to ear, from a teacher who listens and corrects. Books and apps can explain the rules, but only a trained ear can tell you whether your ح is actually a ح, or whether your madd is two counts or four. A teacher hears what you cannot hear yourself, and corrects mistakes before they become habits.",
          "In a one-to-one lesson, the tutor moves at exactly your pace: longer on the letters you find hard, quicker through what you already know. A free trial class is the best way to find out where you stand.",
        ],
        ordered: [
          "Learn to read Arabic first. If you cannot read yet, start with Noorani Qaida — Tajweed builds on reading, it does not replace it.",
          "Learn one rule family at a time: makhraj first, then the noon sakinah rules, then madd. One rule per week is a good pace.",
          "Listen to a trusted reciter every day. Hearing correct recitation trains your ear before your tongue can follow.",
          "Recite to a teacher who corrects you. Live feedback is the heart of Tajweed.",
          "Practise a little every day. Ten focused minutes a day beats an hour once a week.",
        ],
      },
      {
        heading: "Can you learn Tajweed online?",
        paragraphs: [
          "Yes — Tajweed works very well online, because what matters most is the teacher's ear, and a live video lesson gives the teacher exactly that. In a one-to-one online lesson, the tutor hears every letter you recite, corrects your pronunciation in real time, and can share the mushaf on screen so you both look at the same verse.",
          "Online lessons also solve a practical problem for families in Germany: finding a qualified Tajweed teacher nearby is not always easy, especially outside the big cities. A live online class brings a certified tutor to your home in Germany time (CET/CEST).",
        ],
      },
    ],
    faqHeading: "Frequently asked questions",
    faqs: [
      {
        q: "Is learning Tajweed obligatory?",
        a: "Scholars generally hold that learning enough Tajweed to recite the Quran correctly — avoiding errors that change the meaning — is obligatory on every Muslim who reads the Quran. Mastering the finer rules in depth is a communal duty (fard kifayah).",
      },
      {
        q: "Do I need to know Arabic to learn Tajweed?",
        a: "No. Tajweed is about sounds, not Arabic grammar. You learn the letters, their articulation points and the rules by listening and repeating. Knowing Arabic helps later, especially for Tafseer, but it is not required for correct recitation.",
      },
      {
        q: "What is the difference between Tajweed and Qiraat?",
        a: "Tajweed is the set of pronunciation rules. Qiraat are the ten canonical readings of the Quran, transmitted through different chains of narration. Most learners study Hafs 'an 'Asim, the most widely used recitation in the world today.",
      },
      {
        q: "Can children learn Tajweed?",
        a: "Yes — children are often the best Tajweed students, because young ears pick up new sounds easily. They usually begin once they can read, around age 6 or 7, after completing Noorani Qaida. Lessons are kept short and varied.",
      },
      {
        q: "How much do Tajweed classes cost?",
        a: "Our live 1-to-1 Tajweed lessons start from $35 per month for the Basic plan (4 classes a week, 25 minutes each). The most popular plan is Standard at $59 per month (5 classes a week, 30 minutes each). Every plan starts with a free 30-minute trial class.",
      },
    ],
    relatedHeading: "Related guides",
    related: [
      { title: "Noorani Qaida Explained", href: "/blog/noorani-qaida-explained" },
      { title: "Tajweed Basics for Beginners", href: "/blog/tajweed-basics" },
      {
        title: "How Long Does It Take to Learn the Quran?",
        href: "/blog/how-long-does-it-take-to-learn-quran",
      },
      { title: "How to Memorize the Quran", href: "/blog/how-to-memorize-quran" },
    ],
    ctaHeading: "Start learning Tajweed with a teacher who listens",
    ctaText:
      "Book a free trial class and let a certified tutor assess your recitation — then follow a clear, step-by-step path through the rules.",
    ctaButton: "Explore the Tajweed course",
    back: "← Back to all articles",
    breadcrumbHome: "Home",
    breadcrumbBlog: "Blog",
  },
  de: {
    category: "Lernen",
    readTime: "7 Min. Lesezeit",
    title: "Was ist Tadschwied? Ein Leitfaden für Anfänger",
    intro:
      "Tadschwied (auch Tajweed geschrieben) ist das Regelwerk für die Rezitation des Korans, so wie er offenbart wurde — jeder Buchstabe mit seinem richtigen Klang, seiner richtigen Artikulationsstelle und seiner richtigen Länge. Es ist kein Singen und keine Dekoration, sondern Genauigkeit: Weil kleine Klangunterschiede die Bedeutung eines Wortes verändern können, schützt Tadschwied die Worte des Korans und die Schönheit der Rezitation.",
    coverAlt: "Nahaufnahme aufgeschlagener Koranseiten mit arabischer Schrift",
    author: "Vom Lehrteam der Online Quran",
    updated: "Zuletzt aktualisiert: 12. November 2026",
    sections: [
      {
        heading: "Was ist Tadschwied?",
        paragraphs: [
          "Tadschwied ist die Wissenschaft, den Koran so zu rezitieren, wie er offenbart wurde — jeden Buchstaben von seiner richtigen Artikulationsstelle (Machradsch) auszusprechen, mit seinen richtigen Eigenschaften (Sifat) und in seiner richtigen Länge. Das Wort kommt von der arabischen Wurzel dsch-w-d und bedeutet: gut machen oder verschönern. Kurz gesagt: Tadschwied heißt, jedem Buchstaben des Korans sein Recht zu geben.",
          "Der Koran selbst befiehlt diese Sorgfalt. Allah sagt: „Und rezitiere den Koran mit bedächtiger Rezitation“ (Sure Al-Muzzammil, 73:4). Der Prophet Muhammad ﷺ rezitierte langsam und deutlich, und seine Gefährten lernten den Koran von ihm Buchstabe für Buchstabe. Tadschwied ist die sorgfältige Bewahrung dieser Art der Rezitation, weitergegeben von Lehrer zu Schüler über vierzehn Jahrhunderte.",
          "Tadschwied hat nichts mit einer schönen Stimme zu tun, und es ist kein Singen. Eine schöne Stimme ist eine Gabe, aber Tadschwied ist eine Fertigkeit — und wie jede Fertigkeit kann sie jeder lernen, der bereit ist zu üben.",
        ],
        arabic: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا",
      },
      {
        heading: "Warum ist Tadschwied wichtig?",
        paragraphs: [
          "Tadschwied ist wichtig, weil im Arabischen kleine Klangunterschiede die Bedeutung vollständig verändern. Die Buchstaben ح (Ha) und ه (Ha) klingen für ein ungeübtes Ohr ähnlich, sind aber verschiedene Buchstaben — und ihre Verwechslung verändert das Wort, das man sagt. Korrekte Aussprache ist daher keine Stilfrage, sondern eine Frage der richtigen Wörter.",
          "Die Tadschwied-Gelehrten unterscheiden zwei Arten von Fehlern. Ein offensichtlicher Fehler (Lahn Dschali) verändert Buchstaben, Vokale oder Wörter — zum Beispiel ص als س zu lesen — und kann die Bedeutung eines Verses verändern. Ein verborgener Fehler (Lahn Chafi) bricht eine feinere Regel, etwa wenn ein Nasallaut zu kurz gehalten wird, ohne die Bedeutung zu verändern. Offensichtliche Fehler zu vermeiden, ist die Pflicht jedes Rezitators; die feineren Regeln zu verfeinern, ist die Arbeit eines Lebens.",
        ],
      },
      {
        heading: "Welche Tadschwied-Regeln gibt es?",
        paragraphs: [
          "Die Regeln des Tadschwied fallen in Familien, von denen jede einen Aspekt der Aussprache regelt. Die wichtigsten Familien sind Machradsch (wo jeder Buchstabe entsteht), Sifat (die Eigenschaften der Buchstaben), die Regeln von Nun Sakinah und Tanwin, die Regeln von Mim Sakinah, Ghunna, Qalqalah, Madd (Dehnung) und Waqf (Anhalten). Zusammen decken sie jeden Laut des Korans ab.",
          "Anfänger lernen das alles nicht auf einmal. Eine gute Lehrkraft führt eine Regelfamilie nach der anderen ein — beginnend mit Machradsch, denn wenn ein Buchstabe von der falschen Stelle kommt, kann keine andere Regel das korrigieren.",
          "Die meisten Lernenden in Deutschland lernen die Lesart Hafs 'an 'Asim — die Überlieferung, die vom Propheten ﷺ über Imam Hafs weitergegeben wurde und die weltweit am häufigsten verwendete Lesart ist. Sie ist die Lesart des Standard-Medina-Mushafs, und sie ist die Lesart, die unsere Kurse unterrichten.",
        ],
        table: {
          headers: ["Regelfamilie", "Was sie regelt", "Beispiel"],
          rows: [
            [
              "Machradsch",
              "Wo jeder Buchstabe entsteht: Kehle, Zunge, Lippen, Nase oder Mundhöhle",
              "ح aus der Mitte der Kehle; ق vom hinteren Teil der Zunge",
            ],
            [
              "Sifat",
              "Die Eigenschaften der Buchstaben, etwa Schwere, Weichheit und Vibration",
              "ص ist schwer (Mufachcham); س ist leicht (Muraqqaq)",
            ],
            [
              "Nun Sakinah & Tanwin",
              "Wie ein stilles Nun (نْ) oder ein Tanwin vor dem nächsten Buchstaben klingt",
              "Izhar, Idgham, Iqlab und Ichfa — vier Regeln",
            ],
            [
              "Mim Sakinah",
              "Wie ein stilles Mim (مْ) vor dem nächsten Buchstaben klingt",
              "Ichfa Schafawi vor ب; Idgham vor م",
            ],
            [
              "Ghunna",
              "Der Nasallaut, der bei ن und م mit Schadda zwei Zählzeiten gehalten wird",
              "Das نّ in إِنَّ wird gehalten und nasaliert",
            ],
            [
              "Qalqalah",
              "Der widerhallende Abprall bei ق ط ب ج د, wenn sie Sukun tragen",
              "Das ق in الْحَقْ prallt am Versende ab",
            ],
            [
              "Madd",
              "Dehnung langer Vokale auf 2, 4 oder 6 Zählzeiten",
              "Madd Asli: 2 Zählzeiten; Madd Munfasil: 2, 4 oder 5; Madd Lazim: 6",
            ],
            [
              "Waqf",
              "Wo man anhält, geleitet von den Stoppzeichen im Mushaf",
              "م bedeutet zwingendes Anhalten; لا bedeutet: nicht anhalten",
            ],
          ],
        },
      },
      {
        heading: "Was ist der Unterschied zwischen Tadschwied und Tartil?",
        paragraphs: [
          "Tadschwied ist die Wissenschaft der korrekten Aussprache — die Regeln. Tartil ist die Art der Rezitation — langsam, bedächtig und bewusst, wie in Sure Al-Muzzammil (73:4) befohlen. Man braucht beides: Tadschwied sagt Ihnen, wie jeder Buchstabe klingen soll, und Tartil gibt Ihnen das Tempo, um jeden Buchstaben richtig auszusprechen.",
          "In der Praxis gehören die beiden zusammen: Hetzen verbirgt Fehler, während ein bedächtiges Tempo jedem Buchstaben sein Recht gibt.",
        ],
      },
      {
        heading: "Wie lange dauert es, Tadschwied zu lernen?",
        paragraphs: [
          "Die meisten Lernenden, die bereits Arabisch lesen können, lernen die Grundlagen des Tadschwied — Machradsch, die Nun-Sakinah-Regeln und den grundlegenden Madd — innerhalb von 6–12 Monaten mit regelmäßigem Unterricht. Sicheres, genaues Rezitieren braucht länger, und selbst erfahrene Rezitatoren verfeinern ihr Tadschwied jahrelang. Der Fortschritt hängt von der Unterrichtshäufigkeit und der täglichen Übung ab.",
          "Wer noch kein Arabisch lesen kann, beginnt einen Schritt früher — mit der Noorani Qaida, dem Lehrbuch, das Alphabet, Vokale und Verbinden lehrt. Die meisten Lernenden beenden sie in 3–6 Monaten und gehen dann zu flüssigem Lesen (Nazra) und Tadschwied über. Der gesamte Weg zum flüssigen Lesen mit gutem Tadschwied dauert in der Regel 12–18 Monate für Kinder und 6–12 Monate für Erwachsene.",
        ],
      },
      {
        heading: "Wie lernt man Tadschwied?",
        paragraphs: [
          "Tadschwied lernt man von Mund zu Ohr — von einer Lehrkraft, die zuhört und korrigiert. Bücher und Apps erklären die Regeln, aber nur ein geschultes Ohr kann Ihnen sagen, ob Ihr ح ein ح ist oder ob Ihr Madd zwei oder vier Zählzeiten dauert. Eine Lehrkraft hört, was Sie selbst nicht hören, und korrigiert Fehler, bevor sie zu Gewohnheiten werden.",
          "Im Einzelunterricht kann die Lehrkraft genau in Ihrem Tempo vorgehen: länger bei den Buchstaben verweilen, die Ihnen schwerfallen, schneller durch das, was Sie bereits können. Eine kostenlose Probestunde ist der beste Weg, Ihren Stand zu erfahren.",
        ],
        ordered: [
          "Lernen Sie zuerst Arabisch lesen. Wer noch nicht lesen kann, beginnt mit der Noorani Qaida — Tadschwied baut auf dem Lesen auf, es ersetzt es nicht.",
          "Lernen Sie eine Regelfamilie nach der anderen. Beginnen Sie mit Machradsch, dann die Nun-Sakinah-Regeln, dann Madd. Eine Regel pro Woche ist ein gutes Tempo.",
          "Hören Sie jeden Tag einem vertrauenswürdigen Rezitator zu. Korrektes Rezitieren zu hören, schult Ihr Ohr, bevor Ihre Zunge folgen kann.",
          "Rezitieren Sie einer Lehrkraft vor, die Sie korrigiert. Lebendiges Feedback ist das Herz des Tadschwied.",
          "Üben Sie jeden Tag ein wenig. Zehn konzentrierte Minuten am Tag schlagen eine Stunde einmal pro Woche.",
        ],
      },
      {
        heading: "Kann man Tadschwied online lernen?",
        paragraphs: [
          "Ja — Tadschwied funktioniert online sehr gut, denn am wichtigsten ist das Ohr der Lehrkraft, und eine Live-Videostunde gibt der Lehrkraft genau das. Im Online-Einzelunterricht hört die Lehrkraft jeden Buchstaben, den Sie rezitieren, korrigiert Ihre Aussprache in Echtzeit und kann den Mushaf auf dem Bildschirm teilen, sodass Sie beide denselben Vers vor Augen haben.",
          "Online-Unterricht löst auch ein praktisches Problem für Familien in Deutschland: Eine qualifizierte Tadschwied-Lehrkraft in der Nähe zu finden, ist nicht immer einfach — besonders außerhalb der großen Städte. Eine Live-Online-Stunde bringt eine zertifizierte Lehrkraft zu Ihnen nach Hause, nach deutscher Zeit (MEZ/MESZ).",
        ],
      },
    ],
    faqHeading: "Häufig gestellte Fragen",
    faqs: [
      {
        q: "Ist es Pflicht, Tadschwied zu lernen?",
        a: "Gelehrte sind sich weitgehend einig, dass es für jeden Muslim, der den Koran liest, Pflicht ist, so viel Tadschwied zu lernen, dass er korrekt rezitiert — also Fehler vermeidet, die die Bedeutung verändern. Die feineren Regeln in der Tiefe zu beherrschen, ist eine gemeinschaftliche Pflicht (Fard Kifayah).",
      },
      {
        q: "Muss man Arabisch können, um Tadschwied zu lernen?",
        a: "Nein. Tadschwied handelt von Klängen, nicht von arabischer Grammatik. Man lernt die Buchstaben, ihre Artikulationsstellen und die Regeln durch Zuhören und Nachsprechen. Arabischkenntnisse helfen später — besonders beim Tafsir —, sind aber keine Voraussetzung für korrekte Rezitation.",
      },
      {
        q: "Was ist der Unterschied zwischen Tadschwied und Qiraat?",
        a: "Tadschwied ist das Regelwerk der Aussprache. Qiraat sind die zehn kanonischen Lesarten des Korans, die über verschiedene Überlieferungsketten weitergegeben wurden. Die meisten Lernenden studieren die Lesart Hafs 'an 'Asim, die weltweit am häufigsten verwendete Rezitation.",
      },
      {
        q: "Können Kinder Tadschwied lernen?",
        a: "Ja — Kinder sind oft die besten Tadschwied-Schüler, weil junge Ohren neue Klänge leicht aufnehmen. Sie beginnen in der Regel, sobald sie lesen können, etwa ab 6 oder 7 Jahren, nach Abschluss der Noorani Qaida. Die Stunden sind kurz und abwechslungsreich.",
      },
      {
        q: "Was kostet Tadschwied-Unterricht?",
        a: "Unser Live-Einzelunterricht in Tadschwied beginnt ab 35 $ pro Monat im Basis-Tarif (4 Stunden pro Woche, je 25 Minuten). Der beliebteste Tarif ist Standard mit 59 $ pro Monat (5 Stunden pro Woche, je 30 Minuten). Jeder Tarif beginnt mit einer kostenlosen 30-minütigen Probestunde.",
      },
    ],
    relatedHeading: "Verwandte Ratgeber",
    related: [
      { title: "Noorani Qaida erklärt", href: "/blog/noorani-qaida-explained" },
      { title: "Tadschwid-Grundlagen für Anfänger", href: "/blog/tajweed-basics" },
      {
        title: "Wie lange dauert es, den Koran zu lernen?",
        href: "/blog/how-long-does-it-take-to-learn-quran",
      },
      { title: "Den Koran auswendig lernen", href: "/blog/how-to-memorize-quran" },
    ],
    ctaHeading: "Beginnen Sie Tadschwied mit einer Lehrkraft, die zuhört",
    ctaText:
      "Buchen Sie eine kostenlose Probestunde und lassen Sie Ihre Rezitation von einer zertifizierten Lehrkraft einschätzen — dann folgen Sie einem klaren, schrittweisen Weg durch die Regeln.",
    ctaButton: "Den Tadschwied-Kurs entdecken",
    back: "← Zurück zu allen Artikeln",
    breadcrumbHome: "Start",
    breadcrumbBlog: "Blog",
  },
};

export default function WhatIsTajweedContent() {
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
            <h2 className="font-display text-2xl font-bold text-brand sm:text-3xl">
              {t.faqHeading}
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gold" />
            <div className="mt-6 space-y-5">
              {t.faqs.map((faq) => (
                <div key={faq.q} className="rounded-3xl bg-cream p-6 shadow-card sm:p-8">
                  <h3 className="font-display text-xl font-bold text-brand">{faq.q}</h3>
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
            <h2 className="font-display text-2xl font-bold sm:text-3xl">{t.ctaHeading}</h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/85">
              {t.ctaText}
            </p>
            <Link
              href="/courses/tajweed"
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
