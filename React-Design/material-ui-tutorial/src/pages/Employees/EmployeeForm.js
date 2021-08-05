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
    
    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialValues);

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullname"
                        label="Full Name"
                        value={values.fullname}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        name="email"
                        label="Email"
                        value={values.email}
                        onChange={handleInputChange}
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
                    />
                </Grid>
            </Grid>
        </Form>
    )
}

export default EmployeeForm
