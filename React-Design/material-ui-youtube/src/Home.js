import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles, Toolbar, Typography } from '@material-ui/core';
import {
    Menu as MenuIcon,
    AccountCircle as AccountCircleIcon,
    VideoCall as VideoCallIcon,
    MoreVert as MoreVertIcon,
    Apps as AppsIcon,
    Home as HomeIcon,
    Subscriptions as SubscriptionsIcon,
    Whatshot as WhatshotIcon,
    AccountBox,
    History,
    VideoLabel,
    AccountCircle,
    MusicNote,
    Sports,
    Movie,
    Games,
    Pages,
    RecentActors,
    School,
    Camera,
} from '@material-ui/icons';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none',
    },
    listItem: {
        paddingTop: 4,
        paddingBottom: 4,
    },
    listItemText: {
        fontSize: 14,
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
    },
    subheader: {
        textTransform: 'uppercase',
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
                    >로그인</Button>
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.listItemText,
                            }} primary={'홈'} />
                        </ListItem>
                        <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon><SubscriptionsIcon /></ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.listItemText,
                            }} primary={'탐색'} />
                        </ListItem>
                        <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon><WhatshotIcon /></ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.listItemText,
                            }} primary={'구독'} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon><AccountBox /></ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.listItemText,
                            }} primary={'보관함'} />
                        </ListItem>
                        <ListItem button classes={{ root: classes.listItem }}>
                            <ListItemIcon><History /></ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.listItemText,
                            }} primary={'시청 기록'} />
                        </ListItem>
                    </List>
                    <Divider />
                    <Box p={5}>
                        <Typography variant='body2'>
                            로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다.
                        </Typography>
                        <Box mt={2}>
                            <Button
                                size='large'
                                variant='outlined'
                                color='secondary'
                                startIcon={<AccountCircle />}
                            >
                                로그인
                            </Button>
                        </Box>
                    </Box>
                    <Divider />

                    <List
                        component="nav"
                        aria-labelledby='nested-list-subheader'
                        subheader={
                            <ListSubheader
                                component='div'
                                id='nested-list-subheader'
                                className={classes.subheader}
                            >
                                인기 YOUTUBE
                            </ListSubheader>
                        }
                    >
                        <ListItem button>
                            <ListItemIcon><MusicNote /></ListItemIcon>
                            <ListItemText primary={'음악'} classes={{
                                primary: classes.listItemText,
                            }} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><Sports /></ListItemIcon>
                            <ListItemText primary={'스포츠'} classes={{
                                primary: classes.listItemText,
                            }} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><Games /></ListItemIcon>
                            <ListItemText primary={'게임'} classes={{
                                primary: classes.listItemText,
                            }} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><Movie /></ListItemIcon>
                            <ListItemText primary={'영화'} classes={{
                                primary: classes.listItemText,
                            }} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><Pages /></ListItemIcon>
                            <ListItemText primary={'뉴스'} classes={{
                                primary: classes.listItemText,
                            }} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><RecentActors /></ListItemIcon>
                            <ListItemText primary={'실시간'} classes={{
                                primary: classes.listItemText,
                            }} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><School /></ListItemIcon>
                            <ListItemText primary={'학습'} classes={{
                                primary: classes.listItemText,
                            }} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><Camera /></ListItemIcon>
                            <ListItemText primary={'360 동영상'} classes={{
                                primary: classes.listItemText,
                            }} />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    )
}

export default Home
