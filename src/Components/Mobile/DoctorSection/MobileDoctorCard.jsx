import React from 'react'
import doc1 from '../../../images/1.jpg'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from 'react-router-dom';

const MobileDoctorCard = ({doctor}) => {
    const navigate = useNavigate();
  return (
    <>
      <div className="mx-5">
        <div className="w-full h-[22rem] bg-blue-600 rounded-3xl p-5  ">
          {/* 1st div */}
          <div className="flex items-center gap-3 justify-between">
            <div className='flex items-center gap-3'>
              <div className="w-[4rem] h-[4rem] rounded-full bg-gray-500 overflow-hidden object-cover">
                <img src={doctor.image} alt="" />
              </div>
              <div className="flex flex-col text-left">
                <h1 className="text-white font-poppins-regular text-xl font-bold">
                  {doctor.name}
                </h1>
                <h2 className="text-gray-200 font-gilroy font-bold">
                  {doctor.category}
                </h2>
              </div>
            </div>

            <div className="">
              <h1 className="font-poppins-medium text-white">
                {doctor.rating} ★
              </h1>
            </div>
          </div>
          {/* 2nd div */}
          <div className="pt-7">
            <div className="flex gap-3">
              <LocationOnIcon className="text-white" />
              <h1 className="font-jost-medium text-white text-xl">
                {doctor.location}
              </h1>
            </div>
            <div className="flex gap-3 pt-2">
              <AccessTimeIcon className="text-white" />
              <h1 className="font-jost-medium text-white text-xl">
                Available: Today
              </h1>
            </div>
          </div>
          {/* 3rd div */}
          <div className="flex items-center justify-around pt-4">
            <div className="w-[4rem] h-[2rem] text-white font-poppins-medium bg-blue-400 flex items-center justify-center rounded-xl">
              08:00
            </div>
            <div className="w-[4rem] h-[2rem] text-white font-poppins-medium bg-blue-400 flex items-center justify-center rounded-xl">
              09:00
            </div>
            <div className="w-[4rem] h-[2rem] text-white font-poppins-medium bg-blue-400 flex items-center justify-center rounded-xl">
              10:00
            </div>
            <div className="w-[4rem] h-[2rem] text-white font-poppins-medium bg-blue-400 flex items-center justify-center rounded-xl">
              11:00
            </div>
          </div>
          {/* 4th div */}
          <div className="flex items-center justify-center">
            <button
              onClick={() => navigate("/appointment")}
              className="py-5 px-10 bg-white border rounded-full mt-7 flex text-blue-500 text-xl font-jost-medium "
            >
              Book an apoointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileDoctorCard