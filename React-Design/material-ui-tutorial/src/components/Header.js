import { AppBar, Badge, Grid, IconButton, InputBase, Toolbar } from '@material-ui/core'
import {
    ChatBubbleOutline as ChatBubbleOutlineIcon,
    NotificationsNone as NotificationsNoneIcon,
    PowerSettingsNew as PowerSettingsNewIcon,
} from '@material-ui/icons'
import React from 'react'

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item>
                        <InputBase/>
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge
                                badgeContent={4}
                                color="secondary">
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge
                                badgeContent={3}
                                color="primary">
                                <ChatBubbleOutlineIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header
