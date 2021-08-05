import { Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { getUsers, deleteUser } from '../Service/api'
import { Link } from 'react-router-dom';


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

    const _deleteUser = async (id) => {
        await deleteUser(id);
        _getAllUsers();
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
                    <TableCell></TableCell>
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
                            <TableCell>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{ marginRight: 10 }}
                                    component={Link}
                                    to={`/edit/${m.id}`}>Edit</Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => _deleteUser(m.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}

export default AllUsers
