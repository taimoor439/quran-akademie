"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { CtaBand } from "@/components/Shared";

// SAMPLE blog post. Cover image verified 200 on 2026-11-12 (see CONVENTIONS.md).
const COVER =
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80";

interface Section {
  heading: string;
  paragraphs: string[];
  list?: string[];
  faqs?: { q: string; a: string }[];
}

const content: {
  en: {
    category: string;
    readTime: string;
    title: string;
    intro: string;
    coverAlt: string;
    sections: Section[];
    back: string;
  };
  de: {
    category: string;
    readTime: string;
    title: string;
    intro: string;
    coverAlt: string;
    sections: Section[];
    back: string;
  };
} = {
  en: {
    category: "For Parents",
    readTime: "6 min read",
    title: "Teaching Your Child the Quran in Germany",
    intro:
      "Raising a child in Germany who loves the Quran is absolutely possible — but it takes a plan. Between school, homework, football practice and German daily life, Quran learning needs a routine that fits your family, a tutor your child trusts, and a lot of patience. Here is how to start well.",
    coverAlt: "Children learning together in a classroom",
    sections: [
      {
        heading: "Why starting early makes such a difference",
        paragraphs: [
          "Children between the ages of four and seven absorb sounds, rhythms and new alphabets almost effortlessly. The Arabic letters, the melody of recitation and the habit of opening the Quran all settle much more easily in these early years than they ever will later. Starting early does not mean pushing a small child — it means short, playful sessions that build familiarity before school pressure arrives.",
          "Just as important is the habit itself. A child who grows up with ten or twenty minutes of Quran time after school does not see it as an extra burden; it is simply part of the day, like brushing teeth. Families who wait until the teenage years often find they are competing with exams, friends and screens. The earlier you begin, the more natural the habit becomes.",
        ],
      },
      {
        heading: "Choosing the right tutor for your child",
        paragraphs: [
          "The tutor matters more than the curriculum. A good children's tutor is patient, warm and able to make a lesson feel like a conversation rather than a test. Look for someone with experience teaching young children specifically — teaching an adult and teaching a seven-year-old are very different skills — and ask whether they hold an Ijazah or a recognised teaching qualification.",
          "Many parents in Germany also prefer a tutor who speaks the language their child is most comfortable in, whether that is English, German, Urdu or Arabic. A child who can ask questions in their own words learns far faster. And do not underestimate the trial class: watch how your child reacts. If they come out of the lesson smiling, you have probably found the right person.",
        ],
      },
      {
        heading: "Building a routine that sticks",
        paragraphs: [
          "Consistency beats intensity. Three short lessons a week will achieve far more than one long, tiring session on a Sunday. Pick a fixed time — for example, straight after homework or before dinner — and protect it the way you would a school lesson. Children thrive on predictability, and a fixed slot removes the daily negotiation about when to practise.",
          "Keep the daily practice small and achievable. Five minutes of revision between lessons is enough for a young child, and it matters far more than an occasional hour of cramming. A simple wall chart where your child ticks off each day's practice can work wonders: children love seeing their own streak grow.",
        ],
        list: [
          "Fix the same time on the same days each week",
          "Keep practice short: 5–10 minutes for young children",
          "Use a visible chart or sticker system for motivation",
          "Revise yesterday's lesson before starting something new",
        ],
      },
      {
        heading: "Scheduling around German school life",
        paragraphs: [
          "German school days usually end in the early afternoon, which leaves a natural window for Quran lessons between 3 pm and 7 pm Germany time. Most families find that a slot right after a snack and a short break works best — the child is still alert, and the evening stays free for family time. Weekend mornings are another good option, especially for families with busy weekday evenings.",
          "Remember to plan around the German school holidays, which vary by Bundesland. A good online academy will pause or reschedule lessons during your family's holiday weeks, and many families use the longer summer break for a gentle revision programme rather than stopping completely — six weeks without any recitation can undo months of progress.",
        ],
      },
      {
        heading: "Keeping children motivated",
        paragraphs: [
          "Motivation is the real long game. Children stay motivated when they can see their own progress: finishing a page of Qaida, memorising their first short surah, reciting in front of grandparents on a video call. Celebrate these milestones loudly. A small reward, a family dua or simply telling them how proud you are goes further than any lecture about the importance of learning.",
          "It also helps enormously when the Quran is part of family life, not only a lesson. Play recitation in the car, let your child choose a surah for the family to listen to, and recite together after Fajr or Maghrib when you can. When children see their parents valuing the Quran, they value it too.",
        ],
      },
      {
        heading: "Online lessons or weekend school?",
        paragraphs: [
          "Many German cities have weekend Islamic schools and mosque classes, and they are wonderful for community and friendship. But for learning to actually read the Quran well, nothing replaces one-to-one attention. In a group of fifteen children, your child may read aloud for only a few minutes; in a private online lesson, every minute is theirs, and the tutor corrects every letter.",
          "The two can work beautifully together: weekend school for community, Islamic studies and friends, and online one-to-one lessons for reading, Tajweed and Hifz. Online lessons also remove the drive across town on a Saturday morning — a practical advantage that should not be underestimated for busy families.",
        ],
      },
      {
        heading: "Questions parents often ask",
        paragraphs: [
          "Every family worries about the same few things before starting. Here are honest answers to the questions we hear most often from parents in Germany.",
        ],
        faqs: [
          {
            q: "How old should my child be to start?",
            a: "Most children are ready for Noorani Qaida from around age four or five, once they can sit and focus for fifteen to twenty minutes. There is no rush — a child who starts at six with a good tutor often catches up quickly. The right time is when your child is curious and you can keep the routine going.",
          },
          {
            q: "My child does not speak Arabic. Is that a problem?",
            a: "Not at all. Almost all children in Germany start with no Arabic. Qaida begins with the alphabet itself, and a good tutor teaches reading before meaning. Understanding comes later, through Tafseer and Arabic lessons, once the reading is fluent.",
          },
          {
            q: "How long will it take before my child reads fluently?",
            a: "With two to three lessons a week and a little daily practice, most children finish Qaida within six to twelve months and begin reading the Quran itself. Fluency with good Tajweed typically takes one to two years of steady learning. Every child is different — the goal is steady progress, not speed.",
          },
        ],
      },
    ],
    back: "← Back to all articles",
  },
  de: {
    category: "Für Eltern",
    readTime: "6 Min. Lesezeit",
    title: "Ihrem Kind in Deutschland den Koran beibringen",
    intro:
      "Ein Kind in Deutschland zu erziehen, das den Koran liebt, ist absolut möglich — aber es braucht einen Plan. Zwischen Schule, Hausaufgaben, Fußballtraining und deutschem Alltag braucht das Koranlernen eine Routine, die zu Ihrer Familie passt, eine Lehrkraft, der Ihr Kind vertraut, und viel Geduld. So gelingt der Start.",
    coverAlt: "Kinder lernen gemeinsam im Klassenzimmer",
    sections: [
      {
        heading: "Warum ein früher Start so viel ausmacht",
        paragraphs: [
          "Kinder zwischen vier und sieben Jahren nehmen Laute, Rhythmen und neue Alphabete fast mühelos auf. Die arabischen Buchstaben, die Melodie der Rezitation und die Gewohnheit, den Koran aufzuschlagen, verankern sich in diesen frühen Jahren viel leichter als später. Früh anzufangen bedeutet nicht, ein kleines Kind zu drängen — es bedeutet kurze, spielerische Einheiten, die Vertrautheit aufbauen, bevor der Schuldruck einsetzt.",
          "Genauso wichtig ist die Gewohnheit selbst. Ein Kind, das mit zehn oder zwanzig Minuten Koranzeit nach der Schule aufwächst, empfindet das nicht als zusätzliche Belastung; es gehört einfach zum Tag dazu, wie Zähneputzen. Familien, die bis ins Teenageralter warten, stellen oft fest, dass sie mit Prüfungen, Freunden und Bildschirmen konkurrieren. Je früher Sie beginnen, desto natürlicher wird die Gewohnheit.",
        ],
      },
      {
        heading: "Die richtige Lehrkraft für Ihr Kind finden",
        paragraphs: [
          "Die Lehrkraft ist wichtiger als der Lehrplan. Eine gute Kinderlehrkraft ist geduldig, herzlich und kann eine Stunde wie ein Gespräch statt wie eine Prüfung gestalten. Suchen Sie jemanden mit Erfahrung im Unterrichten junger Kinder — einen Erwachsenen und ein siebenjähriges Kind zu unterrichten, sind zwei sehr unterschiedliche Fähigkeiten — und fragen Sie nach einer Idschaza oder einer anerkannten Lehrqualifikation.",
          "Viele Eltern in Deutschland bevorzugen außerdem eine Lehrkraft, die die Sprache spricht, in der sich ihr Kind am wohlsten fühlt — ob Englisch, Deutsch, Urdu oder Arabisch. Ein Kind, das Fragen in seinen eigenen Worten stellen kann, lernt deutlich schneller. Und unterschätzen Sie die Probestunde nicht: Beobachten Sie, wie Ihr Kind reagiert. Wenn es lächelnd aus der Stunde kommt, haben Sie wahrscheinlich die richtige Person gefunden.",
        ],
      },
      {
        heading: "Eine Routine aufbauen, die hält",
        paragraphs: [
          "Regelmäßigkeit schlägt Intensität. Drei kurze Stunden pro Woche erreichen deutlich mehr als eine lange, ermüdende Einheit am Sonntag. Wählen Sie eine feste Uhrzeit — zum Beispiel direkt nach den Hausaufgaben oder vor dem Abendessen — und schützen Sie sie wie eine Schulstunde. Kinder lieben Berechenbarkeit, und ein fester Termin erspart das tägliche Verhandeln darüber, wann geübt wird.",
          "Halten Sie das tägliche Üben klein und machbar. Fünf Minuten Wiederholung zwischen den Stunden reichen für ein junges Kind völlig aus — und sie bringen weit mehr als gelegentliches stundenlanges Pauken. Eine einfache Wandtafel, auf der Ihr Kind jeden Übungstag abhakt, kann Wunder wirken: Kinder lieben es, ihre eigene Serie wachsen zu sehen.",
        ],
        list: [
          "Gleiche Uhrzeit an denselben Wochentagen",
          "Kurz üben: 5–10 Minuten für junge Kinder",
          "Sichtbare Tabelle oder Sticker-System zur Motivation",
          "Vor Neuem immer die gestrige Lektion wiederholen",
        ],
      },
      {
        heading: "Planung rund um den deutschen Schulalltag",
        paragraphs: [
          "Der deutsche Schultag endet meist am frühen Nachmittag — das lässt ein natürliches Zeitfenster für Koranstunden zwischen 15 und 19 Uhr deutscher Zeit. Die meisten Familien finden, dass ein Termin direkt nach einem Snack und einer kurzen Pause am besten funktioniert: Das Kind ist noch wach, und der Abend bleibt für die Familie frei. Auch Wochenendvormittage sind eine gute Option, besonders für Familien mit vollen Abenden unter der Woche.",
          "Denken Sie auch an die deutschen Schulferien, die je nach Bundesland variieren. Eine gute Online-Akademie pausiert oder verschiebt Stunden in Ihren Ferienwochen, und viele Familien nutzen die langen Sommerferien für ein sanftes Wiederholungsprogramm statt ganz aufzuhören — sechs Wochen ohne Rezitation können Monate an Fortschritt zunichtemachen.",
        ],
      },
      {
        heading: "Kinder motiviert halten",
        paragraphs: [
          "Motivation ist das eigentliche Langzeitspiel. Kinder bleiben motiviert, wenn sie ihren eigenen Fortschritt sehen können: eine abgeschlossene Qaida-Seite, die erste auswendig gelernte kurze Sure, das Rezitieren vor den Großeltern im Videoanruf. Feiern Sie diese Meilensteine laut. Eine kleine Belohnung, ein Familien-Dua oder einfach zu sagen, wie stolz Sie sind, wirkt mehr als jede Predigt über die Wichtigkeit des Lernens.",
          "Es hilft auch enorm, wenn der Koran Teil des Familienlebens ist und nicht nur eine Stunde. Spielen Sie Rezitationen im Auto ab, lassen Sie Ihr Kind eine Sure aussuchen, die die Familie gemeinsam hört, und rezitieren Sie nach Fadschr oder Maghrib gemeinsam, wenn es passt. Wenn Kinder sehen, dass ihre Eltern den Koran schätzen, schätzen sie ihn auch.",
        ],
      },
      {
        heading: "Online-Unterricht oder Wochenendschule?",
        paragraphs: [
          "Viele deutsche Städte haben islamische Wochenendschulen und Moscheekurse, und sie sind wunderbar für Gemeinschaft und Freundschaften. Aber um wirklich gut Koran lesen zu lernen, ersetzt nichts die Einzelbetreuung. In einer Gruppe von fünfzehn Kindern liest Ihr Kind vielleicht nur wenige Minuten laut vor; in einer privaten Online-Stunde gehört jede Minute ihm, und die Lehrkraft korrigiert jeden Buchstaben.",
          "Beides lässt sich wunderbar kombinieren: die Wochenendschule für Gemeinschaft, Islamkunde und Freunde, und der Online-Einzelunterricht für Lesen, Tadschwid und Hifz. Der Online-Unterricht erspart außerdem die Fahrt quer durch die Stadt am Samstagmorgen — ein praktischer Vorteil, den man bei vollen Familienkalendern nicht unterschätzen sollte.",
        ],
      },
      {
        heading: "Fragen, die Eltern oft stellen",
        paragraphs: [
          "Jede Familie macht sich vor dem Start dieselben wenigen Sorgen. Hier sind ehrliche Antworten auf die Fragen, die wir von Eltern in Deutschland am häufigsten hören.",
        ],
        faqs: [
          {
            q: "Wie alt sollte mein Kind sein, um anzufangen?",
            a: "Die meisten Kinder sind ab etwa vier oder fünf Jahren bereit für die Noorani Qaida, sobald sie sich fünfzehn bis zwanzig Minuten konzentrieren können. Es gibt keinen Grund zur Eile — ein Kind, das mit sechs Jahren mit einer guten Lehrkraft beginnt, holt oft schnell auf. Der richtige Zeitpunkt ist dann, wenn Ihr Kind neugierig ist und Sie die Routine durchhalten können.",
          },
          {
            q: "Mein Kind spricht kein Arabisch. Ist das ein Problem?",
            a: "Überhaupt nicht. Fast alle Kinder in Deutschland beginnen ohne Arabischkenntnisse. Die Qaida fängt beim Alphabet selbst an, und eine gute Lehrkraft unterrichtet zuerst das Lesen, dann die Bedeutung. Das Verständnis kommt später — durch Tafsir und Arabischunterricht, sobald das Lesen flüssig ist.",
          },
          {
            q: "Wie lange dauert es, bis mein Kind flüssig liest?",
            a: "Mit zwei bis drei Stunden pro Woche und etwas täglichem Üben schließen die meisten Kinder die Qaida innerhalb von sechs bis zwölf Monaten ab und beginnen, den Koran selbst zu lesen. Flüssigkeit mit gutem Tadschwid braucht in der Regel ein bis zwei Jahre stetigen Lernens. Jedes Kind ist anders — das Ziel ist stetiger Fortschritt, nicht Geschwindigkeit.",
          },
        ],
      },
    ],
    back: "← Zurück zu allen Artikeln",
  },
};

export default function BlogPostPage() {
  const { locale } = useLocale();
  const t = content[locale];

  return (
    <>
      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-4 pb-4 pt-10 sm:px-6">
          <Link
            href="/blog"
            className="text-sm font-bold text-brand hover:text-brand-light"
          >
            {t.back}
          </Link>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
            {t.category} · {t.readTime}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-brand sm:text-5xl">
            {t.title}
          </h1>
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
              <h2 className="font-serif text-2xl font-bold text-brand sm:text-3xl">
                {section.heading}
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-gold" />
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
              {section.faqs && (
                <div className="mt-6 space-y-4">
                  {section.faqs.map((faq) => (
                    <div key={faq.q} className="rounded-2xl bg-cream p-5">
                      <p className="font-bold text-brand">{faq.q}</p>
                      <p className="mt-2 leading-relaxed text-ink/75">{faq.a}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}

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
