import React from 'react'
import Nav from './Nav'

function Layout({ children }) {
    return (
        <>
            <Nav />
            <div>
                {children}
            </div>
        </>
    )
}

export default Layout
