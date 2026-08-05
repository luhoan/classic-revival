# Assets & Information Still Needed

Real material the organization should gather to replace placeholders.
Nothing on the site pretends these exist yet.

## Photography (highest impact)
- [ ] Real photos of the team (for `public/team/`, then set `photo` in `lib/content/team.js`)
- [ ] Students reading or discussing books (with signed photo/media consent — see note below)
- [ ] Book collections being sorted or delivered
- [ ] The first donation box and the first public exchange box, once built
- A social-sharing image (1200×630) at `public/og-image.png`

## Facts & records (unlock hidden sections)
- [x] First verified impact numbers — $1,000+ donated, 3+ partner schools, 2 Atlanta book boxes (update `lib/content/site.js` as they grow)
- [ ] Real program costs (what a school collection actually costs) → enables suggested amounts in `lib/content/donate.js`
- [ ] Confirmed partners → partner/logo section can then be added
- [ ] Formal book-acceptance policy approval → remove the "working draft" note in `lib/content/campaigns.js`

## Accounts & integrations
- [ ] Form backend (Formspree/Basin/Apps Script) → `FORM_ENDPOINT` in `lib/forms.js`
- [x] Online donation link — connected (HCB: hcb.hackclub.com/donations/start/classic-literature-revival)
- [ ] Custom domain confirmation (site assumes `classicrevival.org` — update `lib/content/site.js`, `public/sitemap.xml`, `public/robots.txt` if different)
- [ ] LinkedIn page URL, if one exists → `lib/content/site.js`

## Legal / policy drafts to formalize (flagged for review)
- [ ] Privacy policy (forms collect names/emails; keep collection minimal)
- [ ] Photo & media consent form — **required before publishing photos of minors**
- [ ] Volunteer policy and youth-safety guidelines — **any future feature involving direct contact with student members needs safeguarding review first**
- [ ] Terms of use and accessibility statement
