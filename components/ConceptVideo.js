import Image from "next/image"
import styles from "./../styles/components/ConceptVideo.module.sass"
import { useEffect, useRef, useState } from "react"

export default function ConceptVideo() {
    const [videoPlayerState, setVideoPlayerState] = useState(false)

    const videoPlayer = useRef()

    useEffect(() => {
        if (videoPlayerState) {
            videoPlayer.current.play()
        } else {
            videoPlayer.current.pause()
        }

        videoPlayer.current.addEventListener("pause", () => {
            setVideoPlayerState(false)
        })
    })

    return (
        <section className={[styles.conceptVideo, "panel"].join(" ")}>
            <video className={styles.video} poster="/videos/concept-video-cover.jpg" ref={videoPlayer} onClick={() => setVideoPlayerState(!videoPlayerState)}>
                <source src="/videos/test.mp4" type="video/mp4"/>
            </video>

            {!videoPlayerState && (
                <button className={styles.play} onClick={() => setVideoPlayerState(true)}>
                    <Image src="/img/ico/play.svg" width="80" height="80" className={styles.play}/>
                </button>
            )}
        </section>
    )
}
