import Ballerina from "../components/Ballerina"
import ConceptVideo from "../components/ConceptVideo"
import FirstTone from "../components/FirstTone"
import Head from "next/head"
import Image from "next/image"
import Investcorp from "../components/Investcorp"
import Landscape from "../components/Landscape"
import Location from "../components/Location"
import Naturality from "../components/Naturality"
import Opening from "../components/Opening"
import Plans from "../components/Plans"
import PictureSlider from "../components/templates/PictureSlider"
import SecondTone from "../components/SecondTone"
import Sophistication from "../components/Sophistication"
import ThirdTone from "../components/ThirdTone"

export default function Home(props) {
    return (
        <>
            <Head>
                <title>Opera: Cada tom, uma história | Investcorp Empreendimentos</title>
            </Head>

            <Opening/>
            <Ballerina/>
            <Landscape/>
            <ConceptVideo/>
            <Location/>

            <section className="panel">
                <Image src="/img/bg/nighttime-facade.jpg" layout="fill" objectFit="cover" loading="lazy" />
            </section>

            <Sophistication/>

            <section className="panel">
                <PictureSlider imageList={props.commonAreas1}/>
            </section>

            <Naturality/>

            <section className="panel">
                <PictureSlider imageList={props.commonAreas2}/>
            </section>

            <FirstTone/>
            <SecondTone/>
            <ThirdTone/>

            <Plans/>
            <Investcorp/>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
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