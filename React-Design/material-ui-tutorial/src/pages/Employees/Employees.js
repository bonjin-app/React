import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader'
import {
    PeopleOutlineTwoTone as PeopleOutlineTwoToneIcon, Search
} from "@material-ui/icons";
import { InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from '@material-ui/core';
import useTable from '../../components/useTable';
import * as employeeService from '../../services/employeeService';
import EmployeeForm from './EmployeeForm';
import Controls from '../../components/controls';

const useStyle = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
    searchInput: {
        width: '75%',
    }
}));

const headCells = [
    { id: 'fullname', label: 'Employee Name'},
    { id: 'email', label: 'Email Address (Personal)'},
    { id: 'mobile', label: 'Mobile Number'},
    { id: 'department', label: 'Department', disableSorting: true},
]

const Employees = () => {
    const classes = useStyle();
    const [records, setRecords] = useState(employeeService.getEmployees())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    const {
        TableHead,
        TableContainer,
        TablePagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = (e) => {
        console.log("handleSearch")
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.fullname.toLowerCase().includes(target.value))
            }
        })
    }

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
                <Toolbar>
                    <Controls.Input
                        label="Search Employees"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search/>
                                </InputAdornment>
                            )
                        }}
                        onChange={handleSearch}
                    />
                </Toolbar>

                <TableContainer>
                    <TableHead/>
                    <TableBody>
                        {recordsAfterPagingAndSorting().map((m, i) => {
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
                <TablePagination/>
            </Paper>
        </>
    )
}

export default Employees
