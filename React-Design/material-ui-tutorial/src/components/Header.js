import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from '@material-ui/core'
import {
    ChatBubbleOutline as ChatBubbleOutlineIcon,
    NotificationsNone as NotificationsNoneIcon,
    PowerSettingsNew as PowerSettingsNewIcon,
    Search as SearchIcon,
} from '@material-ui/icons'
import React from 'react'

const useStyle = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1),
        }
    },
    btnRoot: {
        backgroundColor: 'green'
    },
    btnLabel: {
        backgroundColor: 'red',
    }
}));

const Header = () => {
    const classes = useStyle();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container
                    alignItems="center"
                >
                    <Grid item>
                        <InputBase
                            className={classes.searchInput}
                            placeholder="Search topics"
                            startAdornment={
                                <SearchIcon
                                    fontSize="small"
                                />
                            }
                        />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton>
                            {/* classes={{
                                root: classes.btnRoot,
                                label: classes.btnLabel
                            }} */}
                            <Badge
                                badgeContent={4}
                                color="secondary">
                                <NotificationsNoneIcon
                                    fontSize="small"
                                />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge
                                badgeContent={3}
                                color="primary">
                                <ChatBubbleOutlineIcon
                                    fontSize="small"
                                />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon
                                fontSize="small"
                            />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header
