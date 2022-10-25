import Head from 'next/head'

const Header = () => {
  return (
    <Head>
      <title>Fun Facts</title>
      <meta name="description" content="Fun Facts by Sean++" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <link rel="icon" href="" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://funfacts.vercel.app/" />
      <meta property="og:title" content="Fun Facts by Sean++" />
      <meta property="og:description" content="Fun Facts by Sean++" />
      <meta property="og:image" content="https://funfacts.vercel.app/logo.png" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" value="simplejson.vercel.app" />
      <meta name="twitter:title" value="Fun Facts by Sean++" />
      <meta name="twitter:description" value="Fun Facts by Sean++" />
      <meta name="twitter:image" content="https://funfacts.vercel.app/logo.png" />
      <meta name="twitter:url" value="https://funfacts.vercel.app/" />
    </Head>
  )
}

export default Header
