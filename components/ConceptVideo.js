import Image from "next/image"
import styles from "./../styles/components/ConceptVideo.module.sass"
import { useState } from "react"

export default function ConceptVideo({active}) {
    const [videoPlayerState, setVideoPlayerState] = useState(false)


    return (
        <section className={[styles.conceptVideo, "panel"].join(" ")} data-active={active}>
            {videoPlayerState &&
                <>
                    <iframe src="https://player.vimeo.com/video/559001048?title=0&byline=0&portrait=0&autoplay=1" 
                            className={styles.video}
                            allow="autoplay; fullscreen; picture-in-picture" scroll="no"></iframe>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                </>
            }

            {!videoPlayerState && (
                <>
                    <Image src="/videos/concept-video-cover.jpg" layout="fill" objectFit="cover" className="zoom-in"/>

                    <button className={styles.play} onClick={() => setVideoPlayerState(true)}>
                        <Image src="/img/ico/play.svg" objectFit="contain" layout="fill" className={styles.play}/>
                    </button>
                </>
            )}
        </section>
    )
}
