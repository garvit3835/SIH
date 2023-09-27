const nodemailer = require("nodemailer");
require('dotenv').config();

const mail_appointment_details = async(p_mail, appointment_details) => {
		let mailTransporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "garvit1189@gmail.com",
                pass: process.env.MAIL_PASS,
            },
        });

        let mailDetails = {
            from: "garvit1189@gmail.com",
            to: p_mail,
            subject: "MediBridge - Appointment Details",
            text: appointment_details,
        };

		mailTransporter.sendMail(mailDetails, function (err, data) {
			if (err) {
				console.log(err)
			} else {
				console.log(data);
			}
		});
}

// mail_appointment_details("garvit3835@gmail.com", "sdfdsf")

module.exports = mail_appointment_details;