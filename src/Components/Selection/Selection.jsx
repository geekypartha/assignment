import React, { useEffect, useState } from 'react'
import HeroMobile from '../Mobile/HeroMobile/HeroMobile';
import HeroDesktop from '../Desktop/Hero/HeroDesktop';
import LandingPage from '../Mobile/LandingPage';

const Selection = () => {

    const [smallScreen, setSmallScreen] = useState(window.innerWidth<786);

    useEffect(() => {
    if (window.innerWidth < 768) {
        setSmallScreen(true);
    }
    
    }, []);

  return (
    <div>
      <div>{smallScreen ? <LandingPage /> : <HeroDesktop />}</div>
    </div>
  );
}

export default Selection