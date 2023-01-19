import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import ImageCard from '../components/image-card'
import Link from 'next/link'

export default function Servicos() {
    const baseUrl = "https://www.dicuoreorganiza.com.br"
    return (
    <>
      <Head>
        <title>Serviços | Dicuore Organiza</title>
        <meta name="description" content="Serviços de Personal Organizer com preços flexíveis e práticos."></meta>
        <meta property="og:title" content="Serviços | Dicuore Organiza"></meta>
        <meta property="og:description" content="Serviços de Personal Organizer com preços flexíveis e práticos."></meta>
        <meta property="og:url" content={`${baseUrl}/servicos`}></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:image" itemProp="image" content="https://www.dicuoreorganiza.com.br/favicon.png"></meta>
      </Head>
      <Header/>
      <main>
        <section className="relative h-[200px] md:h-[300px]">
            <div className="absolute w-full h-full z-20 flex flex-col justify-center text-center text-white">
                <h1 className="font-bold">Serviços</h1>
                <h2 className="text-xl md:text-3xl font-bold">Flexibilidade para qualquer projeto</h2>
            </div>
            <div className="shadow-bg"></div>
            <Image
                src="/images/cabides.jpg"
                alt="Por que"
                quality="70"
                layout="fill"
                objectFit="cover"
            />
        </section>
        <section className="container m-auto py-10">
            <ul className="image-grid">
                <ImageCard title="Quarto" desc="Organização de closets e guarda-roupas femininos, masculinos e infantis"  image="/images/room4.jpg"/>
                <ImageCard title="Cozinha" desc="Triagem e categorização de itens que incluem armários, despensa e louceiro"  image="/images/cozinha3.jpg"/>
                <ImageCard title="Banheiro" desc="Organização de produtos de acordo com necessidade, frequencia de uso e estoque"  image="/images/bathroom5.jpg"/>
                <ImageCard title="Escritório" desc="Organização de gavetas, armários e documentos espelhando ambiente profissional para melhor praticidade"  image="/images/office.jpg"/>
                <ImageCard title="Lavanderia" desc="Separação de itens por categoria e organização dos itens de limpeza e rouparia"  image="/images/bathroom2.jpg"/>
                <ImageCard title="Treinamento de funcionários" desc="Treinamento com foco em desempenho e manutenção do ambiente organizado"  image="/images/notes.jpg"/>
                <ImageCard title="Mudanças" desc="Planejamento de mudança residencial com acompanhamento em todas as etapas até a chegada do itens no novo local"  image="/images/clothes-hanger.jpg"/>
                <ImageCard title="Consultoria" desc="Consultoria online ou presencial com foco no cliente e comunicação aberta na solução do problema"  image="/images/why.jpg"/>
            </ul>
        </section>
        <section className="container m-auto py-10 flex flex-wrap gap-5 justify-between">
            <article className="plan-card">
                <h3>Te ajudo a se ajudar</h3>
                <div className="text-center">
                    <span className="text-sm">A partir de</span>
                    <br></br>
                    <strong className="text-2xl">R$ 199,00</strong>
                </div>
                <ul>
                    <span>Resumo</span>
                    <li>Organização de espaços menores</li>
                    <li>Ex: Organização de armários e gavetas</li>
                    <li>Ajuda operacional</li>
                    <li>Ajuste das técnicas às suas necessidades</li>
                    <li>Experiência mais econômica</li>
                    <li>Necessário levantamento técnico</li>
                </ul>
                <Link href="/contato" className="button text-center text-white">Eu quero</Link>
                <span className="text-xs">* Preço de referência. O valor final pode alterar de acordo com o projeto</span>
            </article>
            <article className="plan-card">
                <h3>Adeus bagunça</h3>
                <div className="text-center">
                    <span className="text-sm">A partir de</span>
                    <br></br>
                    <strong className="text-2xl">R$ 399,00</strong>
                </div>
                <ul>
                    <span>Resumo</span>
                    <li>Organização de um espaço completo</li>
                    <li>Adequação de produtos organizadores</li>
                    <li>Treinamento da pessoa responsável</li>
                    <li>Inclui kit de gabaritos para as dobras</li>
                    <li>Ambiente a escolha do cliente</li>
                    <li>Necessário levantamento técnico</li>
                </ul>
                <Link href="/contato" className="button text-center text-white">Eu quero</Link>
                <span className="text-xs">* Preço de referência. O valor final pode alterar de acordo com o projeto</span>
            </article>
            <article className="plan-card">
                <h3>Organiza minha vida</h3>
                <div className="text-center">
                    <span className="text-sm">A partir de</span>
                    <br></br>
                    <strong className="text-2xl">R$ 999,00</strong>
                </div>
                <ul>
                    <span>Resumo</span>
                    <li>Organização de dois ou mais espaços</li>
                    <li>Todos os itens dos planos anteriores</li>
                    <li>Planejamento completo</li>
                    <li>Pós mudança (sob consulta)</li>
                    <li>Visita de manutenção</li>
                    <li>Necessário levantamento técnico</li>
                </ul>
                <Link href="/contato" className="button text-center text-white">Eu quero</Link>
                <span className="text-xs">* Preço de referência. O valor final pode alterar de acordo com o projeto</span>
            </article>
        </section>
        <section className="container m-auto text-center">
            <h3 className="text-xl md:text-3xl font-bold pb-8">Planos customizados</h3>
            <div className="py-4 flex flex-wrap justify-between">
                <div className="w-full md:w-1/2 relative h-[200px] md:h-[400px]">
                    <Image
                        src="/images/toalha.jpg"
                        alt="Por que"
                        quality="70"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="w-full md:w-1/2 ">
                    <div className="md:w-3/4 pt-4 h-[250px] md:h-full m-auto flex items-center flex-col justify-around">
                        <p className="text-lg">Precisa de um serviço específico ou um plano customizado?</p>
                        <p className="text-lg">Entre em contato comigo! Tenho certeza que posso te ajudar.</p>
                        <p className="text-lg">Organize sua vida!</p>
                        <Link href="/contato" className="button text-center text-white">Entrar em contato</Link>
                    </div>    
                </div>
            </div>
        </section>    
      </main>
      <Footer/>
    </>
  )
}
