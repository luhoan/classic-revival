/**
 * DONATION PAGE CONTENT
 * ---------------------
 * There is no payment processor connected yet, and the site is honest
 * `donationUrl` is the organization's live giving page on HCB (the
 * fiscal sponsor). If it ever changes, update it here and the Donate
 * page follows. Setting it to null switches the page to an honest
 * "online giving is being set up" state.
 */

export const donation = {
  donationUrl: 'https://hcb.hackclub.com/donations/start/classic-literature-revival',

  headline: 'Fund the shelf, the club, and the box',
  lead:
    'Classic Revival runs on three simple things: books, places to put them, and money to move them. Financial support pays for collections, club materials, and — soon — the first public book boxes.',

  /**
   * WAYS TO GIVE — keep descriptions honest and unpriced until real
   * program costs are verified. Add `suggestedAmount` (number) to any
   * item once a true cost basis exists; it displays automatically.
   */
  ways: [
    {
      id: 'general',
      title: 'General support',
      description:
        'Unrestricted gifts go wherever the work needs them most — books, materials, and the practical costs of moving a library to the people who will use it.',
      suggestedAmount: null,
    },
    {
      id: 'school-collection',
      title: 'Sponsor a school collection',
      description:
        'Fund a curated set of classic literature and philosophy for a school where these books are out of reach.',
      suggestedAmount: null,
    },
    {
      id: 'reading-club',
      title: 'Support a student reading club',
      description:
        'Help a student-led club get books in every member’s hands, plus discussion materials to keep it going.',
      suggestedAmount: null,
    },
    {
      id: 'donation-box',
      title: 'Fund a community donation box',
      description:
        'Cover the build and placement of a neighborhood book-donation box as that campaign launches.',
      suggestedAmount: null,
    },
    {
      id: 'public-exchange',
      title: 'Back the first public book exchanges',
      description:
        'The take-one, leave-one boxes are still in design. Early sponsors make the pilot real — and will be the first to know when it is.',
      suggestedAmount: null,
    },
  ],

  inKind: {
    title: 'Prefer to give books instead?',
    description:
      'In-kind book donations are just as central to this work as money. Tell us what you have and we’ll handle the logistics.',
    cta: { label: 'Donate Books', href: '/get-involved/donate-books' },
  },
}
