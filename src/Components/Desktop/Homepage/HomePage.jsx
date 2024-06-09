import React, { useEffect, useState } from "react";
import Navbar from '../Navbar/Navbar'
import docimg from "../../../images/doctor.jpg";
import MobileNavbar from "../../Mobile/MobileNavbar/MobileNavbar";
import Doctor from "../Doctor/Doctor";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const navigate = useNavigate();
  // const { innerWidth: width, innerHeight: height } = window;
  // console.log(width);

  //  const [width, setWidth] = React.useState(window.innerWidth);
  //  const breakPoint = 768;

  //  useEffect(() => {
  //    const handleWindowResize = () => setWidth(window.innerWidth);
  //    window.addEventListener("resize", handleWindowResize);

  //    return () => window.removeEventListener("resize", handleWindowResize);
  //  }, []);

  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSmallScreen(true);
    }
    // const size = () =>{
    //   setSmallScreen(window.innerWidth<786);
    // };
  }, []);

  return (
    <>
      <div>{smallScreen ? <MobileNavbar /> : <Navbar />}</div>

      {/* <div>
        {width > breakPoint ? (
          <div>
            {" "}
            <Navbar />
          </div>
        ) : (
          <div><MNavbar/></div>
        )}
      </div> */}

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
            <button onClick={()=>navigate('/appointment')} className="py-5 px-10 bg-blue-500 border rounded-full mt-10 flex ml-32 text-white font-jost-medium hover:bg-blue-200 hover:text-blue-900">
              Book an apoointment
            </button>
          </div>
        </div>

        {/* div right */}
        <div className=" w-[50%] h-[93vh] pr-20 ">
          <img className="h-[40vw] " src={docimg} alt="" />
        </div>
      </div>

      {/* page2 */}
      <div>
        <h1 className="font-poppins-medium font-bold text-5xl text-blue-600">Meet The Team</h1>
          <Doctor/>
        <div>

        </div>
      </div>
    </>
  );
};

export default HomePage;
