'use client';
import Image from 'next/image';
import Card from '@mui/material/Card';
import { Button, CardContent, CardHeader, TextField, Typography } from '@mui/material';
import { useState } from 'react';
// import EmailPassword from 'supertokens-web-js/recipe/emailpassword';
// import axios from 'axios';

export default function ForgotPassword() {
  const [email, setEmail] = useState({id: "email", value: ""});
    console.log(email);
//   const sendEmail = async () => {
//     const res = await axios.post('/api/email-invite', {
//       name: 'Test',
//       email: 'kareemjpaes@gmail.com',
//     })

//     console.log(res);
//   }

//   const submit = async () => {
//     const {status} = await EmailPassword.signIn({
//       formFields: [email, password],
//     });

//     if (status === "OK") {
//       console.log("Success");
//     } else {
//       console.log("Error");
//     }
//   };

  return (
    <div className="grid grid-cols-2 items-center justify-items-center min-h-screen min-w-screen">
      <div className="w-full h-full bg-[url('/images/background.png')] bg-cover pl-8 pt-4">
        <Image src="/images/ambyint_icon.png" width={120} height={120} alt="Logo" />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <Card className="w-[400px] py-[10px]">
            <CardContent className='flex flex-col items-center space-y-5 px-12'>
                <CardHeader title="Forgot Your Password" />
                <Typography variant="body1">Enter your email address and we will send you password instructions if you have an account with us</Typography>
                <TextField id="outlined-email-input" className='w-full' label="Email" type="email" 
                    onInput={e => setEmail({id: "email", value: (e.target as HTMLInputElement).value})}
                />
                <Button className='w-full h-[60px] bg-[#36454F]' variant="contained" onClick={() => submit()}>Continue</Button>
                <Typography className="mt-4" variant="body2"><span className="text-[#FF6600] underline">Back to Login</span></Typography>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
