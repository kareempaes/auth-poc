'use client';
import Image from 'next/image';
import Card from '@mui/material/Card';
import { Button, CardContent, CardHeader, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import EmailPassword from 'supertokens-web-js/recipe/emailpassword';
// import sgMail from '@sendgrid/mail';

export default function Home() {
  const [email, setEmail] = useState({id: "email", value: ""});
  const [password, setPassword] = useState({id: "password", value: ""});

  const submit = async () => {
    const {status} = await EmailPassword.signIn({
      formFields: [email, password],
    });

    if (status === "OK") {
      console.log("Success");
    } else {
      console.log("Error");
    }
  };

  return (
    <div className="grid grid-cols-2 items-center justify-items-center min-h-screen min-w-screen">
      <div className="w-full h-full bg-[url('/images/background.png')] bg-cover pl-8 pt-4">
        <Image src="/images/ambyint_icon.png" width={120} height={120} alt="Logo" />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <Card className="w-[400px] h-[620px]">
          <CardContent className='flex flex-col items-center space-y-5 px-12'>
            <Image src="/images/ambyint_icon.png" width={200} height={200} alt="Logo" />
            <CardHeader title="Welcome" />
            <Typography variant="body1">Login to the Ambyint Platform.</Typography>
            <TextField id="outlined-email-input" className='w-full' label="Email" type="email" 
              onInput={e => setEmail({id: "email", value: (e.target as HTMLInputElement).value})}
            />
            <TextField id="outlined-password-input" className='w-full' label="Password" type="password" autoComplete="current-password"
              onInput={e => setPassword({id: "password", value: (e.target as HTMLInputElement).value})}
            />
            <Typography className="self-start" variant="body2">Forgot your password?</Typography>
            <Button className='w-full h-[60px] bg-[#36454F]' variant="contained" onClick={() => submit()}>Continue</Button>
            <div className='flex w-full justify-center items-center h-[20px]'>
              <hr className="w-full h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
              <Typography className='px-4' variant="body2">OR</Typography>
              <hr className="w-full h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
            </div>
              <Button className='w-full h-[60px] bg-[#36454F]' variant="contained">Continue with Microsoft</Button>
          </CardContent>
        </Card>
        <Typography className="mt-4" variant="body2">Trouble Signing In? <span className="text-[#FF6600] underline">Contact Us</span></Typography>
      </div>
    </div>
  );
}
