import Head from 'next/head';
import { useRouter } from 'next/router'
import Header from '../../../components/header';
import Footer from '../../../components/footer';

import { connectToDatabase } from '../../../util/mongodb';
import formatDate from '../../../util/formatDate'; 

export default function Post(props) {

    const baseUrl = "https://www.dicuoreorganiza.com.br"

    const router = useRouter()

    if (router.isFallback) {
      return <div>Loading...</div>
    }

    function copyLink(e) {
        e.preventDefault();
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

    return (
        <>
            <Head>
                <title>{props.title} | Dicuore Organiza</title>
                <meta name="description" content={props.metaDescription}></meta>
                <meta name="author" content={props.author}></meta>
                <meta name="keywords" content={props.metaKeywords}></meta>
            </Head>
            <Header></Header>
            <main className="container m-auto post">
                <div className="flex flex-wrap my-8 justify-center">
                    <aside className="relative w-full order-last md:order-first md:w-[70px] md:ml-[-70px]">
                        <div className="sticky top-0 text-center">
                            <span>Share</span>
                            <ul className="flex md:block justify-around">
                                <li className="py-2">
                                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl}/posts/${props.url}`} className="text-2xl" target="_BLANK" rel="noreferrer noopener" title="Copiar Link" onClick={copyLink}>
                                        <i className="fas fa-link hover:text-primary"></i>
                                    </a>
                                </li>
                                <li className="py-2">
                                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl}/posts/${props.url}`} className="text-2xl" target="_BLANK" rel="noreferrer noopener" title="Facebook">
                                        <i className="fab fa-facebook-f hover:text-primary"></i>
                                    </a>
                                </li>
                                <li className="py-2">
                                    <a href={`https://twitter.com/intent/tweet?text=${props.title}&url=${baseUrl}/posts/${props.url}`} className="text-2xl" target="_BLANK" rel="noreferrer noopener" title="Twitter">
                                        <i className="fab fa-twitter hover:text-primary"></i>
                                    </a>
                                </li>
                                <li className="py-2">
                                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${baseUrl}/posts/${props.url}`} className="text-2xl" target="_BLANK" rel="noreferrer noopener" title="Twitter">
                                        <i className="fab fa-linkedin-in hover:text-primary"></i>
                                    </a>
                                </li>
                                <li className="py-2">
                                    <a href={`mailto:?subject=${props.title}&body=Article:%20${baseUrl}/posts/${props.url}`} className="text-2xl" target="_BLANK" rel="noreferrer noopener" title="E-mail"> 
                                        <i className="far fa-envelope hover:text-primary"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    <article className="max-w-[650px]">
                        <section>
                            <header>
                                <h1 className="font-extrabold">{props.title}</h1>
                                <div>
                                    <time className="capitalize"> 
                                        <strong>{formatDate(props.createdAt, 2)}</strong>
                                    </time>
                                    <b> &nbsp;|&nbsp; {props.readTime} min</b>
                                </div>
                                <p className="py-8 text-gray-700 font-bold">{props.resume}</p>
                            </header>
                            <figure>
                                <img className="w-full h-auto" src={props.image} alt={`Imagem Tema - ${props.title}`}></img>
	                            <figcaption className="hidden">{props.title}</figcaption>
                            </figure>
                        </section>
                        <section className="my-8">
                            <div dangerouslySetInnerHTML={{__html: props.content}}></div>
                            <p className="pt-8"><b>Por: {props.author}</b></p>
                        </section>
                        <hr className="my-8"></hr>
                        <section className="flex flex-wrap justify-between">
                            <div className="w-full md:w-[50%]">
                                <img src={props.thumbnail} className="w-full"></img>
                            </div>
                            <div className="w-full md:w-[50%] py-4 md:p-0 flex justify-center items-center flex-col">
                                <div className="px-2 text-center">
                                    <strong className="text-xl font-bold">Gostou do Post?</strong>
                                    <p className="py-2">Então compartilhe e <br></br> confira outros posts!</p>
                                    <p>Até logo! =)</p>
                                </div>
                            </div>
                        </section>
                    </article>
                </div>
            </main>
            <Footer>
                
            </Footer>
        </>
    )
}

export async function getStaticPaths() {
    
    const { db } = await connectToDatabase()

    const posts = await db.collection('posts').aggregate([{$project: { url:1 }}]).toArray();

    const paths = posts.map((post) => ({
        params: { id: post.url }
    }))

    return { paths, fallback: true }
}

export async function getStaticProps({params}) {

    const { id } = params

    const { db } = await connectToDatabase()

    const post = await db.collection('posts').findOne({url: id})
    post._id = `${post['_id']}`

    return {
        props: {
            ...post
        },
        revalidate: 3200
    }
}