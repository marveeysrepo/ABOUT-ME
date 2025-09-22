
 const express = require("express")
const router = express.Router();
const nodemailer = require("nodemailer");

// set up nodemailer transporter with my email
const transporter = nodemailer.createTransport({
    console.log("EMAIL_USER:", process.env.email_user);
    console.log("PASS_USER:", process.env.pass_user);
    service: "gmail",
    auth: {
        user: process.env.email_user,
        pass: process.env.pass_user
    }
});

//handle post request for form submission
router.post('/', (req, res) => {
    //get form input data from request body
    const { username, email, subject, message } = req.body;
    if (!username || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

//Email content body
const mailOptions = {
    from: `"${username}" ${email}`,
    to: process.env.email_user,
    subject: `New contact form submission: ${subject}`,
    html: `
    <h2 style="color: #3498DB;text-align:center;">Contact Form Submission</h2>
    <p><strong>Name: </strong> ${username}</p>
    <p><strong>Email: </strong> ${email}</p>
    <p><strong>Message: </strong>${message}</p>
   <br> <br> <br>
    <p>Thank you for sending us a message, we'll get back to you within 48 hours.  Best Regards!
  </p>  <br> <br> <br> <br>
  
  <p>  <em>This is an automated message.</em></p>`
};

//now send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(`Error sending email:`, error);
            return res.status(500).json({ message: 'Failed to send message to gmail, check contact route' });
        }
        console.log('Message sent %s', info.messageId);

        res.status(200).json({ message: 'Message sent to email successfully!' });
    });
});
module.exports = router;