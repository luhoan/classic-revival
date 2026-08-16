/**
 * CAMPAIGN CONTENT
 * ----------------
 * The three Classic Revival campaigns live here — names, statuses,
 * descriptions, how-it-works steps, FAQs, and calls to action.
 *
 * TO CHANGE A CAMPAIGN STATUS: edit the `status` field below.
 * Valid statuses (defined in STATUS_STYLES): 'active', 'launching',
 * 'pilot', 'in-development', 'planned'.
 *
 * Never set a campaign to 'active' until the work it describes has
 * actually happened.
 */

export const STATUS_STYLES = {
  active: { label: 'Active', tone: 'green' },
  launching: { label: 'Launching', tone: 'gold' },
  pilot: { label: 'Pilot Proposed', tone: 'navy' },
  'in-development': { label: 'In Development', tone: 'navy' },
  planned: { label: 'Planned', tone: 'neutral' },
}

export const campaigns = [
  {
    slug: 'school-books-and-reading-clubs',
    name: 'School Books and Reading Clubs',
    shortName: 'Books and Reading Clubs',
    status: 'active',
    icon: 'book',
    // One sentence, used on cards.
    summary:
      'We donate carefully chosen classic literature and philosophy to schools — and help students start reading clubs so the books actually get read.',
    tagline: 'Access begins with a book. Engagement begins with a conversation.',
    problem: {
      heading: 'A book on a shelf is only a beginning',
      body: [
        'Many students never encounter serious literature or philosophy outside a required syllabus — and many schools simply do not have these books to offer. But access alone is not the whole problem.',
        'A donated box of books, left without an invitation, often stays shut. Students engage with hard books when someone helps them start, when the first book is well chosen, and when there are other people to read with.',
      ],
    },
    solution: {
      heading: 'Books, plus the structure to read them together',
      body: [
        'Classic Revival donates selected classic literature and philosophy to schools, prioritizing schools and student communities where access to these books is limited.',
        'Alongside the books, we help students establish reading clubs: club-starting guides, suggested first books, reading schedules, discussion questions, and — as our funding grows — limited financial support for student groups.',
      ],
    },
    howItWorks: [
      { title: 'A school or student reaches out', detail: 'Teachers, librarians, administrators, or students tell us their school could use books or wants a reading club.' },
      { title: 'We select the collection', detail: 'We choose editions worth keeping: readable translations, approachable entry points, and books that reward discussion.' },
      { title: 'Books arrive with an invitation', detail: 'Collections come with starter guides, first-meeting plans, and discussion questions — not just a box.' },
      { title: 'A club takes shape', detail: 'We support student organizers as they set a pace, run discussions, and keep the group going.' },
    ],
    participate: [
      'Students who want books or a reading club at their school',
      'Teachers and librarians who can champion a collection',
      'School administrators exploring a partnership',
      'Donors who want to sponsor a school collection or student group',
    ],
    support:
      'This campaign needs school connections, book funding, and student organizers. Recommending a school takes two minutes and is genuinely useful.',
    /**
     * IMPACT — verified accomplishments only. Add points and partner
     * names as new donations and clubs actually happen.
     */
    impact: {
      heading: 'What we’ve done so far',
      points: [
        'Donated more than $1,000 in books and support to partner schools — and growing.',
        'Funding student reading clubs at our partner schools so the books get read together, not just shelved.',
      ],
      partnersLabel: 'Partner schools we’ve supported include:',
      partners: [
        'Grant Union High School',
        'Riverwood International Charter School',
        'Jack M. Barrack Hebrew Academy',
      ],
    },
    honesty:
      'This campaign is active. We have donated over $1,000 to schools including Grant Union High School, Riverwood International Charter School, and Jack M. Barrack Hebrew Academy, and we are funding student reading clubs at those schools. The next step is more schools and more clubs — recommendations decide where we go.',
    faqs: [
      {
        q: 'Which schools do you prioritize?',
        a: 'Schools and student communities where access to classic literature and philosophy is limited — whether that means a thin library collection, no budget for enrichment, or simply no one offering these books to students.',
      },
      {
        q: 'What books do you donate?',
        a: 'Enduring literature and philosophy chosen for new readers: strong translations, readable editions, and works that reward discussion. We take selection seriously — a bad first encounter with a great book can end the relationship early.',
      },
      {
        q: 'Does a reading club need a teacher?',
        a: 'An adult sponsor helps, and many schools require one, but the clubs are meant to be student-led. Our guides are written so a motivated student can run a good discussion without a lecturer.',
      },
      {
        q: 'Is funding for reading clubs available now?',
        a: 'Yes — we are already funding student reading clubs at our partner schools, and that support grows with our resources. Tell us about your group and we will be straight with you about what we can offer right now.',
      },
    ],
    ctas: {
      primary: { label: 'Bring Classic Revival to Your School', href: '/get-involved/recommend' },
      secondary: { label: 'Start a Reading Club', href: '/get-involved/reading-club' },
      others: [
        { label: 'Sponsor a School Collection', href: '/donate' },
        { label: 'Recommend a School', href: '/get-involved/recommend' },
      ],
    },
    formSlug: 'reading-club',
  },
  {
    slug: 'community-donation-boxes',
    name: 'Community Book Donation Boxes',
    shortName: 'Donation Boxes',
    status: 'active',
    icon: 'box',
    summary:
      'Neighborhood boxes where anyone can leave books they no longer need — we sort them and place them with libraries, schools, and programs that will use them.',
    tagline: 'Help a book continue its life.',
    problem: {
      heading: 'Good books sit unused in almost every home',
      body: [
        'Most households own books no one will open again. Meanwhile, under-resourced libraries, classrooms, shelters, and youth programs need exactly those books and lack the budget to buy them.',
        'Donation drives usually treat books as bulk — weighed, warehoused, or resold for cents. We think a book’s value is the reader it hasn’t met yet.',
      ],
    },
    solution: {
      heading: 'Collection, sorting, and deliberate redistribution',
      body: [
        'Classic Revival will place donation boxes at businesses, schools, libraries, and community spaces, giving neighbors a simple, visible way to pass books on.',
        'We collect what comes in, assess it, and match usable books with institutions that can actually use them — a children’s shelf to an after-school program, novels to a shelter’s common room, philosophy to a high school club. Redistribution, not resale, is the point.',
      ],
    },
    howItWorks: [
      { title: 'A host offers a spot', detail: 'A café, school, library, business, or community center hosts a clearly marked Classic Revival donation box.' },
      { title: 'Neighbors drop off books', detail: 'Anyone can contribute books they no longer need — no forms, no minimums.' },
      { title: 'We collect and sort', detail: 'Volunteers assess condition and organize books by audience and subject.' },
      { title: 'Books are matched and delivered', detail: 'Usable books go to libraries, schools, youth programs, shelters, and community organizations that request them.' },
    ],
    participate: [
      'Businesses and organizations that can host a box',
      'Anyone with books to donate',
      'Libraries and community organizations that need books',
      'Volunteers to collect, sort, and deliver',
    ],
    support:
      'This campaign needs host locations, volunteer sorters, and connections to libraries and programs that need books. If you can offer any of the three, we want to hear from you.',
    impact: {
      heading: 'What we’ve done so far',
      points: [
        'Five Classic Revival book boxes are installed and collecting donations today.',
      ],
      partnersLabel: null,
      partners: null,
    },
    honesty:
      'This campaign is live in its earliest stage: five book boxes are up right now, and we are recruiting more host locations and distribution partners. New boxes are announced here as they are actually placed — never before.',
    // BOOK ACCEPTANCE POLICY — edit freely; this is a working draft,
    // not a final policy, until the organization formally adopts one.
    acceptance: {
      note: 'This is our working draft policy and may be refined as the program launches.',
      encouraged: [
        'Literature and fiction',
        'Philosophy',
        'History',
        'Poetry',
        'Essays',
        'Children’s literature',
        'Young-adult books',
        'Educational nonfiction',
        'Books in good, readable condition',
      ],
      declined: [
        'Severely damaged or moldy books',
        'Outdated reference materials (old encyclopedias, superseded textbooks)',
        'Books with missing pages or broken bindings',
        'Materials that cannot safely or reasonably be redistributed',
      ],
    },
    faqs: [
      {
        q: 'Do you sell the donated books?',
        a: 'Selling books for pennies is not the model. Our purpose is redistribution: matching usable books with libraries, schools, and programs that need them. If an occasional sale ever helps fund the work, we will say so plainly.',
      },
      {
        q: 'What happens to books you can’t place?',
        a: 'We are honest about limits: some donations are too damaged to pass on. We will recycle what cannot be redistributed responsibly rather than shipping unusable books to organizations as a gesture.',
      },
      {
        q: 'What does hosting a box involve?',
        a: 'Offering a visible indoor or outdoor spot, letting us install a clearly marked box, and contacting us when it fills. We handle collection and everything after.',
      },
      {
        q: 'Can my organization receive books?',
        a: 'Yes — under-resourced libraries, schools, community centers, youth programs, and shelters can ask to become distribution partners. Tell us who your readers are and we will match books to them.',
      },
    ],
    ctas: {
      primary: { label: 'Host a Donation Box', href: '/get-involved/host-a-box' },
      secondary: { label: 'Donate Books', href: '/get-involved/donate-books' },
      others: [
        { label: 'Become a Distribution Partner', href: '/get-involved/recommend' },
        { label: 'Volunteer to Sort Books', href: '/get-involved/volunteer' },
      ],
    },
    formSlug: 'host-a-box',
  },
  {
    slug: 'public-book-exchanges',
    name: 'Public Classic Book Exchanges',
    shortName: 'Public Book Exchanges',
    status: 'active',
    icon: 'exchange',
    summary:
      'Small public book boxes in parks, cafés, and campuses, stocked with classic literature and philosophy. Take a book. Leave a book. Begin a conversation.',
    tagline: 'Take one. Leave one. Begin somewhere.',
    problem: {
      heading: 'Serious books rarely appear in public life',
      body: [
        'You can find a coffee, a screen, and an advertisement on any block. You can almost never find Sophocles, Baldwin, or the Analects sitting in public, free, waiting to be picked up out of curiosity.',
        'Little free libraries prove that people love exchanging books. But few of them deliberately offer the books that ask the biggest questions — the ones most people assume were never meant for them.',
      ],
    },
    solution: {
      heading: 'Take-one, leave-one boxes with a literary spine',
      body: [
        'Classic Revival builds and places small public book exchanges — in parks, community spaces, cafés, schools, campuses, and libraries — stocked especially with classic literature and philosophy. The first exchange boxes are already in place: donated to a public library and stocked with their first books.',
        'Every book is free to take, return, or pass along. Optional QR codes will link to short reading guides, background, and discussion prompts, so a stranger’s first encounter with a hard book comes with a way in.',
      ],
    },
    howItWorks: [
      { title: 'A location joins', detail: 'A park, café, campus, library, or business agrees to host a box.' },
      { title: 'We build and stock it', detail: 'Each box starts with a curated shelf of literature and philosophy in readable editions.' },
      { title: 'Anyone takes a book, free', detail: 'Return it, pass it on, or leave another book in its place.' },
      { title: 'Context travels with the book', detail: 'QR codes link to guides and discussion prompts for readers who want a way in.' },
    ],
    participate: [
      'Businesses, parks, campuses, and libraries that could host a box',
      'Sponsors to fund the first builds',
      'People who want launch updates and early involvement',
    ],
    support:
      'The next boxes need locations, sponsors, and builders. Suggesting a good spot in your neighborhood is the single most useful thing you can do today.',
    impact: {
      heading: 'What we’ve done so far',
      points: [
        'Our first public book exchange boxes have been donated to a public library and stocked with their first collection of donated books.',
      ],
      partnersLabel: null,
      partners: null,
    },
    honesty:
      'This campaign is live in its earliest stage: the first exchange boxes have been donated to a public library and hold their first books. New locations are announced here as boxes are actually placed — never before.',
    faqs: [
      {
        q: 'Where are the boxes now?',
        a: 'Our first exchange boxes are at a public library, stocked with their first donated books. We are collecting suggestions for the next locations — hosts whose spaces get real foot traffic.',
      },
      {
        q: 'How is this different from a little free library?',
        a: 'We love little free libraries, and we borrow the take-one-leave-one model directly. The difference is the shelf: our boxes are deliberately stocked with classic literature and philosophy, and each box links to guides that help a curious stranger actually start.',
      },
      {
        q: 'What does it cost to sponsor a box?',
        a: 'We are still pricing the builds honestly, so we will not quote a number yet. If you are interested in sponsoring, contact us and we will share real figures as soon as we have them.',
      },
      {
        q: 'Can I help build them?',
        a: 'Yes — tell us through the volunteer form. Carpentry, weatherproofing, and design help all matter as we build the next boxes.',
      },
    ],
    ctas: {
      primary: { label: 'Suggest a Location', href: '/get-involved/host-a-box' },
      secondary: { label: 'Get Launch Updates', href: '/get-involved/interest' },
      others: [
        { label: 'Sponsor a Public Book Box', href: '/donate' },
        { label: 'Join the Pilot', href: '/get-involved/volunteer' },
      ],
    },
    formSlug: 'interest',
  },
]

export function getCampaign(slug) {
  return campaigns.find((c) => c.slug === slug)
}

export function campaignStatus(campaign) {
  return STATUS_STYLES[campaign.status] || STATUS_STYLES.planned
}
