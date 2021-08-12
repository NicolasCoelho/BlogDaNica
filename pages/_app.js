import '../styles/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1;user-scalable=yes;"></meta>
        <meta name="description" content="Organize seu ambiente da melhor maneira possível. Dicas para sua casa da melhor personal Organizzer."></meta>
        <meta name="keywords" content="Organização, Organizer, Personal"></meta>
        <meta httpEquiv="content-language" content="pt-br"></meta>
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8"></meta>
        <meta name="creator" content="nck"></meta>
        <meta name="robots" content="index"></meta>
        <link rel="canonical" href="https://www.dicuoreorganizer.com.br"></link>  
      </Head>
      <Component {...pageProps} />
    </>
  )
}
