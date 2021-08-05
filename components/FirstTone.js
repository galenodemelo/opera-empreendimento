import LightboxGallery from "./templates/LightboxGallery"
import Textbox from "./templates/Textbox"

let isActive = false

export default function FirstTone({active}) {
    if (active && !isActive) isActive = true

    return (
        <section className="panel panel--divided" data-active={isActive}>
            <LightboxGallery cover={[{url: "/img/tones/1/cover.jpg", alt: "Foto da sacada do apartamento Opera com churrasqueira"}]} 
                             lightbox={[{url: "/img/tones/1/full.jpg", alt: "Foto da sacada do apartamento Opera com churrasqueira"}]}
                             className="slide-in-left" />

            <Textbox title="1º tom - sublime" 
                     text={`261,23 m² 
                            04 suítes 
                            Elevador privativo 
                            Sala íntima 
                            Sacada gourmet 
                            Living integrado`}
                     button={{ text: "Tour 360" }}/>
        </section>
    )
}