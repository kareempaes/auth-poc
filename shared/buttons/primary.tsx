'use client';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: 'red',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
    },
}));

interface IPrimaryProps {
    name: string;
}

export default function Primary({  }: IPrimaryProps) {
    const classes = useStyles();
    return <div className={classes.container} >
        Button
    </div>
}