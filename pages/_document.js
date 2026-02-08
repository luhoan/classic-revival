import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#722F37" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Classic Revival - A non-profit organization dedicated to preserving and sharing classic literature" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
