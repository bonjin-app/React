import { Button, makeStyles } from '@material-ui/core';
import React from 'react'

const useStyle = makeStyles(theme => ({
    root: {
        minWidth: 0,
        margin: theme.spacing(0.5),
    },
    secondary: {
        backgroundColor: theme.palette.secondary.light,
        '& .MuiButton-label': {
            color: theme.palette.secondary.main
        }
    },
    primary: {
        backgroundColor: theme.palette.primary.light,
        '& .MuiButton-lable': {
            color: theme.palette.primary.main
        }
    }
}))

const ActionButton = (props) => {
    const classes = useStyle();
    const { color, children, onClick } = props;

    return (
        <Button
            className={`${classes.root} ${classes[color]}`}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

export default ActionButton
