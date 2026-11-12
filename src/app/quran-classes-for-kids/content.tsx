"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { plans } from "@/lib/plans";
import { SectionHeading, CtaBand } from "@/components/Shared";

// TODO: update base URL at launch to the real domain
const BASE_URL = "https://taimoor439.github.io/quran-akademie";
const PAGE_PATH = "/quran-classes-for-kids";

const EN_META = {
  title: "Online Quran Classes for Kids — 1-on-1 Live Lessons",
  description:
    "Live 1-on-1 Quran classes for kids ages 5+. Certified tutors, female teachers available, monthly progress reports. Book a free 30-minute trial class today.",
};

const DE_META = {
  title: "Koranunterricht für Kinder — Online-Einzelunterricht",
  description:
    "Live-Koranunterricht 1-zu-1 für Kinder ab 5 Jahren. Zertifizierte Lehrkräfte, Lehrerinnen verfügbar, monatliche Fortschrittsberichte. Probestunde buchen.",
};

const HERO_IMAGE =
  "https://images.pexels.com/photos/11929254/pexels-photo-11929254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

interface QaLink {
  href: string;
  label: string;
}

interface QaSection {
  heading: string;
  direct: string;
  paragraphs: string[];
  link?: QaLink;
}

interface Faq {
  q: string;
  a: string;
  link?: QaLink;
}

interface AgeRow {
  age: string;
  length: string;
  frequency: string;
  plan: string;
}

interface PathStep {
  title: string;
  duration: string;
  body: string;
  href: string;
  linkLabel: string;
}

