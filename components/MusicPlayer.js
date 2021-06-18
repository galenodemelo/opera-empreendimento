import { useEffect, useRef, useState } from "react"
import styles from "./../styles/components/MusicPlayer.module.sass"

export default function MusicPlayer() {
    const [isSoundActive, setIsSoundActive] = useState(false)
    const audioPlayer = useRef()

    useEffect(() => {
        if (isSoundActive) {
            audioPlayer.current.play()
        } else {
            audioPlayer.current.pause()
        }
    }, [isSoundActive])

    return (
        <div className={styles.musicPlayer}>
            <button onClick={() => setIsSoundActive(!isSoundActive)} className={styles.switcher} data-active={isSoundActive}>
                <img src="/img/ico/sound-on.svg" alt="Desativar música" title="Desativar música" />
                <img src="/img/ico/sound-off.svg" alt="Ativar música" title="Ativar música" />
            </button>

            <audio ref={audioPlayer}>
                <source src="/audio/la-boca-fiesta.ogg" type="audio/ogg" />
                <source src="/audio/la-boca-fiesta.mp3" type="audio/mpeg" />
            </audio>
        </div>
    )
}