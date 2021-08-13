import { AppBar, IconButton, makeStyles, Toolbar } from '@material-ui/core'
import {
    ExpandMore as ExpandMoreIcon,
    Sort as SortIcon
} from '@material-ui/icons';
import React from 'react'

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    appbar: {
        background: 'none',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: 1,
    },
    container: {
        textAlign: 'center',
    },
    colorText: {
        color: '#5AFF3D',
    },
    icon: {
        color: '#FFF',
        fontSize: '2rem',
    },
    title: {
        color: '#FFF',
        fontSize: '5rem',
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '5rem',
    }
}));

const Header = () => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <AppBar
                className={classes.appbar}
                elevation={0}
            >
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>
                        My<span className={classes.colorText}>Island</span>
                    </h1>
                    <IconButton className={classes.icon}>
                        <SortIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            
            <section className={classes.container}>
                <h1 className={classes.title}>
                    Welcome to <br />
                    My{' '}
                    <span className={classes.colorText}>Island</span>
                </h1>
                <IconButton>
                    <ExpandMoreIcon className={classes.goDown}/>
                </IconButton>
            </section>
        </div>
    )
}

export default Header
