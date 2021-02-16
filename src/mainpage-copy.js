// import SimpleModal from "./modal";
// import {collumns} from "./columns";
// import {rows} from "./rows";

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

// import {collumns} from "./columns";
// import {rows} from "./rows";

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function createData(id,companyId,companyName,email,phoneNumber,contactName,adress,
    companyIdCRM,manuallyProcessing,payforSubscribtion,payForCloud,payForNtrip,isAdmin) {
    return {
        id,
        companyId,
        companyName,
        email,
        phoneNumber,
        contactName,
        adress,
        companyIdCRM,
        manuallyProcessing,
        payforSubscribtion,
        payForCloud,
        payForNtrip,
        isAdmin
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.companyId}
                </TableCell>
                <TableCell align="right">{row.companyId}</TableCell>
                <TableCell align="right">{row.companyName}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phoneNumber}</TableCell>
                <TableCell align="right">{row.contactName}</TableCell>
                <TableCell align="right">{row.adress}</TableCell>
                <TableCell align="right">{row.companyIdCRM}</TableCell>
                <TableCell align="right">{row.manuallyProcessing}</TableCell>
                <TableCell align="right">{row.payforSubscribtion}</TableCell>
                <TableCell align="right">{row.payForCloud}</TableCell>
                <TableCell align="right">{row.payForNtrip}</TableCell>
                <TableCell align="right">{row.isAdmin}</TableCell>

            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
              </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell align="right">Company Name</TableCell>
                                        <TableCell align="right">E-Mail</TableCell>
                                        <TableCell align="right">Number</TableCell>
                                        <TableCell align="right">Contact</TableCell>
                                        <TableCell align="right">Adress</TableCell>
                                        <TableCell align="right">ID CRM</TableCell>
                                        <TableCell align="right">Processing</TableCell>
                                        <TableCell align="right">Subscribtion</TableCell>
                                        <TableCell align="right">Cloud</TableCell>
                                        <TableCell align="right">Ntrip</TableCell>
                                        <TableCell align="right">Admin</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody> {/*
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(historyRow.amount * row.price * 100) / 100}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    */}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
    createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
    createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

export default function CollapsibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Company Name</TableCell>
                        <TableCell align="right">E-Mail</TableCell>
                        <TableCell align="right">Number</TableCell>
                        <TableCell align="right">Contact</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


