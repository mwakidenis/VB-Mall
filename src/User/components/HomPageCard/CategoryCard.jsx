import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ image, name, path }) => {
  return (
    <Link to={path} className="block group">
      <div
        className="relative w-full aspect-square max-w-[240px] mx-auto flex items-center justify-center overflow-hidden rounded-2xl shadow-lg transition-all duration-500 cursor-pointer group-hover:shadow-2xl group-hover:scale-[1.02] border border-white/20"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        
        {/* ENHANCED: Multi-layered overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/60 group-hover:via-black/20 transition-all duration-500"></div>
        
        {/* ENHANCED: Subtle shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/0 group-hover:via-white/10 transition-all duration-700"></div>
        
        {/* ENHANCED: Modern glassmorphic title container */}
        <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-white/10 border-t border-white/20 px-3 py-3 group-hover:bg-white/20 transition-all duration-300">
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-center text-white drop-shadow-lg group-hover:text-emerald-100 transition-colors duration-300">
            {name}
          </h3>
          
          {/* ENHANCED: Subtle indicator for interactivity */}
          <div className="flex justify-center mt-1">
            <div className="w-0 h-0.5 bg-emerald-400 group-hover:w-8 transition-all duration-500 rounded-full"></div>
          </div>
        </div>
        
        {/* ENHANCED: Corner accent for premium feel */}
        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-white/40 group-hover:border-emerald-400/60 transition-colors duration-300"></div>
        
        {/* ENHANCED: Hover state floating icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
        
        {/* ENHANCED: Pulse effect on hover */}
        <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-4 ring-emerald-400/20 transition-all duration-500"></div>
      </div>
    </Link>
  );
};

export default CategoryCard;