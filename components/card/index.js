import Link from "next/link"
import formatDate from "../../util/formatDate"

export default function Card(props) {

    function getThumb() {
        return `url("${props.thumbnail}")`
    }
    return (
        <>
            <div className="flex post-card w-auto flex-col sm:flex-row">
                <div className="w-full h-72 sm:h-auto sm:w-5/12 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: getThumb() }}>
                </div>
                <article className="w-full sm:w-7/12 p-8 h-auto border border-gray-300">
                    <header>
                        <time className="text-sm capitalize">{ formatDate(props.createdAt, 2) }</time>
                        <h3 className="text-2xl font-bold my-4 sm:my-6 "> <Link href={`/post/${props.url}`}><a>{props.title}</a></Link></h3>
                    </header>
                    <main>
                        <p> 
                            {props.resume}
                        </p>
                    </main>
                </article>
            </div>
        </>
    )
}