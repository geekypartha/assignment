import React, { useState } from 'react'
import MobileNavbar from '../MobileNavbar/MobileNavbar'
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from 'react-router-dom';
import { doctorData } from './doctorData';

const MobileAppointment = () => {
    const navigate = useNavigate();
    const [selectedTime, setSelectedTime] = useState(null);
    const [appointmentType, setAppointmentType] = useState("");
    const [description, setDescription] = useState("");
   
    const handlesubmit = (e)=>{
        e.preventDefault();
    }

    const times = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 AM"];
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
        <div className="pb-32">
          <form onSubmit={handlesubmit} className="mx-5  pt-16">
            {/* Name */}
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
            <div className="flex pt-7 gap-3 ">
              {/* Age */}
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
              {/* Gender */}
              <div className="ml-5">
                <label className="block font-poppins-medium flex pb-3 text-gray-700">
                  Gender*
                </label>
                <select
                  className=" px-5 font-poppins-regular  flex  border py-4 w-full  rounded-xl focus:outline-blue-500"
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
            {/* doctor select */}
            <div className="pt-7">
              <label
                className="block  font-poppins-medium flex pb-2 text-gray-700"
                htmlFor="doctor"
              >
                Doctor*
              </label>
              <select
                className="px-5 text-sm font-poppins-regular flex  border py-4 w-full  rounded-xl focus:outline-blue-500"
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
            {/* Time select */}
            <div className="pb-5 pt-7">
              <label className="font-poppins-medium flex pb-2 text-gray-700">
                Select Appointment Time*
              </label>
              <div className="grid grid-cols-4 text-xs gap-2">
                {times.map((time) => (
                  <button
                    type="button"
                    key={time}
                    className={`px-4 py-3 font-poppins-regular border-none rounded-3xl ${
                      selectedTime === time
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-700 border border-gray-300"
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Appointment type */}
            <div>
              <label className="block  font-poppins-medium flex pb-2 text-gray-700">
                Select Appointment Type*
              </label>
              <div className="flex flex-col space-y-2">
                <label
                  className={`block pl-5 flex  py-5 w-full font-poppins-regular  rounded-xl focus:outline-blue-500 ${
                    appointmentType === "online"
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700 "
                  }`}
                >
                  <input
                    type="radio"
                    name="appointmentType"
                    value="online"
                    className="hidden"
                    checked={appointmentType === "online"}
                    onChange={(e) => setAppointmentType(e.target.value)}
                  />
                  Online Appointment
                </label>
                <label
                  className={`block pl-5 flex  py-5 font-poppins-regular w-full  rounded-xl focus:outline-blue-500 ${
                    appointmentType === "care"
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="appointmentType"
                    value="care"
                    className="hidden"
                    checked={appointmentType === "care"}
                    onChange={(e) => setAppointmentType(e.target.value)}
                  />
                  Care Visit Appointment
                </label>
              </div>
            </div>
            {/* Describe */}
            <div className=" pt-7">
              <label className="block font-poppins-medium flex pb-3 text-gray-700">
                Describe your disease*
              </label>
              <textarea
                className="w-full px-3 py-2  rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="description"
                name="description"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            {/* Button */}
            <div className="">
              <div className=" flex items-center justify-center">
                <button
                  type="submit"
                  className="py-5 w-full flex items-center justify-center bg-blue-500 border rounded-2xl mt-7 flex text-white text-xl font-jost-medium "
                >
                  Set apoointment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default MobileAppointment