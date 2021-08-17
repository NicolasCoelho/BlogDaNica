import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

import Produto from '../components/product';

import { connectToDatabase } from '../util/mongodb';


export default function Produtos({produtos}) {
    return (
        <>
            <Head>
                <title>Produtos | Dicuore Organiza</title>
                <meta name="description" content="Produtos para manter a sua vida mais organizada."></meta>
            </Head>
            <Header></Header>
            <main className="container m-auto text-center">
                <h1 className="my-8 font-bold">Produtos Recomendados</h1>
                <p className="text-lg mb-8">Os melhores produtos para manter a sua vida organizada!</p>
                
                <ul className="flex flex-wrap justify-between">
                    {produtos.map( (p,i) => <Produto {...p} key={`produto-${i}`} /> )}
                </ul>
            </main>
            <Footer></Footer>
        </>
    )
}

export async function getStaticProps() {
    const { db } = await connectToDatabase()
  
    let produtos = await db
    .collection("produtos")
    .find({})
    .project({url: 1, name: 1, price: 1, createdAt: 1, thumbnail: 1, link: 1, resume: 1})
    .project({_id: 0, description: 0, metaDescription: 0, metaKeywords: 0, image: 0, pageTitle: 0})
    .sort({ metacritic: -1 })
    .toArray()

    return {
      props: { 
        produtos 
      },
      revalidate: 72000
    }
}
