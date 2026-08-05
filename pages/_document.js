import { Html, Head, Main, NextScript } from 'next/document'
import { site } from '../lib/content/site'
import { fraunces, inter } from '../lib/fonts'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'NonprofitOrganization',
  name: site.name,
  url: site.url,
  description: site.description,
  email: site.contact.email,
  logo: `${site.url}/logo.png`,
  sameAs: [site.social.instagram.url],
}

export default function Document() {
  return (
    <Html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#131A24" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <meta name="description" content={site.description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
