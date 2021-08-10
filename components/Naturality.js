import Image from "next/image"
import styles from "./../styles/components/Naturality.module.sass"

let isActive = false

export default function Naturality({active}) {
    if (active && !isActive) isActive = true

    return (
        <section className={[styles.naturality, "panel"].join(" ")} data-active={isActive}>
            <div className={styles.textbox}>
                <hr className="slide-in-bar" />
                <div className={styles.content}>
                    <h2 className="fade-in-text">A naturalidade</h2>
                </div>
            </div>
            <div className={styles.picture}>
                <Image src="/img/bg/naturality.jpg" layout="fill" objectFit="contain" objectPosition="top right" className="zoom-in"/>
            </div>
        </section>
    )
}