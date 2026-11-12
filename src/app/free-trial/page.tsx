"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { courses } from "@/lib/courses";
import { saveTrialRequest } from "@/lib/trial-request";
import { PageHero, CtaBand } from "@/components/Shared";

// Stock photo (verified 200 on 2026-11-12, see CONVENTIONS.md).
const SIDE_IMAGE =
  "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1200&q=80";

interface TrialForm {
  parentName: string;
  email: string;
  whatsapp: string;
  childName: string;
  childAge: string;
  course: string;
  timeSlot: string;
  language: string;
  message: string;
}

const emptyForm: TrialForm = {
  parentName: "",
  email: "",
  whatsapp: "",
  childName: "",
  childAge: "",
  course: "",
  timeSlot: "",
  language: "",
  message: "",
};

// Stable option values; labels are localised in `content`.
const TIME_SLOT_VALUES = ["15-16", "16-17", "17-18", "18-19", "19-20", "weekend-am"] as const;
const LANGUAGE_VALUES = ["en", "de", "ur", "ar"] as const;

const content = {
  en: {
    hero: {
      eyebrow: "Free Trial Class",
      title: "Book a free trial class",
      subtitle:
        "Try a real 30-minute lesson with a certified tutor — no payment, no commitment. Tell us a little about your child and we will take care of the rest.",
      arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    },
    demoNote:
      "Demo form: this preview form saves your request in your browser only. At launch it will be connected to our email and CRM.",
    formTitle: "Tell us about your child",
    formSubtitle:
      "Fill in the form and we will contact you within 24 hours to confirm your free trial class.",
    labels: {
      parentName: "Parent's name",
      email: "Email address",
      whatsapp: "WhatsApp number",
      childName: "Child's name",
      childAge: "Child's age",
      course: "Course",
      timeSlot: "Preferred time slot (Germany time)",
      language: "Preferred lesson language",
      message: "Anything we should know? (optional)",
    },
    placeholders: {
      parentName: "e.g. Ahmed Khan",
      email: "you@example.com",
      whatsapp: "e.g. +49 170 1234567",
      childName: "e.g. Maryam",
      childAge: "e.g. 8",
      course: "Select a course",
      timeSlot: "Select a time slot",
      language: "Select a language",
      message:
        "For example: my child has read Qaida before, or prefers a female teacher…",
    },
    notSure: "Not sure yet — please advise me",
    timeSlotLabels: [
      "3:00–4:00 pm CET/CEST",
      "4:00–5:00 pm CET/CEST",
      "5:00–6:00 pm CET/CEST",
      "6:00–7:00 pm CET/CEST",
      "7:00–8:00 pm CET/CEST",
      "Weekend morning (Sat–Sun, 9 am–12 pm)",
    ] as const,
    languageLabels: ["English", "German", "Urdu", "Arabic"] as const,
    errors: {
      required: "This field is required.",
      email: "Please enter a valid email address.",
      whatsapp: "Please enter a valid WhatsApp number.",
      age: "Please enter an age between 3 and 18.",
    },
    submit: "Book My Free Trial Class",
    success: {
      title: "Thank you — your trial is requested!",
      body: "We have received your request for a free trial class.",
      note: "We will contact you within 24 hours (usually much sooner) on WhatsApp or by email to confirm the time and introduce your child's tutor.",
      details: "Trial class for",
      at: "at your preferred time",
      bookAnother: "Book another trial class",
    },
    side: {
      imageAlt: "Mosque at dusk",
      stepsTitle: "What happens next?",
      steps: [
        {
          title: "We get in touch",
          text: "Within 24 hours we contact you on WhatsApp or by email to confirm a time that suits your family.",
        },
        {
          title: "We match a tutor",
          text: "We choose a certified tutor who fits your child's age, level and language — and send you the meeting link.",
        },
        {
          title: "Your child enjoys a free lesson",
          text: "A real 30-minute 1-to-1 lesson. Afterwards you decide, with no pressure, whether to continue.",
        },
      ],
      detailsTitle: "About the trial class",
      details: [
        { label: "Duration", value: "30 minutes" },
        { label: "Price", value: "100% free" },
        { label: "Format", value: "Live 1-to-1, online" },
        { label: "Platform", value: "Zoom or Google Meet" },
        { label: "Times", value: "Germany time (CET/CEST)" },
      ],
      help: "Questions first? See our",
      faqLink: "frequently asked questions",
    },
  },
  de: {
    hero: {
      eyebrow: "Kostenlose Probestunde",
      title: "Kostenlose Probestunde buchen",
      subtitle:
        "Erleben Sie eine echte 30-minütige Stunde mit einer zertifizierten Lehrkraft — kostenlos und unverbindlich. Erzählen Sie uns kurz etwas über Ihr Kind, den Rest übernehmen wir.",
      arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    },
    demoNote:
      "Demo-Formular: Dieses Vorschau-Formular speichert Ihre Anfrage nur in Ihrem Browser. Zum Start wird es mit unserer E-Mail und unserem CRM verbunden.",
    formTitle: "Erzählen Sie uns von Ihrem Kind",
    formSubtitle:
      "Füllen Sie das Formular aus — wir melden uns innerhalb von 24 Stunden, um Ihre kostenlose Probestunde zu bestätigen.",
    labels: {
      parentName: "Name des Elternteils",
      email: "E-Mail-Adresse",
      whatsapp: "WhatsApp-Nummer",
      childName: "Name des Kindes",
      childAge: "Alter des Kindes",
      course: "Kurs",
      timeSlot: "Wunschtermin (Deutschland-Zeit)",
      language: "Bevorzugte Unterrichtssprache",
      message: "Gibt es etwas, das wir wissen sollten? (optional)",
    },
    placeholders: {
      parentName: "z. B. Ahmed Khan",
      email: "sie@beispiel.de",
      whatsapp: "z. B. +49 170 1234567",
      childName: "z. B. Maryam",
      childAge: "z. B. 8",
      course: "Kurs wählen",
      timeSlot: "Uhrzeit wählen",
      language: "Sprache wählen",
      message:
        "Zum Beispiel: Mein Kind hat bereits Qaida gelesen oder wünscht eine Lehrerin…",
    },
    notSure: "Noch nicht sicher — bitte beraten Sie mich",
    timeSlotLabels: [
      "15:00–16:00 Uhr (MEZ/MESZ)",
      "16:00–17:00 Uhr (MEZ/MESZ)",
      "17:00–18:00 Uhr (MEZ/MESZ)",
      "18:00–19:00 Uhr (MEZ/MESZ)",
      "19:00–20:00 Uhr (MEZ/MESZ)",
      "Wochenende vormittags (Sa–So, 9–12 Uhr)",
    ] as const,
    languageLabels: ["Englisch", "Deutsch", "Urdu", "Arabisch"] as const,
    errors: {
      required: "Dieses Feld ist erforderlich.",
      email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      whatsapp: "Bitte geben Sie eine gültige WhatsApp-Nummer ein.",
      age: "Bitte geben Sie ein Alter zwischen 3 und 18 Jahren ein.",
    },
    submit: "Kostenlose Probestunde buchen",
    success: {
      title: "Vielen Dank — Ihre Probestunde ist angefragt!",
      body: "Wir haben Ihre Anfrage für eine kostenlose Probestunde erhalten.",
      note: "Wir melden uns innerhalb von 24 Stunden (meist deutlich schneller) per WhatsApp oder E-Mail, um den Termin zu bestätigen und die Lehrkraft Ihres Kindes vorzustellen.",
      details: "Probestunde für",
      at: "zu Ihrer Wunschzeit",
      bookAnother: "Weitere Probestunde buchen",
    },
    side: {
      imageAlt: "Moschee in der Abenddämmerung",
      stepsTitle: "Wie geht es weiter?",
      steps: [
        {
          title: "Wir melden uns bei Ihnen",
          text: "Innerhalb von 24 Stunden kontaktieren wir Sie per WhatsApp oder E-Mail und bestätigen einen Termin, der zu Ihrer Familie passt.",
        },
        {
          title: "Wir finden die passende Lehrkraft",
          text: "Wir wählen eine zertifizierte Lehrkraft, die zu Alter, Niveau und Sprache Ihres Kindes passt — und senden Ihnen den Link zum Unterricht.",
        },
        {
          title: "Ihr Kind erlebt eine kostenlose Stunde",
          text: "Eine echte 30-minütige Einzelstunde. Danach entscheiden Sie in Ruhe und ohne Druck, ob Sie weitermachen möchten.",
        },
      ],
      detailsTitle: "Über die Probestunde",
      details: [
        { label: "Dauer", value: "30 Minuten" },
        { label: "Preis", value: "100 % kostenlos" },
        { label: "Format", value: "Live-Einzelunterricht, online" },
        { label: "Plattform", value: "Zoom oder Google Meet" },
        { label: "Zeiten", value: "Deutschland-Zeit (MEZ/MESZ)" },
      ],
      help: "Erst noch Fragen? Schauen Sie in unsere",
      faqLink: "häufig gestellten Fragen",
    },
  },
} as const;

