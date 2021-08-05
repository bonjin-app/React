import {
    FormControl, InputLabel,
    MenuItem,
    Select as MuiSelect
} from '@material-ui/core';
import React from 'react'

const Select = (props) => {

    const { name, label, value, onChange, options } = props;

    return (
        <FormControl
            variant="outlined"
        >
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                name={name}
                label={label}
                value={value}
                onChange={onChange}
            >
                <MenuItem value="">None</MenuItem>
                {options.map((m, i) => {
                    return (
                        <MenuItem key={m.id} value={m.id}>{m.title}</MenuItem>
                    )
                })}
            </MuiSelect>
        </FormControl>
    )
}

export default Select
