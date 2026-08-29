/**
 * FORM DEFINITIONS
 * ----------------
 * Every public form on the site is defined here as data and rendered
 * by components/SiteForm.js. To change a question, edit it here.
 *
 * Field types: 'text', 'email', 'tel', 'url', 'number', 'textarea',
 * 'select' (needs options), 'radio' (needs options), 'checkbox'.
 *
 * WHERE SUBMISSIONS GO: see lib/forms.js — until a form backend is
 * connected, the site openly offers an email fallback instead of
 * pretending to store anything.
 */

/**
 * ESSAY COMPETITION — the five prompts.
 * `short` labels the dropdown in the sign-up form; `prompt` is the
 * full question shown on /essay-competition.
 */
export const essayQuestions = [
  {
    number: 1,
    title: 'Can a classical work ever truly become outdated?',
    short: 'Question 1: Can a classical work ever truly become outdated?',
    prompt:
      'Choose a classical literary work and argue whether its central ideas, conflicts, or messages remain relevant to people today. What makes the work continue to speak to modern readers — or what makes it difficult for modern readers to relate to it?',
  },
  {
    number: 2,
    title: 'Is the “hero” of classical literature really heroic?',
    short: 'Question 2: Is the “hero” of classical literature really heroic?',
    prompt:
      'Choose a protagonist from a classical work and examine their morality, decisions, and flaws. Do they deserve to be considered a hero, or does the work challenge the very idea of heroism?',
  },
  {
    number: 3,
    title: 'How much control do we really have over our own lives?',
    short: 'Question 3: How much control do we really have over our own lives?',
    prompt:
      'Many classical works explore fate, destiny, free will, and human choice. Using one or more classical works, discuss whether literature suggests that people control their own destinies or are ultimately shaped by forces beyond their control.',
  },
  {
    number: 4,
    title: 'What does society owe the individual — and what does the individual owe society?',
    short: 'Question 4: What does society owe the individual, and vice versa?',
    prompt:
      'Choose a classical work that explores conflict between an individual and their family, community, government, culture, or social expectations. Analyze what the work suggests about the relationship between personal freedom and responsibility to others.',
  },
  {
    number: 5,
    title: 'If you could bring one character from classical literature into the modern world, who would you choose — and what would they reveal about our society?',
    short: 'Question 5: Bring a classical character into the modern world',
    prompt:
      'Choose a classical literary character and imagine them living in the modern world. Rather than simply describing what would happen, use the character to explore a deeper question about modern society, such as power, identity, ambition, love, inequality, technology, morality, or freedom.',
  },
]

