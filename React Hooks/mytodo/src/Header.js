import React from 'react'
import './Header.css'

const Header = (props) => {
    return (
        <div>
            <h1>HELLO TODO 애플리케이션</h1>
            <div className="count-info">해야할 일이 {props.todos.length} 개가 있습니다.</div>
        </div>
    )
}

export default Header
