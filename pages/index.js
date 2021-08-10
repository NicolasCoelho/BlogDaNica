import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import Card from '../components/card'

import { connectToDatabase } from '../util/mongodb'

  function top() {
    window.scrollTo(0,0);
  }

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Dicuore Organiza | Nicole Coelho</title>
      </Head>
      <Header/>
      <main>
        <section className="flex w-full justify-between gap-x-2 relative">
          <div className="hidden md:block relative w-2/6 h-banner">
            <Image
              src="/images/closet2.jpg"
              alt="Guarda-Roupas"
              quality="70"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-full md:w-2/6 h-banner">
            <Image
              src="/images/closet10.jpg"
              alt="Closet"
              quality="70"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="hidden md:block relative w-2/6 h-banner">
            <Image
              src="/images/room4.jpg"
              alt="Cozinha"
              quality="70"
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
          {posts.map((post) => (
            <Card {...post}/>
          ))}
          </div>
          <article className="w-full lg:w-[550px] border border-gray-300 px-4 py-4 md:px-12 m:py-8 text-justify">
            <h2 className="font-bold pb-4 text-2xl text-center">
              Contextualizando 
            </h2>
            <div className="relative w-full h-[250px]">
              <Image
                src="/images/why.jpg"
                alt="Por que"
                quality="70"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="py-4">
              Aqui você encontrará matérias com dicas práticas que podem mudar a rotina do seu lar para melhor. 
            </p>
            <p className="py-4">
              Ainda, você vai poder acompanhar os resultados do meu trabalho de perto e se informar sobre meus serviços e qual tipo de transformação combina mais com você na etapa da vida que estiver.
            </p>
            <p className="py-4">
              Navegando no site, você terá acesso a ótimas indicações de produtos organizadores que farão a diferença no seu armário, closet, banheiro, cozinha, e escritório. 
            </p>
            <p className="py-4">
              Espero que sua experiência por aqui seja enriquecedora. <br></br> <b>Sinta-se em casa!</b>
            </p>
          </article>
        </section>
        <section className="container m-auto text-center">
          <h2 className="text-4xl">Prazer, Nicole</h2>
          <div className="flex flex-wrap justify-around my-10"> 
            <div className="relative inline-block h-[300px] lg:h-[500px] w-full md:w-[40%] xl:w-[500px] border border-2 border-primary overflow-hidden">
              <Image
                src="/images/me.jpg"
                alt="Por que"
                quality="70"
                layout="fill"
                objectFit="cover"
              />
            </div>  
            <div className="w-full my-10 md:my-0 md:w-[40%] xl:w-[500px] text-left">
              <p className="text-lg">Olá, meu nome é Nicole Coelho e sou apaixonada por esse mundo da organização!</p>
              <p className="text-lg">
                Meu amor por ajudar as pessoas e por organização me fez chegar até aqui como personal organizer. 
              </p>
              <br></br>
              <p className="text-lg">
                Unir essas duas coisas me fez e me faz estudar a cada dia para ajudar as pessoas. 
                <br></br>
                Por isso, busquei qualificação profissional. 
              </p>
              <p className="text-lg">
                Hoje, posso dizer que sou Personal organizer qualificada e certificada pela OZ!
                <br></br>
                Organize sua vida. 
              </p>
              <br></br>
              <p className="text-lg">
                Especializada em Organização residencial, mudanças residenciais, treinamento de empregadas e organização de Home office,
                minha missão é ajudar as pessoas a otimizar seus espaços por dar soluções práticas a elas.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full text-center my-16">
          <button className="text-lg" onClick={top}>Voltar ao topo</button>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase()

  const posts = await db
  .collection("posts")
  .find({})
  .sort({ metacritic: -1 })
  .limit(2)
  .toArray();
  
  return {
    props: { 
      posts: [{title: "Primeiro post", thumb: '/images/bedromm.jpg', createdAt: '14 de janeiro', resume: ' Resumo de descriçao do primeiro testeResumo de descriçao do primeiro testeResumo de descriçao do primeiro teste'},{title: "Primeiro post", thumb: '/images/bedromm.jpg', createdAt: '14 de janeiro', resume: 'Resumo de descriçao do primeiro teste'}] 
    },
  }
}
