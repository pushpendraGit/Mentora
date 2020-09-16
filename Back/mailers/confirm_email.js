const nodeMailer = require('../config/nodemailer');


// this is another way of exporting a method
exports.newEmail = (user) => {
    console.log('inside newComment mailer', user.email);

    nodeMailer.transporter.sendMail({
       from: 'primenaukriu@gmail.com',
       to: comment.user.email,
       subject: "Email verification code",
       html: '<h1>Here is your email verification code h1>' 
    }, (err, info) => {
        if (err){
            console.log('Error in sending mail', err);
            return;
        }

        console.log('Message sent', info);
        return;
    });
}