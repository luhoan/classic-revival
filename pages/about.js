import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { PageHero, SectionHeading, StatusBadge } from '../components/ui'
import { site } from '../lib/content/site'
import { campaigns } from '../lib/content/campaigns'
import { team, founderStory } from '../lib/content/team'
import { useReveal } from '../lib/useReveal'
import { Mail } from 'lucide-react'

function initials(name) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function TeamCard({ member }) {
  return (
    <li className="card-classic flex flex-col gap-4">
      <div className="flex items-center gap-4">
        {member.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.photo}
            alt={member.name}
            className="w-20 h-20 rounded-full object-cover shrink-0"
          />
        ) : (
          <span
            aria-hidden="true"
            className="w-20 h-20 rounded-full flex items-center justify-center font-display text-xl font-semibold shrink-0"
            style={{ background: 'var(--bg-tertiary)', color: 'var(--burgundy)', border: '1px solid var(--border-color)' }}
          >
            {initials(member.name)}
          </span>
        )}
        <div>
          <h3 className="font-display text-xl font-semibold leading-tight" style={{ color: 'var(--text-primary)' }}>
            {member.name}
          </h3>
          <p className="eyebrow mt-1 !text-[0.7rem]">{member.role}</p>
        </div>
      </div>
      {member.bio && (
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {member.bio}
        </p>
      )}
      {member.email && (
        <a
          href={`mailto:${member.email}`}
          className="inline-flex items-center gap-1.5 text-sm link-quiet mt-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          <Mail aria-hidden="true" className="w-4 h-4" />
          {member.email}
        </a>
      )}
    </li>
  )
}

