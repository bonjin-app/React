import { React, useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom'

function LoginPage(props) {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordHandler = (event) => {
        // setPassword(event.target.value);
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            email: email,
            password: password
        }

        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.success) {
                    props.history.push('/');

                } else {
                    alert('Error');
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
                <label>Password</label>
                <input type="password" value={password} onChange={onPasswordHandler} />

                <br />
                <button>Login</button>

            </form>
        </div>
    )
}

export default withRouter(LoginPage);
