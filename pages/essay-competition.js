import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import SiteForm from '../components/SiteForm'
import { PageHero, SectionHeading } from '../components/ui'
import { forms } from '../lib/content/forms'
import { competition } from '../lib/content/competition'
import { site } from '../lib/content/site'
import { Check, CalendarDays, Globe2, Ticket } from 'lucide-react'
import { useReveal } from '../lib/useReveal'

const steps = [
  {
    title: 'Write the essay',
    detail: `Respond to the prompt in 600–1,000 words and give your essay a title.`,
  },
  {
    title: 'Put it in a Google Doc',
    detail: 'Set the doc’s sharing to “Anyone with the link can view” so the judges can read it.',
  },
  {
    title: 'Submit the entry form',
    detail: 'Fill out the form below with your details and the link to your essay.',
  },
]

export default function EssayCompetition() {
  useReveal()
  const form = forms['essay-competition']

  const keyFacts = [
    { icon: CalendarDays, label: 'Deadline', value: competition.deadline.display },
    { icon: Globe2, label: 'Who may enter', value: 'Students in grades 6–12, worldwide' },
    { icon: Ticket, label: 'Entry fee', value: 'None' },
  ]

  return (
    <>
      <Seo
        title="2026 Essay Competition"
        description="Old books. Living questions. Your voice. Answer one prompt about a work of classic literature or philosophy in 600–1,000 words. First place wins $50 and 5 books. Open to students in grades 6–12 worldwide. Deadline October 15, 2026."
        path="/essay-competition"
      />
      <Navbar />
      <main id="main" className="pt-16" style={{ background: 'var(--bg-primary)' }}>
        <PageHero
          eyebrow="Classic Revival presents"
          title={competition.name}
          lead={`${competition.tagline} Answer one prompt about a work of classic literature or philosophy in 600–1,000 words. First place wins $50 and 5 books.`}
        >
          <a href="#enter" className="btn-primary">Enter the competition</a>
          <a href="#prompt" className="btn-secondary">Read the prompt</a>
        </PageHero>

        {/* Key facts strip */}
        <section className="border-b" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-secondary)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid sm:grid-cols-3 gap-6">
            {keyFacts.map((fact) => {
              const Icon = fact.icon
              return (
                <div key={fact.label} className="flex items-start gap-3">
                  <Icon aria-hidden="true" className="w-5 h-5 mt-0.5 shrink-0" style={{ color: 'var(--gold)' }} />
                  <div>
                    <p className="eyebrow mb-1">{fact.label}</p>
                    <p className="text-sm font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
                      {fact.value}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* The prompt */}
        <section id="prompt" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading numeral="01" eyebrow="The prompt" title="What question still matters?" />
            <div className="card-elevated p-8 md:p-10 mb-8 reveal" style={{ borderColor: 'var(--gold)' }}>
              <p className="font-display text-xl md:text-2xl leading-relaxed prose-measure" style={{ color: 'var(--text-primary)' }}>
                {competition.prompt}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5 reveal-stagger">
              <div className="card-classic">
                <p className="eyebrow mb-3">Your task</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {competition.task}
                </p>
              </div>
              <div className="card-classic">
                <p className="eyebrow mb-3">Length</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {competition.length}
                </p>
              </div>
              <div className="card-classic">
                <p className="eyebrow mb-3">Examples</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {competition.examples}
                </p>
              </div>
            </div>
            <p className="mt-8 text-sm leading-relaxed reveal" style={{ color: 'var(--text-secondary)' }}>
              Looking for a work to write about? Browse the{' '}
              <Link href="/library" className="link-quiet underline">free digital library</Link>{' '}
              or our <Link href="/resources" className="link-quiet underline">reading resources</Link>.
            </p>
          </div>
        </section>

        {/* The prizes */}
        <section className="py-16" style={{ background: 'var(--bg-secondary)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading numeral="02" eyebrow="The prizes" title="Three winners. More recognition." />
            <ol className="grid sm:grid-cols-3 gap-5 list-none reveal-stagger">
              {competition.prizes.map((prize) => (
                <li key={prize.place} className="card-classic text-center py-8">
                  <p
                    aria-hidden="true"
                    className="font-display onum text-4xl font-semibold mb-3"
                    style={{ color: 'var(--gold)' }}
                  >
                    {prize.place}
                  </p>
                  <p className="font-display text-2xl font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                    {prize.cash}
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-[0.08em]" style={{ color: 'var(--text-secondary)' }}>
                    + {prize.books}
                  </p>
                </li>
              ))}
            </ol>
            <div className="grid md:grid-cols-2 gap-5 mt-5 reveal">
              <div className="card-classic">
                <p className="eyebrow mb-3">Honorable mentions</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {competition.honorableMentions}
                </p>
              </div>
              <div className="card-classic">
                <p className="eyebrow mb-3">Featured essays</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {competition.featuredNote}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility and rules */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading numeral="03" eyebrow="Eligibility and rules" title="Before you submit" />
            <ul className="card-classic space-y-3.5 list-none max-w-3xl reveal">
              {competition.rules.map((rule) => (
                <li key={rule} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <Check aria-hidden="true" className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--success)' }} />
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Judging */}
        <section className="py-16" style={{ background: 'var(--bg-secondary)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              numeral="04"
              eyebrow="How essays are judged"
              title="Ideas come first"
              lead={competition.judgingNote}
            />
            <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal-stagger">
              {competition.judging.map((criterion) => (
                <div key={criterion.label} className="card-classic">
                  <dt className="font-display onum text-3xl font-semibold mb-2" style={{ color: 'var(--gold)' }}>
                    {criterion.weight}
                  </dt>
                  <dd className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {criterion.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* How to enter + entry form */}
        <section id="enter" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              numeral="05"
              eyebrow="How to enter"
              title={`Submit by ${competition.deadline.short}`}
              lead={form.intro}
            />
            <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-start">
              <div className="max-w-2xl card-elevated p-6 md:p-8">
                <SiteForm schema={form} />
              </div>
              <aside aria-label="Entry details" className="lg:sticky lg:top-24 space-y-6">
                <div className="card-classic reveal">
                  <p className="eyebrow mb-4">Three steps</p>
                  <ol className="space-y-3 text-sm leading-relaxed list-none" style={{ color: 'var(--text-secondary)' }}>
                    {steps.map((step, i) => (
                      <li key={step.title} className="flex gap-3">
                        <span aria-hidden="true" className="font-display onum font-semibold" style={{ color: 'var(--gold)' }}>
                          {i + 1}
                        </span>
                        <span>
                          <strong style={{ color: 'var(--text-primary)' }}>{step.title}.</strong>{' '}
                          {step.detail}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="card-classic reveal">
                  <p className="eyebrow mb-4">Dates</p>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Final deadline:</strong>{' '}
                    {competition.deadline.display}.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {competition.resultsBy}
                  </p>
                </div>
                <div className="card-classic text-sm leading-relaxed reveal" style={{ color: 'var(--text-secondary)' }}>
                  <p>
                    Questions? Write to{' '}
                    <a href={`mailto:${site.contact.email}`} className="link-quiet underline">{site.contact.email}</a>{' '}
                    and a member of the student team will get back to you.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Closing line */}
        <section className="pb-20 md:pb-24 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
            <div className="fleuron mb-8" aria-hidden="true">
              <span>&#10086;</span>
            </div>
            <p className="font-display text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              {competition.closingLine}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
