import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { getUsers } from '../Service/api'


const useStyle = makeStyles({
    table: {
        width: '90%',
        margin: '50px',
    },
    thred: {
        '& > *': {
            background: '#000',
            color: '#ffffff !important',
            fontSize: 20,
        }
    },
    row: {
        '& > *': {
            fontSize: 20,
        }
    }
})

const AllUsers = () => {

    const [users, setUsers] = useState([]);
    const classes = useStyle();

    useEffect(() => {
        _getAllUsers();
    }, [])

    const _getAllUsers = async () => {
        const response = await getUsers();
        console.log(response.data)
        setUsers(response.data)
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow  className={classes.thred}>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((m, i) => {
                    return (
                        <TableRow key={i} className={classes.row}>
                            <TableCell>{m.id}</TableCell>
                            <TableCell>{m.name}</TableCell>
                            <TableCell>{m.username}</TableCell>
                            <TableCell>{m.email}</TableCell>
                            <TableCell>{m.phone}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}

export default AllUsers
