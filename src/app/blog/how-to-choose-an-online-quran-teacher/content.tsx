"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { CtaBand } from "@/components/Shared";

const BASE_URL = "https://onlinekoran.de";
const SLUG = "/blog/how-to-choose-an-online-quran-teacher";
// Cover image assigned for this guide (curl-verified HTTP 200): teacher teaching on a laptop.
const COVER =
  "https://images.pexels.com/photos/6937687/pexels-photo-6937687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const EN_META = {
  title: "How to Choose an Online Quran Teacher: 12 Questions",
  description:
    "Twelve questions to ask before you book an online Quran teacher — Ijazah, Tajweed, safeguarding, trial and pricing. A checklist for parents in Germany.",
};

const DE_META = {
  title: "Koranlehrer online finden: 12 Fragen vor der Buchung",
  description:
    "Zwölf Fragen, die Sie vor der Buchung stellen sollten — Idschaza, Tadschwied, Kinderschutz, Probestunde und Preise. Eine Checkliste für Eltern in Deutschland.",
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
    readTime: "7 min read",
    title: "How to Choose an Online Quran Teacher: 12 Questions to Ask",
    intro:
      "Choose an online Quran teacher by checking four things first: real qualifications (an Ijazah with a sanad), experience with your age group, safeguarding for children, and a free trial class. This guide gives you twelve questions to ask any academy or tutor — and the answers you should expect — before you book a single lesson.",
    coverAlt: "A Quran teacher giving an online lesson on a laptop",
    author: "By the Online Quran teaching team",
    updated: "Last updated: 12 November 2026",
    sections: [
      {
        heading: "Why the right teacher matters more than the right app",
        paragraphs: [
          "Apps and videos can teach the alphabet, but they cannot hear you. Quran recitation is learned mouth to ear — a teacher listens to every letter you say and corrects it in the moment, before a mistake becomes a habit. The wrong teacher, or no teacher at all, means months of practising errors you cannot hear yourself.",
          "That is why choosing a teacher deserves the same care as choosing a school. The twelve questions below take about ten minutes to work through, and they separate serious academies from marketplaces that simply match you with whoever is available. Ask them before you pay for anything — a good academy will welcome them.",
        ],
      },
      {
        heading: "The 12 questions to ask before you book",
        paragraphs: [
          "Work through the list in order. The first four questions — qualifications, Tajweed training, experience and safeguarding — are the ones that matter most; the rest protect your time, your money and your child's progress.",
        ],
        subsections: [
          {
            heading: "1. Does the teacher hold an Ijazah, and can they show the sanad?",
            paragraphs: [
              "An Ijazah is a formal licence to teach the Quran, granted by a teacher who holds one themselves — the chain of teachers, the sanad, runs back through generations to the Prophet ﷺ. It is the single strongest proof that a teacher's recitation has been checked, letter by letter, by someone qualified to judge it. Ask to see it: a genuine Ijazah names the teacher, the riwayah (usually Hafs 'an 'Asim) and the chain. Vague claims of being “certified”, with no named chain, are not the same thing.",
            ],
          },
          {
            heading: "2. What Tajweed training have they had?",
            paragraphs: [
              "Every Quran teacher should be able to explain the rules of Tajweed — makhraj, ghunnah, madd, the rules of noon sakinah — and demonstrate them, not just recite from memory. Ask where they studied Tajweed and for how long. A teacher who learned recitation only by listening, without formal Tajweed study, may recite beautifully but struggle to explain why a rule applies — and explanation is what a student needs.",
            ],
          },
          {
            heading: "3. Have they taught children — or adults — like me before?",
            paragraphs: [
              "Teaching a seven-year-old and teaching a forty-year-old beginner are different skills. A teacher experienced with children knows how to hold a short attention span, use praise and short goals, and keep a lesson warm and fun. An adult beginner needs patience, a different pace and an honest conversation about goals. Ask who the teacher usually teaches, and whether they have worked with students at your level.",
            ],
          },
          {
            heading: "4. What safeguarding and background checks are in place?",
            paragraphs: [
              "If your child will be alone on a video call with an adult, safeguarding is not optional. Ask whether tutors are background-checked, whether parents can observe lessons, and whether the academy has a written child-protection policy you can read. A serious academy answers these questions immediately and in writing — if the answer is vague, walk away.",
            ],
            links: [
              { href: "/safeguarding", label: "Read our safeguarding policy" },
            ],
          },
          {
            heading: "5. Can I try a free trial class first?",
            paragraphs: [
              "Never pay before a trial. A free trial class lets you hear the teacher, watch how they handle your child, and judge the connection quality and lesson style — things no website can show you. The trial should be a real lesson, not a sales call, and it should come with no obligation and no payment details taken upfront. At Online Quran every plan starts with a free 30-minute trial class.",
            ],
          },
          {
            heading: "6. What teaching method and curriculum do they follow?",
            paragraphs: [
              "Good teaching follows a path: Noorani Qaida for beginners, then fluent reading (Nazra), then Tajweed, then Hifz or Tafseer for those who want to go further. Ask what curriculum the academy uses, how progress is measured, and what your child will be able to do after three months. “We just read together” is not a curriculum — it is a reading club.",
            ],
          },
          {
            heading: "7. Which languages does the teacher speak?",
            paragraphs: [
              "The Quran is in Arabic, but explanations need a language you actually understand. In Germany that usually means English, German, Turkish or Urdu — ask which languages your teacher speaks fluently, and whether instructions and progress reports come in that language. A teacher who speaks your family's language can explain a rule in seconds that would otherwise take a whole lesson of gestures.",
            ],
          },
          {
            heading: "8. How flexible is scheduling — and what about Germany time?",
            paragraphs: [
              "Lessons must fit the German school day: after-school and evening slots in CET/CEST, with room for school holidays by Bundesland and for Ramadan. Ask whether you can choose your own days, how far ahead you book, and what happens when you need to move a lesson. A fixed timetable set in another time zone is a warning sign — your family's routine should decide the schedule, not the academy's.",
            ],
          },
          {
            heading: "9. How will I know my child is progressing?",
            paragraphs: [
              "You should never have to guess. Ask for a written progress report — what your child has covered, what they can now do, and what comes next — at least once a month, plus a chance to speak with the teacher. Online Quran's plans include a monthly progress report for parents, and the Standard plan adds a parent check-in. If an academy cannot show you a sample report, it probably does not produce one.",
            ],
          },
          {
            heading: "10. Is the pricing clear and transparent?",
            paragraphs: [
              "The full price should be on the website before you book: per month, per week, per lesson length, with no setup fee and no surprise charges. Ask what happens at checkout — our plans, for example, are priced in USD and the EUR equivalent is charged at checkout at the current rate — and whether there is a sibling discount (ours is 10% off a second child's plan). If you have to message someone to learn the price, the price is probably not simple.",
            ],
            links: [{ href: "/pricing", label: "See our pricing" }],
          },
          {
            heading: "11. What are the cancellation and pause terms?",
            paragraphs: [
              "Life changes: holidays, exams, a move. Ask whether you can pause or cancel without a notice period or penalty, and whether unused lessons carry over. A fair academy has no lock-in — you stay because the lessons are good, not because a contract says so. Get the terms in writing before the first payment, not after.",
            ],
          },
          {
            heading: "12. Can I read genuine reviews from real families?",
            paragraphs: [
              "Real reviews name real experiences: a child's progress, a teacher's patience, a scheduling problem that got fixed. Look for reviews on independent platforms, not only on the academy's own website, and be suspicious of pages full of five-star praise with no detail and no names. Ask the academy whether you can speak to a current family — a confident academy will say yes.",
            ],
          },
        ],
      },
      {
        heading: "Red flags: when to walk away",
        paragraphs: [
          "Any one of these on its own is a reason to pause; two or more mean you should look elsewhere.",
        ],
        list: [
          "No named teachers and no qualifications shown anywhere on the site.",
          "No free trial — payment demanded before you meet the teacher.",
          "No safeguarding policy, or a vague answer when you ask about child protection.",
          "Prices hidden behind a form or a WhatsApp message.",
          "Group classes sold as “1-on-1” — or a waiting list before your child can even start.",
          "Pressure to pay for months upfront with a “today only” discount.",
        ],
      },
      {
        heading: "A teacher is a trust (amanah)",
        paragraphs: [
          "The teacher you choose will shape how your child hears the words of Allah for the rest of their life. Take the twelve questions, use them on us and on anyone else you consider — and choose the teacher whose answers you trust.",
        ],
      },
    ],
    faqHeading: "Frequently asked questions",
    faqs: [
      {
        q: "Should my child have a male or female teacher?",
        a: "Either can be excellent — what matters is qualification, experience with children, and your child's comfort. Many families prefer a female teacher for young children and for girls. Online Quran has male and female tutors; ask when you book your free trial class.",
      },
      {
        q: "How much should online Quran classes cost?",
        a: "Live 1-on-1 lessons in Germany typically cost $35–$99 per month depending on frequency. Our plans are Basic $35 (4 classes a week, 25 minutes), Standard $59 (5 a week, 30 minutes) and Hifz Intensive $99 (5 a week, 45 minutes). See the pricing page for the full breakdown.",
      },
      {
        q: "What if my child doesn't like the teacher?",
        a: "Then change teacher — the trial class exists to check the fit before you commit, and any good academy will offer a different tutor without a fuss. A teacher your child likes is a teacher your child will learn from.",
      },
      {
        q: "Does an online Quran teacher need to speak German?",
        a: "Not necessarily — English works for many families in Germany — but explanations in a language your child understands make a real difference. Ask which languages your tutor speaks before you book.",
      },
      {
        q: "Is one lesson a week enough?",
        a: "For steady progress, most children need at least three to four short lessons a week. Our plans start at four classes a week, because short, frequent lessons beat one long weekly session.",
      },
    ],
    relatedHeading: "Related guides",
    related: [
      {
        href: "/blog/choosing-quran-tutor",
        label: "How to Choose an Online Quran Tutor",
      },
      {
        href: "/blog/how-online-quran-classes-work",
        label: "How Online Quran Classes Work",
      },
      { href: "/blog/what-is-tajweed", label: "What Is Tajweed?" },
      {
        href: "/blog/how-much-do-online-quran-classes-cost",
        label: "How Much Do Online Quran Classes Cost?",
      },
      { href: "/teachers", label: "Meet our teachers" },
      { href: "/safeguarding", label: "Safeguarding & child protection" },
    ],
    nextStep: {
      heading: "Put the checklist to the test",
      body: "The fastest way to judge a teacher is to meet one. Book a free 30-minute trial class — a real lesson, no payment details — and see how our Tajweed teaching works in practice.",
      courseLabel: "See the Tajweed course",
      courseHref: "/courses/tajweed",
      trialLabel: "Book your free trial class",
    },
    back: "← Back to all articles",
  },
  de: {
    crumbHome: "Startseite",
    crumbBlog: "Blog",
    category: "Ratgeber",
    readTime: "7 Min. Lesezeit",
    title: "Koranlehrer online finden: 12 Fragen, die Sie stellen sollten",
    intro:
      "Einen Online-Koranlehrer wählt man zuerst nach vier Dingen aus: echten Qualifikationen (einer Idschaza mit Sanad), Erfahrung mit der eigenen Altersgruppe, Kinderschutz — und einer kostenlosen Probestunde. Dieser Leitfaden gibt Ihnen zwölf Fragen an die Hand, die Sie jeder Akademie oder Lehrkraft stellen sollten — und die Antworten, die Sie erwarten dürfen — bevor Sie eine einzige Stunde buchen.",
    coverAlt: "Ein Koranlehrer gibt Online-Unterricht am Laptop",
    author: "Vom Lehrteam der Online Quran",
    updated: "Zuletzt aktualisiert: 12. November 2026",
    sections: [
      {
        heading: "Warum die richtige Lehrkraft wichtiger ist als die richtige App",
        paragraphs: [
          "Apps und Videos können das Alphabet vermitteln, aber sie können Sie nicht hören. Die Rezitation des Korans lernt man von Mund zu Ohr: Eine Lehrkraft hört jeden Buchstaben, den Sie sprechen, und korrigiert ihn im Moment — bevor aus einem Fehler eine Gewohnheit wird. Die falsche Lehrkraft — oder gar keine — bedeutet monatelanges Üben von Fehlern, die man selbst nicht hört.",
          "Deshalb verdient die Wahl der Lehrkraft dieselbe Sorgfalt wie die Wahl einer Schule. Die zwölf Fragen unten brauchen etwa zehn Minuten, und sie trennen seriöse Akademien von Vermittlungsplattformen, die Sie einfach mit der nächstbesten Person zusammenbringen. Stellen Sie sie, bevor Sie für irgendetwas bezahlen — eine gute Akademie wird sie begrüßen.",
        ],
      },
      {
        heading: "Die 12 Fragen vor der Buchung",
        paragraphs: [
          "Arbeiten Sie die Liste der Reihe nach durch. Die ersten vier Fragen — Qualifikation, Tadschwied-Ausbildung, Erfahrung und Kinderschutz — sind die wichtigsten; die übrigen schützen Ihre Zeit, Ihr Geld und den Fortschritt Ihres Kindes.",
        ],
        subsections: [
          {
            heading: "1. Hat die Lehrkraft eine Idschaza — und kann sie den Sanad zeigen?",
            paragraphs: [
              "Eine Idschaza (Ijazah) ist eine formale Lehrerlaubnis für den Koran, erteilt von einer Lehrkraft, die selbst eine besitzt — die Kette der Lehrer, der Sanad, reicht über Generationen zurück bis zum Propheten ﷺ. Sie ist der stärkste Nachweis dafür, dass die Rezitation einer Lehrkraft Buchstabe für Buchstabe von jemandem geprüft wurde, der dazu qualifiziert ist. Lassen Sie sie sich zeigen: Eine echte Idschaza nennt die Lehrkraft, die Lesart (meist Hafs 'an 'Asim) und die Kette. Vage Angaben wie „zertifiziert“ ohne benannte Kette sind nicht dasselbe.",
            ],
          },
          {
            heading: "2. Welche Tadschwied-Ausbildung hat die Lehrkraft?",
            paragraphs: [
              "Jede Koranlehrkraft sollte die Regeln des Tadschwied (Tajweed) erklären können — Machradsch, Ghunna, Madd, die Regeln von Nun Sakinah — und sie vormachen, nicht nur aus dem Gedächtnis rezitieren. Fragen Sie, wo und wie lange sie Tadschwied studiert hat. Wer die Rezitation nur durch Zuhören gelernt hat, ohne formale Tadschwied-Ausbildung, rezitiert vielleicht wunderschön, kann aber schwer erklären, warum eine Regel gilt — und Erklärung ist genau das, was ein Schüler braucht.",
            ],
          },
          {
            heading: "3. Hat sie schon Kinder — oder Erwachsene — wie mich unterrichtet?",
            paragraphs: [
              "Ein siebenjähriges Kind und einen vierzigjährigen Anfänger zu unterrichten, sind verschiedene Fähigkeiten. Eine Lehrkraft mit Kindererfahrung weiß, wie man eine kurze Aufmerksamkeitsspanne hält, mit Lob und kleinen Zielen arbeitet und die Stunde warm und fröhlich gestaltet. Ein erwachsener Anfänger braucht Geduld, ein anderes Tempo und ein ehrliches Gespräch über Ziele. Fragen Sie, wen die Lehrkraft üblicherweise unterrichtet und ob sie mit Schülern auf Ihrem Niveau gearbeitet hat.",
            ],
          },
          {
            heading: "4. Welche Schutzmaßnahmen und Überprüfungen gibt es?",
            paragraphs: [
              "Wenn Ihr Kind allein mit einem Erwachsenen in einem Videoanruf sitzt, ist Kinderschutz nicht verhandelbar. Fragen Sie, ob Lehrkräfte überprüft werden, ob Eltern Stunden verfolgen können und ob die Akademie eine schriftliche Kinderschutzrichtlinie hat, die Sie lesen können. Eine seriöse Akademie beantwortet diese Fragen sofort und schriftlich — ist die Antwort vage, gehen Sie weiter.",
            ],
            links: [
              { href: "/safeguarding", label: "Unsere Kinderschutzrichtlinie lesen" },
            ],
          },
          {
            heading: "5. Kann ich zuerst eine kostenlose Probestunde machen?",
            paragraphs: [
              "Bezahlen Sie nie vor einer Probestunde. Eine kostenlose Probestunde lässt Sie die Lehrkraft hören, sehen, wie sie mit Ihrem Kind umgeht, und die Verbindungsqualität und den Unterrichtsstil beurteilen — Dinge, die keine Website zeigen kann. Die Probestunde sollte eine echte Stunde sein, kein Verkaufsgespräch, und ohne Verpflichtung und ohne Angabe von Zahlungsdaten auskommen. Bei der Online Quran beginnt jeder Tarif mit einer kostenlosen 30-minütigen Probestunde.",
            ],
          },
          {
            heading: "6. Welcher Methode und welchem Lehrplan folgt der Unterricht?",
            paragraphs: [
              "Guter Unterricht folgt einem Weg: Noorani Qaida für Anfänger, dann flüssiges Lesen (Nazra), dann Tadschwied, danach Hifz oder Tafsir für alle, die weitergehen möchten. Fragen Sie, welchen Lehrplan die Akademie nutzt, wie Fortschritt gemessen wird und was Ihr Kind nach drei Monaten können wird. „Wir lesen einfach zusammen“ ist kein Lehrplan — das ist ein Lesekreis.",
            ],
          },
          {
            heading: "7. Welche Sprachen spricht die Lehrkraft?",
            paragraphs: [
              "Der Koran ist auf Arabisch, aber Erklärungen brauchen eine Sprache, die Sie wirklich verstehen. In Deutschland heißt das meist Englisch, Deutsch, Türkisch oder Urdu — fragen Sie, welche Sprachen Ihre Lehrkraft fließend spricht und ob Anweisungen und Fortschrittsberichte in dieser Sprache kommen. Eine Lehrkraft, die die Sprache Ihrer Familie spricht, kann eine Regel in Sekunden erklären, für die sonst eine ganze Stunde Gesten nötig wäre.",
            ],
          },
          {
            heading: "8. Wie flexibel ist die Terminplanung — und was ist mit der deutschen Zeit?",
            paragraphs: [
              "Der Unterricht muss in den deutschen Schulalltag passen: Nachmittags- und Abendtermine nach MEZ/MESZ, mit Raum für Ferien nach Bundesland und für den Ramadan. Fragen Sie, ob Sie Ihre Tage selbst wählen können, wie weit im Voraus man bucht und was passiert, wenn Sie eine Stunde verschieben müssen. Ein fester Stundenplan in einer anderen Zeitzone ist ein Warnsignal — der Alltag Ihrer Familie sollte den Stundenplan bestimmen, nicht die Akademie.",
            ],
          },
          {
            heading: "9. Woher weiß ich, dass mein Kind Fortschritte macht?",
            paragraphs: [
              "Sie sollten nie raten müssen. Fragen Sie nach einem schriftlichen Fortschrittsbericht — was Ihr Kind behandelt hat, was es jetzt kann und was als Nächstes kommt — mindestens einmal im Monat, plus der Möglichkeit, mit der Lehrkraft zu sprechen. Die Tarife der Online Quran enthalten einen monatlichen Fortschrittsbericht für Eltern, der Standard-Tarif zusätzlich ein Elterngespräch. Wenn eine Akademie Ihnen keinen Musterbericht zeigen kann, erstellt sie wahrscheinlich keinen.",
            ],
          },
          {
            heading: "10. Ist die Preisgestaltung klar und transparent?",
            paragraphs: [
              "Der volle Preis sollte vor der Buchung auf der Website stehen: pro Monat, pro Woche, pro Stundendauer, ohne Einrichtungsgebühr und ohne Überraschungen. Fragen Sie, was an der Kasse passiert — unsere Tarife sind zum Beispiel in USD angegeben und der Euro-Gegenwert wird an der Kasse zum aktuellen Kurs berechnet — und ob es einen Geschwisterrabatt gibt (bei uns: 10 % Rabatt auf den Tarif eines zweiten Kindes). Wenn Sie erst eine Nachricht schreiben müssen, um den Preis zu erfahren, ist der Preis wahrscheinlich nicht einfach.",
            ],
            links: [{ href: "/pricing", label: "Unsere Preise ansehen" }],
          },
          {
            heading: "11. Wie sind die Kündigungs- und Pausenbedingungen?",
            paragraphs: [
              "Das Leben ändert sich: Ferien, Prüfungen, ein Umzug. Fragen Sie, ob Sie ohne Frist oder Strafe pausieren oder kündigen können und ob ungenutzte Stunden verfallen. Eine faire Akademie hat keine Mindestlaufzeit — man bleibt, weil die Stunden gut sind, nicht weil ein Vertrag es vorschreibt. Lassen Sie sich die Bedingungen vor der ersten Zahlung schriftlich geben, nicht danach.",
            ],
          },
          {
            heading: "12. Kann ich echte Bewertungen von echten Familien lesen?",
            paragraphs: [
              "Echte Bewertungen nennen echte Erfahrungen: den Fortschritt eines Kindes, die Geduld einer Lehrkraft, ein Terminproblem, das gelöst wurde. Suchen Sie nach Bewertungen auf unabhängigen Plattformen, nicht nur auf der Website der Akademie selbst, und misstrauen Sie Seiten voller Fünf-Sterne-Lob ohne Details und ohne Namen. Fragen Sie die Akademie, ob Sie mit einer aktuellen Familie sprechen können — eine selbstbewusste Akademie sagt Ja.",
            ],
          },
        ],
      },
      {
        heading: "Warnsignale: Wann Sie weitergehen sollten",
        paragraphs: [
          "Jedes einzelne dieser Zeichen ist ein Grund zum Innehalten; zwei oder mehr bedeuten, dass Sie sich anderswo umsehen sollten.",
        ],
        list: [
          "Keine benannten Lehrkräfte und keine Qualifikationen auf der Website.",
          "Keine kostenlose Probestunde — Zahlung verlangt, bevor Sie die Lehrkraft kennenlernen.",
          "Keine Kinderschutzrichtlinie oder eine vage Antwort auf Fragen zum Kinderschutz.",
          "Preise versteckt hinter einem Formular oder einer WhatsApp-Nachricht.",
          "Gruppenunterricht, der als „Einzelunterricht“ verkauft wird — oder eine Warteliste, bevor Ihr Kind überhaupt anfangen kann.",
          "Druck, Monate im Voraus zu bezahlen, mit einem „nur heute“-Rabatt.",
        ],
      },
      {
        heading: "Eine Lehrkraft ist eine Amanah — ein anvertrautes Gut",
        paragraphs: [
          "Die Lehrkraft, die Sie wählen, prägt, wie Ihr Kind die Worte Allahs ein Leben lang hört. Nehmen Sie die zwölf Fragen, stellen Sie sie uns und jedem anderen, den Sie in Betracht ziehen — und wählen Sie die Lehrkraft, deren Antworten Sie vertrauen.",
        ],
      },
    ],
    faqHeading: "Häufige Fragen",
    faqs: [
      {
        q: "Sollte mein Kind eine Lehrerin oder einen Lehrer haben?",
        a: "Beides kann hervorragend sein — entscheidend sind Qualifikation, Erfahrung mit Kindern und das Wohlbefinden Ihres Kindes. Viele Familien bevorzugen eine Lehrerin für kleine Kinder und für Mädchen. Die Online Quran hat männliche und weibliche Lehrkräfte; fragen Sie bei der Buchung Ihrer kostenlosen Probestunde danach.",
      },
      {
        q: "Was sollte Online-Koranunterricht kosten?",
        a: "Live-Einzelunterricht in Deutschland kostet typischerweise 35–99 $ pro Monat, je nach Häufigkeit. Unsere Tarife: Basis 35 $ (4 Stunden pro Woche, 25 Minuten), Standard 59 $ (5 pro Woche, 30 Minuten) und Hifz Intensiv 99 $ (5 pro Woche, 45 Minuten). Die vollständige Übersicht finden Sie auf der Preisseite.",
      },
      {
        q: "Was, wenn meinem Kind die Lehrkraft nicht gefällt?",
        a: "Dann wechseln Sie die Lehrkraft — die Probestunde gibt es genau dafür, die Passung vor einer Verpflichtung zu prüfen, und jede gute Akademie bietet ohne Umstände eine andere Lehrkraft an. Eine Lehrkraft, die Ihr Kind mag, ist eine Lehrkraft, von der Ihr Kind lernt.",
      },
      {
        q: "Muss eine Online-Koranlehrkraft Deutsch sprechen?",
        a: "Nicht unbedingt — Englisch funktioniert für viele Familien in Deutschland — aber Erklärungen in einer Sprache, die Ihr Kind versteht, machen einen echten Unterschied. Fragen Sie vor der Buchung, welche Sprachen Ihre Lehrkraft spricht.",
      },
      {
        q: "Reicht eine Stunde pro Woche?",
        a: "Für stetigen Fortschritt brauchen die meisten Kinder mindestens drei bis vier kurze Stunden pro Woche. Unsere Tarife beginnen bei vier Stunden pro Woche, weil kurze, häufige Stunden eine lange wöchentliche Sitzung schlagen.",
      },
    ],
    relatedHeading: "Verwandte Leitfäden",
    related: [
      {
        href: "/blog/choosing-quran-tutor",
        label: "Einen Online-Koranlehrer wählen",
      },
      {
        href: "/blog/how-online-quran-classes-work",
        label: "So funktioniert Online-Koranunterricht",
      },
      { href: "/blog/what-is-tajweed", label: "Was ist Tadschwied?" },
      {
        href: "/blog/how-much-do-online-quran-classes-cost",
        label: "Was kostet Online-Koranunterricht?",
      },
      { href: "/teachers", label: "Unsere Lehrkräfte kennenlernen" },
      { href: "/safeguarding", label: "Kinderschutz" },
    ],
    nextStep: {
      heading: "Prüfen Sie die Checkliste in der Praxis",
      body: "Der schnellste Weg, eine Lehrkraft zu beurteilen, ist, eine kennenzulernen. Buchen Sie eine kostenlose 30-minütige Probestunde — eine echte Stunde, ohne Angabe von Zahlungsdaten — und erleben Sie, wie unser Tadschwied-Unterricht in der Praxis funktioniert.",
      courseLabel: "Zum Tadschwied-Kurs",
      courseHref: "/courses/tajweed",
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
        author: { "@type": "Organization", name: "Online Quran" },
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
