"use client";
import { useLocale } from "@/lib/i18n";
import { PageHero } from "@/components/Shared";

// Impressum — ALL business details are PLACEHOLDERS and must be completed
// with the real business information before launch. A German Impressum is
// legally required under § 5 DDG (Digitale-Dienste-Gesetz). Have the final
// page reviewed by a German lawyer (Rechtsanwalt) before launch.

const content = {
  en: {
    hero: {
      eyebrow: "Legal Notice",
      title: "Impressum — Legal Notice",
      subtitle:
        "Information about the provider of this website, as required under German law (§ 5 DDG).",
    },
    placeholderBanner:
      "Please note: this page contains placeholder details. It must be completed with the real business information before launch.",
    sections: [
      {
        heading: "Provider details (Angaben gemäß § 5 DDG)",
        paragraphs: [
          "[Business name — to be added]",
          "[Street address — to be added]",
          "[Postal code and city — to be added]",
          "[Country — to be added]",
        ],
      },
      {
        heading: "Contact (Kontakt)",
        paragraphs: [
          "Email: [Email — to be added]",
          "Phone: [Phone — to be added]",
        ],
      },
      {
        heading: "Responsible for content (Verantwortlich für den Inhalt)",
        paragraphs: [
          "Responsible for the content of this website under § 18 Abs. 2 MStV (Medienstaatsvertrag):",
          "[Responsible for content: Name — to be added]",
          "[Address — to be added]",
        ],
      },
      {
        heading: "EU dispute resolution (EU-Streitschlichtung)",
        paragraphs: [
          "The European Commission provides a platform for online dispute resolution (OS): https://ec.europa.eu/consumers/odr/. We are not obliged and not willing to participate in dispute resolution proceedings before a consumer arbitration board (Verbraucherschlichtungsstelle).",
        ],
      },
      {
        heading: "Liability for content and links (Haftung für Inhalte und Links)",
        paragraphs: [
          "We make every effort to keep the information on this website correct and up to date. We are responsible for our own content on these pages in accordance with general law. We are not responsible for the content of external websites linked from this site; responsibility for linked content lies with the respective provider. If you notice unlawful content on a linked page, please let us know and we will remove the link.",
        ],
      },
    ],
  },
  de: {
    hero: {
      eyebrow: "Impressum",
      title: "Impressum",
      subtitle:
        "Angaben zum Anbieter dieser Website, wie nach deutschem Recht (§ 5 DDG) erforderlich.",
    },
    placeholderBanner:
      "Bitte beachten Sie: Diese Seite enthält Platzhalterangaben. Sie muss vor dem Start mit den echten Unternehmensdaten vervollständigt werden.",
    sections: [
      {
        heading: "Angaben gemäß § 5 DDG",
        paragraphs: [
          "[Firmenname — noch zu ergänzen]",
          "[Straße und Hausnummer — noch zu ergänzen]",
          "[Postleitzahl und Ort — noch zu ergänzen]",
          "[Land — noch zu ergänzen]",
        ],
      },
      {
        heading: "Kontakt",
        paragraphs: [
          "E-Mail: [E-Mail — noch zu ergänzen]",
          "Telefon: [Telefon — noch zu ergänzen]",
        ],
      },
      {
        heading: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
        paragraphs: [
          "Verantwortlich für den Inhalt dieser Website nach § 18 Abs. 2 MStV (Medienstaatsvertrag):",
          "[Verantwortlich für den Inhalt: Name — noch zu ergänzen]",
          "[Anschrift — noch zu ergänzen]",
        ],
      },
      {
        heading: "EU-Streitschlichtung",
        paragraphs: [
          "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
        ],
      },
      {
        heading: "Haftung für Inhalte und Links",
        paragraphs: [
          "Wir bemühen uns, die Informationen auf dieser Website korrekt und aktuell zu halten. Für eigene Inhalte auf diesen Seiten sind wir nach den allgemeinen Gesetzen verantwortlich. Für die Inhalte externer Websites, auf die von dieser Seite verlinkt wird, sind wir nicht verantwortlich; die Verantwortung für verlinkte Inhalte liegt bei dem jeweiligen Anbieter. Sollten Sie rechtswidrige Inhalte auf einer verlinkten Seite bemerken, informieren Sie uns bitte — wir entfernen den Link.",
        ],
      },
    ],
  },
} as const;

export default function ImpressumPage() {
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
          <div className="rounded-2xl border-2 border-gold bg-gold-soft px-6 py-5">
            <p className="font-bold leading-relaxed text-brand-deep">
              {t.placeholderBanner}
            </p>
          </div>
          {t.sections.map((section) => (
            <div key={section.heading} className="mt-10">
              <h2 className="font-serif text-2xl font-bold text-brand">
                {section.heading}
              </h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="mt-3 leading-relaxed text-ink/75">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
