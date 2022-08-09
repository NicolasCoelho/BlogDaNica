import Link from "next/link";

export default function Footer() {

    async function sendNewsletter(e) {
        e.preventDefault();
        const result = e.target.querySelector('#result')
        const name = e.target.querySelector('#name')
        const email = e.target.querySelector('#email')

        const payload = {
            name: name.value,
            email: email.value
        }
        result.innerHTML = "Enviando...";
        let response = await fetch('/api/newsletter', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })

        response = await response.json()
        if (response.success) {
            gtag('event', 'newsletter');
            name.value = "";
            email.value = "";
            result.innerHTML = 'Envio realizado com sucesso'
        } else {
            result.innerHTML = "Erro no envio! :( Tente novamente mais tarde"
        }
        setTimeout(function(){
            result.innerHTML = "";
        },4000);
    }

    return (
        <footer className="bg-primary text-white text-sm md:text-md lg:text-lg mt-10">
            <div className="container m-auto text-center py-8 sm:py-16">
                <h3 className="text-2xl md:text-3xl font-bold">Cadastre-se para receber Novidades</h3>
                <form className="md:max-w-[700px] m-auto" onSubmit={sendNewsletter}>
                    <div className="flex space-between w-full gap-x-20 flex-col md:flex-row py-8 sm:py-16">
                        <div className="inline-block text-left w-full md:w-1/2 my-2">
                            <label className="w-full font-bold" htmlFor="name">Nome Completo</label>
                            <input type="text" id="name" name="name" required minLength="4" maxLength="50"></input>
                        </div>
                        <div className="inline-block text-left w-full md:w-1/2 my-2">
                            <label className="w-full font-bold" htmlFor="email">E-Mail</label>
                            <input type="email" id="email" name="email" required minLength="6" maxLength="50"></input>
                        </div>
                    </div>
                    <button type="submit" className="secodary font-bold">Enviar</button>
                    <div className="w-full text-center text-white py-2">
                        <span id="result"></span>
                    </div>
                </form>
            </div>
            <div className="container m-auto text-center font-arial py-2">
                <strong>2022 &copy; Todos direitos reservados. </strong>
                <br></br>
                <Link href="/politica-de-privacidade"><a>Política de Privacidade</a></Link>
            </div>
        </footer>
    )
}