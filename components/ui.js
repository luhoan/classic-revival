import { campaignStatus } from '../lib/content/campaigns'
import { verifiedMetrics } from '../lib/content/site'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

const TONE_CLASS = {
  green: 'badge-green',
  gold: 'badge-gold',
  navy: 'badge-navy',
  neutral: 'badge-neutral',
}

/** Campaign status pill. Pass the whole campaign object. */
export function StatusBadge({ campaign }) {
  const status = campaignStatus(campaign)
  return <span className={`badge ${TONE_CLASS[status.tone] || 'badge-neutral'}`}>{status.label}</span>
}

/** Standard page opener: eyebrow, H1, lead paragraph, optional children (CTAs etc.). */
export function PageHero({ eyebrow, title, lead, children }) {
  return (
    <section className="hero-bg border-b" style={{ borderColor: 'var(--border-color)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="mb-5 prose-measure">{title}</h1>
        {lead && (
          <p className="text-lg md:text-xl leading-relaxed prose-measure" style={{ color: 'var(--text-secondary)' }}>
            {lead}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
      </div>
    </section>
  )
}

/** In-page section opener. Optional `numeral` ("01") prefixes the eyebrow as № 01 — … */
export function SectionHeading({ eyebrow, title, lead, center = false, numeral }) {
  return (
    <div className={`mb-10 ${center ? 'text-center mx-auto' : ''} prose-measure`}>
      {eyebrow && (
        <p className="eyebrow mb-3">
          {numeral && (
            <>
              <span className="font-display onum" style={{ color: 'var(--gold)', letterSpacing: 0 }}>
                {'№'} {numeral}
              </span>
              {' — '}
            </>
          )}
          {eyebrow}
        </p>
      )}
      <h2 className="mb-4">{title}</h2>
      {lead && (
        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {lead}
        </p>
      )}
    </div>
  )
}

/** Accessible FAQ accordion (Radix, via shadcn). items: [{q, a}] */
export function FAQList({ items }) {
  if (!items || items.length === 0) return null
  return (
    <Accordion type="single" collapsible className="space-y-3">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={`faq-${i}`}
          className="card-classic border-b border"
          style={{ padding: 0 }}
        >
          <AccordionTrigger className="px-5 py-4 text-[1rem]">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 text-[0.95rem]">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

/**
 * Verified impact numbers. Renders nothing until real values exist in
 * lib/content/site.js — never shows placeholders or zeros.
 */
export function MetricStrip() {
  const metrics = verifiedMetrics()
  if (metrics.length === 0) return null
  return (
    <div className="border-y py-10 mb-16" style={{ borderColor: 'var(--border-color)' }}>
      <div className="flex flex-wrap justify-center gap-x-20 gap-y-8">
        {metrics.map((m) => (
          <div key={m.id} className="text-center">
            <p className="stat-numeral">
              {m.display || m.value.toLocaleString()}
            </p>
            <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
