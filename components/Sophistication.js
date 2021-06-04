import Image from "next/image"
import styles from "./../styles/components/Sophistication.module.sass"
import { useEffect } from "react"
import Glide from "@glidejs/glide"

export default function Sophistication() {

    useEffect(() => {
        new Glide(".glide--sophistication", {
            gap: 0
        }).mount()
    })

    return (
        <section className={[styles.sophistication, "panel"].join(" ")}>
            <div className={styles.slider}>
                <div className="glide glide--sophistication glide--full-height">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                            <li className="glide__slide">
                                <Image src="/img/sliders/sophistication/1.jpg" layout="fill" objectFit="cover" alt="Foto do hall de entrada do empreendimento Opera à noite" loading="lazy" />
                            </li>
                            <li className="glide__slide">
                                <Image src="/img/sliders/sophistication/2.jpg" layout="fill" objectFit="cover" alt="Foto da fachada do empreendimento Opera à noite" loading="lazy" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.textbox}>
                <hr/>
                <div className={styles.content}>
                    <h2>Bem-vindo <br />à sofisticação</h2>
                </div>
            </div>
        </section>
    )
}