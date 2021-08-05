import React from 'react'
import PageHeader from '../../components/PageHeader'
import EmployeeForm from './EmployeeForm'
import {
    PeopleOutlineTwoTone as PeopleOutlineTwoToneIcon
} from "@material-ui/icons";
import { makeStyles, Paper } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    }
}));

const Employees = () => {
    const classes = useStyle();

    return (
        <>
            <PageHeader
                title="New Employee"
                subTitle="Form design with validation"
                icon={
                    <PeopleOutlineTwoToneIcon
                    fontSize="large"
                    />
                }
            />
            <Paper className={classes.pageContent}>
                <EmployeeForm/>
            </Paper>
        </>
    )
}

export default Employees
