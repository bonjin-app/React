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
    Assignment as AssignmentIcon,
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
    { type: 'title', label: 'MANAGEMENT' },
    { label: "대시보드", link: "/app/dashboard", icon: <DashboardIcon /> },
    {
        label: "이체 관리", link: "/app/transfer", icon: <CompareArrowsIcon />,
        children: [
            { label: "즉시 이체", link: "/app/transfer/normal" },
            { label: "카카오 이체", link: "/app/transfer/kakao" },
            { label: "1원 이체", link: "/app/transfer/auth" },
        ],
    },
    {
        label: "계좌 관리", link: "/app/account", icon: <AccountBalanceWalletIcon />,
        children: [
            { label: "CMS", link: "/app/account/cms" },
            { label: "계좌 개설 조회", link: "/app/account/kakao" },
        ],
    },
    { type: "divider" },
    { type: 'title', label: 'APP' },
    {
        label: "코드 관리", link: "/app/code", icon: <CodeIcon />,
        children: [
            { label: "전체 코드", link: "/app/code/normal" },
            { label: "은행 코드", link: "/app/code/bank" },
            { label: "직업 코드", link: "/app/code/job" },
        ],
    },
    { label: "메뉴 관리", link: "/app/menu", icon: <ListIcon /> },
    {
        label: "게시판 관리", link: "/app/board", icon: <NotificationsIcon />,
        children: [
            { label: "공지사항", link: "/app/board/notice" },
            { label: "FAQ", link: "/app/board/faq" },
        ],
    },
    {
        label: "운영 관리", link: "/app/support", icon: <BallotIcon />,
        children: [
            { label: "운영 시간", link: "/app/support/operation" },
            { label: "앱 버전", link: "/app/support/version" },
        ],
    },
    { label: "상품 관리", link: "/app/product", icon: <WebIcon /> },
    { label: "회원 관리", link: "/app/user", icon: <PeopleIcon /> },
    { label: "약관 관리", link: "/app/policy", icon: <PolicyIcon /> },
    { label: "제증명 관리", link: "/app/proof", icon: <AssignmentIcon /> },
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
