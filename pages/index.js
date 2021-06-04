import Ballerina from "../components/Ballerina"
import ConceptVideo from "../components/ConceptVideo"
import Head from "next/head"
import Image from "next/image"
import Landscape from "../components/Landscape"
import Location from "../components/Location"
import Opening from "../components/Opening"

export default function Home() {
    return (
        <>
            <Head>
                <title>Opera: Cada tom, uma história | Investcorp Empreendimentos</title>
            </Head>

            <Opening/>
            <Ballerina/>
            <Landscape/>
            <ConceptVideo/>
            <Location/>

            <section className="panel">
                <Image src="/img/bg/nighttime-facade.jpg" layout="fill" objectFit="cover" loading="lazy" />
            </section>
        </>
    )
}
