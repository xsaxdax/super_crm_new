import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Popover, Typography } from "@material-ui/core";
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
    setAnchorEl(event.currentTarget);
    rowCheck();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const rowCheck = () => {
    console.log("rowCheck", props.row);
  };

  const style = {
    display: "flex",
    justifyContent: "center"
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
      {/*<Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>The content of the Popper.</div>
  </Popper>*/}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left"
        }}
      >
        <Typography style={style} className={classes.typography}>
          The content of the Popover.
          <IconButton
            color="primary"
            aria-label="eye modal"
            component="span"
            onClick={handleClose}
            aria-describedby={id}
          >
            <VisibilityIcon />
          </IconButton>
        </Typography>
      </Popover>
      {/*  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
    </Modal> */}
    </div>
  );
}
