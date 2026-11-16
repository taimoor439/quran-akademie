"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { PageHero, CtaBand } from "@/components/Shared";

/** SAMPLE blog posts — cover images verified 200 on 2026-11-12 (see CONVENTIONS.md). */
const posts = [
  {
    slug: "teaching-kids-quran-germany",
    cover:
      "https://images.pexels.com/photos/7155575/pexels-photo-7155575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: { en: "For Parents", de: "Für Eltern" },
    readTime: { en: "6 min read", de: "6 Min. Lesezeit" },
    title: {
      en: "Teaching Your Child the Quran in Germany",
      de: "Ihrem Kind in Deutschland den Koran beibringen",
    },
    excerpt: {
      en: "Starting early, building a routine that survives busy German school days, and keeping your child motivated — a practical guide for parents.",
      de: "Früh anfangen, eine Routine aufbauen, die volle deutsche Schultage übersteht, und Ihr Kind motiviert halten — ein praktischer Leitfaden für Eltern.",
    },
  },
  {
    slug: "choosing-quran-tutor",
    cover:
      "https://images.pexels.com/photos/6937687/pexels-photo-6937687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: { en: "Guides", de: "Ratgeber" },
    readTime: { en: "7 min read", de: "7 Min. Lesezeit" },
    title: {
      en: "How to Choose an Online Quran Tutor",
      de: "Wie man einen Online-Koranlehrer auswählt",
    },
    excerpt: {
      en: "Ijazah, Tajweed, safeguarding checks and the trial class — what to look for, which questions to ask, and the red flags to avoid.",
      de: "Idschaza, Tadschwid, Sicherheitsprüfungen und die Probestunde — worauf Sie achten sollten, welche Fragen Sie stellen müssen und welche Warnsignale es gibt.",
    },
  },
  {
    slug: "tajweed-basics",
    cover:
      "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1200&q=80",
    category: { en: "Learning", de: "Lernen" },
    readTime: { en: "5 min read", de: "5 Min. Lesezeit" },
    title: {
      en: "Tajweed Basics for Beginners",
      de: "Tadschwid-Grundlagen für Anfänger",
    },
    excerpt: {
      en: "What Tajweed really is, why pronunciation changes meaning, and the first articulation points every beginner should practise.",
      de: "Was Tadschwid wirklich ist, warum Aussprache die Bedeutung verändert und welche ersten Artikulationsstellen jeder Anfänger üben sollte.",
    },
  },
  {
    slug: "how-much-do-online-quran-classes-cost",
    cover:
      "https://images.pexels.com/photos/18387340/pexels-photo-18387340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: { en: "Pricing", de: "Preise" },
    readTime: { en: "7 min read", de: "7 Min. Lesezeit" },
    title: {
      en: "How Much Do Online Quran Classes Cost?",
      de: "Was kostet Online-Koranunterricht?",
    },
    excerpt: {
      en: "Live 1-on-1 Quran classes cost $35–$99 a month. See our plans, what drives the price, and how we compare with the wider market.",
      de: "Live-Einzelunterricht im Koran kostet 35–99 $ pro Monat. Alle Tarife, Preisfaktoren und der Marktvergleich im Überblick — mit Geschwisterrabatt und kostenloser Probestunde.",
    },
  },
  {
    slug: "what-age-should-a-child-start-learning-quran",
    cover:
      "https://images.pexels.com/photos/33451745/pexels-photo-33451745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: { en: "For Parents", de: "Für Eltern" },
    readTime: { en: "7 min read", de: "7 Min. Lesezeit" },
    title: {
      en: "What Age Should a Child Start Learning the Quran?",
      de: "Ab welchem Alter sollte ein Kind den Koran lernen?",
    },
    excerpt: {
      en: "Most children can start at 4–5, and 5–7 is the ideal window. Readiness signs, age-by-age stages, and what to expect in the first months.",
      de: "Die meisten Kinder können mit 4–5 Jahren anfangen; 5–7 ist das ideale Alter. Bereitschaftsanzeichen, Altersstufen und die ersten Monate im Überblick.",
    },
  },
  {
    slug: "how-long-does-it-take-to-learn-quran",
    cover:
      "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=1600&q=80",
    category: { en: "Learning", de: "Lernen" },
    readTime: { en: "8 min read", de: "8 Min. Lesezeit" },
    title: {
      en: "How Long Does It Take to Learn the Quran?",
      de: "Wie lange dauert es, den Koran lesen zu lernen?",
    },
    excerpt: {
      en: "Children reach reading fluency in 12–18 months; adults in 6–12. The full timeline — Qaida, Tajweed and Hifz — and what speeds it up.",
      de: "Kinder lesen nach 12–18 Monaten flüssig, Erwachsene nach 6–12. Der komplette Zeitplan — Qaida, Tadschwied und Hifz — und was ihn beschleunigt.",
    },
  },
  {
    slug: "what-is-tajweed",
    cover:
      "https://images.pexels.com/photos/16111758/pexels-photo-16111758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: { en: "Learning", de: "Lernen" },
    readTime: { en: "7 min read", de: "7 Min. Lesezeit" },
    title: {
      en: "What Is Tajweed? A Complete Beginner's Guide",
      de: "Was ist Tadschwied? Ein Leitfaden für Anfänger",
    },
    excerpt: {
      en: "What Tajweed really is, why small sound differences change meaning, and the rule families — makhraj, noon sakinah, madd, waqf — every reciter needs to know.",
      de: "Was Tadschwied wirklich ist, warum kleine Klangunterschiede die Bedeutung verändern und welche Regelfamilien — Machradsch, Nun Sakinah, Madd, Waqf — jeder Rezitator kennen sollte.",
    },
  },
  {
    slug: "noorani-qaida-explained",
    cover:
      "https://www.barakahislamicstore.com/cdn/shop/files/Noorani-Qaeda1_grande_33b8a558-42bc-4bdd-8e32-e9171343fa01.png?v=1706029182",
    category: { en: "Learning", de: "Lernen" },
    readTime: { en: "7 min read", de: "7 Min. Lesezeit" },
    title: {
      en: "Noorani Qaida Explained: What It Is & How Long It Takes",
      de: "Noorani Qaida erklärt: Was sie ist & wie lange sie dauert",
    },
    excerpt: {
      en: "The beginner's primer for reading the Quran: what Noorani Qaida teaches, its six stages, how long it takes (3–6 months), and what comes after it.",
      de: "Das Anfänger-Lehrbuch zum Koranlesen: was die Noorani Qaida lehrt, ihre sechs Stufen, wie lange sie dauert (3–6 Monate) und was danach kommt.",
    },
  },
  {
    slug: "online-vs-in-person-quran-classes",
    cover:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1600&q=80",
    category: { en: "Guides", de: "Ratgeber" },
    readTime: { en: "8 min read", de: "8 Min. Lesezeit" },
    title: {
      en: "Online vs In-Person Quran Classes: An Honest Comparison",
      de: "Online-Koranunterricht vs. Präsenzunterricht: Ein ehrlicher Vergleich",
    },
    excerpt: {
      en: "Online 1-on-1 lessons, mosque school or a home tutor? An honest comparison of cost, flexibility, personal attention and community — and why many families use both.",
      de: "Online-Einzelunterricht, Koranschule oder Privatlehrer? Ein ehrlicher Vergleich von Kosten, Flexibilität, Betreuung und Gemeinschaft — und warum viele Familien beides nutzen.",
    },
  },
  {
    slug: "how-to-choose-an-online-quran-teacher",
    cover:
      "https://images.pexels.com/photos/6937687/pexels-photo-6937687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: { en: "Guides", de: "Ratgeber" },
    readTime: { en: "7 min read", de: "7 Min. Lesezeit" },
    title: {
      en: "How to Choose an Online Quran Teacher: 12 Questions to Ask",
      de: "Koranlehrer online finden: 12 Fragen, die Sie stellen sollten",
    },
    excerpt: {
      en: "Twelve questions to ask any academy or tutor before you book — Ijazah, Tajweed, safeguarding, trial class and pricing — so you choose a teacher you can trust.",
      de: "Zwölf Fragen, die Sie jeder Akademie oder Lehrkraft vor der Buchung stellen sollten — Idschaza, Tadschwied, Kinderschutz, Probestunde und Preise.",
    },
  },
  {
    slug: "how-to-memorize-quran",
    cover:
      "https://images.pexels.com/photos/5801003/pexels-photo-5801003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: { en: "Hifz", de: "Hifz" },
    readTime: { en: "7 min read", de: "7 Min. Lesezeit" },
    title: {
      en: "How to Memorize the Quran: A Beginner's Guide to Hifz",
      de: "Koran auswendig lernen: Ein Hifz-Guide für Anfänger",
    },
    excerpt: {
      en: "How to memorize the Quran from scratch: start with Juz Amma, use the sabaq–sabqi–manzil method, and revise daily — with realistic timelines for every pace.",
      de: "Den Koran von Grund auf auswendig lernen: mit Dschuz Amma starten, die Sabaq–Sabqi–Manzil-Methode nutzen und täglich wiederholen — mit realistischen Zeitplänen.",
    },
  },
  {
    slug: "how-online-quran-classes-work",
    cover:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=80",
    category: { en: "Guides", de: "Ratgeber" },
    readTime: { en: "6 min read", de: "6 Min. Lesezeit" },
    title: {
      en: "How Do Online Quran Classes Work? A Step-by-Step Guide",
      de: "Wie funktioniert Online-Koranunterricht? Eine Schritt-für-Schritt-Anleitung",
    },
    excerpt: {
      en: "Live 1-on-1 Quran lessons on Zoom or Google Meet, in Germany time. Five steps from free trial class to your personal learning plan — here's how it works.",
      de: "Live-Einzelunterricht per Zoom oder Google Meet, nach deutscher Zeit. Fünf Schritte von der kostenlosen Probestunde zum persönlichen Lernplan.",
    },
  },
] as const;

