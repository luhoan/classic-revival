import Link from 'next/link'
import { site } from '../lib/content/site'
import { campaigns } from '../lib/content/campaigns'
import { involvementPathways, forms } from '../lib/content/forms'

const exploreLinks = [
  { label: 'Library', href: '/library' },
  { label: 'Resources', href: '/resources' },
  { label: 'Photos', href: '/photos' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Donate', href: '/donate' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-secondary)' }}>
      <div className="rule-double" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Mission */}
          <div className="lg:pr-6">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <img src="/logo.png" alt="" className="h-8 w-auto" />
              <span className="font-display text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                Classic Revival
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              A youth-led initiative placing classic literature and philosophy in schools, reading clubs,
              libraries, and public spaces — and helping new readers discover why these books still matter.
            </p>
            <a
              href={`mailto:${site.contact.email}`}
              className="link-quiet text-sm block"
            >
              {site.contact.email}
            </a>
            {site.contact.phone && (
              <a href={`tel:${site.contact.phone.tel}`} className="link-quiet text-sm block mt-2 onum">
                {site.contact.phone.display}
              </a>
            )}
          </div>

          {/* Our Work */}
          <nav aria-label="Our work">
            <h2 className="font-display text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Our Work
            </h2>
            <ul className="space-y-2.5">
              <li>
                <Link href="/our-work" className="link-quiet text-sm">Campaign overview</Link>
              </li>
              {campaigns.map((c) => (
                <li key={c.slug}>
                  <Link href={`/our-work/${c.slug}`} className="link-quiet text-sm">
                    {c.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Get Involved */}
          <nav aria-label="Get involved">
            <h2 className="font-display text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Get Involved
            </h2>
            <ul className="space-y-2.5">
              <li>
                <Link href="/essay-competition" className="link-quiet text-sm">
                  Essay competition
                </Link>
              </li>
              {involvementPathways.map((p) => (
                <li key={p.formSlug}>
                  <Link href={`/get-involved/${p.formSlug}`} className="link-quiet text-sm">
                    {forms[p.formSlug].shortLabel[0].toUpperCase() + forms[p.formSlug].shortLabel.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Explore + social */}
          <nav aria-label="Explore">
            <h2 className="font-display text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Explore
            </h2>
            <ul className="space-y-2.5 mb-6">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-quiet text-sm">{l.label}</Link>
                </li>
              ))}
            </ul>
            <a
              href={site.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet text-sm"
            >
              Instagram · {site.social.instagram.handle}
            </a>
            {site.social.linkedin && (
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet text-sm block mt-2"
              >
                LinkedIn
              </a>
            )}
          </nav>
        </div>

        <hr className="rule my-10" />

        <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          <p>{site.legal.statusLine} {site.legal.taxLine}</p>
          <div className="space-y-3">
            <p>
              Some Classic Revival initiatives described on this site are still in their earliest
              stages. Campaign pages state clearly what has and has not launched.
            </p>
            <p>Privacy policy and accessibility statement coming soon.</p>
          </div>
        </div>

        <div
          className="flex flex-wrap justify-between gap-3 items-baseline border-t pt-5 mt-6"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <p className="text-xs onum" style={{ color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} Classic Revival. Built by the Classic Revival team.
          </p>
          <p className="caption-italic !text-[0.85rem]">Set in Fraunces &amp; Inter</p>
        </div>
      </div>
    </footer>
  )
}
