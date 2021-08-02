import React from "react";
import {
    Route,
    Switch,
    Redirect,
    withRouter,
} from "react-router-dom";
import classnames from "classnames";
import { Box, Link } from '@material-ui/core'

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Notice from "../../pages/notice";
import Faq from "../../pages/faq";
import Product from "../../pages/product";

import CodeNormal from '../../pages/codes/normal'
import CodeBank from '../../pages/codes/bank'
import CodeBankRegister from "../../pages/codes/bank/register";
import CodeJob from '../../pages/codes/job'

// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
    var classes = useStyles();

    // global
    var layoutState = useLayoutState();

    return (
        <div className={classes.root}>
            <>
                <Header history={props.history} />
                <Sidebar />
                <div
                    className={classnames(classes.content, {
                        [classes.contentShift]: layoutState.isSidebarOpened,
                    })}
                >
                    <div className={classes.fakeToolbar} />
                    <Switch>
                        <Route exact path="/app/dashboard" component={Dashboard} />
                        <Route exact path="/app/product" component={Product} />

                        {/* Board */}
                        <Route exact path="/app/board/notice" component={Notice} />
                        <Route exact path="/app/board/faq" component={Faq} />

                        {/* Code */}
                        <Route exact path="/app/code/normal" component={CodeNormal} />
                        <Route exact path="/app/code/bank" component={CodeBank} />
                        <Route exact path="/app/code/bank/register" component={CodeBankRegister} />
                        <Route exact path="/app/code/job" component={CodeJob} />
                    </Switch>
                    <Box
                        mt={5}
                        width={"100%"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent="space-between"
                    >
                        <div>
                            <Link
                                color={'primary'}
                                href={'https://bonjin.co.kr'}
                                target={'_blank'}
                                className={classes.link}
                            >
                                BONJIN
                            </Link>
                            <Link
                                color={'primary'}
                                href={'https://bonjin.co.kr'}
                                target={'_blank'}
                                className={classes.link}
                            >
                                About Us
                            </Link>
                            <Link
                                color={'primary'}
                                href={'https://bonjin.co.kr'}
                                target={'_blank'}
                                className={classes.link}
                            >
                                Blog
                            </Link>
                        </div>
                    </Box>
                </div>
            </>
        </div>
    );
}

export default withRouter(Layout);
