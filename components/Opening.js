import styles from "./../styles/components/Opening.module.sass"

export default function Opening({setIsSoundActive}) {
    return (
        <section className={[styles.opening, "panel"].join(" ")}>
            <h1><img src="/img/logo.svg" alt="Opera - Um empreendimento Investcorp" className={styles.logo} /></h1>

            <nav className={styles.menu}>
                <h6>Sound experience</h6>

                <button onClick={() => setIsSoundActive(true)}>Yes</button>
                <button onClick={() => setIsSoundActive(false)}>No</button>
            </nav>
        </section>
    )
}
