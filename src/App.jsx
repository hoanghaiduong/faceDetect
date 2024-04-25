
import { useState } from 'react';
import './App.css'
import { AppBar, Box, Button, Container, Radio, Stack } from '@mui/material';
import SearchAppBar from './components/SearchAppBar';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { alignProperty } from '@mui/material/styles/cssUtils';
import styled from 'styled-components';
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', name: 'Snow Jon', class: 'Class 1A', avatar: 'snow.jpg', present: 'Yes', absence_with_permission: 'No', unexcused_absence: 'No', time: '2024-04-26T10:00:00.000Z' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', name: 'Lannister Cersei', class: 'Class 1B', avatar: 'cersei.jpg', present: 'No', absence_with_permission: 'Yes', unexcused_absence: 'No', time: '2024-04-25T09:00:00.000Z' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', name: 'Lannister Jaime', class: 'Class 2A', avatar: 'jaime.jpg', present: 'Yes', absence_with_permission: 'No', unexcused_absence: 'No', time: '2024-04-24T08:00:00.000Z' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', name: 'Stark Arya', class: 'Class 3A', avatar: 'arya.jpg', present: 'Yes', absence_with_permission: 'No', unexcused_absence: 'Yes', time: '2024-04-23T07:00:00.000Z' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', name: 'Targaryen Daenerys', class: 'Class 2B', avatar: 'daenerys.jpg', present: 'No', absence_with_permission: 'Yes', unexcused_absence: 'No', time: '2024-04-22T06:00:00.000Z' },
  { id: 6, lastName: 'Melisandre', firstName: null, name: 'Melisandre', class: 'Class 3B', avatar: 'melisandre.jpg', present: 'Yes', absence_with_permission: 'No', unexcused_absence: 'No', time: '2024-04-21T05:00:00.000Z' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', name: 'Clifford Ferrara', class: 'Class 4A', avatar: 'clifford.jpg', present: 'No', absence_with_permission: 'No', unexcused_absence: 'Yes', time: '2024-04-20T04:00:00.000Z' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', name: 'Frances Rossini', class: 'Class 4B', avatar: 'frances.jpg', present: 'Yes', absence_with_permission: 'No', unexcused_absence: 'No', time: '2024-04-19T03:00:00.000Z' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', name: 'Roxie Harvey', class: 'Class 5A', avatar: 'roxie.jpg', present: 'Yes', absence_with_permission: 'No', unexcused_absence: 'Yes', time: '2024-04-18T02:00:00.000Z' },
];

const columns = [
  { field: 'id', headerName: 'STT', width: 70 },
  { field: 'firstName', headerName: 'StudentID', width: 130 },
  { field: 'lastName', headerName: 'Họ', width: 130 },
  { field: 'name', headerName: 'Tên', width: 130 },
  { field: 'class', headerName: 'Lớp', width: 130 },
  { field: 'avatar', headerName: 'Ảnh', width: 130 },
  {
    field: 'present',
    headerName: 'Có mặt',
    width: 70,

    renderCell: (params) => (
      <Box justifyContent={"center"} display={"flex"}>
        <Radio
          checked

          value="a"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'A' }}
        />
      </Box>
    ),
  },
  {
    field: 'absence_with_permission',
    headerName: 'Vắng có phép',
    width: 130,
    renderCell: (params) => (
      <Box justifyContent={"center"} display={"flex"}>
        <Radio
          checked

          value="a"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'A' }}
        />
      </Box>
    ),
  },
  {
    field: 'unexcused_absence',
    headerName: 'Vắng không phép',
    width: 130,
    renderCell: (params) => (
      <Box justifyContent={"center"} display={"flex"} >
        <Radio
          checked
          value="a"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'A' }}
        />
      </Box>
    ),
  },
  {
    field: 'time',
    headerName: 'Thời gian',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 160,
    valueGetter: (value, row) => `${new Date(value).toLocaleDateString()}`,
  },
  {
    field: 'action',
    headerName: 'Actions',
    width: 130,
    renderCell: (params) => (
      <Box >
        <Button>Xem</Button>
        <Button>Xoá</Button>
      </Box>
    ),
  },
];


function App() {

  return (
    <>
      <SearchAppBar />

      <Box component="section" sx={{ p: 2, m: 1 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={0}
        >
          <Stack spacing={2} direction="row">
            <Button startIcon={<CheckCircleRoundedIcon />} color="success" variant="contained" sx={{ textTransform: 'uppercase' }}>Có mặt tất cả</Button>
            <Button startIcon={<CheckCircleRoundedIcon />} color="error" variant="contained" sx={{ textTransform: 'uppercase' }}>Vắng tất cả</Button>
            <Button startIcon={<CheckCircleRoundedIcon />} color="primary" variant="outlined" sx={{ textTransform: 'uppercase', borderRadius: 5 }}>Làm mới</Button>
          </Stack>
          <Stack spacing={2} direction="row">
            <Button size='small' color="success" variant="outlined" sx={{ borderRadius: 5 }}>
              Có mặt : {`12`}
            </Button>
            <Button size='small' color="warning" variant="outlined" sx={{ borderRadius: 5 }}>
              Có phép : {`13`}
            </Button>
            <Button size='small' color="error" variant="outlined" sx={{ borderRadius: 5 }}>
              Không phép : {`12`}

            </Button>
          </Stack>
          <Stack spacing={2} direction="row">
            <Button variant="outlined" disabled>
              CẬP NHẬT
            </Button>

          </Stack>
        </Stack>
      </Box>
      <Box component="section" sx={{ m: 1 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}

          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Box>
    </>
  )
}

export default App
