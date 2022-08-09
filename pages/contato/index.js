import Head from 'next/head'
import Header from "../../components/header"
import Footer from "../../components/footer"
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function Contato() {

    const baseUrl = "https://www.dicuoreorganiza.com.br"

    const sendMyFormUrl = "https://nicksendmyform.herokuapp.com/v1/send"

    async function sendContact(e) {
        e.preventDefault();
        gtag('event', 'purchase');
        const result = e.target.querySelector('#result');
        const name = e.target.querySelector('#name')
        const email = e.target.querySelector('#email')
        const phone = e.target.querySelector('#phone')
        const state = e.target.querySelector('#state')
        const clock = e.target.querySelector('#clock')
        const plan = e.target.querySelector('#plan')
        const message = e.target.querySelector('#message')
        const formkey = e.target.querySelector('input[name="formkey"]')
        const captcha = e.target.querySelector('iframe').getAttribute('data-hcaptcha-response')

        const payload = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            state: state.value,
            clock: clock.value,
            plan: plan.value,
            message: message.value,
            formkey: formkey.value,
            captcha: captcha
        }
        result.innerHTML = "Enviando...";

        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }

        let response = await fetch(sendMyFormUrl, request)

        response = await response.json()
        if (response.success) {
            await fetch('/api/contact', request)
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
                <meta name="description" content="Orçamento gratuito! Entre em contato agora mesmo."></meta>
                <meta property="og:description" content="Orçamento gratuito! Entre em contato agora mesmo."></meta>
                <meta property="og:title" content="Contato | Dicuore Organiza"></meta>
                <meta property="og:url" content={`${baseUrl}/contato`}></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:image" itemProp="image" content="https://www.dicuoreorganiza.com.br/favicon.png"></meta>
            </Head>
            <Header/>
            <main className="text-center container m-auto">
                <h1 className="my-8 font-bold">Entre em contato</h1>
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
                                <option defaultValue>...</option>
                                <option>Manhã</option>
                                <option>Tarde</option>
                                <option>Noite</option>
                            </select>
                        </div>
                        <div className="inline-block text-left w-full md:w-[350px] lg:w-[400px] my-2">
                            <label className="w-full" htmlFor="plan">Plano de interesse</label>
                            <select required id="plan" name="plan">
                                <option defaultValue>...</option>
                                <option>Quero um serviço em específico</option>
                                <option>Plano: Te ajudo a se ajudar</option>
                                <option>Plano: Adeus bagunça</option>
                                <option>Plano: Organiza minha vida</option>
                                <option>Opiniões ou dúvidas</option>
                                <option>Outro</option>
                            </select>
                        </div>
                        <div className="inline-block text-left w-full my-2">
                            <label className="w-full" htmlFor="message">Descreva brevemente o seu projeto</label>
                            <textarea required maxLength="300" minLength="10" id="message" name="message"></textarea>
                        </div>
                        <div className="flex justify-center w-full py-2">
                            <HCaptcha sitekey="9fae15d1-e796-459c-ace5-44706715270a"/>
                        </div>
                        <input type="hidden" value="62f0652e125ebbabd2c85542" name="formkey" wfd-invisible="true"></input>
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
