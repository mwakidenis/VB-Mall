import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import './top.css'; // Import the CSS file

const GoToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / documentHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(progress > 2); // Show button only if scroll progress is greater than 2%
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // Calculate the dash offset for the circle based on scroll progress
  const circleLength = 157; // Approximate circumference of the circle (2 * PI * radius)
  const strokeDashoffset = ((100 - scrollProgress) / 100) * circleLength;

  return (
    <div
      className={`go-to-top-wrapper ${isVisible ? "" : "hidden"}`}
      onClick={goToTop}
    >
      <svg className="circular-progress">
        <circle
          className="circle-background"
          cx="50%"
          cy="50%"
          r="25"
        />
        <circle
          className="circle"
          cx="50%"
          cy="50%"
          r="25"
          style={{ strokeDashoffset }}
        />
      </svg>
      <FaArrowUp className="top-btn--icon" />
    </div>
  );
};

export default GoToTop;