type FormErrors = Partial<Record<keyof TrialForm, string>>;

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";
const inputErrorClass =
  "w-full rounded-xl border border-red-500 bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20";
const labelClass = "mb-1.5 block text-sm font-bold text-ink";
const errorClass = "mt-1 text-sm font-semibold text-red-700";

export default function FreeTrialPage() {
  const { locale } = useLocale();
  const t = content[locale];

  const [form, setForm] = useState<TrialForm>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const setField = (field: keyof TrialForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!form.parentName.trim()) next.parentName = t.errors.required;
    if (!form.email.trim()) next.email = t.errors.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = t.errors.email;
    if (!form.whatsapp.trim()) next.whatsapp = t.errors.required;
    else if (!/^\+?[0-9][0-9\s\-()]{5,}$/.test(form.whatsapp.trim()))
      next.whatsapp = t.errors.whatsapp;
    if (!form.childName.trim()) next.childName = t.errors.required;
    const age = parseInt(form.childAge, 10);
    if (!form.childAge.trim()) next.childAge = t.errors.required;
    else if (Number.isNaN(age) || age < 3 || age > 18) next.childAge = t.errors.age;
    if (!form.course) next.course = t.errors.required;
    if (!form.timeSlot) next.timeSlot = t.errors.required;
    if (!form.language) next.language = t.errors.required;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Demo only: persist the request in the browser via the shared helper
    // (same localStorage key as the hero form). At launch this will be
    // replaced by a real submission to email/CRM.
    saveTrialRequest({ ...form });
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAnother = () => {
    setForm(emptyForm);
    setErrors({});
    setSubmitted(false);
  };

  const selectedCourseName =
    form.course === "not-sure"
      ? t.notSure
      : courses.find((c) => c.slug === form.course)?.name[locale];
  const selectedSlotLabel =
    t.timeSlotLabels[TIME_SLOT_VALUES.indexOf(form.timeSlot as (typeof TIME_SLOT_VALUES)[number])];

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        arabic={t.hero.arabic}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          {/* Demo notice */}
          <div className="mb-10 rounded-2xl border border-gold/40 bg-gold-soft px-5 py-4 text-center text-sm font-semibold text-ink/80">
            {t.demoNote}
          </div>

          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form / success state */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl bg-cream p-6 shadow-card sm:p-8">
                {submitted ? (
                  <div className="py-6 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-3xl text-white">
                      ✓
                    </div>
                    <h2 className="mt-6 font-display text-3xl font-bold text-brand">
                      {t.success.title}
                    </h2>
                    <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink/70">
                      {t.success.body}
                    </p>
                    {selectedCourseName && (
                      <p className="mx-auto mt-4 max-w-md rounded-2xl bg-white px-5 py-4 text-sm leading-relaxed text-ink shadow-card">
                        {t.success.details}{" "}
                        <strong>
                          {form.childName} ({selectedCourseName})
                        </strong>
                        {selectedSlotLabel && (
                          <>
                            {" "}
                            — {t.success.at}: <strong>{selectedSlotLabel}</strong>
                          </>
                        )}
                      </p>
                    )}
                    <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink/70">
                      {t.success.note}
                    </p>
                    <button
                      type="button"
                      onClick={handleBookAnother}
                      className="mt-8 rounded-full bg-brand px-8 py-3.5 font-bold text-white transition hover:bg-brand-light"
                    >
                      {t.success.bookAnother}
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl font-bold text-brand sm:text-3xl">
                      {t.formTitle}
                    </h2>
                    <p className="mt-2 leading-relaxed text-ink/70">{t.formSubtitle}</p>
                    <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="parentName" className={labelClass}>
                            {t.labels.parentName} *
                          </label>
                          <input
                            id="parentName"
                            type="text"
                            value={form.parentName}
                            onChange={(e) => setField("parentName", e.target.value)}
                            placeholder={t.placeholders.parentName}
                            className={errors.parentName ? inputErrorClass : inputClass}
                            aria-invalid={!!errors.parentName}
                          />
                          {errors.parentName && (
                            <p className={errorClass}>{errors.parentName}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="email" className={labelClass}>
                            {t.labels.email} *
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={form.email}
                            onChange={(e) => setField("email", e.target.value)}
                            placeholder={t.placeholders.email}
                            className={errors.email ? inputErrorClass : inputClass}
                            aria-invalid={!!errors.email}
                          />
                          {errors.email && <p className={errorClass}>{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="whatsapp" className={labelClass}>
                            {t.labels.whatsapp} *
                          </label>
                          <input
                            id="whatsapp"
                            type="tel"
                            value={form.whatsapp}
                            onChange={(e) => setField("whatsapp", e.target.value)}
                            placeholder={t.placeholders.whatsapp}
                            className={errors.whatsapp ? inputErrorClass : inputClass}
                            aria-invalid={!!errors.whatsapp}
                          />
                          {errors.whatsapp && (
                            <p className={errorClass}>{errors.whatsapp}</p>
                          )}
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="childName" className={labelClass}>
                              {t.labels.childName} *
                            </label>
                            <input
                              id="childName"
                              type="text"
                              value={form.childName}
                              onChange={(e) => setField("childName", e.target.value)}
                              placeholder={t.placeholders.childName}
                              className={errors.childName ? inputErrorClass : inputClass}
                              aria-invalid={!!errors.childName}
                            />
                            {errors.childName && (
                              <p className={errorClass}>{errors.childName}</p>
                            )}
                          </div>
                          <div>
                            <label htmlFor="childAge" className={labelClass}>
                              {t.labels.childAge} *
                            </label>
                            <input
                              id="childAge"
                              type="number"
                              min={3}
                              max={18}
                              inputMode="numeric"
                              value={form.childAge}
                              onChange={(e) => setField("childAge", e.target.value)}
                              placeholder={t.placeholders.childAge}
                              className={errors.childAge ? inputErrorClass : inputClass}
                              aria-invalid={!!errors.childAge}
                            />
                            {errors.childAge && (
                              <p className={errorClass}>{errors.childAge}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="course" className={labelClass}>
                          {t.labels.course} *
                        </label>
                        <select
                          id="course"
                          value={form.course}
                          onChange={(e) => setField("course", e.target.value)}
                          className={errors.course ? inputErrorClass : inputClass}
                          aria-invalid={!!errors.course}
                        >
                          <option value="">{t.placeholders.course}</option>
                          {courses.map((course) => (
                            <option key={course.slug} value={course.slug}>
                              {course.name[locale]} — {course.ages[locale]}
                            </option>
                          ))}
                          <option value="not-sure">{t.notSure}</option>
                        </select>
                        {errors.course && <p className={errorClass}>{errors.course}</p>}
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="timeSlot" className={labelClass}>
                            {t.labels.timeSlot} *
                          </label>
                          <select
                            id="timeSlot"
                            value={form.timeSlot}
                            onChange={(e) => setField("timeSlot", e.target.value)}
                            className={errors.timeSlot ? inputErrorClass : inputClass}
                            aria-invalid={!!errors.timeSlot}
                          >
                            <option value="">{t.placeholders.timeSlot}</option>
                            {TIME_SLOT_VALUES.map((value, i) => (
                              <option key={value} value={value}>
                                {t.timeSlotLabels[i]}
                              </option>
                            ))}
                          </select>
                          {errors.timeSlot && (
                            <p className={errorClass}>{errors.timeSlot}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="language" className={labelClass}>
                            {t.labels.language} *
                          </label>
                          <select
                            id="language"
                            value={form.language}
                            onChange={(e) => setField("language", e.target.value)}
                            className={errors.language ? inputErrorClass : inputClass}
                            aria-invalid={!!errors.language}
                          >
                            <option value="">{t.placeholders.language}</option>
                            {LANGUAGE_VALUES.map((value, i) => (
                              <option key={value} value={value}>
                                {t.languageLabels[i]}
                              </option>
                            ))}
                          </select>
                          {errors.language && (
                            <p className={errorClass}>{errors.language}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className={labelClass}>
                          {t.labels.message}
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          value={form.message}
                          onChange={(e) => setField("message", e.target.value)}
                          placeholder={t.placeholders.message}
                          className={inputClass}
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-full bg-brand px-8 py-4 text-base font-bold text-white transition hover:bg-brand-light sm:w-auto"
                      >
                        {t.submit}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Side info panel */}
            <aside className="lg:col-span-2">
              <div className="space-y-8 lg:sticky lg:top-8">
                <img
                  src={SIDE_IMAGE}
                  alt={t.side.imageAlt}
                  loading="lazy"
                  className="h-56 w-full rounded-3xl object-cover shadow-card"
                />

                <div className="rounded-3xl bg-white p-6 shadow-card">
                  <h3 className="font-display text-2xl font-bold text-brand">
                    {t.side.stepsTitle}
                  </h3>
                  <ol className="mt-6 space-y-6">
                    {t.side.steps.map((step, i) => (
                      <li key={step.title} className="flex gap-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-base font-bold text-brand-deep">
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-bold text-ink">{step.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-ink/70">
                            {step.text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="rounded-3xl bg-brand p-6 text-white shadow-card">
                  <h3 className="font-display text-2xl font-bold">
                    {t.side.detailsTitle}
                  </h3>
                  <dl className="mt-5 space-y-3">
                    {t.side.details.map((d) => (
                      <div
                        key={d.label}
                        className="flex items-baseline justify-between gap-4 border-b border-white/15 pb-3 last:border-0 last:pb-0"
                      >
                        <dt className="text-sm text-white/70">{d.label}</dt>
                        <dd className="text-right text-sm font-bold">{d.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <p className="text-center text-sm leading-relaxed text-ink/60">
                  {t.side.help}{" "}
                  <Link href="/faq" className="font-bold text-brand underline">
                    {t.side.faqLink}
                  </Link>
                  .
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
