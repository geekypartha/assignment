import React from "react";
import Navbar from "../Navbar/Navbar";
import docimg from "../../images/doctor.jpg";

const HomePage = () => {
  const { innerWidth: width, innerHeight: height } = window;
  console.log(width);
  return (
    <>
      <Navbar />

      {/* Landing page */}
      <div className="flex min-h-[100vh] w-[100%]">
        {/* div r=left */}
        <div className=" w-[50%] h-[93vh]flex items-center justify-center ">
          <h1 className="font-twitterchirp text-7xl font-bold text-left mt-72 pl-32">
            Online consultations <br /> from all over the world
          </h1>
          <p className="font-gilroy text-left pl-32 pt-10 text-2xl pr-10 text-gray-500 font-medium ">
            Doctors of different specializations will take care of your health,
            anytime-anywhere
          </p>

          <div>
            <button className="p-5 bg-blue-500 border rounded-full mt-10 flex ml-32 text-white font-twitterchirp">
              Book an apooinment
            </button>
          </div>
        </div>

        {/* div right */}
        <div className=" w-[50%] h-[93vh] pr-20 ">
          <img className="h-[40vw] " src={docimg} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
