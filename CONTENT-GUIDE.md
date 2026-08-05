# Classic Revival — Content Guide

How to update the website without touching component code. Every piece
of important copy lives in `lib/content/`. Edit a file, save, commit —
the site updates.

## Quick reference

| To change… | Edit… |
|---|---|
| Campaign status, description, FAQs, CTAs | `lib/content/campaigns.js` |
| Book acceptance policy (donation boxes) | `lib/content/campaigns.js` → `acceptance` |
| Impact metrics (books collected, etc.) | `lib/content/site.js` → `metrics` |
| Contact email, social links, navigation | `lib/content/site.js` |
| Legal / nonprofit-status wording | `lib/content/site.js` → `legal` |
| "What we're building next" list | `lib/content/site.js` → `buildingNext` |
| Team members and founder story | `lib/content/team.js` |
| Form questions and success messages | `lib/content/forms.js` |
| Where form submissions go | `lib/forms.js` → `FORM_ENDPOINT` |
| Donation options / online giving link | `lib/content/donate.js` |
| Resource-hub guides | `lib/content/resources.js` |
| Per-book study resources (library) | `lib/content/bookResources.js` |

## Common tasks

### Change a campaign status
In `lib/content/campaigns.js`, find the campaign and change its
`status` field. Valid values: `active`, `launching`, `pilot`,
`in-development`, `planned`. The badge updates everywhere at once.
**Only use `active` when the described work has actually happened.**

### Publish an impact metric
In `lib/content/site.js`, metrics start as `value: null`, which hides
them site-wide. When you have a real, verified number, set it:
`{ id: 'books-collected', label: 'Books collected', value: 240 }`.

### Connect the forms to a real inbox
Forms currently offer an honest email fallback. To store submissions:
sign up for a form backend (Formspree, Basin, a Google Apps Script, or
your own API), then set `FORM_ENDPOINT` in `lib/forms.js` to its URL.
Submissions POST as JSON: `{ form: <slug>, ...answers }`.

### Turn on online donations
Set `donationUrl` in `lib/content/donate.js` to the real giving link
(for HCB: your organization's donation page URL). The Donate page
switches from "being set up" messaging to a live Give button.

### Add a team member
Append to the array in `lib/content/team.js`. Add a photo by placing
an image in `public/team/` and setting `photo: '/team/name.jpg'`.
Never list someone who hasn't agreed to appear.

### Add a resource guide
Copy an existing object in `lib/content/resources.js`, give it a new
`slug` (the URL becomes `/resources/<slug>`), and fill in the fields.
Keep `reviewed: false` until an editor has approved the text — the
site shows an editorial note on unreviewed guides. Then add the URL to
`public/sitemap.xml`.

### Add or fix a book's study resources
`lib/content/bookResources.js` maps book titles to lists of
`{ label, url }` links shown on each book's page in the library.

### Campaign photographs
Real photos live in `public/photos/` and appear in three places:
the homepage (`pages/index.js` — hero plate + progress band) and the
campaign pages (`CAMPAIGN_PHOTOS` maps at the top of
`pages/our-work/index.js` and `pages/our-work/[slug].js`). To add or
swap a photo: put the optimized JPEG in `public/photos/`, then update
those maps (src, alt text, crop `position`, caption). **Only use real
photos of work that has actually happened** — the planned campaign
(public book exchanges) deliberately has no photo and falls back to a
quote panel until a real box exists.

## Accuracy rules (please keep)

- Never mark a campaign `active` before it truly is.
- Never invent numbers — leave metrics `null` until verified.
- The public book exchanges (campaign 3) have **not launched**; keep
  their language future-facing until the first box exists.
- Don't claim tax-deductibility beyond what the fiscal-sponsorship
  arrangement actually provides (see `lib/content/site.js` → `legal`).
