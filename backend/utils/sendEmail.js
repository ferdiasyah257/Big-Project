const nodemailer = require('nodemailer')

var smtpTransport = require('nodemailer-smtp-transport')

const sendEmail = async options => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD
        }
      });
    // try {
    //   const transporter = nodemailer.createTransport(smtpTransport({

    //     service: "gmail",
    //             host: "smtp.gmail.com",
    //             port: process.env.SMTP_PORT,
    //             auth: {
    //               user: "process.env.SMTP_EMAIL",
    //               pass: "process.env.SMTP_PASSWORD"
    //             }
    //           }));

    //           const message = {
    //             from: `${process.env.SMTP_FROM_NAME}<${process.env.SMTP_FROM_EMAIL}`,         
    //             to: options.email,
    //             subject: options.subject,
    //             text: options.message  
    //         }
        
    //           
    // } catch (error) {
    //   console.error(error);
    // }
    

      const message = {
          from: `${process.env.SMTP_FROM_NAME}<${process.env.SMTP_FROM_EMAIL}>`,
          to: options.email,
          subject: options.subject,
          text: options.message  
      }

      await transporter.sendMail(message)

}

module.exports = sendEmail;