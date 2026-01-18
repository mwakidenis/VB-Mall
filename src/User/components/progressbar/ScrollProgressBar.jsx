import React, { useEffect, useState } from 'react';
import './ScrollProgressBar.css';

const ScrollProgressBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollY = window.scrollY;
    const scrollPercent = (scrollY / scrollTotal) * 100;
    setScrollPosition(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${scrollPosition}%` }}></div>
    </div>
  );
};

export default ScrollProgressBar;
