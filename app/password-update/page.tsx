'use client'
import { Card, CardContent, CardHeader, TextField, Typography, Button, Container } from '@mui/material';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(() => ({
    borderOne: {
        border: "1px solid gray",
        marginBottom: '20px'
    }
  }))

export default function PasswordUpdate () {
    const classes = useStyles()
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
                    <TextField type='password' label='Password' id="outlined-password-input" className='mb-4' placeholder='Enter Password'></TextField>
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
                    <Typography variant='body2' color='#737A8E'>No more than 2 identical characters in a row (e.g. 'aaa' not allowed)</Typography>
                </CardContent>
                </div>
                <Button variant='contained' disabled className='bg-[#36454F] w-full h-[62px] mb-4'>Reset Password</Button>
                <Typography variant='body2' align='center' fontWeight={500}>Back to Login</Typography>
            </Card>
        </div>
        </div>
    )
}