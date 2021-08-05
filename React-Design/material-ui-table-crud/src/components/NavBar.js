import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: '#111'
    },
    tabs: {
        color: '#fff',
        textDecoration: 'none',
        marginRight: 20,
    }
})

const NavBar = () => {
    const classes = useStyle();

    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <NavLink className={classes.tabs} to="/">Code for Interview</NavLink>
                <NavLink className={classes.tabs} to="/all">All Users</NavLink>
                <NavLink className={classes.tabs} to="/add">Add User</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
