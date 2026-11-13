# P1 #14 — Tajweed Rules: The Complete Guide (DRAFT, ready to build)

- **Source plan:** `~/workspace/research_notes/quran-academy-content-seo-research-20261112-0815/report.md` §7, P1 #14 — target keyword "Tajweed rules / Tadschwied Regeln", Cluster 3 Tajweed, intent Informational. Report gap: "German Tajweed hub — rules explained in German — essentially unowned."
- **Status:** Draft text only (EN + DE), written 2026-11-13. NOT built, NOT pushed, NOT in the sitemap. Needs Rank's go-ahead to build.
- **Format:** Follows the P0 blog pattern exactly (`src/app/blog/tajweed-basics/page.tsx`): one `page.tsx` with an `en`/`de` content object, sections with headings/paragraphs/lists/arabic, cover `<img>`, `CtaBand` at the end. Metadata in a sibling `page.tsx` wrapper like `src/app/blog/what-is-tajweed/page.tsx` (or inline — check current P0 pattern at build time).
- **Slug:** `tajweed-rules` → `/blog/tajweed-rules`
- **Cover:** reuse the verified Unsplash rehal photo from `tajweed-basics` — `https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1600&q=80` (verified 200 on 2026-11-12 per CONVENTIONS.md). Swap for a different verified photo at build time if Rank prefers variety.
- **Accuracy notes:** Rule counts follow Hafs 'an 'Asim, the riwayah taught by almost all German academies. No tutor credentials, no fake reviews, no invented statistics. Internal links: `/courses/tajweed`, `/blog/what-is-tajweed`, `/blog/tajweed-basics`, `/blog/noorani-qaida-explained`, `/free-trial`.
- **Build steps when approved:** (1) create `src/app/blog/tajweed-rules/page.tsx` from this draft; (2) add one entry to the `posts` array in `src/app/blog/page.tsx` (see entry below); (3) add one `<url>` to `public/sitemap.xml` (`https://onlinekoran.de/blog/tajweed-rules`, lastmod = build date); (4) build root → push `live` + build preview → push `gh-pages`, then live-verify the page in both languages and re-submit the sitemap in Search Console.

## Metadata

- EN title: "Tajweed Rules: The Complete Guide"
- EN description: "All the Tajweed rules in one place: makhraj, noon sakinah, meem sakinah, madd, qalqalah, ghunnah and waqf — explained simply, with examples."
- DE title: "Tadschwied-Regeln: Der vollständige Leitfaden"
- DE description: "Alle Tadschwied-Regeln an einem Ort: Machradsch, Nun Sakinah, Mim Sakinah, Madd, Qalqalah, Ghunna und Waqf — einfach erklärt, mit Beispielen."
- Category: Learning / Lernen — Read time: 8 min read / 8 Min. Lesezeit

## Blog index entry (src/app/blog/page.tsx)

```tsx
{
  slug: "tajweed-rules",
  cover:
    "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1200&q=80",
  category: { en: "Learning", de: "Lernen" },
  readTime: { en: "8 min read", de: "8 Min. Lesezeit" },
  title: {
    en: "Tajweed Rules: The Complete Guide",
    de: "Tadschwied-Regeln: Der vollständige Leitfaden",
  },
  excerpt: {
    en: "Every Tajweed rule family in one guide — noon sakinah, meem sakinah, madd, qalqalah, ghunnah and waqf — with the letter groups to memorise and examples.",
    de: "Alle Tadschwied-Regelfamilien in einem Leitfaden — Nun Sakinah, Mim Sakinah, Madd, Qalqalah, Ghunna und Waqf — mit den Buchstabengruppen zum Merken und Beispielen.",
  },
},
```

---

## EN — Tajweed Rules: The Complete Guide

**Intro:** Tajweed is not one rule — it is a small set of rule families that together cover every sound in the Quran. Learn the families first, then the details inside each one. This guide gives you the whole map: what each family governs, the letters involved, and how long each sound lasts. You do not need to memorise it all at once; work through one family per week, and your recitation will change within a few months.

### 1. The rule families at a glance

Tajweed rules answer three questions about every letter you recite: where is it pronounced from, what qualities does its sound have, and how long does it last? The families below cover all three. Makhraj and sifaat (the qualities of letters) decide the sound itself. Noon sakinah, meem sakinah and the rules of madd decide how letters behave when they meet each other. Qalqalah and ghunnah are special sounds that appear in specific situations, and waqf is the art of stopping and starting correctly.

- **Makhraj** — the articulation point of each letter (throat, tongue, lips, nasal passage, mouth cavity)
- **Sifaat** — the qualities of letters, e.g. heavy vs light, whispered vs voiced
- **Noon Sakinah & Tanween** — four rules for نْ and the tanween sounds
- **Meem Sakinah** — three rules for مْ
- **Madd** — lengthening the long vowels, from 2 to 6 counts
- **Qalqalah** — the echoing bounce of five letters when they carry sukoon
- **Ghunnah** — the nasal sound, held for two counts
- **Waqf** — where to stop, pause, and resume

