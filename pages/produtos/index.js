import Head from 'next/head';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Produtos() {
    return (
        <>
            <Head>
                <title>Produtos | Dicuore Organiza</title>
                <meta name="description" content="Produtos para manter a sua vida mais organizada."></meta>
            </Head>
            <Header></Header>
            <main className="container m-auto text-center">
                <h1 className="my-10 text-3xl">Página em construção <i className="fas fa-hammer"></i></h1>
            </main>
            <Footer></Footer>
        </>
    )
}