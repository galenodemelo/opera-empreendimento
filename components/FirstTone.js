import LightboxGallery from "./templates/LightboxGallery"
import Textbox from "./templates/Textbox"

export default function FirstTone() {
    return (
        <section className="panel panel--divided">
            <LightboxGallery cover={{url: "/img/tones/1/cover.jpg", alt: "Foto da sacada do apartamento Opera com churrasqueira"}} 
                             lightbox={[{url: "/img/tones/1/full.jpg", alt: "Foto da sacada do apartamento Opera com churrasqueira"}]} />

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