### 2. Noon Sakinah & Tanween — the four rules

A noon sakinah (نْ, a noon with sukoon) and tanween (ـً ـٍ ـٌ, the double vowel marks, which end in an "n" sound) follow the same four rules. Which rule applies depends only on the letter that comes after them.

- **Izhar (clear pronunciation)** — when the next letter is one of the six throat letters: ء هـ ع ح غ خ. Pronounce the noon clearly, with no merging and no nasal hiding. Example: مِنْ عَمَلٍ.
- **Idgham (merging)** — when the next letter is one of the six letters of يَرْمَلُونَ (ي ر م ل و ن). The noon merges into the next letter. With ي و م ن the merging carries ghunnah (a nasal sound held for two counts); with ل ر it merges without ghunnah. Example: مَنْ يَعْمَلْ.
- **Iqlab (conversion)** — when the next letter is ب. The noon sound changes into a meem sound, with ghunnah. Example: مِنْ بَعْدِ.
- **Ikhfa (hiding)** — when the next letter is any of the remaining fifteen letters. The noon is pronounced softly through the nose, hidden between clear and merged, with ghunnah for two counts. Example: مِنْكُمْ.

If you learn only one thing from this guide, learn these four rules: they appear on almost every page of the Quran.

### 3. Meem Sakinah — three rules

A meem sakinah (مْ) has three rules, again decided by the letter that follows it.

- **Ikhfa Shafawi (oral hiding)** — when the next letter is ب. The meem is pronounced softly with ghunnah, lips nearly closed. Example: هُمْ بِهِ.
- **Idgham Shafawi (oral merging)** — when the next letter is another م. The two meems merge into one, with ghunnah. Example: لَهُمْ مَا.
- **Izhar Shafawi (oral clarity)** — when the next letter is anything else. Pronounce the meem clearly. Take care after و and ف, where the meem is easy to swallow.

### 4. Madd — how long to stretch

Madd is the lengthening of the three long vowel sounds (ا و ي). The natural madd is two counts — about the time it takes to say "one, two" at a steady pace. Longer madds stretch to four, five or six counts, depending on what follows the vowel.

- **Madd Tabee'i (natural)** — two counts, the default length of every long vowel.
- **Madd Muttasil (connected)** — when a hamzah follows the long vowel in the same word: four to five counts.
- **Madd Munfasil (separated)** — when a hamzah follows in the next word: two to five counts in the Hafs reading.
- **Madd Lazim (necessary)** — when a sukoon follows in the same word, usually with a shaddah: six counts, always.
- **Madd Aarid (temporary)** — when you stop on a word whose vowel is followed by a letter with sukoon: two, four or six counts — your choice, but stay consistent in one sitting.
- **Madd Leen** — a soft lengthening of وْ and يْ before a stopping point: two, four or six counts.

Counting is a skill, not a guess. Practise with a metronome or by tapping your fingers — two counts means two beats, six means six — until the lengths become natural.

### 5. Qalqalah and Ghunnah — the two special sounds

**Qalqalah** is a bouncing, echoing sound. It applies to five letters, collected in the word قُطْبُ جَدٍّ — ق ط ب ج د. When one of these letters carries a sukoon, or when you stop on it, it bounces: قْ sounds like "q" with a small echo, not a flat "k". A light bounce in the middle of a word, a stronger one when you stop. Example: الْحَقُّ when stopping.

**Ghunnah** is the nasal sound produced in the nose. It appears with ن and م when they carry a shaddah — always hold it for two counts — and inside the idgham and ikhfa rules above. If you pinch your nose while reciting a ghunnah, the sound should change: that is how you know the nose is involved.

### 6. Waqf — stopping and starting well

Waqf is knowing where to stop, where to pause briefly, and where you must not stop. The small signs in the mushaf help: م means a compulsory stop, ج means you may stop or continue, صلي means continuing is better, قلي means stopping is better, and لا means do not stop here. Never stop in the middle of a phrase in a way that changes the meaning — for example, do not stop right after "there is no god" without continuing to "but Allah". If you run out of breath mid-verse, stop at a sensible word boundary and restart from a few words earlier, so the meaning stays complete.

### Where to go from here

The order that works for most students is: makhraj first, then noon sakinah and tanween, then madd, then meem sakinah, qalqalah and ghunnah, and finally waqf. One family per week, ten minutes of focused practice a day, and a teacher who listens and corrects you. That last part matters most: books can list the rules, but only a trained ear can hear whether your qalqalah bounced or your madd lasted four counts instead of six. A free trial class is the quickest way to find out which rules you already have and which ones need work.

