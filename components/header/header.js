import Image from 'next/image'
import styles from './header.module.scss'
import { faInstagram, faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
  return (
    <>
      <header className={styles.header}>  
        <article className="container">
          <div className={styles.headerSocial}>
            <FontAwesomeIcon icon={faInstagram} className="icon" size="2x"/>
            <FontAwesomeIcon icon={faFacebookF} className="icon"/>
          </div>
          <Image
            src="/images/logo.png"
            height={150}
            width={150}
            alt="Nicole Coelho Organizer"
          />
          <div className={styles.headerSocial}>
            <FontAwesomeIcon icon={faWhatsapp} className="icon"/>
            <FontAwesomeIcon icon={faMapMarker} className="icon"/>
          </div>    
        </article>
        <nav className="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
          <ul className="container">
              <li>Dicas</li>
              <li>Blog</li>
              <li>Produtos</li>
              <li>Items de organização</li>
              <li>Serviços</li>
          </ul>
        </nav>
      </header>
    </>
  )
}