import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
    Dashboard as DashboardIcon,
    NotificationsNone as NotificationsIcon,
    HelpOutline as FAQIcon,
    Policy as PolicyIcon,
    Ballot as BallotIcon,
    ArrowBack as ArrowBackIcon,
    List as ListIcon,
    AccountBalanceWallet as AccountBalanceWalletIcon,
    People as PeopleIcon,
    AccountBalance as AccountBalanceIcon,
    Code as CodeIcon,
    Web as WebIcon,
    CompareArrows as CompareArrowsIcon,
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
    { type: 'title', label: 'PAGES' },
    { label: "대시보드", link: "/app/dashboard", icon: <DashboardIcon /> },
    { label: "코드 관리", link: "/app/code", icon: <CodeIcon /> },
    { label: "메뉴 관리", link: "/app/menu", icon: <ListIcon /> },
    { label: "이체 관리", link: "/app/transfer", icon: <CompareArrowsIcon /> },
    { label: "계좌 관리", link: "/app/account", icon: <AccountBalanceWalletIcon /> },
    { label: "게시판 관리", link: "/app/board", icon: <NotificationsIcon /> },
    { label: "운영 관리", link: "/app/operation", icon: <BallotIcon /> },
    { label: "상품 관리", link: "/app/product", icon: <WebIcon /> },
    { label: "대출 관리", link: "/app/loan", icon: <AccountBalanceIcon /> },
    { label: "회원 관리", link: "/app/user", icon: <PeopleIcon /> },
    { label: "약관 관리", link: "/app/policy", icon: <PolicyIcon /> },
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
