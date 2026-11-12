"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { PageHero, CtaBand } from "@/components/Shared";

// Stock photo (verified 200 on 2026-11-12, see CONVENTIONS.md).
const SIDE_IMAGE =
  "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80";

// PLACEHOLDER: replace with the real academy email address before launch.
const CONTACT_EMAIL = "hello@quranakademie.de";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const emptyForm: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const SUBJECT_VALUES = ["general", "trial", "pricing", "technical"] as const;

const content = {
  en: {
    hero: {
      eyebrow: "Contact",
      title: "We would love to hear from you",
      subtitle:
        "Questions about a course, the trial class or pricing? Send us a message and we will get back to you within one working day.",
    },
    demoNote:
      "Demo form: this preview form saves your message in your browser only. At launch it will be connected to our email and CRM.",
    formTitle: "Send us a message",
    formSubtitle:
      "We usually reply within one working day — often much sooner.",
    labels: {
      name: "Your name",
      email: "Email address",
      subject: "Subject",
      message: "Your message",
    },
    placeholders: {
      name: "e.g. Fatima Ahmed",
      email: "you@example.com",
      subject: "Select a subject",
      message: "How can we help you?",
    },
    subjectLabels: [
      "General question",
      "Trial class",
      "Pricing",
      "Technical help",
    ] as const,
    errors: {
      required: "This field is required.",
      email: "Please enter a valid email address.",
      messageShort: "Please write a little more so we can help you properly.",
    },
    submit: "Send Message",
    success: {
      title: "Thank you — your message is on its way!",
      body: "We have received your message and will reply within one working day.",
      note: "In a hurry? Book a free trial class and we will contact you within 24 hours.",
      sendAnother: "Send another message",
    },
    info: {
      imageAlt: "Mosque arches",
      emailTitle: "Email us",
      emailNote: "For enrolment, courses and general questions.",
      hoursTitle: "Office hours",
      hours: [
        { days: "Monday – Friday", time: "9:00 am – 6:00 pm" },
        { days: "Saturday", time: "10:00 am – 2:00 pm" },
        { days: "Sunday", time: "Closed" },
      ],
      hoursNote: "All times in Germany time (CET/CEST).",
      whatsappTitle: "Prefer WhatsApp?",
      whatsappNote:
        "The fastest way to reach us is to book a free trial class — we will contact you on WhatsApp within 24 hours.",
      whatsappButton: "Book a Free Trial Class",
      trialTitle: "Not sure where to start?",
      trialNote:
        "A free 30-minute trial class is the best way to meet a tutor and see how the lessons work — no payment needed.",
    },
  },
  de: {
    hero: {
      eyebrow: "Kontakt",
      title: "Wir freuen uns, von Ihnen zu hören",
      subtitle:
        "Fragen zu einem Kurs, zur Probestunde oder zu den Preisen? Schreiben Sie uns — wir antworten innerhalb eines Werktages.",
    },
    demoNote:
      "Demo-Formular: Dieses Vorschau-Formular speichert Ihre Nachricht nur in Ihrem Browser. Zum Start wird es mit unserer E-Mail und unserem CRM verbunden.",
    formTitle: "Schreiben Sie uns",
    formSubtitle:
      "Wir antworten in der Regel innerhalb eines Werktages — oft deutlich schneller.",
    labels: {
      name: "Ihr Name",
      email: "E-Mail-Adresse",
      subject: "Betreff",
      message: "Ihre Nachricht",
    },
    placeholders: {
      name: "z. B. Fatima Ahmed",
      email: "sie@beispiel.de",
      subject: "Betreff wählen",
      message: "Wie können wir Ihnen helfen?",
    },
    subjectLabels: [
      "Allgemeine Frage",
      "Probestunde",
      "Preise",
      "Technische Hilfe",
    ] as const,
    errors: {
      required: "Dieses Feld ist erforderlich.",
      email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      messageShort:
        "Bitte schreiben Sie etwas mehr, damit wir Ihnen gut helfen können.",
    },
    submit: "Nachricht senden",
    success: {
      title: "Vielen Dank — Ihre Nachricht ist unterwegs!",
      body: "Wir haben Ihre Nachricht erhalten und antworten innerhalb eines Werktages.",
      note: "Es eilt? Buchen Sie eine kostenlose Probestunde — wir melden uns innerhalb von 24 Stunden.",
      sendAnother: "Weitere Nachricht senden",
    },
    info: {
      imageAlt: "Moscheebögen",
      emailTitle: "Schreiben Sie uns eine E-Mail",
      emailNote: "Für Anmeldungen, Kurse und allgemeine Fragen.",
      hoursTitle: "Bürozeiten",
      hours: [
        { days: "Montag – Freitag", time: "9:00 – 18:00 Uhr" },
        { days: "Samstag", time: "10:00 – 14:00 Uhr" },
        { days: "Sonntag", time: "Geschlossen" },
      ],
      hoursNote: "Alle Zeiten in Deutschland-Zeit (MEZ/MESZ).",
      whatsappTitle: "Lieber per WhatsApp?",
      whatsappNote:
        "Am schnellsten erreichen Sie uns über eine kostenlose Probestunde — wir melden uns innerhalb von 24 Stunden per WhatsApp bei Ihnen.",
      whatsappButton: "Kostenlose Probestunde buchen",
      trialTitle: "Nicht sicher, wo Sie anfangen sollen?",
      trialNote:
        "Eine kostenlose 30-minütige Probestunde ist der beste Weg, eine Lehrkraft kennenzulernen und zu sehen, wie der Unterricht funktioniert — ohne Zahlung.",
    },
  },
} as const;

