import LightboxGallery from "./templates/LightboxGallery"
import Textbox from "./templates/Textbox"

import {Swiper, SwiperSlide} from 'swiper/react'

let isActive = false

export default function FirstTone({active}) {
    if (active && ! isActive) 
        isActive = true

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
                <section className="panel panel--centered"
                        data-active={isActive}>
                    <Textbox title="1º tom - sublime"
                        text={`261,23 m² 
                                        04 suítes 
                                        Elevador privativo 
                                        Sala íntima 
                                        Sacada gourmet 
                                        Living integrado`}
                        button={
                            {
                                text: "Tour 360",
                                onClick: () => {
                                    window.open("http://elephant-skin.live/opera/Living/index.html", "_blank")
                                }
                            }
                        }/>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className="panel"
                    data-active={isActive}>
                    <LightboxGallery cover={[{ url: "/img/tones/1/cover.jpg", alt: "Foto da sacada do apartamento Opera com churrasqueira" }]}
                        lightbox={[{ url: "/img/tones/1/full.jpg", alt: "Foto da sacada do apartamento Opera com churrasqueira" }]}
                        className="slide-in-left"
                        withArrow={true}/>
                </section>
            </SwiperSlide>
        </Swiper>
    )
}
