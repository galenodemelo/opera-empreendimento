import Image from "next/image"
import styles from "./../styles/components/Sophistication.module.sass"
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Sophistication() {

    return (
        <section className={[styles.sophistication, "panel"].join(" ")}>
            <div className={styles.slider}>
                <Swiper className="panel">
                    <SwiperSlide>
                        <Image src="/img/sliders/sophistication/1.jpg" layout="fill" objectFit="cover" alt="Foto do hall de entrada do empreendimento Opera à noite" loading="lazy" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="/img/sliders/sophistication/2.jpg" layout="fill" objectFit="cover" alt="Foto da fachada do empreendimento Opera à noite" loading="lazy" />
                    </SwiperSlide>
                </Swiper>
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