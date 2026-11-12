"use client";
import { useLocale } from "@/lib/i18n";
import { PageHero } from "@/components/Shared";

// TEMPLATE terms of service — have them reviewed by a German lawyer
// (Rechtsanwalt) before launch. Business details below are PLACEHOLDERS
// and must be completed with the real business information.

const content = {
  en: {
    hero: {
      eyebrow: "Terms of Service",
      title: "AGB — Terms of Service",
      subtitle:
        "The terms that apply when you book classes with Online Quran. Please read them carefully before booking.",
    },
    lastUpdated: "Last updated: [to be completed]",
    intro:
      "These Terms of Service (Allgemeine Geschäftsbedingungen, AGB) govern the use of this website and the booking of live online Quran classes with Online Quran. By booking a trial class or a plan, you agree to these terms.",
    sections: [
      {
        heading: "1. Services",
        paragraphs: [
          "Online Quran provides live online Quran classes taught one-to-one by a tutor over video call. Classes cover Quran reading, Tajweed, Hifz (memorisation) and Tafseer, and are offered for children and adults.",
          "All classes are held online at the scheduled time in Germany time (CET/CEST). You are responsible for providing a suitable device, a stable internet connection and a quiet place for the lesson.",
        ],
      },
      {
        heading: "2. Booking and free trial",
        paragraphs: [
          "You can book a free trial class through the booking form on this website. The trial class is a single introductory lesson, free of charge and with no obligation to continue. Trial classes are subject to tutor availability, and we will confirm your booking by email.",
          "After the trial, you may choose a monthly plan. Your place is confirmed once the first payment has been made.",
        ],
      },
      {
        heading: "3. Plans and payment",
        paragraphs: [
          "Classes are offered on monthly plans. Prices are shown in US dollars (USD); the equivalent amount in euros (EUR) is shown at checkout, based on the current exchange rate. Payment is due monthly in advance.",
          "Payment processing will be finalised at launch. Until payments are enabled, no charges will be taken through this website. We will confirm the accepted payment methods and the payment provider before the first charge.",
          "Prices may change with reasonable notice. Any change will apply from your next billing period, and you may cancel before the change takes effect if you do not agree.",
        ],
      },
      {
        heading: "4. Cancellations and pausing",
        paragraphs: [
          "All plans are month-to-month. There is no lock-in and no minimum term. You may cancel at any time, and your plan will end at the end of the current billing month. No refund is due for a partially used month, unless we are unable to provide the classes you booked.",
          "You may pause your plan — for example, for holidays — by telling us before the next billing month begins. Paused months are not charged.",
          "To cancel or pause, please contact us at contact@onlinekoran.de.",
        ],
      },
      {
        heading: "5. Rescheduling",
        paragraphs: [
          "If you need to reschedule a lesson, please let us know at least 12 hours before the scheduled start time. We will do our best to offer an alternative slot in the same week. Lessons cancelled with less than 12 hours' notice, or missed without notice, cannot be rescheduled and count as taken.",
          "If your tutor is unavailable, we will offer a replacement lesson or a substitute tutor at no extra cost.",
        ],
      },
      {
        heading: "6. Conduct",
        paragraphs: [
          "We expect respectful behaviour from everyone — students, parents and tutors. Lessons are a place of learning and should be treated with the respect the Quran deserves.",
          "A parent or guardian must be present in the home and nearby during children's lessons. Lessons take place only on the approved video platforms; private contact between tutors and children outside approved channels is not permitted.",
          "We may suspend or end a plan, without refund for the current month, if these rules are seriously or repeatedly broken.",
        ],
      },
      {
        heading: "7. Liability",
        paragraphs: [
          "We provide our classes with care and professional diligence. We are not liable for interruptions caused by your internet connection, device or third-party video platforms, or for any indirect loss. Nothing in these terms limits liability where the law does not allow it — in particular for injury to life, body or health, or for intentional or grossly negligent conduct.",
        ],
      },
      {
        heading: "8. Changes to these terms",
        paragraphs: [
          "We may update these terms from time to time, for example to reflect changes in our services or the law. We will inform you of any material change before it takes effect. If you do not agree with a change, you may cancel your plan before the change takes effect.",
        ],
      },
      {
        heading: "9. Contact",
        paragraphs: [
          "Online Quran — [Business name — to be completed], [Street address — to be completed], [Postal code and city — to be completed]. Email: contact@onlinekoran.de.",
        ],
        note: "The business details above are placeholders and will be completed with the real business information before launch.",
      },
    ],
  },
  de: {
    hero: {
      eyebrow: "Allgemeine Geschäftsbedingungen",
      title: "Allgemeine Geschäftsbedingungen (AGB)",
      subtitle:
        "Die Bedingungen, die gelten, wenn Sie Kurse bei der Online Quran buchen. Bitte lesen Sie sie vor der Buchung sorgfältig durch.",
    },
    lastUpdated: "Zuletzt aktualisiert: [noch zu ergänzen]",
    intro:
      "Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Nutzung dieser Website und die Buchung von Live-Online-Quran-Kursen bei der Online Quran. Mit der Buchung einer Probestunde oder eines Tarifs stimmen Sie diesen Bedingungen zu.",
    sections: [
      {
        heading: "1. Leistungen",
        paragraphs: [
          "Die Online Quran bietet Live-Online-Quran-Kurse an, die im Einzelunterricht per Videoanruf von einer Lehrkraft durchgeführt werden. Die Kurse umfassen Quran-Lesen, Tajweed, Hifz (Auswendiglernen) und Tafsir und richten sich an Kinder und Erwachsene.",
          "Alle Stunden finden online zur vereinbarten Zeit in deutscher Zeit (MEZ/MESZ) statt. Sie sind dafür verantwortlich, ein geeignetes Endgerät, eine stabile Internetverbindung und einen ruhigen Ort für die Stunde bereitzustellen.",
        ],
      },
      {
        heading: "2. Buchung und Probestunde",
        paragraphs: [
          "Über das Buchungsformular auf dieser Website können Sie eine kostenlose Probestunde buchen. Die Probestunde ist eine einmalige Einführungsstunde, kostenlos und unverbindlich. Probestunden sind abhängig von der Verfügbarkeit der Lehrkräfte; wir bestätigen Ihre Buchung per E-Mail.",
          "Nach der Probestunde können Sie einen Monatstarif wählen. Ihr Platz ist bestätigt, sobald die erste Zahlung eingegangen ist.",
        ],
      },
      {
        heading: "3. Tarife und Zahlung",
        paragraphs: [
          "Die Kurse werden in Monatstarifen angeboten. Die Preise sind in US-Dollar (USD) angegeben; der entsprechende Betrag in Euro (EUR) wird an der Kasse auf Grundlage des aktuellen Wechselkurses angezeigt. Die Zahlung ist monatlich im Voraus fällig.",
          "Die Zahlungsabwicklung wird zum Start finalisiert. Bis Zahlungen aktiviert sind, werden über diese Website keine Beträge abgebucht. Wir bestätigen die akzeptierten Zahlungsmethoden und den Zahlungsdienstleister vor der ersten Abbuchung.",
          "Preise können mit angemessener Ankündigung geändert werden. Eine Änderung gilt ab dem nächsten Abrechnungszeitraum; Sie können vor Inkrafttreten der Änderung kündigen, wenn Sie nicht einverstanden sind.",
        ],
      },
      {
        heading: "4. Kündigung und Pausierung",
        paragraphs: [
          "Alle Tarife sind monatlich kündbar. Es gibt keine Mindestlaufzeit und keine Vertragsbindung. Sie können jederzeit kündigen; Ihr Tarif endet zum Ende des laufenden Abrechnungsmonats. Für einen teilweise genutzten Monat erfolgt keine Erstattung, es sei denn, wir können die gebuchten Stunden nicht erbringen.",
          "Sie können Ihren Tarif pausieren — zum Beispiel für Urlaub — indem Sie uns vor Beginn des nächsten Abrechnungsmonats informieren. Pausierte Monate werden nicht berechnet.",
          "Zur Kündigung oder Pausierung kontaktieren Sie uns bitte unter contact@onlinekoran.de.",
        ],
      },
      {
        heading: "5. Umbuchung",
        paragraphs: [
          "Wenn Sie eine Stunde umbuchen möchten, informieren Sie uns bitte mindestens 12 Stunden vor dem geplanten Beginn. Wir bemühen uns, Ihnen einen Ersatztermin in derselben Woche anzubieten. Stunden, die mit weniger als 12 Stunden Vorlauf abgesagt werden oder ohne Absage ausfallen, können nicht nachgeholt werden und gelten als erbracht.",
          "Ist Ihre Lehrkraft verhindert, bieten wir Ihnen eine Ersatzstunde oder eine Vertretungslehrkraft ohne zusätzliche Kosten an.",
        ],
      },
      {
        heading: "6. Verhalten",
        paragraphs: [
          "Wir erwarten respektvolles Verhalten von allen — Schülern, Eltern und Lehrkräften. Der Unterricht ist ein Ort des Lernens und sollte mit dem Respekt behandelt werden, der dem Quran gebührt.",
          "Ein Elternteil oder Erziehungsberechtigter muss während der Kinderstunden zu Hause und in der Nähe anwesend sein. Der Unterricht findet nur auf den zugelassenen Videoplattformen statt; privater Kontakt zwischen Lehrkräften und Kindern außerhalb zugelassener Kanäle ist nicht gestattet.",
          "Wir können einen Tarif aussetzen oder beenden — ohne Erstattung für den laufenden Monat — wenn diese Regeln schwerwiegend oder wiederholt verletzt werden.",
        ],
      },
      {
        heading: "7. Haftung",
        paragraphs: [
          "Wir erbringen unsere Kurse mit Sorgfalt und fachlicher Gewissenhaftigkeit. Wir haften nicht für Unterbrechungen, die durch Ihre Internetverbindung, Ihr Endgerät oder Videoplattformen Dritter verursacht werden, oder für mittelbare Schäden. Diese Bedingungen schränken die Haftung nicht ein, wo das Gesetz dies nicht zulässt — insbesondere nicht bei Verletzung von Leben, Körper oder Gesundheit oder bei vorsätzlichem oder grob fahrlässigem Verhalten.",
        ],
      },
      {
        heading: "8. Änderungen dieser Bedingungen",
        paragraphs: [
          "Wir können diese Bedingungen von Zeit zu Zeit aktualisieren, etwa um Änderungen unserer Leistungen oder der Rechtslage abzubilden. Über wesentliche Änderungen informieren wir Sie vor deren Inkrafttreten. Wenn Sie mit einer Änderung nicht einverstanden sind, können Sie Ihren Tarif vor Inkrafttreten der Änderung kündigen.",
        ],
      },
      {
        heading: "9. Kontakt",
        paragraphs: [
          "Online Quran — [Firmenname — noch zu ergänzen], [Straße und Hausnummer — noch zu ergänzen], [Postleitzahl und Ort — noch zu ergänzen]. E-Mail: contact@onlinekoran.de.",
        ],
        note: "Die obigen Unternehmensangaben sind Platzhalter und werden vor dem Start mit den echten Unternehmensdaten ergänzt.",
      },
    ],
  },
} as const;

export default function TermsPage() {
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
              <h2 className="font-display text-2xl font-bold text-brand">
                {section.heading}
              </h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="mt-4 leading-relaxed text-ink/75">
                  {p}
                </p>
              ))}
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
