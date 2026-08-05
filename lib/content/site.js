/**
 * SITE-WIDE CONTENT & SETTINGS
 * ----------------------------
 * Everything here is meant to be edited by a non-developer.
 * Change a value, save, and the whole site updates.
 *
 * See CONTENT-GUIDE.md at the project root for a walkthrough.
 */

export const site = {
  name: 'Classic Revival',
  tagline: 'Great books belong everywhere.',
  description:
    'Classic Revival is a youth-led nonprofit initiative that places classical literature and philosophy in schools, reading clubs, libraries, and public spaces — and helps new readers discover why these books still matter.',

  // Used for canonical URLs, sitemap, and Open Graph tags.
  // Update this if the site moves to a different domain.
  url: 'https://classicrevival.org',

  contact: {
    email: 'classicrevivalliterature@gmail.com',
    phone: { display: '(678) 296-1133', tel: '+16782961133' },
    // Add a mailing address here when there is one to publish.
    address: null,
  },

  social: {
    instagram: {
      handle: '@classicrevivalliterature',
      url: 'https://instagram.com/classicrevivalliterature',
    },
    // Set to a real URL when a LinkedIn page exists; null hides the link.
    linkedin: null,
  },

  /**
   * LEGAL / NONPROFIT STATUS
   * Only statements supported by the organization's actual paperwork
   * belong here. The existing site records HCB (Hack Club) as fiscal
   * sponsor; adjust this text if that arrangement changes.
   */
  legal: {
    statusLine:
      'Classic Revival operates with fiscal sponsorship through HCB, a project of The Hack Foundation, a 501(c)(3) nonprofit.',
    taxLine:
      'Donations made through our fiscal sponsor are tax-deductible to the extent allowed by law.',
    sponsors: [
      {
        name: 'HCB',
        role: 'Fiscal sponsor',
        url: 'https://hackclub.com/hcb',
      },
      {
        name: 'Hack Club',
        role: 'Community partner',
        url: 'https://hackclub.com',
      },
    ],
  },

  /**
   * PRIMARY NAVIGATION — order matters.
   * The Donate button is rendered separately in the header.
   */
  nav: [
    { label: 'Our Work', href: '/our-work' },
    { label: 'Get Involved', href: '/get-involved' },
    { label: 'Resources', href: '/resources' },
    { label: 'Library', href: '/library' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],

  /**
   * IMPACT METRICS
   * Leave a value at null until you have a real, verified number —
   * null metrics are hidden everywhere on the site automatically.
   * Optional `display` overrides how the number is shown
   * (e.g. value: 1000, display: '$1,000+').
   */
  metrics: [
    { id: 'support-donated', label: 'In books & support donated to schools', value: 1000, display: '$1,000+' },
    { id: 'schools-served', label: 'Partner schools supported', value: 3, display: '3+' },
    { id: 'boxes-installed', label: 'Book boxes up in Atlanta', value: 2 },
    { id: 'books-collected', label: 'Books collected', value: null },
    { id: 'books-distributed', label: 'Books placed with readers', value: null },
    { id: 'clubs-supported', label: 'Reading clubs supported', value: null },
  ],

  /**
   * WHAT WE'RE BUILDING NEXT — shown on the homepage and About page.
   * Keep these honest: they describe intentions, not accomplishments.
   */
  buildingNext: [
    'Growing beyond our first three partner schools — recommendations decide where we go next.',
    'Publishing a starter toolkit so any student can launch a reading club.',
    'Adding community book-donation boxes beyond our first two Atlanta locations.',
    'Designing the pilot for public take-one, leave-one classic book exchanges.',
  ],
}

/** Returns only metrics that have a real value — use this everywhere. */
export function verifiedMetrics() {
  return site.metrics.filter((m) => typeof m.value === 'number' && m.value > 0)
}
