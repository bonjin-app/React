import { makeStyles, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react'

/**
 * @description @material-ui/lab
 * @param {*} props 
 * @returns 
 */


const useStyle = makeStyles(theme => ({
    root: {
        top: theme.spacing(9),
    }
}))

const Notification = (props) => {
    const classes = useStyle();
    const { notify, setNotify } = props;

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        
        setNotify({
            ...notify,
            isOpen: false
        })
    }

    return (
        <Snackbar
            className={classes.root}
            open={notify.isOpen}
            autoHideDuration={3000}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            onClose={handleClose}
        >
            <Alert
                severity={notify.type}
                onClose={handleClose}
            >
                {notify.message}
            </Alert>
        </Snackbar>
    )
}

export default Notification