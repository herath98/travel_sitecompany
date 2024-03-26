// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Create a transporter with SMTP configuration
        let transporter = nodemailer.createTransport({
            service: 'Gmail', // e.g., 'Gmail'
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        // Send mail with defined transport object
        let info = await transporter.sendMail({
            from: `"${name}" <${email}>`, // sender address
            to: 'herathmudiyanselageharsha@gmail.com', // list of receivers
            subject: 'New Message from Contact Form', // Subject line
            html: `<p><strong>Contact Person:</strong> ${name}</p>
               <p><strong>Contact Person Email:</strong> ${email}</p>
               <p><strong>Contact Person Message:</strong> ${message}</p>`,
        });

        console.log('Message sent: %s', info.messageId);

        res.status(200).json({ message: 'Message sent successfully!' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
