import { useEffect, useState } from 'react';

export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Logic to check screen size and set isMobile accordingly
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Adjust the breakpoint as needed
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024)
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it initially
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isMobile, isTablet };
};
