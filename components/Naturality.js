import Image from "next/image"
import styles from "./../styles/components/Naturality.module.sass"

export default function Naturality() {
    return (
        <section className={[styles.naturality, "panel"].join(" ")}>
            <div className={styles.textbox}>
                <hr/>
                <div className={styles.content}>
                    <h2>A naturalidade</h2>
                </div>
            </div>
            <div className={styles.picture}>
                <Image src="/img/bg/naturality.jpg" layout="fill" objectFit="cover" loading="lazy"/>
            </div>
        </section>
    )
}