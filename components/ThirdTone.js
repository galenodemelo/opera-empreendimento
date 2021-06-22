import LightboxGallery from "./templates/LightboxGallery"
import Textbox from "./templates/Textbox"

export default function ThirdTone() {
    return (
        <section className="panel panel--divided">
            <LightboxGallery cover={{url: "/img/tones/3/cover.jpg", alt: "Foto da sacada do apartamento Opera com churrasqueira"}}
                             lightbox={[{url: "/img/tones/3/full.jpg", alt: "Foto da sacada do apartamento Opera com churrasqueira"}]} />

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