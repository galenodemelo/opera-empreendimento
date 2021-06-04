import Image from "next/image"
import { useEffect } from "react"
import Glide from "@glidejs/glide"

export default function PictureSlider() {

    useEffect(() => {
        new Glide(".glide--picture-slider", {
            gap: 0
        }).mount()
    })

    return (
        <section className="panel">
            <div className="glide glide--picture-slider glide--full-height">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        <li className="glide__slide">
                            <Image src="/img/sliders/pictures/party-room.jpg" layout="fill" objectFit="cover" alt="Foto do salão de festas com sofá, televisão, mesas e cadeiras" loading="lazy" />
                        </li>
                        <li className="glide__slide">
                            <Image src="/img/sliders/pictures/play-room.jpg" layout="fill" objectFit="cover" alt="Foto do salão de jogos com mesa de bilhar, bar e mesa para cartas" loading="lazy" />
                        </li>
                        <li className="glide__slide">
                            <Image src="/img/sliders/pictures/theater.jpg" layout="fill" objectFit="cover" alt="Foto da sala de cinema, com sofá grande, puffs e telão" loading="lazy" />
                        </li>
                        <li className="glide__slide">
                            <Image src="/img/sliders/pictures/pool.jpg" layout="fill" objectFit="cover" alt="Foto da área de piscina com aquecimento" loading="lazy" />
                        </li>
                        <li className="glide__slide">
                            <Image src="/img/sliders/pictures/gym.jpg" layout="fill" objectFit="cover" alt="Foto da academia com halteres, esteiras e outros equipamentos" loading="lazy" />
                        </li>
                        <li className="glide__slide">
                            <Image src="/img/sliders/pictures/kids-place.jpg" layout="fill" objectFit="cover" alt="Foto da área para crianças, com piscina de bolinhas, TV e playground" loading="lazy" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}