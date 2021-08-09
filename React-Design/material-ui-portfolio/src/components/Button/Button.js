import React from 'react'
import {Button as MuiButton} from '@material-ui/core'

// Style
import './Button.css';

const Button = (props) => {

    const { text, icon } = props;

    return (
        <MuiButton
            className='custom-btn'
            endIcon={<div className='icon-container'>{icon}</div>}>
            <span className='btn-text'>{text}</span>
        </MuiButton>
    )
}

export default Button
