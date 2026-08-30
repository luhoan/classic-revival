/**
 * 2026 ESSAY COMPETITION — official details.
 * Everything the site says about the competition comes from here.
 * Edit a value, save, and every mention updates (competition page,
 * homepage card, Get Involved banner, announcement bar).
 */

export const competition = {
  name: 'The 2026 Essay Competition',
  tagline: 'Old books. Living questions. Your voice.',

  prompt:
    'Choose one work of classic literature or philosophy. What important question does it raise that still matters today, and how should we answer it?',
  task:
    'Make a clear, original argument. Use specific moments, ideas, or quotations from your chosen work to support your answer.',
  length: '600–1,000 words, excluding the title and works cited.',
  examples:
    'Justice in Plato. Freedom in Frederick Douglass. Responsibility in Antigone. Ambition in Macbeth. You may choose another approved classic work or philosophical text.',

  entryFormUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSdK3eLiP51vVGwVoHyuRRrQhM0ia-VQfSSftasu_nYYfOSrfg/viewform?usp=header',

  deadline: {
    display: 'October 15, 2026 at 11:59 p.m. Eastern Time',
    short: 'October 15, 2026',
  },
  resultsBy: 'Winners will be contacted by email and announced by November 1, 2026.',

  eligibilityLine: 'Open to students in grades 6–12 worldwide. No entry fee.',

  prizes: [
    { place: '1st', cash: '$50', books: '5 books' },
    { place: '2nd', cash: '$25', books: '2 books' },
    { place: '3rd', cash: '$10', books: '1 book' },
  ],
  honorableMentions:
    'Selected honorable-mention essays will receive additional prizes and recognition from Classic Revival.',
  featuredNote:
    'Winning and selected essays may also be featured by Classic Revival with the writer’s permission.',

  rules: [
    'Open to students in grades 6–12, or the international equivalent. Entries are accepted worldwide.',
    'Submit one original essay written in English. Only one entry is allowed per student.',
    'The essay must be 600–1,000 words, excluding the title and works cited.',
    'Use quotations and references accurately. Any consistent citation style is accepted.',
    'The essay must be your own writing. AI-generated or substantially AI-written essays are not eligible. Ordinary spelling and grammar tools are allowed.',
    'The essay must not have been previously published or submitted to another Classic Revival competition.',
    'There is no entry fee.',
  ],

  judging: [
    { weight: '35%', label: 'Originality and thoughtfulness' },
    { weight: '30%', label: 'Strength of argument and use of evidence' },
    { weight: '25%', label: 'Engagement with the chosen text or idea' },
    { weight: '10%', label: 'Clarity, organization, and style' },
  ],
  judgingNote: 'Judges will value a clear and sincere argument more than complicated language.',

  closingLine: 'Read deeply. Think for yourself. Write something that matters.',
}
