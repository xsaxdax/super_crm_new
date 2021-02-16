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
import { rows } from "./rows";
import Row from "./CollapsibleTable";





export default function MainPage() {
    return (
        <React.Fragment>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow aria-label="collapsible table">
                            <TableCell>ID</TableCell>
                            <TableCell align="right">CompanyName</TableCell>
                            <TableCell align="right">E-Mail</TableCell>
                            <TableCell align="right">Number</TableCell>
                            {/* <TableCell align="right">Contact</TableCell> <TableCell align="right">Adress</TableCell> <TableCell align="right">ID CRM</TableCell> <TableCell align="right">Processing</TableCell> <TableCell align="right">Subscribtion</TableCell> <TableCell align="right">Cloud</TableCell> <TableCell align="right">Ntrip</TableCell> <TableCell align="right">Admin</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.companyId} row={row} />
                        ))}
                        {/* {rows.map(row => (
                            <TableRow key={row.companyId}>
                                <TableCell component="th" scope="row">
                                    {row.companyId}
                                </TableCell>
                                <TableCell align="right">{row.companyName}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.phoneNumber}</TableCell>
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
                        ))} */}

                    </TableBody>

                </Table>
            </TableContainer>

        </React.Fragment >
    );
}


