import LightboxGallery from "./templates/LightboxGallery"
import Textbox from "./templates/Textbox"

import {Swiper, SwiperSlide} from 'swiper/react'

let isActive = false

export default function SecondTone({active}) {
    if (active && !isActive) isActive = true

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
                <section className="panel panel--centered" data-active={isActive}>
                    <Textbox title="2º tom - exímio" 
                            text={`199,61 m²
                                    03 suítes
                                    Elevador social privativo
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
                <section className="panel" data-active={isActive}>
                    <LightboxGallery cover={[{url: "/img/tones/2/cover.jpg", alt: "Foto da sacada do apartamento Opera com churrasqueira"}]}
                                    lightbox={[{url: "/img/tones/2/full.jpg", alt: "Foto da sacada do apartamento Opera com churrasqueira"}]} 
                                    className="slide-in-right"
                                    anchor="right"
                                    withArrow={true} />
                </section>
            </SwiperSlide>
        </Swiper>
    )
}