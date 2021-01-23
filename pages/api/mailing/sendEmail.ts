import { NextApiResponse, NextApiRequest } from 'next';
import sendEmail from '../../../utils/mailerAdapter';

const sendContactEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const body = req.body;
  const contactDetails = body.contactDetails;

  try {
    const response = await sendEmail(contactDetails);
    if (!response) {
      // return res.status(500).end('Something went wrong');
      return res.status(400).json({ error: response });
    }
    return res.status(200).json({ message: 'success', response });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e.message });
  }
};

export default sendContactEmail;
