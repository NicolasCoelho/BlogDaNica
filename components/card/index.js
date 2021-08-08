

export default function Card(props) {
    return (
        <div className="flex post-card w-auto flex-col sm:flex-row">
            <div className="w-full h-72 sm:h-auto sm:w-5/12 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url("/images/bedromm.jpg")' }}>
            </div>
            <article className="w-full sm:w-7/12 p-8 h-auto border border-gray-300">
                <header>
                    <span className="text-sm">14 de janeiro</span>
                    <h3 className="text-2xl font-bold my-4 sm:my-6 ">Primeiro Post do Blog</h3>
                </header>
                <main>
                    <p> 
                        Esse é um resumo de resumo do teste de caso da nicole como paragrago de teste
                    </p>
                </main>
            </article>
        </div>
    )
}