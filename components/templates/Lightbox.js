import PictureSlider from "./PictureSlider"
import styles from "./../../styles/components/templates/Lightbox.module.sass"

export default function Lightbox({imageList, opened, setIsOpened}) {
    return (
        <div className={styles.lightbox} data-opened={opened}>
            <button className={styles.close} onClick={() => setIsOpened(false)}>
                <img src="/img/ico/close.svg" alt="Fechar imagem" title="Fechar imagem" />
            </button>

            {opened &&
                <div className={styles.frame}>
                    <PictureSlider imageList={imageList}/>
                </div>
            }
        </div>
    )
}