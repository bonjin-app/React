import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, makeStyles, Typography } from '@material-ui/core'
import { NotListedLocation } from '@material-ui/icons'
import React from 'react'
import Controls from './controls'

const useStyle = makeStyles(theme => ({
    dialog: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5),
    },
    dialogContent: {
        textAlign: 'center',
    },
    dialogTitle: {
        textAlign: 'center',
    },
    dialogAction: {
        justifyContent: 'center',
    },
    titleIcon: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            cursor: 'default',
        },
        '& .MuiSvgIcon-root': {
            fontSize: '8rem'
        },
    }
}))

const ConfirmDialog = (props) => {
    const classes = useStyle();
    const {confirmDialog, setConfirmDialog} = props;

    return (
        <Dialog
            classes={{
                paper: classes.dialog,
            }}
            open={confirmDialog.isOpen}>
            <DialogTitle className={classes.dialogTitle}>
                <IconButton disableRipple className={classes.titleIcon}>
                    <NotListedLocation/>
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant="h6">
                    {confirmDialog.title}
                </Typography>
                <Typography variant="subtitle2">
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogAction}>
                <Controls.Button
                    text="No"
                    color="default"
                    onClick={() => setConfirmDialog({
                        ...confirmDialog,
                        isOpen: false
                    })}
                />
                <Controls.Button
                    text="Yes"
                    color="secondary"
                    onClick={confirmDialog.onConfirm}
                />
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog
