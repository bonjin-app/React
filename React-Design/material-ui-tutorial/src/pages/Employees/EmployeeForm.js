import { Grid} from '@material-ui/core';
import React from 'react'
import Controls from '../../components/controls';
import useForm, { Form } from '../../components/useForm';
import * as employeeService from '../../services/employeeService';

const genderItems = [
    { id: 'male', title: 'Male'},
    { id: 'female', title: 'Female'},
    { id: 'other', title: 'Other'},
]
const initialValues = {
    id: 0,
    fullname: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}

const EmployeeForm = () => {

    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if ('fullname' in fieldValues) {
            temp.fullname = fieldValues.fullname ? "" : "Thid Field is required.";
        }

        if ('email' in fieldValues) {
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid.";
        }

        if ('mobile' in fieldValues) {
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimun 10 numbers required.";
        }

        if ('departmentId' in fieldValues) {
            temp.departmentId = fieldValues.departmentId.length !== 0 ? "" : "This field is required.";
        }

        setErrors({
            ...temp
        })

        if (fieldValues === values) {
            return Object.values(temp).every(x => x === "");
        }
    }
    
    const {
        values,
        setValues,
        errors,
        setErrors,
        resetForm,
        handleInputChange
    } = useForm(initialValues, true, validate);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validate()) {
            window.alert('testing...')
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullname"
                        label="Full Name"
                        value={values.fullname}
                        onChange={handleInputChange}
                        error={errors.fullname}
                    />
                    <Controls.Input
                        name="email"
                        label="Email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        name="mobile"
                        label="Mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Input
                        name="city"
                        label="City"
                        value={values.city}
                        onChange={handleInputChange}
                        error={errors.city}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Select
                        name="departmentId"
                        label="DepartmentId"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    />

                    <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />

                    <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit"
                        />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm}
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}

export default EmployeeForm
