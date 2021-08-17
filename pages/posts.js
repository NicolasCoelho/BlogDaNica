import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Card from '../components/card';

import { connectToDatabase } from '../util/mongodb';

export default function Posts({ posts }) {
    const baseUrl = "https://www.dicuoreorganiza.com.br"
    
    return (
        <>
            <Head>
                <title>Posts | Dicuore Organiza</title>
                <meta name="description" content="Artigos sobre organização de ambientes, casas e muito mais."></meta>
                <meta property="og:title" content="Posts | Dicuore Organiza"></meta>
                <meta property="og:description" content="Artigos sobre organização de ambientes, casas e muito mais."></meta>
                <meta property="og:url" content={`${baseUrl}/posts`}></meta>
            </Head>
            <Header></Header>
            <main className="container m-auto text-center">
                <section>
                    <h1 className="my-8 font-bold">Meus posts</h1>
                    <h2 className="text-lg mb-8">Dicas, Curiosidades e as últimas noticias sobre o mundo da organização!</h2>
                </section>
                <section className="flex flex-wrap gap-10 justify-around">
                    {posts.map((post, i) => (
                        <Card {...post} key={`card-${i}`}/>
                    ))}
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export async function getStaticProps() {
    const { db } = await connectToDatabase()
  
    let posts = await db
    .collection("posts")
    .find({})
    .project({title: 1, url: 1, resume: 1, createdAt: 1, thumbnail: 1})
    .project({_id: 0, content: 0, metaDescription: 0, metaKeywords: 0})
    .sort({ metacritic: -1 })
    .toArray()

    return {
      props: { 
        posts 
      },
      revalidate: 72000
    }
  }
  