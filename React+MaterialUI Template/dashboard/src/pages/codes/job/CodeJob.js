import React from "react";
import { Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {Pagination} from '@material-ui/lab';

// components
import Widget from "../../../components/Widget";
import PageTitle from "../../../components/PageTitle";
import Table from "../../../components/Table";

const datas = [
    {
        id: 0,
        name: "Mark Otto",
        email: "ottoto@wxample.com",
        product: "ON the Road",
        price: "$25 224.2",
        date: "11 May 2017",
        city: "Otsego",
        status: "Sent"
    },
    {
        id: 1,
        name: "Jacob Thornton",
        email: "thornton@wxample.com",
        product: "HP Core i7",
        price: "$1 254.2",
        date: "4 Jun 2017",
        city: "Fivepointville",
        status: "Sent"
    },
    {
        id: 2,
        name: "Larry the Bird",
        email: "bird@wxample.com",
        product: "Air Pro",
        price: "$1 570.0",
        date: "27 Aug 2017",
        city: "Leadville North",
        status: "Pending"
    },
    {
        id: 3,
        name: "Joseph May",
        email: "josephmay@wxample.com",
        product: "Version Control",
        price: "$5 224.5",
        date: "19 Feb 2018",
        city: "Seaforth",
        status: "Declined"
    },
    {
        id: 4,
        name: "Peter Horadnia",
        email: "horadnia@wxample.com",
        product: "Let's Dance",
        price: "$43 594.7",
        date: "1 Mar 2018",
        city: "Hanoverton",
        status: "Sent"
    }
];

const useStyles = makeStyles({
    tableOverflow: {
        overflow: 'auto'
    },
    table: {
        minWidth: 700,
    },
    pagenation: {
        display: 'flex',
        padding: 24,
        justifyContent: 'center',
    },
});

export default function CodeJob() {
    const classes = useStyles();

    return (
        <>
            <PageTitle title="직업 코드" />
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Widget
                        title="Table"
                        upperTitle
                        noBodyPadding
                        bodyClass={classes.tableOverflow}
                        disableWidgetMenu>
                        <Table data={datas} />
                    </Widget>
                </Grid>
            </Grid>
            <Pagination className={classes.pagenation} count={10} color="primary" />
        </>
    );
}