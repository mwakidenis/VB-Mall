import React from "react";
import background from "../../../assets/back.jpg";

function Header() {
  return (
    <>
      <header className="relative h-96 md:h-[100vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            // src="https://img.freepik.com/premium-photo/abstract-11-light-background-wallpaper-colorful-gradient-blurry-soft-smooth-motion-bright-shine_792836-34993.jpg"
            src={background}
            alt="Background"
            className="w-full h-full object-cover filter "
          />
          <div className="absolute inset-0"></div>
        </div>
        <div className="relative z-10 text-center text-green px- mt-32">
          <h1 className="text-4xl text-white md:text-5xl font-bold mb-2 md:mb-4">
            Our Service
          </h1>
        </div>
      </header>
    </>
  );
}

export default Header;
