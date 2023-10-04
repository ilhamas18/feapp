import RegUserKotaForm from "@/components/pages/register/userKota";
import Breadcrumb from "@/components/global/Breadcrumbs/Breadcrumb";
import { RiAccountPinBoxFill } from "react-icons/ri";

const Register = () => {
  const gradientStyle = {
    width: '100%',
    background: 'linear-gradient(to right, #00bcd4, #2196f3)',
  };

  return (
    <div className="register-container">
      <Breadcrumb pageName="Registrasi" />
      <div className="body mt-10">
        <div style={gradientStyle}>
          <div className='px-4 flex text-white py-4 space-x-6 font-bold items-center'>
            <RiAccountPinBoxFill size={20} />
            <div className='text-title-xsm'>Registrasi User Baru</div>
          </div>
        </div>
        <div className="bg-white dark:bg-meta-4">
          <RegUserKotaForm />
        </div>
      </div>
    </div>
  )
}

export default Register;