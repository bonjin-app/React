import {
    FormControl, FormControlLabel, FormLabel, Radio,
    RadioGroup as MuiRadioGroup
} from '@material-ui/core';
import React from 'react'

const RadioGroup = (props) => {

    const { name, label, value, onChange, items } = props;

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup
                row
                name={name}
                value={value}
                onChange={onChange}
            >
                {items.map((m, i) => {
                    return (
                        <FormControlLabel
                            value={m.id}
                            control={<Radio />}
                            label={m.title}
                        />
                    )
                })}
            </MuiRadioGroup>
        </FormControl>
    )
}

export default RadioGroup
