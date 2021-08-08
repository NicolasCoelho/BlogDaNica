export default function Footer() {
    return (
        <footer className="bg-primary text-white text-sm md:text-md lg:text-lg mt-10">
            <div className="container m-auto text-center py-8 sm:py-16">
                <h3 className="text-2xl md:text-4xl font-bold">Cadastre-se para receber Novidades</h3>
                <form className="md:max-w-[700px] m-auto">
                    <div className="flex space-between w-full gap-x-20 flex-col md:flex-row py-8 sm:py-16">
                        <div className="inline-block text-left w-full md:w-1/2 my-2">
                            <label className="w-full">Nome</label>
                            <input required></input>
                        </div>
                        <div className="inline-block text-left w-full md:w-1/2 my-2">
                            <label className="w-full">E-Mail</label>
                            <input type="email" required></input>
                        </div>
                    </div>
                    <button type="submit" className="secodary">Enviar</button>
                </form>
            </div>
            <div className="container m-auto text-center font-arial py-2">
                <strong>2021 &copy; Todos direitos reservados. </strong>
            </div>
        </footer>
    )
}