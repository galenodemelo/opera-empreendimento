import LightboxGallery from "./templates/LightboxGallery"
import Textbox from "./templates/Textbox"

let isActive = false

export default function SecondTone({active}) {
    if (active && !isActive) isActive = true

    return (
        <section className="panel panel--divided" data-active={isActive}>
            <Textbox title="2º tom - exímio" 
                     text={`199,61 m²
                            03 suítes
                            Elevador social privativo
                            Sacada gourmet
                            Living integrado`}
                     button={{text: "Tour 360"}}/>
            
            <LightboxGallery cover={[{url: "/img/tones/2/cover.jpg", alt: "Foto da sacada do apartamento Opera com churrasqueira"}]}
                             lightbox={[{url: "/img/tones/2/full.jpg", alt: "Foto da sacada do apartamento Opera com churrasqueira"}]} 
                             className="slide-in-right" />
        </section>
    )
}