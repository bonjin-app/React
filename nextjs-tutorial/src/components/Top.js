import React from 'react'
import { Header } from 'semantic-ui-react'
import Gnb from './Gnb'

function Top() {
    return (
        <div>
            <img src="/images/angma.jpeg" alt="logo" />
            <Header as="h1">BONJIN</Header>
            <Gnb />
        </div>
    )
}

export default Top
