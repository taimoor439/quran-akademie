"use client";
import { useLocale } from "@/lib/i18n";
import { CtaBand, PageHero } from "@/components/Shared";

// Safeguarding / child protection policy. Concerns are reported to the
// safeguarding contact at contact@onlinekoran.de.

const content = {
  en: {
    hero: {
      eyebrow: "Safeguarding & Child Protection",
      title: "Keeping every child safe",
      subtitle:
        "The safety and wellbeing of the children we teach come first — in every lesson, on every platform, without exception.",
    },
    lastUpdated: "Last updated: [to be completed]",
    intro:
      "Online Quran teaches many children, and we take that responsibility seriously. This policy explains how we protect children in our care, what we expect from our tutors, and how to raise a concern. It applies to all tutors, staff and anyone working with us.",
    sections: [
      {
        heading: "1. Our commitment",
        paragraphs: [
          "Every child has the right to learn in a safe, respectful and caring environment. We are committed to safeguarding children from harm, abuse and neglect, and to creating a culture where concerns are listened to and acted on promptly.",
          "Safeguarding is everyone's responsibility at Online Quran. If something does not feel right, we expect it to be reported — and we will act on it.",
        ],
      },
      {
        heading: "2. Tutor vetting",
        paragraphs: [
          "Before any tutor teaches a lesson with us, we check that they are suitable to work with children:",
        ],
        list: [
          "Identity checks — we verify each tutor's identity and qualifications.",
          "References — we ask for and check professional references.",
          "Safeguarding training — every tutor completes safeguarding training before teaching, and refreshes it regularly.",
          "Ongoing supervision — we review lessons and feedback, and we act quickly on any concern raised about a tutor.",
        ],
      },
      {
        heading: "3. Lesson rules",
        paragraphs: [
          "These rules protect children and tutors alike, and they apply to every lesson:",
        ],
        list: [
          "A parent or guardian must stay nearby during children's lessons, and be present in the home for the whole lesson.",
          "Lessons take place only on approved platforms (such as Zoom or Google Meet), through the academy's own accounts.",
          "Tutors must not contact children privately outside approved channels — no private messages, calls or social media contact with students.",
          "Lessons are held in a suitable, well-lit space. Cameras stay on for tutor and student during the lesson.",
          "Tutors use respectful, age-appropriate language at all times, and never discuss inappropriate topics with a child.",
        ],
      },
      {
        heading: "4. Recording",
        paragraphs: [
          "Lessons are recorded only with the prior consent of a parent or guardian. Recordings are used only for quality and safeguarding purposes, are stored securely, and are never shared outside the academy. Parents may withdraw consent for recording at any time, and may ask for a recording to be deleted.",
        ],
      },
      {
        heading: "5. Reporting concerns",
        paragraphs: [
          "If you have any concern about a child's safety or about a tutor's conduct, please tell us straight away. You can report a concern by emailing contact@onlinekoran.de or by contacting us through the contact page.",
          "We will acknowledge your concern promptly, treat it confidentially, and look into it fairly. Where a concern suggests a child may be at risk, we will act immediately — including, where appropriate, contacting the relevant authorities. We will never penalise anyone for raising a genuine concern in good faith.",
        ],
      },
      {
        heading: "6. Review of this policy",
        paragraphs: [
          "We review this policy regularly — at least once a year — and update it whenever our practices or the law change. The latest version is always published on this page.",
        ],
      },
    ],
  },
  de: {
    hero: {
      eyebrow: "Kinderschutz",
      title: "Jedes Kind sicher halten",
      subtitle:
        "Die Sicherheit und das Wohl der Kinder, die wir unterrichten, stehen an erster Stelle — in jeder Stunde, auf jeder Plattform, ohne Ausnahme.",
    },
    lastUpdated: "Zuletzt aktualisiert: [noch zu ergänzen]",
    intro:
      "Die Online Quran unterrichtet viele Kinder, und wir nehmen diese Verantwortung ernst. Diese Richtlinie erklärt, wie wir die uns anvertrauten Kinder schützen, was wir von unseren Lehrkräften erwarten und wie Sie ein Anliegen melden können. Sie gilt für alle Lehrkräfte, Mitarbeitenden und alle, die mit uns arbeiten.",
    sections: [
      {
        heading: "1. Unser Bekenntnis",
        paragraphs: [
          "Jedes Kind hat das Recht, in einer sicheren, respektvollen und fürsorglichen Umgebung zu lernen. Wir verpflichten uns, Kinder vor Schaden, Missbrauch und Vernachlässigung zu schützen und eine Kultur zu schaffen, in der Anliegen gehört und zügig bearbeitet werden.",
          "Kinderschutz ist bei der Online Quran die Verantwortung aller. Wenn etwas nicht richtig erscheint, erwarten wir, dass es gemeldet wird — und wir werden darauf reagieren.",
        ],
      },
      {
        heading: "2. Prüfung der Lehrkräfte",
        paragraphs: [
          "Bevor eine Lehrkraft bei uns unterrichtet, prüfen wir, ob sie für die Arbeit mit Kindern geeignet ist:",
        ],
        list: [
          "Identitätsprüfung — wir prüfen die Identität und die Qualifikationen jeder Lehrkraft.",
          "Referenzen — wir holen berufliche Referenzen ein und prüfen sie.",
          "Kinderschutzschulung — jede Lehrkraft absolviert vor Unterrichtsbeginn eine Kinderschutzschulung und frischt diese regelmäßig auf.",
          "Laufende Aufsicht — wir prüfen Unterricht und Rückmeldungen und reagieren schnell auf jedes Anliegen, das eine Lehrkraft betrifft.",
        ],
      },
      {
        heading: "3. Regeln für den Unterricht",
        paragraphs: [
          "Diese Regeln schützen Kinder und Lehrkräfte gleichermaßen und gelten für jede Stunde:",
        ],
        list: [
          "Ein Elternteil oder Erziehungsberechtigter muss während der Kinderstunden in der Nähe bleiben und während der gesamten Stunde zu Hause anwesend sein.",
          "Der Unterricht findet nur auf zugelassenen Plattformen (z. B. Zoom oder Google Meet) über die Konten der Akademie statt.",
          "Lehrkräfte dürfen Kinder nicht privat außerhalb zugelassener Kanäle kontaktieren — keine privaten Nachrichten, Anrufe oder Social-Media-Kontakte mit Schülern.",
          "Der Unterricht findet in einem geeigneten, gut beleuchteten Raum statt. Die Kameras von Lehrkraft und Schüler bleiben während der Stunde eingeschaltet.",
          "Lehrkräfte verwenden jederzeit respektvolle, altersangemessene Sprache und besprechen niemals unangemessene Themen mit einem Kind.",
        ],
      },
      {
        heading: "4. Aufzeichnung",
        paragraphs: [
          "Stunden werden nur mit vorheriger Einwilligung eines Elternteils oder Erziehungsberechtigten aufgezeichnet. Aufzeichnungen werden nur zu Qualitäts- und Kinderschutzzwecken verwendet, sicher gespeichert und niemals außerhalb der Akademie weitergegeben. Eltern können die Einwilligung zur Aufzeichnung jederzeit widerrufen und die Löschung einer Aufzeichnung verlangen.",
        ],
      },
      {
        heading: "5. Anliegen melden",
        paragraphs: [
          "Wenn Sie ein Anliegen zur Sicherheit eines Kindes oder zum Verhalten einer Lehrkraft haben, teilen Sie es uns bitte umgehend mit. Sie können ein Anliegen per E-Mail an contact@onlinekoran.de melden oder uns über die Kontaktseite erreichen.",
          "Wir bestätigen Ihr Anliegen zügig, behandeln es vertraulich und prüfen es fair. Wenn ein Anliegen darauf hindeutet, dass ein Kind gefährdet sein könnte, handeln wir sofort — gegebenenfalls auch durch Kontaktaufnahme mit den zuständigen Behörden. Niemand wird dafür benachteiligt, ein berechtigtes Anliegen in gutem Glauben zu melden.",
        ],
      },
      {
        heading: "6. Überprüfung dieser Richtlinie",
        paragraphs: [
          "Wir überprüfen diese Richtlinie regelmäßig — mindestens einmal im Jahr — und aktualisieren sie, sobald sich unsere Abläufe oder die Rechtslage ändern. Die jeweils aktuelle Fassung ist stets auf dieser Seite veröffentlicht.",
        ],
      },
    ],
  },
} as const;

export default function SafeguardingPage() {
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
          <p className="text-sm font-bold tracking-wide text-gold-dark">
            {t.lastUpdated}
          </p>
          <p className="mt-6 leading-relaxed text-ink/75">{t.intro}</p>
          {t.sections.map((section) => (
            <div key={section.heading} className="mt-10">
              <h2 className="font-display text-2xl font-bold text-brand">
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
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
