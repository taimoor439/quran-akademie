import type { Locale } from "./i18n";

export interface Faq {
  q: Record<Locale, string>;
  a: Record<Locale, string>;
}

export const faqs: Faq[] = [
  {
    q: {
      en: "How do the online classes work?",
      de: "Wie funktioniert der Online-Unterricht?",
    },
    a: {
      en: "Every class is live and 1-to-1 with your tutor on Zoom or Google Meet. Each lesson is 30 minutes: your tutor shares the lesson on screen, listens to your recitation, corrects pronunciation gently, and sets a short practice task for the week.",
      de: "Jede Stunde ist live und im Einzelunterricht mit Ihrem Lehrer über Zoom oder Google Meet. Eine Stunde dauert 30 Minuten: Ihr Lehrer teilt den Unterricht auf dem Bildschirm, hört Ihrer Rezitation zu, korrigiert die Aussprache behutsam und gibt eine kurze Übung für die Woche auf.",
    },
  },
  {
    q: {
      en: "What time are the classes in Germany?",
      de: "Zu welchen Zeiten finden die Stunden in Deutschland statt?",
    },
    a: {
      en: "Classes run in Germany time (CET/CEST). The most popular slots are after school and in the evening, between 3pm and 8pm, plus weekend mornings. You choose the days and times that fit your family when you book.",
      de: "Die Stunden finden nach deutscher Zeit statt (MEZ/MESZ). Die beliebtesten Termine sind nach der Schule und am Abend, zwischen 15 und 20 Uhr, sowie am Wochenende vormittags. Bei der Buchung wählen Sie die Tage und Zeiten, die zu Ihrer Familie passen.",
    },
  },
  {
    q: {
      en: "What do we need for the first class?",
      de: "Was brauchen wir für die erste Stunde?",
    },
    a: {
      en: "A laptop, tablet or phone with a camera, a stable internet connection, and a quiet place to sit. Headphones help but are not required. Your tutor will send the meeting link before the class — no software to install beyond Zoom or Google Meet.",
      de: "Einen Laptop, ein Tablet oder ein Handy mit Kamera, eine stabile Internetverbindung und einen ruhigen Platz. Kopfhörer sind hilfreich, aber nicht erforderlich. Ihr Lehrer schickt den Meeting-Link vor der Stunde — außer Zoom oder Google Meet muss nichts installiert werden.",
    },
  },
  {
    q: {
      en: "Is the trial class really free?",
      de: "Ist die Probestunde wirklich kostenlos?",
    },
    a: {
      en: "Yes. The first class is a free 30-minute trial with no payment details required. It lets your child meet the tutor and lets us place them at the right level before you decide anything.",
      de: "Ja. Die erste Stunde ist eine kostenlose 30-minütige Probestunde, ohne Angabe von Zahlungsdaten. Ihr Kind lernt den Lehrer kennen, und wir können das passende Niveau bestimmen, bevor Sie sich entscheiden.",
    },
  },
  {
    q: {
      en: "Are there female teachers?",
      de: "Gibt es auch Lehrerinnen?",
    },
    a: {
      en: "Yes. We have qualified female tutors (Hafiza) for girls and sisters. You can request a female teacher when you book your free trial class.",
      de: "Ja. Wir haben qualifizierte Lehrerinnen (Hafiza) für Mädchen und Schwestern. Bei der Buchung der kostenlosen Probestunde können Sie eine Lehrerin wünschen.",
    },
  },
  {
    q: {
      en: "How are your tutors vetted?",
      de: "Wie werden Ihre Lehrer geprüft?",
    },
    a: {
      en: "Every tutor passes an identity check, provides references, and completes safeguarding training before teaching. Lessons follow our safeguarding policy: a parent stays nearby during children's lessons, and tutors never contact children privately outside approved channels.",
      de: "Jeder Lehrer durchläuft eine Identitätsprüfung, legt Referenzen vor und absolviert eine Schulung zum Kinderschutz, bevor er unterrichtet. Der Unterricht folgt unserer Kinderschutzrichtlinie: Ein Elternteil bleibt während der Kinderstunden in der Nähe, und Lehrer kontaktieren Kinder niemals privat außerhalb genehmigter Kanäle.",
    },
  },
  {
    q: {
      en: "How do I pay?",
      de: "Wie bezahle ich?",
    },
    a: {
      en: "Plans are billed monthly. At launch we will accept card payments, PayPal and SEPA Direct Debit — the standard way to pay for subscriptions in Germany. Prices are shown in USD and the EUR equivalent is charged at checkout.",
      de: "Die Tarife werden monatlich abgerechnet. Zum Start akzeptieren wir Kartenzahlung, PayPal und SEPA-Lastschrift — die übliche Art, Abonnements in Deutschland zu bezahlen. Die Preise sind in USD angegeben, der Euro-Gegenwert wird an der Kasse berechnet.",
    },
  },
  {
    q: {
      en: "Can I cancel or pause my plan?",
      de: "Kann ich meinen Tarif kündigen oder pausieren?",
    },
    a: {
      en: "Yes. Plans are month-to-month with no lock-in. You can cancel or pause for holidays at any time, and the plan simply does not renew the following month.",
      de: "Ja. Die Tarife laufen monatlich ohne Mindestlaufzeit. Sie können jederzeit kündigen oder für den Urlaub pausieren — der Tarif verlängert sich dann einfach nicht in den nächsten Monat.",
    },
  },
  {
    q: {
      en: "What if my child misses a class?",
      de: "Was passiert, wenn mein Kind eine Stunde verpasst?",
    },
    a: {
      en: "Life happens. If you let us know at least 12 hours in advance, we reschedule the class to another day that week at no extra cost.",
      de: "Das kommt vor. Wenn Sie uns mindestens 12 Stunden vorher Bescheid geben, verschieben wir die Stunde kostenlos auf einen anderen Tag in derselben Woche.",
    },
  },
  {
    q: {
      en: "Do you teach adults too?",
      de: "Unterrichten Sie auch Erwachsene?",
    },
    a: {
      en: "Yes — around a third of our students are adults, from complete beginners learning the alphabet to advanced students working on Hifz and Tafseer. Your tutor adapts the pace to you.",
      de: "Ja — etwa ein Drittel unserer Schüler sind Erwachsene, vom absoluten Anfänger, der das Alphabet lernt, bis zum fortgeschrittenen Schüler mit Hifz und Tafsir. Ihr Lehrer passt das Tempo an Sie an.",
    },
  },
];
