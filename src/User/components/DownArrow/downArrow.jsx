import React from "react";
import Arrow from "../../../assets/arrow.png";

const DownArrow = () => {
  return (
    <img
      src={Arrow}
      alt="Down Arrow"
      className="w-10 animate-smooth-bounce cursor-pointer"
    />
  );
};

export default DownArrow;
