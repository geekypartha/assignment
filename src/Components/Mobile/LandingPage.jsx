import React from 'react'
import landimg from '../../images/design.jpg'
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
  return (
    <div className="">
      <div className="flex items-center justify-center ">
        <img
          className="h-full w-full bg-top  object-cover object-right"
          src={landimg}
          alt="landing image"
        />
      </div>
      <div className="pt-5">
        <h1 className="font-twitterchirp font-medium text-left pl-20 leading-normal text-4xl">
          Providing the best <br />{" "}
          <span className="text-blue-500 font-poppins-medium font-bold">
            Online{" "}
          </span>
          Medical <br />
          <span className="text-blue-500 font-poppins-medium font-bold">
            Consultation
          </span>
        </h1>
      </div>
      <div className='flex items-center justify-center px-16 pt-20'>
        <button
          onClick={() => navigate("/hero")}
          className="w-full flex items-center text-[1.24rem] justify-center py-5 px-20 bg-blue-500 border rounded-full  flex  text-white font-jost-medium hover:bg-blue-200 hover:text-blue-900"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage