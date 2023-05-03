import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <header>
        <nav>
            <Link to={'/'}>홈</Link>
            <Link to={'/login'}>로그인</Link>
            <Link to={'/page'}>페이지</Link>
        </nav>
    </header>
  )
}

