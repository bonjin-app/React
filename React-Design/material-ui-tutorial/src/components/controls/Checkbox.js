import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core';
import React from 'react'

const Checkbox = (props) => {

    const { name, label, value, onChange } = props;

    const convertToDefaultEventParam = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <FormControl>
            <FormControlLabel
                label={label}
                control={
                    <MuiCheckbox
                        name={name}
                        color="primary"
                        checked={value}
                        onChange={e => onChange(convertToDefaultEventParam(name, e.target.checked))}
                    />
                }
            />
        </FormControl>
    )
}

export default Checkbox
