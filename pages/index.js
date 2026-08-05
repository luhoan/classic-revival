import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { StatusBadge, SectionHeading, MetricStrip } from '../components/ui'
import { site } from '../lib/content/site'
import { campaigns } from '../lib/content/campaigns'
import { involvementPathways, forms } from '../lib/content/forms'
import { useReveal } from '../lib/useReveal'

/* Reasons young readers disengage — the access-and-exposure thesis. */
const missingPieces = [
  { title: 'Access', detail: 'The books simply aren’t on the shelves they can reach.' },
  { title: 'Exposure', detail: 'No one has put a compelling work in front of them at the right moment.' },
  { title: 'Guidance', detail: 'Nobody has said: start here, and here’s why.' },
  { title: 'Community', detail: 'There’s no one to read with — and starting alone is the hardest way to start.' },
  { title: 'Support', detail: 'When a book gets difficult, there’s no one to say that’s normal — keep going.' },
]

const misconceptions = [
  {
    myth: '“They’re only for experts.”',
    truth: 'These books were written for readers, not scholars — Sophocles played to a full city, not a seminar room. All you need is curiosity.',
  },
  {
    myth: '“They’re irrelevant now.”',
    truth: 'Justice, freedom, love, ambition, grief, what a good life costs — the settings age; the questions don’t.',
  },
  {
    myth: '“They’re too hard for young readers.”',
    truth: 'They can be hard. So is anything worth learning. With a good entry point and people to read alongside, difficulty becomes the interesting part.',
  },
  {
    myth: '“They belong to one tradition.”',
    truth: 'We use “classics” broadly: enduring literature and philosophy from many countries, languages, and centuries. A canon should be an invitation, not a gate.',
  },
]

const modelSteps = [
  { title: 'Books come in', detail: 'Donated by neighbors or funded by sponsors.' },
  { title: 'We sort and select', detail: 'Condition checked, editions chosen, collections curated for real readers.' },
  { title: 'They go where readers are', detail: 'Schools, libraries, reading clubs, and public spaces.' },
  { title: 'Context comes with them', detail: 'Guides, first meetings, discussion questions — community, not just objects.' },
  { title: 'They keep moving', detail: 'Read, returned, passed on. One book can reach many readers.' },
]

/* Real photographs for the two ACTIVE campaigns. The third campaign is
   planned — it gets a typographic panel, never a photo implying it exists. */
const campaignPhotos = {
  'school-books-and-reading-clubs': {
    src: '/photos/books-band.jpg',
    alt: 'Colorful covers of donated classic literature paperbacks filling a school library table',
  },
  'community-donation-boxes': {
    src: '/photos/box-square.jpg',
    alt: 'A Classic Revival book donation box — white with blue trim on a yellow post — in Atlanta',
    objectPosition: '50% 40%',
  },
}


/* Hero photograph: real books from a real school donation, framed like a
   plate in an old edition — double hairline rule and an italic caption. */
function HeroPlate() {
  return (
    <figure className="max-w-[17rem] lg:max-w-[26rem] mx-auto mt-10 lg:mt-0 w-full">
      <div className="relative p-3 border" style={{ borderColor: 'var(--border-color)' }}>
        <div className="relative aspect-[4/5] overflow-hidden border" style={{ borderColor: 'var(--border-color)' }}>
          <Image
            src="/photos/school-donation-books.jpg"
            alt="Classic literature and philosophy paperbacks — Sophocles, Cervantes, Woolf, Dostoevsky — arranged on a school library table"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 450px"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <figcaption className="caption-italic mt-3 text-center">
        Part of a collection placed with a partner school
      </figcaption>
    </figure>
  )
}

