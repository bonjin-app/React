import Head from 'next/head'
import React from 'react'
import Nav from './Nav'

function Layout({ children }) {
    return (
        <>
            <Head>
                <title> My Blog </title>
                <meta keyboard="My Blog powered by Next js" />
                <meta contents="My Blog powered by Next js" />
            </Head>
            <Nav />
            <div>
                {children}
            </div>
        </>
    )
}

export default Layout
