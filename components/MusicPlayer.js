import { useEffect, useRef } from "react"
import { isDesktop } from "react-device-detect"
import styles from "./../styles/components/MusicPlayer.module.sass"

export default function MusicPlayer({currentSlide, isSoundActive, setIsSoundActive}) {
    const audioPlayer = useRef()

    useEffect(() => {
        if (isSoundActive) {
            audioPlayer.current.play()
        } else {
            audioPlayer.current.pause()
        }
    }, [isSoundActive])
    
    const classList = [styles.musicPlayer]

    let invertList
    if (isDesktop) {
        invertList = [2, 3, 5, 6, 7, 8, 11, 13, 14, 15]
    } else {
        invertList = [2, 3, 4, 6, 7, 8, 9, 10, 12, 14, 15, 16]
    }
    
    const shouldInvert = invertList.includes(currentSlide)
    if (shouldInvert) classList.push(styles["musicPlayer--inverted"])

    return (
        <div className={classList.join(" ")}>
            <button onClick={() => setIsSoundActive(!isSoundActive)} className={styles.switcher} data-active={isSoundActive}>
                <img src="/img/ico/sound-on.svg" alt="Desativar música" title="Desativar música" />
                <img src="/img/ico/sound-off.svg" alt="Ativar música" title="Ativar música" />
            </button>

            <audio ref={audioPlayer} className={styles.player} loop>
                <source src="/audio/la-boca-fiesta.ogg" type="audio/ogg" />
                <source src="/audio/la-boca-fiesta.mp3" type="audio/mpeg" />
            </audio>
        </div>
    )
}