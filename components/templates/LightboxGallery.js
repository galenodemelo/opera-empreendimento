import Lightbox from "./Lightbox"
import styles from "./../../styles/components/templates/LightboxGallery.module.sass"
import { useState } from "react"
import PictureSlider from "./PictureSlider"

export default function LightboxGallery({cover, lightbox, className = null, isLightboxOpened = false, setIsLightboxOpened = false}) {
    if (!isLightboxOpened && !setIsLightboxOpened) [isLightboxOpened, setIsLightboxOpened] = useState(false)

    let lightboxGalleryClassList = [styles.lightboxGallery]
    if (className) lightboxGalleryClassList.push(className)

    return (
        <div className={lightboxGalleryClassList.join(" ")}>
            <div className={styles.cover} onClick={() => setIsLightboxOpened(true)}>
                <PictureSlider imageList={cover} />
            </div>

            {lightbox &&
                <Lightbox imageList={lightbox} opened={isLightboxOpened} setIsOpened={setIsLightboxOpened}/>
            }
        </div>
    )
}
