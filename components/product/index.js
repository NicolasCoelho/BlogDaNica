import Link from "next/link";

export default function Product({...props}) { 
    
    return (
        <li className="product-inline">
            <Link href={`/produto/${props.url}`}>
                <a>
                    <img src={props.thumbnail} alt={`${props.title}-imagem`}></img>
                    <div className="product-title">{props.name}</div>
                    <div>{props.resume}</div>
                    <div>{props.price}</div>
                    <div>Mais detalhes</div>
                </a>
            </Link>
        </li>
    )
}