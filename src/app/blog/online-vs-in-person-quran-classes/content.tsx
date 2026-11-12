"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLocale, type Locale } from "@/lib/i18n";
import { CtaBand } from "@/components/Shared";

const BASE_URL = "https://onlinekoran.de";
const SLUG = "/blog/online-vs-in-person-quran-classes";

// Cover image: mosque interior. Verified HTTP 200 on 2026-11-12.
const COVER =
  "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1600&q=80";

const EN_META = {
  title: "Online vs In-Person Quran Classes: Honest Comparison",
  description:
    "Online 1-on-1 lessons, mosque school or a home tutor — which fits your family? An honest comparison of cost, flexibility, personal attention and community.",
};

const DE_META = {
  title: "Online-Koranunterricht vs. Koranschule: Ein Vergleich",
  description:
    "Online-Einzelunterricht, Koranschule oder Privatlehrer — was passt zu Ihrer Familie? Ein ehrlicher Vergleich von Kosten, Flexibilität, Betreuung & Gemeinschaft.",
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
    category: "Guides",
    readTime: "8 min read",
    title: "Online vs In-Person Quran Classes: An Honest Comparison",
    intro:
      "Online one-to-one Quran classes, mosque school and a home tutor all work — but they suit different families. Online lessons win on flexibility, personalisation and scheduling; mosque school wins on community and social contact; a home tutor offers face-to-face teaching at the highest cost. Many families combine online lessons with mosque school and get the best of both.",
    coverAlt: "Interior of a mosque with arches and soft light",
    author: "By the Online Quran teaching team",
    updated: "Last updated: 12 November 2026",
    sections: [
      {
        heading: "Online vs in-person Quran classes: how do they compare?",
        paragraphs: [
          "The three main options — online one-to-one lessons, mosque school (Koranschule) and an in-person home tutor — differ most in flexibility, personalisation and cost. Online lessons offer the most personal attention at a fixed monthly price; mosque school offers community at low cost; a home tutor offers face-to-face teaching, usually at the highest price. See the table below.",
          "No option wins on every row. That is the honest truth — and it is why the right choice depends on your child, your schedule and what your local mosque offers. A family in a small town with no mosque school nearby faces a different decision from a family in Berlin-Neukölln with three Koranschulen nearby.",
        ],
        table: {
          headers: ["", "Online 1-on-1", "Mosque school", "In-person tutor"],
          rows: [
            [
              "Schedule flexibility",
              "High — evenings & weekends, Germany time",
              "Fixed — usually weekends or set weekdays",
              "Medium — depends on the tutor's availability",
            ],
            [
              "Personal attention",
              "Full — the lesson is built around one student",
              "Shared — one teacher for a group of children",
              "Full — one-to-one at your home",
            ],
            [
              "Cost",
              "$35–$99/month (our plans), fixed",
              "Usually a small monthly contribution — varies by mosque",
              "Usually the highest per-hour cost",
            ],
            [
              "Social contact",
              "Low — the child learns alone with the tutor",
              "High — learning alongside other children",
              "Low — one-to-one, no classmates",
            ],
            [
              "Teacher choice",
              "Wide — certified tutors matched to your child",
              "Limited — whoever teaches at your local mosque",
              "Limited — whoever is available nearby",
            ],
            [
              "Commute",
              "None — lessons at home",
              "Travel to the mosque, often on weekends",
              "None — the tutor comes to you",
            ],
            [
              "Safeguarding",
              "Parents can sit nearby and listen in",
              "Group setting with other adults present",
              "Parents present at home",
            ],
            [
              "Pace",
              "Adapts to the child — faster or slower as needed",
              "Group pace — set by the class",
              "Adapts to the child",
            ],
          ],
        },
      },
      {
        heading: "When is online learning the better choice?",
        paragraphs: [
          "Online learning is the better choice when flexibility and personal attention matter most: busy family schedules, no good mosque school nearby, a child who needs an individual pace, or a specific request such as a female teacher. It also suits families in smaller towns and rural areas, where qualified Quran teachers are hard to find locally.",
          "One-to-one online lessons also make the most of limited time. In a 30-minute group lesson, your child might read aloud for five minutes; in a 30-minute one-to-one lesson, the whole half hour is theirs. For reading and Tajweed, that difference matters.",
        ],
        list: [
          "Your evenings are busy — online lessons fit around school, homework and activities.",
          "Your child reads much faster — or slower — than their age group, and a group pace frustrates them.",
          "You want a female teacher for your daughter or for yourself.",
          "The nearest mosque school is far away, full, or has a waiting list.",
          "You want to hear exactly how your child is progressing, with a monthly report.",
        ],
      },
      {
        heading: "When is in-person learning the better choice?",
        paragraphs: [
          "In-person learning is the better choice when your child thrives on company, when your local mosque school is strong, or when your child struggles to focus on a screen. Children who love being with friends often learn happily in a group, and the friendships and community ties built at mosque school are something no online lesson can replace.",
          "A strong local Koranschule is a gift: your child learns alongside neighbours, practises Arabic with friends, and grows up feeling part of a community. If your mosque school has good teachers and a programme your child enjoys, there is no reason to leave it. Some children also simply concentrate better face to face than on a screen.",
          "An in-person home tutor suits families who want the personal attention of one-to-one teaching with the warmth of face-to-face contact, and who can afford the higher cost. The challenge is finding one: qualified Quran tutors are scarce in many parts of Germany, and a good tutor's calendar fills quickly.",
        ],
      },
      {
        heading: "Can online classes replace mosque school?",
        paragraphs: [
          "Online classes are best seen as a complement to mosque school, not a replacement for it. Mosque school gives children community, friendship and a shared Islamic environment; online one-to-one lessons give them individual reading progress that a group class cannot match. Many families use both — mosque school for community and Islamic studies, online lessons for reading and Tajweed.",
          "This combination works well in practice. A child who attends mosque school on Saturday mornings and has two or three short online lessons during the week gets the social side and the individual attention — and the two reinforce each other.",
          "We say this as an online academy: if your family already has a good mosque school, keep it. Our lessons are designed to fit alongside it — short, in the evening, in Germany time — so your child gets individual teaching without giving up their community.",
        ],
      },
      {
        heading: "Is online Quran learning effective for children?",
        paragraphs: [
          "Yes — online Quran learning works well for children when three conditions are met: lessons are live and one-to-one (not pre-recorded videos), lessons are short enough for the child's age, and a parent stays nearby for younger children. With those conditions, children progress at least as fast online as in person — often faster, because every minute is theirs.",
          "The honest caveat is screen time. Young children should not spend long hours in front of a screen, which is why our lessons for young children are 25 minutes and broken into varied activities. Short, focused lessons are very different from passive screen time, but parents are right to keep the total in balance.",
        ],
      },
      {
        heading: "What does online Quran learning cost?",
        paragraphs: [
          "Our live one-to-one online Quran lessons cost $35–$99 per month, depending on the plan. Basic is $35 a month (4 classes a week, 25 minutes each); Standard is $59 (5 a week, 30 minutes); Hifz Intensive is $99 (5 a week, 45 minutes). Every plan starts with a free 30-minute trial class.",
          "Prices are in USD, with the EUR equivalent charged at checkout at the current rate, and there is no lock-in or hidden fee. A second child from the same family receives a 10% sibling discount. Compared with an in-person tutor — usually charged by the hour — a fixed monthly plan is often the more predictable option for a family budget.",
        ],
        table: {
          headers: ["Plan", "Classes per week", "Minutes per class", "Price"],
          rows: [
            ["Basic", "4", "25", "$35/month"],
            ["Standard (most popular)", "5", "30", "$59/month"],
            ["Hifz Intensive", "5", "45", "$99/month"],
          ],
        },
      },
    ],
    faqHeading: "Frequently asked questions",
    faqs: [
      {
        q: "Are online Quran classes as good as in-person classes?",
        a: "For reading and Tajweed, one-to-one online lessons are often more effective than group classes, because the whole lesson is devoted to one student and the teacher corrects every mistake. For community and Islamic studies in a group, mosque school is better. The two complement each other — many families use both.",
      },
      {
        q: "How old should a child be for online Quran classes?",
        a: "Children can start online lessons from age 4, with short 25-minute classes broken into varied activities. A parent should stay nearby for younger children. Older children and teenagers handle longer lessons easily and often prefer the focus of one-to-one teaching.",
      },
      {
        q: "What equipment do we need for online Quran classes?",
        a: "A laptop, tablet or phone with a camera and microphone, and a stable internet connection — that is all. Lessons run on Zoom or Google Meet, and the link is sent before each class. The tutor shares the lesson materials on screen, so no books are needed for the first lesson.",
      },
      {
        q: "Can my child attend mosque school and take online classes?",
        a: "Yes — and many families do exactly that. Mosque school gives community and Islamic studies; online one-to-one lessons give individual reading progress. Our evening lessons are designed to fit around mosque school, school and family life, in Germany time.",
      },
      {
        q: "How much do online Quran classes cost?",
        a: "Our plans cost $35–$99 per month: Basic $35 (4 classes a week, 25 minutes), Standard $59 (5 a week, 30 minutes) and Hifz Intensive $99 (5 a week, 45 minutes). Every plan starts with a free 30-minute trial class, and a second child receives a 10% sibling discount.",
      },
    ],
    relatedHeading: "Related guides",
    related: [
      {
        title: "Online Quran Classes in Germany",
        href: "/online-quran-classes-germany",
      },
      {
        title: "How Much Do Online Quran Classes Cost?",
        href: "/blog/how-much-do-online-quran-classes-cost",
      },
      {
        title: "How Online Quran Classes Work",
        href: "/blog/how-online-quran-classes-work",
      },
      {
        title: "How to Choose an Online Quran Teacher",
        href: "/blog/how-to-choose-an-online-quran-teacher",
      },
    ],
    ctaHeading: "See how our online classes work",
    ctaText:
      "Browse our courses and book a free trial class — a real lesson with a certified tutor, no payment details needed.",
    ctaButton: "Browse our courses",
    back: "← Back to all articles",
    breadcrumbHome: "Home",
    breadcrumbBlog: "Blog",
  },
  de: {
    category: "Ratgeber",
    readTime: "8 Min. Lesezeit",
    title: "Online-Koranunterricht vs. Präsenzunterricht: Ein ehrlicher Vergleich",
    intro:
      "Online-Einzelunterricht im Koran, Koranschule und ein Privatlehrer zu Hause funktionieren alle — aber sie passen zu unterschiedlichen Familien. Online-Unterricht gewinnt bei Flexibilität, Individualität und Terminplanung; die Koranschule gewinnt bei Gemeinschaft und sozialem Kontakt; ein Privatlehrer bietet persönlichen Unterricht zum höchsten Preis. Viele Familien kombinieren Online-Unterricht mit der Koranschule und bekommen das Beste aus beiden Welten.",
    coverAlt: "Innenraum einer Moschee mit Bögen und sanftem Licht",
    author: "Vom Lehrteam der Online Quran",
    updated: "Zuletzt aktualisiert: 12. November 2026",
    sections: [
      {
        heading: "Online- und Präsenz-Koranunterricht im Vergleich",
        paragraphs: [
          "Die drei wichtigsten Optionen — Online-Einzelunterricht, Koranschule und ein Privatlehrer zu Hause — unterscheiden sich vor allem in Flexibilität, Individualität und Kosten. Online-Unterricht bietet die größte persönliche Aufmerksamkeit zu einem festen Monatspreis; die Koranschule bietet Gemeinschaft zu geringen Kosten; ein Privatlehrer bietet persönlichen Unterricht, meist zum höchsten Preis. Siehe die Tabelle unten.",
          "Keine Option gewinnt in jeder Zeile. Das ist die ehrliche Wahrheit — und deshalb hängt die richtige Wahl von Ihrem Kind, Ihrem Zeitplan und dem Angebot Ihrer Moschee vor Ort ab. Eine Familie in einer Kleinstadt ohne Koranschule in der Nähe steht vor einer anderen Entscheidung als eine Familie in Berlin-Neukölln mit drei Koranschulen in Fußweite.",
        ],
        table: {
          headers: ["", "Online 1-zu-1", "Koranschule", "Privatlehrer"],
          rows: [
            [
              "Flexibilität der Termine",
              "Hoch — Abende & Wochenenden, deutsche Zeit",
              "Fest — meist Wochenenden oder feste Wochentage",
              "Mittel — hängt von der Verfügbarkeit des Lehrers ab",
            ],
            [
              "Persönliche Aufmerksamkeit",
              "Voll — die Stunde ist auf ein Kind zugeschnitten",
              "Geteilt — eine Lehrkraft für eine Kindergruppe",
              "Voll — Einzelunterricht bei Ihnen zu Hause",
            ],
            [
              "Kosten",
              "35–99 $/Monat (unsere Tarife), fest",
              "Meist ein kleiner Monatsbeitrag — je nach Moschee verschieden",
              "Meist die höchsten Kosten pro Stunde",
            ],
            [
              "Sozialer Kontakt",
              "Gering — das Kind lernt allein mit der Lehrkraft",
              "Hoch — Lernen gemeinsam mit anderen Kindern",
              "Gering — Einzelunterricht, keine Mitschüler",
            ],
            [
              "Lehrerwahl",
              "Groß — zertifizierte Lehrkräfte, passend zu Ihrem Kind",
              "Begrenzt — wer an Ihrer Moschee unterrichtet",
              "Begrenzt — wer in der Nähe verfügbar ist",
            ],
            [
              "Anfahrt",
              "Keine — Unterricht zu Hause",
              "Fahrt zur Moschee, oft am Wochenende",
              "Keine — der Lehrer kommt zu Ihnen",
            ],
            [
              "Kinderschutz",
              "Eltern können in der Nähe sitzen und zuhören",
              "Gruppenumfeld mit anderen Erwachsenen",
              "Eltern sind zu Hause anwesend",
            ],
            [
              "Tempo",
              "Passt sich dem Kind an — schneller oder langsamer nach Bedarf",
              "Gruppentempo — von der Klasse vorgegeben",
              "Passt sich dem Kind an",
            ],
          ],
        },
      },
      {
        heading: "Wann ist Online-Unterricht die bessere Wahl?",
        paragraphs: [
          "Online-Unterricht ist die bessere Wahl, wenn Flexibilität und persönliche Aufmerksamkeit am wichtigsten sind: volle Familienzeitpläne, keine gute Koranschule in der Nähe, ein Kind, das ein individuelles Tempo braucht, oder ein besonderer Wunsch wie eine Lehrerin. Er eignet sich auch für Familien in kleineren Städten und ländlichen Gebieten, wo qualifizierte Koranlehrer schwer zu finden sind.",
          "Online-Einzelunterricht nutzt begrenzte Zeit auch am besten. In einer 30-minütigen Gruppenstunde liest Ihr Kind vielleicht fünf Minuten laut vor; in einer 30-minütigen Einzelstunde gehört die ganze halbe Stunde ihm. Für Lesen und Tadschwied — Fertigkeiten, die durch lautes Lesen und Korrigieren aufgebaut werden — macht dieser Unterschied viel aus.",
        ],
        list: [
          "Ihre Abende sind voll — Online-Stunden passen sich Schule, Hausaufgaben und Aktivitäten an.",
          "Ihr Kind liest viel schneller — oder langsamer — als seine Altersgruppe, und das Gruppentempo frustriert es.",
          "Sie wünschen sich eine Lehrerin für Ihre Tochter oder für sich selbst.",
          "Die nächste Koranschule ist weit weg, voll oder hat eine Warteliste.",
          "Sie möchten genau hören, wie Ihr Kind vorankommt — mit einem monatlichen Bericht.",
        ],
      },
      {
        heading: "Wann ist Präsenzunterricht die bessere Wahl?",
        paragraphs: [
          "Präsenzunterricht ist die bessere Wahl, wenn Ihr Kind in Gesellschaft aufblüht, wenn Ihre Koranschule vor Ort stark ist oder wenn Ihr Kind Schwierigkeiten hat, sich auf einen Bildschirm zu konzentrieren. Kinder, die gern mit Freunden zusammen sind, lernen oft glücklich in einer Gruppe, und die Freundschaften und Gemeinschaftsbande, die in der Koranschule entstehen, kann keine Online-Stunde ersetzen.",
          "Eine starke Koranschule vor Ort ist ein Geschenk: Ihr Kind lernt gemeinsam mit Nachbarn, übt Arabisch mit Freunden und wächst mit dem Gefühl auf, Teil einer Gemeinschaft zu sein. Wenn Ihre Koranschule gute Lehrkräfte, vernünftige Klassengrößen und ein Programm hat, das Ihrem Kind Freude macht, gibt es keinen Grund, sie zu verlassen. Manche Kinder konzentrieren sich auch einfach besser von Angesicht zu Angesicht als auf einem Bildschirm — und das ist ein vollkommen guter Grund für Präsenzunterricht.",
          "Ein Privatlehrer zu Hause passt zu Familien, die die persönliche Aufmerksamkeit des Einzelunterrichts mit der Wärme des persönlichen Kontakts wünschen und die höheren Kosten tragen können. Die Herausforderung ist, einen zu finden: Qualifizierte Koranlehrer sind in vielen Teilen Deutschlands rar, und der Kalender eines guten Lehrers füllt sich schnell.",
        ],
      },
      {
        heading: "Kann Online-Unterricht die Koranschule ersetzen?",
        paragraphs: [
          "Online-Unterricht sollte man am besten als Ergänzung zur Koranschule sehen, nicht als Ersatz. Die Koranschule gibt Kindern Gemeinschaft, Freundschaft und ein gemeinsames islamisches Umfeld; Online-Einzelunterricht gibt ihnen individuelle Lesefortschritte, die eine Gruppenstunde nicht bieten kann. Viele Familien nutzen beides — Koranschule für Gemeinschaft und Islamunterricht, Online-Stunden für Lesen und Tadschwied.",
          "Diese Kombination funktioniert in der Praxis gut. Ein Kind, das samstagvormittags die Koranschule besucht und unter der Woche zwei oder drei kurze Online-Stunden hat, bekommt die soziale Seite und die individuelle Aufmerksamkeit — und beides verstärkt sich gegenseitig. Was das Kind online liest, kann es selbstbewusst unter Freunden rezitieren; was es in der Moschee über den Islam lernt, trägt es in sein Lesen hinein.",
          "Das sagen wir als Online-Akademie: Wenn Ihre Familie bereits eine gute Koranschule hat, behalten Sie sie. Unsere Stunden sind so konzipiert, dass sie daneben passen — kurz, am Abend, nach deutscher Zeit —, sodass Ihr Kind individuellen Unterricht bekommt, ohne seine Gemeinschaft aufzugeben.",
        ],
      },
      {
        heading: "Ist Online-Koranunterricht für Kinder sinnvoll?",
        paragraphs: [
          "Ja — Online-Koranunterricht funktioniert gut für Kinder, wenn drei Bedingungen erfüllt sind: Die Stunden sind live und im Einzelunterricht mit einer Lehrkraft (keine Aufzeichnungen), die Stunden sind altersgerecht kurz, und ein Elternteil bleibt bei jüngeren Kindern in der Nähe. Unter diesen Bedingungen kommen Kinder online mindestens so schnell voran wie im Präsenzunterricht — oft schneller, weil jede Minute ihnen gehört.",
          "Der ehrliche Vorbehalt ist die Bildschirmzeit. Kleine Kinder sollten keine langen Stunden vor einem Bildschirm verbringen — deshalb sind unsere Stunden für kleine Kinder 25 Minuten lang und in abwechslungsreiche Aktivitäten aufgeteilt. Kurze, fokussierte Stunden — mit einer Lehrkraft, die Ihr Kind kennt — sind etwas ganz anderes als passive Bildschirmzeit, aber Eltern tun gut daran, das Gesamtmaß im Blick zu behalten.",
        ],
      },
      {
        heading: "Was kostet Online-Koranunterricht?",
        paragraphs: [
          "Unser Live-Online-Einzelunterricht im Koran kostet 35–99 $ pro Monat, je nach Tarif. Basis kostet 35 $ im Monat (4 Stunden pro Woche, je 25 Minuten); Standard kostet 59 $ (5 Stunden pro Woche, je 30 Minuten); Hifz Intensiv kostet 99 $ (5 Stunden pro Woche, je 45 Minuten). Jeder Tarif beginnt mit einer kostenlosen 30-minütigen Probestunde.",
          "Die Preise sind in USD angegeben; an der Kasse wird der Euro-Gegenwert zum aktuellen Kurs berechnet, und es gibt keine Mindestlaufzeit oder versteckten Kosten. Ein zweites Kind aus derselben Familie erhält 10 % Geschwisterrabatt. Verglichen mit einem Privatlehrer — meist pro Stunde abgerechnet — ist ein fester Monatstarif für ein Familienbudget oft die planbarere Option.",
        ],
        table: {
          headers: ["Tarif", "Stunden pro Woche", "Minuten pro Stunde", "Preis"],
          rows: [
            ["Basis", "4", "25", "35 $/Monat"],
            ["Standard (am beliebtesten)", "5", "30", "59 $/Monat"],
            ["Hifz Intensiv", "5", "45", "99 $/Monat"],
          ],
        },
      },
    ],
    faqHeading: "Häufig gestellte Fragen",
    faqs: [
      {
        q: "Ist Online-Koranunterricht genauso gut wie Präsenzunterricht?",
        a: "Für Lesen und Tadschwied ist Online-Einzelunterricht oft wirksamer als Gruppenunterricht, weil die ganze Stunde einem Schüler gewidmet ist und die Lehrkraft jeden Fehler korrigiert. Für Gemeinschaft, Freundschaft und Islamunterricht in der Gruppe ist die Koranschule besser. Beides ergänzt sich — viele Familien nutzen beides.",
      },
      {
        q: "Wie alt sollte ein Kind für Online-Koranunterricht sein?",
        a: "Kinder können ab 4 Jahren mit Online-Stunden beginnen, mit kurzen 25-minütigen Stunden, die in abwechslungsreiche Aktivitäten aufgeteilt sind. Ein Elternteil sollte bei jüngeren Kindern in der Nähe bleiben. Ältere Kinder und Jugendliche kommen mit längeren Stunden gut zurecht und schätzen oft den Fokus des Einzelunterrichts.",
      },
      {
        q: "Welche Ausstattung brauchen wir für Online-Koranunterricht?",
        a: "Einen Laptop, ein Tablet oder ein Handy mit Kamera und Mikrofon und eine stabile Internetverbindung — mehr nicht. Die Stunden laufen über Zoom oder Google Meet, und der Link wird vor jeder Stunde geschickt. Die Lehrkraft teilt die Unterrichtsmaterialien auf dem Bildschirm, sodass für die erste Stunde keine Bücher nötig sind.",
      },
      {
        q: "Kann mein Kind die Koranschule besuchen und Online-Stunden nehmen?",
        a: "Ja — und viele Familien machen genau das. Die Koranschule gibt Gemeinschaft und Islamunterricht; Online-Einzelunterricht gibt individuelle Lesefortschritte. Unsere Abendstunden sind so konzipiert, dass sie zu Koranschule, Schule und Familienleben passen — nach deutscher Zeit.",
      },
      {
        q: "Was kostet Online-Koranunterricht?",
        a: "Unsere Tarife kosten 35–99 $ pro Monat: Basis 35 $ (4 Stunden pro Woche, 25 Minuten), Standard 59 $ (5 Stunden pro Woche, 30 Minuten) und Hifz Intensiv 99 $ (5 Stunden pro Woche, 45 Minuten). Jeder Tarif beginnt mit einer kostenlosen 30-minütigen Probestunde, und ein zweites Kind erhält 10 % Geschwisterrabatt.",
      },
    ],
    relatedHeading: "Verwandte Ratgeber",
    related: [
      {
        title: "Online-Koranunterricht in Deutschland",
        href: "/online-quran-classes-germany",
      },
      {
        title: "Was kostet Online-Koranunterricht?",
        href: "/blog/how-much-do-online-quran-classes-cost",
      },
      {
        title: "Wie funktioniert Online-Koranunterricht?",
        href: "/blog/how-online-quran-classes-work",
      },
      {
        title: "Den richtigen Koranlehrer finden",
        href: "/blog/how-to-choose-an-online-quran-teacher",
      },
    ],
    ctaHeading: "Sehen Sie, wie unser Online-Unterricht funktioniert",
    ctaText:
      "Stöbern Sie in unseren Kursen und buchen Sie eine kostenlose Probestunde — eine echte Stunde mit einer zertifizierten Lehrkraft, ohne Angabe von Zahlungsdaten.",
    ctaButton: "Alle Kurse ansehen",
    back: "← Zurück zu allen Artikeln",
    breadcrumbHome: "Start",
    breadcrumbBlog: "Blog",
  },
};

export default function OnlineVsInPersonContent() {
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
              href="/courses"
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
