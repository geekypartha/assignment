import React from 'react'
import hand from '../../../images/waving-hand.png'
import SearchIcon from "@mui/icons-material/Search";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { useNavigate } from 'react-router-dom';
import DoctorCarousel from '../DoctorSection/DoctorCarousel';
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Grid } from '@mui/material';
import BedroomChildOutlinedIcon from "@mui/icons-material/BedroomChildOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";



const HeroMobile = () => {
    const navigate = useNavigate();
  return (
    <>
      {/* Searchbar */}
      <div className="bg-gray-200">
        <div className="pt-5 ">
          <div className="flex items-center justify-between px-10">
            <div className="text-gray-600">
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
          <h2 className="flex text-left px-10 pt-3 font-poppins-regular text-gray-600 ">
            Welcome to Health-Lab! Choose your doctor & get appointment for
            better treatment
          </h2>
        </div>
        <div>
          <DoctorCarousel />
        </div>

        {/* below carousel */}
        <div className="bg-white pb-32">
          <h1 className="flex font-twitterchirp text-2xl pl-5">
            What're you looking for?
          </h1>
          {/* sections */}
          <Grid container spacing={0.2} className="pr-10">
            <Grid item xs={6}>
              <div onClick={()=>navigate('/appointment')} className="mx-5 mt-5 px-2 rounded-full py-2 bg-white w-[11rem]  font-twitterchirp shadow-2xl">
                <div className="flex items-center gap-2">
                  <div className="h-[3rem] text-gray-600 w-[3rem] bg-amber-100 rounded-full flex items-center justify-center">
                    <CalendarMonthIcon />
                  </div>
                  <h1>Appointment</h1>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="ml-1 mt-5 pl-2 pr-0 rounded-full py-2 bg-white w-[13rem]  font-twitterchirp shadow-2xl">
                <div className="flex items-center gap-2">
                  <div className="h-[3rem] w-[3rem] text-gray-600 bg-cyan-100 rounded-full flex items-center justify-center">
                    <BedroomChildOutlinedIcon />
                  </div>
                  <h1>Diagonstic center</h1>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="ml-5 mt-5 pl-2 rounded-full py-2 bg-white w-[13rem]  font-twitterchirp shadow-2xl">
                <div className="flex items-center gap-2">
                  <div className="h-[3rem] w-[3rem] text-gray-600 bg-cyan-100 rounded-full flex items-center justify-center">
                    <GroupAddOutlinedIcon />
                  </div>
                  <h1>Specielist Doctor</h1>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="mx-10 mt-5 pl-2 rounded-full py-2 bg-white w-[10.5rem] font-twitterchirp shadow-2xl">
                <div className="flex items-center gap-2">
                  <div className="h-[3rem] w-[3rem] text-gray-600 bg-amber-100 rounded-full flex items-center justify-center">
                    <ConfirmationNumberOutlinedIcon />
                  </div>
                  <h1>Booking OT</h1>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        <div>
          <MobileNavbar />
        </div>
      </div>
    </>
  );
}

export default HeroMobile