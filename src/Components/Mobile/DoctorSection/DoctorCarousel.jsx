import React, { useState } from 'react'
import MobileDoctorCard from './MobileDoctorCard';
import AliceCarousel from "react-alice-carousel";
import { doctorData } from './doctorData';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from '@mui/material';
import "react-alice-carousel/lib/alice-carousel.css";


const DoctorCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
    0: { items: 1 },
    451: { items: 1 },
    550: { items: 1},
    615: { items: 1},
    850: { items: 1 },
    1114: { items: 3.5 },
    1338: { items: 4 },
    1526: { items: 4.5 },
    1660: { items: 5 },
    1700: { items: 5.5 },
    };

    const items =  doctorData.map((item) => (
            <MobileDoctorCard doctor={item} />
          ))
  return (
    <>
      <div className="flex">
        <div className="mt-5 h-[28rem] flex flex-col w-full  rounded-t-3xl bg-white">
          <h1 className="flex px-10 pt-5 font-poppins-regular text-xl font-bold text-gray-400">
            Nearby Doctors👨‍⚕️
          </h1>
          <div className="  pt-5">
            {/* <MobileDoctorCard /> */}
            <AliceCarousel
              items={items}
              disableButtonsControls
              mouseTracking
              responsive={responsive}
              disableDotsControls
              autoPlay
              animationDuration={4000}
              infinite
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorCarousel