import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'

export default function useForm(initialValues) {

    const [values, setValues] = useState(initialValues)

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        })
    }
    
    return {
        values,
        setValues,
        handleInputChange
    }
}

const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1),
        }
    }
}));

export function Form({ children }) {
    const classes = useStyle();

    return (
        <form className={classes.root} autoComplete="off">
            {children}
        </form>
    )
}


