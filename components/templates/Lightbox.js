import Image from "next/image"
import styles from "./../../styles/components/templates/Lightbox.module.sass"
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Lightbox({imageList, opened, setIsOpened}) {
    return (
        <div className={styles.lightbox} data-opened={opened}>
            <button className={styles.close} onClick={() => setIsOpened(false)}>
                <img src="/img/ico/close.svg" alt="Fechar imagem" title="Fechar imagem" />
            </button>

            <Swiper className={styles.frame}>
                {imageList.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image src={image.url} alt={image.alt} layout="fill" objectFit="contain" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}