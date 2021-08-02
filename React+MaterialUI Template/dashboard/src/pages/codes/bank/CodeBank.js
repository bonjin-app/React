import React, {useEffect, useState} from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Button} from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom';
import { Pagination } from '@material-ui/lab';
import axios from 'axios'

// components
import PageTitle from "../../../components/PageTitle";

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

export default function CodeBank() {
    const classes = useStyles();

    const [codes, setCodes] = useState([]);

    useEffect(() => {
        _getCode();

        return () => {
            console.log("CodeBank Destroy")
        }
    }, [])

    const _getCode = async () => {
        const response = await axios.get('/api/admin/codes/bank');
        setCodes(response.data.data);
    }

    return (
        <>
            <PageTitle title="은행 코드 페이지" button={
                <Link
                    to="/app/code/bank/register"
                    >
                    <Button color="primary" variant="contained">등록</Button>
                </Link>
            } />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>No.</TableCell>
                        <TableCell align="center">Type.</TableCell>
                        <TableCell align="center">Code.</TableCell>
                        <TableCell align="center">Name.</TableCell>
                        <TableCell align="center">Image Url.</TableCell>
                        <TableCell align="center">Normal.</TableCell>
                        <TableCell align="center">Transfer.</TableCell>
                        <TableCell align="center">LoanAuto.</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {codes.map((m) => (
                        <TableRow key={m.id} hover>
                            <TableCell component="th" scope="row">
                                {m.id}
                            </TableCell>
                            <TableCell align="right">{m.type}</TableCell>
                            <TableCell align="right">{m.code}</TableCell>
                            <TableCell align="right">{m.name}</TableCell>
                            <TableCell align="right">{m.url}</TableCell>
                            <TableCell align="right">
                                <Checkbox
                                    checked={m.normal}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </TableCell>
                            <TableCell align="right">
                                <Checkbox
                                    checked={m.transfer}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </TableCell>
                            <TableCell align="right">
                                <Checkbox
                                
                                    checked={m.loanAuto}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination className={classes.pagenation} count={10} color="primary" />
        </>
    );
}