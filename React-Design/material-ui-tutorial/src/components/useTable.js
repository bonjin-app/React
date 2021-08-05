import { Table } from '@material-ui/core'
import React from 'react'

const useTable = (records, headCells) => {

    const TableContainer = (props) => (
        <Table>
            {props.children}
        </Table>
    )

    return {
        TableContainer
    }
}

export default useTable
