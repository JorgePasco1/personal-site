import { NextApiResponse, NextApiRequest } from 'next';
import sendEmail from '../../../utils/mailerAdapter';

const sendContactEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const body = req.body;
  const contactDetails = body.contactDetails;

  try {
    res.status(200).json({ message: 'success' });
    console.log({ contactDetails });
    const response = await sendEmail(contactDetails);
    if (!response) {
      return res.status(500).end('Something went wrong');
    }
  } catch (e) {
    console.log(e);
    return res.status(500).end('Something Went Wrong');
  }
};

export default sendContactEmail;
