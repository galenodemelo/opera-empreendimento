import styles from "./../../styles/components/templates/Button.module.sass"

export default function Button({label, sub = "", inverted = false, onClick = null, className = null}) {
    let classList = [styles.bto]
    if (inverted) classList.push(styles["bto--inverted"])
    if (sub) classList.push(styles["bto--with-sub"])
    if (className) classList.push(className)

    return (
        <button className={classList.join(" ")} onClick={onClick}>
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