export const forms = {
  interest: {
    slug: 'interest',
    title: 'General Interest',
    shortLabel: 'Say hello',
    intro:
      'Not sure where you fit yet, or just want updates? Tell us a little about yourself and we’ll point you to the right place.',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true, autoComplete: 'name' },
      { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
      {
        name: 'area',
        label: 'What are you most interested in?',
        type: 'select',
        required: true,
        options: [
          'School books & reading clubs',
          'Community donation boxes',
          'Public book exchanges',
          'Volunteering',
          'Donating or sponsoring',
          'Launch updates only',
          'Something else',
        ],
      },
      { name: 'message', label: 'Message', type: 'textarea', rows: 4, required: false, help: 'Optional — anything you’d like us to know.' },
    ],
    success: 'Thanks — we read every message and will get back to you.',
  },

  recommend: {
    slug: 'recommend',
    title: 'Recommend a School or Library',
    shortLabel: 'Recommend a school or library',
    intro:
      'Know a school, library, or community organization that could use classic literature and philosophy? A recommendation takes two minutes and genuinely shapes where we go next.',
    fields: [
      { name: 'name', label: 'Your name', type: 'text', required: true, autoComplete: 'name' },
      { name: 'email', label: 'Your email', type: 'email', required: true, autoComplete: 'email' },
      { name: 'institution', label: 'Institution name', type: 'text', required: true },
      {
        name: 'institutionType',
        label: 'Institution type',
        type: 'select',
        required: true,
        options: ['School', 'Library', 'Community center', 'Youth program', 'Shelter', 'Other'],
      },
      { name: 'cityState', label: 'City and state', type: 'text', required: true, placeholder: 'e.g. Portland, OR' },
      { name: 'website', label: 'Institution website', type: 'url', required: false, placeholder: 'https://…' },
      { name: 'contactPerson', label: 'Contact person there, if known', type: 'text', required: false },
      { name: 'ageRange', label: 'Approximate age range served', type: 'text', required: false, placeholder: 'e.g. 11–18' },
      {
        name: 'affiliated',
        label: 'Are you affiliated with this institution?',
        type: 'radio',
        required: true,
        options: ['Yes — I work or study there', 'No — I’m recommending from outside'],
      },
      {
        name: 'why',
        label: 'Why could this institution benefit?',
        type: 'textarea',
        rows: 4,
        required: true,
        help: 'A sentence or two is plenty — what’s missing, and who would the books reach?',
      },
    ],
    success: 'Thank you — recommendations like this are how we decide where to go next.',
  },

  'host-a-box': {
    slug: 'host-a-box',
    title: 'Host a Box or Suggest a Location',
    shortLabel: 'Host a box',
    intro:
      'Offer a spot for a community donation box, or suggest a location for a public book exchange. Hosting is low-effort: you provide the spot, we handle the rest.',
    fields: [
      { name: 'name', label: 'Your name', type: 'text', required: true, autoComplete: 'name' },
      { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
      { name: 'organization', label: 'Organization or business', type: 'text', required: false },
      {
        name: 'boxType',
        label: 'What are you interested in?',
        type: 'radio',
        required: true,
        options: [
          'Hosting a community donation box',
          'Suggesting a location for a public book exchange',
          'Either — tell me more',
        ],
      },
      { name: 'location', label: 'Proposed location', type: 'text', required: true, placeholder: 'Address or a good description' },
      { name: 'setting', label: 'Indoor or outdoor?', type: 'radio', required: true, options: ['Indoor', 'Outdoor', 'Either possible'] },
      {
        name: 'footTraffic',
        label: 'Expected foot traffic',
        type: 'select',
        required: false,
        options: ['Light', 'Moderate', 'Heavy', 'Not sure'],
      },
      { name: 'space', label: 'Available space', type: 'text', required: false, placeholder: 'e.g. a corner near the entrance, about 3ft wide' },
      { name: 'notes', label: 'Anything else?', type: 'textarea', rows: 3, required: false },
    ],
    success: 'Thank you — host locations are exactly what these campaigns need right now.',
  },

  'reading-club': {
    slug: 'reading-club',
    title: 'Start a Reading Club',
    shortLabel: 'Start a reading club',
    intro:
      'Want to read serious books with other people — at your school or in your community? Tell us about the group you have in mind and we’ll help you get it started.',
    fields: [
      { name: 'name', label: 'Your name', type: 'text', required: true, autoComplete: 'name' },
      { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
      {
        name: 'organizerType',
        label: 'I am a…',
        type: 'radio',
        required: true,
        options: ['Student organizer', 'Teacher or librarian', 'Adult community organizer'],
      },
      { name: 'community', label: 'School or community', type: 'text', required: true, placeholder: 'e.g. Lincoln High School, or "my neighborhood"' },
      { name: 'expectedReaders', label: 'Expected number of readers', type: 'text', required: false, placeholder: 'A rough guess is fine' },
      { name: 'ageRange', label: 'Age range', type: 'text', required: false, placeholder: 'e.g. 14–17' },
      {
        name: 'interests',
        label: 'Books or themes you’re drawn to',
        type: 'textarea',
        rows: 3,
        required: false,
        help: 'Authors, eras, questions — or "no idea yet, help us choose."',
      },
      {
        name: 'supportRequested',
        label: 'What support would help most?',
        type: 'select',
        required: true,
        options: [
          'Books for the group',
          'Discussion guides and meeting plans',
          'Help choosing what to read',
          'All of the above',
        ],
      },
      { name: 'launchPeriod', label: 'When would you like to start?', type: 'text', required: false, placeholder: 'e.g. this fall, next semester' },
    ],
    success: 'Thank you — we’ll be in touch to help you take the first step.',
  },

  'donate-books': {
    slug: 'donate-books',
    title: 'Donate Books',
    shortLabel: 'Donate books',
    intro:
      'Have books that deserve another reader? Tell us what you have and where you are, and we’ll figure out the easiest way to get them into circulation.',
    fields: [
      { name: 'name', label: 'Your name', type: 'text', required: true, autoComplete: 'name' },
      { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
      { name: 'quantity', label: 'Approximate number of books', type: 'text', required: true, placeholder: 'e.g. about 20' },
      {
        name: 'types',
        label: 'What kinds of books?',
        type: 'textarea',
        rows: 3,
        required: true,
        placeholder: 'e.g. novels, some philosophy, a shelf of children’s books',
      },
      {
        name: 'condition',
        label: 'Overall condition',
        type: 'select',
        required: true,
        options: ['Like new', 'Good — readable, minor wear', 'Mixed', 'Rough — you decide what’s usable'],
      },
      { name: 'location', label: 'Your city and state', type: 'text', required: true },
      {
        name: 'logistics',
        label: 'Delivery or pickup?',
        type: 'radio',
        required: true,
        options: ['I can drop them off', 'I’d need a pickup', 'Either works'],
      },
      { name: 'notes', label: 'Anything else?', type: 'textarea', rows: 2, required: false, help: 'Photos help — you can email them to us after submitting.' },
    ],
    success: 'Thank you — we’ll reply with the simplest next step for getting your books to us.',
  },

  volunteer: {
    slug: 'volunteer',
    title: 'Volunteer',
    shortLabel: 'Volunteer',
    intro:
      'Sorting books, building boxes, writing guides, running clubs, spreading the word — this work runs on volunteers. Tell us what you enjoy and we’ll find the fit.',
    fields: [
      { name: 'name', label: 'Your name', type: 'text', required: true, autoComplete: 'name' },
      { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
      { name: 'location', label: 'Your city and state', type: 'text', required: true },
      {
        name: 'campaign',
        label: 'Preferred campaign',
        type: 'select',
        required: false,
        options: [
          'School books & reading clubs',
          'Community donation boxes',
          'Public book exchanges',
          'Wherever I’m useful',
        ],
      },
      {
        name: 'interests',
        label: 'What would you enjoy doing?',
        type: 'textarea',
        rows: 3,
        required: true,
        placeholder: 'e.g. sorting and cataloging, carpentry, writing reading guides, design, outreach',
      },
      { name: 'skills', label: 'Relevant skills or experience', type: 'textarea', rows: 2, required: false },
      { name: 'availability', label: 'Availability', type: 'text', required: false, placeholder: 'e.g. weekends, a few hours a month' },
    ],
    success: 'Thank you — we’ll reach out as volunteer roles open up.',
  },

  'essay-competition': {
    slug: 'essay-competition',
    title: 'Essay Competition Sign-Up',
    shortLabel: 'Enter the essay competition',
    // Rendered on its own page (/essay-competition), not under /get-involved.
    standalone: true,
    intro:
      'Sign up for the Classic Revival essay competition. If your essay is already written, paste your Google Doc link below and that will count as your submission.',
    fields: [
      { name: 'name', label: 'Full name', type: 'text', required: true, autoComplete: 'name' },
      { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
      { name: 'school', label: 'School / organization', type: 'text', required: false, help: 'If applicable.' },
      { name: 'gradeAge', label: 'Grade / age', type: 'text', required: true, placeholder: 'e.g. 10th grade, or 15' },
      {
        name: 'question',
        label: 'Which question do you plan to answer?',
        type: 'select',
        required: true,
        options: [...essayQuestions.map((q) => q.short), 'Not sure yet'],
      },
      { name: 'essayTitle', label: 'Essay title', type: 'text', required: false, help: 'If you already have one. You can always decide later.' },
      {
        name: 'docLink',
        label: 'Link to your Google Doc',
        type: 'url',
        required: false,
        placeholder: 'https://docs.google.com/…',
        help: 'Optional at sign-up. Set sharing to “Anyone with the link can view.” If you sign up without it, email us the link when your essay is ready.',
      },
    ],
    success:
      'You’re signed up. If you included a Google Doc link, that’s your submission. Otherwise, email us your essay link whenever it’s ready.',
  },
}

/** Ordered list used by the Get Involved index page. */
export const involvementPathways = [
  {
    formSlug: 'donate-books',
    audience: 'I have books to give',
    detail: 'Pass your books to readers who will actually use them.',
  },
  {
    formSlug: 'recommend',
    audience: 'I know a school or library that needs books',
    detail: 'Recommendations decide where our collections go next.',
  },
  {
    formSlug: 'reading-club',
    audience: 'I want to start a reading club',
    detail: 'Books, guides, and help getting a group off the ground.',
  },
  {
    formSlug: 'host-a-box',
    audience: 'I can host a box or suggest a location',
    detail: 'Donation boxes and public exchanges both need spots.',
  },
  {
    formSlug: 'volunteer',
    audience: 'I want to volunteer',
    detail: 'Sorting, building, writing, organizing — pick your lane.',
  },
  {
    formSlug: 'interest',
    audience: 'I want to fund a campaign or just stay close',
    detail: 'Sponsors and supporters make the whole thing move.',
  },
]
