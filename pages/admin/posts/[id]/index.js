import Header from "../../../../components/header/admin";
import session from '../../../../util/session';
import { connectToDatabase } from '../../../../util/mongodb';
import { ObjectId } from 'mongodb';

export default function EditPost(props) {

    return (
        <>
            <Header></Header>
            <main className="container m-auto">
                <h1 className="text-2xl text-center">Editar post</h1>
                <form action={"/api/posts/editar/"+props._id} method="POST">
                    <div className="py-4">
                        <label htmlFor="title">Título</label>
                        <input id="title" name="title" defaultValue={props.title} required></input>
                    </div>

                    <div className="py-4">
                        <label htmlFor="author">Autor</label>
                        <input id="author" name="author"defaultValue={props.author} required ></input>
                    </div>

                    <div className="py-4">
                        <label htmlFor="url">Url única</label>
                        <input id="url" name="url" defaultValue={props.url} required></input>
                    </div>

                    <div className="py-4">
                        <label htmlFor="metaDescription">Meta descrição da página</label>
                        <input id="metaDescription" name="metaDescription" defaultValue={props.metaDescription} required></input>
                    </div>

                    <div className="py-4">
                        <label htmlFor="metaKeywords">Meta Keywords (seperadas por vírgula)</label>
                        <input id="metaKeywords" name="metaKeywords" defaultValue={props.metaKeywords} required></input>
                    </div>

                    <div className="py-4">
                        <label htmlFor="tag">Tag</label>
                        <input id="tag" name="tag" defaultValue={props.tag} required></input>
                    </div>
                    
                    <div className="py-4">
                        <label htmlFor="resume">Resumo</label>
                        <input id="resume" name="resume" defaultValue={props.resume} required></input>
                    </div>
                    
                    <div className="py-4">
                        <label htmlFor="readTime">Tempo de leitura (minutos)</label>
                        <input type="number" id="readTime" name="readTime" defaultValue={props.readTime} required></input>
                    </div>
                    
                    <div className="py-4">
                        <label htmlFor="thumbnail">Thumbnail (Url)</label>
                        <input id="thumbnail" name="thumbnail" defaultValue={props.thumbnail} required></input>
                    </div>
                    
                    <div className="py-4">
                        <label htmlFor="image">Imagem Principal (Url)</label>
                        <input id="image" name="image" defaultValue={props.image} required></input>
                    </div>
                    
                    <div className="py-4">
                        <label htmlFor="content">Conteúdo (HTML)</label>
                        <textarea id="content" name="content" defaultValue={props.content} required></textarea>
                    </div>
                    <div className="text-center">
                        <button className="bg-primary px-5 py-2 text-white">Salvar</button>
                    </div>
                </form>
            </main>
        </>
    )
}

export const getServerSideProps = session(async ({req, res}) => {
    const user = req.session.get('user')
  
    if (!user) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        }
      }
    }

    const id = req.url.split('/')[3]

    const { db } = await connectToDatabase()

    const post = await db.collection('posts').findOne({'_id': ObjectId(id)})

    post['_id'] = `${post['_id']}`

    return {
      props: {
          ...post
      },
    }
  })