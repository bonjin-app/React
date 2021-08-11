import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    border-left: 3px solid ${(props) => props.active ? props.theme.activeMenu : 'transparent'};
    width: 100%;
    padding: 0.3rem;
    padding-left: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    transition: 0.2s all ease-in-out;
`

const Icon = styled.span`

`

const Title = styled.h1`

`

const MenuItem = () => {
    return (
        <div>

        </div>
    )
}

export default MenuItem
