import { useEffect, useRef } from "react"
import styles from "./../styles/components/Opening.module.sass"

export default function Opening({setIsSoundActive}) {
    const videoPlayer = useRef()
    const section = useRef()

    useEffect(() => {
        videoPlayer.current.addEventListener("ended", () => {
            section.current.classList.add(styles["opening--expanded"])
        })
    })

    return (
        <section className={[styles.opening, "panel"].join(" ")} ref={section}>
            <h1>
                <video muted={true} controls={false} className={styles.logo} autoPlay={true} ref={videoPlayer}>
                    <source src="/videos/logo.webm" type="video/webm"/>
                    <source src="/videos/logo.mp4" type="video/mp4"/>
                    <img src="/img/logo.svg" alt="Opera - Um empreendimento Investcorp" className={styles.logo} />
                </video>
            </h1>

            <nav className={styles.menu}>
                <h6>Sound experience</h6>

                <button onClick={() => setIsSoundActive(false)} className="swiper-button-next">No</button>
                <button onClick={() => setIsSoundActive(true)} className="swiper-button-next">Yes</button>
            </nav>
        </section>
    )
}
