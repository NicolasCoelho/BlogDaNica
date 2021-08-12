import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Dicuore Organiza</title>
                <meta name="description" content="Artigos sobre organização de ambientes, casas e muito mais."></meta>
            </Head>
            <Header></Header>
            <main className="container m-auto text-center">
                <h1 className="my-10">Página em construção <i className="fas fa-hammer"></i></h1>
            </main>
            <Footer></Footer>
        </>
    )
}
