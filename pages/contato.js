import Head from 'next/head'
import Header from "../components/header"
import Footer from "../components/footer"

export default function Contato({ isConnected }) {
    return (
        <>
            <Head>
                <title>Contato | Dicuore Organizza</title>
            </Head>
            <Header/>
            <main className="text-center container m-auto">
                <h2 className="text-3xl my-8 font-bold">Entre em contato</h2>
                <p className="text-lg">Conte-me mais sobre o seu projeto. Mal posso esperar para trabalharmos juntas!</p>
                <form className="md:max-w-[900px] m-auto">
                    <div className="flex flex-wrap justify-between w-full md:gap-x-2 lg:gap-x-20 flex-col md:flex-row py-8 sm:py-16">
                        <div className="inline-block text-left w-full md:w-[350px] lg:w-[400px] my-2">
                            <label className="w-full">Nome Completo</label>
                            <input required type="text" maxLength="50"></input>
                        </div>
                        <div className="inline-block text-left w-full md:w-[350px] lg:w-[400px] my-2">
                            <label className="w-full">E-Mail</label>
                            <input type="email" required maxLength="50"></input>
                        </div>
                        <div className="inline-block text-left w-full md:w-[350px] lg:w-[400px] my-2">
                            <label className="w-full">Telefone</label>
                            <input type="phone" required  maxLength="20"></input>
                        </div>
                        <div className="inline-block text-left w-full md:w-[350px] lg:w-[400px] my-2">
                            <label className="w-full">Estado</label>
                            <input type="text" required maxLength="20"></input>
                        </div>
                        <div className="inline-block text-left w-full md:w-[350px] lg:w-[400px] my-2">
                            <label className="w-full">Melhor horário para contato</label>
                            <select required>
                                <option selected>...</option>
                                <option>Manhã</option>
                                <option>Tarde</option>
                                <option>Noite</option>
                            </select>
                        </div>
                        <div className="inline-block text-left w-full md:w-[350px] lg:w-[400px] my-2">
                            <label className="w-full">Plano de interesse</label>
                            <select required>
                                <option selected>...</option>
                                <option>Quero um serviço em específico</option>
                                <option>Plano 1</option>
                                <option>Plano 2</option>
                                <option>Plano 3</option>
                            </select>
                        </div>
                        <div className="inline-block text-left w-full my-2">
                            <label className="w-full">Descreva brevemente o seu projeto</label>
                            <textarea required maxLength="300"></textarea>
                        </div>
                    </div>
                    <button type="submit" className="text-white primary">Enviar</button>
                </form>
            </main>
            <Footer/>
        </>
    )
}