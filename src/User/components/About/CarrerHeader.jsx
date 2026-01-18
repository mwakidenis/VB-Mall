import React from "react";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <>
      <header className="relative h-[100vh] md:h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://image-assets.eu-2.volcanic.cloud/api/v1/assets/images/67b76b0e206f4f5656559b5c96208131?size=2000x600%3C"
            alt="Background"
            className="w-full h-full object-cover filter "
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4">
            Career VigyBag 🌱
          </h1>
          <p className="text-5xl max-w-3xl mx-auto">
            <span className="text-yellow-200">Innovate,</span>{" "}
            <span className="text-blue-400">inspire,</span> and{" "}
            <span className="text-green-200">grow</span> with{" "}
            <span className="text-5xl text-green-300 font-bold">VigyBag.</span>
          </p>
          <div className="flex items-center rounded-full border-green-800 border-2 bg-gray-200 px-4 py-2 w-100 mt-7">
            <input
              type="text"
              placeholder="Explore jobs"
              className="bg-transparent outline-none w-full text-green-700"
            />
            <FaSearch className="text-green-800" />
          </div>
          <p className="text-white text-left pl-2 mt-2">
            <span className="text-yellow-300">197</span> opportunities available
            to be a maximiser.
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
