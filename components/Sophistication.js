import PictureSlider from "./templates/PictureSlider"
import styles from "./../styles/components/Sophistication.module.sass"

export default function Sophistication() {

    return (
        <section className={[styles.sophistication, "panel"].join(" ")}>
            <div className={styles.slider}>
                <PictureSlider imageList={[{url: "/img/sliders/sophistication/1.jpg", alt: "Foto do hall de entrada do empreendimento Opera à noite"},
                                           {url: "/img/sliders/sophistication/2.jpg", alt: "Foto da fachada do empreendimento Opera à noite"}]} />
            </div>
            <div className={styles.textbox}>
                <hr/>
                <div className={styles.content}>
                    <h2>Bem-vindo <br />à sofisticação</h2>
                </div>
            </div>
        </section>
    )
}