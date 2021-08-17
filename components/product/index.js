
export default function Product({...props}) { 
    
    return (
        <li className="product-inline">
            <a href={`${props.link}`} target="_BLANK" rel="noreferrer noopener">
                <div className="product-image">
                    <div className="product-image-wrapper">
                        <img src={props.thumbnail} alt={`${props.title}-imagem`}></img>
                    </div>
                </div>
                <div className="product-title">{props.name}</div>
                <div className="product-resume">{props.resume}</div>
                <div className="product-price">{props.price}</div>
                <button className="px-5 py-3 font-bold text-white bg-primary">Comprar</button>
            </a>
        </li>
    )
}