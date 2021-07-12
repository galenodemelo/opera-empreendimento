import PictureSlider from "./templates/PictureSlider"
import styles from "./../styles/components/Sophistication.module.sass"

let isActive = false

export default function Sophistication({active}) {
    if (active && !isActive) isActive = true

    return (
        <section className={[styles.sophistication, "panel"].join(" ")} data-active={isActive}>
            <div className={[styles.slider, "slide-in-left"].join(" ")}>
                <PictureSlider imageList={[{url: "/img/sliders/sophistication/1.jpg", alt: "Foto do hall de entrada do empreendimento Opera à noite"},
                                           {url: "/img/sliders/sophistication/2.jpg", alt: "Foto da fachada do empreendimento Opera à noite"}]} />
            </div>
            <div className={styles.textbox}>
                <hr className="slide-in-bar"/>
                <div className={[styles.content, "slide-in-bottom"].join(" ")}>
                    <h2>Bem-vindo <br />à sofisticação</h2>
                </div>
            </div>
        </section>
    )
}