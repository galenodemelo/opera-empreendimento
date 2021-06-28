import Image from "next/image"
import styles from "./../styles/components/ConceptVideo.module.sass"
import { useState } from "react"

export default function ConceptVideo() {
    const [videoPlayerState, setVideoPlayerState] = useState(false)


    return (
        <section className={[styles.conceptVideo, "panel"].join(" ")} data-video-active={videoPlayerState}>
            {videoPlayerState &&
                <>
                    <iframe src="https://player.vimeo.com/video/565848350?title=0&byline=0&portrait=0&autoplay=1" 
                            className={styles.video}
                            allow="autoplay; fullscreen; picture-in-picture" scroll="no"></iframe>
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
