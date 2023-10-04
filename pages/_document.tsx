import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="See pictures from Crypto Feed NFT"
          />
          <meta property="og:site_name" content="https://www.cryptofeednft.com" />
          <meta
            property="og:description"
            content="See pictures from Crypto Feed NFT"
          />
          <meta property="og:title" content="Crypto Feed NFT" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="rypto Feed NFT" />
          <meta
            name="twitter:description"
            content="See pictures from Crypto Feed NFT"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
