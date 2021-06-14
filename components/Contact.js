import styles from "./../styles/components/Contact.module.sass"

export default function Contact() {
    return (
        <section className={[styles.contact, "panel"].join(" ")}>
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
                <hr/>
                <figure>
                    <img src="/img/logo.svg" alt="Opera - Um empreendimento Investcorp" />
                    <figcaption>Cada tom, uma história</figcaption>
                </figure>
                <p>
                    Rua Leopoldo Fischer, 100 - Joinville/SC<br />
                    &copy; 2021 Opera. All rights reserved.
                </p>
            </div>
        </section>
    )
}