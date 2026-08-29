import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import SiteForm from '../components/SiteForm'
import { PageHero, SectionHeading } from '../components/ui'
import { forms, essayQuestions } from '../lib/content/forms'
import { site } from '../lib/content/site'
import { Check, PenLine, FileText, Send } from 'lucide-react'
import { useReveal } from '../lib/useReveal'

const requirements = [
  '200–350 words, written in English.',
  'Directly responds to one of the five questions.',
  'References at least one classical literary work as the primary basis for the argument.',
  'Presents an original argument, rather than simply summarizing the literary work.',
  'Literary quotations may be used where appropriate and should be properly attributed.',
  'Additional literary, historical, philosophical, or contemporary sources are welcome.',
  'Has a clear introduction, argument, supporting analysis, and conclusion.',
  'AI-generated essays must not be submitted as the participant’s own work.',
]

const docContents = [
  'Full name',
  'School / organization (if applicable)',
  'Grade / age',
  'Email address',
  'Question number & essay question chosen',
  'Essay title',
  'The essay itself',
]

const steps = [
  {
    icon: PenLine,
    title: 'Choose a question',
    detail: 'Pick one of the five questions below — whichever one you actually have something to say about.',
  },
  {
    icon: FileText,
    title: 'Write the essay',
    detail: 'Make an argument of your own in 200–350 words, grounded in at least one classical literary work.',
  },
  {
    icon: Send,
    title: 'Submit a Google Doc',
    detail: 'Put your details and essay in a Google Doc, set it to “Anyone with the link can view,” and send us the link.',
  },
]

export default function EssayCompetition() {
  useReveal()
  const form = forms['essay-competition']

  return (
    <>
      <Seo
        title="Essay Competition"
        description="Choose one of five questions, take a classical literary work seriously, and make an argument of your own in 200–350 words. The best essays win prize money and free books. Sign up for the Classic Revival essay competition."
        path="/essay-competition"
      />
      <Navbar />
      <main id="main" className="pt-16" style={{ background: 'var(--bg-primary)' }}>
        <PageHero
          eyebrow="Get Involved"
          title="The Essay Competition"
          lead="Choose one of five questions, take a classical literary work seriously, and make an argument of your own — in 200–350 words. The best essays win prize money and free books."
        >
          <a href="#sign-up" className="btn-primary">Sign up</a>
          <a href="#questions" className="btn-secondary">Read the five questions</a>
        </PageHero>

        {/* How it works */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading numeral="01" eyebrow="How it works" title="Three steps, one essay" />
            <ol className="grid md:grid-cols-3 gap-5 list-none reveal-stagger">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <li key={step.title} className="card-classic">
                    <span
                      className="w-10 h-10 rounded-[2px] flex items-center justify-center mb-4"
                      style={{ background: 'rgba(74, 108, 148, 0.12)', color: 'var(--burgundy)' }}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <p className="font-display text-lg font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                      <span aria-hidden="true" className="onum mr-2" style={{ color: 'var(--gold)' }}>{i + 1}</span>
                      {step.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {step.detail}
                    </p>
                  </li>
                )
              })}
            </ol>
          </div>
        </section>

        {/* The five questions */}
        <section id="questions" className="py-16" style={{ background: 'var(--bg-secondary)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              numeral="02"
              eyebrow="The questions"
              title="Choose one of five"
              lead="Answer exactly one. Use at least one classical literary work as the primary basis for your argument — other works, historical context, philosophy, and contemporary examples are welcome where relevant."
            />
            <ol className="space-y-5 list-none reveal-stagger">
              {essayQuestions.map((q) => (
                <li key={q.number} className="card-classic">
                  <div className="flex gap-4 md:gap-6">
                    <span
                      aria-hidden="true"
                      className="font-display onum text-3xl font-semibold shrink-0 leading-none mt-1"
                      style={{ color: 'var(--gold)' }}
                    >
                      {q.number}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                        {q.title}
                      </h3>
                      <p className="text-sm md:text-base leading-relaxed prose-measure" style={{ color: 'var(--text-secondary)' }}>
                        {q.prompt}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Requirements + what to submit */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading numeral="03" eyebrow="The fine print" title="Requirements and what to submit" />
            <div className="grid md:grid-cols-2 gap-5 items-start">
              <div className="card-classic reveal">
                <p className="eyebrow mb-4">Essay requirements</p>
                <ul className="space-y-3 list-none">
                  {requirements.map((r) => (
                    <li key={r} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      <Check aria-hidden="true" className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--success)' }} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-classic reveal">
                <p className="eyebrow mb-4">Your Google Doc should contain</p>
                <ol className="space-y-3 list-none">
                  {docContents.map((item, i) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      <span aria-hidden="true" className="font-display onum font-semibold" style={{ color: 'var(--gold)' }}>
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
                <div className="rule my-5" />
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Set the doc’s sharing to <strong style={{ color: 'var(--text-primary)' }}>“Anyone with the link can view”</strong>{' '}
                  so we can read it, then paste the link into the sign-up form below — or email it to{' '}
                  <a href={`mailto:${site.contact.email}`} className="link-quiet underline">{site.contact.email}</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sign-up form */}
        <section id="sign-up" className="py-16" style={{ background: 'var(--bg-secondary)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              numeral="04"
              eyebrow="Sign up"
              title="Enter the competition"
              lead={form.intro}
            />
            <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-start">
              <div className="max-w-2xl card-elevated p-6 md:p-8">
                <SiteForm schema={form} />
              </div>
              <aside aria-label="About the competition" className="lg:sticky lg:top-24 space-y-6">
                <div className="card-classic reveal">
                  <p className="eyebrow mb-4">Good to know</p>
                  <ul className="space-y-3 text-sm leading-relaxed list-none" style={{ color: 'var(--text-secondary)' }}>
                    <li>
                      <strong style={{ color: 'var(--text-primary)' }}>The prizes:</strong> the best essays win
                      prize money and free books.
                    </li>
                    <li>You can sign up before your essay is written — send the Google Doc link whenever it’s ready.</li>
                    <li>Not sure which question yet? Pick “Not sure yet” and change your mind later; only the essay you submit counts.</li>
                    <li>
                      Need a classical work to start from? Browse the{' '}
                      <Link href="/library" className="link-quiet underline">free digital library</Link>{' '}
                      or our <Link href="/resources" className="link-quiet underline">reading resources</Link>.
                    </li>
                  </ul>
                </div>
                <div className="card-classic text-sm leading-relaxed reveal" style={{ color: 'var(--text-secondary)' }}>
                  <p>
                    Questions about the competition? Write to{' '}
                    <a href={`mailto:${site.contact.email}`} className="link-quiet underline">{site.contact.email}</a>{' '}
                    and a member of the student team will get back to you.
                  </p>
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
