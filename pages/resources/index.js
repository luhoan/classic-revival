import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Seo from '../../components/Seo'
import { PageHero } from '../../components/ui'
import { resources, resourceCategories } from '../../lib/content/resources'
import { ArrowRight, BookOpen } from 'lucide-react'
import { useReveal } from '../../lib/useReveal'

export default function ResourcesIndex() {
  useReveal()
  const [category, setCategory] = useState('All')
  const visible = category === 'All' ? resources : resources.filter((r) => r.category === category)
  // Only offer filters that would show something.
  const usedCategories = resourceCategories.filter((c) => resources.some((r) => r.category === c))

  return (
    <>
      <Seo
        title="Resources"
        description="Reading guides, starting points, and club materials for classical literature and philosophy — written for new readers, not specialists."
        path="/resources"
      />
      <Navbar />
      <main id="main" className="pt-16">
        <PageHero
          eyebrow="Resources"
          title="No prior expertise required. Curiosity is enough."
          lead="Guides for choosing a first classic, getting through a hard book, and reading with other people. This library is young and grows over time."
        />

        <section className="py-16" style={{ background: 'var(--bg-primary)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter guides by category">
              {['All', ...usedCategories].map((c) => {
                const active = category === c
                return (
                  <button
                    key={c}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setCategory(c)}
                    className="px-3.5 py-1.5 rounded-[2px] text-xs font-semibold uppercase tracking-[0.08em] transition-colors"
                    style={{
                      background: active ? 'var(--burgundy)' : 'var(--bg-tertiary)',
                      color: active ? '#fff' : 'var(--text-secondary)',
                      border: `1px solid ${active ? 'var(--burgundy)' : 'var(--border-color)'}`,
                    }}
                  >
                    {c}
                  </button>
                )
              })}
            </div>

            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none reveal-stagger">
              {visible.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/resources/${r.slug}`}
                    className="card-classic card-elevated group flex h-full flex-col gap-3 no-underline"
                  >
                    <p className="eyebrow">{r.category}</p>
                    <h2 className="font-display text-xl font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
                      {r.title}
                    </h2>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                      {r.summary}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {[r.readingTime, r.difficulty, r.ageRange && `ages ${r.ageRange}`]
                        .filter(Boolean)
                        .join(' · ')}
                    </p>
                    <span
                      className="inline-flex items-center gap-2 text-sm font-semibold annotation-underline self-start"
                      style={{ color: 'var(--link-accent)' }}
                    >
                      Read the guide
                      <ArrowRight aria-hidden="true" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Library cross-link */}
            <div className="mt-12 card-elevated card-classic flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 reveal">
              <div>
                <h2 className="font-display text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Browse the collection itself
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  The Classic Revival library shelves the works these guides point to — and every
                  book’s page links to study resources for that title.
                </p>
              </div>
              <Link href="/library" className="btn-primary inline-flex items-center gap-2 shrink-0">
                <BookOpen aria-hidden="true" className="w-5 h-5" />
                Open the Library
              </Link>
            </div>

            <p className="mt-10 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              This resource hub is deliberately small and growing — new guides are added as they’re
              written and reviewed, not before.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
