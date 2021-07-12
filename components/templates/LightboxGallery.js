import Image from "next/image"
import Lightbox from "./Lightbox"
import styles from "./../../styles/components/templates/LightboxGallery.module.sass"
import { useState } from "react"

export default function LightboxGallery({cover, lightbox, className = null}) {
    const [isLightboxOpened, setIsLightboxOpened] = useState(false)

    let lightboxGalleryClassList = [styles.lightboxGallery]
    if (className) lightboxGalleryClassList.push(className)

    return (
        <div className={lightboxGalleryClassList.join(" ")}>
            <div className={styles.cover}>
                <Image src={cover.url} alt={cover.alt} layout="fill" objectFit="cover" onClick={() => setIsLightboxOpened(true)} />
            </div>

            {lightbox &&
                <Lightbox imageList={lightbox} opened={isLightboxOpened} setIsOpened={setIsLightboxOpened}/>
            }
        </div>
    )
}
