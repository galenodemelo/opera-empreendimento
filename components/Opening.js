import styles from "./../styles/components/Opening.module.sass"

export default function Opening() {
    return (
        <section className={[styles.opening, "panel"].join(" ")}>
            <h1><img src="/img/logo.svg" alt="Opera - Um empreendimento Investcorp" className={styles.logo} /></h1>

            <nav className={styles.menu}>
                <h6>Sound experience</h6>

                <button>Yes</button>
                <button>No</button>
            </nav>
        </section>
    )
}
