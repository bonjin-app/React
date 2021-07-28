import React from 'react'
import Head from 'next/head';

function HeadInfo({ title, keyboard, contents }) {
    return (
        <Head>
            <title>{title}</title>
            <meta keyboard={keyboard} />
            <meta contents={contents} />
        </Head>
    )
}

HeadInfo.defaultProps = {
    title: 'My Blog',
    keyboard: 'Blog powered by Next js',
    contents: 'practice next js',
}

export default HeadInfo
