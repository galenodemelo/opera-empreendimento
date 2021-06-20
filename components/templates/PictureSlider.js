import Image from "next/image"
import styles from "./../../styles/components/templates/PictureSlider.module.sass"
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from "swiper"

export default function PictureSlider({imageList}) {

    SwiperCore.use([Pagination])

    return (
        <Swiper className={[styles.pictureSlider, "panel"].join(" ")}
                speed={300}
                pagination={{
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
                }}>
            {imageList.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <Image src={item.url} layout="fill" objectFit="cover" alt={item.alt} loading="lazy" />
                    </SwiperSlide>
                )
            })}

            <div className={[styles.pagination, "pagination"].join(" ")}></div>
        </Swiper>
    )
}