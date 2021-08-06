import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import React from 'react'
import Controls from '../../components/controls';

const useStyle = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5),
    },
    dialogTitle: {
        paddingRight: 0,
    }
}))

const Popup = (props) => {
    const classes = useStyle();

    const {title, children, openPopup, setOpenPopup} = props;

    return (
        <Dialog
            classes={{
                paper: classes.dialogWrapper
            }}
            open={openPopup}
            maxWidth="md"
        >
            <DialogTitle className={classes.dialogTitle}>
                <div style={{
                    display: 'flex',
                }}>
                    <Typography
                        variant="h6"
                        component="div"
                        style={{ flexGrow: 1}}
                    >{title}</Typography>
                    
                    <Controls.ActionButton
                        color="secondary"
                        onClick={() => setOpenPopup(false)}
                    >
                        <CloseIcon/>
                    </Controls.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent
                dividers
            >
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Popup
