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
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Visibility } from '@material-ui/icons';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

export default function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    console.log(row);

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell component="th" scope="row">
                    {row.companyId}
                </TableCell>
                <TableCell align="right">{row.companyName}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phoneNumber}</TableCell>

                {/* <TableCell align="right">{row.companyName}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.phoneNumber}</TableCell>
                                <TableCell align="right">{row.contactName}</TableCell>
                                <TableCell align="right">{row.adress}</TableCell>
                                <TableCell align="right">{row.companyIdCRM}</TableCell>
                                <TableCell align="right">{row.manuallyProcessing}</TableCell>
                                <TableCell align="right">{row.payforSubscribtion}</TableCell>
                                <TableCell align="right">{row.payForCloud}</TableCell>
                                <TableCell align="right">{row.payForNtrip}</TableCell>
                                <TableCell align="right">{row.isAdmin}</TableCell> */}
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <VisibilityOffIcon /> : <Visibility/>}
                    </IconButton>
                </TableCell>
                {/*  <TableCell align="right">Contact</TableCell> <TableCell align="right">Adress</TableCell> <TableCell align="right">ID CRM</TableCell> <TableCell align="right">Processing</TableCell> <TableCell align="right">Subscribtion</TableCell> <TableCell align="right">Cloud</TableCell> <TableCell align="right">Ntrip</TableCell> <TableCell align="right">Admin</TableCell>
         */}    </TableRow>
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
                                        <TableCell align="right">CompanyName</TableCell>
                                        <TableCell align="right">E-Mail</TableCell>
                                        <TableCell align="right">Number</TableCell>
                                        <TableCell align="right">Contact</TableCell> <TableCell align="right">Adress</TableCell> <TableCell align="right">ID CRM</TableCell> <TableCell align="right">Processing</TableCell> <TableCell align="right">Subscribtion</TableCell> <TableCell align="right">Cloud</TableCell> <TableCell align="right">Ntrip</TableCell>
                                        <TableCell align="right">Admin</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    <TableRow key={row.companyId}>
                                        <TableCell component="th" scope="row">
                                            {row.companyId}
                                        </TableCell>
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


                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
