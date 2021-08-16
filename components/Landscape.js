import Image from "next/image"
import styles from "./../styles/components/Landscape.module.sass"

let isActive = false

export default function Landscape({active}) {
    if (active && !isActive)if (active) isActive = true

    return (
        <section className={[styles.landscape, "panel"].join(" ")} data-active={isActive}>
            <Image src="/img/bg/landscape.jpg" layout="fill" objectFit="cover" quality="100" className="zoom-in" priority={true} objectPosition="80% center" />

            <div className={styles.lettering}>
                <hr className="slide-in-bar" />
                <h2 className="fade-in-text">Cada tom, <wbr />uma história</h2>
                <p className="fade-in-text">Rua Leopoldo Fischer, 100</p>
            </div>
        </section>
    )
}