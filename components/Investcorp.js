import Image from "next/image"
import { useEffect, useRef } from "react"
import styles from "./../styles/components/Investcorp.module.sass"

import {Swiper, SwiperSlide} from 'swiper/react'

let isActive = false

export default function Investcorp({active}) {
    if (active && !isActive) isActive = true

    const videoPlayer = useRef()

    useEffect(() => {
        if (isActive) {
            videoPlayer.current.play()
        } else {
            videoPlayer.current.pause()
        }

    })

    return (
        <Swiper className="panel"
            direction="vertical"
            shortSwipes={true}
            slidesPerView={1}
            speed={1000}
            breakpoints={{
                1080: {
                    direction: "horizontal",
                    slidesPerView: 2
                }
            }}
        >
            <SwiperSlide>
                <section className={["panel", styles.investcorp].join(" ")} data-active={isActive}>
                    <video muted={true} controls={false} className={styles.background} ref={videoPlayer}>
                        <source src="/videos/maestro.webm" type="video/webm"/>
                        <source src="/videos/maestro.mp4" type="video/mp4"/>
                    </video>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className={["panel", "panel--centered", styles.investcorp].join(" ")} data-active={isActive}>
                    <div className={[styles.text, "fade-in-text"].join(" ")}>
                        <p>Orquestramos em cada detalhe desse projeto a força e a imponência, em um roteiro digno de aclamação. O  projetamos para ser um marco e fazer florescer o que Joinville nunca viu.</p>
                        <p>O prédio mais alto. Um novo tom para a cidade.</p>
                        <p>Um projeto inteligente, rodeado de altas notas de tecnologia que envolve o público e encanta investidores e clientes que o escolheram para chamar de lar.</p>
                        <p>Opera é uma sinestesia, seu ambiente diferenciado desperta o desejo de se sentir parte daquele enredo, que carrega consigo o conforto e a segurança de um ambiente exclusivo e planejado para contemplar os mais exigentes espectadores.</p>
                    </div>
                    <div className={styles.logo}>
                        <Image src="/img/logo-investcorp.png" layout="fill" objectFit="contain" />
                    </div>
                </section>
            </SwiperSlide>
        </Swiper>
    )
}