import { React, useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom'

function RegisterPage(props) {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.target.value);
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            return alert('비밀번호가 일치하지 않습니다.');
        }

        let body = {
            email: email,
            name: name,
            password: password
        }

        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.success) {
                    props.history.push('/login');

                } else {
                    alert('Failed to sign up');
                }
            })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', 'alignItems': 'center', width: '100%', height: '100vh'
        }}>
            <form onSubmit={onSubmitHandler} style={{ display: 'flex', flexDirection: 'column' }}>
                <label>Email</label>
                <input type="email" value={email} onChange={onEmailHandler} />
                <label>Name</label>
                <input type="name" value={name} onChange={onNameHandler} />
                <label>Password</label>
                <input type="password" value={password} onChange={onPasswordHandler} />
                <label>Password Confirm</label>
                <input type="password" value={confirmPassword} onChange={onConfirmPasswordHandler} />

                <br />
                <button>SignUp</button>

            </form>
        </div>
    )
}

export default withRouter(RegisterPage);
