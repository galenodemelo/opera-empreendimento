import { useState } from "react"
import styles from "./../styles/components/Navigation.module.sass"

export default function NavMenu() {
    const [isMenuOpened, setMenuOpened] = useState(false)

    const menuLinksList = [
        {title: "Cada tom, uma história"},
        {title: "A tradição contemporânea"},
        {title: "A sofisticação"},
        {title: "A naturalidade"},
        {title: "Ícones residências suspensas"},
        {title: "Investcorp"},
        {title: "Contato"}
    ]

    const playSound = (number) => {
        const audio = new Audio(`/audio/menu/${number}.mp3`)
        audio.play()
    }

    return (
        <div className={styles.navigation}>
            <button className={styles.opener} onClick={() => setMenuOpened(true)}>
                <img src="/img/ico/menu.svg" alt="Ícone para abrir o menu" title="Abrir menu" />
            </button>

            <div className={styles.menu} data-opened={isMenuOpened}>
                <button className={styles.close} onClick={() => setMenuOpened(false)}>
                    <img src="/img/ico/close.svg" alt="Ícone para fechar o menu" title="Fechar menu" />
                </button>
                
                <nav className={styles.links}>
                    {menuLinksList.map((menuLink, index) => {
                        return (
                            <a href="#" data-sfx={++index} key={index} onMouseOver={() => { playSound(index) }}>
                                {menuLink.title}
                            </a>
                        )
                    })}
                </nav>

                <div className={styles.social}>
                    <a href="https://www.instagram.com/investcorp/" target="_blank" rel="noopener noreferrer">
                        <img src="/img/ico/instagram.svg" alt="Ícone do Instagram" title="Siga-nos no Instagram" />
                    </a>
                    <a href="https://pt-br.facebook.com/InvestcorpEmpreendimentos" target="_blank" rel="noopener noreferrer">
                        <img src="/img/ico/facebook.svg" alt="Ícone do Facebook" title="Curta nossa página no Facebook" />
                    </a>
                </div>
            </div>
        </div>
    )
}