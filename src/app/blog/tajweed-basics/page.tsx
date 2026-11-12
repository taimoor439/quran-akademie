"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { CtaBand } from "@/components/Shared";

// SAMPLE blog post. Cover image verified 200 on 2026-11-12 (see CONVENTIONS.md).
const COVER =
  "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1600&q=80";

interface Section {
  heading: string;
  paragraphs: string[];
  list?: string[];
  arabic?: string;
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
    category: "Learning",
    readTime: "5 min read",
    title: "Tajweed Basics for Beginners",
    intro:
      "Tajweed sounds technical, but at its heart it is simple: giving every letter of the Quran its due. This guide explains what Tajweed is, why it matters, and the first steps any beginner — child or adult — can take towards beautiful, correct recitation.",
    coverAlt: "Quran resting on a wooden rehal stand",
    sections: [
      {
        heading: "What Tajweed actually is",
        paragraphs: [
          "The word Tajweed comes from the Arabic root j-w-d, meaning to make good, to beautify, to do something with excellence. In practice, Tajweed is the science of reciting the Quran the way it was revealed: every letter pronounced from its correct place, with its correct qualities, for its correct length. It is not about singing, and it is not about showing off a beautiful voice — it is about accuracy and respect for the words of Allah.",
          "The Quran itself commands this care: \"and recite the Quran with measured recitation\" (73:4). The Prophet ﷺ recited slowly and clearly, pausing at the ends of verses, and his companions learned the Quran from him letter by letter. Tajweed is simply the careful preservation of that way of reciting, passed down teacher to student for fourteen centuries.",
        ],
        arabic: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا",
      },
      {
        heading: "Why pronunciation matters",
        paragraphs: [
          "In Arabic, small differences in sound change meaning completely. The letters ح (haa) and ه (haa) sound similar to a beginner's ear, but they are different letters — and mixing them up changes the word you are saying. The same is true of ق (qaaf) and ك (kaaf), or س (seen) and ص (saad). Correct pronunciation is not a matter of style; it is a matter of saying the right words.",
          "There is also a spiritual dimension. The Quran was revealed in a specific form, and reciting it correctly is part of honouring it. Many students find that once they slow down and pay attention to each letter, their recitation becomes more beautiful almost by itself — and their connection to what they are reading deepens too.",
        ],
      },
      {
        heading: "Makhraj: where each letter is born",
        paragraphs: [
          "The foundation of Tajweed is makhraj — the articulation point of each letter, the exact place in the mouth or throat where its sound is produced. The 28 letters of the Arabic alphabet are formed in five main areas: the throat (like ح and ع), the tongue (like ق and ل), the lips (like ب and م), the nasal passage (the ghunnah sound of ن and م), and the empty space of the mouth (for the long vowels).",
          "Beginners should start with the letters that have no equivalent in English or German, because these are the ones most often mispronounced. The deep throat letters ح and ع, the emphatic letters ص ض ط ظ, and the difference between ق from the back of the tongue and ك from the middle — mastering these few sounds transforms a recitation more than any other single step.",
        ],
        list: [
          "Throat (al-halq): ء هـ ع ح غ خ",
          "Tongue (al-lisan): ق ك ج ش ي ض ل ن ر ت د ط س ز ص ظ ذ ث",
          "Lips (ash-shafatan): ف ب م و",
          "Nasal passage (al-khayshum): the ghunnah of ن and م",
          "Mouth cavity (al-jawf): the long vowels ا و ي",
        ],
      },
      {
        heading: "Common beginner mistakes",
        paragraphs: [
          "Almost every beginner makes the same handful of mistakes, and recognising them is half the battle. The most common is rushing: reading fast feels like progress, but it hides errors and trains the tongue to be sloppy. Slow, deliberate recitation — even if it feels painfully slow — builds the accuracy that speed can later be built on.",
          "Other frequent mistakes include ignoring the madd (stretching long vowels too short or too long), skipping the ghunnah (the nasal sound held for two counts on ن and م with shaddah), and merging similar letters — saying س when the letter is ص, or هـ when it is ح. None of these are shameful; they are exactly what lessons are for. But they do need a trained ear to catch them, which is why self-study alone rarely works.",
        ],
        list: [
          "Rushing through verses instead of reciting slowly",
          "Shortening or over-stretching the madd (long vowels)",
          "Skipping the ghunnah on ن and م with shaddah",
          "Merging similar letters (س/ص, هـ/ح, ق/ك)",
          "Ignoring the rules of noon saakinah and tanween",
        ],
      },
      {
        heading: "How to practise at home",
        paragraphs: [
          "Good practice is short, regular and focused. Ten minutes a day beats an hour once a week. Pick one short passage — even a single verse — and work on it properly: listen to a trusted reciter, repeat each word after them, then recite it yourself slowly, listening for the letters you know you struggle with. Recording yourself on your phone and playing it back is surprisingly effective; you will hear mistakes you never notice while reading.",
          "Do not try to fix everything at once. Choose one rule per week — this week, the ghunnah; next week, the madd — and focus your practice on that single rule. Progress in Tajweed is cumulative: each rule you master stays with you, and after a few months the rules begin to feel natural rather than something you have to think about.",
        ],
      },
      {
        heading: "Learning Tajweed with a tutor",
        paragraphs: [
          "Tajweed is traditionally learned mouth to ear, from a teacher who listens and corrects. Books and apps can explain the rules, but only a trained ear can tell you whether your ح is actually a ح, or whether your madd is two counts or four. A tutor hears what you cannot hear yourself, and corrects mistakes in the moment — before they become habits.",
          "In a one-to-one lesson, the tutor can also move at exactly your pace: spending longer on the letters you find hard, and moving quickly through what you already know. If you are starting Tajweed for the first time, a free trial class is the best way to find out where you stand — a good tutor will assess your level in a single session and show you a clear path forward.",
        ],
      },
    ],
    back: "← Back to all articles",
  },
  de: {
    category: "Lernen",
    readTime: "5 Min. Lesezeit",
    title: "Tadschwid-Grundlagen für Anfänger",
    intro:
      "Tadschwid klingt technisch, aber im Kern ist es einfach: jedem Buchstaben des Korans sein Recht geben. Dieser Leitfaden erklärt, was Tadschwid ist, warum es wichtig ist und welche ersten Schritte jeder Anfänger — Kind oder Erwachsener — zu einer schönen, korrekten Rezitation gehen kann.",
    coverAlt: "Koran auf einem hölzernen Rehal-Ständer",
    sections: [
      {
        heading: "Was Tadschwid wirklich ist",
        paragraphs: [
          "Das Wort Tadschwid kommt von der arabischen Wurzel dsch-w-d und bedeutet: gut machen, verschönern, etwas mit Exzellenz tun. In der Praxis ist Tadschwid die Wissenschaft, den Koran so zu rezitieren, wie er offenbart wurde: jeder Buchstabe von der richtigen Stelle ausgesprochen, mit seinen richtigen Eigenschaften und in seiner richtigen Länge. Es geht nicht um Singen und nicht darum, mit einer schönen Stimme zu glänzen — es geht um Genauigkeit und Respekt vor den Worten Allahs.",
          "Der Koran selbst befiehlt diese Sorgfalt: „und rezitiere den Koran mit bedächtiger Rezitation“ (73:4). Der Prophet ﷺ rezitierte langsam und deutlich, mit Pausen am Ende der Verse, und seine Gefährten lernten den Koran von ihm Buchstabe für Buchstabe. Tadschwid ist schlicht die sorgfältige Bewahrung dieser Art der Rezitation, weitergegeben von Lehrer zu Schüler über vierzehn Jahrhunderte.",
        ],
        arabic: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا",
      },
      {
        heading: "Warum Aussprache wichtig ist",
        paragraphs: [
          "Im Arabischen verändern kleine Klangunterschiede die Bedeutung vollständig. Die Buchstaben ح (Ha) und ه (Ha) klingen für ein ungeübtes Ohr ähnlich, sind aber verschiedene Buchstaben — und ihre Verwechslung verändert das Wort, das man sagt. Dasselbe gilt für ق (Qaf) und ك (Kaf) oder س (Sin) und ص (Sad). Korrekte Aussprache ist keine Stilfrage; es geht darum, die richtigen Wörter zu sagen.",
          "Es gibt auch eine spirituelle Dimension. Der Koran wurde in einer bestimmten Form offenbart, und ihn korrekt zu rezitieren, gehört dazu, ihn zu ehren. Viele Schüler stellen fest, dass ihre Rezitation fast von selbst schöner wird, sobald sie langsamer werden und auf jeden Buchstaben achten — und dass sich auch ihre Verbindung zu dem, was sie lesen, vertieft.",
        ],
      },
      {
        heading: "Machradsch: Wo jeder Buchstabe geboren wird",
        paragraphs: [
          "Das Fundament des Tadschwid ist Machradsch — die Artikulationsstelle jedes Buchstabens, der genaue Ort in Mund oder Kehle, an dem sein Laut entsteht. Die 28 Buchstaben des arabischen Alphabets werden in fünf Hauptbereichen gebildet: der Kehle (wie ح und ع), der Zunge (wie ق und ل), den Lippen (wie ب und م), dem Nasengang (der Ghunna-Laut von ن und م) und dem leeren Mundraum (für die langen Vokale).",
          "Anfänger sollten mit den Buchstaben beginnen, die es im Englischen oder Deutschen nicht gibt, denn diese werden am häufigsten falsch ausgesprochen. Die tiefen Kehllaute ح und ع, die emphatischen Buchstaben ص ض ط ظ und der Unterschied zwischen ق vom hinteren Teil der Zunge und ك von der Mitte — die Beherrschung dieser wenigen Laute verändert eine Rezitation mehr als jeder andere einzelne Schritt.",
        ],
        list: [
          "Kehle (al-Halq): ء هـ ع ح غ خ",
          "Zunge (al-Lisan): ق ك ج ش ي ض ل ن ر ت د ط س ز ص ظ ذ ث",
          "Lippen (asch-Schafatan): ف ب م و",
          "Nasengang (al-Chaischum): die Ghunna von ن und م",
          "Mundhöhle (al-Dschauf): die langen Vokale ا و ي",
        ],
      },
      {
        heading: "Häufige Anfängerfehler",
        paragraphs: [
          "Fast jeder Anfänger macht dieselbe Handvoll Fehler, und sie zu erkennen, ist schon die halbe Miete. Der häufigste ist Hetzen: Schnelles Lesen fühlt sich wie Fortschritt an, verbirgt aber Fehler und trainiert die Zunge zur Nachlässigkeit. Langsames, bewusstes Rezitieren — auch wenn es sich schmerzhaft langsam anfühlt — baut die Genauigkeit auf, auf der später Tempo aufgebaut werden kann.",
          "Weitere häufige Fehler sind das Ignorieren des Madd (lange Vokale zu kurz oder zu lang dehnen), das Auslassen der Ghunna (der Nasallaut, der bei ن und م mit Schadda zwei Zählzeiten gehalten wird) und das Vermischen ähnlicher Buchstaben — س zu sagen, wenn der Buchstabe ص ist, oder هـ, wenn es ح ist. Nichts davon ist beschämend; genau dafür sind Stunden da. Aber sie brauchen ein geschultes Ohr, um sie zu erkennen — weshalb Selbststudium allein selten ausreicht.",
        ],
        list: [
          "Verse hastig herunterlesen statt langsam zu rezitieren",
          "Den Madd (lange Vokale) verkürzen oder überdehnen",
          "Die Ghunna bei ن und م mit Schadda auslassen",
          "Ähnliche Buchstaben vermischen (س/ص, هـ/ح, ق/ك)",
          "Die Regeln von Nun Sakinah und Tanwin ignorieren",
        ],
      },
      {
        heading: "Wie man zu Hause übt",
        paragraphs: [
          "Gutes Üben ist kurz, regelmäßig und fokussiert. Zehn Minuten am Tag schlagen eine Stunde einmal pro Woche. Wählen Sie eine kurze Passage — auch nur einen einzigen Vers — und arbeiten Sie sie richtig durch: Hören Sie einem vertrauenswürdigen Rezitator zu, wiederholen Sie jedes Wort nach ihm und rezitieren Sie dann selbst langsam, wobei Sie auf die Buchstaben achten, mit denen Sie Schwierigkeiten haben. Sich selbst mit dem Handy aufzunehmen und anzuhören, ist überraschend wirksam; Sie hören Fehler, die Sie beim Lesen nie bemerken.",
          "Versuchen Sie nicht, alles auf einmal zu korrigieren. Wählen Sie eine Regel pro Woche — diese Woche die Ghunna, nächste Woche den Madd — und konzentrieren Sie Ihr Üben auf diese eine Regel. Fortschritt im Tadschwid ist kumulativ: Jede Regel, die Sie beherrschen, bleibt bei Ihnen, und nach einigen Monaten fühlen sich die Regeln natürlich an, statt etwas zu sein, worüber man nachdenken muss.",
        ],
      },
      {
        heading: "Tadschwid mit einer Lehrkraft lernen",
        paragraphs: [
          "Tadschwid wird traditionell von Mund zu Ohr gelernt, von einer Lehrkraft, die zuhört und korrigiert. Bücher und Apps können die Regeln erklären, aber nur ein geschultes Ohr kann Ihnen sagen, ob Ihr ح wirklich ein ح ist oder ob Ihr Madd zwei oder vier Zählzeiten dauert. Eine Lehrkraft hört, was Sie selbst nicht hören können, und korrigiert Fehler im Moment — bevor sie zu Gewohnheiten werden.",
          "Im Einzelunterricht kann die Lehrkraft zudem genau in Ihrem Tempo vorgehen: länger bei den Buchstaben verweilen, die Ihnen schwerfallen, und schnell durch das gehen, was Sie bereits können. Wenn Sie zum ersten Mal mit Tadschwid beginnen, ist eine kostenlose Probestunde der beste Weg, Ihren Stand zu erfahren — eine gute Lehrkraft schätzt Ihr Niveau in einer einzigen Stunde ein und zeigt Ihnen einen klaren Weg nach vorn.",
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
              {section.arabic && (
                <p
                  className="mt-5 rounded-2xl bg-cream px-5 py-4 text-center font-arabic text-2xl leading-relaxed text-brand"
                  dir="rtl"
                >
                  {section.arabic}
                </p>
              )}
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
