import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader'
import {
    PeopleOutlineTwoTone as PeopleOutlineTwoToneIcon
} from "@material-ui/icons";
import { makeStyles, Paper, TableBody, TableCell, TableRow } from '@material-ui/core';
import useTable from '../../components/useTable';
import * as employeeService from '../../services/employeeService';
import EmployeeForm from './EmployeeForm';

const useStyle = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    }
}));

const Employees = () => {
    const classes = useStyle();
    const [records, setRecords] = useState(employeeService.getEmployees())

    const {
        TableContainer
    } = useTable();

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
                {/* <EmployeeForm/> */}

                <TableContainer>
                    <TableBody>
                        {records.map((m, i) => {
                                return (
                                    <TableRow key={m.id}>
                                        <TableCell>{m.fullname}</TableCell>
                                        <TableCell>{m.email}</TableCell>
                                        <TableCell>{m.mobile}</TableCell>
                                        <TableCell>{m.department}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </TableContainer>
            </Paper>
        </>
    )
}

export default Employees
