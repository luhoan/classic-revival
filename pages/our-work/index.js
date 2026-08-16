import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Seo from '../../components/Seo'
import { StatusBadge, PageHero } from '../../components/ui'
import { campaigns, campaignStatus } from '../../lib/content/campaigns'
import { useReveal } from '../../lib/useReveal'

/* Real photographs for the campaigns that have physically happened.
   A campaign without a photo keeps its quote panel — no imagery implying
   something that hasn't been built. */
const CAMPAIGN_PHOTOS = {
  'school-books-and-reading-clubs': {
    src: '/photos/school-donation-books.jpg',
    alt: 'Classic literature and philosophy paperbacks arranged on a library table, part of a donation to a partner school',
    position: '50% 45%',
  },
  'community-donation-boxes': {
    src: '/photos/donation-box-atlanta.jpg',
    alt: 'A Classic Revival book donation box — white with blue trim on a yellow post — installed beside a sidewalk in Atlanta',
    position: '50% 35%',
    extra: {
      src: '/photos/sandy-springs-library-books.jpg',
      alt: 'Donated paperbacks and hardcovers spread across a table at the Sandy Springs Library used bookstore',
      position: '50% 55%',
      caption: 'Books from our boxes, donated to the Sandy Springs Library',
    },
  },
  'public-book-exchanges': {
    src: '/photos/mailbox-first-books.jpg',
    alt: "Donated paperbacks and hardcovers laid out on a wooden floor — the first books stocking Classic Revival's public book exchange boxes",
    position: '50% 45%',
  },
}

export default function OurWork() {
  useReveal()
  return (
    <>
      <Seo
        title="Our Work"
        description="Three connected campaigns move classic literature and philosophy into schools, communities, and public spaces: school books and reading clubs, community donation boxes, and public book exchanges."
        path="/our-work"
      />
      <Navbar />

      <main id="main" className="pt-16">
        <PageHero
          eyebrow="Our work"
          title="Books should not be confined to a syllabus, a university, or a private collection."
          lead="Classic Revival places them in schools, reading groups, libraries, and public spaces — and helps new readers discover why they still matter. Three campaigns carry that out."
        />

        {/* ---- Campaign sections, alternating ---- */}
        {campaigns.map((campaign, i) => (
          <section
            key={campaign.slug}
            className="py-16 md:py-20"
            style={i % 2 === 1 ? { background: 'var(--bg-secondary)' } : undefined}
          >
            <div
              className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2 reveal' : 'reveal'}>
                <div className="flex items-center gap-3 mb-4">
                  <p className="eyebrow" style={{ marginBottom: 0 }}>
                    Campaign {String(i + 1).padStart(2, '0')}
                  </p>
                  <StatusBadge campaign={campaign} />
                </div>
                <h2 className="mb-4">{campaign.name}</h2>
                <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {campaign.summary}
                </p>
                <p className="leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                  {campaign.problem.body[0]}
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Link href={campaign.ctas.primary.href} className="btn-primary text-sm">
                    {campaign.ctas.primary.label}
                  </Link>
                  <Link href={`/our-work/${campaign.slug}`} className="link-quiet text-sm">
                    Full campaign page →
                  </Link>
                </div>
              </div>
              {CAMPAIGN_PHOTOS[campaign.slug] ? (
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <figure>
                    <div className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: 'var(--border-color)' }}>
                      <Image
                        src={CAMPAIGN_PHOTOS[campaign.slug].src}
                        alt={CAMPAIGN_PHOTOS[campaign.slug].alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 600px"
                        style={{ objectFit: 'cover', objectPosition: CAMPAIGN_PHOTOS[campaign.slug].position }}
                      />
                    </div>
                    <figcaption className="caption-italic mt-3">
                      {campaign.tagline}
                    </figcaption>
                  </figure>
                  {CAMPAIGN_PHOTOS[campaign.slug].extra && (
                    <figure className="mt-6">
                      <div className="relative aspect-[16/7] overflow-hidden border" style={{ borderColor: 'var(--border-color)' }}>
                        <Image
                          src={CAMPAIGN_PHOTOS[campaign.slug].extra.src}
                          alt={CAMPAIGN_PHOTOS[campaign.slug].extra.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 600px"
                          style={{ objectFit: 'cover', objectPosition: CAMPAIGN_PHOTOS[campaign.slug].extra.position }}
                        />
                      </div>
                      <figcaption className="caption-italic mt-3">
                        {CAMPAIGN_PHOTOS[campaign.slug].extra.caption}
                      </figcaption>
                    </figure>
                  )}
                </div>
              ) : (
                <figure
                  className={`h-full flex flex-col justify-center p-8 md:p-10 rounded-[3px] ${i % 2 === 1 ? 'lg:order-1' : ''}`}
                  style={{ background: 'var(--bg-tertiary)', borderLeft: '3px solid var(--gold)' }}
                >
                  <span aria-hidden="true" className="font-display text-5xl leading-none mb-3" style={{ color: 'var(--gold)' }}>
                    “
                  </span>
                  <blockquote
                    className="font-display text-2xl md:text-3xl leading-snug"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {campaign.tagline}
                  </blockquote>
                  <figcaption className="mt-5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    The idea behind {campaign.shortName.toLowerCase()}
                  </figcaption>
                </figure>
              )}
            </div>
          </section>
        ))}

        {/* ---- Statuses at a glance ---- */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="card-elevated p-6 md:p-8 reveal"
              style={{ borderLeft: '3px solid var(--gold)' }}
            >
              <h2 className="text-xl mb-4">Where each campaign actually stands</h2>
              <ul className="space-y-3 mb-5">
                {campaigns.map((campaign) => (
                  <li key={campaign.slug} className="flex flex-wrap items-center gap-3">
                    <StatusBadge campaign={campaign} />
                    <Link href={`/our-work/${campaign.slug}`} className="link-quiet font-medium">
                      {campaign.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                We keep these labels honest. Nothing on this site is marked{' '}
                <em>{campaignStatus({ status: 'active' }).label.toLowerCase()}</em> until the work
                it describes has actually happened — and every campaign page states
                plainly what exists today and what is still ahead.
              </p>
            </div>
            <p className="text-center mt-10">
              <Link href="/get-involved" className="btn-primary">
                Find your way to help
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
