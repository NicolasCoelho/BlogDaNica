import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import ImageCard from '../components/image-card'
import Link from 'next/link'

export default function Servicos() {
  return (
    <>
      <Head>
        <title>Serviços | Dicuore Organizza</title>
      </Head>
      <Header/>
      <main>
        <section className="relative h-[200px] md:h-[300px]">
            <div className="absolute w-full h-full z-20 flex flex-col justify-center text-center text-white">
                <h1 className="text-xl md:text-4xl">Flexibilidade para qualquer projeto</h1>
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
                <h3>Plano 1</h3>
                <div className="text-center">
                    <span className="text-sm">A partir de</span>
                    <br></br>
                    <strong className="text-2xl">R$ 280,00</strong>
                </div>
                <ul>
                    <span>Itens Inclusos</span>
                    <li>Organizaçao basica</li>
                    <li>Ajuste de armarios</li>
                    <li>Cozinha</li>
                    <li>Quartos</li>
                    <li>Biblioteca ate 2009 livros</li>
                    <li>etc</li>
                </ul>
                <Link href="/contato"><a className="button text-center text-white">Eu quero</a></Link>
                <span className="text-xs">* Preço de referência. O valor final pode alterar de acordo com o projeto</span>
            </article>
            <article className="plan-card">
                <h3>Plano 1</h3>
                <div className="text-center">
                    <span className="text-sm">A partir de</span>
                    <br></br>
                    <strong className="text-2xl">R$ 280,00</strong>
                </div>
                <ul>
                    <span>Itens Inclusos</span>
                    <li>Organizaçao basica</li>
                    <li>Ajuste de armarios</li>
                    <li>Cozinha</li>
                    <li>Quartos</li>
                    <li>Biblioteca ate 2009 livros</li>
                    <li>etc</li>
                </ul>
                <Link href="/contato"><a className="button text-center text-white">Eu quero</a></Link>
                <span className="text-xs">* Preço de referência. O valor final pode alterar de acordo com o projeto</span>
            </article>
            <article className="plan-card">
                <h3>Plano 1</h3>
                <div className="text-center">
                    <span className="text-sm">A partir de</span>
                    <br></br>
                    <strong className="text-2xl">R$ 280,00</strong>
                </div>
                <ul>
                    <span>Itens Inclusos</span>
                    <li>Organizaçao basica</li>
                    <li>Ajuste de armarios</li>
                    <li>Cozinha</li>
                    <li>Quartos</li>
                    <li>Biblioteca ate 2009 livros</li>
                    <li>etc</li>
                </ul>
                <Link href="/contato"><a className="button text-center text-white">Eu quero</a></Link>
                <span className="text-xs">* Preço de referência. O valor final pode alterar de acordo com o projeto</span>
            </article>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export async function getServerSideProps() {
    return {
        props: {}
    }
}