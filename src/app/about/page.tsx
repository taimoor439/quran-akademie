"use client";
import { useLocale } from "@/lib/i18n";
import { CtaBand, PageHero, SectionHeading } from "@/components/Shared";

// About page — Quran Akademie. No invented founding dates, founder names,
// student counts or statistics. All claims are generic and honest.

const content = {
  en: {
    hero: {
      eyebrow: "About Quran Akademie",
      title: "Quality Quran education, taught live and one-to-one",
      subtitle:
        "We help Muslim families in Germany learn the Quran with confidence — live lessons, caring certified tutors, and a structured path from the first letter to confident recitation.",
      arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    },
    mission: {
      eyebrow: "Our mission",
      title: "Quran learning that fits real family life in Germany",
      paragraphs: [
        "Many Muslim families in Germany want their children to learn the Quran properly — with correct pronunciation, real understanding, and a love for the words of Allah. But finding a qualified teacher who fits around school, work and family life is not always easy.",
        "Quran Akademie exists to solve that. Our lessons are taught live, one-to-one, online — so your child learns from a certified tutor in the comfort of your home, at a time that suits your family, in Germany time. Every lesson is personal: the tutor knows your child's level, pace and goals, and every class builds on the last.",
        "Whether your child is taking their first steps with the Arabic alphabet or working towards Hifz, our aim is the same: steady progress, correct Tajweed, and a warm connection with the Quran that lasts a lifetime.",
      ],
      imageAlt: "A mosque at dusk",
    },
    method: {
      eyebrow: "Our teaching method",
      title: "Gentle, structured and level-based",
      subtitle:
        "Every student is placed at the right level and follows a clear learning path. Lessons are calm and encouraging — especially for children — with short, focused steps that build real confidence.",
      steps: [
        {
          title: "Warm-up & revision",
          time: "5 minutes",
          body: "We begin by revising the previous lesson, so new learning always rests on a solid foundation.",
        },
        {
          title: "New lesson",
          time: "15 minutes",
          body: "The tutor introduces the new material — letters, words or verses — step by step, with careful correction of pronunciation and Tajweed.",
        },
        {
          title: "Practice & reading",
          time: "7 minutes",
          body: "The student reads aloud, practises the new material and asks questions. The tutor gives gentle, clear feedback throughout.",
        },
        {
          title: "Wrap-up & homework",
          time: "3 minutes",
          body: "The lesson ends with a short summary, a small practice task for the week, and a word of encouragement.",
        },
      ],
      note: "Lesson length depends on your plan — 25, 30 or 45 minutes — and can be adjusted to suit the student.",
    },
    different: {
      eyebrow: "What makes us different",
      title: "Built around your family, not around a timetable",
      points: [
        {
          title: "Certified tutors",
          body: "Our tutors are qualified Quran teachers with verified credentials and experience teaching children and adults online.",
        },
        {
          title: "Safeguarding first",
          body: "Every tutor is identity-checked and safeguarding-trained. Lessons take place only on approved platforms, and a parent or guardian stays nearby during children's lessons.",
        },
        {
          title: "Germany-time scheduling",
          body: "All classes are scheduled in Germany time (CET/CEST), with after-school and evening slots that work around school, work and family life.",
        },
        {
          title: "Progress reports",
          body: "Parents receive regular updates on their child's progress — what has been covered, what is improving, and what comes next.",
        },
      ],
      imageAlt: "A Quran tutor teaching a live online lesson",
    },
    values: {
      eyebrow: "Our values",
      title: "What guides every lesson",
      items: [
        {
          title: "Ikhlaas — sincerity",
          body: "We teach the Quran for the sake of Allah, with honesty in everything we do.",
        },
        {
          title: "Sabur — patience",
          body: "Every child learns at their own pace. We never rush, compare or pressure.",
        },
        {
          title: "Ihsaan — excellence",
          body: "Correct Tajweed, careful preparation and lessons we would be proud for our own children to attend.",
        },
        {
          title: "Amanah — trust",
          body: "Parents trust us with their children. We honour that trust with safeguarding, transparency and care.",
        },
      ],
    },
  },
  de: {
    hero: {
      eyebrow: "Über die Quran Akademie",
      title: "Hochwertiger Quran-Unterricht, live und im Einzelunterricht",
      subtitle:
        "Wir helfen muslimischen Familien in Deutschland, den Quran mit Selbstvertrauen zu lernen — Live-Unterricht, fürsorgliche zertifizierte Lehrer und ein strukturierter Weg vom ersten Buchstaben bis zur sicheren Rezitation.",
      arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    },
    mission: {
      eyebrow: "Unsere Mission",
      title: "Quran-Lernen, das zum Familienalltag in Deutschland passt",
      paragraphs: [
        "Viele muslimische Familien in Deutschland möchten, dass ihre Kinder den Quran richtig lernen — mit korrekter Aussprache, echtem Verständnis und Liebe zu den Worten Allahs. Doch eine qualifizierte Lehrkraft zu finden, die zu Schule, Beruf und Familienleben passt, ist nicht immer einfach.",
        "Die Quran Akademie wurde gegründet, um genau das zu ändern. Unser Unterricht findet live statt, im Einzelunterricht, online — Ihr Kind lernt also bequem von zu Hause bei einer zertifizierten Lehrkraft, zu einer Zeit, die zu Ihrer Familie passt, in deutscher Zeit. Jede Stunde ist persönlich: Die Lehrkraft kennt das Niveau, das Tempo und die Ziele Ihres Kindes, und jede Stunde baut auf der vorherigen auf.",
        "Ob Ihr Kind die ersten Schritte mit dem arabischen Alphabet macht oder auf Hifz hinarbeitet — unser Ziel bleibt dasselbe: stetiger Fortschritt, korrektes Tajweed und eine warme Verbindung zum Quran, die ein Leben lang hält.",
      ],
      imageAlt: "Eine Moschee in der Abenddämmerung",
    },
    method: {
      eyebrow: "Unsere Lehrmethode",
      title: "Sanft, strukturiert und niveaugerecht",
      subtitle:
        "Jeder Schüler wird auf dem richtigen Niveau eingestuft und folgt einem klaren Lernweg. Der Unterricht ist ruhig und ermutigend — besonders für Kinder — mit kurzen, fokussierten Schritten, die echtes Selbstvertrauen aufbauen.",
      steps: [
        {
          title: "Aufwärmen & Wiederholung",
          time: "5 Minuten",
          body: "Wir beginnen mit der Wiederholung der letzten Stunde, damit Neues immer auf einem soliden Fundament aufbaut.",
        },
        {
          title: "Neuer Lernstoff",
          time: "15 Minuten",
          body: "Die Lehrkraft führt den neuen Stoff — Buchstaben, Wörter oder Verse — Schritt für Schritt ein, mit sorgfältiger Korrektur von Aussprache und Tajweed.",
        },
        {
          title: "Üben & Lesen",
          time: "7 Minuten",
          body: "Der Schüler liest laut vor, übt den neuen Stoff und stellt Fragen. Die Lehrkraft gibt dabei sanftes, klares Feedback.",
        },
        {
          title: "Abschluss & Hausaufgabe",
          time: "3 Minuten",
          body: "Die Stunde endet mit einer kurzen Zusammenfassung, einer kleinen Übungsaufgabe für die Woche und einem Wort der Ermutigung.",
        },
      ],
      note: "Die Unterrichtsdauer hängt vom Tarif ab — 25, 30 oder 45 Minuten — und kann an den Schüler angepasst werden.",
    },
    different: {
      eyebrow: "Was uns anders macht",
      title: "Aufgebaut um Ihre Familie — nicht um einen Stundenplan",
      points: [
        {
          title: "Zertifizierte Lehrkräfte",
          body: "Unsere Lehrkräfte sind qualifizierte Quran-Lehrer mit geprüften Qualifikationen und Erfahrung im Online-Unterricht für Kinder und Erwachsene.",
        },
        {
          title: "Kinderschutz an erster Stelle",
          body: "Jede Lehrkraft ist identitätsgeprüft und im Kinderschutz geschult. Der Unterricht findet nur auf zugelassenen Plattformen statt, und ein Elternteil oder Erziehungsberechtigter bleibt während der Kinderstunden in der Nähe.",
        },
        {
          title: "Terminplanung in deutscher Zeit",
          body: "Alle Stunden werden in deutscher Zeit (MEZ/MESZ) geplant, mit Nachmittags- und Abendterminen, die sich um Schule, Beruf und Familienleben fügen.",
        },
        {
          title: "Fortschrittsberichte",
          body: "Eltern erhalten regelmäßige Rückmeldungen über den Fortschritt ihres Kindes — was behandelt wurde, was sich verbessert und was als Nächstes kommt.",
        },
      ],
      imageAlt: "Ein Koranlehrer im Live-Online-Unterricht",
    },
    values: {
      eyebrow: "Unsere Werte",
      title: "Was jede Stunde leitet",
      items: [
        {
          title: "Ikhlaas — Aufrichtigkeit",
          body: "Wir unterrichten den Quran um Allahs willen, mit Ehrlichkeit in allem, was wir tun.",
        },
        {
          title: "Sabur — Geduld",
          body: "Jedes Kind lernt in seinem eigenen Tempo. Wir hetzen nicht, vergleichen nicht und setzen nicht unter Druck.",
        },
        {
          title: "Ihsaan — Exzellenz",
          body: "Korrektes Tajweed, sorgfältige Vorbereitung und Stunden, auf die wir auch bei unseren eigenen Kindern stolz wären.",
        },
        {
          title: "Amanah — Vertrauen",
          body: "Eltern vertrauen uns ihre Kinder an. Wir ehren dieses Vertrauen mit Kinderschutz, Transparenz und Fürsorge.",
        },
      ],
    },
  },
} as const;

