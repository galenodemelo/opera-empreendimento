import Image from "next/image"
import styles from "./../styles/components/Location.module.sass"
import { useEffect } from "react"
import Glide from "@glidejs/glide"

export default function Location() {

    useEffect(() => {
        new Glide(".glide", {
            gap: 0
        }).mount()
    })

    return (
        <section className={[styles.location, "panel"].join(" ")}>
            <div className={styles.slider}>
                <div className="glide glide--full-height">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                            <li className="glide__slide">
                                <Image src="/img/sliders/tradition/daytime-building.jpg" layout="fill" objectFit="cover" alt="Foto da fachada do empreendimento Opera de manhã" loading="lazy" />
                            </li>
                            <li className="glide__slide">
                                <Image src="/img/sliders/tradition/nighttime-building.jpg" layout="fill" objectFit="cover" alt="Foto da fachada do empreendimento Opera à noite" loading="lazy" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.textbox}>
                <hr/>
                <div className={styles.content}>
                    <h2>A tradição <br />contemporânea</h2>
                    <p>A tradição anda lado a lado com um roteiro clássico que alinha a tranquilidade de viver em um bairro nobre com as facilidades e modernidades de um empreendimento inteligente. Que tangência uma verdadeira obra de arte e valoriza cada tom dessa história.</p>
                    <button>
                        <span>Localização</span>
                    </button>
                </div>
            </div>
        </section>
    )
}