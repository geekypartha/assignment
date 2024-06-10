import React from 'react'
import MobileNavbar from '../MobileNavbar/MobileNavbar'
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from 'react-router-dom';
import { doctorData } from './doctorData';

const MobileAppointment = () => {
    const navigate = useNavigate();

    // const handlesubmit = (e)=>{
    //     e.preventDefault();
    // }
  return (
    <>
      <MobileNavbar />
      <div className="bg-gray-100 ">
        {/* top bar */}
        <div className="pt-5 ml-5 flex gap-28">
          <div className="flex ">
            <ArrowBackIosIcon
              onClick={() => navigate("/hero")}
              className="text-gray-400"
            />
          </div>
          <div className="flex ml-2">
            <h1 className="font-poppins-medium font-bold">Appointment</h1>
          </div>
        </div>
        {/* form */}
        <div>
          <form className="mx-5 pt-10">
            <label className="block font-poppins-medium flex pb-3 text-gray-700">
              Name*
            </label>
            <input
              className="block pl-5 flex  border py-4 w-full  rounded-xl focus:outline-blue-500"
              type="text"
              id="name"
              name="name"
              placeholder="Patient name"
              required
            />
            <div className="flex pt-3 gap-3 ">
              <div className="">
                <label className="block font-poppins-medium flex pb-3 text-gray-700">
                  Age*
                </label>
                <input
                  className="block pl-5 flex  border py-4 w-full  rounded-xl focus:outline-blue-500"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Age"
                  required
                />
              </div>

              <div className="ml-5">
                <label className="block font-poppins-medium flex pb-3 text-gray-700">
                  Gender*
                </label>
                <select
                  className=" px-5  flex  border py-4 w-full  rounded-xl focus:outline-blue-500"
                  id="gender"
                  name="gender"
                  required
                >
                  <option value="" disabled selected>
                    Select gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div>
              <label
                className="block pt-3 font-poppins-medium flex pb-2 text-gray-700"
                htmlFor="doctor"
              >
                Doctor*
              </label>
              <select
                className="px-5  flex  border py-4 w-full  rounded-xl focus:outline-blue-500"
                id="doctor"
                name="doctor"
                required
              >
                <option value="" disabled selected>
                  Select your doctor
                </option>
                {doctorData.map((doctor) => (
                  <option key={doctor.id} value={doctor.name}>
                    {doctor.name}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default MobileAppointment