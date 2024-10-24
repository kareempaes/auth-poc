'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import {CardContent, CardHeader, Typography, TextField, Button} from '@mui/material';
import { makeStyles } from '@mui/styles';

export default function Login() {
  let loginTitle = 'Login to the Ambyint Platform'
  let [emailInput, setEmailInput] = useState('')
  let passwordTitle = `Enter Password for`

  const useStyles = makeStyles(() => ({
    emailView: {
      display: "none",
    },

    passwordView: {
      display: "block"
    }
  }))

  const continueToPassword = () => {
    let loginText = document.getElementById('login-title') as HTMLElement | null
    let EmailInput = document.querySelector('.email-view') as HTMLElement | null
    let passwordView = document.querySelector('.password-view') as HTMLElement | null
    if(loginText) {
      loginText.textContent = passwordTitle
    }
    if(EmailInput) {
       EmailInput.style.display = 'none'
    }
    if(passwordView) {
      passwordView.style.display = 'block'
      passwordView.classList.remove('hidden') 
    }
    
    console.log('continuing')
  }


    return (
      <div className="grid grid-cols-2 items-center justify-items-center min-h-screen min-w-screen">
        <div className="w-full h-full bg-[url('/images/background.png')] bg-cover pl-8 pt-4">
          <Image src="/images/ambyint_icon.png" width={120} height={120} alt="Logo" />
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Card className='w-[395px] h-fit space-5 px-12 pb-5'>
            <CardContent className='flex flex-col items-center '>
              <CardHeader title="Welcome"></CardHeader>
              <Typography id='login-title' className='pb-5'>{loginTitle}</Typography>
              <TextField id="outlined-email-input" type="email" label="Email" className='w-full email-view'></TextField>
              <TextField id="outlined-password-input" type="Password" label="Password" className='w-full hidden password-view'></TextField>
            </CardContent>
            <Button  className='bg-[#36454F] h-[62px] w-full' variant='contained' onClick={() => continueToPassword()}>Continue</Button>
            <div className='flex items-center justify-center py-5'>
              <div className='flex-grow border-t border-gray-300'></div>
              <span className='px-4 text-gray-500'>OR</span>
              <div className='flex-grow border-t border-gray-300'></div>
            </div>
            <Button variant='contained' className='bg-[#36454F] w-full h-[62px]'><Image src="/images/Microsoft.png" width={20} height={20} className='mr-2' alt=" Microsoft Logo" />Continue to Microsift</Button>
          </Card>
        </div>
      </div>
    )
  }