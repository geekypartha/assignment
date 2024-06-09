import React from 'react'
import DoctorCard from './DoctorCard'
import { doctorData } from './doctorData'
import { keyframes } from '@emotion/react';
import HappyClient from './HappyClient';

const Doctor = () => {
  return (
    <>
      <div className="lg:col-span-4 w-full px-72">
        <div className="flex flex-wrap justify-center bg-white pt-10">
          {doctorData.map((doc) => (
            <DoctorCard doctor={doc} />
          ))}
        </div>
        <div className="pt-32 pb-20">
          <h1 className="font-poppins-medium font-bold text-5xl text-blue-600">
            What Makes us special?
          </h1>
          <h2 className="font-poppins-regular font-bold text-gray-600 pt-12 pb-20 leading-10 text-2xl">
            At <span className='text-blue-500'>Health-Lab</span>, we provide seamless, user-friendly
            access to top-notch healthcare professionals, ensuring your peace of
            mind with every appointment. Our commitment to convenience and
            quality sets us apart, making your health our priority.
          </h2>
          <div>
            <HappyClient />
          </div>
        </div>
      </div>
    </>
  );
}

export default Doctor