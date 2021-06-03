import Ballerina from "../components/Ballerina"
import ConceptVideo from "../components/ConceptVideo"
import Landscape from "../components/Landscape"
import Opening from "../components/Opening"

export default function Home() {
    return (
        <>
            <Opening/>
            <Ballerina/>
            <Landscape/>
            <ConceptVideo/>
        </>
    )
}