---

## DE — Tadschwied-Regeln: Der vollständige Leitfaden

**Intro:** Tadschwied ist nicht eine Regel — es ist eine kleine Anzahl von Regelfamilien, die zusammen jeden Laut im Koran abdecken. Lernen Sie zuerst die Familien, dann die Details in jeder Familie. Dieser Leitfaden gibt Ihnen die ganze Übersicht: was jede Familie regelt, welche Buchstaben dazugehören und wie lange jeder Laut dauert. Sie müssen nicht alles auf einmal auswendig lernen; arbeiten Sie eine Familie pro Woche durch, und Ihre Rezitation wird sich innerhalb weniger Monate verändern.

### 1. Die Regelfamilien im Überblick

Die Tadschwied-Regeln beantworten drei Fragen zu jedem Buchstaben, den Sie rezitieren: Wo wird er ausgesprochen, welche Eigenschaften hat sein Laut, und wie lange dauert er? Die Familien unten decken alle drei Fragen ab. Machradsch und Sifat (die Eigenschaften der Buchstaben) bestimmen den Laut selbst. Nun Sakinah, Mim Sakinah und die Madd-Regeln bestimmen, wie sich Buchstaben verhalten, wenn sie aufeinandertreffen. Qalqalah und Ghunna sind besondere Laute, die in bestimmten Situationen auftreten, und Waqf ist die Kunst, richtig anzuhalten und wieder zu beginnen.

- **Machradsch** — die Artikulationsstelle jedes Buchstabens (Kehle, Zunge, Lippen, Nasengang, Mundhöhle)
- **Sifat** — die Eigenschaften der Buchstaben, z. B. schwer oder leicht, gehaucht oder stimmhaft
- **Nun Sakinah & Tanwin** — vier Regeln für نْ und die Tanwin-Laute
- **Mim Sakinah** — drei Regeln für مْ
- **Madd** — das Dehnen der langen Vokale, von zwei bis sechs Zählzeiten
- **Qalqalah** — der widerhallende Laut von fünf Buchstaben, wenn sie Sukun tragen
- **Ghunna** — der Nasallaut, zwei Zählzeiten gehalten
- **Waqf** — wo man anhält, pausiert und wieder beginnt

### 2. Nun Sakinah & Tanwin — die vier Regeln

Eine Nun Sakinah (نْ, ein Nun mit Sukun) und Tanwin (ـً ـٍ ـٌ, die doppelten Vokalzeichen, die auf einen „n“-Laut enden) folgen denselben vier Regeln. Welche Regel gilt, hängt nur von dem Buchstaben ab, der danach kommt.

- **Izhar (deutliche Aussprache)** — wenn der nächste Buchstabe einer der sechs Kehllaute ist: ء هـ ع ح غ خ. Das Nun wird deutlich ausgesprochen, ohne Verschmelzung und ohne nasales Verbergen. Beispiel: مِنْ عَمَلٍ.
- **Idgham (Verschmelzung)** — wenn der nächste Buchstabe einer der sechs Buchstaben von يَرْمَلُونَ ist (ي ر م ل و ن). Das Nun verschmilzt mit dem nächsten Buchstaben. Bei ي و م ن trägt die Verschmelzung eine Ghunna (einen Nasallaut, zwei Zählzeiten gehalten); bei ل ر verschmilzt es ohne Ghunna. Beispiel: مَنْ يَعْمَلْ.
- **Iqlab (Umwandlung)** — wenn der nächste Buchstabe ب ist. Der Nun-Laut verwandelt sich in einen Mim-Laut, mit Ghunna. Beispiel: مِنْ بَعْدِ.
- **Ikhfa (Verbergen)** — wenn der nächste Buchstabe einer der übrigen fünfzehn Buchstaben ist. Das Nun wird leise durch die Nase ausgesprochen, verborgen zwischen deutlich und verschmolzen, mit Ghunna für zwei Zählzeiten. Beispiel: مِنْكُمْ.

Wenn Sie aus diesem Leitfaden nur eine Sache lernen, dann diese vier Regeln: Sie kommen auf fast jeder Seite des Korans vor.

### 3. Mim Sakinah — drei Regeln

Eine Mim Sakinah (مْ) hat drei Regeln, die ebenfalls von dem Buchstaben danach abhängen.

- **Ikhfa Schafawi (verborgenes Aussprechen mit den Lippen)** — wenn der nächste Buchstabe ب ist. Das Mim wird leise mit Ghunna ausgesprochen, die Lippen fast geschlossen. Beispiel: هُمْ بِهِ.
- **Idgham Schafawi (Verschmelzung mit den Lippen)** — wenn der nächste Buchstabe ein weiteres م ist. Die beiden Mims verschmelzen zu einem, mit Ghunna. Beispiel: لَهُمْ مَا.
- **Izhar Schafawi (deutliches Aussprechen mit den Lippen)** — wenn der nächste Buchstabe ein anderer ist. Sprechen Sie das Mim deutlich aus. Achten Sie besonders nach و und ف darauf, das Mim nicht zu verschlucken.

