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
                })

        }, [])

        return (
            <SpecificComponent />
        )
    }

    return AuthenticationCheck
}