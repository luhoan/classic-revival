/**
 * RESOURCE HUB CONTENT
 * --------------------
 * The resource hub is built to grow. Each entry below follows one
 * template (see the field comments on the first guide). To publish a
 * new guide: copy an existing object, give it a unique `slug`, fill
 * in the fields, and it appears on /resources automatically.
 *
 * EDITORIAL NOTE: guides written with AI assistance or not yet
 * checked by an editor should keep `reviewed: false` — the site will
 * display an editorial note inviting corrections. Flip it to true
 * once a human editor has approved the text.
 */

export const resourceCategories = [
  'Where to Begin',
  'Literature',
  'Philosophy',
  'Poetry',
  'Drama',
  'Reading Skills',
  'Club Guides',
]

export const resources = [
  {
    slug: 'how-to-read-a-difficult-book',
    title: 'How to Read a Difficult Book',
    category: 'Reading Skills',
    author: 'Classic Revival',
    readingTime: '7 min',
    difficulty: 'Everyone',
    ageRange: '12+',
    topic: 'Reading skills',
    tradition: null,
    book: null,
    reviewed: false,
    summary:
      'Difficulty is not a verdict on you. A practical method for the first fifty pages of any book that seems to be winning.',
    context: [
      'Almost everyone who loves an old book was confused by it first. Difficulty usually means the book comes from far away — a different century, a different set of assumptions — not that it requires a special brain.',
      'These habits are how experienced readers actually get through hard books. None of them require training. All of them require permission to read imperfectly.',
    ],
    sections: [
      {
        heading: 'Give the book fifty pages before judging it',
        body: 'Openings are the hardest part: you don’t know the names, the stakes, or the rules yet. Confusion in the first chapters is the cost of admission, not a warning sign.',
      },
      {
        heading: 'Read with a pencil',
        body: 'Underline what strikes you, argue in the margins, put a question mark where you’re lost. Marking a book keeps you in conversation with it — and turns rereading into meeting an old friend.',
      },
      {
        heading: 'Don’t stop for every unknown word',
        body: 'Circle it and keep moving. Sentences usually explain themselves by the paragraph’s end. Look words up between sessions, not during them.',
      },
      {
        heading: 'Use summaries without shame — after, not instead',
        body: 'Reading a chapter summary after the chapter is not cheating; it’s checking your bearings. The only mistake is letting a summary replace the experience of the prose itself.',
      },
      {
        heading: 'Find one other person',
        body: 'A single conversation can rescue a book. Saying "I don’t get why she did that" out loud is often the exact moment a book starts to open.',
      },
    ],
    questionsToConsider: [
      'What is the last book that defeated you — and was it the book, the timing, or the lack of company?',
      'What would change if confusion felt like the beginning of reading rather than the failure of it?',
    ],
    discussionQuestions: [],
    relatedBooks: [],
    furtherReading: [
      { label: 'Mortimer Adler & Charles Van Doren, How to Read a Book', url: null },
    ],
  },
  {
    slug: 'where-to-begin-five-first-classics',
    title: 'Where to Begin: Five First Classics',
    category: 'Where to Begin',
    author: 'Classic Revival',
    readingTime: '6 min',
    difficulty: 'Everyone',
    ageRange: '12+',
    topic: 'Starting points',
    tradition: 'Multiple traditions',
    book: null,
    reviewed: false,
    summary:
      'You don’t need a syllabus to start — you need one good door. Five short, powerful books that welcome a first-time reader of the classics.',
    context: [
      'The worst way to start is with the longest, most famous book on the shelf. The best way is with something short enough to finish and strong enough to make you want another.',
      'These five come from different centuries and traditions on purpose. "Classic" is not one culture’s property — it is what happens when a book keeps mattering to readers it was never written for.',
    ],
    sections: [
      {
        heading: 'Antigone — Sophocles',
        body: 'A one-sitting Greek tragedy about a young woman who breaks the law for a reason she believes is higher than law. Two thousand years of arguments about conscience and the state start here.',
      },
      {
        heading: 'Meditations — Marcus Aurelius',
        body: 'The private notebook of a Roman emperor trying to be a decent person under pressure. Read it in fragments, in any order. It reads like advice from someone who knows exactly how your week is going.',
      },
      {
        heading: 'The Analects — Confucius',
        body: 'Short exchanges and sayings about how to be good to the people around you. A reminder that the conversation about how to live has never belonged to one continent.',
      },
      {
        heading: 'Narrative of the Life of Frederick Douglass',
        body: 'A short autobiography that is also one of the most piercing arguments ever written — about freedom, literacy, and what reading is actually for. Douglass learned to read against the law; it is hard to take a book for granted afterward.',
      },
      {
        heading: 'The Metamorphosis — Franz Kafka',
        body: 'A man wakes up transformed into an insect, and his family adjusts. Strange, short, funny, and devastating — proof that "classic" can also mean "unlike anything you have ever read."',
      },
    ],
    questionsToConsider: [
      'Which of these five would you actually pick up first — and what does that tell you about what you’re looking for?',
    ],
    discussionQuestions: [],
    relatedBooks: ['Antigone', 'Meditations', 'The Analects', 'The Metamorphosis'],
    furtherReading: [],
  },
  {
    slug: 'running-a-first-discussion',
    title: 'Running Your First Book Discussion',
    category: 'Club Guides',
    author: 'Classic Revival',
    readingTime: '8 min',
    difficulty: 'Everyone',
    ageRange: '13+',
    topic: 'Reading clubs',
    tradition: null,
    book: null,
    reviewed: false,
    summary:
      'You don’t need to be an expert to lead a discussion — you need three honest questions and the nerve to let silence sit for five seconds.',
    context: [
      'The biggest fear of a first-time discussion leader is being asked something they can’t answer. Good news: your job is not to answer questions. It is to ask them and mean them.',
      'This is the format we recommend for a first meeting of a new reading club. It fits in forty-five minutes and works for a group of three or fifteen.',
    ],
    sections: [
      {
        heading: 'Open with reactions, not analysis (10 minutes)',
        body: 'Go around once: "What is one moment that stuck with you — and one thing that confused you?" Confusion is contribution. Write the confusions down; they are your agenda.',
      },
      {
        heading: 'Pick one passage and read it aloud (10 minutes)',
        body: 'Choose a passage someone mentioned. Read it slowly, out loud, together. Half of every great discussion is just paying close attention to the same paragraph at the same time.',
      },
      {
        heading: 'Ask a real question you don’t know the answer to (20 minutes)',
        body: 'Not a quiz question — a live one. "Was she right to do it?" "Would you have left?" Disagreement is the engine; your job is to keep it about the book and make sure no one person drives the whole meeting.',
      },
      {
        heading: 'Close by choosing what’s next (5 minutes)',
        body: 'End every meeting with a decision: the next stretch of reading, the next date, one question to carry. A club dies from vagueness faster than from disagreement.',
      },
    ],
    questionsToConsider: [],
    discussionQuestions: [
      'What is one moment that stuck with you, and one thing that confused you?',
      'Whose side is the author on — and how can you tell?',
      'What would you have done in the central character’s place?',
    ],
    relatedBooks: [],
    furtherReading: [],
  },
]

export function getResource(slug) {
  return resources.find((r) => r.slug === slug)
}
