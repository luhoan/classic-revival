import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Seo from '../../components/Seo'
import { PageHero } from '../../components/ui'
import { involvementPathways, forms } from '../../lib/content/forms'
import { ArrowRight } from 'lucide-react'
import { useReveal } from '../../lib/useReveal'

export default function GetInvolved() {
  useReveal()
  return (
    <>
      <Seo
        title="Get Involved"
        description="Donate books, recommend a school or library, start a reading club, host a donation box, volunteer, or sponsor a campaign — every path into Classic Revival starts here."
        path="/get-involved"
      />
      <Navbar />
      <main id="main" className="pt-16">
        <PageHero
          eyebrow="Get Involved"
          title="There’s a place for you here"
          lead="Some people bring books, some bring places to put them, some bring readers, and some bring funding. Pick the sentence that sounds like you."
        />

        <section className="py-16" style={{ background: 'var(--bg-primary)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured: the essay competition */}
            <Link
              href="/essay-competition"
              className="card-classic card-elevated group mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 no-underline reveal"
              style={{ borderColor: 'var(--gold)' }}
            >
              <div>
                <p className="eyebrow mb-2">Now open</p>
                <h2 className="font-display text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  The Essay Competition
                </h2>
                <p className="text-sm leading-relaxed prose-measure" style={{ color: 'var(--text-secondary)' }}>
                  Choose one of five questions, take a classical work seriously, and make an argument
                  of your own in 200–350 words.
                </p>
              </div>
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold annotation-underline shrink-0"
                style={{ color: 'var(--link-accent)' }}
              >
                Read the questions &amp; sign up
                <ArrowRight aria-hidden="true" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>

            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none reveal-stagger">
              {involvementPathways.map((p) => {
                const form = forms[p.formSlug]
                return (
                  <li key={p.formSlug}>
                    <Link
                      href={`/get-involved/${p.formSlug}`}
                      className="card-classic card-elevated group flex h-full flex-col justify-between gap-4 no-underline"
                    >
                      <div>
                        <h2 className="font-display text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                          {p.audience}
                        </h2>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {p.detail}
                        </p>
                      </div>
                      <span
                        className="inline-flex items-center gap-2 text-sm font-semibold annotation-underline self-start"
                        style={{ color: 'var(--link-accent)' }}
                      >
                        {form?.shortLabel ? `Start — ${form.shortLabel.toLowerCase()}` : 'Start here'}
                        <ArrowRight aria-hidden="true" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div className="rule my-12" />

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <p className="text-sm leading-relaxed prose-measure" style={{ color: 'var(--text-secondary)' }}>
                Want to join the team itself — writing guides, leading a chapter, or building this
                site? Team applications live on their own page:{' '}
                <Link href="/apply" className="link-quiet underline">apply to join Classic Revival</Link>.
              </p>
              <p className="text-sm leading-relaxed prose-measure" style={{ color: 'var(--text-secondary)' }}>
                Not sure which campaign your help fits? Read about{' '}
                <Link href="/our-work" className="link-quiet underline">the three campaigns</Link>{' '}
                first, or <Link href="/donate" className="link-quiet underline">fund the work directly</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
