import React from 'react';
import { useMediaQuery } from '@mui/material';

import desktopBanner from '../assets/desktopbanner.png';
import mobileBanner from '../assets/mobilebanner.png';

const Banner = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <img
      src={isMobile ? mobileBanner : desktopBanner}
      alt="Banner"
      style={{ width: '100%' }}
    />
  );
};

export default Banner;
