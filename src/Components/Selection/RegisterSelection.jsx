import React, { useEffect, useState } from 'react'
import SignUpMobile from '../Mobile/LoginMobile/SignUpMobile';
import SignUp from '../Desktop/Authentication/SignUp'


    
const RegisterSelection = () => {
     const [smallScreen, setSmallScreen] = useState(window.innerWidth < 786);

     useEffect(() => {
       setSmallScreen(window.innerWidth < 768);
     }, []);
  return (
    <div>
         {smallScreen? <SignUpMobile/>:<SignUp/>}
    </div>
  )
};

export default RegisterSelection