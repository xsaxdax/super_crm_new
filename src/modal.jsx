import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Popover, Paper } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";

//get the row height from the props: props.row.api.state.density
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const rows = useState(props.row.row);

  const handleClick = (event) => {
    // console.log("Event", event);
    // console.log("getColumnIndex", props.row.api.getRenderContextState());
    // console.log("select Rows", props.row.api.getColumnFromField());
    console.log("Props", props);

    // console.log(
    //   "Props ", props.row.api.columnHeadersElementRef.current.innerHTML
    // );
    setAnchorEl(event.currentTarget);
    // props.row.api.rootElementRef);

    //  rowCheck();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // const rowCheck = () => {
  //   console.log("rowCheck", props.row.api.rootElementRef);
  // };

  return (
    <div>
      <IconButton
        color="primary"
        aria-label="grid eye"
        component="span"
        onClick={handleClick}
        aria-describedby={id}
      >
        <VisibilityIcon />
      </IconButton>

      {/*div here to change Icon Position */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 0, left: 0 }}
        anchorOrigin={{
          vertical: "center",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "right"
        }}
      >
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="left">Company Name</TableCell>
                <TableCell align="left">E-Mail</TableCell>
                <TableCell align="left">Number</TableCell>
                <TableCell align="left">Contact</TableCell>
                <TableCell align="left">Adress</TableCell>
                <TableCell align="left">ID CRM</TableCell>
                <TableCell align="left">Processing</TableCell>
                <TableCell align="left">Subscribtion</TableCell>
                <TableCell align="left">Cloud</TableCell>
                <TableCell align="left">Ntrip</TableCell>
                <TableCell align="left">Admin</TableCell>
              </TableRow>
            </TableHead>
            {/*  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {" "}
                          {row.id}
                        </TableCell>
                      </TableRow>
                    ))}
                    </TableBody> */}
          </Table>
        </Paper>
      </Popover>
    </div>
  );
}
