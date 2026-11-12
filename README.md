# Online Quran

Online Quran academy targeting Germany — live 1-to-1 Quran classes for kids and adults, taught by Pakistan-based tutors in Germany-friendly time slots.

## Stack

- Next.js 14.2 (App Router) + TypeScript + Tailwind CSS 3.4
- Static export (`output: "export"`) for GitHub Pages preview
- Bilingual: English + German (client-side locale switcher, `src/lib/i18n.tsx`)
- No backend yet — trial/contact forms save to browser localStorage (demo)

## Develop

```bash
npm install
npm run dev
```

## Build the GitHub Pages preview

```bash
GITHUB_PAGES=true npm run build   # basePath /quran-akademie, output in out/
```

Add an empty `out/.nojekyll` after every build. The `gh-pages` branch holds the built `out/` directory; `main` holds the source.

## Before launch

Replace the placeholder content: teacher profiles (`src/lib/teachers.ts`), testimonials (`src/lib/testimonials.ts`), contact details (WhatsApp link), Impressum business details, and have the privacy/terms pages reviewed by a German lawyer. Wire the trial/contact forms to email/CRM and add payments (Stripe / PayPal / SEPA).
