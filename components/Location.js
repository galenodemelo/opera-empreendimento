import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import LightboxGallery from "./templates/LightboxGallery";
import Textbox from "./templates/Textbox";

let isActive

export default function Location({active}) {
    if (active && !isActive) isActive = true

    const [isLightboxOpened, setIsLightboxOpened] = useState(false)
    const [lightboxActiveIndex, setLightboxActiveIndex] = useState(0)

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
            }}>

            <SwiperSlide>
                <section className="panel panel--centered" data-active={isActive}>
                    <Textbox title={`A tradição 
                                contemporânea`}
                        text="A tradição anda lado a lado com um roteiro clássico que alinha a tranquilidade de viver em um bairro nobre com as facilidades e modernidades de um empreendimento inteligente. Que tangencia uma verdadeira obra de arte e valoriza cada tom dessa história."
                        button={
                            {
                                text: "Localização",
                                onClick: () => {
                                    setIsLightboxOpened(true)
                                    setLightboxActiveIndex(1)
                                }
                            }
                        }/>
                </section>
            </SwiperSlide>

            <SwiperSlide>
                <section className="panel" data-active={isActive}>
                    <LightboxGallery cover={
                            [
                                {
                                    url: "/img/sliders/tradition/daytime-building.jpg",
                                    alt: "Foto da fachada do empreendimento Opera de manhã"
                                }, {
                                    url: "/img/sliders/tradition/nighttime-building.jpg",
                                    alt: "Foto da fachada do empreendimento Opera à noite"
                                }
                            ]
                        }
                        lightbox={
                            [
                                {
                                    url: "/img/location/landscape.jpg",
                                    alt: "Empreendimento Ópera com paisagem de florestas ao fundo"
                                }, {
                                    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.6112293543874!2d-48.86040168520028!3d-26.30670038339233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb0404eef8ce3%3A0xbfe181e7a433c96c!2sR.%20Leopoldo%20Fischer%2C%20100%20-%20Atiradores%2C%20Joinville%20-%20SC%2C%2089203-077!5e0!3m2!1spt-BR!2sbr!4v1628196873551!5m2!1spt-BR!2sbr"
                                }
                            ]
                        }
                        className="slide-in-left"
                        isLightboxOpened={isLightboxOpened}
                        setIsLightboxOpened={setIsLightboxOpened}
                        lightboxActiveIndex={lightboxActiveIndex}
                        setLightboxActiveIndex={setLightboxActiveIndex} />
                </section>
            </SwiperSlide>
        </Swiper>
    )
}
