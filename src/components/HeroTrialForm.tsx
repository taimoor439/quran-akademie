"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { courses } from "@/lib/courses";
import { saveTrialRequest } from "@/lib/trial-request";

interface HeroTrialFormData {
  parentName: string;
  whatsapp: string;
  email: string;
  course: string;
  timeSlot: string;
}

const emptyForm: HeroTrialFormData = {
  parentName: "",
  whatsapp: "",
  email: "",
  course: "",
  timeSlot: "",
};

// Stable option values; labels are localised in `content`.
const TIME_SLOT_VALUES = ["15-17", "17-19", "19-21", "weekend-am"] as const;

const content = {
  en: {
    eyebrow: "Free Trial Class",
    title: "Book your free trial class",
    subtitle:
      "A real 30-minute lesson with a certified tutor — free, no commitment.",
    labels: {
      parentName: "Parent's name",
      whatsapp: "WhatsApp number",
      email: "Email address",
      course: "Course",
      timeSlot: "Preferred time slot (Germany time)",
    },
    placeholders: {
      parentName: "e.g. Ahmed Khan",
      whatsapp: "e.g. +49 170 1234567",
      email: "you@example.com",
      course: "Select a course",
      timeSlot: "Select a time slot",
    },
    timeSlotLabels: [
      "3:00–5:00 pm CET/CEST",
      "5:00–7:00 pm CET/CEST",
      "7:00–9:00 pm CET/CEST",
      "Weekend morning (Sat–Sun, 9 am–12 pm)",
    ] as const,
    errors: {
      required: "This field is required.",
      email: "Please enter a valid email address.",
      whatsapp: "Please enter a valid WhatsApp number.",
    },
    submit: "Book My Free Trial",
    success: {
      title: "Request received!",
      body: "We'll contact you within 24 hours to confirm your free trial class.",
      bookAnother: "Submit another request",
    },
    fullForm: "Prefer the full form?",
    demoNote:
      "Demo form: this preview form saves your request in your browser only. At launch it will be connected to our email and CRM.",
  },
  de: {
    eyebrow: "Kostenlose Probestunde",
    title: "Buchen Sie Ihre kostenlose Probestunde",
    subtitle:
      "Eine echte 30-minütige Stunde mit einer zertifizierten Lehrkraft — kostenlos und unverbindlich.",
    labels: {
      parentName: "Name des Elternteils",
      whatsapp: "WhatsApp-Nummer",
      email: "E-Mail-Adresse",
      course: "Kurs",
      timeSlot: "Wunschtermin (Deutschland-Zeit)",
    },
    placeholders: {
      parentName: "z. B. Ahmed Khan",
      whatsapp: "z. B. +49 170 1234567",
      email: "sie@beispiel.de",
      course: "Kurs wählen",
      timeSlot: "Uhrzeit wählen",
    },
    timeSlotLabels: [
      "15:00–17:00 Uhr (MEZ/MESZ)",
      "17:00–19:00 Uhr (MEZ/MESZ)",
      "19:00–21:00 Uhr (MEZ/MESZ)",
      "Wochenende vormittags (Sa–So, 9–12 Uhr)",
    ] as const,
    errors: {
      required: "Dieses Feld ist erforderlich.",
      email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      whatsapp: "Bitte geben Sie eine gültige WhatsApp-Nummer ein.",
    },
    submit: "Kostenlose Probestunde buchen",
    success: {
      title: "Anfrage erhalten!",
      body: "Wir melden uns innerhalb von 24 Stunden, um Ihre kostenlose Probestunde zu bestätigen.",
      bookAnother: "Weitere Anfrage senden",
    },
    fullForm: "Lieber das ausführliche Formular?",
    demoNote:
      "Demo-Formular: Dieses Vorschau-Formular speichert Ihre Anfrage nur in Ihrem Browser. Zum Start wird es mit unserer E-Mail und unserem CRM verbunden.",
  },
} as const;

type FormErrors = Partial<Record<keyof HeroTrialFormData, string>>;

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";
const inputErrorClass =
  "w-full rounded-xl border border-red-500 bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20";
const labelClass = "mb-1.5 block text-sm font-bold text-ink";
const errorClass = "mt-1 text-sm font-semibold text-red-700";

/**
 * Compact free-trial booking form for the home hero. Saves via the shared
 * `saveTrialRequest` helper — the same localStorage key as the /free-trial
 * page — so the two forms can never diverge.
 */
