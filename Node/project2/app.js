console.log("app started")

const mailer  = require('nodemailer')

let transport = mailer.createTransport({
    service:'gmail',
    auth:{
        user:"mohammedzakriakhank@gmail.com",
        pass:''
    }
})

let messageOb = {
    from:'mohammedzakriakhank@gmail.com',
    to:'mohammedzakriakhanz@gmail.com',
    subject:"email sending using node js ",
    text:"this mail is send using node js nodemailer"
}

transport.sendMail(messageOb,(error,info)=>
{
    if(error) console.log(error)

    else{
        console.log("Email send")
        console.log(info.response)
    }
})