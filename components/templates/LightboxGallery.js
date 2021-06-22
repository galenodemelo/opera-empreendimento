import Image from "next/image"
import Lightbox from "./Lightbox"
import { useState } from "react"

export default function LightboxGallery({cover, lightbox}) {
    const [isLightboxOpened, setIsLightboxOpened] = useState(false)

    return (
        <div>
            <Image src={cover.url} alt={cover.alt} layout="fill" objectFit="cover" onClick={() => setIsLightboxOpened(true)} />

            {lightbox &&
                <Lightbox imageList={lightbox} opened={isLightboxOpened} setIsOpened={setIsLightboxOpened}/>
            }
        </div>
    )
}
