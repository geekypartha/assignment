import React, { useEffect, useState } from 'react'
import LoginMobile from '../Mobile/LoginMobile/LoginMobile';
import Login from '../Desktop/Authentication/Login'

const LoginSelection = () => {
    const [smallScreen, setSmallScreen] = useState(window.innerWidth < 786);

    useEffect(() => {
      setSmallScreen(window.innerWidth < 768);
    }, []);
  return (
    <div>
        {smallScreen? <LoginMobile/>:<Login/>}
    </div>
  )
}

export default LoginSelection