import Ballerina from "../components/Ballerina"
import ConceptVideo from "../components/ConceptVideo"
import Head from "next/head"
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
        </>
    )
}
