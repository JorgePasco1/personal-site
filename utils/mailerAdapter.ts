import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

type MailDetails = {
  sender_name: string;
  sender_email: string;
  message: string;
};

const sendEmail = async (senderDetails: MailDetails): Promise<boolean> => {
  const transporter = nodemailer.createTransport(
    sgTransport({
      auth: {
        api_key: process.env.SENDGRID_API_KEY,
      },
    })
  );

  const mailOptions = {
    from: senderDetails.sender_email,
    to: process.env.GMAIL_USER,
    subject: `[Personal Site] New Message from ${senderDetails.sender_name}(${senderDetails.sender_email})`,
    text: senderDetails.message,
  };

  let success = true;
  transporter.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
      success = false;
    }
    console.log(response);
  });

  return success;
};

export default sendEmail;
