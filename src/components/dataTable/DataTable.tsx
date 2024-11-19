import { createTheme, ThemeProvider } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import type {} from "@mui/x-data-grid/themeAugmentation";
import { twMerge } from "tailwind-merge";
import { useCallback, useState } from "react";
import CustomToolbar from "./CustomToolbar";

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          color: "var(--cell)",
          // maxHeight: "fit-content",
          border: "none",
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "& .MuiDataGrid-cell": {
            border: "none",
          },
        },
        columnHeader: {
          color: "var(--text-main)",
        },
        checkboxInput: {
          color: "var(--text-soft)",
        },
        footerContainer: {
          "& .MuiTablePagination-root": { color: "var(--text-main)" },
          "& .MuiTablePagination-actions button": { color: "var(--text-main)" },
        },
      },
    },
  },
});

type dataTableProps = {
  className?: string;
  title?: string;
  pageSize?: number;
  rows: GridRowsProp;
  columns: GridColDef[];
};

const DataTable = ({
  className,
  pageSize = 3,
  rows,
  columns,
  title = "My Data Table",
}: dataTableProps) => {
  const [searchText, setSearchText] = useState("");
  const [filteredRows, setFilteredRows] = useState(rows);

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value.toLowerCase();
      setSearchText(value);
      setFilteredRows(
        rows.filter(row =>
          Object.values(row).some(
            field =>
              typeof field === "string" && field.toLowerCase().includes(value)
          )
        )
      );
    },
    [rows]
  );

  return (
    <div
      className={twMerge(`p-[27px] bg-bg2 rounded-xl overflow-auto`, className)}
    >
      <ThemeProvider theme={theme}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          slots={{
            toolbar: CustomToolbar,
          }}
          slotProps={{
            toolbar: {
              handleSearch,
              searchText,
              title,
            },
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize,
              },
            },
          }}
          pageSizeOptions={[pageSize]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnResize
          disableDensitySelector
          filterDebounceMs={300}
        />
      </ThemeProvider>
    </div>
  );
};

export default DataTable;
