import React from "react";
import gift from "../../../assets/giftcard.jpg";
// import { FaSearch } from "react-icons/fa";
// import { MdHeight } from "react-icons/md";

function Header() {
  return (
    <>
      <header className="relative h-[120vh] md:h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={gift}
            alt="Background"
            className="w-full h-full object-cover filter mt-16"
          />
        </div>
        <div className="relative flex justify-between gap-48 z-10 text-center text-white px-4">
          <lord-icon
            style={{
              height: "170px",
              width: "170px",
            }}
            src="https://cdn.lordicon.com/lgmqrevt.json"
            trigger="morph"
            stroke="bold"
            state="morph-open"></lord-icon>
          <div>
            <h1 className="text-7xl md:text-8xl font-bold mb-2 md:mb-4 text-yellow-300">
              Gift Card Store
            </h1>
            <p className="md:text-5xl text-6xl max-w-3xl mt-10 font-bold text-green-300">
              Give Your Gift For Choice
            </p>
          </div>
          <lord-icon
            style={{
              height: "170px",
              width: "170px",
            }}
            src="https://cdn.lordicon.com/lgmqrevt.json"
            trigger="morph"
            stroke="bold"
            state="morph-open"></lord-icon>
        </div>
      </header>
    </>
  );
}

export default Header;