export default function HeroTrialForm() {
  const { locale } = useLocale();
  const t = content[locale];

  const [form, setForm] = useState<HeroTrialFormData>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const setField = (field: keyof HeroTrialFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  // Same validation rules as the /free-trial page.
  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!form.parentName.trim()) next.parentName = t.errors.required;
    if (!form.whatsapp.trim()) next.whatsapp = t.errors.required;
    else if (!/^\+?[0-9][0-9\s\-()]{5,}$/.test(form.whatsapp.trim()))
      next.whatsapp = t.errors.whatsapp;
    if (!form.email.trim()) next.email = t.errors.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = t.errors.email;
    if (!form.course) next.course = t.errors.required;
    if (!form.timeSlot) next.timeSlot = t.errors.required;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    saveTrialRequest({ ...form });
    setSubmitted(true);
  };

  const handleBookAnother = () => {
    setForm(emptyForm);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div
      id="trial-form"
      className="scroll-mt-24 rounded-[2rem] bg-white p-6 shadow-lift ring-1 ring-gold/40 sm:p-8"
    >
      {submitted ? (
        <div className="py-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-3xl text-white">
            ✓
          </div>
          <h2 className="mt-6 font-serif text-2xl font-bold text-brand sm:text-3xl">
            {t.success.title}
          </h2>
          <p className="mx-auto mt-3 max-w-sm leading-relaxed text-ink/70">
            {t.success.body}
          </p>
          <button
            type="button"
            onClick={handleBookAnother}
            className="mt-6 text-sm font-bold text-brand underline hover:text-brand-light"
          >
            {t.success.bookAnother}
          </button>
        </div>
      ) : (
        <>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
            {t.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold leading-tight text-brand">
            {t.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink/70">{t.subtitle}</p>
          <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
            <div>
              <label htmlFor="hero-parentName" className={labelClass}>
                {t.labels.parentName} *
              </label>
              <input
                id="hero-parentName"
                type="text"
                value={form.parentName}
                onChange={(e) => setField("parentName", e.target.value)}
                placeholder={t.placeholders.parentName}
                className={errors.parentName ? inputErrorClass : inputClass}
                aria-invalid={!!errors.parentName}
              />
              {errors.parentName && <p className={errorClass}>{errors.parentName}</p>}
            </div>
            <div>
              <label htmlFor="hero-whatsapp" className={labelClass}>
                {t.labels.whatsapp} *
              </label>
              <input
                id="hero-whatsapp"
                type="tel"
                value={form.whatsapp}
                onChange={(e) => setField("whatsapp", e.target.value)}
                placeholder={t.placeholders.whatsapp}
                className={errors.whatsapp ? inputErrorClass : inputClass}
                aria-invalid={!!errors.whatsapp}
              />
              {errors.whatsapp && <p className={errorClass}>{errors.whatsapp}</p>}
            </div>
            <div>
              <label htmlFor="hero-email" className={labelClass}>
                {t.labels.email} *
              </label>
              <input
                id="hero-email"
                type="email"
                value={form.email}
                onChange={(e) => setField("email", e.target.value)}
                placeholder={t.placeholders.email}
                className={errors.email ? inputErrorClass : inputClass}
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className={errorClass}>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="hero-course" className={labelClass}>
                {t.labels.course} *
              </label>
              <select
                id="hero-course"
                value={form.course}
                onChange={(e) => setField("course", e.target.value)}
                className={errors.course ? inputErrorClass : inputClass}
                aria-invalid={!!errors.course}
              >
                <option value="">{t.placeholders.course}</option>
                {courses.map((course) => (
                  <option key={course.slug} value={course.slug}>
                    {course.name[locale]}
                  </option>
                ))}
              </select>
              {errors.course && <p className={errorClass}>{errors.course}</p>}
            </div>
            <div>
              <label htmlFor="hero-timeSlot" className={labelClass}>
                {t.labels.timeSlot} *
              </label>
              <select
                id="hero-timeSlot"
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
              {errors.timeSlot && <p className={errorClass}>{errors.timeSlot}</p>}
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-brand px-8 py-4 text-base font-bold text-white transition hover:bg-brand-light"
            >
              {t.submit}
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            <Link href="/free-trial" className="font-bold text-brand underline hover:text-brand-light">
              {t.fullForm} →
            </Link>
          </p>
          <p className="mt-4 rounded-xl bg-gold-soft px-4 py-3 text-center text-xs font-semibold leading-relaxed text-ink/70">
            {t.demoNote}
          </p>
        </>
      )}
    </div>
  );
}
