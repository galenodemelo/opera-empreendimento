import Button from "./Button"
import styles from "./../../styles/components/templates/Textbox.module.sass"

export default function Textbox({title, text = null, button = null, paddedLeft = false}) {
    let classList = [styles.textbox]
    if (paddedLeft) classList.push(styles["textbox--padded-left"])

    return (
        <div className={classList.join(" ")}>
            <hr className="slide-in-bar"/>
            <div className={styles.content}>
                <h2 className="slide-in-bottom">
                    {title.split("\n").map((it, index) => (<span key={index}>{it}<br/></span>))}
                </h2>
                {text &&
                    <p className="slide-in-bottom">
                        {text.split("\n").map((it, index) => (<span key={index}>{it}<br/></span>))}
                    </p>
                }
                
                {button &&
                    <div className="slide-in-bottom">
                        <Button label={button.text} onClick={button.onClick}/>
                    </div>
                }
            </div>
        </div>
    )
}