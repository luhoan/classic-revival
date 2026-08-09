import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { PageHero, SectionHeading, FAQList } from '../components/ui'
import { site } from '../lib/content/site'
import { donation } from '../lib/content/donate'
import { Heart, ExternalLink, BookOpen, Mail } from 'lucide-react'
import { useReveal } from '../lib/useReveal'

const donateFaqs = [
  {
    q: 'Is my donation tax-deductible?',
    a: site.legal.taxLine,
  },
  {
    q: 'Can I give books instead of money?',
    a: 'Absolutely — book donations are just as central to this work as funding. Use the Donate Books form and we’ll handle the logistics with you.',
  },
  {
    q: 'Can I sponsor a specific campaign?',
    a: `Yes. Give through the donation page and email us at ${site.contact.email} noting the campaign you want your gift to support — a school collection, a reading club, a donation box, or the public book exchanges.`,
  },
]

export default function Donate() {
  useReveal()
  return (
    <>
      <Seo
        title="Donate"
        description="Support Classic Revival: fund school book collections, student reading clubs, community donation boxes, and the first public classic book exchanges."
        path="/donate"
      />
      <Navbar />
      <main id="main" className="pt-16">
        <PageHero eyebrow="Donate" title={donation.headline} lead={donation.lead} />

        {/* Give panel */}
        <section className="py-16" style={{ background: 'var(--bg-secondary)' }} aria-labelledby="give-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card-elevated card-classic text-center py-10 px-6">
              <h2 id="give-heading" className="font-display text-2xl md:text-3xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                Make a gift
              </h2>
              {donation.donationUrl ? (
                <>
                  <p className="leading-relaxed mb-8 prose-measure mx-auto" style={{ color: 'var(--text-secondary)' }}>
                    Online giving is processed securely by HCB, our fiscal sponsor. One-time and
                    recurring gifts both go through the same page.
                  </p>
                  <a
                    href={donation.donationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
                  >
                    <Heart aria-hidden="true" className="w-5 h-5" />
                    Give through HCB
                    <ExternalLink aria-hidden="true" className="w-4 h-4" />
                  </a>
                </>
              ) : (
                <>
                  <p className="leading-relaxed mb-6 prose-measure mx-auto" style={{ color: 'var(--text-secondary)' }}>
                    Online giving is being set up. In the meantime, email us and we’ll arrange your
                    gift directly — and gladly.
                  </p>
                  <a
                    href={`mailto:${site.contact.email}?subject=${encodeURIComponent('[Classic Revival] Donation')}`}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <Mail aria-hidden="true" className="w-5 h-5" />
                    Email us about giving
                  </a>
                </>
              )}
              <div className="rule my-8" />
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {site.legal.statusLine} {site.legal.taxLine}
              </p>
            </div>
          </div>
        </section>

        {/* Ways your gift works */}
        <section className="py-16" style={{ background: 'var(--bg-primary)' }} aria-labelledby="ways-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <SectionHeading
                eyebrow="Where it goes"
                title="Ways your gift works"
                lead="Every gift funds real logistics: books, materials, and the practical work of moving a library to the readers who will use it. As true program costs are verified, you'll see them here — we won't make up what a dollar buys."
              />
            </div>
            <ul className="flex flex-wrap justify-center gap-5 list-none reveal-stagger">
              {donation.ways.map((way) => (
                <li
                  key={way.id}
                  className="card-classic h-auto w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
                >
                  <h3 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {way.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {way.description}
                  </p>
                  {typeof way.suggestedAmount === 'number' && (
                    <p className="mt-3 font-display text-xl font-semibold onum" style={{ color: 'var(--gold)' }}>
                      ${way.suggestedAmount.toLocaleString()}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* In-kind */}
        <section className="py-16" style={{ background: 'var(--bg-secondary)' }} aria-labelledby="inkind-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card-classic flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 reveal">
              <div>
                <h2 id="inkind-heading" className="font-display text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {donation.inKind.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {donation.inKind.description}
                </p>
              </div>
              <Link href={donation.inKind.cta.href} className="btn-secondary inline-flex items-center gap-2 shrink-0">
                <BookOpen aria-hidden="true" className="w-5 h-5" />
                {donation.inKind.cta.label}
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ + sponsors */}
        <section className="py-16" style={{ background: 'var(--bg-primary)' }} aria-labelledby="donate-faq">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <SectionHeading eyebrow="Good questions" title="Before you give" />
            </div>
            <FAQList items={donateFaqs} />

            <div className="rule my-12" />

            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              With thanks to{' '}
              {site.legal.sponsors.map((s, i) => (
                <span key={s.name}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="link-quiet underline">
                    {s.name}
                  </a>{' '}
                  ({s.role.toLowerCase()}){i < site.legal.sponsors.length - 1 ? ' and ' : ''}
                </span>
              ))}
              — the infrastructure that lets a student-run nonprofit operate responsibly.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
