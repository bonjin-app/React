import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles({
    header: {
        background: '#111'
    }
})

const NavBar = () => {
    const classes = useStyle();

    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <Typography component="h2">Code for Interview</Typography>
                <Typography component="h2">All Users</Typography>
                <Typography component="h2">Add User</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
