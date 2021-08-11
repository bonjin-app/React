import { AppBar, Box, Button, Divider, Drawer, Grid, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles, Switch, Toolbar, Typography, useTheme } from '@material-ui/core';
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
        backgroundColor: theme.palette.background.dark,
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

const videos = [
    {
        id: 1,
        title:
            'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
        channel: 'Lucas Nhimi',
        views: '11 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb1.png',
    },
    {
        id: 2,
        title:
            'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
        channel: 'Lucas Nhimi',
        views: '957 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb2.png',
    },
    {
        id: 3,
        title:
            'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
        channel: 'Lucas Nhimi',
        views: '106 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb3.png',
    },
    {
        id: 4,
        title:
            'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
        channel: 'Lucas Nhimi',
        views: '5,6 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb4.png',
    },
    {
        id: 5,
        title:
            'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
        channel: 'Lucas Nhimi',
        views: '2,2 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb5.png',
    },
    {
        id: 6,
        title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
        channel: 'Lucas Nhimi',
        views: '233 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb6.png',
    },
    {
        id: 7,
        title:
            'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
        channel: 'Lucas Nhimi',
        views: '118 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb7.png',
    },
    {
        id: 8,
        title:
            'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
        channel: 'Lucas Nhimi',
        views: '1,9 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb8.png',
    },
];

const Home = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    const { darkMode, setDarkMode } = props;

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} color='inherit'>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuIcon}
                        aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <img className={classes.logo} src={
                        theme.palette.type === 'dark'
                            ? '/images/branco.png'
                            : '/images/preto.png'} alt='' />
                    <div className={classes.glow} />
                    <Switch
                        className={classes.icons}
                        value={darkMode}
                        onChange={() => {
                            setDarkMode(!darkMode)
                        }}
                    />
                    <IconButton
                        edge="start"
                        className={classes.icons}
                        aria-label="menu">
                        <AppsIcon />
                    </IconButton>
                    <IconButton
                        edge="start"
                        className={classes.icons}
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

            <Box display='flex'>
                <Hidden mdDown>
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
                </Hidden>

                <Box p={8}>
                    <Toolbar />
                    <Typography
                        variant='h5'
                        color='textPrimary'
                        style={{ fontWeight: 800, }}
                    >
                        추천
                    </Typography>

                    <Grid container spacing={4}>
                        {videos.map((m, i) => {
                            return (
                                <Grid key={i} item lg={3} md={4} sm={6} xs={12}>
                                    <Box>
                                        <img
                                            style={{ width: '100%' }}
                                            alt={m.title}
                                            src={m.thumb}
                                        />
                                        <Box>
                                            <Typography
                                                style={{ fontWeight: 600 }}
                                                gutterBottom
                                                variant='body1'
                                                color='textPrimary'
                                            >
                                                {m.title}
                                            </Typography>
                                            <Typography
                                                display='block'
                                                variant='body2'
                                                color='textSecondary'
                                            >
                                                {m.channel}
                                            </Typography>
                                            <Typography variant='body2' color='textSecondary'>
                                                {`${m.views} • ${m.date}`}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            </Box>

            asdfsadgsafs
        </div>
    )
}

export default Home
