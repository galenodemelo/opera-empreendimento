import Image from "next/image"
import styles from "./../styles/components/ConceptVideo.module.sass"
import { useState } from "react"

let wasSoundActive = false

export default function ConceptVideo({active, isSoundActive, setIsSoundActive}) {
    const [videoPlayerState, setVideoPlayerState] = useState(false)
    if (videoPlayerState && !active) {
        setVideoPlayerState(false)

        if (wasSoundActive) setIsSoundActive(true)
    }

    if (videoPlayerState && isSoundActive) {
        wasSoundActive = true
        setIsSoundActive(false)
    }

    return (
        <section className={[styles.conceptVideo, "panel"].join(" ")} data-active={active}>
            {videoPlayerState &&
                <div className={styles.video}>
                    <iframe src="https://player.vimeo.com/video/595979072?title=0&byline=0&portrait=0&autoplay=1" 
                            allow="autoplay; fullscreen; picture-in-picture" scroll="no"></iframe>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                </div>
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
