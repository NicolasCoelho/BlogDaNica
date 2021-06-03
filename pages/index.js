import Head from 'next/head'
import Header from '../components/header/header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dicuore Organizer | Nicole Coelho</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </>
  )
}
