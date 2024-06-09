import React from 'react'
import hand from '../../../images/waving-hand.png'
import SearchIcon from "@mui/icons-material/Search";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { useNavigate } from 'react-router-dom';
import DoctorCarousel from '../DoctorSection/DoctorCarousel';
import MobileNavbar from '../MobileNavbar/MobileNavbar';

const HeroMobile = () => {
    const navigate = useNavigate();
  return (
    <>
      {/* Searchbar */}
      <div className="pt-5">
        <div className="flex items-center justify-between px-10">
          <div className="text-gray-400">
            <WidgetsIcon />
          </div>
          <div
            onClick={() => navigate("/explore")}
            className="text-gray-500 cursor-pointer w-[3rem] h-[3rem] bg-gray-300 flex items-center justify-center rounded-full"
          >
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className="pt-7 flex gap-2">
        <h1 className="font-seogeUI font-medium text-left pl-10 leading-normal text-4xl">
          Welcome{" "}
          <span className="text-blue-500 font-poppins-medium font-bold">
            Partha
          </span>
        </h1>
        <img className="w-[3rem] h-[3rem]" src={hand} alt="" />
      </div>
      <div>
        <h2 className="flex text-left px-10 pt-3 font-poppins-regular text-gray-400 ">
          Welcome to Health-Lab! Choose your doctor & get appointment for
          better treatment
        </h2>
      </div>
      <div>
        <DoctorCarousel/>
      </div>
      <div>
        <MobileNavbar/>
      </div>
    </>
  );
}

export default HeroMobile