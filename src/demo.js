import * as React from "react";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { Paper, IconButton } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";

import SimpleModal from "./modal";
import {collumns} from "./columns";
import {rows} from "./rows";
export default function DataGridDemo() {
  

 

  const onChange = (e) => {
    // console.log(e.value);
  };

  const checkCell = (cell) => {
    console.log("Cell", cell);
    if (cell.field === "Other Information") {
      handleClick(cell.element.parentElement);
      console.log("right cell", cell.element.parentElement);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  // const rows = useState(props.row.row);

  const handleClick = (event) => {
    console.log("Event", event);
    setAnchorEl(event);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //const open = Boolean(anchorEl);
  //const id = open ? "simple-popover" : undefined;

  return (
    <Paper>
      <div style={{ height: 400, width: "100%" }}>
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid
              rows={rows}
              columns={columns}
              autoHeight={true}
              disableColumnMenu={true}
              disableColumnSelector={false}
              disableSelectionOnClick={true}
              showToolbar
              hideFooter={true}
              pagination
              components={{
                Toolbar: GridToolbar
              }}
              onCellHover={(e) => onChange(e)}
              onCellClick={(cell) => checkCell(cell)}
              //    onRowClick={(e) => console.log("RowClick", e)}
            ></DataGrid>

            {anchorEl ? <h1> Anchor set </h1> : <h1> Anchor not set </h1>}
          </div>
        </div>
      </div>
    </Paper>
  );
}
