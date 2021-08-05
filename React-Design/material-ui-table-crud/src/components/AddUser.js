import { Typography, Button, FormControl, FormGroup, Input, InputLabel, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { addUser } from '../Service/api'

const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20,
        },
    },
})

const initialValues = {
    name: '',
    username: '',
    email: '',
    phone: '',
}

const AddUser = () => {
    const classes = useStyle();
    const [user, setUser] = useState(initialValues);
    const { name, username, email, phone } = user;
    const history = useHistory();

    const onValueChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })

        console.log(user)
    }

    const addUserDetails = async () => {
        await addUser(user);
        history.push('/all');
    }

    return (
        <>
            <FormGroup className={classes.container}>
                <Typography variant="h4">Add User</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input
                        name="name"
                        value={name}
                        onChange={(e) => onValueChange(e)} />
                </FormControl>
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input
                        name="username"
                        value={username}
                        onChange={(e) => onValueChange(e)} />
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input
                        name="email"
                        value={email}
                        onChange={(e) => onValueChange(e)} />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input
                        name="phone"
                        value={phone}
                        onChange={(e) => onValueChange(e)} />
                </FormControl>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => addUserDetails()}
                >Add User</Button>
            </FormGroup>
        </>
    )
}

export default AddUser
