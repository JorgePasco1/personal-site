import { NextApiResponse, NextApiRequest } from 'next';
import sendEmail from '../../../utils/mailerAdapter';

const sendContactEmail = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const contactDetails = req.body;

  try {
    res.status(200).json({ message: 'success' });
    console.log({ contactDetails });
    const response = sendEmail(contactDetails);
    if (!response) {
      return res.status(500).end('Something went wrong');
    }
  } catch (e) {
    console.log(e);
    res.status(500).end('Something Went Wrong');
  }
};

export default sendContactEmail;
