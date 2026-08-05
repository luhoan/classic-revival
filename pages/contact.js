import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { PageHero, SectionHeading } from '../components/ui'
import SiteForm from '../components/SiteForm'
import { site } from '../lib/content/site'
import { forms } from '../lib/content/forms'
import { Mail, Phone, Instagram } from 'lucide-react'
import { useReveal } from '../lib/useReveal'

export default function Contact() {
  useReveal()
  return (
    <>
      <Seo
        title="Contact"
        description="Questions, ideas, book donations, school recommendations, press — reach the Classic Revival team by email, Instagram, or the form here."
        path="/contact"
      />
      <Navbar />
      <main id="main" className="pt-16">
        <PageHero
          eyebrow="Contact"
          title="Talk to us"
          lead="Questions, ideas, books, schools, locations, press — we want to hear all of it."
        />

        <section className="py-16" style={{ background: 'var(--bg-primary)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start">
              <div className="lg:sticky lg:top-24">
                <div className="card-elevated card-classic reveal">
                  <p className="eyebrow mb-4">The direct route</p>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="inline-flex items-start gap-3 font-display text-base md:text-lg font-semibold annotation-underline no-underline [overflow-wrap:anywhere]"
                    style={{ color: 'var(--link-accent)' }}
                  >
                    <Mail aria-hidden="true" className="w-5 h-5 shrink-0 mt-1" />
                    {site.contact.email}
                  </a>
                  {site.contact.phone && (
                    <p className="mt-4">
                      <a
                        href={`tel:${site.contact.phone.tel}`}
                        className="inline-flex items-center gap-3 font-display text-lg font-semibold annotation-underline no-underline"
                        style={{ color: 'var(--link-accent)' }}
                      >
                        <Phone aria-hidden="true" className="w-5 h-5 shrink-0" />
                        {site.contact.phone.display}
                      </a>
                    </p>
                  )}
                  {site.social.instagram && (
                    <p className="mt-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      We’re also on Instagram:{' '}
                      <a
                        href={site.social.instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-quiet underline inline-flex items-center gap-1"
                      >
                        <Instagram aria-hidden="true" className="w-4 h-4" />
                        {site.social.instagram.handle}
                      </a>
                    </p>
                  )}
                  <hr className="rule my-5" />
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Classic Revival is volunteer-run by students, so a reply can take a few days — but
                    every message is read.
                  </p>
                </div>
              </div>

              <div>
                <div className="reveal">
                  <SectionHeading title="Or write to us here" />
                </div>
                <SiteForm schema={forms.interest} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
