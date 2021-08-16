import Head from 'next/head';
import { useRouter } from 'next/router'
import Header from '../../../components/header';
import Footer from '../../../components/footer';

import { connectToDatabase } from '../../../util/mongodb';
import formatDate from '../../../util/formatDate'; 

export default function Produto(props) {

    const baseUrl = "https://www.dicuoreorganiza.com.br"

    const router = useRouter()

    if (router.isFallback) {
      return <div>Loading...</div>
    }

    function copyLink(e) {
        e.preventDefault();
        analytics('CopyLink')
        let input = document.createElement('INPUT')
        let text = e.target.parentNode.getAttribute('href')
        e.target.parentNode.setAttribute('title', 'Copiado!')
        if (!text) {
            text = e.target.getAttribute('href')
        }
        input.setAttribute('value', text)
        input.setAttribute('id', 'clipboardText')
        e.target.parentNode.appendChild(input)
        input.style.position = "absolute"
        input.style.left = '-10000px'
        document.querySelector('#clipboardText').focus()
        document.querySelector('#clipboardText').setSelectionRange(0, 99999)
        document.execCommand('copy')
        document.querySelector('#clipboardText').remove()
    }

    function analytics(method) {
        if (window) {
            window.gtag('event', 'share', {
                method
            });
        }
    }

    return (
        <>
            <Head>
                <title>{props.pageTitle}</title>
                <meta name="description" content={props.metaDescription}></meta>
                <meta name="keywords" content={props.metaKeywords}></meta>
            </Head>
            <Header></Header>
            <main className="container m-auto produtc-page">
            </main>
            <Footer/>
        </>
    )
}

export async function getStaticPaths() {
    
    const { db } = await connectToDatabase()

    const produtos = await db.collection('produtos').aggregate([{$project: { url:1 }}]).toArray();
    const paths = produtos.map((p) => ({
        params: { id: p.url }
    }))

    return { paths, fallback: true }
}

export async function getStaticProps({params}) {

    const { id } = params

    const { db } = await connectToDatabase()

    const produto = await db.collection('produtos').findOne({url: id})
    produto._id = `${produto['_id']}`

    return {
        props: {
            ...produto
        },
        revalidate: 3200
    }
}