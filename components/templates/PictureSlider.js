import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'

export default function PictureSlider({imageList}) {

    return (
        <Swiper className="panel">
            {imageList.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <Image src={item.url} layout="fill" objectFit="cover" alt={item.alt} loading="lazy" />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}