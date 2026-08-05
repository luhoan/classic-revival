import Head from 'next/head'
import { site } from '../lib/content/site'

/**
 * Per-page SEO tags.
 *
 * Props:
 *  - title: page title (rendered as "Title — Classic Revival"; pass the
 *    site name itself for the homepage to avoid "Classic Revival — Classic Revival")
 *  - description: unique meta description
 *  - path: the route, e.g. '/our-work' (used for the canonical URL)
 *  - type: Open Graph type, defaults to 'website'
 *  - jsonLd: optional structured-data object rendered as JSON-LD
 */
export default function Seo({ title, description, path = '/', type = 'website', jsonLd }) {
  const fullTitle = title === site.name ? `${site.name} — ${site.tagline}` : `${title} — ${site.name}`
  const canonical = `${site.url}${path === '/' ? '' : path}`
  const desc = description || site.description

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${site.url}/og-image.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  )
}
