import Image from "next/image"
import styles from "./../styles/components/Landscape.module.sass"

export default function Landscape() {
    return (
        <section className={[styles.landscape, "panel"].join(" ")}>
            <Image src="/img/bg/landscape.jpg" layout="fill" objectFit="cover" loading="lazy" />

            <div className={styles.lettering}>
                <hr />
                <h2>Cada tom, uma história</h2>
                <p>Rua Leopoldo Fischer, 100</p>
            </div>
        </section>
    )
}