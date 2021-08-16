import Header from "../../../components/header/admin"
import session from '../../../util/session';

export default function CreateProduto() {
    return (
        <>
            <Header></Header>
            <main className="container m-auto">
                <h1 className="text-2xl text-center">Novo produto</h1>
                <form action="/api/produtos/criar" method="POST">
                    <div className="py-4">
                        <label htmlFor="pageTitle">Título da página</label>
                        <input id="pageTitle" name="pageTitle" required></input>
                    </div>

                    <div className="py-4">
                        <label htmlFor="url">Url única</label>
                        <input id="url" name="url" required></input>
                    </div>

                    <div className="py-4">
                        <label htmlFor="metaDescription">Meta descrição da página</label>
                        <input id="metaDescription" name="metaDescription" required></input>
                    </div>

                    <div className="py-4">
                        <label htmlFor="metaKeywords">Meta Keywords (seperadas por vírgula)</label>
                        <input id="metaKeywords" name="metaKeywords" required></input>
                    </div>
                    
                    <div className="py-4">
                        <label htmlFor="name">Nome</label>
                        <input id="name" name="name" required></input>
                    </div>

                    <div className="py-4">
                        <label htmlFor="resume">Resumo</label>
                        <input id="resume" name="resume" required></input>
                    </div>

                    <div className="py-4">
                        <label htmlFor="price">Preço</label>
                        <input type="text" id="price" name="price" required></input>
                    </div>
                    
                    <div className="py-4">
                        <label htmlFor="thumbnail">Thumbnail (Url)</label>
                        <input id="thumbnail" name="thumbnail" required></input>
                    </div>
                    
                    <div className="py-4">
                        <label htmlFor="image">Imagem Principal (Url)</label>
                        <input id="image" name="image" required></input>
                    </div>

                    <div className="py-4">
                        <label htmlFor="link">Link do produto</label>
                        <input id="link" name="link" required></input>
                    </div>
                    
                    <div className="py-4">
                        <label htmlFor="description">Descrição</label>
                        <textarea type="text" id="description" name="description" required></textarea>
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
  
    return {
      props: { user }
    }
  })