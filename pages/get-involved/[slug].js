import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Seo from '../../components/Seo'
import SiteForm from '../../components/SiteForm'
import { PageHero } from '../../components/ui'
import { forms } from '../../lib/content/forms'
import { getCampaign } from '../../lib/content/campaigns'
import { ArrowRight } from 'lucide-react'
import { useReveal } from '../../lib/useReveal'

/** Which campaign gives context for each form. null → campaigns overview. */
const RELATED_CAMPAIGN = {
  'reading-club': 'school-books-and-reading-clubs',
  recommend: 'school-books-and-reading-clubs',
  'host-a-box': 'community-donation-boxes',
  'donate-books': 'community-donation-boxes',
  volunteer: null,
  interest: null,
}

/* A real photograph shown beside a form, where one exists — so a
   prospective host can see exactly what they'd be hosting. */
const FORM_PHOTOS = {
  'host-a-box': {
    src: '/photos/donation-box-atlanta-2.jpg',
    alt: 'A Classic Revival book donation box — green with a silver roof on a blue post — standing in a wooded Atlanta neighborhood',
    caption: 'One of five Classic Revival book boxes already up and collecting books',
  },
}

export default function InvolvementForm({ slug }) {
  useReveal()
  const form = forms[slug]
  const relatedSlug = RELATED_CAMPAIGN[slug]
  const related = relatedSlug ? getCampaign(relatedSlug) : null
  const photo = FORM_PHOTOS[slug]

  return (
    <>
      <Seo
        title={form.title}
        description={form.intro}
        path={`/get-involved/${slug}`}
      />
      <Navbar />
      <main id="main" className="pt-16">
        <PageHero eyebrow="Get Involved" title={form.title} lead={form.intro} />

        <section className="py-16" style={{ background: 'var(--bg-primary)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-start">
              <div className="max-w-2xl">
                <SiteForm schema={form} />
              </div>

              <aside aria-label="About this form" className="lg:sticky lg:top-24 space-y-6">
                {photo && (
                  <figure className="reveal">
                    <div className="relative aspect-[4/5] overflow-hidden border" style={{ borderColor: 'var(--border-color)' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ objectPosition: '50% 40%' }}
                      />
                    </div>
                    <figcaption className="caption-italic mt-3">{photo.caption}</figcaption>
                  </figure>
                )}
                <div className="card-classic reveal">
                  <p className="eyebrow mb-4">What happens next</p>
                  <ol className="space-y-3 text-sm leading-relaxed list-none" style={{ color: 'var(--text-secondary)' }}>
                    <li className="flex gap-3">
                      <span aria-hidden="true" className="font-display font-semibold" style={{ color: 'var(--gold)' }}>1</span>
                      Your note lands in the team’s inbox.
                    </li>
                    <li className="flex gap-3">
                      <span aria-hidden="true" className="font-display font-semibold" style={{ color: 'var(--gold)' }}>2</span>
                      A member of the student team reads it — every message is read.
                    </li>
                    <li className="flex gap-3">
                      <span aria-hidden="true" className="font-display font-semibold" style={{ color: 'var(--gold)' }}>3</span>
                      We reply, usually within a few days.
                    </li>
                  </ol>
                </div>

                <div className="card-classic text-sm leading-relaxed reveal" style={{ color: 'var(--text-secondary)' }}>
                  {related ? (
                    <p>
                      This form feeds our{' '}
                      <Link href={`/our-work/${related.slug}`} className="link-quiet underline">
                        {related.name}
                      </Link>{' '}
                      campaign — {related.summary.charAt(0).toLowerCase() + related.summary.slice(1)}
                    </p>
                  ) : (
                    <p>
                      New here? See{' '}
                      <Link href="/our-work" className="link-quiet underline">what Classic Revival is building</Link>{' '}
                      across its three campaigns.
                    </p>
                  )}
                  <Link
                    href="/get-involved"
                    className="mt-4 inline-flex items-center gap-2 font-semibold annotation-underline no-underline"
                    style={{ color: 'var(--link-accent)' }}
                  >
                    All the ways to get involved
                    <ArrowRight aria-hidden="true" className="w-4 h-4" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export function getStaticPaths() {
  return {
    // Standalone forms (e.g. the essay competition) render on their own
    // dedicated pages instead of this generic layout.
    paths: Object.keys(forms)
      .filter((slug) => !forms[slug].standalone)
      .map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug } }
}
