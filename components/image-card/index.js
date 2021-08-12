
import Image from 'next/image'

export default function ImageCard({...props}) { 
    function goToContato () {
        window.location.href = "contato";
    }
    
    return (
        <li onClick={goToContato}>
            <div className="content">
                <strong className="font-bold">{ props.title }</strong>
                <div className="desc">
                    <p className="font-semibold">{props.desc}</p>
                    <span className="absolute bottom-[20px] text-center text-sm">Entrar em contato</span>
                </div>
            </div>
            <div className="shadow-bg"></div>
            <Image
                src={props.image}
                alt="Por que"
                quality="70"
                layout="fill"
                objectFit="cover"
            />      
        </li>
    )
}