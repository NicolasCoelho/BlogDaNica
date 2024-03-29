import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

export default function PoliticaDePrivacidade() {
    const baseUrl = "https://www.dicuoreorganiza.com.br"
    return (
        <>
            <Head>
                <title>Política de Privacidade | Dicuore Organiza</title>
                <meta property="og:title" content="Política de Privacidade | Dicuore Organiza"></meta>
                <meta property="og:description" content="Política de privacidade de Dicuore Organiza"></meta>
                <meta property="og:url" content={`${baseUrl}/politica-de-privacidade`}></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:image" itemProp="image" content="https://www.dicuoreorganiza.com.br/favicon.png"></meta>
            </Head>
            <Header/>
            <main className="container m-auto text-center">
                <h1 className="m-10">Política de Privacidade</h1>
                <div className="max-w-[500px] m-auto text-justify">
                    <p>A Pol&iacute;tica de Privacidade On-Line do site <strong>Dicuore Organiza</strong> (https://dicuoreoraganiza.com.br) foi criada para respeitar a LGPD (<a href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709.htm" target="_blank" rel="noopener">Lei Geral de Prote&ccedil;&atilde;o de Dados</a>) e afirmar o nosso compromisso com a seguran&ccedil;a e a privacidade das informa&ccedil;&otilde;es coletadas dos visitantes de nosso site. Esta pol&iacute;tica est&aacute; sujeita a eventuais atualiza&ccedil;&otilde;es e recomendamos que ela seja consultada periodicamente. Voc&ecirc; pode <a href="https://dicuoreorganiza.com.br/" target="_blank" rel="noopener">visitar nosso site</a> e conhecer nossos servi&ccedil;os e produtos, verificar nossas ofertas, ler artigos, obter informa&ccedil;&otilde;es e suporte sem precisar fornecer nenhuma informa&ccedil;&atilde;o pessoal. Mas, caso isso aconte&ccedil;a, esta pol&iacute;tica procura esclarecer como coletamos e tratamos seus dados pessoais.</p>
                    <p><br></br></p>
                    <h2>Como tratamos os dados</h2>
                    <ol>
                        <li>Qualquer informa&ccedil;&atilde;o fornecida pelos usu&aacute;rios ser&aacute; coletada e guardada de acordo com os padr&otilde;es atuais de seguran&ccedil;a e confiabilidade.</li>
                        <li>Utilizamos em nosso site o protocolo padr&atilde;o HTTPS que garante que todas as informa&ccedil;&otilde;es coletadas dos usu&aacute;rios trafeguem de forma segura, utilizando processo de criptografia padr&atilde;o da Internet.</li>
                        <li>As informa&ccedil;&otilde;es pessoais que nos forem fornecidas ser&atilde;o coletadas por meios legais. Essa coleta ter&aacute; o prop&oacute;sito de comunica&ccedil;&atilde;o comercial para que possamos vender nossos servi&ccedil;os, produtos, prestar suporte a atendimento sobre eles.</li>
                        <li>A menos que tenhamos determina&ccedil;&atilde;o legal ou judicial, as informa&ccedil;&otilde;es dos usu&aacute;rios jamais ser&atilde;o fornecidas a terceiros ou usadas para finalidades diferentes daquelas para as quais foram coletadas.</li>
                        <li>O acesso as informa&ccedil;&otilde;es coletadas est&aacute; restrito apenas aos gestores da <strong>Dicuore Organiza</strong> e manteremos a integridade das informa&ccedil;&otilde;es que nos forem fornecidas.</li>
                        <li>Eventualmente, poderemos utilizar cookies (*) para confirmar sua identidade, personalizar seu acesso e acompanhar a utiliza&ccedil;&atilde;o de nosso website visando o aprimoramento de sua navega&ccedil;&atilde;o e funcionalidade.</li>
                        <li>Colocamos &agrave; disposi&ccedil;&atilde;o de nossos usu&aacute;rios, canais de atendimento ao cliente, para esclarecer qualquer d&uacute;vida que possa surgir referente aos seus dados. Estes canais podem ser acionados atrav&eacute;s do e-mail <a href="mailto:dicuoreorganiza@gmail.com">dicuoreorganiza@gmail.com</a> ou do nosso <a href="https://www.dicuoreorganiza.com.br/contato">Formul&aacute;rio de contato</a>.</li>
                    </ol>
                    <p><br></br></p>
                    <h2>Como coletamos os dados</h2>
                    <ul>
                        <li>Atrav&eacute;s dos rastreadores e cookies dos servi&ccedil;os de marketing e SEO da <strong>Google</strong>. Estas ferramentas coletam dados an&ocirc;nimos como a sua localiza&ccedil;&atilde;o, seu IP, rastreia a navega&ccedil;&atilde;o e analisa o seu comportamento em nosso site a fim de nos fornecer relat&oacute;rios sobre os servi&ccedil;os e produtos que voc&ecirc; procurou e qual a origem da sua visita; pesquisa do Google, acesso direto ou link existente em outro site, a <strong>Dicuore Organiza</strong> respeita a <a href="https://policies.google.com/privacy?hl=pt-BR" target="_blank" rel="noopener">pol&iacute;tica de privacidade da Google</a>, para mais informa&ccedil;&otilde;es leia a Pol&iacute;tica diretamente no site da Google.</li>
                        <li><strong>WhatsApp.</strong> O visitante ao acionar o bot&atilde;o do WhatsApp disponibilizado em nosso site dever&aacute; ter ci&ecirc;ncia de que teremos acesso ao seu nome e n&uacute;mero de celular, podendo a <strong>Dicuore Organiza</strong> armazenar esta informa&ccedil;&atilde;o para contatos comerciais futuros. Voc&ecirc; poder&aacute; bloquear nosso contato caso n&atilde;o julgue conveniente e/ou solicitar a remo&ccedil;&atilde;o de nossa lista de contatos do WhatsApp.</li>
                        <li><strong>Inscri&ccedil;&atilde;o em nossa NewsLetter.</strong> Esta &eacute; uma ferramenta de e-mail marketing, ela coleta o seu e-mail desde que voc&ecirc; aceite e informe seu e-mail no formul&aacute;rio de inscri&ccedil;&atilde;o. Ao aceitar participar da nossa lista de contatos, poderemos enviar ofertas, promo&ccedil;&otilde;es, avisos e mensagens de felicita&ccedil;&otilde;es. Voc&ecirc; pode solicitar a remo&ccedil;&atilde;o de seu e-mail acessando nossa <a href="https://www.dicuoreorganiza.com.br/unsubscribe" target="_blank" rel="noopener">p&aacute;gina de Unsubscribe</a> ou pode enviar um e-mail para <a href="mailto:dicuoreorganiza@gmail.com">dicuoreorganiza@gmail.com</a> ou acessar o nosso <a href="https://www.dicuoreorganiza.com.br/contato">formul&aacute;rio de contato</a> solicitando sua remo&ccedil;&atilde;o.</li>
                    </ul>
                    <p><br></br></p>
                    <h2>Consentimento ou Bloqueio de Cookies</h2>
                    <p>Para que os recursos de coleta de dados em nosso site funcione adequadamente &eacute; necess&aacute;rio o uso de cookies (pequenos arquivos de texto que podem definir prefer&ecirc;ncias). Os cookies n&atilde;o s&atilde;o programas, n&atilde;o roubam dados de seu computador e n&atilde;o colocam a sua navega&ccedil;&atilde;o em risco, no entanto, &eacute; de seu direito bloquear nossos cookies caso queira. Para saber como proceder, pesquise externamente ou entre e em contato conosco.</p>
                    <p><br></br></p>
                    <h2>Seus Direitos</h2>
                    <p>Voc&ecirc; tem os seguintes direitos:</p>
                    <ul>
                    <li>O direito de bloquear qualquer tipo de rastreador e cookie gerado em nosso site de modo a n&atilde;o compartilhar nenhum tipo de informa&ccedil;&atilde;o sobre a sua conex&atilde;o e acesso ao nosso site.</li>
                    <li>O direito de nos pedir para atualizar qualquer informa&ccedil;&atilde;o pessoal incorreta de que temos sobre voc&ecirc;.</li>
                    <li>O direito de optar por sair de quaisquer meios de comunica&ccedil;&atilde;o comercial e de marketing.</li>
                    <li>O direito de pedir a remo&ccedil;&atilde;o de qualquer dado pessoal que tenhamos armazenado sobre voc&ecirc;.</li>
                    </ul>
                    <p>Reservamos o prazo de 5 dias &uacute;teis para lhe responder sobre qualquer contato referente aos seus dados pessoais, podendo este prazo ser estendido em per&iacute;odo de festas, feriados prolongados, recesso e f&eacute;rias coletivas.</p>
                    <p><br></br><em> Esta pol&iacute;tica de Privacidade foi atualizada em 10/08/2021<em> </em></em></p>
                </div>
            </main>
            <Footer/>
        </>
    )
}
