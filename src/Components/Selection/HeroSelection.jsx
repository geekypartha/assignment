import React, { useEffect, useState } from 'react'
import HeroMobile from '../Mobile/HeroMobile/HeroMobile';
import HeroDesktop from '../Desktop/Hero/HeroDesktop';

const HeroSelection = () => {
    const [smallScreen, setSmallScreen] = useState(window.innerWidth < 786);

    useEffect(() => {
      setSmallScreen(window.innerWidth < 768) 
        
    }, []);
  return (
    <div>
      <div>{smallScreen ? <HeroMobile /> : <HeroDesktop />}</div>
    </div>
  );
}

export default HeroSelection