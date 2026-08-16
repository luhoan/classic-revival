import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Seo from '../../components/Seo'
import { StatusBadge, SectionHeading, FAQList } from '../../components/ui'
import { campaigns, getCampaign } from '../../lib/content/campaigns'
import { useReveal } from '../../lib/useReveal'

/* Real photographs, only for campaigns whose work has physically
   happened — never imagery implying an unlaunched program. */
const CAMPAIGN_PHOTOS = {
  'school-books-and-reading-clubs': {
    src: '/photos/school-donation-books.jpg',
    alt: 'Classic literature and philosophy paperbacks arranged on a library table, part of a donation to a partner school',
    position: '50% 45%',
    caption: 'Part of a collection donated to a partner school',
  },
  'community-donation-boxes': {
    src: '/photos/donation-box-atlanta-2.jpg',
    alt: 'A Classic Revival book donation box — green with a silver roof on a blue post — standing in a wooded Atlanta neighborhood',
    position: '50% 40%',
    caption: 'One of five Classic Revival book boxes collecting donations today',
  },
  'public-book-exchanges': {
    src: '/photos/mailbox-first-books.jpg',
    alt: "Donated paperbacks and hardcovers laid out on a wooden floor — the first books stocking Classic Revival's public book exchange boxes",
    position: '50% 45%',
    caption: 'The first books donated to our exchange boxes, now at a public library',
  },
}

