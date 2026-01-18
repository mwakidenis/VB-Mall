import React from "react";
import { Link } from "react-router-dom";
import DefaultLogo from "../../../assets/images/Logo.svg";
import NationalFestLogo from "../../../assets/images/nationalFestLogo.png"; // This logo will be used for both 15th August and 26th January

const NavLogo = () => {
  const today = new Date();
  const isSpecialDay =
    (today.getDate() === 15 && today.getMonth() === 7) || // Independence Day (15th August)
    (today.getDate() === 26 && today.getMonth() === 0);   // Republic Day (26th January)

  return (
    <div className="flex-shrink-0">
      <Link to="/" className="flex items-center md:block">
        <img
          src={isSpecialDay ? NationalFestLogo : DefaultLogo}
          // src={NationalFestLogo}
          alt="VigyBag Logo"
          className="md:h-[7vh] h-[5vh]"
        />
      </Link>
    </div>
  );
};

export default NavLogo;
