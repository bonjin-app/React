import React from 'react'
import Link from 'next/link';
import styled from '../styles/Nav.module.css'

function Nav() {
    return (
        <nav className={styled.nav}>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/photo">
                        Photo
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
