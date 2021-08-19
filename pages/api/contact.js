
export default async (req, res) => {
    const {firstName, lastName, email, phone, origin, message} = req.body
    const captchaResponse = req.body["g-recaptcha-response"]

    const isCaptchaValid = await validateCaptcha(captchaResponse)
    if (!isCaptchaValid) {
        res.status(500).json({message: "Captcha não resolvido"})
        return
    }

    if (!firstName || !lastName || !email || !phone || !message) {
        res.status(400).json({message: "Preencha todos os campos obrigatórios"})
        return
    }

    const subject = `Contato de ${firstName} ${lastName}`
    const body = `
        <p><b>Nome:</b> ${firstName}</p>
        <p><b>Sobrenome:</b> ${lastName}</p>
        <p><b>E-mail:</b> ${email}</p>
        <p><b>Telefone:</b> ${phone}</p>
        <p><b>Origem:</b> ${origin != "" ? origin : "<i>vazio</i>"}</p>
        <br><br>
        ${message}
    `

    const result = await sendMail(email, subject, body)

    if (result) {
        res.status(200).json({message: "OK"})
    } else {
        res.status(400).json({message: "Bad request!"})
    }
}

async function validateCaptcha(response) {
    const apiResponse = await fetch(process.env.RECAPTCHA_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SITE_SECRET}&response=${response}`
    }).then(response => response.json())
    
    return apiResponse.success
}

async function sendMail(customerEmail, subject, html) {
    const sendgrid = require("@sendgrid/mail")
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
        to: [process.env.CONTACT_FORM_DEFAULT_TO, customerEmail],
        replyTo: customerEmail,
        from: {
            email: "jeyoti8411@wpsavy.com",
            name: "Site Opera"
        },
        subject: subject,
        html: html
    }

    return await sendgrid.sendMultiple(msg).then(() => {
        return true
    }).catch((error) => {
        console.log(error)
        return false
    })
}
