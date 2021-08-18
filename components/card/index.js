import { useRouter } from 'next/router'
import formatDate from "../../util/formatDate"

export default function Card(props) {
    const router = useRouter()

    function goTo (){
        router.push(`/post/${props.url}`)
    }

    function getThumb() {
        return `url("${props.thumbnail}")`
    }
    return (
        <article className="flex post-card w-auto flex-col sm:flex-row" onClick={goTo}>
            <figure className="w-full h-72 sm:h-auto sm:w-5/12 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: getThumb() }}></figure>
            <div className="w-full sm:w-7/12 p-8 h-auto border border-gray-300 text-center sm:text-left">
                <header>
                    <time className="text-sm capitalize">{ formatDate(props.createdAt, 2) }</time>
                    <h3 className="text-2xl font-bold my-4 sm:my-6 ">{props.title}</h3>
                </header>
                <p> 
                    {props.resume}
                </p>
            </div>
        </article>
    )
}