import Button from "./templates/Button"
import Lightbox from "./templates/Lightbox"
import styles from "./../styles/components/Plans.module.sass"
import { useState } from "react"

let isActive = false

export default function Plans({active}) {
    const [isFirstToneOpened, setIsFirstToneOpened] = useState(false)
    const [isSecondToneOpened, setIsSecondToneOpened] = useState(false)
    const [isThirdToneOpened, setIsThirdToneOpened] = useState(false)
    const [isFourthToneOpened, setIsFourthToneOpened] = useState(false)

    if (active && !isActive) isActive = true

    return (
        <section className={[styles.plans, "panel"].join(" ")} data-active={isActive}>
            <hr className="slide-in-bar" />
            <h2 className="slide-in-bottom">Plantas</h2>
            
            <nav className={styles.nav}>
                {/* FIRST TONE */}
                <Button label="Sublime" sub="261m²" inverted="true" onClick={() => setIsFirstToneOpened(true)} className="slide-in-bottom" />
                <Lightbox imageList={[{url: "/img/plans/first-tone-01.jpg", alt: "Planta do apartamento 1º Tom do empreendimento Ópera"}]}
                          opened={isFirstToneOpened} 
                          setIsOpened={setIsFirstToneOpened}
                          inverted={true}
                          text={{title: `1º tom
                                         sublime`,
                                 description: `261,23 m²
                                               04 suítes 
                                               Elevador privativo 
                                               Sala íntima 
                                               Sacada gourmet 
                                               Living integrado`}}/>

                {/* SECOND TONE */}
                <Button label="Exímio" sub="199m²" inverted="true" onClick={() => setIsSecondToneOpened(true)} className="slide-in-bottom" />
                <Lightbox imageList={[{url: "/img/plans/second-tone-01.jpg", alt: "Planta do apartamento 2º Tom do empreendimento Ópera"}]}
                          opened={isSecondToneOpened} 
                          setIsOpened={setIsSecondToneOpened}
                          inverted={true}
                          text={{title: `2º tom
                                         exímio`,
                                 description: `199,61 m² 
                                               03 suítes 
                                               Elevador social privativo 
                                               Sacada gourmet 
                                               Living integrado`}}/>


                {/* THIRD TONE */}
                <Button label="Ápice" sub="434m²" inverted="true" onClick={() => setIsThirdToneOpened(true)} className="slide-in-bottom" />
                <Lightbox imageList={[{url: "/img/plans/third-tone-01.jpg", alt: "Planta do apartamento 3º Tom do empreendimento Ópera"},
                                      {url: "/img/plans/third-tone-02.jpg", alt: "Planta do apartamento 3º Tom do empreendimento Ópera"}]}
                          opened={isThirdToneOpened} 
                          setIsOpened={setIsThirdToneOpened}
                          inverted={true}
                          text={{title: `3º tom
                                         ápice`,
                                 description: `Duplex 434,76 m² 
                                               5 suítes 
                                               Elevador privativo 
                                               Sala íntima 
                                               Living integrado 
                                               Sacada gourmet 
                                               2 unidades apenas (25º e 27º andar)`}}/>

                {/* FOURTH TONE */}
                <Button label="Apogeo" sub="431m²" inverted="true" onClick={() => setIsFourthToneOpened(true)}  className="slide-in-bottom" />
                <Lightbox imageList={[{url: "/img/plans/fourth-tone-01.jpg", alt: "Planta do apartamento 4º Tom do empreendimento Ópera"}]}
                          opened={isFourthToneOpened} 
                          setIsOpened={setIsFourthToneOpened}
                          inverted={true}
                          text={{title: `4º tom
                                         apogeu`,
                                 description: `Cobertura 431.65 m² 
                                               4 suítes 
                                               Elevador privativo 
                                               Sala íntima 
                                               Living integrado 
                                               Sacada gourmet 
                                               1 unidade apenas (28º andar)`}}/>
            </nav>
        </section>
    )
}