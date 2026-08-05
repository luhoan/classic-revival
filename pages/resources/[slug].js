import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Seo from '../../components/Seo'
import { PageHero } from '../../components/ui'
import { resources, getResource } from '../../lib/content/resources'
import { site } from '../../lib/content/site'
import { ArrowLeft } from 'lucide-react'
import { useReveal } from '../../lib/useReveal'

export default function ResourceGuide({ slug }) {
  useReveal()
  const guide = getResource(slug)

  const meta = [
    guide.author,
    guide.readingTime,
    guide.difficulty,
    guide.ageRange && `ages ${guide.ageRange}`,
    guide.tradition,
  ].filter(Boolean)

  return (
    <>
      <Seo
        title={guide.title}
        description={guide.summary}
        path={`/resources/${guide.slug}`}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: guide.title,
          description: guide.summary,
          author: { '@type': 'Organization', name: 'Classic Revival' },
          about: guide.topic,
        }}
      />
      <Navbar />
      <main id="main" className="pt-16">
        <PageHero eyebrow={guide.category} title={guide.title} lead={guide.summary}>
          <p className="text-sm w-full" style={{ color: 'var(--text-secondary)' }}>
            {meta.join(' · ')}
          </p>
        </PageHero>

        <article className="py-16" style={{ background: 'var(--bg-primary)' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {guide.context.length > 0 && (
              <div className="space-y-5 leading-relaxed prose-measure mb-12" style={{ color: 'var(--text-secondary)' }}>
                {guide.context.map((p, i) => (
                  <p key={i} className={i === 0 ? 'drop-cap' : undefined}>{p}</p>
                ))}
              </div>
            )}

            <div className="space-y-10 mb-12">
              {guide.sections.map((s, i) => (
                <section key={i} className="border-t pt-8 reveal" style={{ borderColor: 'var(--border-color)' }}>
                  <h2 className="font-display text-2xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {s.heading}
                  </h2>
                  <p className="leading-relaxed prose-measure" style={{ color: 'var(--text-secondary)' }}>
                    {s.body}
                  </p>
                </section>
              ))}
            </div>

            {guide.questionsToConsider.length > 0 && (
              <section className="mb-12 reveal">
                <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Questions to consider
                </h2>
                <ul className="space-y-3 list-none">
                  {guide.questionsToConsider.map((q, i) => (
                    <li
                      key={i}
                      className="pl-4 leading-relaxed font-display text-lg"
                      style={{ borderLeft: '2px solid var(--gold)', color: 'var(--text-secondary)', hangingPunctuation: 'first' }}
                    >
                      {q}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {guide.discussionQuestions.length > 0 && (
              <section className="mb-12 reveal">
                <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Discussion questions
                </h2>
                <ol className="space-y-3 pl-5 list-decimal" style={{ color: 'var(--text-secondary)' }}>
                  {guide.discussionQuestions.map((q, i) => (
                    <li key={i} className="leading-relaxed">{q}</li>
                  ))}
                </ol>
              </section>
            )}

            {guide.relatedBooks.length > 0 && (
              <section className="mb-12 reveal">
                <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Related books
                </h2>
                <ul className="flex flex-wrap gap-2 list-none">
                  {guide.relatedBooks.map((b) => (
                    <li
                      key={b}
                      className="px-3 py-1.5 rounded-[2px] text-sm"
                      style={{ background: 'var(--bg-tertiary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {guide.furtherReading.length > 0 && (
              <section className="mb-12 reveal">
                <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Further reading
                </h2>
                <ul className="space-y-2 pl-5 list-disc" style={{ color: 'var(--text-secondary)' }}>
                  {guide.furtherReading.map((f, i) => (
                    <li key={i} className="leading-relaxed">
                      {f.url ? (
                        <a href={f.url} target="_blank" rel="noopener noreferrer" className="link-quiet underline">
                          {f.label}
                        </a>
                      ) : (
                        f.label
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {guide.reviewed === false && (
              <aside className="form-notice mb-12" aria-label="Editorial note">
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Editorial note:</strong> this guide
                  is an editorial draft. Spotted an error, or have a better reading?{' '}
                  <a href={`mailto:${site.contact.email}`} className="underline">
                    Tell us — we revise.
                  </a>
                </p>
              </aside>
            )}

            <Link
              href="/resources"
              className="inline-flex items-center gap-2 font-semibold annotation-underline no-underline"
              style={{ color: 'var(--link-accent)' }}
            >
              <ArrowLeft aria-hidden="true" className="w-4 h-4" />
              All resources
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

export function getStaticPaths() {
  return {
    paths: resources.map((r) => ({ params: { slug: r.slug } })),
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug } }
}