export default function About() {
  useReveal()
  const founder = team.find((member) => /founder/i.test(member.role))

  return (
    <>
      <Seo
        title="About"
        description="Classic Revival is a youth-led nonprofit initiative placing classical literature and philosophy in schools, reading clubs, libraries, and public spaces. Here's where it came from and where it's going."
        path="/about"
      />
      <Navbar />
      <main id="main" className="pt-16">
        <PageHero
          eyebrow="About Classic Revival"
          title="A youth-led effort to put great books back in circulation"
          lead="Classic Revival started with one student's late discovery that the old books were written for him too. It exists so that discovery stops depending on luck — on the school you attend, the library you grew up near, or the shelf you happened to pass."
        />

        {/* Team */}
        <section className="py-16" style={{ background: 'var(--bg-secondary)' }} aria-labelledby="team-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <SectionHeading
                eyebrow="The people"
                title="Meet the founders"
                lead="Classic Revival is founded and run by students. More faces will appear here as the team grows."
              />
            </div>
            <figure className="reveal mb-12 mx-auto w-full max-w-2xl">
              <div className="relative p-3 border" style={{ borderColor: 'var(--border-color)' }}>
                <div
                  className="relative overflow-hidden border"
                  style={{
                    borderColor: 'var(--border-color)',
                    background:
                      'radial-gradient(120% 90% at 50% 12%, var(--bg-secondary) 0%, var(--bg-tertiary) 58%, #DCD2BA 100%)',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/photos/founders-group.png"
                    alt="Raphael Pagani, Levi Segal, and Hershey Woolfson seated side by side, each holding a book from an early Classic Revival collection"
                    className="block w-full h-auto pt-6"
                    style={{
                      WebkitMaskImage:
                        'linear-gradient(180deg, black 88%, transparent 100%)',
                      maskImage:
                        'linear-gradient(180deg, black 88%, transparent 100%)',
                    }}
                  />
                </div>
              </div>
              <figcaption className="caption-italic mt-3 text-center">
                The founders — Raphael Pagani, Levi Segal, and Hershey Woolfson (left to right)
              </figcaption>
            </figure>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 list-none items-stretch reveal-stagger">
              {team.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </ul>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16" style={{ background: 'var(--bg-primary)' }} aria-labelledby="mission-vision">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="mission-vision" className="sr-only">Mission and vision</h2>
            <div className="grid md:grid-cols-2 gap-6 reveal-stagger">
              <div className="card-elevated card-classic">
                <p className="eyebrow mb-3">Mission</p>
                <p className="font-display text-xl md:text-2xl leading-snug" style={{ color: 'var(--text-primary)' }}>
                  Place meaningful literature and philosophy within reach of more readers — and build
                  the structures that help them actually engage with it.
                </p>
              </div>
              <div className="card-elevated card-classic">
                <p className="eyebrow mb-3">Vision</p>
                <p className="font-display text-xl md:text-2xl leading-snug" style={{ color: 'var(--text-primary)' }}>
                  Communities where important books circulate freely, young people discuss serious
                  ideas confidently, and access to intellectual life is not decided by income or
                  institution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-16" style={{ background: 'var(--bg-secondary)' }} aria-labelledby="philosophy">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <SectionHeading
                eyebrow="What we believe"
                title="The problem is access and invitation, not ability"
              />
            </div>
            <div className="space-y-5 leading-relaxed prose-measure" style={{ color: 'var(--text-secondary)' }}>
              <p>
                Young people are not disengaged from great books because they lack intelligence or
                curiosity. They are disengaged because the books aren’t within reach, because no one
                offered a compelling place to start, and because reading alone — especially reading
                something hard alone — is a fragile way to begin.
              </p>
              <p>
                So everything Classic Revival does pairs the book with a way in: thoughtfully chosen
                editions, honest guidance about where to begin, context that respects the reader, and
                people to read with. We don’t water the books down; we make the
                real thing approachable.
              </p>
              <p>
                And when we say “classics,” we mean it broadly: enduring literature and philosophy
                from many countries, languages, and traditions. A canon should be an invitation, not
                a gate — these books belong to whoever picks them up next.
              </p>
            </div>
          </div>
        </section>

        {/* Founder story */}
        <section className="py-16" style={{ background: 'var(--bg-primary)' }} aria-labelledby="founder-story">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <SectionHeading eyebrow="How it started" title={founderStory.heading} />
            </div>
            <div className="space-y-5 leading-relaxed prose-measure" style={{ color: 'var(--text-secondary)' }}>
              {founderStory.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {founder && (
              <p className="caption-italic mt-6" style={{ color: 'var(--gold)' }}>
                — {founder.name}, {founder.role}
              </p>
            )}
          </div>
        </section>

        {/* Where we are — honesty block */}
        <section className="py-16" style={{ background: 'var(--bg-secondary)' }} aria-labelledby="where-we-are">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <SectionHeading
                eyebrow="Current stage"
                title="Where we are today"
                lead="Classic Revival is a young organization, and this website is deliberate about the difference between what we're doing and what we're planning."
              />
            </div>

            <ul className="space-y-3 mb-10 list-none">
              {campaigns.map((c) => (
                <li
                  key={c.slug}
                  className="card-classic flex flex-wrap items-center justify-between gap-3"
                >
                  <Link href={`/our-work/${c.slug}`} className="font-semibold link-quiet" style={{ color: 'var(--text-primary)' }}>
                    {c.name}
                  </Link>
                  <StatusBadge campaign={c} />
                </li>
              ))}
            </ul>

            <figure className="reveal mb-10">
              <div className="relative p-3 border" style={{ borderColor: 'var(--border-color)' }}>
                <div className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: 'var(--border-color)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/photos/mailbox-first-books.jpg"
                    alt="Donated paperbacks and hardcovers laid out on a wooden floor — the first books given through Classic Revival's book donation boxes"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: '50% 45%' }}
                  />
                </div>
              </div>
              <figcaption className="caption-italic mt-3 text-center">
                The first books donated to our public book exchanges, now at a public library
              </figcaption>
            </figure>

            <figure className="reveal mb-10">
              <div className="relative p-3 border" style={{ borderColor: 'var(--border-color)' }}>
                <div className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: 'var(--border-color)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/photos/sandy-springs-library-books.jpg"
                    alt="Donated paperbacks and hardcovers spread across a table at the Sandy Springs Library used bookstore"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: '50% 60%' }}
                  />
                </div>
              </div>
              <figcaption className="caption-italic mt-3 text-center">
                Books collected through our donation boxes, donated to the Sandy Springs Library
              </figcaption>
            </figure>

            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              What we’re building next
            </h3>
            <ul className="space-y-2 mb-10 pl-5 list-disc" style={{ color: 'var(--text-secondary)' }}>
              {site.buildingNext.map((item, i) => (
                <li key={i} className="leading-relaxed">{item}</li>
              ))}
            </ul>

            <div className="form-notice">
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                A commitment: this site will never report numbers we can’t verify or describe planned
                programs as if they had already launched. When you see an impact figure here, it
                happened.
              </p>
            </div>

            <p className="text-sm mt-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {site.legal.statusLine}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
