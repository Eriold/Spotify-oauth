import { useState, useEffect } from 'react';

export const useResize = () => {
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const handleResize = (e) => {
    setScreen({ width: e.target.innerWidth, height: e.target.innerHeight });
  };

  return screen;
};
