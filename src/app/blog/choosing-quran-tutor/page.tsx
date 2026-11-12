"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { CtaBand } from "@/components/Shared";

// SAMPLE blog post. Cover image verified 200 on 2026-11-12 (see CONVENTIONS.md).
const COVER =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80";

interface Section {
  heading: string;
  paragraphs: string[];
  list?: string[];
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
    category: "Guides",
    readTime: "7 min read",
    title: "How to Choose an Online Quran Tutor",
    intro:
      "Your child's Quran tutor will shape not only how they read, but how they feel about the Quran for years to come. With hundreds of tutors advertising online, choosing well matters. Here is what to look for, which questions to ask, and the warning signs that should make you walk away.",
    coverAlt: "Students learning together on a laptop",
    sections: [
      {
        heading: "Qualifications to look for",
        paragraphs: [
          "Start with the basics: can the tutor read the Quran fluently with correct Tajweed, and can they prove it? A serious tutor will happily tell you where they studied, who their teachers were, and whether they hold an Ijazah — a formal certification to teach the Quran. For Hifz students, the tutor should be a Hafiz or Hafiza themselves; you cannot guide a memorisation journey you have never walked.",
          "Qualifications on paper are only half the story, though. Teaching experience matters just as much, especially with children. Ask how long the tutor has taught online, which age groups they specialise in, and whether they have taught students in Germany or Europe before — a tutor who understands German school life and European time zones will plan lessons far more realistically.",
        ],
        list: [
          "Ijazah or recognised Quran teaching certificate",
          "Hifz qualification for memorisation students",
          "Experience teaching your child's age group",
          "Experience with students in Germany or Europe",
        ],
      },
      {
        heading: "Tajweed and Ijazah — what they really mean",
        paragraphs: [
          "Tajweed is the set of rules that govern how each letter of the Quran is pronounced — where the sound is formed, how long it is held, and how letters change when they meet. A tutor who teaches without Tajweed is teaching your child to read the words, but not to recite the Quran as it was revealed. Even for young beginners, correct pronunciation should be taught from the very first lesson, because bad habits formed early are painful to unlearn.",
          "An Ijazah goes one step further. It is a certificate granted by a qualified teacher to a student who has recited the entire Quran to them correctly, and it carries a chain of transmission (isnad) back through generations of teachers to the Prophet ﷺ. Not every good tutor holds one, and its absence is not automatically a problem — but a tutor who does hold an Ijazah has been tested to the highest standard, and that is worth asking about.",
        ],
      },
      {
        heading: "Safeguarding checks you should expect",
        paragraphs: [
          "Your child will spend hours alone on video calls with this person, so safeguarding is not a formality — it is the foundation of trust. Any reputable academy should be able to tell you what checks its tutors have passed, how lessons are supervised, and what happens if a parent raises a concern. If an academy cannot answer these questions clearly, that itself is an answer.",
          "Practical safeguards matter too. Lessons should take place on a proper platform with the camera on, parents should be welcome to sit nearby or observe, and there should be a clear channel for reporting any concern — ideally to the academy, not only to the tutor. A tutor who discourages parental involvement is a tutor to avoid.",
        ],
        list: [
          "Background checks completed for every tutor",
          "Lessons on a proper platform, camera on",
          "Parents welcome to observe at any time",
          "A clear, written safeguarding policy and reporting route",
        ],
      },
      {
        heading: "What to watch for in the trial class",
        paragraphs: [
          "The trial class is your best tool — use it properly. Do not just check whether the tutor knows their subject; watch how they teach. Do they speak to your child warmly and by name? Do they correct mistakes gently, or with impatience? Do they check understanding, or simply plough through the page? A good tutor makes a nervous child relax within minutes.",
          "Also notice the structure. A well-run trial class has a clear beginning (a warm welcome and a quick level check), a focused middle (a small, achievable piece of learning), and a clear end (a short summary and something to practise). If the lesson feels aimless, the regular lessons probably will too. And afterwards, ask your child directly: did you enjoy it, and would you like to learn with this teacher again?",
        ],
      },
      {
        heading: "Female teachers — when they are the right choice",
        paragraphs: [
          "Many families, especially those with daughters, prefer a female teacher — and for good reason. Girls approaching puberty are often more comfortable learning with a woman, and many mothers find it easier to discuss their daughter's progress with a female tutor. A good academy should offer qualified female teachers (Hafiza, Ijazah holders) as a standard option, not a special request.",
          "Female teachers are also an excellent choice for younger children of both genders. Young boys and girls alike often respond well to a warm, patient female teacher in their early years, and switching to a male teacher later — if the family wishes — is straightforward once the foundations are solid. The key is the teacher's quality, not only their gender.",
        ],
      },
      {
        heading: "Red flags to walk away from",
        paragraphs: [
          "Some warning signs should end the conversation immediately. A tutor or academy that refuses a trial class, cannot show any qualification, or pressures you to pay for months in advance before a single lesson has taken place is not worth your trust — or your money. Genuine teachers are confident enough to let their teaching speak for itself.",
          "Other red flags are subtler but just as telling: lessons that start late and end early, no feedback after lessons, no plan for what your child will learn over the coming months, and no way to contact anyone except the tutor. Your child deserves a professional setup. If something feels wrong, trust your instinct, and keep looking — the right tutor is worth the search.",
        ],
        list: [
          "No trial class offered",
          "No qualifications shown or verifiable",
          "Pressure to pay for months upfront",
          "No feedback, no learning plan, no one to contact",
        ],
      },
    ],
    back: "← Back to all articles",
  },
  de: {
    category: "Ratgeber",
    readTime: "7 Min. Lesezeit",
    title: "Wie man einen Online-Koranlehrer auswählt",
    intro:
      "Die Koranlehrkraft Ihres Kindes prägt nicht nur, wie es liest, sondern auch, wie es sich jahrelang gegenüber dem Koran fühlt. Bei Hunderten von Lehrkräften, die online werben, ist eine gute Wahl wichtig. Hier erfahren Sie, worauf Sie achten sollten, welche Fragen Sie stellen müssen und welche Warnsignale Sie zum Gehen bewegen sollten.",
    coverAlt: "Schüler lernen gemeinsam am Laptop",
    sections: [
      {
        heading: "Qualifikationen, auf die Sie achten sollten",
        paragraphs: [
          "Beginnen Sie mit den Grundlagen: Kann die Lehrkraft den Koran flüssig und mit korrektem Tadschwid lesen — und kann sie das belegen? Eine ernsthafte Lehrkraft erzählt Ihnen gern, wo sie studiert hat, wer ihre Lehrer waren und ob sie eine Idschaza besitzt — eine formelle Lehrbefugnis für den Koran. Für Hifz-Schüler sollte die Lehrkraft selbst Hafiz oder Hafiza sein; man kann keine Auswendiglernreise begleiten, die man selbst nie gegangen ist.",
          "Qualifikationen auf dem Papier sind aber nur die halbe Geschichte. Unterrichtserfahrung ist genauso wichtig, besonders mit Kindern. Fragen Sie, wie lange die Lehrkraft schon online unterrichtet, auf welche Altersgruppen sie spezialisiert ist und ob sie bereits Schüler in Deutschland oder Europa unterrichtet hat — eine Lehrkraft, die den deutschen Schulalltag und europäische Zeitzonen versteht, plant Stunden deutlich realistischer.",
        ],
        list: [
          "Idschaza oder anerkanntes Zertifikat für Koranunterricht",
          "Hifz-Qualifikation für Schüler, die auswendig lernen",
          "Erfahrung mit der Altersgruppe Ihres Kindes",
          "Erfahrung mit Schülern in Deutschland oder Europa",
        ],
      },
      {
        heading: "Tadschwid und Idschaza — was sie wirklich bedeuten",
        paragraphs: [
          "Tadschwid ist das Regelwerk, das bestimmt, wie jeder Buchstabe des Korans ausgesprochen wird — wo der Laut gebildet wird, wie lange er gehalten wird und wie sich Buchstaben verändern, wenn sie aufeinandertreffen. Eine Lehrkraft, die ohne Tadschwid unterrichtet, bringt Ihrem Kind bei, die Wörter zu lesen — aber nicht, den Koran so zu rezitieren, wie er offenbart wurde. Selbst bei jungen Anfängern sollte korrekte Aussprache ab der ersten Stunde gelehrt werden, denn früh eingeprägte Fehler sind schmerzhaft wieder abzulegen.",
          "Eine Idschaza geht noch einen Schritt weiter. Sie ist ein Zertifikat, das eine qualifizierte Lehrkraft einem Schüler verleiht, der ihr den gesamten Koran korrekt rezitiert hat — mit einer Überlieferungskette (Isnad), die über Generationen von Lehrern bis zum Propheten ﷺ zurückreicht. Nicht jede gute Lehrkraft besitzt eine, und ihr Fehlen ist nicht automatisch ein Problem — aber eine Lehrkraft mit Idschaza wurde nach höchstem Standard geprüft, und danach lohnt es sich zu fragen.",
        ],
      },
      {
        heading: "Sicherheitsprüfungen, die Sie erwarten sollten",
        paragraphs: [
          "Ihr Kind wird Stunden allein in Videoanrufen mit dieser Person verbringen — deshalb ist Kinderschutz keine Formalität, sondern die Grundlage des Vertrauens. Jede seriöse Akademie sollte Ihnen sagen können, welche Prüfungen ihre Lehrkräfte bestanden haben, wie Stunden beaufsichtigt werden und was passiert, wenn Eltern ein Anliegen melden. Wenn eine Akademie diese Fragen nicht klar beantworten kann, ist das selbst eine Antwort.",
          "Auch praktische Schutzmaßnahmen zählen. Stunden sollten auf einer geeigneten Plattform mit eingeschalteter Kamera stattfinden, Eltern sollten jederzeit in der Nähe sitzen oder zuschauen dürfen, und es sollte einen klaren Weg geben, Bedenken zu melden — idealerweise an die Akademie, nicht nur an die Lehrkraft. Eine Lehrkraft, die elterliche Beteiligung ablehnt, ist eine Lehrkraft, die man meiden sollte.",
        ],
        list: [
          "Hintergrundprüfungen für jede Lehrkraft abgeschlossen",
          "Stunden auf einer geeigneten Plattform, Kamera an",
          "Eltern dürfen jederzeit zuschauen",
          "Klare, schriftliche Kinderschutzrichtlinie und Meldeweg",
        ],
      },
      {
        heading: "Worauf Sie in der Probestunde achten sollten",
        paragraphs: [
          "Die Probestunde ist Ihr bestes Werkzeug — nutzen Sie sie richtig. Prüfen Sie nicht nur, ob die Lehrkraft ihr Fach beherrscht; beobachten Sie, wie sie unterrichtet. Spricht sie Ihr Kind herzlich und beim Namen an? Korrigiert sie Fehler sanft oder ungeduldig? Prüft sie das Verständnis, oder arbeitet sie einfach die Seite ab? Eine gute Lehrkraft lässt ein nervöses Kind innerhalb weniger Minuten entspannen.",
          "Achten Sie auch auf die Struktur. Eine gut geführte Probestunde hat einen klaren Anfang (herzliche Begrüßung und kurze Niveau-Einschätzung), eine fokussierte Mitte (ein kleines, erreichbares Lernziel) und ein klares Ende (kurze Zusammenfassung und etwas zum Üben). Wenn die Stunde ziellos wirkt, werden die regulären Stunden es wahrscheinlich auch sein. Und fragen Sie Ihr Kind danach direkt: Hat es dir gefallen, und möchtest du wieder mit dieser Lehrkraft lernen?",
        ],
      },
      {
        heading: "Lehrerinnen — wann sie die richtige Wahl sind",
        paragraphs: [
          "Viele Familien, besonders solche mit Töchtern, bevorzugen eine Lehrerin — und das aus gutem Grund. Mädchen in der Pubertät lernen oft lieber mit einer Frau, und viele Mütter finden es leichter, den Fortschritt ihrer Tochter mit einer Lehrerin zu besprechen. Eine gute Akademie sollte qualifizierte Lehrerinnen (Hafiza, Idschaza-Inhaberinnen) als Standardangebot haben, nicht als Sonderwunsch.",
          "Lehrerinnen sind auch eine ausgezeichnete Wahl für jüngere Kinder beider Geschlechter. Junge Jungen und Mädchen reagieren in ihren frühen Jahren oft gut auf eine herzliche, geduldige Lehrerin, und ein späterer Wechsel zu einem Lehrer — falls die Familie das wünscht — ist unkompliziert, sobald die Grundlagen sitzen. Entscheidend ist die Qualität der Lehrkraft, nicht nur ihr Geschlecht.",
        ],
      },
      {
        heading: "Warnsignale, bei denen Sie gehen sollten",
        paragraphs: [
          "Einige Warnsignale sollten das Gespräch sofort beenden. Eine Lehrkraft oder Akademie, die eine Probestunde verweigert, keine Qualifikation vorzeigen kann oder Sie drängt, monatelang im Voraus zu zahlen, bevor eine einzige Stunde stattgefunden hat, ist weder Ihr Vertrauen noch Ihr Geld wert. Echte Lehrkräfte sind selbstbewusst genug, ihren Unterricht für sich sprechen zu lassen.",
          "Andere Warnsignale sind subtiler, aber genauso aufschlussreich: Stunden, die zu spät beginnen und zu früh enden, keine Rückmeldung nach den Stunden, kein Plan dafür, was Ihr Kind in den kommenden Monaten lernen soll, und keine Ansprechperson außer der Lehrkraft selbst. Ihr Kind verdient ein professionelles Umfeld. Wenn sich etwas falsch anfühlt, vertrauen Sie Ihrem Bauchgefühl und suchen Sie weiter — die richtige Lehrkraft ist die Suche wert.",
        ],
        list: [
          "Keine Probestunde angeboten",
          "Keine Qualifikationen vorgelegt oder nachprüfbar",
          "Druck, monatelang im Voraus zu zahlen",
          "Keine Rückmeldung, kein Lernplan, keine Ansprechperson",
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
