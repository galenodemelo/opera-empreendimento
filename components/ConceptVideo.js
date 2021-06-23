import Image from "next/image"
import styles from "./../styles/components/ConceptVideo.module.sass"
import { useState } from "react"

export default function ConceptVideo() {
    const [videoPlayerState, setVideoPlayerState] = useState(false)


    return (
        <section className={[styles.conceptVideo, "panel"].join(" ")}>
            {videoPlayerState &&
                <>
                    <iframe src="https://player.vimeo.com/video/559001048?title=0&byline=0&portrait=0&autoplay=1" 
                            className={styles.video}
                            allow="autoplay; fullscreen; picture-in-picture"></iframe>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                </>
            }

            {!videoPlayerState && (
                <button className={styles.play} onClick={() => setVideoPlayerState(true)}>
                    <Image src="/img/ico/play.svg" width="80" height="80" className={styles.play}/>
                </button>
            )}
        </section>
    )
}