export async function getStaticPaths() {
  return {
    paths: campaigns.map((c) => ({ params: { slug: c.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return { props: { slug: params.slug } }
}

export default function CampaignPage({ slug }) {
  useReveal()
  const campaign = getCampaign(slug)
  const related = campaigns.filter((c) => c.slug !== slug)

  return (
    <>
      <Seo title={campaign.name} description={campaign.summary} path={`/our-work/${slug}`} />
      <Navbar />

      <main id="main" className="pt-16">
        {/* ---- Hero ---- */}
        <section className="hero-bg border-b" style={{ borderColor: 'var(--border-color)' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <p className="eyebrow" style={{ marginBottom: 0 }}>Campaign</p>
              <StatusBadge campaign={campaign} />
            </div>
            <h1 className="mb-5 prose-measure">{campaign.name}</h1>
            <p className="text-lg md:text-xl leading-relaxed prose-measure mb-3" style={{ color: 'var(--text-secondary)' }}>
              {campaign.summary}
            </p>
            <p className="font-display text-lg italic" style={{ color: 'var(--gold)' }}>
              {campaign.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={campaign.ctas.primary.href} className="btn-primary">
                {campaign.ctas.primary.label}
              </Link>
              <Link href={campaign.ctas.secondary.href} className="btn-secondary">
                {campaign.ctas.secondary.label}
              </Link>
            </div>
          </div>
        </section>

        {/* ---- Impact so far (only campaigns with verified results) ---- */}
        {campaign.impact && (
          <section className="py-16 md:py-20" style={{ background: 'var(--bg-secondary)' }}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="reveal">
                <SectionHeading eyebrow="Impact" title={campaign.impact.heading} />
              </div>
              <ul className="space-y-3 mb-8">
                {campaign.impact.points.map((point, i) => (
                  <li key={i} className="flex gap-3 leading-relaxed prose-measure" style={{ color: 'var(--text-secondary)' }}>
                    <span aria-hidden="true" style={{ color: 'var(--success, #2F6B4F)' }}>✓</span>
                    {point}
                  </li>
                ))}
              </ul>
              {campaign.impact.partners && (
                <div>
                  <p className="text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {campaign.impact.partnersLabel}
                  </p>
                  <ul className="flex flex-wrap gap-3">
                    {campaign.impact.partners.map((partner) => (
                      <li
                        key={partner}
                        className="card-classic text-sm font-semibold"
                        style={{ padding: '0.6rem 1rem', color: 'var(--text-primary)' }}
                      >
                        {partner}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ---- Problem / Solution ---- */}
        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 lg:gap-14">
            <div className="reveal">
              <p className="eyebrow mb-3">The problem</p>
              <h2 className="text-2xl mb-4">{campaign.problem.heading}</h2>
              {campaign.problem.body.map((para, i) => (
                <p key={i} className="leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {para}
                </p>
              ))}
            </div>
            <div className="reveal">
              <p className="eyebrow mb-3">Our answer</p>
              <h2 className="text-2xl mb-4">{campaign.solution.heading}</h2>
              {campaign.solution.body.map((para, i) => (
                <p key={i} className="leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ---- How it works ---- */}
        <section className="py-16 md:py-20" style={{ background: 'var(--bg-secondary)' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <SectionHeading eyebrow="How it works" title="Step by step" />
            </div>
            <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-start">
              <ol className="space-y-0">
                {campaign.howItWorks.map((step, i) => (
                  <li key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
                    {i < campaign.howItWorks.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-5 top-10 bottom-0 w-px"
                        style={{ background: 'var(--border-color)' }}
                      />
                    )}
                    <span
                      className="relative z-10 flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full font-display font-semibold"
                      style={{ background: 'var(--burgundy)', color: '#fff' }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <div className="pt-1.5">
                      <h3 className="text-lg mb-1">{step.title}</h3>
                      <p className="text-sm leading-relaxed prose-measure" style={{ color: 'var(--text-secondary)' }}>
                        {step.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              {CAMPAIGN_PHOTOS[slug] ? (
                <div className="lg:sticky lg:top-24">
                  <figure>
                    <div className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: 'var(--border-color)' }}>
                      <Image
                        src={CAMPAIGN_PHOTOS[slug].src}
                        alt={CAMPAIGN_PHOTOS[slug].alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 420px"
                        style={{ objectFit: 'cover', objectPosition: CAMPAIGN_PHOTOS[slug].position }}
                      />
                    </div>
                    <figcaption className="caption-italic mt-3">
                      {CAMPAIGN_PHOTOS[slug].caption}
                    </figcaption>
                  </figure>
                  {CAMPAIGN_PHOTOS[slug].extra && (
                    <figure className="mt-6">
                      <div className="relative aspect-[16/8] overflow-hidden border" style={{ borderColor: 'var(--border-color)' }}>
                        <Image
                          src={CAMPAIGN_PHOTOS[slug].extra.src}
                          alt={CAMPAIGN_PHOTOS[slug].extra.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 420px"
                          style={{ objectFit: 'cover', objectPosition: CAMPAIGN_PHOTOS[slug].extra.position }}
                        />
                      </div>
                      <figcaption className="caption-italic mt-3">
                        {CAMPAIGN_PHOTOS[slug].extra.caption}
                      </figcaption>
                    </figure>
                  )}
                </div>
              ) : (
                <figure
                  className="hidden lg:flex h-full flex-col justify-center p-8 rounded-[3px] lg:sticky lg:top-24"
                  style={{ background: 'var(--bg-tertiary)', borderLeft: '3px solid var(--gold)' }}
                >
                  <span aria-hidden="true" className="font-display text-5xl leading-none mb-3" style={{ color: 'var(--gold)' }}>
                    “
                  </span>
                  <blockquote className="font-display text-2xl leading-snug" style={{ color: 'var(--text-primary)' }}>
                    {campaign.tagline}
                  </blockquote>
                  <figcaption className="mt-5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    The idea behind {campaign.shortName.toLowerCase()}
                  </figcaption>
                </figure>
              )}
            </div>
          </div>
        </section>

        {/* ---- Who can participate / what we need ---- */}
        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 reveal-stagger">
            <div className="card-classic">
              <h2 className="text-xl mb-4">Who can take part</h2>
              <ul className="space-y-2.5">
                {campaign.participate.map((who, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    <span aria-hidden="true" className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--burgundy)' }} />
                    {who}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-classic">
              <h2 className="text-xl mb-4">What this campaign needs</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                {campaign.support}
              </p>
              <Link href={campaign.ctas.primary.href} className="btn-primary text-sm inline-block">
                {campaign.ctas.primary.label}
              </Link>
            </div>
          </div>
        </section>

        {/* ---- Acceptance policy (donation boxes only) ---- */}
        {campaign.acceptance && (
          <section className="py-16 md:py-20" style={{ background: 'var(--bg-secondary)' }}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="reveal">
                <SectionHeading
                  eyebrow="Donation guidelines"
                  title="What we can accept"
                  lead={campaign.acceptance.note}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6 reveal-stagger">
                <div className="card-classic" style={{ borderTop: '3px solid var(--success, #2F6B4F)' }}>
                  <h3 className="text-lg mb-4">Generally encouraged</h3>
                  <ul className="space-y-2">
                    {campaign.acceptance.encouraged.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <span aria-hidden="true" style={{ color: 'var(--success, #2F6B4F)' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-classic" style={{ borderTop: '3px solid var(--error, #A13A3A)' }}>
                  <h3 className="text-lg mb-4">May not be accepted</h3>
                  <ul className="space-y-2">
                    {campaign.acceptance.declined.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <span aria-hidden="true" style={{ color: 'var(--error, #A13A3A)' }}>✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ---- Honesty / status callout ---- */}
        <section className="py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="card-elevated p-6 md:p-8 reveal"
              style={{ borderLeft: '3px solid var(--gold)' }}
              role="note"
              aria-label="Campaign status"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h2 className="text-lg" style={{ marginBottom: 0 }}>Where this stands today</h2>
                <StatusBadge campaign={campaign} />
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {campaign.honesty}
              </p>
            </div>
          </div>
        </section>

        {/* ---- FAQ ---- */}
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
            </div>
            <FAQList items={campaign.faqs} />
          </div>
        </section>

        {/* ---- CTA block ---- */}
        <section className="py-16 md:py-20 text-center" style={{ background: 'var(--bg-secondary)' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
            <h2 className="mb-6">Ready to help?</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Link href={campaign.ctas.primary.href} className="btn-primary">
                {campaign.ctas.primary.label}
              </Link>
              <Link href={campaign.ctas.secondary.href} className="btn-secondary">
                {campaign.ctas.secondary.label}
              </Link>
            </div>
            <p className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {campaign.ctas.others.map((cta) => (
                <Link key={cta.label} href={cta.href} className="link-quiet text-sm">
                  {cta.label} →
                </Link>
              ))}
            </p>
          </div>
        </section>

        {/* ---- Related campaigns ---- */}
        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <SectionHeading eyebrow="Keep exploring" title="The other campaigns" />
            </div>
            <div className="grid sm:grid-cols-2 gap-6 reveal-stagger">
              {related.map((other) => (
                <Link key={other.slug} href={`/our-work/${other.slug}`} className="card-classic block">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <h3 className="text-lg" style={{ marginBottom: 0 }}>{other.name}</h3>
                    <StatusBadge campaign={other} />
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {other.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
