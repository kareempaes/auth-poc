import * as sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(req);
    console.log(res);
  
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
  
  const msg = {
    to: 'kareem.paes@ambyint.com', // Change to your recipient
    from: 'sender@example.com', // Change to your verified sender
    subject: 'This is a simple message',
    text: 'which contains some text',
    html: '<strong>and some html</strong>',
  }
  
  sgMail.send(msg)
}