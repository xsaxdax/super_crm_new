import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Popover, Paper } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";

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

  const handleClick = (event) => {
    console.log("Event", event.currentTarget);
    console.log("Element", props.row.api.rootElementRef);
    setAnchorEl(event.currentTarget);
    // props.row.api.rootElementRef);

    rowCheck();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const rowCheck = () => {
    console.log("rowCheck", props.row.api.rootElementRef);
  };

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

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 0, left: 200 }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "right"
        }}
      >
        <Paper>
          <div style={{ height: 52 * 13, width: "200px" }}>
            <div style={{ display: "flex", height: "100%" }}>
              <div style={{ flexGrow: 1 }}></div>
            </div>
          </div>
        </Paper>
      </Popover>
    </div>
  );
}
