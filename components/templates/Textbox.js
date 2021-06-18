import Button from "./Button"
import styles from "./../../styles/components/templates/Textbox.module.sass"

export default function Textbox({title, text, button}) {
    return (
        <div className={styles.textbox}>
            <hr/>
            <div className={styles.content}>
                <h2>{title.split("\n").map((it, index) => (<span key={index}>{it}<br/></span>))}</h2>
                <p>{text.split("\n").map((it, index) => (<span key={index}>{it}<br/></span>))}</p>
                {button &&
                    <Button label={button.text}/>
                }
            </div>
        </div>
    )
}