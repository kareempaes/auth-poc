'use client'
import { Card, CardContent, TextField, Typography, Button, SvgIcon } from '@mui/material';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import { submitNewPassword } from "supertokens-web-js/recipe/emailpassword";
import { useState } from 'react';


const useStyles = makeStyles(() => ({
    borderOne: {
        border: "1px solid gray",
        marginBottom: '20px',
        borderRadius: '5px'
    },

    lowerCase: {
        textTransform: 'lowercase'
    }
  }))

export default function PasswordUpdate () {
    const [password, setPassword] = useState("");
    const classes = useStyles()


    const submit = async (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.preventDefault();
        
        try {
            const {status} = await submitNewPassword({
                formFields: [{id: "password", value: password}],
            });

            if (status === "OK") {
                window.alert("Success");
            }
            
            if (status === "RESET_PASSWORD_INVALID_TOKEN_ERROR") {
                window.alert("Invalid token");
            }

            if (status === "FIELD_ERROR") {
                window.alert("Token theft detected");
            }
        } catch (e) {
            console.log(e);
            window.alert("An error occurred");
        };
    };

    return (
        <div className="grid grid-cols-2 items-center justify-items-center min-h-screen min-w-screen">
        <div className="w-full h-full bg-[url('/images/background.png')] bg-cover pl-8 pt-4">
          <Image src="/images/ambyint_icon.png" width={120} height={120} alt="Logo" />
        </div>
        <div>
            <Card variant='elevation' className='flex flex-col item-center w-fit px-10 py-6'>
                <CardContent className='flex flex-col item-center p-0'>
                    <Typography variant='h6' align='center' className='mb-4' fontWeight={600} >Change your password</Typography>
                    <Typography variant='body1' align='center' className='mb-4' fontWeight={400}>Login to the Ambyint Platform</Typography>
                    <TextField type='password' label='Password' id="outlined-password-input" className='mb-4' placeholder='Enter Password' onChange={
                        (e) => setPassword(e.currentTarget.value)
                    }></TextField>
                    <TextField type='password' label='Re-enter Password' id="outlined-password-input" className='mb-4' placeholder='Re-enter Password'></TextField>
                </CardContent>
                <div className={classes.borderOne}>
                <CardContent className='flex flex-col item-center'>
                    <Typography variant='subtitle2' fontWeight={600} className='mw-[270px]'>Your password must contain:</Typography>
                    <Typography variant="body2" color='#737A8E'>Atleast 12 characters in length</Typography>
                    <Typography variant='subtitle2'fontWeight={600} className='mw-[270px]'>Contain atleast 3 of the following 4 characters:</Typography>
                    <Typography variant='body2' color='#737A8E'>Lower case letters (a-z)</Typography>
                    <Typography variant='body2' color='#737A8E'>Numbers(i.e 0-9)</Typography>
                    <Typography variant='body2' color='#737A8E'>Special characters(e.g )</Typography>
                    <Typography variant='body2' color='#737A8E'>No more than 2 identical characters in a row (e.g. &apos;aaa&apos; not allowed)</Typography>
                </CardContent>
                </div>
                <Button variant='contained' disabled className='bg-[#36454F] w-full h-[62px] mb-4 normal-case' onClick={e => submit(e)}>Reset Password</Button>
                <Typography variant='body2' align='center' fontWeight={500}>Back to Login</Typography>
                <SvgIcon></SvgIcon>
            </Card>
        </div>
        </div>
    )
}