"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { plans } from "@/lib/plans";
import { SectionHeading, CtaBand } from "@/components/Shared";

const BASE_URL = "https://onlinekoran.de";
const PAGE_PATH = "/online-quran-classes-germany";

const EN_META = {
  title: "Online Quran Classes in Germany — 1-on-1 Live Lessons",
  description:
    "Live 1-on-1 Quran classes for families in Germany. Certified tutors, after-school times in CET/CEST, free 30-minute trial class. Book your free lesson today.",
};

const DE_META = {
  title: "Online-Koranunterricht Deutschland — Live-Einzelunterricht",
  description:
    "Live-Koranunterricht 1-zu-1 für Familien in Deutschland. Zertifizierte Lehrkräfte, Nachmittags- und Abendtermine nach MEZ/MESZ, kostenlose Probestunde.",
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1600&q=80";

interface QaLink {
  href: string;
  label: string;
}

interface QaSection {
  heading: string;
  direct: string;
  paragraphs: string[];
  bullets?: string[];
  link?: QaLink;
}

interface Faq {
  q: string;
  a: string;
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
  factsTitle: string;
  facts: string[];
  sections: QaSection[];
  citiesEyebrow: string;
  citiesTitle: string;
  citiesBody: string;
  cities: string[];
  berlinNote: string;
  berlinLinkLabel: string;
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
    heroEyebrow: "Online Quran Classes · Germany",
    heroTitle: "Online Quran classes in Germany, live 1-on-1",
    heroSubtitle:
      "Certified tutors, after-school times in Germany time (CET/CEST), and a free trial class — for kids and adults in Berlin, Hamburg, Munich, Cologne and every town in between.",
    heroCta1: "Book a Free Trial Class",
    heroCta2: "View pricing",
    heroNote: "No payment needed for the trial · 30 minutes · Zoom or Google Meet",
    heroAlt: "Mosque dome and minarets against the sky",
    intro:
      "Yes — you can learn the Quran online in Germany with a live, certified tutor, one-to-one, at times that fit the German school day. These are online Quran classes Germany families join from home: live 1-on-1 lessons for children and adults, in English or German, with after-school and evening slots in CET/CEST, a free 30-minute trial class, and no lock-in.",
    factsTitle: "Germany at a glance",
    facts: [
      "6.6–7.0 million Muslims lived in Germany in 2025 — 8.0–8.5% of the population. (BAMF Research Report 55)",
      "39.4% of Muslims in Germany are of Turkish origin — the largest group, followed by Arabic-speaking backgrounds. (BAMF Research Report 55)",
      "The Quran has 114 surahs, 6,236 verses and 30 juz — 604 pages in the standard Madinah Mushaf.",
      "Lessons run 3–8pm CET/CEST, after school, plus weekend mornings — in English or German.",
    ],
    sections: [
      {
        heading: "Why do German families choose online 1-on-1 Quran classes?",
        direct:
          "Because it fits real family life in Germany. There is no drive to a weekend class, no waiting list, and no group pace to keep up with. Your child learns one-to-one with a dedicated tutor, at a fixed time after school, in English or German — and you can watch the progress month by month.",
        paragraphs: [
          "Many families in Germany live far from a mosque with a weekend Quran school — or the local class has a waiting list, or the group is too big for a shy child to be heard. Online 1-on-1 lessons remove all three problems at once: the tutor comes to your living room, lessons start the week you book, and every minute of the lesson is your child's.",
          "And because the tutor teaches only your child, nothing is wasted: a child who knows the Arabic letters skips ahead, and a child who struggles with one sound gets the time they need. That is the difference between a group pace and a personal pace.",
        ],
        bullets: [
          "No travel — lessons at home, on Zoom or Google Meet",
          "Instant start — no waiting list; your first lesson is the free trial",
          "A dedicated tutor who knows your child's level, week after week",
          "Female teachers available for girls and boys",
          "Monthly progress reports, so you always know what your child has learned",
        ],
        link: { href: "/free-trial", label: "Book your free trial class" },
      },
      {
        heading: "How do online Quran classes fit the German school day?",
        direct:
          "Lessons run after school, between 3pm and 8pm CET/CEST, with weekend-morning slots too — so they fit around Grundschule, Ganztagsschule and homework. A 25- or 30-minute lesson slots neatly between school and dinner, and families can pause or shift lessons around the Schulferien in their Bundesland.",
        paragraphs: [
          "Most German schoolchildren finish school between 1pm and 4pm — earlier at Grundschule, later if they attend Ganztagsschule. That is exactly why our lessons run from 3pm to 8pm CET/CEST: there is always a slot between homework and dinner, and weekend mornings are available for families who prefer them.",
          "The Schulferien fall on different dates in each Bundesland — Bavaria's summer holidays, for example, traditionally start and end later than Berlin's. With no lock-in, families can pause or shift lessons around the holidays in their own state.",
        ],
      },
      {
        heading: "Do online classes replace the mosque school (Koranschule)?",
        direct:
          "No — they complement it. The weekend Koranschule at your local mosque, often run by DITIB or another association, gives your child community, friends and a shared experience. One-to-one online lessons add what a group class cannot: a tutor who corrects your child's own recitation, letter by letter, every single lesson.",
        paragraphs: [
          "Most mosques in Germany — whether they belong to DITIB, Milli Görüş, VIKZ or an independent community — run a weekend Koranschule: children meet Muslim friends, learn together and feel part of a community. Online lessons do not compete with that. They do a different job.",
          "In a group of fifteen children, a teacher cannot listen to every child's recitation every week. In a 1-on-1 lesson, the tutor hears every letter your child reads — and corrects the small pronunciation mistakes that, left alone, become habits. The two work well together: mosque school on the weekend for community, online lessons during the week for real progress in reading.",
        ],
        link: { href: "/courses", label: "See all courses" },
      },
      {
        heading: "What is the difference between Islamunterricht and Quran classes?",
        direct:
          "Islamunterricht is religious education taught in some German state schools — it teaches about Islam, its history, beliefs and values. Quran classes teach the skill of reading and memorising the Quran itself, with correct Tajweed. The two complement each other: one builds understanding, the other builds recitation.",
        paragraphs: [
          "Islamunterricht is offered as a school subject in several Bundesländer, where children learn about Islamic beliefs, history and values as part of their school day. It is classroom learning about the religion — valuable, but it is not designed to teach a child to read the Quran fluently.",
          "Quran classes do the practical work: reading the Arabic script, pronouncing each letter correctly, memorising surahs and understanding what they mean. Families who have both get the best of both worlds — understanding at school, and recitation with a tutor.",
        ],
      },
      {
        heading: "Which languages do the tutors speak?",
        direct:
          "Lessons are taught in English or German, and many tutors also speak Arabic or Urdu — so your child can learn in the language they are most comfortable with, while the Quran itself is always taught in Arabic. When you book, tell us your preferred language and we will match you with a tutor who speaks it.",
        paragraphs: [
          "Germany's Muslim families speak many languages at home — Turkish most of all (39.4% of Muslims in Germany are of Turkish origin, according to BAMF Research Report 55), alongside Arabic, Urdu, Kurdish, Bosnian and more.",
          "That matters most for younger children: a five-year-old learns faster when the tutor can explain a new letter in a language the child already understands. Older children and adults usually prefer German or English. Either way, the Quran itself is always taught in Arabic, as it should be.",
        ],
        link: { href: "/teachers", label: "Meet our tutors" },
      },
      {
        heading: "How do I pay for Quran classes from Germany?",
        direct:
          "Plans are priced in USD and you pay the EUR equivalent at checkout, at the current exchange rate — the amount you see at checkout is the amount you pay. Payment works by card or SEPA direct debit, and there is no lock-in: you can cancel or pause your plan at any time.",
        paragraphs: [
          "There are three simple monthly plans: Basic at $35 a month (4 classes a week, 25 minutes each), Standard at $59 (5 classes a week, 30 minutes) and Hifz Intensive at $99 (5 classes a week, 45 minutes). Every plan starts with a free 30-minute trial class — no payment details needed.",
          "Enrol a second child from the same family and you save 10% on their plan every month, through the sibling discount. And because there is no lock-in, you are never tied to a plan that no longer fits your family.",
        ],
        link: { href: "/pricing", label: "See full pricing" },
      },
    ],
    citiesEyebrow: "All of Germany",
    citiesTitle: "One academy, every city in Germany",
    citiesBody:
      "Because every class is taught online, we teach children and adults in every town and village in Germany — not just the big cities. Lessons are available in all of these cities and everywhere in between:",
    cities: [
      "Berlin",
      "Hamburg",
      "München",
      "Köln",
      "Frankfurt am Main",
      "Düsseldorf",
      "Stuttgart",
      "Dortmund",
      "Duisburg",
      "Essen",
      "Bremen",
      "Leipzig",
      "Hannover",
      "Nürnberg",
    ],
    berlinNote: "Live in the capital? See our dedicated Berlin page.",
    berlinLinkLabel: "Online Quran classes in Berlin",
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
        q: "What time are online Quran classes in Germany?",
        a: "Lessons run from 3pm to 8pm CET/CEST, with weekend-morning slots as well. When you book, you choose a fixed weekly time in Germany time, and the class link arrives before every lesson.",
      },
      {
        q: "Can my child learn with a female Quran teacher?",
        a: "Yes — female teachers are available for girls and boys. Just mention your preference when you book the free trial class and we will match your child with a qualified female tutor.",
      },
      {
        q: "What do we need for the first class?",
        a: "A laptop, tablet or smartphone, a quiet spot at home, and the Zoom or Google Meet link we send before the lesson. No books or software to buy — your tutor brings everything to the first lesson, including the free trial.",
      },
      {
        q: "Is there really a free trial class?",
        a: "Yes. Every plan starts with a free 30-minute trial class. Your child meets the tutor, tries a real lesson, and you decide afterwards — no payment details are needed to book it.",
      },
      {
        q: "Can we pause lessons during the school holidays?",
        a: "Yes. There is no lock-in, so families can pause or shift lessons around the Schulferien in their Bundesland. The Standard plan also includes flexible rescheduling if a single week does not work out.",
      },
    ],
    jsonLdName: "Online Quran Classes in Germany",
    jsonLdDescription:
      "Live 1-on-1 Quran classes for families in Germany. Certified tutors, after-school times in CET/CEST, free 30-minute trial class.",
  },
  de: {
    heroEyebrow: "Online-Koranunterricht · Deutschland",
    heroTitle: "Online-Koranunterricht in Deutschland, live 1-zu-1",
    heroSubtitle:
      "Zertifizierte Lehrkräfte, Nachmittags- und Abendtermine nach deutscher Zeit (MEZ/MESZ) und eine kostenlose Probestunde — für Kinder und Erwachsene in Berlin, Hamburg, München, Köln und jedem Ort dazwischen.",
    heroCta1: "Kostenlose Probestunde buchen",
    heroCta2: "Preise ansehen",
    heroNote: "Keine Zahlung für die Probestunde nötig · 30 Minuten · Zoom oder Google Meet",
    heroAlt: "Moscheekuppel und Minarette vor dem Himmel",
    intro:
      "Ja — in Deutschland kann man den Koran online mit einer live zugeschalteten, zertifizierten Lehrkraft lernen, im Einzelunterricht und zu Zeiten, die zum deutschen Schulalltag passen. Die Quran Akademie unterrichtet Kinder und Erwachsene in ganz Deutschland auf Englisch oder Deutsch, nachmittags und abends nach MEZ/MESZ, mit kostenloser 30-minütiger Probestunde und ohne Mindestlaufzeit.",
    factsTitle: "Deutschland im Überblick",
    facts: [
      "6,6–7,0 Millionen Musliminnen und Muslime lebten 2025 in Deutschland — 8,0–8,5 % der Bevölkerung. (BAMF Forschungsbericht 55)",
      "39,4 % der Muslime in Deutschland sind türkischer Herkunft — die größte Gruppe, gefolgt von arabischsprachigen Familien. (BAMF Forschungsbericht 55)",
      "Der Koran (Quran) hat 114 Suren, 6.236 Verse und 30 Dschuz — 604 Seiten im Standard-Mushaf von Medina.",
      "Unterricht von 15–20 Uhr MEZ/MESZ, nach der Schule, plus vormittags am Wochenende — auf Englisch oder Deutsch.",
    ],
    sections: [
      {
        heading: "Warum wählen deutsche Familien Online-Koranunterricht 1-zu-1?",
        direct:
          "Weil er zum echten Familienleben in Deutschland passt. Es gibt keine Fahrt zum Wochenendunterricht, keine Warteliste und kein Gruppentempo, mit dem man mithalten muss. Ihr Kind lernt 1-zu-1 mit einer festen Lehrkraft, zu einer festen Zeit nach der Schule, auf Englisch oder Deutsch — und Sie sehen den Fortschritt Monat für Monat.",
        paragraphs: [
          "Viele Familien in Deutschland wohnen weit von einer Moschee mit Wochenend-Koranschule entfernt — oder die Klasse vor Ort hat eine Warteliste, oder die Gruppe ist zu groß, als dass ein schüchternes Kind gehört würde. Online-Einzelunterricht löst alle drei Probleme auf einmal: Die Lehrkraft kommt in Ihr Wohnzimmer, der Unterricht beginnt in der Woche, in der Sie buchen, und jede Minute der Stunde gehört Ihrem Kind.",
          "Und weil die Lehrkraft nur Ihr Kind unterrichtet, geht nichts verloren: Ein Kind, das die arabischen Buchstaben schon kennt, springt voran; ein Kind, das mit einem Laut kämpft, bekommt die Zeit, die es braucht. Das ist der Unterschied zwischen Gruppentempo und persönlichem Tempo.",
        ],
        bullets: [
          "Keine Fahrt — Unterricht zu Hause, über Zoom oder Google Meet",
          "Sofortiger Start — keine Warteliste; die erste Stunde ist die kostenlose Probestunde",
          "Eine feste Lehrkraft, die das Niveau Ihres Kindes Woche für Woche kennt",
          "Lehrerinnen verfügbar — für Mädchen und Jungen",
          "Monatliche Fortschrittsberichte, damit Sie immer wissen, was Ihr Kind gelernt hat",
        ],
        link: { href: "/free-trial", label: "Kostenlose Probestunde buchen" },
      },
      {
        heading: "Wie passt Online-Koranunterricht zum deutschen Schulalltag?",
        direct:
          "Der Unterricht findet nach der Schule statt, zwischen 15 und 20 Uhr MEZ/MESZ, dazu vormittags am Wochenende — so passt er zu Grundschule, Ganztagsschule und Hausaufgaben. Eine 25- oder 30-minütige Stunde passt gut zwischen Schule und Abendessen, und Familien können rund um die Schulferien in ihrem Bundesland pausieren oder verschieben.",
        paragraphs: [
          "Die meisten deutschen Schulkinder sind zwischen 13 und 16 Uhr zu Hause — früher an der Grundschule, später in der Ganztagsschule. Genau deshalb läuft unser Unterricht von 15 bis 20 Uhr MEZ/MESZ: Es gibt immer einen Termin zwischen Hausaufgaben und Abendessen, und vormittags am Wochenende gibt es weitere Termine für Familien, die das bevorzugen.",
          "Die Schulferien liegen in jedem Bundesland anders — die bayerischen Sommerferien beginnen und enden traditionell später als die Berliner. Weil es keine Mindestlaufzeit gibt, können Familien rund um die Ferien in ihrem Bundesland pausieren oder ihre Stunden verschieben und danach einfach weitermachen.",
        ],
      },
      {
        heading: "Ersetzt Online-Unterricht die Koranschule in der Moschee?",
        direct:
          "Nein — er ergänzt sie. Die Wochenend-Koranschule in Ihrer Moschee vor Ort, oft von der DITIB oder einem anderen Verband getragen, gibt Ihrem Kind Gemeinschaft, Freunde und ein gemeinsames Erlebnis. Online-Einzelunterricht ergänzt, was eine Gruppe nicht leisten kann: eine Lehrkraft, die die Rezitation Ihres Kindes korrigiert, Buchstabe für Buchstabe, in jeder einzelnen Stunde.",
        paragraphs: [
          "Die meisten Moscheen in Deutschland — ob sie zur DITIB, zu Milli Görüş, zum VIKZ oder einer unabhängigen Gemeinde gehören — bieten eine Wochenend-Koranschule an: Kinder treffen muslimische Freunde, lernen gemeinsam und fühlen sich als Teil einer Gemeinschaft. Online-Unterricht konkurriert nicht damit. Er macht etwas anderes.",
          "In einer Gruppe von fünfzehn Kindern kann eine Lehrkraft nicht jede Woche die Rezitation jedes Kindes anhören. Im Einzelunterricht hört die Lehrkraft jeden Buchstaben, den Ihr Kind liest — und korrigiert die kleinen Aussprachefehler, die sonst zu Gewohnheiten werden. Beides zusammen funktioniert gut: Koranschule am Wochenende für die Gemeinschaft, Online-Unterricht in der Woche für echten Fortschritt beim Lesen.",
        ],
        link: { href: "/courses", label: "Alle Kurse ansehen" },
      },
      {
        heading: "Was ist der Unterschied zwischen Islamunterricht und Koranunterricht?",
        direct:
          "Islamunterricht ist Religionsunterricht an einigen deutschen Schulen — er vermittelt Wissen über den Islam, seine Geschichte, seine Glaubensinhalte und Werte. Koranunterricht lehrt die Fertigkeit, den Koran selbst zu lesen und auswendig zu lernen, mit korrektem Tadschwid. Beides ergänzt sich: Das eine baut Verständnis auf, das andere die Rezitation.",
        paragraphs: [
          "Islamunterricht wird in mehreren Bundesländern als Schulfach angeboten, wo Kinder im Schulalltag etwas über islamische Glaubensinhalte, Geschichte und Werte lernen. Es ist Unterricht über die Religion — wertvoll, aber nicht darauf ausgelegt, einem Kind fließendes Koranlesen beizubringen.",
          "Koranunterricht leistet die praktische Arbeit: die arabische Schrift lesen, jeden Buchstaben korrekt aussprechen, Suren auswendig lernen und verstehen, was sie bedeuten. Wer beides hat, bekommt das Beste aus beiden Welten — Verständnis in der Schule und Rezitation mit einer Lehrkraft.",
        ],
      },
      {
        heading: "Welche Sprachen sprechen die Lehrkräfte?",
        direct:
          "Der Unterricht findet auf Englisch oder Deutsch statt, und viele Lehrkräfte sprechen zusätzlich Arabisch oder Urdu — Ihr Kind lernt also in der Sprache, in der es sich am wohlsten fühlt, während der Koran selbst immer auf Arabisch unterrichtet wird. Sagen Sie uns bei der Buchung Ihre Wunschsprache, und wir finden eine Lehrkraft, die sie spricht.",
        paragraphs: [
          "Deutschlands muslimische Familien sprechen zu Hause viele Sprachen — Türkisch vor allem (39,4 % der Muslime in Deutschland sind türkischer Herkunft, laut BAMF Forschungsbericht 55), daneben Arabisch, Urdu, Kurdisch, Bosnisch und mehr.",
          "Das ist für jüngere Kinder am wichtigsten: Ein fünfjähriges Kind lernt schneller, wenn die Lehrkraft einen neuen Buchstaben in einer Sprache erklären kann, die das Kind schon versteht. Ältere Kinder und Erwachsene bevorzugen meist Deutsch oder Englisch. In jedem Fall wird der Koran selbst immer auf Arabisch unterrichtet, wie es sein sollte.",
        ],
        link: { href: "/teachers", label: "Unsere Lehrkräfte kennenlernen" },
      },
      {
        heading: "Wie bezahle ich Koranunterricht aus Deutschland?",
        direct:
          "Die Tarife sind in USD angegeben; an der Kasse zahlen Sie den Euro-Gegenwert zum aktuellen Kurs — der Betrag, den Sie an der Kasse sehen, ist der Betrag, den Sie zahlen. Sie zahlen per Karte oder SEPA-Lastschrift, und es gibt keine Mindestlaufzeit: Sie können Ihren Tarif jederzeit kündigen oder pausieren.",
        paragraphs: [
          "Es gibt drei einfache Monatstarife: Basis für 35 $ im Monat (4 Stunden pro Woche, je 25 Minuten), Standard für 59 $ (5 Stunden pro Woche, je 30 Minuten) und Hifz Intensiv für 99 $ (5 Stunden pro Woche, je 45 Minuten). Jeder Tarif beginnt mit einer kostenlosen 30-minütigen Probestunde — ohne Angabe von Zahlungsdaten.",
          "Melden Sie ein zweites Kind aus derselben Familie an, sparen Sie mit dem Geschwisterrabatt jeden Monat 10 % auf dessen Tarif. Und weil es keine Mindestlaufzeit gibt, sind Sie nie an einen Tarif gebunden, der nicht mehr zu Ihrer Familie passt.",
        ],
        link: { href: "/pricing", label: "Alle Preise ansehen" },
      },
    ],
    citiesEyebrow: "Ganz Deutschland",
    citiesTitle: "Eine Akademie, jede Stadt in Deutschland",
    citiesBody:
      "Weil jede Stunde online stattfindet, unterrichten wir Kinder und Erwachsene in jeder Stadt und jedem Dorf in Deutschland — nicht nur in den Großstädten. Unterricht ist in allen diesen Städten verfügbar — und überall dazwischen:",
    cities: [
      "Berlin",
      "Hamburg",
      "München",
      "Köln",
      "Frankfurt am Main",
      "Düsseldorf",
      "Stuttgart",
      "Dortmund",
      "Duisburg",
      "Essen",
      "Bremen",
      "Leipzig",
      "Hannover",
      "Nürnberg",
    ],
    berlinNote: "Sie wohnen in der Hauptstadt? Sehen Sie sich unsere eigene Berlin-Seite an.",
    berlinLinkLabel: "Online-Koranunterricht in Berlin",
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
        q: "Zu welchen Zeiten findet der Online-Koranunterricht in Deutschland statt?",
        a: "Der Unterricht läuft werktags von 15 bis 20 Uhr MEZ/MESZ, dazu vormittags am Wochenende. Bei der Buchung wählen Sie einen festen wöchentlichen Termin nach deutscher Zeit, und der Link zur Stunde kommt vor jeder Stunde.",
      },
      {
        q: "Kann mein Kind bei einer Koranlehrerin lernen?",
        a: "Ja — Lehrerinnen sind für Mädchen und Jungen verfügbar. Sagen Sie uns einfach bei der Buchung der kostenlosen Probestunde Ihren Wunsch, und wir finden eine qualifizierte Lehrerin für Ihr Kind.",
      },
      {
        q: "Was brauchen wir für die erste Stunde?",
        a: "Einen Laptop, ein Tablet oder ein Smartphone, einen ruhigen Platz zu Hause und den Zoom- oder Google-Meet-Link, den wir vor der Stunde schicken. Keine Bücher und keine Software zu kaufen — Ihre Lehrkraft bringt alles zur ersten Stunde mit, auch zur kostenlosen Probestunde.",
      },
      {
        q: "Gibt es wirklich eine kostenlose Probestunde?",
        a: "Ja. Jeder Tarif beginnt mit einer kostenlosen 30-minütigen Probestunde. Ihr Kind lernt die Lehrkraft kennen, erlebt eine echte Stunde, und Sie entscheiden danach — zur Buchung sind keine Zahlungsdaten nötig.",
      },
      {
        q: "Können wir in den Schulferien pausieren?",
        a: "Ja. Es gibt keine Mindestlaufzeit, sodass Familien rund um die Schulferien in ihrem Bundesland pausieren oder ihre Stunden verschieben können. Der Standard-Tarif enthält außerdem eine flexible Terminverschiebung, falls eine einzelne Woche einmal nicht passt.",
      },
    ],
    jsonLdName: "Online-Koranunterricht in Deutschland",
    jsonLdDescription:
      "Live-Koranunterricht 1-zu-1 für Familien in Deutschland. Zertifizierte Lehrkräfte, Nachmittags- und Abendtermine nach MEZ/MESZ, kostenlose Probestunde.",
  },
};

