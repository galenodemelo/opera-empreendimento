import LightboxGallery from "./templates/LightboxGallery"
import Textbox from "./templates/Textbox"

import {Swiper, SwiperSlide} from 'swiper/react'

let isActive = false

export default function ThirdTone({active}) {
    if (active && !isActive) isActive = true

    return (
        <Swiper className="panel"
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
                <section className="panel panel--centered" data-active={isActive}>
                    <Textbox title="3º tom - ápice" 
                            text={`Duplex
                                    434,76 m² 
                                    5 suítes 
                                    Elevador privativo 
                                    Sala íntima 
                                    Living integrado 
                                    Sacada gourmet 
                                    2 unidades apenas (25º e 27º andar)`}/>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className="panel" data-active={isActive}>
                    <LightboxGallery cover={[{url: "/img/tones/3/cover.jpg", alt: "Foto da sacada do apartamento Opera com churrasqueira"}]}
                                    lightbox={[{url: "/img/tones/3/full-1.jpg", alt: "Foto da sacada do apartamento Opera com churrasqueira"},
                                                {url: "/img/tones/3/full-2.jpg", alt: "Foto da sala de estar do apartamento Opera"}]} 
                                    className="slide-in-left"
                                    withArrow={true} />
                </section>
            </SwiperSlide>
        </Swiper>
    )
}