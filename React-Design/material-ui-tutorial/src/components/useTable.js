import { makeStyles, Table, TableCell, TableHead as MuiTableHead, TableRow } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles(theme => ({
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            color: theme.palette.main,
            backgroundColor: theme.palette.primary.light,
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer',
        }
    }
}));

const useTable = (records, headCells) => {
    const classes = useStyle();

    const TableContainer = (props) => (
        <Table className={classes.table}>
            {props.children}
        </Table>
    )

    const TableHead = (props) => {
        return (
            <MuiTableHead>
                <TableRow>
                    {headCells.map((m) => {
                        return (
                            <TableCell key={m.id}>
                                {m.label}
                            </TableCell>
                        )
                    })}

                </TableRow>
            </MuiTableHead>
        )
    }

    return {
        TableHead,
        TableContainer
    }
}

export default useTable
