import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";

export default function Sucesso() {
    return (
        <>
            <Head>
                <title>Dicuore Organiza</title>
            </Head>
            <Header/>
            <main className="container m-auto text-center">
                <h1 className="mt-10">Envio realizado com sucesso!</h1>
                <h2 className="mb-10 text-2xl">Logo entrarei em contato com você =)</h2>
                <p className="m-2 text-lg">Enquanto isso, fique a vontade para navegar no site e aprender mais sobre esse mundo.</p>
                <p className="m-2 text-lg">Eu particularmente amo a seção de posts. Clique <b><Link href="/posts"><a>aqui</a></Link></b>&nbsp;e confira!</p>
                <p className="mt-10">
                    <Link href="/"><a>Voltar para a página inicial</a></Link>
                </p>
                
            </main>
            <Footer/>
        </>
    )
}