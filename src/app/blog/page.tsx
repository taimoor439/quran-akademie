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
    moreSoon: "More articles coming soon — on Hifz, Arabic for children and family routines.",
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
      "Weitere Artikel folgen bald — über Hifz, Arabisch für Kinder und Familienroutinen.",
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
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
                    {post.category[locale]} · {post.readTime[locale]}
                  </p>
                  <h2 className="mt-3 font-serif text-2xl font-bold leading-snug text-brand">
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
