"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { CtaBand } from "@/components/Shared";

const BASE_URL = "https://onlinekoran.de";
const SLUG = "/blog/how-to-memorize-quran";
// Cover image assigned for this guide (curl-verified HTTP 200): an open Quran.
const COVER =
  "https://images.pexels.com/photos/5801003/pexels-photo-5801003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const EN_META = {
  title: "How to Memorize Quran: A Beginner's Hifz Guide",
  description:
    "How to memorize the Quran step by step: start with Juz Amma, use the sabaq–sabqi–manzil method, and revise daily. Realistic timelines and a system that works.",
};

const DE_META = {
  title: "Koran auswendig lernen: Hifz-Guide für Anfänger",
  description:
    "Koran auswendig lernen Schritt für Schritt: mit Dschuz Amma starten, die Sabaq–Sabqi–Manzil-Methode nutzen und täglich wiederholen. Realistische Zeitpläne.",
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
    category: "Hifz",
    readTime: "7 min read",
    title: "How to Memorize the Quran: A Beginner's Guide to Hifz",
    intro:
      "To memorize the Quran, start with Juz Amma, learn a small new portion (sabaq) each day, and revise yesterday's and older portions every day — most students who memorise half a page a day finish in about 3.3 years. This guide explains the sabaq–sabqi–manzil method, realistic timelines, and a daily revision system that keeps what you learn.",
    coverAlt: "An open Quran ready for memorisation",
    author: "By the Quran Akademie teaching team",
    updated: "Last updated: 12 November 2026",
    sections: [
      {
        heading: "How long does it take to memorize the Quran?",
        paragraphs: [
          "Most students take 3–6 years to memorize the whole Quran, depending on how much they learn each day and how consistently they revise. The Quran has 604 pages, 114 surahs, 6,236 verses and 30 juz — a large goal, but one that becomes manageable when it is divided into small daily portions. The table below shows how daily pace translates into total time.",
          "Speed is not the goal. A student who memorises half a page a day and keeps it solidly is further ahead than one who rushes through a page a day and forgets half of it. The Prophet ﷺ said, “The best of you are those who learn the Quran and teach it” (Sahih al-Bukhari 5027) — the emphasis is on learning it well, not quickly.",
        ],
        table: {
          headers: ["Daily new portion", "Time to finish 604 pages", "Who it suits"],
          rows: [
            ["¼ page a day", "About 6½ years", "Young children, busy adults"],
            ["½ page a day", "About 3.3 years", "Most school-age children"],
            ["1 page a day", "About 20 months", "Dedicated students, older teens & adults"],
            ["2 pages a day", "About 10 months", "Full-time Hifz students only"],
          ],
        },
      },
      {
        heading: "Where should a beginner start memorizing?",
        paragraphs: [
          "Almost every Hifz programme starts with Juz Amma — the 30th and final juz, which contains short, familiar surahs such as Al-Fatiha, Al-Ikhlas, Al-Falaq, An-Nas and Al-Kawthar. Most students already know some of these by heart from prayer, so the first weeks bring quick wins and real confidence instead of frustration.",
          "From Juz Amma, students usually work backwards through the shorter surahs of Juz Tabarak (the 29th juz) before moving to longer passages. The principle is the same throughout: short surahs first, then longer ones, always building on what is already secure. If you can already read fluently with Tajweed, you can start Hifz right away; if not, finish Noorani Qaida first — memorising words you cannot yet read correctly only stores mistakes.",
        ],
      },
      {
        heading: "What is the sabaq, sabqi and manzil method?",
        paragraphs: [
          "The classical Hifz method divides every day's work into three parts, and it has been used for centuries because it works. Sabaq is the new lesson: the fresh verses you memorise today. Sabqi is the recent revision: the last few days' or weeks' lessons, recited back to make sure they are still fresh. Manzil is the old revision: a portion of everything you memorised months ago, recited in rotation so nothing fades.",
          "The three parts matter equally — in fact, most teachers say revision is more important than new memorisation. A student who learns one new page but revises nothing will soon discover that the new page has pushed out an old one. The daily balance is roughly: 20% of your time on sabaq, 30% on sabqi, and 50% on manzil.",
        ],
        list: [
          "Sabaq (new lesson): today's new verses, learned line by line.",
          "Sabqi (recent revision): the last 5–7 days of new lessons, recited from memory.",
          "Manzil (old revision): a rotating portion of everything memorised so far — at least one juz a week once you have several.",
        ],
      },
      {
        heading: "How much should I memorize each day?",
        paragraphs: [
          "Less than you think — and the same amount every day. Consistency beats intensity: fifteen focused minutes every day will carry you further than two hours on a Saturday. For most children, half a page a day (about 7–8 lines of the Medina Mushaf) is the right pace; younger children may start with 3–4 lines, and adults with a free morning can manage a full page.",
          "Use the same mushaf every day. Your memory is partly visual: you remember where on the page a verse sits, what the line above it looks like, and where the page turns. Switching between different printings breaks that visual map. The Medina Mushaf — 15 lines per page, with each juz beginning on a new page — is the standard choice for Hifz students worldwide.",
        ],
      },
      {
        heading: "How do I keep what I memorized?",
        paragraphs: [
          "Memorising is the easy half of Hifz; keeping it is the hard half. Without a revision system, new verses fade within days — this is normal, not a sign of a bad memory. The answer is muraja'ah: structured, scheduled revision that returns to every verse on a fixed cycle, with the gaps between revisions growing as the verse becomes stronger. This is spaced repetition, practised by Hifz teachers centuries before psychologists gave it a name.",
          "A simple weekly rhythm works for most students: recite the newest lessons daily, the last month's lessons weekly, and one older juz every week in rotation. Reciting your memorised portions in salah is the strongest revision of all — it tests your memory under real conditions and connects your Hifz to your worship.",
        ],
        table: {
          headers: ["Revision type", "What it covers", "How often"],
          rows: [
            ["Daily (sabqi)", "The last 5–7 days of new lessons", "Every day"],
            ["Weekly", "The last month's lessons", "Once a week"],
            ["Manzil rotation", "One older juz, rotating", "One juz per week"],
            ["In salah", "Any secure portion", "Every prayer, when possible"],
          ],
        },
      },
      {
        heading: "Which memorisation techniques actually work?",
        paragraphs: [
          "There is no secret shortcut, but some techniques are proven by generations of Huffaz. Use them together — no single one carries a whole Hifz journey on its own.",
        ],
        ordered: [
          "Chunking: break each new portion into small chunks of 2–3 verses. Master one chunk before moving to the next, then join them together.",
          "Repetition: recite each new line at least 10 times looking at the page, then 10 times from memory, before moving on. The classic 3×3 method — three verses, three times each — works the same way.",
          "Listening: listen to a slow, clear reciter (Al-Husary and Al-Minshawi are the traditional choices for Hifz) before and after memorising. Hearing the verses correctly fixes the melody in your ear and guards your Tajweed.",
          "Recite to someone: memorising alone lets mistakes hide. Recite every new lesson to a teacher or a family member the same day you learn it.",
          "Write it out: writing the new verses from memory, even once, exposes the gaps that silent recitation misses.",
          "Recite in salah: the verses you pray with are the verses you never forget.",
        ],
      },
      {
        heading: "Can children memorize the Quran?",
        paragraphs: [
          "Yes — childhood is the easiest time to memorise. Children between 7 and 12 absorb new material faster than adults, and many complete their Hifz during these years. But children also need the structure adults can provide: a fixed daily time, a teacher who listens to them every lesson, and parents who protect the routine even on busy days.",
          "The most important rule for children is to keep it positive. Hifz should never become a punishment or a source of dread — a child who loves their lessons will memorise more in a year than a child who is pushed through twice as many pages in fear. Short lessons, small goals, regular praise and a patient teacher matter far more than speed.",
        ],
      },
      {
        heading: "What does a Hifz lesson look like at Quran Akademie?",
        paragraphs: [
          "Every Hifz lesson follows the sabaq–sabqi–manzil structure: your tutor listens to yesterday's new lesson, checks your recent revision, hears a portion of your manzil, and then teaches today's new verses line by line, correcting your Tajweed as you go. You leave each lesson with a clear plan for the week — what to learn, what to revise, and what to recite in salah.",
          "Hifz students usually take the Hifz Intensive plan — 5 classes a week, 45 minutes each, for $99 a month — with a dedicated Hifz tutor who is a Hafiz or Hafiza, a weekly memorisation and revision plan, and a monthly progress report for parents. Lessons run in Germany time (CET/CEST), after school and in the evening, and every plan starts with a free 30-minute trial class.",
        ],
      },
    ],
    faqHeading: "Frequently asked questions",
    faqs: [
      {
        q: "How long does it take to memorize the Quran?",
        a: "Most students take 3–6 years. At half a page a day you finish in about 3.3 years; at one page a day, about 20 months. The pace matters less than the revision — a solid half page a day beats a rushed full page.",
      },
      {
        q: "What is the best age to start Hifz?",
        a: "Children aged 7–12 memorise fastest, but adults succeed too — the timeline guide puts adult reading fluency at 6–12 months from scratch, and Hifz can begin as soon as you can read fluently with Tajweed. There is no age at which it is too late to start.",
      },
      {
        q: "Do I need to finish Noorani Qaida before Hifz?",
        a: "Yes — you need to read fluently and correctly first. Memorising words you cannot yet read with proper Tajweed stores mistakes that are much harder to fix later. Qaida typically takes 3–6 months.",
      },
      {
        q: "Which surah should I memorize first?",
        a: "Start with Juz Amma (the 30th juz): short, familiar surahs like Al-Ikhlas, Al-Falaq, An-Nas and Al-Kawthar. Most students already know some of them from prayer, so the first weeks bring quick progress.",
      },
      {
        q: "How much revision do I need each day?",
        a: "Plan on at least half your Hifz time going to revision — recent lessons daily, the last month's lessons weekly, and one older juz a week in rotation. Revision is what turns memorised verses into verses you keep for life.",
      },
      {
        q: "Can I memorize the Quran online?",
        a: "Yes — Hifz is learned mouth to ear, and a live 1-on-1 video lesson gives you exactly that: a tutor who listens to every verse, corrects your Tajweed in the moment, and sets your weekly plan. The sabaq–sabqi–manzil structure works the same online as in person.",
      },
    ],
    relatedHeading: "Related guides",
    related: [
      { href: "/blog/how-long-does-it-take-to-learn-quran", label: "How Long Does It Take to Learn the Quran?" },
      { href: "/blog/what-is-tajweed", label: "What Is Tajweed?" },
      { href: "/blog/noorani-qaida-explained", label: "Noorani Qaida Explained" },
      { href: "/blog/how-to-choose-an-online-quran-teacher", label: "How to Choose an Online Quran Teacher" },
      { href: "/courses/hifz", label: "Hifz course" },
      { href: "/courses/tajweed", label: "Tajweed course" },
    ],
    nextStep: {
      heading: "Start your Hifz journey",
      body: "A Hafiz is made one page at a time — with a teacher who listens every lesson and a revision plan that keeps every verse alive. Book a free 30-minute trial class and start with Juz Amma this week.",
      courseLabel: "See the Hifz course",
      courseHref: "/courses/hifz",
      trialLabel: "Book your free trial class",
    },
    back: "← Back to all articles",
  },
  de: {
    crumbHome: "Startseite",
    crumbBlog: "Blog",
    category: "Hifz",
    readTime: "7 Min. Lesezeit",
    title: "Koran auswendig lernen: Ein Hifz-Guide für Anfänger",
    intro:
      "Um den Koran auswendig zu lernen, beginnt man mit Dschuz Amma, lernt jeden Tag einen kleinen neuen Abschnitt (Sabaq) und wiederholt täglich die gestrigen und älteren Abschnitte — wer eine halbe Seite am Tag lernt, ist in etwa 3,3 Jahren fertig. Dieser Leitfaden erklärt die Sabaq–Sabqi–Manzil-Methode, realistische Zeitpläne und ein tägliches Wiederholungssystem, das Gelerntes festhält.",
    coverAlt: "Ein aufgeschlagener Koran zum Auswendiglernen",
    author: "Vom Lehrteam der Quran Akademie",
    updated: "Zuletzt aktualisiert: 12. November 2026",
    sections: [
      {
        heading: "Wie lange dauert es, den Koran auswendig zu lernen?",
        paragraphs: [
          "Die meisten Schüler brauchen 3–6 Jahre, um den ganzen Koran auswendig zu lernen — je nachdem, wie viel sie täglich lernen und wie konsequent sie wiederholen. Der Koran hat 604 Seiten, 114 Suren, 6.236 Verse und 30 Dschuz — ein großes Ziel, das aber handhabbar wird, wenn man es in kleine tägliche Abschnitte teilt. Die Tabelle unten zeigt, wie sich das tägliche Tempo auf die Gesamtdauer auswirkt.",
          "Tempo ist nicht das Ziel. Ein Schüler, der eine halbe Seite am Tag lernt und sie fest behält, ist weiter als einer, der eine Seite am Tag hastig durcharbeitet und die Hälfte wieder vergisst. Der Prophet ﷺ sagte: „Die Besten unter euch sind die, die den Koran lernen und ihn lehren“ (Sahih al-Bukhari 5027) — der Schwerpunkt liegt auf gutem Lernen, nicht auf schnellem.",
        ],
        table: {
          headers: ["Täglicher neuer Abschnitt", "Dauer für 604 Seiten", "Für wen geeignet"],
          rows: [
            ["¼ Seite am Tag", "Etwa 6½ Jahre", "Kleine Kinder, berufstätige Erwachsene"],
            ["½ Seite am Tag", "Etwa 3,3 Jahre", "Die meisten Schulkinder"],
            ["1 Seite am Tag", "Etwa 20 Monate", "Engagierte Schüler, ältere Jugendliche & Erwachsene"],
            ["2 Seiten am Tag", "Etwa 10 Monate", "Nur Vollzeit-Hifz-Schüler"],
          ],
        },
      },
      {
        heading: "Wo fängt man als Anfänger an?",
        paragraphs: [
          "Fast jedes Hifz-Programm beginnt mit Dschuz Amma — dem 30. und letzten Dschuz, der kurze, vertraute Suren enthält wie Al-Fatiha, Al-Ichlas, Al-Falaq, An-Nas und Al-Kauthar. Die meisten Schüler kennen einige davon bereits aus dem Gebet auswendig, sodass die ersten Wochen schnelle Erfolge und echtes Selbstvertrauen bringen statt Frust.",
          "Von Dschuz Amma arbeiten sich die Schüler meist rückwärts durch die kürzeren Suren von Dschuz Tabarak (dem 29. Dschuz), bevor sie zu längeren Passagen übergehen. Das Prinzip bleibt immer gleich: erst kurze Suren, dann längere, immer aufbauend auf dem, was bereits sitzt. Wer bereits flüssig mit Tadschwied lesen kann, kann sofort mit Hifz beginnen; wer nicht, schließt zuerst die Noorani Qaida ab — Wörter auswendig zu lernen, die man noch nicht richtig lesen kann, speichert nur Fehler.",
        ],
      },
      {
        heading: "Was ist die Sabaq-, Sabqi- und Manzil-Methode?",
        paragraphs: [
          "Die klassische Hifz-Methode teilt die tägliche Arbeit in drei Teile — und sie wird seit Jahrhunderten verwendet, weil sie funktioniert. Sabaq ist die neue Lektion: die frischen Verse, die man heute auswendig lernt. Sabqi ist die aktuelle Wiederholung: die Lektionen der letzten Tage oder Wochen, die man aufsagt, um sicherzustellen, dass sie noch frisch sind. Manzil ist die alte Wiederholung: ein Teil von allem, was man vor Monaten gelernt hat, im Wechsel aufgesagt, damit nichts verblasst.",
          "Alle drei Teile sind gleich wichtig — die meisten Lehrer sagen sogar, die Wiederholung sei wichtiger als das neue Lernen. Ein Schüler, der eine neue Seite lernt, aber nichts wiederholt, wird bald feststellen, dass die neue Seite eine alte verdrängt hat. Die tägliche Balance liegt etwa bei: 20 % der Zeit für Sabaq, 30 % für Sabqi und 50 % für Manzil.",
        ],
        list: [
          "Sabaq (neue Lektion): die heutigen neuen Verse, Zeile für Zeile gelernt.",
          "Sabqi (aktuelle Wiederholung): die neuen Lektionen der letzten 5–7 Tage, aus dem Gedächtnis aufgesagt.",
          "Manzil (alte Wiederholung): ein wechselnder Teil von allem bisher Gelernten — mindestens ein Dschuz pro Woche, sobald man mehrere hat.",
        ],
      },
      {
        heading: "Wie viel sollte ich jeden Tag auswendig lernen?",
        paragraphs: [
          "Weniger, als Sie denken — und jeden Tag die gleiche Menge. Beständigkeit schlägt Intensität: Fünfzehn konzentrierte Minuten jeden Tag bringen Sie weiter als zwei Stunden am Samstag. Für die meisten Kinder ist eine halbe Seite am Tag (etwa 7–8 Zeilen des Medina-Mushaf) das richtige Tempo; jüngere Kinder beginnen vielleicht mit 3–4 Zeilen, Erwachsene mit einem freien Vormittag schaffen eine ganze Seite.",
          "Benutzen Sie jeden Tag denselben Mushaf. Ihr Gedächtnis ist teilweise visuell: Sie merken sich, wo auf der Seite ein Vers steht, wie die Zeile darüber aussieht und wo die Seite umblättert. Der Wechsel zwischen verschiedenen Drucken zerstört diese visuelle Karte. Der Medina-Mushaf — 15 Zeilen pro Seite, jeder Dschuz beginnt auf einer neuen Seite — ist weltweit die Standardwahl für Hifz-Schüler.",
        ],
      },
      {
        heading: "Wie behalte ich, was ich gelernt habe?",
        paragraphs: [
          "Auswendiglernen ist die leichtere Hälfte des Hifz; Behalten ist die schwerere. Ohne ein Wiederholungssystem verblassen neue Verse innerhalb weniger Tage — das ist normal und kein Zeichen eines schlechten Gedächtnisses. Die Antwort ist Muradscha'a (Muraja'ah): strukturierte, geplante Wiederholung, die in einem festen Rhythmus zu jedem Vers zurückkehrt, wobei die Abstände wachsen, je sicherer der Vers wird. Das ist verteiltes Wiederholen — von Hifz-Lehrern Jahrhunderte praktiziert, bevor Psychologen ihm einen Namen gaben.",
          "Ein einfacher wöchentlicher Rhythmus funktioniert für die meisten Schüler: die neuesten Lektionen täglich aufsagen, die Lektionen des letzten Monats wöchentlich, und jede Woche einen älteren Dschuz im Wechsel. Seine auswendig gelernten Abschnitte im Gebet zu rezitieren, ist die stärkste Wiederholung überhaupt — sie prüft das Gedächtnis unter echten Bedingungen und verbindet den Hifz mit der Ibadah.",
        ],
        table: {
          headers: ["Wiederholungsart", "Was sie umfasst", "Wie oft"],
          rows: [
            ["Täglich (Sabqi)", "Die neuen Lektionen der letzten 5–7 Tage", "Jeden Tag"],
            ["Wöchentlich", "Die Lektionen des letzten Monats", "Einmal pro Woche"],
            ["Manzil-Wechsel", "Ein älterer Dschuz, im Wechsel", "Ein Dschuz pro Woche"],
            ["Im Gebet", "Jeder sichere Abschnitt", "Bei jedem Gebet, wenn möglich"],
          ],
        },
      },
      {
        heading: "Welche Lerntechniken funktionieren wirklich?",
        paragraphs: [
          "Es gibt keine geheime Abkürzung, aber einige Techniken sind durch Generationen von Huffaz bewährt. Nutzen Sie sie gemeinsam — keine einzige trägt allein eine ganze Hifz-Reise.",
        ],
        ordered: [
          "In Abschnitte teilen (Chunking): Teilen Sie jeden neuen Abschnitt in kleine Stücke von 2–3 Versen. Beherrschen Sie ein Stück, bevor Sie zum nächsten übergehen, und fügen Sie sie dann zusammen.",
          "Wiederholen: Rezitieren Sie jede neue Zeile mindestens 10-mal mit Blick auf die Seite, dann 10-mal aus dem Gedächtnis, bevor Sie weitergehen. Die klassische 3×3-Methode — drei Verse, je dreimal — funktioniert nach demselben Prinzip.",
          "Zuhören: Hören Sie vor und nach dem Lernen einen langsamen, deutlichen Rezitator (Al-Husary und Al-Minshawi sind die traditionellen Hifz-Stimmen). Die Verse richtig zu hören, prägt die Melodie ein und schützt Ihren Tadschwied.",
          "Jemandem vorsagen: Allein zu lernen, lässt Fehler sich verstecken. Sagen Sie jede neue Lektion noch am selben Tag einer Lehrkraft oder einem Familienmitglied vor.",
          "Aufschreiben: Die neuen Verse einmal aus dem Gedächtnis aufzuschreiben, deckt Lücken auf, die stilles Rezitieren übersieht.",
          "Im Gebet rezitieren: Die Verse, mit denen Sie beten, sind die Verse, die Sie nie vergessen.",
        ],
      },
      {
        heading: "Können Kinder den Koran auswendig lernen?",
        paragraphs: [
          "Ja — die Kindheit ist die leichteste Zeit zum Auswendiglernen. Kinder zwischen 7 und 12 Jahren nehmen Neues schneller auf als Erwachsene, und viele schließen ihren Hifz in diesen Jahren ab. Aber Kinder brauchen auch die Struktur, die Erwachsene geben können: eine feste tägliche Zeit, eine Lehrkraft, die ihnen in jeder Stunde zuhört, und Eltern, die die Routine auch an vollen Tagen schützen.",
          "Die wichtigste Regel für Kinder: Halten Sie es positiv. Hifz darf nie zur Strafe oder zur Quelle von Angst werden — ein Kind, das seine Stunden liebt, lernt in einem Jahr mehr auswendig als ein Kind, das aus Angst durch doppelt so viele Seiten getrieben wird. Kurze Stunden, kleine Ziele, regelmäßiges Lob und eine geduldige Lehrkraft zählen weit mehr als Tempo.",
        ],
      },
      {
        heading: "Wie sieht eine Hifz-Stunde bei der Quran Akademie aus?",
        paragraphs: [
          "Jede Hifz-Stunde folgt der Sabaq–Sabqi–Manzil-Struktur: Ihre Lehrkraft hört die gestrige neue Lektion ab, prüft die aktuelle Wiederholung, hört einen Teil Ihres Manzil und lehrt dann die heutigen neuen Verse Zeile für Zeile, wobei sie Ihren Tadschwied korrigiert. Sie verlassen jede Stunde mit einem klaren Wochenplan — was zu lernen, was zu wiederholen und was im Gebet zu rezitieren ist.",
          "Hifz-Schüler nehmen meist den Tarif Hifz Intensiv — 5 Stunden pro Woche zu je 45 Minuten für 99 $ im Monat — mit einer persönlichen Hifz-Lehrkraft, die Hafiz oder Hafiza ist, einem wöchentlichen Lern- und Wiederholungsplan und einem monatlichen Fortschrittsbericht für Eltern. Die Stunden laufen nach deutscher Zeit (MEZ/MESZ), nachmittags und abends, und jeder Tarif beginnt mit einer kostenlosen 30-minütigen Probestunde.",
        ],
      },
    ],
    faqHeading: "Häufige Fragen",
    faqs: [
      {
        q: "Wie lange dauert es, den Koran auswendig zu lernen?",
        a: "Die meisten Schüler brauchen 3–6 Jahre. Bei einer halben Seite am Tag ist man in etwa 3,3 Jahren fertig; bei einer Seite am Tag in etwa 20 Monaten. Das Tempo zählt weniger als die Wiederholung — eine solide halbe Seite am Tag schlägt eine hastige ganze Seite.",
      },
      {
        q: "In welchem Alter sollte man mit Hifz anfangen?",
        a: "Kinder von 7–12 Jahren lernen am schnellsten auswendig, aber auch Erwachsene schaffen es — Erwachsene erreichen Leseflüssigkeit in der Regel in 6–12 Monaten ab Null, und Hifz kann beginnen, sobald man flüssig mit Tadschwied lesen kann. Es ist nie zu spät anzufangen.",
      },
      {
        q: "Muss ich die Noorani Qaida vor dem Hifz abschließen?",
        a: "Ja — Sie müssen zuerst flüssig und korrekt lesen können. Wörter auswendig zu lernen, die man noch nicht mit richtigem Tadschwied lesen kann, speichert Fehler, die später viel schwerer zu korrigieren sind. Die Qaida dauert in der Regel 3–6 Monate.",
      },
      {
        q: "Mit welcher Sure sollte ich anfangen?",
        a: "Beginnen Sie mit Dschuz Amma (dem 30. Dschuz): kurze, vertraute Suren wie Al-Ichlas, Al-Falaq, An-Nas und Al-Kauthar. Die meisten Schüler kennen einige davon bereits aus dem Gebet, sodass die ersten Wochen schnelle Fortschritte bringen.",
      },
      {
        q: "Wie viel Wiederholung brauche ich jeden Tag?",
        a: "Planen Sie mindestens die Hälfte Ihrer Hifz-Zeit für Wiederholung ein — aktuelle Lektionen täglich, die Lektionen des letzten Monats wöchentlich und einen älteren Dschuz pro Woche im Wechsel. Wiederholung macht aus gelernten Versen Verse, die man ein Leben lang behält.",
      },
      {
        q: "Kann man den Koran online auswendig lernen?",
        a: "Ja — Hifz lernt man von Mund zu Ohr, und eine Live-Einzelstunde per Video bietet genau das: eine Lehrkraft, die jeden Vers hört, Ihren Tadschwied im Moment korrigiert und Ihren Wochenplan festlegt. Die Sabaq–Sabqi–Manzil-Struktur funktioniert online genauso wie vor Ort.",
      },
    ],
    relatedHeading: "Verwandte Leitfäden",
    related: [
      { href: "/blog/how-long-does-it-take-to-learn-quran", label: "Wie lange dauert es, den Koran zu lernen?" },
      { href: "/blog/what-is-tajweed", label: "Was ist Tadschwied?" },
      { href: "/blog/noorani-qaida-explained", label: "Noorani Qaida erklärt" },
      { href: "/blog/how-to-choose-an-online-quran-teacher", label: "Koranlehrer online finden: 12 Fragen" },
      { href: "/courses/hifz", label: "Hifz-Kurs" },
      { href: "/courses/tajweed", label: "Tadschwied-Kurs" },
    ],
    nextStep: {
      heading: "Beginnen Sie Ihre Hifz-Reise",
      body: "Ein Hafiz wird Seite für Seite gemacht — mit einer Lehrkraft, die in jeder Stunde zuhört, und einem Wiederholungsplan, der jeden Vers lebendig hält. Buchen Sie eine kostenlose 30-minütige Probestunde und beginnen Sie diese Woche mit Dschuz Amma.",
      courseLabel: "Zum Hifz-Kurs",
      courseHref: "/courses/hifz",
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
                    <h3 className="font-serif text-xl font-bold text-brand">
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
            <h2 className="font-serif text-2xl font-bold text-brand sm:text-3xl">
              {t.faqHeading}
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gold" />
            <div className="mt-8 space-y-6">
              {t.faqs.map((faq) => (
                <div key={faq.q} className="rounded-3xl bg-cream p-6 shadow-card sm:p-8">
                  <h3 className="font-serif text-lg font-bold text-brand sm:text-xl">
                    {faq.q}
                  </h3>
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
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
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
