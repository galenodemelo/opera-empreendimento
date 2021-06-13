import Button from "./templates/Button"
import styles from "./../styles/components/Plans.module.sass"

export default function Plans() {
    return (
        <section className={[styles.plans, "panel"].join(" ")}>
            <hr/>
            <h2>Plantas</h2>
            
            <nav className={styles.nav}>
                <Button label="Sublime" sub="261m²" inverted="true"/>
                <Button label="Exímio" sub="199m²" inverted="true"/>
                <Button label="Ápice" sub="434m²" inverted="true"/>
                <Button label="Apogeo" sub="431m²" inverted="true"/>
            </nav>
        </section>
    )
}