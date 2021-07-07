import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
    Home as HomeIcon,
    NotificationsNone as NotificationsIcon,
    HelpOutline as FAQIcon,
    Policy as PolicyIcon,
    Ballot as BallotIcon,
    ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";

// context
import { useLayoutState, useLayoutDispatch, toggleSidebar, } from "../../context/LayoutContext";

const structure = [
    { id: 0, type: 'title', label: 'PAGES' },
    { id: 1, label: "홈", link: "/app/dashboard", icon: <HomeIcon /> },
    { id: 6, label: "상품", link: "/app/product", icon: <BallotIcon /> },
    { id: 6, label: "약관", link: "/app/policy", icon: <PolicyIcon /> },

    { id: 3, type: "title", label: "HELP" },
    { id: 4, label: "공지사항", link: "/app/notice", icon: <NotificationsIcon /> },
    { id: 5, label: "FAQ", link: "/app/faq", icon: <FAQIcon /> },


];

function Sidebar({ location }) {
    var classes = useStyles();
    var theme = useTheme();

    // global
    var { isSidebarOpened } = useLayoutState();
    var layoutDispatch = useLayoutDispatch();

    // local
    var [isPermanent, setPermanent] = useState(true);

    useEffect(function () {
        window.addEventListener("resize", handleWindowWidthChange);
        handleWindowWidthChange();
        return function cleanup() {
            window.removeEventListener("resize", handleWindowWidthChange);
        };
    });

    return (
        <Drawer
            variant={isPermanent ? "permanent" : "temporary"}
            className={classNames(classes.drawer, {
                [classes.drawerOpen]: isSidebarOpened,
                [classes.drawerClose]: !isSidebarOpened,
            })}
            classes={{
                paper: classNames({
                    [classes.drawerOpen]: isSidebarOpened,
                    [classes.drawerClose]: !isSidebarOpened,
                }),
            }}
            open={isSidebarOpened}
        >
            <div className={classes.toolbar} />
            <div className={classes.mobileBackButton}>
                <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
                    <ArrowBackIcon
                        classes={{
                            root: classNames(classes.headerIcon, classes.headerIconCollapse),
                        }}
                    />
                </IconButton>
            </div>
            <List className={classes.sidebarList}>
                {structure.map((link, index) => (
                    <SidebarLink
                        key={index}
                        location={location}
                        isSidebarOpened={isSidebarOpened}
                        {...link}
                    />
                ))}
            </List>
        </Drawer>
    );

    // ##################################################################
    function handleWindowWidthChange() {
        var windowWidth = window.innerWidth;
        var breakpointWidth = theme.breakpoints.values.md;
        var isSmallScreen = windowWidth < breakpointWidth;

        if (isSmallScreen && isPermanent) {
            setPermanent(false);
        } else if (!isSmallScreen && !isPermanent) {
            setPermanent(true);
        }
    }
}

export default withRouter(Sidebar);