interface LessonStep {
  title: string;
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
  ageHeading: string;
  ageDirect: string;
  ageTableHead: string[];
  ageRows: AgeRow[];
  ageNote: string;
  ageParagraph: string;
  pathHeading: string;
  pathDirect: string;
  pathSteps: PathStep[];
  pathRelatedLabel: string;
  pathRelated: QaLink[];
  sections: QaSection[];
  lessonHeading: string;
  lessonDirect: string;
  lessonSteps: LessonStep[];
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
    heroEyebrow: "Quran Classes for Kids",
    heroTitle: "Online Quran classes for kids, live 1-on-1",
    heroSubtitle:
      "Patient, certified tutors, lessons matched to your child's age, and a monthly report that shows you exactly what they have learned. Start with a free trial class.",
    heroCta1: "Book a Free Trial Class",
    heroCta2: "View pricing",
    heroNote: "No payment needed for the trial · 30 minutes · Zoom or Google Meet",
    heroAlt: "Boy reading the Quran in a mosque",
    intro:
      "Children from around age five can learn the Quran online, one-to-one with a patient, certified tutor. Lessons are short — 25 minutes for younger children — and built around play, repetition and praise. Most children read the Quran fluently within 12–18 months, starting with the Noorani Qaida.",
    ageHeading: "How long should a Quran lesson be for a child?",
    ageDirect:
      "A child's Quran lesson should match their age: about 25 minutes for ages 5–7, 30 minutes for ages 8–10, and 30–45 minutes from age 11. Short, regular lessons beat long ones — a focused 25 minutes, four or five times a week, builds reading skill faster than one long weekend session.",
    ageTableHead: ["Age", "Lesson length", "Classes per week", "Recommended plan"],
    ageRows: [
      { age: "5–7 years", length: "25 minutes", frequency: "4 × per week", plan: "Basic — $35/month" },
      { age: "8–10 years", length: "30 minutes", frequency: "5 × per week", plan: "Standard — $59/month" },
      { age: "11+ years", length: "30–45 minutes", frequency: "5 × per week", plan: "Standard or Hifz Intensive" },
    ],
    ageNote:
      "These are starting recommendations, not rules. In the free trial class, the tutor checks your child's level and attention span and recommends the right length — and you can change plans as your child grows.",
    ageParagraph:
      "A five-year-old's attention span is short, and that is completely normal. A 25-minute lesson with songs, games and lots of praise keeps a young child engaged — and four short lessons a week build a habit that one long lesson never will. As children grow, lessons grow with them: 30 minutes from around age eight, and 45 minutes for older children working on Hifz.",
    pathHeading: "What will my child learn, step by step?",
    pathDirect:
      "Your child starts with the Noorani Qaida — the Arabic letters and how they join — which takes 3–6 months. Then comes reading fluency with Tajweed, usually within 12–18 months, and after that Hifz (memorisation) or Tafseer (understanding), depending on your family's goals.",
    pathSteps: [
      {
        title: "Noorani Qaida — first letters",
        duration: "3–6 months",
        body: "Your child learns the 28 Arabic letters, how they join together, and the vowel marks (harakaat) that make words readable. By the end of the Qaida, your child can read simple Arabic words on their own.",
        href: "/courses/noorani-qaida",
        linkLabel: "Noorani Qaida course",
      },
      {
        title: "Reading fluency with Tajweed",
        duration: "12–18 months in total",
        body: "Now your child reads from the Mushaf itself — short surahs first, then longer passages — while the tutor corrects pronunciation letter by letter. This is where Tajweed becomes second nature.",
        href: "/courses/tajweed",
        linkLabel: "Tajweed course",
      },
      {
        title: "Hifz — memorising the Quran",
        duration: "3–6 years",
        body: "Children who want to memorise start with Juz Amma, the 30th juz, and build up surah by surah with a daily revision system (sabaq, sabqi, manzil). Hifz is a long journey — and children who start young finish strong.",
        href: "/courses/hifz",
        linkLabel: "Hifz course",
      },
      {
        title: "Understanding — Tafseer & Islamic studies",
        duration: "Ongoing",
        body: "Reading is only half the journey. In Tafseer, children learn what the verses mean; in Islamic studies they learn aqeedah, daily duas and good manners (akhlaq) — the knowledge that turns reading into understanding.",
        href: "/courses/tafseer",
        linkLabel: "Tafseer course",
      },
    ],
    pathRelatedLabel: "Keep reading:",
    pathRelated: [
      { href: "/blog/noorani-qaida-explained", label: "Noorani Qaida explained" },
      { href: "/blog/what-is-tajweed", label: "What is Tajweed?" },
      { href: "/blog/how-to-memorize-quran", label: "How to memorize the Quran" },
      { href: "/courses/kids-islamic-studies", label: "Kids' Islamic Studies course" },
    ],
    sections: [
      {
        heading: "Can my daughter learn with a female Quran teacher?",
        direct:
          "Yes. Female teachers are available for girls and for boys, and many families — especially for daughters — prefer a female tutor. Just say so when you book the free trial, and we will match your child with a qualified female teacher.",
        paragraphs: [
          "All of our female teachers are Hifz-qualified and Tajweed-certified, just like our male tutors — the only difference is who your child learns with. Many parents of daughters prefer a female teacher, and some boys learn better with one too; either choice is completely normal.",
          "If you would like a female teacher, say so when you book the free trial class. Your child will meet her in the trial lesson itself, so you can see whether the match feels right before you commit to anything.",
        ],
        link: { href: "/teachers", label: "Meet our tutors" },
      },
      {
        heading: "How will I know what my child is learning?",
        direct:
          "Every month you receive a written progress report showing exactly what your child has learned — which surahs and pages, how their Tajweed is developing, and what comes next. On the Standard plan, the report comes with a parent check-in with the tutor.",
        paragraphs: [
          "The report is simple and specific: which surahs and pages your child covered, which letters or rules still need work, and what the tutor plans next. No vague grades — you can see the actual progress, week by week.",
          "Between reports, you are always welcome to sit near the lesson and listen. Parents who hear a lesson now and then know exactly where their child stands — and children try a little harder when Mum or Dad is nearby.",
        ],
      },
      {
        heading: "Are online Quran classes safe for children?",
        direct:
          "Yes — when the academy takes safeguarding seriously. At Quran Akademie, a parent or guardian must stay nearby and be present in the home for the whole lesson, tutors never contact children privately, and every tutor is background-checked and safeguarding-trained. Read our full safeguarding policy before you book.",
        paragraphs: [
          "Every tutor at Quran Akademie is background-checked and safeguarding-trained before teaching a single lesson. Lessons take place on Zoom or Google Meet, with a parent or guardian present in the home for the whole lesson — that is a rule, not a suggestion.",
          "Tutors never contact children privately: no private messages, calls or social media contact with students, ever. And lessons are recorded only with a parent's prior consent, for quality and safeguarding purposes only.",
        ],
        link: { href: "/safeguarding", label: "Read our safeguarding policy" },
      },
    ],
    lessonHeading: "What happens in a children's Quran lesson?",
    lessonDirect:
      "Each lesson follows the same friendly rhythm: a quick revision of last week's verses, new material taught slowly with the tutor listening and correcting, reading practice, and a short dua or story to finish. Lessons are short, upbeat and full of praise — children look forward to them.",
    lessonSteps: [
      {
        title: "Warm-up & revision",
        body: "The lesson opens with a quick revision of last week's verses — children love showing what they remember, and revision is how memorisation sticks.",
      },
      {
        title: "New lesson",
        body: "The tutor introduces the new letters or verses slowly, reading first so your child can listen, then reading together, then letting your child try alone.",
      },
      {
        title: "Reading practice",
        body: "Your child reads back while the tutor listens and corrects — gently, patiently, and always with praise for what is right.",
      },
      {
        title: "A happy ending",
        body: "Every lesson closes with a short dua or a story, and a small piece of homework for the week — usually just a few minutes of practice a day.",
      },
    ],
    plansEyebrow: "Pricing",
    plansTitle: "Simple monthly plans",
    plansSubtitle:
      "No lock-in. Sibling discount 10%. Prices in USD — the EUR equivalent is charged at checkout.",
    perMonth: "per month",
    classesWeek: "classes / week",
    popular: "Most popular",
    plansCta: "See full pricing",
    faqEyebrow: "Questions",
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        q: "What age should a child start learning Quran?",
        a: "Most children start between the ages of 5 and 7, once they can sit and focus for a short lesson. Some start at 4 with very short sessions; others start later and catch up quickly. The free trial class is the best way to find out if your child is ready.",
        link: { href: "/blog/what-age-should-a-child-start-learning-quran", label: "Read the full guide" },
      },
      {
        q: "How long does it take a child to learn to read the Quran?",
        a: "Most children starting from scratch reach basic reading fluency in 12–18 months, with 4–5 lessons a week and a few minutes of daily practice. The Noorani Qaida itself takes 3–6 months. Every child is different — the tutor adjusts the pace to your child, not the other way round.",
        link: { href: "/blog/how-long-does-it-take-to-learn-quran", label: "See the full timeline" },
      },
      {
        q: "How many Quran classes per week should a child take?",
        a: "Four to five short lessons a week works best for most children — it builds a daily habit without tiring them out. The Basic plan has 4 classes a week and the Standard plan has 5; both are designed around how children actually learn.",
        link: { href: "/pricing", label: "Compare plans" },
      },
      {
        q: "What if my child misses a class?",
        a: "Life happens — let your tutor know in advance and the lesson can be rescheduled. The Standard plan includes flexible rescheduling, so a missed week never means a lost week.",
      },
      {
        q: "Do parents need to be present during lessons?",
        a: "Yes — a parent or guardian must stay nearby and be present in the home for the whole lesson. It is part of our safeguarding policy, and it also helps: children focus better when a parent is close by.",
        link: { href: "/safeguarding", label: "Read our safeguarding policy" },
      },
    ],
    jsonLdName: "Online Quran Classes for Kids",
    jsonLdDescription:
      "Live 1-on-1 Quran classes for kids ages 5+. Certified tutors, female teachers available, monthly progress reports.",
  },
  de: {
    heroEyebrow: "Koranunterricht für Kinder",
    heroTitle: "Koranunterricht für Kinder, live 1-zu-1",
    heroSubtitle:
      "Geduldige, zertifizierte Lehrkräfte, Stunden passend zum Alter Ihres Kindes und ein monatlicher Bericht, der genau zeigt, was es gelernt hat. Beginnen Sie mit einer kostenlosen Probestunde.",
    heroCta1: "Kostenlose Probestunde buchen",
    heroCta2: "Preise ansehen",
    heroNote: "Keine Zahlung für die Probestunde nötig · 30 Minuten · Zoom oder Google Meet",
    heroAlt: "Junge liest in einer Moschee den Koran",
    intro:
      "Kinder ab etwa fünf Jahren können den Koran online lernen, 1-zu-1 mit einer geduldigen, zertifizierten Lehrkraft. Die Stunden sind kurz — 25 Minuten für jüngere Kinder — und bauen auf Spiel, Wiederholung und Lob auf. Die meisten Kinder lesen den Koran innerhalb von 12–18 Monaten fließend, beginnend mit der Noorani Qaida.",
    ageHeading: "Wie lang sollte eine Koranstunde für ein Kind sein?",
    ageDirect:
      "Die Länge einer Koranstunde sollte zum Alter passen: etwa 25 Minuten für 5- bis 7-Jährige, 30 Minuten für 8- bis 10-Jährige und 30–45 Minuten ab 11 Jahren. Kurze, regelmäßige Stunden sind besser als lange — 25 konzentrierte Minuten, vier- bis fünfmal pro Woche, bringen Ihr Kind schneller zum fließenden Lesen als eine lange Wochenendstunde.",
    ageTableHead: ["Alter", "Stundenlänge", "Stunden pro Woche", "Empfohlener Tarif"],
    ageRows: [
      { age: "5–7 Jahre", length: "25 Minuten", frequency: "4 × pro Woche", plan: "Basis — 35 $/Monat" },
      { age: "8–10 Jahre", length: "30 Minuten", frequency: "5 × pro Woche", plan: "Standard — 59 $/Monat" },
      { age: "11+ Jahre", length: "30–45 Minuten", frequency: "5 × pro Woche", plan: "Standard oder Hifz Intensiv" },
    ],
    ageNote:
      "Das sind Startrichtwerte, keine Regeln. In der kostenlosen Probestunde prüft die Lehrkraft das Niveau und die Aufmerksamkeitsspanne Ihres Kindes und empfiehlt die passende Länge — und Sie können den Tarif wechseln, wenn Ihr Kind größer wird.",
    ageParagraph:
      "Die Aufmerksamkeitsspanne eines fünfjährigen Kindes ist kurz — und das ist völlig normal. Eine 25-minütige Stunde mit Liedern, Spielen und viel Lob hält ein junges Kind bei der Sache — und vier kurze Stunden pro Woche schaffen eine Gewohnheit, die eine lange Stunde niemals schafft. Wenn Kinder größer werden, wachsen die Stunden mit: 30 Minuten ab etwa acht Jahren und 45 Minuten für ältere Kinder im Hifz.",
    pathHeading: "Was lernt mein Kind — Schritt für Schritt?",
    pathDirect:
      "Ihr Kind beginnt mit der Noorani Qaida — den arabischen Buchstaben und wie sie sich verbinden — das dauert 3–6 Monate. Dann folgt fließendes Lesen mit Tadschwid, meist innerhalb von 12–18 Monaten, und danach Hifz (Auswendiglernen) oder Tafsir (Verstehen), je nach den Zielen Ihrer Familie.",
    pathSteps: [
      {
        title: "Noorani Qaida — die ersten Buchstaben",
        duration: "3–6 Monate",
        body: "Ihr Kind lernt die 28 arabischen Buchstaben, wie sie sich verbinden, und die Vokalzeichen (Harakat), die Wörter lesbar machen. Am Ende der Qaida kann Ihr Kind einfache arabische Wörter selbst lesen.",
        href: "/courses/noorani-qaida",
        linkLabel: "Noorani-Qaida-Kurs",
      },
      {
        title: "Fließendes Lesen mit Tadschwid",
        duration: "insgesamt 12–18 Monate",
        body: "Jetzt liest Ihr Kind aus dem Mushaf selbst — zuerst kurze Suren, dann längere Passagen — während die Lehrkraft die Aussprache Buchstabe für Buchstabe korrigiert. So wird Tadschwid zur zweiten Natur.",
        href: "/courses/tajweed",
        linkLabel: "Tadschwid-Kurs",
      },
      {
        title: "Hifz — den Koran auswendig lernen",
        duration: "3–6 Jahre",
        body: "Kinder, die auswendig lernen möchten, beginnen mit Dschuz Amma, dem 30. Dschuz, und bauen Sure für Sure auf — mit einem täglichen Wiederholungssystem (Sabaq, Sabqi, Manzil). Hifz ist eine lange Reise — und Kinder, die jung anfangen, kommen weit.",
        href: "/courses/hifz",
        linkLabel: "Hifz-Kurs",
      },
      {
        title: "Verstehen — Tafsir & Islamunterricht",
        duration: "fortlaufend",
        body: "Lesen ist nur die halbe Reise. Im Tafsir lernen Kinder, was die Verse bedeuten; im Islamunterricht lernen sie Aqida, tägliche Duas und gute Manieren (Achlaq) — das Wissen, das aus Lesen Verstehen macht.",
        href: "/courses/tafseer",
        linkLabel: "Tafsir-Kurs",
      },
    ],
    pathRelatedLabel: "Weiterlesen:",
    pathRelated: [
      { href: "/blog/noorani-qaida-explained", label: "Noorani Qaida erklärt" },
      { href: "/blog/what-is-tajweed", label: "Was ist Tadschwid?" },
      { href: "/blog/how-to-memorize-quran", label: "Koran auswendig lernen" },
      { href: "/courses/kids-islamic-studies", label: "Islamunterricht für Kinder" },
    ],
    sections: [
      {
        heading: "Kann meine Tochter bei einer Koranlehrerin lernen?",
        direct:
          "Ja. Lehrerinnen sind für Mädchen und Jungen verfügbar, und viele Familien — besonders für ihre Töchter — bevorzugen eine Lehrerin. Sagen Sie es uns einfach bei der Buchung der kostenlosen Probestunde, und wir finden eine qualifizierte Lehrerin für Ihr Kind, die genau zu ihm passt.",
        paragraphs: [
          "Alle unsere Lehrerinnen sind Hifz-qualifiziert und Tadschwid-zertifiziert, genau wie unsere Lehrer — der einzige Unterschied ist, bei wem Ihr Kind lernt. Viele Eltern von Töchtern bevorzugen eine Lehrerin, und manche Jungen lernen auch besser bei einer; beides ist völlig normal.",
          "Wenn Sie eine Lehrerin wünschen, sagen Sie es uns bei der Buchung der kostenlosen Probestunde. Ihr Kind lernt sie in der Probestunde selbst kennen, sodass Sie sehen können, ob die Chemie stimmt, bevor Sie sich für etwas entscheiden.",
        ],
        link: { href: "/teachers", label: "Unsere Lehrkräfte kennenlernen" },
      },
      {
        heading: "Wie erfahre ich, was mein Kind lernt?",
        direct:
          "Jeden Monat erhalten Sie einen schriftlichen Fortschrittsbericht, der genau zeigt, was Ihr Kind gelernt hat — welche Suren und Seiten, wie sich sein Tadschwid entwickelt und was als Nächstes kommt. Im Standard-Tarif kommt der Bericht mit einem Elterngespräch mit der Lehrkraft.",
        paragraphs: [
          "Der Bericht ist einfach und konkret: welche Suren und Seiten Ihr Kind behandelt hat, welche Buchstaben oder Regeln noch Übung brauchen und was die Lehrkraft als Nächstes plant. Keine vagen Noten — Sie sehen den echten Fortschritt, Woche für Woche.",
          "Zwischen den Berichten sind Sie jederzeit willkommen, in der Nähe der Stunde zu sitzen und zuzuhören. Eltern, die ab und zu eine Stunde hören, wissen genau, wo ihr Kind steht — und Kinder geben sich ein bisschen mehr Mühe, wenn Mama oder Papa in der Nähe ist.",
        ],
      },
      {
        heading: "Ist Online-Koranunterricht für Kinder sicher?",
        direct:
          "Ja — wenn die Akademie Kinderschutz ernst nimmt. Bei der Quran Akademie muss ein Elternteil oder Erziehungsberechtigter während der ganzen Stunde in der Nähe bleiben und zu Hause anwesend sein, Lehrkräfte kontaktieren Kinder niemals privat, und jede Lehrkraft ist hintergrundgeprüft und im Kinderschutz geschult. Lesen Sie vor der Buchung unsere Kinderschutzrichtlinie.",
        paragraphs: [
          "Jede Lehrkraft der Quran Akademie ist hintergrundgeprüft und im Kinderschutz geschult, bevor sie eine einzige Stunde unterrichtet. Die Stunden finden über Zoom oder Google Meet statt, mit einem Elternteil oder Erziehungsberechtigten zu Hause anwesend für die ganze Stunde — das ist eine Regel, keine Empfehlung.",
          "Lehrkräfte kontaktieren Kinder niemals privat: keine privaten Nachrichten, Anrufe oder Social-Media-Kontakte mit Schülern, niemals. Und Stunden werden nur mit vorheriger Zustimmung eines Elternteils aufgezeichnet, nur für Qualität und Kinderschutz.",
        ],
        link: { href: "/safeguarding", label: "Unsere Kinderschutzrichtlinie lesen" },
      },
    ],
    lessonHeading: "Wie läuft eine Kinderstunde ab?",
    lessonDirect:
      "Jede Stunde folgt demselben freundlichen Rhythmus: eine kurze Wiederholung der Verse der letzten Woche, neuer Stoff, langsam vermittelt, während die Lehrkraft zuhört und korrigiert, Leseübung und zum Abschluss ein kurzes Dua oder eine Geschichte. Die Stunden sind kurz, fröhlich und voller Lob — Kinder freuen sich darauf.",
    lessonSteps: [
      {
        title: "Aufwärmen & Wiederholen",
        body: "Die Stunde beginnt mit einer kurzen Wiederholung der Verse der letzten Woche — Kinder zeigen gern, was sie sich gemerkt haben, und Wiederholung ist der Weg, wie Auswendiglernen gelingt.",
      },
      {
        title: "Neuer Stoff",
        body: "Die Lehrkraft führt die neuen Buchstaben oder Verse langsam ein, liest zuerst vor, damit Ihr Kind zuhören kann, liest dann gemeinsam und lässt Ihr Kind danach allein versuchen.",
      },
      {
        title: "Leseübung",
        body: "Ihr Kind liest vor, während die Lehrkraft zuhört und korrigiert — sanft, geduldig und immer mit Lob für das, was richtig ist.",
      },
      {
        title: "Ein fröhlicher Abschluss",
        body: "Jede Stunde endet mit einem kurzen Dua oder einer Geschichte und einer kleinen Hausaufgabe für die Woche — meist nur ein paar Minuten Übung am Tag.",
      },
    ],
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
        q: "Ab welchem Alter sollte ein Kind den Koran lernen?",
        a: "Die meisten Kinder beginnen zwischen 5 und 7 Jahren, sobald sie sich für eine kurze Stunde konzentrieren können. Manche beginnen mit 4 Jahren mit sehr kurzen Stunden; andere beginnen später und holen schnell auf. Die kostenlose Probestunde ist der beste Weg herauszufinden, ob Ihr Kind bereit ist.",
        link: { href: "/blog/what-age-should-a-child-start-learning-quran", label: "Den vollständigen Leitfaden lesen" },
      },
      {
        q: "Wie lange dauert es, bis ein Kind den Koran lesen kann?",
        a: "Die meisten Kinder, die von Grund auf beginnen, lesen innerhalb von 12–18 Monaten fließend, bei 4–5 Stunden pro Woche und ein paar Minuten täglicher Übung. Die Noorani Qaida selbst dauert 3–6 Monate. Jedes Kind ist anders — die Lehrkraft passt das Tempo an Ihr Kind an, nicht umgekehrt.",
        link: { href: "/blog/how-long-does-it-take-to-learn-quran", label: "Den vollständigen Zeitplan ansehen" },
      },
      {
        q: "Wie oft pro Woche sollte ein Kind Koranunterricht haben?",
        a: "Vier bis fünf kurze Stunden pro Woche sind für die meisten Kinder am besten — das schafft eine tägliche Gewohnheit, ohne sie zu ermüden. Der Basis-Tarif hat 4 Stunden pro Woche, der Standard-Tarif 5; beide sind darauf ausgelegt, wie Kinder wirklich lernen.",
        link: { href: "/pricing", label: "Tarife vergleichen" },
      },
      {
        q: "Was passiert, wenn mein Kind eine Stunde verpasst?",
        a: "Das Leben passiert — sagen Sie Ihrer Lehrkraft vorher Bescheid, und die Stunde kann verschoben werden. Der Standard-Tarif enthält eine flexible Terminverschiebung, sodass eine verpasste Woche nie eine verlorene Woche ist.",
      },
      {
        q: "Müssen Eltern während der Stunden anwesend sein?",
        a: "Ja — ein Elternteil oder Erziehungsberechtigter muss in der Nähe bleiben und für die ganze Stunde zu Hause anwesend sein. Das gehört zu unserer Kinderschutzrichtlinie, und es hilft auch: Kinder konzentrieren sich besser, wenn ein Elternteil in der Nähe ist.",
        link: { href: "/safeguarding", label: "Unsere Kinderschutzrichtlinie lesen" },
      },
    ],
    jsonLdName: "Koranunterricht für Kinder",
    jsonLdDescription:
      "Live-Koranunterricht 1-zu-1 für Kinder ab 5 Jahren. Zertifizierte Lehrkräfte, Lehrerinnen verfügbar, monatliche Fortschrittsberichte.",
  },
};

