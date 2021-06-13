import styles from "./../../styles/components/templates/Button.module.sass"

export default function Button({label, sub = "", inverted = false}) {
    let classList = [styles.bto]
    if (inverted) classList.push(styles["bto--inverted"])
    if (sub) classList.push(styles["bto--with-sub"])

    return (
        <button className={classList.join(" ")}>
            <span>
                {label}
                {sub &&
                    <>
                        &nbsp;| <b>{sub}</b>
                    </>
                }
            </span>
        </button>
    )
}