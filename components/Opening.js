import { useEffect, useRef } from "react"
import styles from "./../styles/components/Opening.module.sass"

export default function Opening({setIsSoundActive}) {
    const videoPlayer = useRef()
    const section = useRef()

    useEffect(() => {
        setTimeout(() => {
            section.current.classList.add(styles["opening--expanded"])
        }, 5000)
    })

    return (
        <section className={[styles.opening, "panel"].join(" ")} ref={section}>
            <h1>
                <img src="/img/logo-motion.gif" className={styles.logo} alt="Ópera Empreendimento" role="banner" />
            </h1>

            <nav className={styles.menu}>
                <h6>Sound experience</h6>

                <button onClick={() => setIsSoundActive(false)} className="swiper-button-next">No</button>
                <button onClick={() => setIsSoundActive(true)} className="swiper-button-next">Yes</button>
            </nav>
        </section>
    )
}
