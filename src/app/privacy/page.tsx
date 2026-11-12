"use client";
import { useLocale } from "@/lib/i18n";
import { PageHero } from "@/components/Shared";

// TEMPLATE privacy policy — have it reviewed by a German lawyer
// (Rechtsanwalt) before launch. Business details below are PLACEHOLDERS
// and must be completed with the real controller information.

const content = {
  en: {
    hero: {
      eyebrow: "Privacy Policy",
      title: "Datenschutzerklärung — Privacy Policy",
      subtitle:
        "How we collect, use and protect your personal data. This policy follows the EU General Data Protection Regulation (GDPR).",
    },
    lastUpdated: "Last updated: [to be completed]",
    intro:
      "We take your privacy seriously. This policy explains what personal data we collect when you use this website and our online Quran classes, why we collect it, and what rights you have. If you have any questions, please contact us using the details in the final section.",
    sections: [
      {
        heading: "1. Who we are (controller)",
        paragraphs: [
          "The controller responsible for your personal data under Art. 4(7) GDPR is:",
        ],
        list: [
          "[Business name — to be completed]",
          "[Street address — to be completed]",
          "[Postal code and city — to be completed]",
          "Email: hello@quranakademie.de [placeholder email — to be confirmed]",
        ],
        note: "The details above are placeholders and will be completed with the real business information before launch.",
      },
      {
        heading: "2. What data we collect",
        paragraphs: [
          "We collect only the data we need to run the academy and provide our classes:",
        ],
        list: [
          "Trial and contact form data: your name, email address, phone number (optional), and the details you share about the student — such as age group, level and preferred class times.",
          "Lesson and account data: class bookings, attendance, lesson notes and progress records created during your time with us.",
          "Language preference: the language you choose for the website (English or German), stored in your browser.",
          "Cookies and technical data: basic technical information such as your browser type and the pages you visit, used to keep the website working and to understand how it is used.",
        ],
      },
      {
        heading: "3. How we use your data",
        paragraphs: [
          "We use your personal data to: respond to your enquiries and trial requests; arrange and deliver your online classes; manage bookings, payments and progress reports; send you service messages about your lessons; and improve our website and teaching.",
          "We do not sell your personal data. We do not use your data for advertising to third parties.",
        ],
      },
      {
        heading: "4. Legal basis (GDPR Art. 6)",
        paragraphs: [
          "We process your personal data on the following legal bases under Art. 6 GDPR:",
        ],
        list: [
          "Performance of a contract (Art. 6(1)(b)): to provide the classes and services you book with us.",
          "Consent (Art. 6(1)(a)): where you have given us consent — for example, to record a lesson or to receive optional updates. You may withdraw consent at any time.",
          "Legitimate interests (Art. 6(1)(f)): to run and secure our website, respond to enquiries and improve our services, where this does not override your rights.",
          "Legal obligation (Art. 6(1)(c)): where we are required by law to keep certain records, for example for tax purposes.",
        ],
      },
      {
        heading: "5. Data sharing",
        paragraphs: [
          "We share personal data only where necessary to provide our services:",
        ],
        list: [
          "Video lesson platforms (such as Zoom or Google Meet) — to hold the live online classes.",
          "Our hosting provider — to operate this website.",
          "Payment providers — to process payments securely, once payments are enabled at launch.",
          "Our tutors — only the information they need to teach your lessons, such as the student's name, level and lesson history.",
        ],
        note: "Where a provider is based outside the EU/EEA, we rely on appropriate safeguards such as the EU Standard Contractual Clauses or an adequacy decision.",
      },
      {
        heading: "6. Data retention",
        paragraphs: [
          "We keep your personal data only as long as necessary for the purposes described above. Enquiry and trial data is kept for up to 12 months after your last contact with us. Lesson and progress records are kept while you are an active student and for a reasonable period afterwards. Where the law requires longer retention — for example, for invoices — we keep the data for the legally required period and then delete it.",
        ],
      },
      {
        heading: "7. Your rights",
        paragraphs: [
          "Under the GDPR you have the right to:",
        ],
        list: [
          "Access your personal data (Art. 15 GDPR).",
          "Have inaccurate data corrected (Art. 16 GDPR).",
          "Have your data deleted (Art. 17 GDPR).",
          "Restrict processing of your data (Art. 18 GDPR).",
          "Receive your data in a portable format (Art. 20 GDPR).",
          "Object to processing based on legitimate interests (Art. 21 GDPR).",
          "Withdraw consent at any time, without affecting the lawfulness of processing before the withdrawal (Art. 7(3) GDPR).",
          "Lodge a complaint with a supervisory authority (Art. 77 GDPR) — for example, the data protection authority in your German state (Landesdatenschutzbehörde) or the authority where you live.",
        ],
        note: "To exercise any of these rights, please contact us using the details in the final section. We will respond within one month.",
      },
      {
        heading: "8. Children's data",
        paragraphs: [
          "Our classes are often for children. We collect a child's personal data only with the consent of a parent or legal guardian, and only the data needed to provide the lessons. Parents or guardians may request access to, correction of, or deletion of their child's data at any time. If you believe we hold a child's data without proper consent, please contact us and we will delete it promptly.",
        ],
      },
      {
        heading: "9. Contact for privacy questions",
        paragraphs: [
          "If you have any questions about this policy or about your personal data, please contact us at hello@quranakademie.de [placeholder email — to be confirmed].",
        ],
      },
    ],
  },
  de: {
    hero: {
      eyebrow: "Datenschutzerklärung",
      title: "Datenschutzerklärung",
      subtitle:
        "Wie wir Ihre personenbezogenen Daten erheben, verwenden und schützen. Diese Erklärung folgt der EU-Datenschutz-Grundverordnung (DSGVO).",
    },
    lastUpdated: "Zuletzt aktualisiert: [noch zu ergänzen]",
    intro:
      "Wir nehmen Ihren Datenschutz ernst. Diese Erklärung erläutert, welche personenbezogenen Daten wir erheben, wenn Sie diese Website und unsere Online-Quran-Kurse nutzen, warum wir sie erheben und welche Rechte Sie haben. Bei Fragen kontaktieren Sie uns bitte über die Angaben im letzten Abschnitt.",
    sections: [
      {
        heading: "1. Wer wir sind (Verantwortlicher)",
        paragraphs: [
          "Verantwortlicher für Ihre personenbezogenen Daten im Sinne von Art. 4 Nr. 7 DSGVO ist:",
        ],
        list: [
          "[Firmenname — noch zu ergänzen]",
          "[Straße und Hausnummer — noch zu ergänzen]",
          "[Postleitzahl und Ort — noch zu ergänzen]",
          "E-Mail: hello@quranakademie.de [Platzhalter-E-Mail — noch zu bestätigen]",
        ],
        note: "Die obigen Angaben sind Platzhalter und werden vor dem Start mit den echten Unternehmensdaten ergänzt.",
      },
      {
        heading: "2. Welche Daten wir erheben",
        paragraphs: [
          "Wir erheben nur die Daten, die wir für den Betrieb der Akademie und die Durchführung unserer Kurse benötigen:",
        ],
        list: [
          "Daten aus Probe- und Kontaktformularen: Ihr Name, Ihre E-Mail-Adresse, Ihre Telefonnummer (optional) sowie die Angaben, die Sie über den Schüler mitteilen — etwa Altersgruppe, Niveau und bevorzugte Unterrichtszeiten.",
          "Unterrichts- und Kontodaten: Kursbuchungen, Anwesenheit, Unterrichtsnotizen und Fortschrittsaufzeichnungen, die während Ihrer Zeit bei uns entstehen.",
          "Spracheinstellung: die von Ihnen gewählte Website-Sprache (Englisch oder Deutsch), die in Ihrem Browser gespeichert wird.",
          "Cookies und technische Daten: grundlegende technische Informationen wie Browsertyp und besuchte Seiten, um die Website funktionsfähig zu halten und zu verstehen, wie sie genutzt wird.",
        ],
      },
      {
        heading: "3. Wie wir Ihre Daten verwenden",
        paragraphs: [
          "Wir verwenden Ihre personenbezogenen Daten, um: auf Ihre Anfragen und Probestundenwünsche zu antworten; Ihre Online-Kurse zu organisieren und durchzuführen; Buchungen, Zahlungen und Fortschrittsberichte zu verwalten; Ihnen Servicenachrichten zu Ihren Stunden zu senden; und unsere Website und unseren Unterricht zu verbessern.",
          "Wir verkaufen Ihre personenbezogenen Daten nicht. Wir verwenden Ihre Daten nicht für Werbung Dritter.",
        ],
      },
      {
        heading: "4. Rechtsgrundlagen (Art. 6 DSGVO)",
        paragraphs: [
          "Wir verarbeiten Ihre personenbezogenen Daten auf folgenden Rechtsgrundlagen nach Art. 6 DSGVO:",
        ],
        list: [
          "Vertragserfüllung (Art. 6 Abs. 1 lit. b): zur Durchführung der von Ihnen gebuchten Kurse und Leistungen.",
          "Einwilligung (Art. 6 Abs. 1 lit. a): wo Sie uns eine Einwilligung erteilt haben — zum Beispiel für die Aufzeichnung einer Stunde oder für optionale Informationen. Sie können Ihre Einwilligung jederzeit widerrufen.",
          "Berechtigte Interessen (Art. 6 Abs. 1 lit. f): zum Betrieb und zur Sicherung unserer Website, zur Beantwortung von Anfragen und zur Verbesserung unserer Leistungen, soweit dies Ihre Rechte nicht überwiegt.",
          "Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c): wo wir gesetzlich verpflichtet sind, bestimmte Unterlagen aufzubewahren, etwa für Steuerzwecke.",
        ],
      },
      {
        heading: "5. Weitergabe von Daten",
        paragraphs: [
          "Wir geben personenbezogene Daten nur weiter, soweit dies zur Erbringung unserer Leistungen erforderlich ist:",
        ],
        list: [
          "Videoplattformen für den Unterricht (z. B. Zoom oder Google Meet) — zur Durchführung der Live-Online-Stunden.",
          "Unser Hosting-Anbieter — zum Betrieb dieser Website.",
          "Zahlungsdienstleister — zur sicheren Abwicklung von Zahlungen, sobald Zahlungen zum Start aktiviert werden.",
          "Unsere Lehrkräfte — nur die Informationen, die sie für Ihren Unterricht benötigen, etwa Name, Niveau und Unterrichtsverlauf des Schülers.",
        ],
        note: "Befindet sich ein Anbieter außerhalb der EU/des EWR, stützen wir uns auf geeignete Garantien wie die EU-Standardvertragsklauseln oder einen Angemessenheitsbeschluss.",
      },
      {
        heading: "6. Speicherdauer",
        paragraphs: [
          "Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die oben beschriebenen Zwecke erforderlich ist. Anfrage- und Probestundendaten werden bis zu 12 Monate nach Ihrem letzten Kontakt mit uns aufbewahrt. Unterrichts- und Fortschrittsaufzeichnungen werden während Ihrer aktiven Teilnahme und für einen angemessenen Zeitraum danach gespeichert. Wo das Gesetz eine längere Aufbewahrung vorschreibt — etwa für Rechnungen — bewahren wir die Daten für die gesetzlich vorgeschriebene Dauer auf und löschen sie danach.",
        ],
      },
      {
        heading: "7. Ihre Rechte",
        paragraphs: [
          "Nach der DSGVO haben Sie das Recht auf:",
        ],
        list: [
          "Auskunft über Ihre personenbezogenen Daten (Art. 15 DSGVO).",
          "Berichtigung unrichtiger Daten (Art. 16 DSGVO).",
          "Löschung Ihrer Daten (Art. 17 DSGVO).",
          "Einschränkung der Verarbeitung Ihrer Daten (Art. 18 DSGVO).",
          "Datenübertragbarkeit (Art. 20 DSGVO).",
          "Widerspruch gegen eine Verarbeitung auf Grundlage berechtigter Interessen (Art. 21 DSGVO).",
          "Widerruf einer Einwilligung jederzeit, ohne dass die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung berührt wird (Art. 7 Abs. 3 DSGVO).",
          "Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO) — zum Beispiel bei der Datenschutzbehörde Ihres Bundeslandes (Landesdatenschutzbehörde) oder der Behörde an Ihrem Wohnort.",
        ],
        note: "Zur Ausübung dieser Rechte kontaktieren Sie uns bitte über die Angaben im letzten Abschnitt. Wir antworten innerhalb eines Monats.",
      },
      {
        heading: "8. Daten von Kindern",
        paragraphs: [
          "Unsere Kurse richten sich häufig an Kinder. Personenbezogene Daten eines Kindes erheben wir nur mit der Einwilligung eines Elternteils oder Erziehungsberechtigten und nur die Daten, die für den Unterricht erforderlich sind. Eltern oder Erziehungsberechtigte können jederzeit Auskunft über die Daten ihres Kindes verlangen oder deren Berichtigung oder Löschung beantragen. Sollten Sie der Ansicht sein, dass wir Daten eines Kindes ohne ordnungsgemäße Einwilligung speichern, kontaktieren Sie uns bitte — wir löschen sie umgehend.",
        ],
      },
      {
        heading: "9. Kontakt bei Datenschutzfragen",
        paragraphs: [
          "Bei Fragen zu dieser Erklärung oder zu Ihren personenbezogenen Daten kontaktieren Sie uns bitte unter hello@quranakademie.de [Platzhalter-E-Mail — noch zu bestätigen].",
        ],
      },
    ],
  },
} as const;

export default function PrivacyPage() {
  const { locale } = useLocale();
  const t = content[locale];

  return (
    <main>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wide text-gold-dark">
            {t.lastUpdated}
          </p>
          <p className="mt-6 leading-relaxed text-ink/75">{t.intro}</p>
          {t.sections.map((section) => (
            <div key={section.heading} className="mt-10">
              <h2 className="font-serif text-2xl font-bold text-brand">
                {section.heading}
              </h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="mt-4 leading-relaxed text-ink/75">
                  {p}
                </p>
              ))}
              {"list" in section && section.list && (
                <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-ink/75">
                  {section.list.map((item) => (
                    <li key={item.slice(0, 24)}>{item}</li>
                  ))}
                </ul>
              )}
              {"note" in section && section.note && (
                <p className="mt-4 rounded-2xl bg-cream px-5 py-4 text-sm leading-relaxed text-ink/70">
                  {section.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
