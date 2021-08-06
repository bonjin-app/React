import {
    makeStyles,
    Table,
    TableCell,
    TableHead as MuiTableHead,
    TablePagination as MuiTablePagination,
    TableRow,
    TableSortLabel
} from '@material-ui/core'
import React, {useState} from 'react'

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

const useTable = (records, headCells, filterFn) => {
    const classes = useStyle();

    const pages = [5, 10, 15];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
    const [order, setOrder] = useState();
    const [orderBy, setOrderBy] = useState();

    const TableContainer = (props) => (
        <Table className={classes.table}>
            {props.children}
        </Table>
    )

    const TableHead = (props) => {
        const handleSortRequest = (id) => {
            const isAsc = orderBy === id && order === "asc";
            setOrder(isAsc ? "desc" : "asc")
            setOrderBy(id)
        }
        return (
            <MuiTableHead>
                <TableRow>
                    {headCells.map((m) => {
                        return (
                            <TableCell
                                key={m.id}
                                sortDirection={orderBy === m.id ? order : false}
                            >
                                {m.disableSorting ?
                                    m.label :
                                    <TableSortLabel
                                        active={orderBy === m.id}
                                        direction={orderBy === m.id ? order : 'asc'}
                                        onClick={() => {handleSortRequest(m.id)}}
                                    >
                                        {m.label}
                                    </TableSortLabel>
                                }
                            </TableCell>
                        )
                    })}

                </TableRow>
            </MuiTableHead>
        )
    }

    const TablePagination = () => {
        return (
            <MuiTablePagination
                component="div"
                page={page}
                rowsPerPageOptions={pages}
                rowsPerPage={rowsPerPage}
                count={records.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
            />
        )
    }

    const handlePageChange = (event, newPage) => {
        setPage(newPage)
    }

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const stableSort = (array, comparator) => {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    function getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    const recordsAfterPagingAndSorting = () => {
        return stableSort(filterFn.fn(records), getComparator(order, orderBy))
            .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    }

    return {
        TableHead,
        TableContainer,
        TablePagination,
        recordsAfterPagingAndSorting
    }
}

export default useTable
