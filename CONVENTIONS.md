# Quran Akademie — Build Conventions

Read this file before writing any page. The scaffold (config, layout, header,
footer, i18n, shared components, shared data) is already in place.

## Stack & hard rules (static export for GitHub Pages)

- Next.js 14.2.35 App Router + TypeScript + Tailwind 3.4. `output: "export"`,
  `images.unoptimized: true`, `basePath` set in `next.config.js`.
- NO `next/font` (binary woff2 cannot be pushed via the GitHub snapshot tool).
  Fonts come from the Google Fonts `<link>` in `src/app/layout.tsx`.
- NO `next/image`. Use plain `<img>` tags with remote URLs only.
- NO local binary image files. All images are remote Unsplash/Pexels URLs.
- NO server actions, NO `searchParams` in server components. Every page is a
  client component (`"use client"` at the top) and reads the locale from the
  `useLocale()` hook.
- NO fake business facts: no real phone number, no real street address, no
  fake teacher photos, no fake reviews presented as verified. Mark every
  placeholder with a code comment (`SAMPLE`, `PLACEHOLDER` or `TODO`).
- Do NOT run `npm run build` — the coordinator runs the final verification
  build. You MAY run `npx tsc --noEmit` as a sanity check (ignore errors in
  other agents' files; the coordinator fixes those at the end).
- Do NOT edit files outside your assigned pages. Shared files are owned by the
  coordinator.

## i18n pattern (every page, EN + DE)

```tsx
"use client";
import { useLocale } from "@/lib/i18n";

const content = {
  en: { title: "...", body: "..." },
  de: { title: "...", body: "..." },
} as const;

export default function MyPage() {
  const { locale } = useLocale();
  const t = content[locale];
  // ...render with t.title etc.
}
```

- Default language is English. The header switcher persists the choice in
  `localStorage` (`qa_locale`).
- German copy must be real, careful German. All class times are framed in
  Germany time (CET/CEST), after-school/evening slots.

## Shared pieces (already built — reuse them)

- `src/components/Shared.tsx`: `PageHero({eyebrow, title, subtitle, arabic?})`,
  `SectionHeading({eyebrow, title, subtitle?})`, `CtaBand()` (no props).
- `src/lib/i18n.tsx`: `useLocale()`, `uiDict` (header/footer strings).
- `src/lib/courses.ts`: `courses` (6 courses: slug, name, tagline, arabic,
  ages, level, image) and `getCourse(slug)`.
- `src/lib/plans.ts`: `plans` (Basic $35, Standard $59, Hifz Intensive $99).
- `src/lib/teachers.ts`: `tutors` (6 SAMPLE profiles — monogram avatars only).
- `src/lib/testimonials.ts`: `testimonials` (4 SAMPLE reviews).
- `src/lib/faqs.ts`: `faqs` (10 Q&As, EN + DE).
- Header, footer, floating WhatsApp button and cookie banner are in the root
  layout already — do NOT recreate them.

## Design tokens (Tailwind)

- Colors: `brand` (#0B3D2E), `brand-dark`, `brand-deep`, `brand-light`,
  `brand-soft` (#E7F0EB); `gold` (#C9A227), `gold-dark`, `gold-light`,
  `gold-soft`; `cream` (#FAF6EE); `ink` (#1A2B25).
- Fonts: `font-serif` (Fraunces, display headings), `font-sans` (Manrope, UI),
  `font-arabic` (Amiri, Arabic strings — always with `dir="rtl"`).
- Cards: `rounded-3xl bg-white shadow-card`, hover `shadow-lift`.
- Pattern accents: `pattern-star` (gold on light) and `pattern-star-light`
  (white on dark) CSS classes; `gold-rule` divider under headings.
- Buttons: primary `rounded-full bg-brand px-8 py-3.5 font-bold text-white`;
  gold `rounded-full bg-gold px-8 py-3.5 font-bold text-brand-deep`.
- Links: `next/link` (`import Link from "next/link"`). Never build URLs by
  hand — basePath is handled by Next.

## Images (owner instruction: use free stock photos everywhere illustrative)

- Remote Unsplash/Pexels direct URLs only, plain `<img>` tags,
  `loading="lazy"` (except above-the-fold hero images), always with an `alt`.
- Teacher profiles are the ONE exception: monogram/initial avatars, NO photos
  — those cards present specific named people, so stock portraits are banned.
- Verified 200 on 2026-11-12 (use these first):
  - Open Quran (home image band, after courses preview; was the hero image
    until 2026-11-12, when the hero became the trial form): `https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=1600&q=80`
  - Quran on rehal: `https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1200&q=80`
  - Mosque: `https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1200&q=80`
  - Mosque silhouette: `https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=1200&q=80`
  - Mosque interior: `https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80`
  - Mosque dome: `https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=80`
  - Mosque arches: `https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80`
  - Bearded teacher on laptop (Pexels 6937687): `https://images.pexels.com/photos/6937687/pexels-photo-6937687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  - Boy in cap holding Quran (Pexels 7155575): `https://images.pexels.com/photos/7155575/pexels-photo-7155575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  - Open Quran (Pexels 5801003): `https://images.pexels.com/photos/5801003/pexels-photo-5801003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  - Open Quran close-up (Pexels 16111758): `https://images.pexels.com/photos/16111758/pexels-photo-16111758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  - Ornate Quran (Pexels 18387340): `https://images.pexels.com/photos/18387340/pexels-photo-18387340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  - Boy reading Quran in mosque (Pexels 11929254): `https://images.pexels.com/photos/11929254/pexels-photo-11929254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  - Boy reading indoors (Pexels 33451745): `https://images.pexels.com/photos/33451745/pexels-photo-33451745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  - Berlin TV tower at sunset (Pexels 18909754): `https://images.pexels.com/photos/18909754/pexels-photo-18909754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  - Noorani Qaida book cover (bookstore product photo — no free-stock photo of the book exists): `https://www.barakahislamicstore.com/cdn/shop/files/Noorani-Qaeda1_grande_33b8a558-42bc-4bdd-8e32-e9171343fa01.png?v=1706029182`
- ⛔ BANNED — never use these again (removed in the 2026-11-12 fix round):
  - Pexels 372326 — a BIBLE photo ("HOLY BIBLE"), wrongly used as the Hifz image
  - Unsplash photo-1503676260728 — ABC/books photo (was the Qaida image)
  - Unsplash photo-1522202176988 — cafe group with laptops (was the why-us image)
  - Unsplash photo-1577896851231 — generic classroom (was the Islamic Studies image)
  - Unsplash photo-1523240795612 — students in a library (was the Arabic course image)
- If you need another image, pick a different Unsplash/Pexels photo ID and
  verify it returns HTTP 200 first:
  `curl -s -o /dev/null -w "%{http_code}" "<url>"`. Never use an unverified URL.

## Forms (demo only — no backend)

- Free trial form: save to `localStorage` key `qa_trial_requests`, then show a
  success state. Note on the page (EN + DE): demo form — connected to
  email/CRM at launch.
- Contact form: save to `localStorage` key `qa_contact_messages`, same pattern.
- Client-side validation (required fields, email format). No real submission.

## Page inventory (who owns what)

- Coordinator: `/` (home) — done.
- Courses agent: `/courses`, `/courses/noorani-qaida`, `/courses/tajweed`,
  `/courses/hifz`, `/courses/tafseer`, `/courses/arabic`,
  `/courses/kids-islamic-studies`.
- Pricing/People agent: `/pricing`, `/teachers`, `/testimonials`, `/faq`.
- Forms/Blog agent: `/free-trial`, `/contact`, `/blog`,
  `/blog/teaching-kids-quran-germany`, `/blog/choosing-quran-tutor`,
  `/blog/tajweed-basics`.
- About/Legal agent: `/about`, `/privacy`, `/terms`, `/impressum`,
  `/safeguarding`.
