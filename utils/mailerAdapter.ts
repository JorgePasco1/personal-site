import nodemailer from 'nodemailer';

type MailDetails = {
  sender_name: string;
  sender_email: string;
  message: string;
};

const sendEmail = (senderDetails: MailDetails): boolean => {
  const smptTransporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: senderDetails.sender_email,
    to: process.env.GMAIL_USER,
    subject: `[Personal Site] New Message from ${senderDetails.sender_name}(${senderDetails.sender_email})`,
    text: senderDetails.message,
  };

  let success = true;
  smptTransporter.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
      success = false;
    }
  });

  return success;
};

export default sendEmail;
