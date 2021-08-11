import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import {
    Menu as MenuIcon,
    AccountCircle as AccountCircleIcon,
    VideoCall as VideoCallIcon,
    MoreVert as MoreVertIcon,
    Apps as AppsIcon,
} from '@material-ui/icons';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    appBar: {
        boxShadow: 'none',
    },
    logo: {
        height: 24,
    },
    menuIcon: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(1),
    },
    icons: {
        marginRight: theme.spacing(2),
    },
    glow: {
        flexGrow: 1,
    }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} color='inherit'>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuIcon}
                        color="inherit"
                        aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <img className={classes.logo} src={'/images/preto.png'} alt='' />
                    <div className={classes.glow} />
                    <IconButton
                        edge="start"
                        className={classes.icons}
                        color="inherit"
                        aria-label="video-call">
                        <VideoCallIcon />
                    </IconButton>
                    <IconButton
                        edge="start"
                        className={classes.icons}
                        color="inherit"
                        aria-label="menu">
                        <AppsIcon />
                    </IconButton>
                    <IconButton
                        edge="start"
                        className={classes.icons}
                        color="inherit"
                        aria-label="menu">
                        <MoreVertIcon />
                    </IconButton>
                    <Button
                        variant='outlined'
                        color="secondary"
                        startIcon={<AccountCircleIcon />}
                    >GIGAS Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Home
