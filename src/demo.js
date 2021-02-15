import * as React from "react";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { Paper, IconButton } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";

import SimpleModal from "./modal";
export default function DataGridDemo() {
  const columns = [
    { field: "companyId", headerName: "Company ID", flex: 0.5 },
    {
      field: "email",
      headerName: "E-Mail",
      flex: 1
    },
    { field: "phoneNumber", headerName: "Phone Number", flex: 1 },
    {
      field: "contactName",
      headerName: "Contact",
      flex: 1
    },
    {
      field: "Other Information",
      flex: 0.5,
      //  renderHeader: () => (
      //     <VisibilityIcon color="primary" />
      // ),
      renderCell: (params) => (
        <VisibilityIcon />

        // <SimpleModal
        //   row={params}
        //   onClick={console.log("On click")}
        //   onRowClick={() => console.log("Render Cell")}
        // />
      )
    }
  ];

  const rows = [
    {
      id: 1,
      companyId: 1,
      companyName: "x",
      email: "a_f****_long_email@test.de",
      phoneNumber: "055554354154",
      contactName: "flower street",
      adress: "gun street",
      companyIdCRM: "jklökl",
      manuallyProcessing: 0,
      payforSubscribtion: 0,
      payForCloud: 0,
      payForNtrip: 0,
      isAdmin: 0
    },
    {
      id: 2,
      companyId: 2,
      companyName: "x",
      email: "x@-.-",
      phoneNumber: "022990787877",
      contactName: "flower street",
      adress: "flower street",
      companyIdCRM: "jklökl",
      manuallyProcessing: 0,
      payforSubscribtion: 0,
      payForCloud: 0,
      payForNtrip: 0,
      isAdmin: 0
    },
    {
      id: 3,
      companyId: 2,
      companyName: "x",
      email: "x@-.-",
      phoneNumber: "022990787877",
      contactName: "flower street",
      adress: "flower street",
      companyIdCRM: "jklökl",
      manuallyProcessing: 0,
      payforSubscribtion: 0,
      payForCloud: 0,
      payForNtrip: 0,
      isAdmin: 0
    }
  ];

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
