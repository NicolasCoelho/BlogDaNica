import Head from 'next/head';
import Header from '../../../components/header';
import Footer from '../../../components/footer';

import { connectToDatabase } from '../../../util/mongodb';
import formatDate from '../../../util/formatDate'; 

export default function Post(props) {

    const baseUrl = "https://www.dicuoreorganiza.com.br"

    return (
        <>
            <Head>
                <title>{props.post.title} | Dicuore Organiza</title>
            </Head>
            <Header></Header>
            <main className="container m-auto post">
                <div className="flex flex-wrap my-8 justify-center">
                    <aside className="relative w-full order-last md:order-first md:w-[70px] md:ml-[-70px]">
                        <div className="sticky top-0 text-center">
                            <span>Share</span>
                            <ul className="flex md:block justify-around">
                                <li className="py-2">
                                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl}/posts/${props.post._id}`} className="text-2xl" target="_BLANK" rel="noreferrer noopener" title="Copiar Link">
                                        <i className="fas fa-link hover:text-primary"></i>
                                    </a>
                                </li>
                                <li className="py-2">
                                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl}/posts/${props.post._id}`} className="text-2xl" target="_BLANK" rel="noreferrer noopener" title="Facebook">
                                        <i className="fab fa-facebook-f hover:text-primary"></i>
                                    </a>
                                </li>
                                <li className="py-2">
                                    <a href={`https://twitter.com/intent/tweet?text=${props.post.title}&url=${baseUrl}/posts/${props.post._id}`} className="text-2xl" target="_BLANK" rel="noreferrer noopener" title="Twitter">
                                        <i className="fab fa-twitter hover:text-primary"></i>
                                    </a>
                                </li>
                                <li className="py-2">
                                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${baseUrl}/posts/${props.post._id}`} className="text-2xl" target="_BLANK" rel="noreferrer noopener" title="Twitter">
                                        <i className="fab fa-linkedin-in hover:text-primary"></i>
                                    </a>
                                </li>
                                <li className="py-2">
                                    <a href={`mailto:?subject=${props.post.title}&body=Article:%20${baseUrl}/posts/${props.post._id}`} className="text-2xl" target="_BLANK" rel="noreferrer noopener" title="E-mail"> 
                                        <i className="far fa-envelope hover:text-primary"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    <article className="max-w-[650px]">
                        <section>
                            <header>
                                <h1 className="text-4xl font-extrabold">{props.post.title}</h1>
                                <div>
                                    <time className="capitalize"> 
                                        <strong>{formatDate(props.post.createdAt, 2)}</strong>
                                    </time>
                                    <b> &nbsp;|&nbsp; {props.post.readTime} min</b>
                                </div>
                                <p className="py-8 text-gray-700 font-bold">{props.post.resume}</p>
                            </header>
                            <figure>
                                <img className="w-full h-auto" src={props.post.image} alt={`Imagem Tema - ${props.post.title}`}></img>
	                            <figcaption className="hidden">{props.post.title}</figcaption>
                            </figure>
                        </section>
                        <section className="my-8">
                            <div dangerouslySetInnerHTML={{__html: props.post.content}}></div>
                        </section>
                        <hr className="my-8"></hr>
                        <section className="flex flex-wrap justify-between">
                            <div className="w-full md:w-[50%]">
                                <img src={props.post.thumbnail} className="w-full"></img>
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
                    <section>
                        
                    </section>
                </div>
            </main>
            <Footer>
                
            </Footer>
        </>
    )
}

export async function getServerSideProps({query}) {
    const { id } = query

    const { db } = await connectToDatabase()

    const post = await db.collection('posts').findOne({url: id})
    post._id = `${post['_id']}`
    return {
        props: {
            post
        }
    }
    
}