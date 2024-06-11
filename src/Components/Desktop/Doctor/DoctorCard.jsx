import React from 'react'
import {doctorData} from './doctorData'
import doc1 from '../../../images/1.jpg'
import { useNavigate } from 'react-router-dom'


const DoctorCard = ({doctor}) => {

  const navigate = useNavigate();

  return (
    <>
      <div className=" w-[20rem] h-[32rem] rounded-3xl shadow-2xl mx-10 mt-10">
        <div className="h-[23rem]  p-5 ">
          <img
            className="h-full w-full rounded-xl shadow-md object-cover object-left-top"
            src={doctor.image}
            alt=""
          />
        </div>
        <div>
          <div className=" font-jost-light textPart bg-white ">
            <div>
              <p className="font-poppins-medium font-bold text-xl text-blue-500">
                {doctor.name}
              </p>
            </div>
            <div className="font-jost-medium pt-2">{doctor.category}</div>
            <div className="flex justify-between px-8 pt-2 items-center space-x-2">
              <p className="font-semibold ">{doctor.rating} ★</p>
              <button
                onClick={() => navigate("/appointment")}
                className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-200 hover:text-blue-900"
              >
                Book{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorCard