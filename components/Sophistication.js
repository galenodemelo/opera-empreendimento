import { Swiper, SwiperSlide } from 'swiper/react';
import PictureSlider from "./templates/PictureSlider"
import styles from "./../styles/components/Sophistication.module.sass"
import Textbox from './templates/Textbox';

let isActive = false

export default function Sophistication({active}) {
    if (active && !isActive) isActive = true

    return (
        <Swiper 
            className="panel"
            direction="vertical"
            dir="rtl"
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
                <section className={[styles.sophistication, "panel", "panel--centered"].join(" ")} data-active={isActive}>
                    <Textbox title={`Bem-vindo 
                                    à sofisticação`} />
                </section>
            </SwiperSlide>

            <SwiperSlide>
                <section className="panel" data-active={isActive}>
                    <PictureSlider imageList={[{url: "/img/sliders/sophistication/1.jpg", alt: "Foto do hall de entrada do empreendimento Opera à noite"},
                                            {url: "/img/sliders/sophistication/2.jpg", alt: "Foto da fachada do empreendimento Opera à noite"}]} />

                </section>
            </SwiperSlide>
        </Swiper>
    )
}