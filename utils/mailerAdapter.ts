import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

type MailDetails = {
  sender_name: string;
  sender_email: string;
  message: string;
};

const sendEmail = async (senderDetails: MailDetails): Promise<boolean> => {
  const msg = {
    to: process.env.GMAIL_USER,
    from: process.env.GMAIL_USER,
    subject: `[Personal Site] New Message from ${senderDetails.sender_name}(${senderDetails.sender_email})`,
    text: senderDetails.message,
  };

  let success = true;
  try {
    const res = await sgMail.send(msg);
    console.log(res);
  } catch (error) {
    console.log(error);
    success = false;
  }

  return success;
};

export default sendEmail;
