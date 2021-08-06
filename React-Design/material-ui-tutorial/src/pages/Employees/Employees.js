import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader'
import {
    Add,
    DeleteOutline,
    EditOutlined,
    PeopleOutlineTwoTone as PeopleOutlineTwoToneIcon, Search
} from "@material-ui/icons";
import { InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from '@material-ui/core';
import useTable from '../../components/useTable';
import * as employeeService from '../../services/employeeService';
import EmployeeForm from './EmployeeForm';
import Controls from '../../components/controls';
import Popup from '../../components/controls/Popup';
import Notification from '../../components/Notification';

const useStyle = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
    searchInput: {
        width: '75%',
    },
    newButton: {
        position: 'absolute',
        right: '10px',
    }
}));

const headCells = [
    { id: 'fullname', label: 'Employee Name'},
    { id: 'email', label: 'Email Address (Personal)'},
    { id: 'mobile', label: 'Mobile Number'},
    { id: 'department', label: 'Department'},
    { id: 'actions', label: 'Actions', disableSorting: true },
]

const Employees = () => {
    const classes = useStyle();
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [records, setRecords] = useState(employeeService.getEmployees())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false);
    const [notify, setNotify] = useState({isOpen: false, message: '', type: ''})

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

    const addOrEdit = (employee, resetForm) => {
        if (employee.id === 0) {
            employeeService.insertEmployee(employee);
        } else {
            employeeService.updateEmployee(employee);
        }

        resetForm();
        setRecordForEdit(null);
        setOpenPopup(false);
        setRecords(employeeService.getEmployees());
        setNotify({
            isOpen: true,
            message: 'Submitted Successfully',
            type: 'success'
        })
    }

    const openInPopup = (item) => {
        setRecordForEdit(item);
        setOpenPopup(true);
    }

    const onDelete = (id) => {
        if (window.confirm('Are uou sure to delete this record?')) { 
            employeeService.deleteEmployee(id);
            setRecords(employeeService.getEmployees());
            setNotify({
                isOpen: true,
                message: 'Deleted Successfully',
                type: 'error'
            })
        }
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
                    <Controls.Button
                        className={classes.newButton}
                        text="Add New"
                        variant="outlined"
                        startIcon={<Add />}
                        onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
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
                                        <TableCell>
                                            <Controls.ActionButton
                                                color="primary"
                                                onClick={() => { openInPopup(m) }}
                                            >   
                                                <EditOutlined fontSize="smail"/>
                                            </Controls.ActionButton>
                                            <Controls.ActionButton
                                                color="secondary"
                                                onClick={() => onDelete(m.id)}
                                            >   
                                                <DeleteOutline fontSize="smail"/>
                                            </Controls.ActionButton>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </TableContainer>
                <TablePagination/>
            </Paper>

            <Popup
                title="Employee Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <EmployeeForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit}
                />
            </Popup>
            <Notification
                notify={notify}
                setNotify={setNotify}
            />
        </>
    )
}

export default Employees