export default function GermanyContent() {
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

      {/* ANSWER-FIRST INTRO + KEY FACTS */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xl font-semibold leading-relaxed text-brand">{t.intro}</p>
          <div className="mt-10 rounded-3xl bg-cream p-8 shadow-card">
            <h2 className="font-serif text-2xl font-bold text-brand">{t.factsTitle}</h2>
            <ul className="mt-5 space-y-3">
              {t.facts.map((fact) => (
                <li key={fact} className="flex gap-3 leading-relaxed text-ink/80">
                  <span className="mt-0.5 text-gold-dark" aria-hidden="true">
                    ✓
                  </span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
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
            {section.bullets && (
              <ul className="mt-6 space-y-2.5">
                {section.bullets.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-ink/80">
                    <span className="mt-0.5 text-gold-dark" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
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

      {/* CITIES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow={t.citiesEyebrow}
            title={t.citiesTitle}
            subtitle={t.citiesBody}
          />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {t.cities.map((city) =>
              city === "Berlin" ? (
                <Link
                  key={city}
                  href="/online-quran-classes-berlin"
                  className="rounded-full bg-brand px-6 py-3 text-base font-bold text-white shadow-card transition hover:bg-brand-light"
                >
                  {city} →
                </Link>
              ) : (
                <span
                  key={city}
                  className="rounded-full bg-cream px-6 py-3 text-base font-semibold text-brand shadow-card"
                >
                  {city}
                </span>
              )
            )}
          </div>
          <p className="mt-10 text-center leading-relaxed text-ink/70">
            {t.berlinNote}{" "}
            <Link
              href="/online-quran-classes-berlin"
              className="font-bold text-brand hover:underline"
            >
              {t.berlinLinkLabel}
            </Link>
          </p>
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
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading eyebrow={t.faqEyebrow} title={t.faqTitle} />
          <div className="mt-12 space-y-6">
            {t.faqs.map((faq) => (
              <div key={faq.q} className="rounded-3xl bg-cream p-8 shadow-card">
                <h3 className="font-serif text-xl font-bold text-brand">{faq.q}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{faq.a}</p>
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
