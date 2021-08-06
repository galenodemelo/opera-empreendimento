import Textbox from "./templates/Textbox";

export default function LocationText({setIsLightboxOpened}) {
    return (
        <Textbox title={`A tradição 
                             contemporânea`}
                     text="A tradição anda lado a lado com um roteiro clássico que alinha a tranquilidade de viver em um bairro nobre com as facilidades e modernidades de um empreendimento inteligente. Que tangência uma verdadeira obra de arte e valoriza cada tom dessa história." 
                     button={{text: "Localização", onClick: () => { setIsLightboxOpened(true) }}}/>
    )
}