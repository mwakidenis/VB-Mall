import React from "react";
import { NavLink } from "react-router-dom";

const Page404 = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white py-10">
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-xl">
          <div
            className="bg-cover bg-center h-80"
            style={{
              backgroundImage:
                "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
            }}>
            <h1 className="text-center text-6xl font-bold">404</h1>
          </div>
        </div>
        <div className="text-center mt-[-2.5rem]">
          <h3 className="text-4xl font-semibold">Look like you're lost</h3>
          <p className="text-lg mt-4">
            The page you are looking for is not available!
          </p>
          <NavLink
            to="/"
            className="inline-block mt-5 px-6 py-2 text-white bg-green-600 rounded">
            Go to Home
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Page404;
