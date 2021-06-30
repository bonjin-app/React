import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { auth } from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null) {

    // null => permitAll
    // true => authenticate
    // false => notAuthenticate

    function AuthenticationCheck(props) {
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth())
                .then(response => {
                    console.log(response);

                    // 로그인 상태 
                    if (!response.payload.isAuth) {
                        if (option) {
                            props.history.push('/login');
                        }

                    } else {
                        if (adminRoute && !response.payload.isAdmin) {
                            props.history.push('/');
                        } else {
                            if (!option) {
                                props.history.push('/')
                            }
                        }
                    }
                })
        }, [])

        return (
            <SpecificComponent />
        )
    }

    return AuthenticationCheck
}