
import Image from 'next/image'

export default function ImageCard({...props}) { 
    function goToContato () {
        window.location.href = "contato";
    }
    
    return (
        <li onClick={goToContato}>
            <div className="content">
                <strong>{ props.title }</strong>
                <div className="desc">
                    <p>{props.desc}</p>
                    <span className="absolute bottom-[20px] text-center text-sm">Entrar em contato</span>
                </div>
            </div>
            <div className="shadow-bg"></div>
            <Image
                src={props.image}
                alt="Por que"
                quality="100"
                layout="fill"
                objectFit="cover"
            />      
        </li>
    )
}