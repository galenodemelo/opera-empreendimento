import Image from "next/image"
import styles from "./../styles/components/Ballerina.module.sass"

export default function Ballerina() {
    return (
        <section className={[styles.ballerina, "panel"].join(" ")}>
            <div className={styles.subject}>
                <Image src="/img/ballerina.jpg" layout="fill" objectFit="contain" priority="true" />
            </div>
        </section>
    )
}