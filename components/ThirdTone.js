import LightboxGallery from "./templates/LightboxGallery"
import Textbox from "./templates/Textbox"

let isActive = false

export default function ThirdTone({active}) {
    if (active && !isActive) isActive = true

    return (
        <section className="panel panel--divided" data-active={isActive}>
            <LightboxGallery cover={{url: "/img/tones/3/cover.jpg", alt: "Foto da sacada do apartamento Opera com churrasqueira"}}
                             lightbox={[{url: "/img/tones/3/full-1.jpg", alt: "Foto da sacada do apartamento Opera com churrasqueira"},
                                        {url: "/img/tones/3/full-2.jpg", alt: "Foto da sala de estar do apartamento Opera"}]} 
                             className="slide-in-left"/>

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
    )
}