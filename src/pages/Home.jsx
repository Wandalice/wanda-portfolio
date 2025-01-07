import React, { useState, useEffect } from 'react';
import ImageGallery from '../components/Gallery/ImageGallery';
import MobileGallery from '../components/Gallery/MobileGallery';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full h-[calc(100vh-80px)]">
      {isMobile ? <MobileGallery /> : <ImageGallery />}
    </div>
  );
};

export default Home;