import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {FormControl, InputLabel, OutlinedInput, Card, CardContent, InputAdornment} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
}));

const CodeBankRegister = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        labelWidth={60}
                    />
                </FormControl>
            </CardContent>
        </Card>
    )
}

export default CodeBankRegister
