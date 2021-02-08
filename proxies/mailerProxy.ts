import sgMail from '@sendgrid/mail';

import { SendGridResponse } from '../utils/types';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || 'SG.test');

type MailDetails = {
  sender_name: string;
  sender_email: string;
  message: string;
};

type SendEmailReturn = Promise<
  [SendGridResponse, unknown] | (string | SendGridResponse)[]
>;

const sendEmail = async (mailDetails: MailDetails): SendEmailReturn => {
  const msg = {
    to: process.env.GMAIL_USER || 'SG.test',
    from: process.env.GMAIL_USER || 'SG.test',
    subject: `[Personal Site] New Message from ${mailDetails.sender_name}(${mailDetails.sender_email})`,
    text: mailDetails.message,
  };

  try {
    const res = await sgMail.send(msg);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default sendEmail;
