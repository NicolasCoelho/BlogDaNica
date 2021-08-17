import { useEffect } from 'react'
import { useRouter } from 'next/router'

import '../styles/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  
  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>Dicuore Organiza | Nicole Coelho</title>
        <meta name="viewport" content="width=device-width, initial-scale=1;user-scalable=yes;"></meta>
        <meta name="description" content="Organize seu ambiente da melhor maneira possível. Dicas e serviços para deixar sua vida mais prática e aconchegante."></meta>
        <meta name="keywords" content="Organização, Organizer, Personal"></meta>
        <meta property="og:site_name" content="Dicuore Organiza | Nicole Coelho"></meta>
        <meta property="og:title" content="Dicuore Organiza | Nicole Coelho"></meta>
        <meta property="og:description" content="Organize seu ambiente da melhor maneira possível. Dicas e serviços para deixar sua vida mais prática e aconchegante."></meta>
        <meta property="og:image" itemProp="image" content="https://www.dicuoreorganiza.com.br/favicon.png"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:locale" content="pt_BR"></meta>
        <meta property="og:url" content={`https://www.dicuoreorganiza.com.br`}></meta>
        <meta httpEquiv="content-language" content="pt-br"></meta>
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8"></meta>
        <meta name="theme-color" content="#b37dac"></meta>
        <meta name="creator" content="nck"></meta>
        <meta name="robots" content="index"></meta>
        <link rel="canonical" href="https://www.dicuoreorganiza.com.br"></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
