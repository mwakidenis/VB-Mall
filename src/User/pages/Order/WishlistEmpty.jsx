import React from "react";
import { Link } from "react-router-dom";
import empty from "../../../assets/emptyWishlist.png";

const WishlistEmpty = () => {
  const buttonBgClass =
    "bg-[#4a7c5e] text-white px-4 py-2 rounded-lg hover:bg-[#3b624d] transition duration-300 ease-in-out mt-3";

  return (
    <div className="flex flex-col pt-2">
      <img
        className="shadow-current w-56 h-60 mb-3"
        src={empty}
        alt="wishlist"
      />
      <p className="my-2 font-bold text-xl">Your wishlist is empty!</p>
      <p>
        Looks like you have not added anything to your wishlist. Explore and add
        your favorites!
      </p>

      <div className="flex">
        <Link to="/">
          <button className={`${buttonBgClass} w-full sm:w-auto`}>
            Explore now
          </button>
        </Link>
      </div>
      <br />
    </div>
  );
};

export default WishlistEmpty;
