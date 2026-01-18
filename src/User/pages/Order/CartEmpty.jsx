import React from "react";
import { Link } from "react-router-dom";
import empty from "../../../assets/empty-cart.png";

const CartEmpty = () => {   
  const buttonBgClass =
    "bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out mt-3";

  return (
    <div className="flex flex-col pt-2">
      <img className="shadow-current w-32 h-32 mb-3" src={empty} alt="woman" />
      <p className="my-2 font-bold text-xl">Your cart is empty!</p>
      <p>
        Looks like you have not added anything to your cart. Go ahead and
        explore top catgories!
      </p>

      <div className="flex">
        <Link to="/">
          <button className={`${buttonBgClass} w-full sm:w-auto`}>
            Shop now
          </button>
        </Link>
      </div>
      <br />
    </div>
  );
};

export default CartEmpty;
