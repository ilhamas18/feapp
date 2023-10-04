import { DataGrid, GridColDef, GridValueGetterParams, GridCellParams } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { useDemoData } from '@mui/x-data-grid-generator';
import { darken, lighten, styled } from '@mui/material/styles';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'No',
    maxWidth: 70,
    flex: 1,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'kode_opd',
    headerName: 'Kode OPD',
    minWidth: 270,
    flex: 1,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'nama_opd',
    headerName: 'Nama OPD',
    minWidth: 300,
    flex: 1,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    align: 'center'
  }
];

interface propsType {
  dataOPD: any,
  loading: boolean
}

const DataOPDTable = ({ dataOPD, loading }: propsType) => {
  const handleClickTable = async (id: any) => {
    alert(id)
  }
  return (
    <div style={{ height: 500, width: '100%' }} className='bg-white dark:bg-meta-4 dark:text-white'>
      <Box sx={{
        height: 500,
        width: '100%',
        '& .cold': {
          backgroundColor: '#f7f7f7',
          color: '#1a3e72',
          '&:hover, &.Mui-hovered': {
            backgroundColor: '#e3e1e1',
            '@media (hover: none)': {
              backgroundColor: 'transparent',
            },
          },
        },
      }}>
        <DataGrid
          rows={dataOPD}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          onRowClick={handleClickTable}
          getCellClassName={(params: GridCellParams<any, any, number>) => {
            return 'cold';
          }}
          pageSizeOptions={[10]}
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  )
}

export default DataOPDTable