### 4. Madd — wie lange man dehnt

Madd ist das Dehnen der drei langen Vokallaute (ا و ي). Der natürliche Madd dauert zwei Zählzeiten — etwa so lange, wie man braucht, um in gleichmäßigem Tempo „eins, zwei“ zu sagen. Längere Madds dehnen sich auf vier, fünf oder sechs Zählzeiten, je nachdem, was auf den Vokal folgt.

- **Madd Tabi'i (natürlich)** — zwei Zählzeiten, die Standardlänge jedes langen Vokals.
- **Madd Muttasil (verbunden)** — wenn ein Hamza im selben Wort auf den langen Vokal folgt: vier bis fünf Zählzeiten.
- **Madd Munfasil (getrennt)** — wenn ein Hamza im nächsten Wort folgt: zwei bis fünf Zählzeiten in der Hafs-Lesung.
- **Madd Lazim (notwendig)** — wenn ein Sukun im selben Wort folgt, meist mit Schadda: sechs Zählzeiten, immer.
- **Madd Arid (vorübergehend)** — wenn Sie auf einem Wort anhalten, dessen Vokal von einem Buchstaben mit Sukun gefolgt wird: zwei, vier oder sechs Zählzeiten — Ihre Wahl, aber bleiben Sie in einer Sitzung konsequent.
- **Madd Lin** — ein weiches Dehnen von وْ und يْ vor einem Anhaltepunkt: zwei, vier oder sechs Zählzeiten.

Zählen ist eine Fertigkeit, kein Raten. Üben Sie mit einem Metronom oder indem Sie mit den Fingern klopfen — zwei Zählzeiten bedeuten zwei Schläge, sechs bedeuten sechs — bis die Längen natürlich werden.

### 5. Qalqalah und Ghunna — die zwei besonderen Laute

**Qalqalah** ist ein federnder, widerhallender Laut. Er gilt für fünf Buchstaben, gesammelt im Wort قُطْبُ جَدٍّ — ق ط ب ج د. Wenn einer dieser Buchstaben ein Sukun trägt oder Sie auf ihm anhalten, federt er: قْ klingt wie ein „q“ mit einem kleinen Echo, nicht wie ein flaches „k“. Ein leichtes Federn in der Wortmitte, ein stärkeres beim Anhalten. Beispiel: الْحَقُّ beim Anhalten.

**Ghunna** ist der Nasallaut, der in der Nase entsteht. Er tritt bei ن und م mit Schadda auf — halten Sie ihn immer zwei Zählzeiten — und innerhalb der Idgham- und Ikhfa-Regeln oben. Wenn Sie sich beim Rezitieren einer Ghunna die Nase zuhalten, sollte sich der Laut verändern: So wissen Sie, dass die Nase beteiligt ist.

### 6. Waqf — gut anhalten und wieder beginnen

Waqf bedeutet zu wissen, wo man anhält, wo man kurz pausiert und wo man nicht anhalten darf. Die kleinen Zeichen im Mushaf helfen: م bedeutet ein verpflichtendes Anhalten, ج bedeutet, dass Sie anhalten oder weiterlesen können, صلي bedeutet, dass Weiterlesen besser ist, قلي bedeutet, dass Anhalten besser ist, und لا bedeutet, dass Sie hier nicht anhalten dürfen. Halten Sie niemals mitten in einer Phrase an, sodass sich die Bedeutung ändert — halten Sie zum Beispiel nicht direkt nach „Es gibt keinen Gott“ an, ohne mit „außer Allah“ weiterzulesen. Wenn Ihnen mitten im Vers die Luft ausgeht, halten Sie an einer sinnvollen Wortgrenze an und beginnen Sie einige Wörter früher neu, damit die Bedeutung vollständig bleibt.

### Wie es weitergeht

Die Reihenfolge, die für die meisten Schüler funktioniert, ist: zuerst Machradsch, dann Nun Sakinah und Tanwin, dann Madd, dann Mim Sakinah, Qalqalah und Ghunna, und schließlich Waqf. Eine Familie pro Woche, zehn Minuten konzentriertes Üben am Tag, und eine Lehrkraft, die zuhört und korrigiert. Der letzte Teil ist am wichtigsten: Bücher können die Regeln auflisten, aber nur ein geschultes Ohr kann hören, ob Ihre Qalqalah gefedert hat oder ob Ihr Madd vier statt sechs Zählzeiten dauerte. Eine kostenlose Probestunde ist der schnellste Weg herauszufinden, welche Regeln Sie bereits beherrschen und an welchen Sie noch arbeiten müssen.
