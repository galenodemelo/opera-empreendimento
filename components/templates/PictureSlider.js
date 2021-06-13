import Image from "next/image"
import { useEffect, useRef } from "react"
import Glide from "@glidejs/glide"

export default function PictureSlider({imageList}) {
    const slider = useRef()

    useEffect(() => {
        new Glide(slider.current, { gap: 0 }).mount()
    })

    return (
        <div className="glide glide--full-height" ref={slider}>
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    {imageList.map((item, index) => {
                        return (
                            <li className="glide__slide" key={index}>
                                <Image src={item.url} layout="fill" objectFit="cover" alt={item.alt} loading="lazy" />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}