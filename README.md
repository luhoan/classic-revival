# Classic Revival

The website of **Classic Revival** — a youth-led nonprofit initiative
placing classical literature and philosophy in schools, reading clubs,
libraries, and public spaces.

Classic Revival operates with fiscal sponsorship through HCB, a
project of The Hack Foundation (a 501(c)(3) nonprofit).

## Quick start

```bash
npm install
npm run dev      # develop at http://localhost:3000
npm run build    # production build
```

## Editing the website

**All copy, statuses, and settings live in `lib/content/` — see
[CONTENT-GUIDE.md](CONTENT-GUIDE.md)** for a full walkthrough
(changing a campaign status, publishing an impact metric, adding a
team member or resource guide, pointing forms at a different inbox,
updating the donation link, and more).

Real assets and information still needed from the organization are
tracked in [NEEDED-ASSETS.md](NEEDED-ASSETS.md).

## Site map

- `/` — homepage
- `/our-work` + three campaign pages (statuses labeled honestly)
- `/get-involved` + six involvement forms (delivered by email via FormSubmit)
- `/resources` + guide pages
- `/library` + book pages with per-book study resources
- `/about` — mission, vision, founders
- `/contact`, `/donate` (live HCB giving link), `/apply`

## Tech stack

- **Framework:** Next.js 14 (Pages Router)
- **Styling:** Tailwind CSS + design tokens in `styles/globals.css`
  (dark blue/brown reading-room theme by default, light paper theme via toggle)
- **Type:** Fraunces (headings) + Inter (body)
- **Icons:** Lucide React
- **Library data:** `lib/library_master.json` (+ `lib/store.js`
  localStorage store for accounts/discussions/admin)
- **Forms:** schema-driven (`lib/content/forms.js` → `components/SiteForm.js`),
  delivery configured in `lib/forms.js`
- **Deploy:** Vercel (`vercel.json`)

## Admin panel

The library/admin system keeps its own localStorage-backed accounts —
see `lib/store.js`. Admin pages live under `/admin`.

## License

MIT