export default function Home() {
  useReveal()

  return (
    <>
      <Seo title={site.name} description={site.description} path="/" />
      <Navbar />

      <main id="main" className="pt-16">
        {/* ---- Hero ---- */}
        <section className="hero-bg border-b" style={{ borderColor: 'var(--border-color)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid lg:grid-cols-[7fr_5fr] gap-12 items-center">
            <div>
              <p className="eyebrow mb-5">A youth-led nonprofit initiative</p>
              <h1
                className="mb-6"
                style={{
                  maxWidth: '14ch',
                  fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
                  lineHeight: 1.06,
                  letterSpacing: '-0.015em',
                }}
              >
                Great books belong{' '}
                <span className="relative inline-block">
                  everywhere.
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 300 14"
                    preserveAspectRatio="none"
                    className="absolute left-0 -bottom-1.5 w-full h-[10px]"
                  >
                    <path
                      d="M4 10 C 60 3, 170 2, 296 8"
                      fill="none"
                      stroke="var(--gold)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.8"
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-[34rem] mb-9" style={{ color: 'var(--text-secondary)' }}>
                Classic Revival places classical literature and philosophy in schools, reading
                clubs, libraries, and public spaces — and helps new readers discover why these
                books still matter.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/our-work" className="btn-primary">
                  Explore Our Campaigns
                </Link>
                <Link href="/get-involved" className="btn-secondary">
                  Get Involved
                </Link>
              </div>
            </div>
            <HeroPlate />
          </div>
        </section>

        {/* ---- Impact stats: real numbers lead ---- */}
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <MetricStrip />
          </div>
        </section>

        {/* ---- Mission: the access-and-exposure thesis ---- */}
        <section className="py-20 md:py-24" style={{ background: 'var(--bg-secondary)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <SectionHeading
                numeral="01"
                eyebrow="Why we exist"
                title="What young readers are missing"
                lead="Young readers don’t need books watered down. What they’re missing is far more practical — and far more fixable."
              />
            </div>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10 reveal-stagger list-none">
              {missingPieces.map((piece, i) => (
                <li key={piece.title} className="border-t pt-5" style={{ borderColor: 'var(--border-color)' }}>
                  <span
                    aria-hidden="true"
                    className="font-display text-3xl font-semibold block mb-3"
                    style={{ color: 'var(--gold)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {piece.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {piece.detail}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-10 text-lg prose-measure reveal" style={{ color: 'var(--text-secondary)' }}>
              Our work supplies all five: thoughtfully selected books, welcoming entry points,
              helpful context, and people to read with.
            </p>
          </div>
        </section>

        {/* ---- Three campaigns ---- */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <SectionHeading
                numeral="02"
                eyebrow="Our work"
                title="Our three campaigns"
                lead="Each campaign moves books toward readers a different way. Together they form a loop: into schools, through communities, out into public life."
              />
            </div>
            <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
              {campaigns.map((campaign) => {
                const photo = campaignPhotos[campaign.slug]
                return (
                  <article key={campaign.slug} className="card-elevated overflow-hidden flex flex-col p-0">
                    {photo ? (
                      <div className="relative aspect-[3/2] overflow-hidden">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          style={{
                            objectFit: 'cover',
                            ...(photo.objectPosition ? { objectPosition: photo.objectPosition } : {}),
                          }}
                        />
                      </div>
                    ) : (
                      /* Planned campaign: the idea in words — no photo exists yet. */
                      <div
                        className="aspect-[3/2] flex flex-col items-center justify-center px-6 text-center"
                        style={{ background: 'var(--bg-tertiary)' }}
                      >
                        <p className="font-display italic text-xl" style={{ color: 'var(--text-primary)' }}>
                          {campaign.tagline}
                        </p>
                        <p className="caption-italic mt-3">The idea, in one line</p>
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-3">
                        <StatusBadge campaign={campaign} />
                      </div>
                      <h3 className="mb-2">{campaign.name}</h3>
                      <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--text-secondary)' }}>
                        {campaign.summary}
                      </p>
                      <Link
                        href={`/our-work/${campaign.slug}`}
                        className="annotation-underline self-start text-sm font-semibold"
                        style={{ color: 'var(--link-accent)' }}
                      >
                        Learn more →
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ---- Why classics and philosophy ---- */}
        <section className="py-20 md:py-24" style={{ background: 'var(--bg-secondary)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <SectionHeading
                numeral="03"
                eyebrow="Why these books"
                title="The books are old. The questions are not."
                lead="Classical literature and philosophy help people examine their assumptions, think independently, and confront questions of identity, justice, freedom, love, and the good life. But four stubborn myths keep them out of reach."
              />
            </div>
            <dl className="grid md:grid-cols-2 gap-5 reveal-stagger">
              {misconceptions.map((item) => (
                <div key={item.myth} className="card-classic">
                  <dt className="font-display text-lg font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                    {item.myth}
                  </dt>
                  <dd className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {item.truth}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 leading-relaxed prose-measure reveal" style={{ color: 'var(--text-secondary)' }}>
              These works don’t belong to elite schools, scholars, or people with specialized
              knowledge. Classic Revival exists so more people can feel that these books also
              belong to them.
            </p>
          </div>
        </section>

        {/* ---- How the model works ---- */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <SectionHeading numeral="04" eyebrow="The model" title="How a book finds its next reader" center />
            </div>
            <ol className="relative grid gap-8 md:grid-cols-5 reveal">
              <div
                aria-hidden="true"
                className="hidden md:block absolute top-5 left-[10%] right-[10%] h-px"
                style={{ background: 'var(--border-color)' }}
              />
              {modelSteps.map((step, i) => (
                <li key={step.title} className="relative text-center md:px-2">
                  <span
                    className="onum relative z-10 inline-flex items-center justify-center w-10 h-10 rounded-full font-display font-semibold mb-4"
                    style={{ background: 'transparent', border: '1px solid var(--gold)', color: 'var(--gold)' }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <h3
                    className="text-base mb-1.5 md:min-h-[3rem] md:flex md:items-start md:justify-center"
                    style={{ textWrap: 'balance' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {step.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---- Fleuron divider ---- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="fleuron" aria-hidden="true">
            <span>&#10086;</span>
          </div>
        </div>

        {/* ---- Honest progress: building next ---- */}
        <section className="pt-12 md:pt-14 pb-20 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <SectionHeading
                eyebrow="Honest progress"
                title="What we’re building next"
                lead="Classic Revival is young, and we’d rather show you the plan than dress up the record. Here’s what we’re working toward right now."
              />
            </div>
            <ul className="grid sm:grid-cols-2 gap-4 reveal">
              {site.buildingNext.map((item, i) => (
                <li key={i} className="flex gap-4 card-classic">
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-block w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: 'var(--gold)' }}
                  />
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---- Real, verified work: a donation box standing in Atlanta today ---- */}
        <section className="pb-20 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <figure className="reveal">
              <div className="relative aspect-[16/6] overflow-hidden border" style={{ borderColor: 'var(--border-color)' }}>
                <Image
                  src="/photos/donation-box-atlanta.jpg"
                  alt="A Classic Revival book donation box — white with blue trim on a yellow post — installed beside a sidewalk in Atlanta"
                  fill
                  sizes="(max-width: 1024px) 100vw, 1216px"
                  style={{ objectFit: 'cover', objectPosition: '50% 32%' }}
                />
              </div>
              <figcaption className="caption-italic mt-3">
                One of two Classic Revival donation boxes collecting books in Atlanta today
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ---- Participation pathways ---- */}
        <section className="py-20 md:py-24" style={{ background: 'var(--bg-secondary)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <SectionHeading
                eyebrow="Get involved"
                title="Find your way to help"
                lead="Every audience has a different first step. Pick yours."
              />
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal-stagger">
              {involvementPathways.map((pathway) => (
                <li key={pathway.formSlug}>
                  <Link
                    href={`/get-involved/${pathway.formSlug}`}
                    className="card-classic block h-full group"
                  >
                    <p className="font-display font-semibold mb-1.5 annotation-underline inline" style={{ color: 'var(--text-primary)' }}>
                      {pathway.audience}
                    </p>
                    <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
                      {pathway.detail}
                    </p>
                    <p className="text-sm mt-3 font-accent font-semibold" style={{ color: 'var(--link-accent)' }}>
                      {forms[pathway.formSlug].shortLabel} →
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---- Final CTA ---- */}
        <section className="py-24 md:py-32 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
            <h2 className="mb-6">
              A book doesn’t need to stay on one shelf.
            </h2>
            <p className="text-lg leading-relaxed mb-9" style={{ color: 'var(--text-secondary)' }}>
              Help place it where a new reader can find it — a school, a club, a corner of
              public life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-involved" className="btn-primary">
                Get Involved
              </Link>
              <Link href="/donate" className="btn-secondary">
                Donate
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
