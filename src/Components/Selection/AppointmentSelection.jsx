import React, { useEffect, useState } from 'react'
import MobileAppointment from '../Mobile/Appointment/MobileAppointment';
import Appointment from '../Desktop/Appointment/Appointment'

const AppointmentSelection = () => {
     const [smallScreen, setSmallScreen] = useState(window.innerWidth < 786);

     useEffect(() => {
       setSmallScreen(window.innerWidth < 768);
     }, []);
  return (
    <div>
      <div>{smallScreen ? <MobileAppointment /> : <Appointment />}</div>
    </div>
  );
}

export default AppointmentSelection