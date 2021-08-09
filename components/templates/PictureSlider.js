import Image from "next/image"
import styles from "./../../styles/components/templates/PictureSlider.module.sass"
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from "swiper"

export default function PictureSlider({imageList, objectFit = "cover", className = null, anchor = null, withArrow = false}) {

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

    const swiperClassList = [styles.pictureSlider]
    if (className) swiperClassList.push(className)

    const arrowClassList = [styles.arrow]
    if (withArrow) arrowClassList.push(styles[`arrow--anchor-${anchor}`])

    return (
        <Swiper className={swiperClassList.join(" ")}
                speed={300}
                dir="ltr"
                pagination={paginationConfig}>
            {imageList.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        {item.url &&
                            <Image src={item.url} layout="fill" objectFit={objectFit} alt={item.alt} />
                        }

                        {item.iframe &&
                            <iframe src={item.iframe} width="100%" height="100%"></iframe>
                        }
                    </SwiperSlide>
                )
            })}

            <div className={[styles.pagination, "pagination"].join(" ")}></div>

            {withArrow &&
                <div className={arrowClassList.join(" ")}>
                    <Image src="/img/ico/arrow-triangle.svg" layout="fill" objectFit="contain" />
                </div>
            }
        </Swiper>
    )
}