export default function KidsContent() {
  const { locale } = useLocale();
  const t = content[locale];
  const meta = locale === "de" ? DE_META : EN_META;
  const pageUrl = `${BASE_URL}${PAGE_PATH}`;

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
        author: { "@type": "Organization", name: "Quran Akademie" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Quran Akademie", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: t.jsonLdName, item: pageUrl },
        ],
      },
      {
        "@type": "Course",
        name: t.jsonLdName,
        description: t.jsonLdDescription,
        provider: {
          "@type": "Organization",
          name: "Quran Akademie",
          url: BASE_URL,
        },
        offers: plans.map((plan) => ({
          "@type": "Offer",
          category: plan.name[locale],
          price: plan.priceUsd,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
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

      {/* HERO */}
      <section className="pattern-star bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
              {t.heroEyebrow}
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] text-brand sm:text-5xl lg:text-[3.4rem]">
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

      {/* AGES + LESSON LENGTH TABLE */}
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold leading-tight text-brand sm:text-4xl">
            {t.ageHeading}
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mt-6 text-lg font-semibold leading-relaxed text-ink/90">
            {t.ageDirect}
          </p>
          <div className="mt-8 overflow-x-auto rounded-3xl bg-white shadow-card">
            <table className="w-full min-w-[560px] text-left text-sm sm:text-base">
              <thead>
                <tr className="bg-brand text-white">
                  {t.ageTableHead.map((head) => (
                    <th key={head} className="px-5 py-4 font-bold first:rounded-tl-3xl last:rounded-tr-3xl">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.ageRows.map((row) => (
                  <tr key={row.age} className="border-t border-ink/10">
                    <td className="px-5 py-4 font-bold text-brand">{row.age}</td>
                    <td className="px-5 py-4 text-ink/80">{row.length}</td>
                    <td className="px-5 py-4 text-ink/80">{row.frequency}</td>
                    <td className="px-5 py-4 text-ink/80">{row.plan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ink/60">{t.ageNote}</p>
          <p className="mt-5 leading-relaxed text-ink/80">{t.ageParagraph}</p>
        </div>
      </section>

      {/* CURRICULUM PATH */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold leading-tight text-brand sm:text-4xl">
            {t.pathHeading}
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mt-6 text-lg font-semibold leading-relaxed text-ink/90">
            {t.pathDirect}
          </p>
          <ol className="mt-10 space-y-6">
            {t.pathSteps.map((step, i) => (
              <li key={step.title} className="flex gap-5 rounded-3xl bg-cream p-6 shadow-card sm:p-8">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold font-serif text-xl font-bold text-brand-deep">
                  {i + 1}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="font-serif text-xl font-bold text-brand">{step.title}</h3>
                    <span className="text-sm font-bold text-gold-dark">{step.duration}</span>
                  </div>
                  <p className="mt-2 leading-relaxed text-ink/70">{step.body}</p>
                  <Link
                    href={step.href}
                    className="mt-3 inline-block text-sm font-bold text-brand hover:underline"
                  >
                    {step.linkLabel} →
                  </Link>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-10 leading-relaxed text-ink/70">
            {t.pathRelatedLabel}{" "}
            {t.pathRelated.map((link, i) => (
              <span key={link.href}>
                {i > 0 && " · "}
                <Link href={link.href} className="font-bold text-brand hover:underline">
                  {link.label}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* QUESTION SECTIONS */}
      {t.sections.map((section, i) => (
        <section key={section.heading} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold leading-tight text-brand sm:text-4xl">
              {section.heading}
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gold" />
            <p className="mt-6 text-lg font-semibold leading-relaxed text-ink/90">
              {section.direct}
            </p>
            {section.paragraphs.map((p) => (
              <p key={p} className="mt-5 leading-relaxed text-ink/80">
                {p}
              </p>
            ))}
            {section.link && (
              <Link
                href={section.link.href}
                className="mt-8 inline-block rounded-full bg-brand px-8 py-3 text-base font-bold text-white transition hover:bg-brand-light"
              >
                {section.link.label} →
              </Link>
            )}
          </div>
        </section>
      ))}

      {/* HOW A LESSON WORKS */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-bold leading-tight text-brand sm:text-4xl">
              {t.lessonHeading}
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-gold" />
            <p className="mt-6 text-lg font-semibold leading-relaxed text-ink/90">
              {t.lessonDirect}
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.lessonSteps.map((step, i) => (
              <div key={step.title} className="rounded-3xl bg-white p-8 shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold font-serif text-xl font-bold text-brand-deep">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-serif text-xl font-bold text-brand">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/70">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS SUMMARY */}
      <section className="bg-white">
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
                  plan.popular ? "bg-brand text-white ring-4 ring-gold" : "bg-cream"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand-deep">
                    {t.popular}
                  </span>
                )}
                <h3
                  className={`font-serif text-xl font-bold ${
                    plan.popular ? "text-white" : "text-brand"
                  }`}
                >
                  {plan.name[locale]}
                </h3>
                <p className="mt-4">
                  <span
                    className={`font-serif text-5xl font-bold ${
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
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading eyebrow={t.faqEyebrow} title={t.faqTitle} />
          <div className="mt-12 space-y-6">
            {t.faqs.map((faq) => (
              <div key={faq.q} className="rounded-3xl bg-white p-8 shadow-card">
                <h3 className="font-serif text-xl font-bold text-brand">{faq.q}</h3>
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
