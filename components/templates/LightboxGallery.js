import Image from "next/image"

export default function LightboxGallery({cover}) {
    return (
        <div>
            <Image src={cover.url} alt={cover.alt} layout="fill" objectFit="cover" />
        </div>
    )
}
