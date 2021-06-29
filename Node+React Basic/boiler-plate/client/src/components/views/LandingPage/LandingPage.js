import React, { useEffect, useState } from "react";
import axios from 'axios'

function LandingPage(props) {
    useEffect(() => {
        axios.get('/api/hello').then(response => {
            console.log(response.data)
        })
    }, [])

    const onLogoutHandler = () => {
        axios.get('/api/user/logout')
            .then(response => {
                if (response.data.success) {
                    props.history.push('/login')

                } else {
                    alert('오류가 발생하였습니다.');
                }
            })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', 'alignItems': 'center', width: '100%', height: '100vh', backgroundColor: '#eaeaea'
        }}>
            <h2>시작 페이지</h2>

            <button onClick={onLogoutHandler}>로그아웃</button>
        </div>
    )
}

export default LandingPage;
