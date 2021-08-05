import React from 'react'
import PageHeader from '../../components/PageHeader'
import EmployeeForm from './EmployeeForm'
import {
    PeopleOutlineTwoTone as PeopleOutlineTwoToneIcon
} from "@material-ui/icons";

const Employees = () => {
    return (
        <>
            <PageHeader
                title="New Employee"
                subTitle="Form design with validation"
                icon={
                    <PeopleOutlineTwoToneIcon
                    fontSize="large"
                    />
                }
            />
            <EmployeeForm/>
        </>
    )
}

export default Employees
