import React from 'react'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

const DatePicker = (props) => {

    const { name, label, value, onChange } = props;

    const convertToDefaultEventParam = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <MuiPickersUtilsProvider
            utils={DateFnsUtils}
        >
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                inputVariant="outlined"
                format="MMM/dd/yyyy"
                name={name}
                label={label}
                value={value}
                onChange={date => onChange(convertToDefaultEventParam(name, date))}
            />
        </MuiPickersUtilsProvider>
    )
}

export default DatePicker
