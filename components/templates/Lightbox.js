import PictureSlider from "./PictureSlider"
import Textbox from "./Textbox"
import styles from "./../../styles/components/templates/Lightbox.module.sass"

export default function Lightbox({imageList, opened, setIsOpened, inverted = false, text = null, anchor = "left"}) {

    const classList = [styles.lightbox]
    classList.push(styles[`lightbox--anchor-${anchor}`])
    if (inverted) classList.push(styles["lightbox--inverted"])

    const frameClassList = [styles.frame]
    if (text) frameClassList.push(styles["frame--with-text"])

    return (
        <div className={classList.join(" ")} data-opened={opened}>
            <div className={frameClassList.join(" ")}>
                <button className={styles.close} onClick={() => setIsOpened(false)}>
                    <img src="/img/ico/close.svg" alt="Fechar imagem" title="Fechar imagem" />
                </button>
                {opened &&
                    <div className={styles.content}>
                        <PictureSlider imageList={imageList} objectFit="contain"/>

                        {text &&
                            <Textbox title={text.title} text={text.description}/>
                        }
                    </div>
                }
            </div>

        </div>
    )
}