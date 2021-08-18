import { useEffect, useRef } from "react"
import InputMask from "react-input-mask"
import styles from "./../styles/components/Contact.module.sass"

import {Swiper, SwiperSlide} from 'swiper/react'

let isActive = false

export default function Contact({active}) {
    if (active && !isActive) isActive = true

    const videoPlayer = useRef()
    const contactForm = useRef()

    useEffect(() => {
        if (isActive) {
            setTimeout(() => {
                videoPlayer.current.play()
            }, 800)
        } else {
            videoPlayer.current.pause()
        }

        // Install Recaptcha code
        const script = document.createElement("script")
        script.src = "https://www.google.com/recaptcha/api.js"
        script.async = true
        script.defer = true
        document.body.appendChild(script)

        // Recaptcha callback
        window.recaptchaCallback = (token) => { 
            if (!contactForm.current.reportValidity()) {
                alert("Corrija os erros antes de prosseguir")
                return
            }

            const formData = new FormData(contactForm.current)
            fetch(contactForm.current.getAttribute("action"), {
                method: contactForm.current.getAttribute("method"),
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Object.fromEntries(formData))
            })
            .then(response => {
                grecaptcha.reset()
                if (!response.ok) {
                    alert("Ocorreu um erro. Tente novamente!")
                    return
                }

                contactForm.current.reset()
                alert("Enviado com sucesso! Você receberá uma cópia no seu e-mail.")
            })
            .catch(error => {
                console.log(error)
                alert("Ocorreu um erro. Tente novamente!")
            })
        }
    })

    return (
        <Swiper className="panel"
            direction="vertical"
            shortSwipes={true}
            slidesPerView={1}
            speed={1000}
            breakpoints={{
                1080: {
                    direction: "horizontal",
                    slidesPerView: 2
                }
            }}
        >
            <SwiperSlide>
                <section className={["panel", "panel--centered", styles.form].join(" ")}>
                    <form action="/api/contact" method="POST" ref={contactForm}>
                        <p className={styles.intro}>Para mais informações, preencha o formulário abaixo.</p>
                        <div className={styles.divided}>
                            <div className={styles.group}>
                                <label htmlFor="firstName">Nome</label>
                                <input type="text" name="firstName" id="firstName" required placeholder="Digite seu primeiro nome" />
                            </div>
                            <div className={styles.group}>
                                <label htmlFor="lastName">Sobrenome</label>
                                <input type="text" name="lastName" id="lastName" required placeholder="Digite seu sobrneome" />
                            </div>
                        </div>
                        <div className={styles.group}>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email" required placeholder="Exemplo: nome@provedor.com.br" />
                        </div>
                        <div className={styles.group}>
                            <label htmlFor="phone">Telefone/Celular</label>
                            <InputMask name="phone" id="phone" required mask="(99) 9999-9999?" formatChars={{"9": "[0-9]", "?": "[0-9 ]"}} placeholder="Exemplo: (12) 9876-54321" />
                        </div>
                        <div className={styles.group}>
                            <label htmlFor="origin">Como nos conheceu?</label>
                            <select name="origin" id="origin">
                                <option value="">Selecione uma opção</option>
                                {["Corretor", "Eventos", "Mídia digital", "Outdoor", "Rádio", "Outros"].map((value, index) => {
                                    return (
                                        <option value={value} key={index}>
                                            {value}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className={styles.group}>
                            <label htmlFor="message">Como podemos te ajudar?</label>
                            <textarea name="message" id="message" required placeholder="Digite aqui sua dúvida que retornaremos o quanto antes."></textarea>
                        </div>
                        <p className={styles.note}>Nota: deixe sua permissão para que possamos entrar em contato com você, via e-mail ou celular.</p>
                        
                        <button type="button" className={[styles.submit, "g-recaptcha"].join(" ")} data-sitekey={process.env.RECAPTCHA_SITE_KEY} data-callback="recaptchaCallback">
                            <img src="/img/ico/arrow.svg" alt="Ícone de seta. Ao clicar, enviará sua mensagem " title="Enviar mensagem" />
                        </button>
                    </form>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className={["panel", "panel--centered", styles.logo].join(" ")} data-active={isActive}>
                    <hr className="slide-in-bar" />
                    <video muted={true} controls={false} className={styles.background} ref={videoPlayer}>
                        <source src="/videos/logo-contato.webm" type="video/webm"/>
                        <source src="/videos/logo-contato.mp4" type="video/mp4"/>
                    </video>
                    <p className="slide-in-bottom">
                        Rua Leopoldo Fischer, 100 - Joinville/SC<br />
                        Investcorp Empreendimentos &copy; {new Date().getFullYear()}
                    </p>
                </section>
            </SwiperSlide>
        </Swiper>
    )
}
