import Image from "next/image"
import styles from "./../styles/components/Investcorp.module.sass"

export default function Investcorp() {
    return (
        <section className={[styles.investcorp, "panel"].join(" ")}>
            <div className={styles.background}>
                <Image src="/img/bg/maestro.jpg" layout="fill" objectFit="contain"/>
            </div>
            <div className={styles.text}>
                <p>Orquestramos em cada detalhe desse projeto a força e a imponência, em um roteiro digno de aclamação. O  projetamos para ser um marco e fazer florescer o que Joinville nunca viu.</p>
                <p>O prédio mais alto. Um novo tom para a cidade.</p>
                <p>Um projeto inteligente, rodeado de altas notas de tecnologia que envolve o público e encanta investidores e clientes que o escolheram para chamar de lar.</p>
                <p>Opera é uma sinestesia, seu ambiente diferenciado desperta o desejo de se sentir parte daquele enredo, que carrega consigo o conforto e a segurança de um ambiente exclusivo e planejado para contemplar os mais exigentes espectadores.</p>
                <Image src="/img/logo-investcorp.png" width="298" height="169"/>
            </div>
        </section>
    )
}