'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Breadcrumb from "@/components/global/Breadcrumbs/Breadcrumb";
import DataOPDTable from '@/components/pages/master/dataOpdTable';
import { fetchApi } from '@/components/mixins/request';
import Swal from 'sweetalert2';
import { ImTable2 } from 'react-icons/im';
import { BsSearch } from 'react-icons/bs';

const DataMasterOPD = () => {
  const [listOPD, setListOPD] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetchApi({
      url: '/userKota/getAllUserKota/1',
      method: 'get',
      type: "auth"
    })

    if (!response.success) {
      setLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Koneksi bermasalah!',
      })
    } else {
      if (response.data.code == 200) {
        const { data } = response.data;

        let temp: any = [];
        data.forEach((el: any, i: number) => {
          temp.push({
            id: i + 1,
            kode_opd: el.kode_opd,
            nama_opd: el.nama_opd
          })
        })
        setListOPD(temp)
        setLoading(false);
      }
    }
  }

  const gradientStyle = {
    width: '100%',
    background: 'linear-gradient(to right, #00bcd4, #2196f3)',
  };

  return (
    <>
      <Breadcrumb pageName="Data Perangkat Daerah" />
      <div className="title bg-white rounded-xl shadow-card p-4 flex flex-col gap-[7px] md:text-title-sm font-bold text-center tracking-wider dark:bg-meta-4 dark:text-white">
        <div>Daftar List Perangkat Daerah</div>
        <div>Pemerintah Kota Madiun</div>
      </div>
      <div className="body mt-10">
        <div style={gradientStyle}>
          <div className='px-4 flex text-white py-4 space-x-6 font-bold items-center'>
            <ImTable2 size={20} />
            <div className='text-title-xsm'>Satuan Kerja Perangkat Daerah</div>
          </div>
        </div>
        <DataOPDTable dataOPD={listOPD} loading={loading} />
      </div>
    </>
  )
}

export default DataMasterOPD