import Image from "next/image"
import styles from "./../../styles/components/templates/PictureSlider.module.sass"
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from "swiper"

export default function PictureSlider({imageList, objectFit = "cover"}) {

    SwiperCore.use([Pagination])

    let paginationConfig = false
    if (imageList.length > 1) {
        paginationConfig = {
            bulletActiveClass: styles["bullet--active"],
            clickable: true,
            el: ".pagination",
            type: "bullets",
            renderBullet: (index, className) => {
                const name = imageList[index].name ?? ""

                return `<span class="${[styles.bullet, className].join(" ")}">
                            ${name !== "" ? `<b>${name}</b>` : ""}
                        </span>`
            }
        }
    }

    return (
        <Swiper className={styles.pictureSlider}
                speed={300}
                pagination={paginationConfig}>
            {imageList.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <Image src={item.url} layout="fill" objectFit={objectFit} alt={item.alt} loading="lazy" />
                    </SwiperSlide>
                )
            })}

            <div className={[styles.pagination, "pagination"].join(" ")}></div>
        </Swiper>
    )
}