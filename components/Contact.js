import { useEffect, useRef } from "react"
import styles from "./../styles/components/Contact.module.sass"

let isActive = false

export default function Contact({active}) {
    if (active && !isActive) isActive = true

    const videoPlayer = useRef()

    useEffect(() => {
        if (isActive) {
            setTimeout(() => {
                videoPlayer.current.play()
            }, 800)
        } else {
            videoPlayer.current.pause()
        }

    })

    return (
        <section className={[styles.contact, "panel"].join(" ")} data-active={isActive}>
            <form action="#" method="POST" className={styles.form}>
                <p className={styles.intro}>Para mais informações, preencha o formulário abaixo.</p>
                <div className={styles.divided}>
                    <div className={styles.group}>
                        <label htmlFor="firstName">Nome</label>
                        <input type="text" name="firstName" id="firstName" required />
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="lastName">Sobrenome</label>
                        <input type="text" name="lastName" id="lastName" required />
                    </div>
                </div>
                <div className={styles.group}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className={styles.group}>
                    <label htmlFor="phone">Telefone/Celular</label>
                    <input type="tel" name="phone" id="phone" required />
                </div>
                <div className={styles.group}>
                    <label htmlFor="origin">Como nos conheceu?</label>
                    <select name="origin" id="origin"></select>
                </div>
                <div className={styles.group}>
                    <label htmlFor="message">Como podemos te ajudar?</label>
                    <textarea name="message" id="message" required></textarea>
                </div>
                <p className={styles.note}>Nota: deixe sua permissão para que possamos entrar em contato com você, via e-mail ou celular.</p>
                
                <button type="submit" className={styles.submit}>
                    <img src="/img/ico/arrow.svg" alt="Ícone de seta. Ao clicar, enviará sua mensagem " title="Enviar mensagem" />
                </button>
            </form>

            <div className={styles.logo}>
                <hr className="slide-in-bar" />
                <video muted={true} controls={false} className={styles.background} ref={videoPlayer}>
                    <source src="/videos/logo-contato.webm" type="video/webm"/>
                    <source src="/videos/logo-contato.mp4" type="video/mp4"/>
                </video>
                <p className="slide-in-bottom">
                    Rua Leopoldo Fischer, 100 - Joinville/SC<br />
                    &copy; 2021 Opera. All rights reserved.
                </p>
            </div>
        </section>
    )
}