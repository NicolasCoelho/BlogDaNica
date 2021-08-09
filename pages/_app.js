import '../styles/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1;user-scalable=yes;"></meta>
        <meta name="description" content="Organize seu ambiente da melhor maneira possível. Dicas para sua casa da melhor personal Organizzer."></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
