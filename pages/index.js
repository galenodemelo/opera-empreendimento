import Ballerina from "../components/Ballerina"
import Head from "next/head"
import Image from "next/image"
import MusicPlayer from "../components/MusicPlayer"
import NavMenu from "../components/NavMenu"
import Opening from "../components/Opening"

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { HashNavigation, Mousewheel, Navigation } from "swiper"

import dynamic from "next/dynamic"
import { useState } from "react"

export default function Home(props) {
    const [isSoundActive, setIsSoundActive] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    
    const ConceptVideo = dynamic(() => import("./../components/ConceptVideo"))
    const Contact = dynamic(() => import("./../components/Contact"))
    const FirstTone = dynamic(() => import("./../components/FirstTone"))
    const Investcorp = dynamic(() => import("./../components/Investcorp"))
    const Landscape = dynamic(() => import("./../components/Landscape"))
    const Location = dynamic(() => import("./../components/Location"))
    const Naturality = dynamic(() => import("./../components/Naturality"))
    const PictureSlider = dynamic(() => import("./../components/templates/PictureSlider"))
    const Plans = dynamic(() => import("./../components/Plans"))
    const SecondTone = dynamic(() => import("./../components/SecondTone"))
    const Sophistication = dynamic(() => import("./../components/Sophistication"))
    const ThirdTone = dynamic(() => import("./../components/ThirdTone"))


    SwiperCore.use([HashNavigation, Mousewheel, Navigation])

    return (
        <>
            <Head>
                <title>Opera: Cada tom, uma história | Investcorp Empreendimentos</title>
            </Head>

            {activeIndex > 0 &&
                <>
                    <NavMenu currentSlide={activeIndex}/>
                    <MusicPlayer currentSlide={activeIndex} isSoundActive={isSoundActive} setIsSoundActive={setIsSoundActive} />
                </>
            }
            
            <Swiper className="panel main-swiper"
                    direction="vertical"
                    hashNavigation={{watchState: true}}
                    shortSwipes={true}
                    mousewheel={true}
                    navigation={{nextEl: ".swiper-button-next"}}
                    onSlideChange={(evt) => setActiveIndex(evt.activeIndex)}
                    slidesPerView={1}
                    speed={1000}
                    breakpoints={{
                        1080: {
                            shortSwipes: false
                        }
                    }}>
                
                <SwiperSlide>
                    <Opening setIsSoundActive={setIsSoundActive}/>
                </SwiperSlide>

                <SwiperSlide>
                    <Ballerina/>
                </SwiperSlide>
                
                <SwiperSlide data-hash="cada-tom-uma-historia">
                    {({ isActive }) => ( <Landscape active={isActive}/> )}
                </SwiperSlide>
                
                <SwiperSlide data-hash="video-apresentacao">
                    {({ isActive }) => ( <ConceptVideo active={isActive} isSoundActive={isSoundActive} setIsSoundActive={setIsSoundActive} /> )}
                </SwiperSlide>
                
                <SwiperSlide data-hash="tradicao-contemporanea">
                    {({ isActive }) => ( <Location active={isActive} />) }
                </SwiperSlide>

                <SwiperSlide data-hash="fachada">
                    <Image src="/img/bg/nighttime-facade.jpg" layout="fill" objectFit="cover" />
                </SwiperSlide>

                <SwiperSlide data-hash="sofisticacao">
                    {({ isActive }) => ( <Sophistication active={isActive} /> )}
                </SwiperSlide>

                <SwiperSlide data-hash="areas-comuns-1">
                    <PictureSlider imageList={props.commonAreas1}/>
                </SwiperSlide>

                <SwiperSlide data-hash="naturalidade">
                    {({ isActive }) => ( <Naturality active={isActive} /> )}
                </SwiperSlide>

                <SwiperSlide data-hash="areas-comuns-2">
                    <PictureSlider imageList={props.commonAreas2}/>
                </SwiperSlide>

                <SwiperSlide data-hash="primeiro-tom">
                    {({ isActive }) => ( <FirstTone active={isActive} /> )}
                </SwiperSlide>

                <SwiperSlide data-hash="segundo-tom">
                    {({ isActive }) => ( <SecondTone active={isActive} /> )}
                </SwiperSlide>

                <SwiperSlide data-hash="terceiro-tom">
                    {({ isActive }) => ( <ThirdTone active={isActive} /> )}
                </SwiperSlide>

                <SwiperSlide data-hash="plantas">
                    {({ isActive }) => ( <Plans active={isActive} /> )}
                </SwiperSlide>

                <SwiperSlide data-hash="investcorp">
                    {({ isActive }) => ( <Investcorp active={isActive}/> )}
                </SwiperSlide>

                <SwiperSlide data-hash="contato">
                    {({ isActive }) => ( <Contact active={isActive} captchaSitekey={props.captchaSitekey} /> )}
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
            captchaSitekey: process.env.RECAPTCHA_SITE_KEY,

            // First slider of common areas
            commonAreas1: [
                {
                    url: "/img/sliders/common-areas/party-room.jpg",
                    alt: "Foto do salão de festas com sofá, televisão, mesas e cadeiras",
                    name: "Salão de festas"
                },
                {
                    url: "/img/sliders/common-areas/play-room.jpg",
                    alt: "Foto do salão de jogos com mesa de bilhar, bar e mesa para cartas",
                    name: "Salão de jogos"
                },
                {
                    url: "/img/sliders/common-areas/theater.jpg",
                    alt: "Foto da sala de cinema, com sofá grande, puffs e telão",
                    name: "Cinema"
                },
                {
                    url: "/img/sliders/common-areas/hot-pool.jpg",
                    alt: "Foto da área de piscina com aquecimento",
                    name: "Piscina"
                },
                {
                    url: "/img/sliders/common-areas/gym.jpg",
                    alt: "Foto da academia com halteres, esteiras e outros equipamentos",
                    name: "Academia"
                },
                {
                    url: "/img/sliders/common-areas/kids-place.jpg",
                    alt: "Foto da área para crianças, com piscina de bolinhas, TV e playground",
                    name: "Kids"
                }
            ],

            // Second slider of common areas
            commonAreas2: [
                {
                    url: "/img/sliders/common-areas/reading-place.jpg",
                    alt: "Foto da área de leitura externa, com redes e jardim",
                    name: "Redário"
                },
                {
                    url: "/img/sliders/common-areas/playground.jpg",
                    alt: "Foto do parquinho, com escorregador, gira-gira e outros brinquedos",
                    name: "Playground"
                },
                {
                    url: "/img/sliders/common-areas/pet-place.jpg",
                    alt: "Foto do espaço Pet, com vários brinquedos para cães e gatos",
                    name: "Pet Place"
                },
                {
                    url: "/img/sliders/common-areas/gourmet-pool.jpg",
                    alt: "Foto da piscina gourmet com espreguiçadeiras dentro da piscina e área de cozinha",
                    name: "Piscina Gourmet"
                },
                {
                    url: "/img/sliders/common-areas/pool.jpg",
                    alt: "Foto da piscina externa",
                    name: "Piscina"
                }
            ]
        }
    }
}