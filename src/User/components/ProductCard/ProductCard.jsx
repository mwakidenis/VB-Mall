import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ image, title, price, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="mt-2 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-[#171616]">{title}</h3>

        <div className="flex items-center justify-between mt-3">
          <p className="text-[#1b1a1a]">₹{price}</p>
          <div className="flex gap-1 text-yellow-500">
            {[...Array(rating)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>

        <button
          className="mt-auto w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}>
          Add to Bag
          <lord-icon
            style={{
              height: "25px",
              width: "25px",
            }}
            src="https://cdn.lordicon.com/mqdkoaef.json"
            trigger="hover"
            colors="primary:#0a5c15"></lord-icon>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
