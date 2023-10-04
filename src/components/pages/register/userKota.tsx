'use client';
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TextInput from "@/components/common/text-input/input"
import { Button } from "@/components/common/button/button"
import { withFormik, FormikProps, FormikBag } from 'formik';
import Swal from 'sweetalert2'
import * as Yup from 'yup';
import { fetchApi } from "@/components/mixins/request";

interface FormValues {
  opd: any,
  nama: string,
  nip: string,
  password: string,
  passwordConfirm: string;
  pangkat: string,
  role: any,
}

interface OtherProps {
  title?: string;
  ref?: any;
}

interface MyFormProps extends OtherProps {
  handleSubmit: (
    values: FormValues,
    formikBag: FormikBag<object, FormValues>
  ) => void;
}

const FormField = (props: OtherProps & FormikProps<FormValues>) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    ref
  } = props;

  const [dataOPD, setDataOPD] = useState<any>([]);
  const [filteredOPD, setFilteredOPD] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchOPD();
  }, []);

  const fetchOPD = async () => {
    setLoading(true);
    const response = await fetchApi({
      url: '/opd/getAllOPD',
      method: 'get',
      type: 'auth'
    })

    if (!response.success) {
      if (response.data.code == 500) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Koneksi bermasalah!',
        })
      }
      setLoading(false);
    } else {
      const { data } = response.data;
      let temp: any = []
      data.forEach((el: any) => {
        temp.push({
          label: el.nama_opd,
          value: el.id
        })
      })
      setDataOPD(temp);
      setLoading(false);
    }
  }

  const role: any = [
    {
      label: 'Admin Kota',
      value: 1
    },
    {
      label: 'Admin OPD',
      value: 2
    },
  ]

  return (
    <React.Fragment>
      <div className="form-container">
        <form className="form-wrapper-general relative">
          <div className="px-8 flex flex-col space-y-7 justify-center">
            <div className="data flex flex-row items-center justify-between mt-6">
              <div className="dark:text-white font-medium text-title:xsm md:block hidden w-[15%]">
                Pilih Role
              </div>
              <div className="md:block hidden mr-6">:</div>
              <div className="w-full -mt-2">
                <TextInput
                  type="dropdown"
                  id="role"
                  name="role"
                  label="Role"
                  touched={touched.role}
                  errors={errors.role}
                  placeholder="Ketik dan pilih Role"
                  options={role}
                  handleBlur={handleBlur}
                  setValueSelected={handleChange}
                  change={(selectedOption: any) => {
                    handleChange({
                      target: { name: "role", value: selectedOption }
                    })
                  }}
                />
              </div>
            </div>
            <div className="data flex flex-row items-center justify-between mt-6">
              <div className="dark:text-white font-medium text-title:xsm md:block hidden w-[15%]">
                Pilih OPD
              </div>
              <div className="md:block hidden mr-6">:</div>
              <div className="w-full -mt-2">
                <TextInput
                  type="dropdown"
                  id="opd"
                  name="opd"
                  label="Perangkat Daerah"
                  touched={touched.opd}
                  errors={errors.opd}
                  placeholder="Ketik dan pilih OPD"
                  options={dataOPD}
                  handleBlur={handleBlur}
                  setValueSelected={handleChange}
                  change={(selectedOption: any) => {
                    handleChange({
                      target: { name: "opd", value: selectedOption }
                    })
                  }}
                />
              </div>
            </div>
            <div className="data flex flex-row items-center justify-between mt-6">
              <div className="dark:text-white font-medium text-title:xsm md:block hidden w-[15%]">
                Nama Lengkap
              </div>
              <div className="md:block hidden mr-6">:</div>
              <div className="w-full -mt-2">
                <TextInput
                  type="text"
                  id="nama"
                  name="nama"
                  label="Nama"
                  touched={touched.nama}
                  change={handleChange}
                  value={values.nama}
                  errors={errors.nama}
                  handleBlur={handleBlur}
                />
              </div>
            </div>
            <div className="data flex flex-row items-center justify-between mt-6">
              <div className="dark:text-white font-medium text-title:xsm md:block hidden w-[15%]">
                NIP
              </div>
              <div className="md:block hidden mr-6">:</div>
              <div className="w-full -mt-2">
                <TextInput
                  type="text"
                  id="nip"
                  name="nip"
                  label="NIP"
                  touched={touched.nip}
                  change={handleChange}
                  value={values.nip}
                  errors={errors.nip}
                  handleBlur={handleBlur}
                />
              </div>
            </div>
            <div className="data flex flex-row items-center justify-between mt-6">
              <div className="dark:text-white font-medium text-title:xsm md:block hidden w-[15%]">
                Password
              </div>
              <div className="md:block hidden mr-6">:</div>
              <div className="w-full -mt-2">
                <TextInput
                  type="password"
                  id="password"
                  name="password"
                  label="Password"
                  touched={touched.password}
                  change={handleChange}
                  value={values.password}
                  errors={errors.password}
                  handleBlur={handleBlur}
                />
              </div>
            </div>
            <div className="data flex flex-row items-center justify-between mt-6">
              <div className="dark:text-white font-medium text-title:xsm md:block hidden w-[15%]">
                Konfirmasi Password
              </div>
              <div className="md:block hidden mr-6">:</div>
              <div className="w-full -mt-2">
                <TextInput
                  type="password"
                  id="passwordConfirm"
                  name="passwordConfirm"
                  label="Konfirmasi Password"
                  touched={touched.passwordConfirm}
                  change={handleChange}
                  value={values.passwordConfirm}
                  errors={errors.passwordConfirm}
                  handleBlur={handleBlur}
                />
              </div>
            </div>
            <div className="data flex flex-row items-center justify-between mt-6">
              <div className="dark:text-white font-medium text-title:xsm md:block hidden w-[15%]">
                Pangkat / Golongan
              </div>
              <div className="md:block hidden mr-6">:</div>
              <div className="w-full -mt-2">
                <TextInput
                  type="text"
                  id="pangkat"
                  name="pangkat"
                  label="Pangkat"
                  touched={touched.pangkat}
                  change={handleChange}
                  value={values.pangkat}
                  errors={errors.pangkat}
                  handleBlur={handleBlur}
                />
              </div>
            </div>
            <div className="btn-submit mx-8 flex flex-row justify-between pb-4 mt-4 space-x-3">
              <div className="w-[8em]">
                <Button
                  variant="xl"
                  type="secondary"
                  className="button-container mb-2 mt-5"
                  rounded
                >
                  <div className="flex justify-center items-center text-[#002DBB] font-Nunito">
                    <span className="button-text">Batal</span>
                  </div>
                </Button>
              </div>
              <div className="w-[8em]">
                <Button
                  variant="xl"
                  className="button-container mb-2 mt-5"
                  loading={loading}
                  rounded
                  onClick={handleSubmit}
                >
                  <div className="flex justify-center items-center text-white font-Nunito">
                    <span className="button-text">Tambah</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

function CreateForm({ handleSubmit }: MyFormProps) {
  const FormikWithFormik = withFormik({
    mapPropsToValues: () => ({
      opd: null,
      nama: "",
      nip: "",
      password: "",
      passwordConfirm: "",
      pangkat: "",
      role: null,
    }),
    validationSchema: Yup.object().shape({
      opd: Yup.object()
        .shape({
          label: Yup.string(),
          value: Yup.number()
        })
        .required("Bagian dibutuhkan")
        .nullable(),
      nama: Yup.string()
        .required("Bagian dibutuhkan")
        .matches(/^[a-zA-Z ,.'-]+$/, "Nama hanya boleh berisi huruf latin")
        .max(50, "Nama harus lebih pendek dari 50 karakter"),
      nip: Yup.string()
        .required('Bagian dibutuhkan')
        .min(18, 'NIP harus 18 angka')
        .max(18, 'NIP harus 18 angka'),
      password: Yup.string()
        .required("Bagian dibutuhkan")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!_%*#?&]{8,}$/,
          "Minimal 8 karakter, dengan minimal 1 huruf, 1 angka, dan 1 karakter unik"
        ),
      passwordConfirm: Yup.string()
        .required("Bagian dibutuhkan")
        .oneOf(
          [Yup.ref("password"), ''],
          "Pastikan password yang kamu masukkan sama"
        ),
      pangkat: Yup.string()
        .required("Bagian dibutuhkan"),
      role: Yup.object()
        .shape({
          label: Yup.string(),
          value: Yup.number()
        })
        .required("Bagian dibutuhkan")
        .nullable(),
    }),
    handleSubmit
  })(FormField)

  return <FormikWithFormik />
}

const RegUserKotaForm = () => {
  const router = useRouter();

  const handleSubmit = async (values: FormValues) => {
    const payload = {
      nama: values.nama,
      nip: values.nip,
      password: values.password,
      pangkat: values.pangkat,
      role: values.role.value,
      nama_role: values.role.label,
      id_opd: values.opd.value
    }
    
    // const response = 
  }


  return (
    <CreateForm handleSubmit={handleSubmit} />
  )
}

export default RegUserKotaForm