const content = {
  en: {
    hero: {
      eyebrow: "Blog",
      title: "Guides for families learning the Quran",
      subtitle:
        "Practical advice on teaching children, choosing a tutor and building a recitation habit — written for Muslim families living in Germany.",
    },
    readMore: "Read article",
    moreSoon: "More articles coming soon — Tajweed rules in depth, Hifz revision plans, and Arabic for beginners.",
  },
  de: {
    hero: {
      eyebrow: "Blog",
      title: "Ratgeber für Familien, die den Koran lernen",
      subtitle:
        "Praktische Tipps zum Unterrichten von Kindern, zur Auswahl einer Lehrkraft und zum Aufbau einer Rezitationsroutine — geschrieben für muslimische Familien in Deutschland.",
    },
    readMore: "Artikel lesen",
    moreSoon:
      "Weitere Artikel folgen bald — Tadschwied-Regeln im Detail, Hifz-Wiederholungspläne und Arabisch für Anfänger.",
  },
} as const;

export default function BlogPage() {
  const { locale } = useLocale();
  const t = content[locale];

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-card transition hover:shadow-lift"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <img
                    src={post.cover}
                    alt={post.title[locale]}
                    loading="lazy"
                    className="h-52 w-full object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold tracking-wide text-gold-dark">
                    {post.category[locale]} · {post.readTime[locale]}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-brand">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition hover:text-brand-light"
                    >
                      {post.title[locale]}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 leading-relaxed text-ink/70">
                    {post.excerpt[locale]}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-5 inline-flex items-center gap-2 font-bold text-brand"
                  >
                    {t.readMore} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-12 text-center text-sm font-semibold text-ink/60">
            {t.moreSoon}
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
