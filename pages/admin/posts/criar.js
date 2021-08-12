import Header from "../../../components/header/admin";

export default function CreatePost() {

    return (
        <>
            <Header></Header>
            <main className="container m-auto">
                <h1 className="text-2xl text-center">Novo post</h1>
                <form action="/api/posts/criar" method="POST">
                    <div className="py-4">
                        <label htmlFor="title">Título</label>
                        <input id="title" name="title" required></input>
                    </div>

                    <div className="py-4">
                        <label htmlFor="author">Autor</label>
                        <input id="author" name="author" required></input>
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
                        <label htmlFor="tag">Tag</label>
                        <input id="tag" name="tag" required></input>
                    </div>
                    
                    <div className="py-4">
                        <label htmlFor="resume">Resumo</label>
                        <input id="resume" name="resume" required></input>
                    </div>
                    
                    <div className="py-4">
                        <label htmlFor="readTime">Tempo de leitura (minutos)</label>
                        <input type="number" id="readTime" name="readTime" required></input>
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
                        <label htmlFor="content">Conteúdo (HTML)</label>
                        <textarea id="content" name="content" required></textarea>
                    </div>
                    <div className="text-center">
                        <button className="bg-primary px-5 py-2 text-white">Salvar</button>
                    </div>
                </form>
            </main>
        </>
    )
}