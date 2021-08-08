import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import Card from '../components/card'

import { connectToDatabase } from '../util/mongodb'

  function top() {
    window.scrollTo(0,0);
  }

export default function Home({ isConnected }) {
  return (
    <>
      <Head>
        <title>Dicuore Organizza | Nicole Coelho</title>
      </Head>
      <Header/>
      <main>
        <section className="flex w-full justify-between gap-x-2 relative">
          <div className="hidden md:block relative w-2/6 h-banner">
            <Image
              src="/images/closet2.jpg"
              alt="Guarda-Roupas"
              quality="100"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-full md:w-2/6 h-banner">
            <Image
              src="/images/closet10.jpg"
              alt="Closet"
              quality="100"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="hidden md:block relative w-2/6 h-banner">
            <Image
              src="/images/room4.jpg"
              alt="Cozinha"
              quality="100"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="absolute inset-x-0 -bottom-20 m-auto bg-white w-full md:w-2/4 lg:w-2/5 xl:w-1/4 text-center text-5xl p-8 font-bold">
            Organização sem mistérios
          </h2>
        </section>
        <section className="container m-auto sm:my-28 flex-col-reverse md:flex-row flex justify-around flex-wrap gap-x-4 gap-y-4">
          <div className="flex justify-between flex-col gap-y-4 mb-4 lg:m-0">
            <Card/>
            <Card/>
          </div>
          <article className="w-full lg:w-[550px] border border-gray-300 px-4 py-4 md:px-12 m:py-8 text-justify">
            <h2 className="font-bold pb-4 text-2xl text-center">
              Contextualizando 
            </h2>
            <div className="relative w-full h-[250px]">
              <Image
                src="/images/why.jpg"
                alt="Por que"
                quality="100"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="py-4">
              Lorem impsu shuae kso oiajs Lorem impsu shuae kso oiajs Lorem impsu shuae kso oiajs Lorem impsu shuae kso oiajs Lorem impsu shuae kso oiajs Lorem impsu shuae kso oiajs 
            </p>
            <p className="py-4">
              Lorem impsu shuae kso oiajs Lorem impsu shuae kso oiajs Lorem impsu shuae kso oiajs Lorem impsu shuae kso oiajs Lorem impsu shuae kso oiajs Lorem impsu shuae kso oiajs 
            </p>
          </article>
        </section>
        <section className="container m-auto text-center">
          <h2 className="text-4xl">Prazer, Nicole</h2>
          <div className="relative inline-block my-10 h-[400px] w-[400px] border border-4 border-primary rounded-full overflow-hidden">
            <Image
              src="/images/me.jpg"
              alt="Por que"
              quality="100"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="text-lg">Olá, Meu nome é Nicole Coelho e sou apaixonada por esse mundo da organização</p>
          <p className="text-lg">É tipo a padoquinha mas da organização</p>
          <p className="text-lg">Bora????</p>
        </section>
        <section className="w-full text-center my-16">
          <button className="text-lg" onClick={top}>Voltar ao topo</button>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}
