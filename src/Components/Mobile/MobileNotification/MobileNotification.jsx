import React from 'react'
import MobileNavbar from '../MobileNavbar/MobileNavbar'
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


const MobileNotification = () => {
  const navigate = useNavigate();
  return (
    <>
      <MobileNavbar />
      <div className="flex pt-5 pl-5 text-gray-500">
        <ArrowBackIosIcon onClick={() => navigate("/hero")} />
      </div>
      <div className="h-[52rem] w-full flex justify-center items-center">
        <h1 className="font-poppins-medium text-2xl ">
          <span onClick={() => navigate("/login")} className="text-blue-500">
            Login{" "}
          </span>
          first
        </h1>
      </div>
    </>
  );
}

export default MobileNotification