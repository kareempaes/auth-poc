import * as sgMail from '@sendgrid/mail';
import { NextRequest } from 'next/server';

interface EmailFormData {
    name: string;
    email: string;
}

export async function POST(req: NextRequest) {
  const { name, email } = (await req.json()) as EmailFormData;     
  
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
  const templateId = process.env.SENDGRID_INVITE_TEMPLATE_ID as string;
  const from = process.env.SENDGRID_SENDER as string;
  
  const msg = {
    from,
    templateId,
    personalizations: [
      {
        to: email,
        dynamic_template_data: {
          senderName: name,
        },
      },
    ],
  }

  try {
    console.log(msg.personalizations);
    await sgMail.send(msg);
    return Response.json({ message: 'Email sent' });
  } catch (error) {
    console.error(error);
    return Response.json({ message: 'Error sending email' });
  } 
}