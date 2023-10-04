'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 180 },
  { field: 'nik', headerName: 'NIK', width: 150 },
  { field: 'kk', headerName: 'KK', width: 150 },
  { field: 'tempatLahir', headerName: 'Tempat Lahir', width: 150 },
  { field: 'tanggalLahir', headerName: 'Tanggal Lahir', width: 150 },
  { field: 'jenisKelamin', headerName: 'Jenis Kelamin', width: 150 },
  { field: 'kecamatan', headerName: 'Kecamatan', width: 150 },
];

const rows = [
  { id: 1, name: 'Lorem Ipsum', nik: 3577020704980002, kk: 3577020704980002, tempatLahir: 'Madiun', tanggalLahir: '7 April 1998', jenisKelamin: 'Laki-laki', kecamatan: 'Manguharjo'},
  { id: 2, name: 'Lorem Ipsum', nik: 3577020704980002, kk: 3577020704980002, tempatLahir: 'Madiun', tanggalLahir: '7 April 1998', jenisKelamin: 'Laki-laki', kecamatan: 'Manguharjo'},
  { id: 3, name: 'Lorem Ipsum', nik: 3577020704980002, kk: 3577020704980002, tempatLahir: 'Madiun', tanggalLahir: '7 April 1998', jenisKelamin: 'Laki-laki', kecamatan: 'Manguharjo'},
  { id: 4, name: 'Lorem Ipsum', nik: 3577020704980002, kk: 3577020704980002, tempatLahir: 'Madiun', tanggalLahir: '7 April 1998', jenisKelamin: 'Laki-laki', kecamatan: 'Manguharjo'},
  { id: 5, name: 'Lorem Ipsum', nik: 3577020704980002, kk: 3577020704980002, tempatLahir: 'Madiun', tanggalLahir: '7 April 1998', jenisKelamin: 'Laki-laki', kecamatan: 'Manguharjo'},
  { id: 6, name: 'Lorem Ipsum', nik: 3577020704980002, kk: 3577020704980002, tempatLahir: 'Madiun', tanggalLahir: '7 April 1998', jenisKelamin: 'Laki-laki', kecamatan: 'Manguharjo'},
  { id: 7, name: 'Lorem Ipsum', nik: 3577020704980002, kk: 3577020704980002, tempatLahir: 'Madiun', tanggalLahir: '7 April 1998', jenisKelamin: 'Laki-laki', kecamatan: 'Manguharjo'},
  { id: 8, name: 'Lorem Ipsum', nik: 3577020704980002, kk: 3577020704980002, tempatLahir: 'Madiun', tanggalLahir: '7 April 1998', jenisKelamin: 'Laki-laki', kecamatan: 'Manguharjo'},
  { id: 9, name: 'Lorem Ipsum', nik: 3577020704980002, kk: 3577020704980002, tempatLahir: 'Madiun', tanggalLahir: '7 April 1998', jenisKelamin: 'Laki-laki', kecamatan: 'Manguharjo'},
  { id: 10, name: 'Lorem Ipsum', nik: 3577020704980002, kk: 3577020704980002, tempatLahir: 'Madiun', tanggalLahir: '7 April 1998', jenisKelamin: 'Laki-laki', kecamatan: 'Manguharjo'},
  { id: 11, name: 'Lorem Ipsum', nik: 3577020704980002, kk: 3577020704980002, tempatLahir: 'Madiun', tanggalLahir: '7 April 1998', jenisKelamin: 'Laki-laki', kecamatan: 'Manguharjo'}
];

const ListKependudukan = () => {
  return (
    <div className='container'>
      <div className='box p-4 border rounded-lg shadow-lg bg-white dark:bg-meta-4 border-none flex items-center justify-center text-center'>
        <div className='text-title-sm font-bold dark:text-white'>Laporan Data Kependudukan <br/>Kota Madiun</div>
      </div>

      <div className='md:mt-14 mt-6  w-full min-h-screen'>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        style={{ background: 'white' }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </div>
    </div>
  )
}

export default ListKependudukan;