import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Paper } from "@material-ui/core";
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
      renderCell: (params) => <SimpleModal row={params} />
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
    }
  ];

  const onChange = (e) => {
    console.log(e.value);
  };

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
              disableColumnSelector={true}
              showToolbar
              hideFooter={true}
              pagination
              onCellHover={(e) => onChange(e)}
              onRowClick={(e) => console.log("RowClick", e)}
              icons={<SimpleModal />}
            ></DataGrid>
          </div>
        </div>
      </div>
    </Paper>
  );
}