type FormErrors = Partial<Record<keyof ContactForm, string>>;

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";
const inputErrorClass =
  "w-full rounded-xl border border-red-500 bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20";
const labelClass = "mb-1.5 block text-sm font-bold text-ink";
const errorClass = "mt-1 text-sm font-semibold text-red-700";

export default function ContactPage() {
  const { locale } = useLocale();
  const t = content[locale];

  const [form, setForm] = useState<ContactForm>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const setField = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = t.errors.required;
    if (!form.email.trim()) next.email = t.errors.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = t.errors.email;
    if (!form.subject) next.subject = t.errors.required;
    if (!form.message.trim()) next.message = t.errors.required;
    else if (form.message.trim().length < 10) next.message = t.errors.messageShort;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Demo only: persist the message in the browser. At launch this will be
    // replaced by a real submission to email/CRM.
    try {
      const stored = JSON.parse(
        window.localStorage.getItem("qa_contact_messages") || "[]"
      ) as unknown[];
      stored.push({ ...form, submittedAt: new Date().toISOString() });
      window.localStorage.setItem("qa_contact_messages", JSON.stringify(stored));
    } catch {
      // localStorage unavailable — still show the success state.
    }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSendAnother = () => {
    setForm(emptyForm);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
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
                    <h2 className="mt-6 font-serif text-3xl font-bold text-brand">
                      {t.success.title}
                    </h2>
                    <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink/70">
                      {t.success.body}
                    </p>
                    <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink/70">
                      {t.success.note}
                    </p>
                    <button
                      type="button"
                      onClick={handleSendAnother}
                      className="mt-8 rounded-full bg-brand px-8 py-3.5 font-bold text-white transition hover:bg-brand-light"
                    >
                      {t.success.sendAnother}
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-serif text-2xl font-bold text-brand sm:text-3xl">
                      {t.formTitle}
                    </h2>
                    <p className="mt-2 leading-relaxed text-ink/70">{t.formSubtitle}</p>
                    <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className={labelClass}>
                            {t.labels.name} *
                          </label>
                          <input
                            id="name"
                            type="text"
                            value={form.name}
                            onChange={(e) => setField("name", e.target.value)}
                            placeholder={t.placeholders.name}
                            className={errors.name ? inputErrorClass : inputClass}
                            aria-invalid={!!errors.name}
                          />
                          {errors.name && <p className={errorClass}>{errors.name}</p>}
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

                      <div>
                        <label htmlFor="subject" className={labelClass}>
                          {t.labels.subject} *
                        </label>
                        <select
                          id="subject"
                          value={form.subject}
                          onChange={(e) => setField("subject", e.target.value)}
                          className={errors.subject ? inputErrorClass : inputClass}
                          aria-invalid={!!errors.subject}
                        >
                          <option value="">{t.placeholders.subject}</option>
                          {SUBJECT_VALUES.map((value, i) => (
                            <option key={value} value={value}>
                              {t.subjectLabels[i]}
                            </option>
                          ))}
                        </select>
                        {errors.subject && (
                          <p className={errorClass}>{errors.subject}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="message" className={labelClass}>
                          {t.labels.message} *
                        </label>
                        <textarea
                          id="message"
                          rows={6}
                          value={form.message}
                          onChange={(e) => setField("message", e.target.value)}
                          placeholder={t.placeholders.message}
                          className={errors.message ? inputErrorClass : inputClass}
                          aria-invalid={!!errors.message}
                        />
                        {errors.message && (
                          <p className={errorClass}>{errors.message}</p>
                        )}
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

            {/* Info panel */}
            <aside className="lg:col-span-2">
              <div className="space-y-8 lg:sticky lg:top-8">
                <img
                  src={SIDE_IMAGE}
                  alt={t.info.imageAlt}
                  loading="lazy"
                  className="h-56 w-full rounded-3xl object-cover shadow-card"
                />

                <div className="rounded-3xl bg-white p-6 shadow-card">
                  <h3 className="font-serif text-2xl font-bold text-brand">
                    {t.info.emailTitle}
                  </h3>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-2 block break-all text-lg font-bold text-brand underline decoration-gold decoration-2 underline-offset-4"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {t.info.emailNote}
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-card">
                  <h3 className="font-serif text-2xl font-bold text-brand">
                    {t.info.hoursTitle}
                  </h3>
                  <dl className="mt-5 space-y-3">
                    {t.info.hours.map((row) => (
                      <div
                        key={row.days}
                        className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-3 last:border-0 last:pb-0"
                      >
                        <dt className="text-sm text-ink/70">{row.days}</dt>
                        <dd className="text-right text-sm font-bold text-ink">
                          {row.time}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 text-sm text-ink/60">{t.info.hoursNote}</p>
                </div>

                <div className="rounded-3xl bg-brand p-6 text-white shadow-card">
                  <h3 className="font-serif text-2xl font-bold">
                    {t.info.whatsappTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    {t.info.whatsappNote}
                  </p>
                  <Link
                    href="/free-trial"
                    className="mt-5 inline-block rounded-full bg-gold px-6 py-3 text-sm font-bold text-brand-deep transition hover:bg-gold-light"
                  >
                    {t.info.whatsappButton}
                  </Link>
                </div>

                <div className="rounded-3xl bg-gold-soft p-6">
                  <h3 className="font-serif text-xl font-bold text-brand">
                    {t.info.trialTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {t.info.trialNote}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
