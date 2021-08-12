import Head from 'next/head'
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function Contato() {

    async function sendContact(e) {
        e.preventDefault();
        const result = e.target.querySelector('#result');
        const name = e.target.querySelector('#name')
        const email = e.target.querySelector('#email')
        const phone = e.target.querySelector('#phone')
        const state = e.target.querySelector('#state')
        const clock = e.target.querySelector('#clock')
        const plan = e.target.querySelector('#plan')
        const message = e.target.querySelector('#message')

        const payload = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            state: state.value,
            clock: clock.value,
            plan: plan.value,
            message: message.value
        }
        result.innerHTML = "Enviando...";
        let response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })

        response = await response.json()
        if (response.success) {
            name.value = "";
            email.value = "";
            phone.value = "";
            state.value = "";
            clock.value = "";
            plan.value = "";
            message.value = "";
            result.innerHTML = 'Envio realizado com sucesso'
            window.location.href = "/contato/sucesso"
        } else {
            result.innerHTML = "Erro no envio! :( Tente novamente mais tarde"
        }
        setTimeout(function(){
            result.innerHTML = "";
        },5000);
    }

    return (
        <>
            <Head>
                <title>Contato | Dicuore Organiza</title>
            </Head>
            <Header/>
            <main className="text-center container m-auto">
                <h2 className="text-3xl my-8 font-bold">Entre em contato</h2>
                <p className="text-lg">Conte-me mais sobre o seu projeto. Mal posso esperar para trabalharmos juntas!</p>
                <form className="md:max-w-[900px] m-auto" onSubmit={sendContact}>
                    <div className="flex flex-wrap justify-between w-full md:gap-x-2 lg:gap-x-20 flex-col md:flex-row py-8 sm:py-16">
                        <div className="inline-block text-left w-full md:w-[350px] lg:w-[400px] my-2">
                            <label className="w-full" htmlFor="name">Nome Completo</label>
                            <input required type="text" maxLength="50" id="name" name="name"></input>
                        </div>
                        <div className="inline-block text-left w-full md:w-[350px] lg:w-[400px] my-2">
                            <label className="w-full" htmlFor="email">E-Mail</label>
                            <input type="email" required maxLength="50" id="email" name="email"></input>
                        </div>
                        <div className="inline-block text-left w-full md:w-[350px] lg:w-[400px] my-2">
                            <label className="w-full" htmlFor="phone">Telefone</label>
                            <input type="phone" required minLength="10" maxLength="16" id="phone" name="phone"></input>
                        </div>
                        <div className="inline-block text-left w-full md:w-[350px] lg:w-[400px] my-2">
                            <label className="w-full" htmlFor="state">Estado</label>
                            <input type="text" required maxLength="20" minLength="2" id="state" name="state"></input>
                        </div>
                        <div className="inline-block text-left w-full md:w-[350px] lg:w-[400px] my-2">
                            <label className="w-full" htmlFor="clock">Melhor horário para contato</label>
                            <select required id="clock" name="clock">
                                <option selected>...</option>
                                <option>Manhã</option>
                                <option>Tarde</option>
                                <option>Noite</option>
                            </select>
                        </div>
                        <div className="inline-block text-left w-full md:w-[350px] lg:w-[400px] my-2">
                            <label className="w-full" htmlFor="plan">Plano de interesse</label>
                            <select required id="plan" name="plan">
                                <option selected>...</option>
                                <option>Quero um serviço em específico</option>
                                <option>Plano 1</option>
                                <option>Plano 2</option>
                                <option>Plano 3</option>
                            </select>
                        </div>
                        <div className="inline-block text-left w-full my-2">
                            <label className="w-full" htmlFor="message">Descreva brevemente o seu projeto</label>
                            <textarea required maxLength="300" minLength="10" id="message" name="message"></textarea>
                        </div>
                    </div>
                    <button type="submit" className="text-white primary">Enviar</button>
                    <div className="w-full text-center text-white py-2">
                        <span id="result" className="text-primary"></span>
                    </div>
                </form>
            </main>
            <Footer/>
        </>
    )
}
