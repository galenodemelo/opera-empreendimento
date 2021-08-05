import LightboxGallery from "./templates/LightboxGallery"
import PictureSlider from "./templates/PictureSlider"
import Textbox from "./templates/Textbox"

let isActive = false

export default function Location({active}) {
    if (active && !isActive) isActive = true

    return (
        <section className="panel panel--divided" data-active={isActive}>
            <LightboxGallery 
                cover={[
                    { url: "/img/sliders/tradition/daytime-building.jpg", alt: "Foto da fachada do empreendimento Opera de manhã" },
                    { url: "/img/sliders/tradition/nighttime-building.jpg", alt: "Foto da fachada do empreendimento Opera à noite" }
                ]}
                className="slide-in-left"
            />

            <Textbox title={`A tradição 
                             contemporânea`}
                     text="A tradição anda lado a lado com um roteiro clássico que alinha a tranquilidade de viver em um bairro nobre com as facilidades e modernidades de um empreendimento inteligente. Que tangência uma verdadeira obra de arte e valoriza cada tom dessa história." 
                     button={{text: "Localização"}}/>

            
        </section>            
    )
}