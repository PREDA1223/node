const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'preciousdan666@gmail.com',
        pass: 'preda12',
    }
});
const mailOptions = {
    from: 'preciousdan666@gmail.com',
    to: "preciousosazedaniel",
    subject: "sending email using nodemailer",
    text: "that was easy"
};

transporter.sendMail(mailOptions, function(err, info){
    if(err){
        console.log(err)
    }else{
        console.log("Email sent:" + info.response);
            
    
    }
})