export default function AboutPage() {
  const { locale } = useLocale();
  const t = content[locale];

  return (
    <main>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        arabic={t.hero.arabic}
      />

      {/* Mission */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
              {t.mission.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-brand sm:text-4xl">
              {t.mission.title}
            </h2>
            <div className="gold-rule mt-5" />
            {t.mission.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-5 leading-relaxed text-ink/75">
                {p}
              </p>
            ))}
          </div>
          <div className="overflow-hidden rounded-3xl shadow-card">
            <img
              src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1200&q=80"
              alt={t.mission.imageAlt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Teaching method */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow={t.method.eyebrow}
            title={t.method.title}
            subtitle={t.method.subtitle}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.method.steps.map((step, i) => (
              <div key={step.title} className="rounded-3xl bg-white p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-lg font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="rounded-full bg-gold-soft px-3 py-1 text-xs font-bold text-gold-dark">
                    {step.time}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-brand">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.body}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-ink/60">
            {t.method.note}
          </p>
        </div>
      </section>

      {/* What makes us different */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
          <div className="order-2 overflow-hidden rounded-3xl shadow-card lg:order-1">
            <img
              src="https://images.pexels.com/photos/6937687/pexels-photo-6937687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt={t.different.imageAlt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
              {t.different.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-brand sm:text-4xl">
              {t.different.title}
            </h2>
            <div className="gold-rule mt-5" />
            <ul className="mt-8 space-y-6">
              {t.different.points.map((point) => (
                <li key={point.title} className="flex gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft font-bold text-brand">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-brand">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">
                      {point.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="bg-brand">
        <div className="pattern-star-light">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-light">
                {t.values.eyebrow}
              </p>
              <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                {t.values.title}
              </h2>
              <div className="gold-rule mt-5" />
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {t.values.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/15 bg-white/5 p-6"
                >
                  <h3 className="font-display text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
