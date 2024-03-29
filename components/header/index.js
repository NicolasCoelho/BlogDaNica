import Link from 'next/link'

export default function Header() {

    function toogleMenu() {
        window.scrollTo(0,0);
        document.body.style.overflow === 'hidden' ? document.body.style.overflow = 'initial' : document.body.style.overflow = 'hidden';
        document.querySelector('#menu').classList.toggle('mobile-menu-oppened');
    }

    function closeMenu() {
        document.body.style.overflow = 'initial';
        document.querySelector('#menu').classList.remove('mobile-menu-oppened');
    }

    return (
        <header className="bg-gray-100 w-full z-50 min-h-[112px]">
            <div className="m-auto flex justify-between items-center h-28 container">
                <div className="w-full md:w-1/5">
                    <div className="font-bold font-play text-2xl"><Link href="/">Dicuore Organiza</Link></div>
                </div>
                <nav id='menu' className="fixed transition-all duration-300 z-50 h-full bg-primary top-[112px] right-[-100%] md:h-auto md:top-0 md:bg-transparent md:sticky w-full md:w-3/6 lg:w-2/6">
                    <ul className="flex flex-col w-full justify-between justify-items-center gap-y-10 font-semibold text-lg md:text-md md:flex-row my-10">
                        <li className="text-center md:text-left"><Link href="/servicos" onClick={() => closeMenu()} className="text-white md:text-black md:hover:text-primary">Serviços</Link></li>
                        <li className="text-center md:text-left"><Link href="/posts" onClick={() => closeMenu()} className="text-white md:text-black md:hover:text-primary">Posts</Link></li>
                        <li className="text-center md:text-left"><Link href="/produtos" onClick={() => closeMenu()} className="text-white md:text-black md:hover:text-primary">Produtos</Link></li>
                        <li className="text-center md:text-left"><Link href="/contato" onClick={() => closeMenu()} className="text-white md:text-black md:hover:text-primary">Contato</Link></li>
                    </ul>
                    <div className="flex md:hidden w-9/12 m-auto text-xl text-white font-bold justify-around justify-items-center">
                        <a href="https://www.instagram.com/dicuoreorganiza/" target="_blank" rel="noreferrer noopener"><i className="fab fa-instagram hover:text-primary"></i></a>
                        <a href="https://www.facebook.com/dicuoreorganizza" target="_blank" rel="noreferrer noopener"><i className="fab fa-facebook-f hover:text-primary"></i></a>
                        <a href="https://pin.it/2RyQkTO" target="_blank" rel="noreferrer noopener"><i className="fab fa-pinterest-p hover:text-primary"></i></a>
                        <a href="https://api.whatsapp.com/send?phone=5551982033056" target="_blank" rel="noreferrer noopener"><i className="fab fa-whatsapp hover:text-primary"></i></a>
                    </div>
                </nav>
                <div className="hidden md:flex w-1/3 md:w-1/5 text-xl font-bold justify-around justify-items-center">
                    <a href="https://www.instagram.com/dicuoreorganiza/" target="_blank" rel="noreferrer noopener"><i className="fab fa-instagram hover:text-primary"></i></a>
                    <a href="https://www.facebook.com/dicuoreorganizza" target="_blank" rel="noreferrer noopener"><i className="fab fa-facebook-f hover:text-primary"></i></a>
                    <a href="https://pin.it/2RyQkTO" target="_blank" rel="noreferrer noopener"><i className="fab fa-pinterest-p hover:text-primary"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=5551982033056" target="_blank" rel="noreferrer noopener"><i className="fab fa-whatsapp hover:text-primary"></i></a>
                </div>
                <div className="block md:hidden">
                    <div onClick={toogleMenu} className="bg-tranparent border-none text-2xl focus:outline-none active:text-primary">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </div>
        </header>
    )
}