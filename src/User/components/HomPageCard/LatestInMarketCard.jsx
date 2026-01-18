import React from 'react';
import { Link } from 'react-router-dom';

function LatestInMarketCard({ product }) {
  const { name, description, discount, img, path } = product;

  return (
    <Link to={path} className="block group">
      <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col h-full transition-all duration-500 cursor-pointer group-hover:shadow-2xl group-hover:scale-[1.02] border border-gray-600/50 group-hover:border-emerald-400/30">
        
        {/* ENHANCED: Image container with overlay effects */}
        <div className="relative pb-[60%] overflow-hidden">
          <img 
            src={img} 
            alt={name} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          
          {/* ENHANCED: Gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* ENHANCED: Discount badge - floating design */}
          <div className="absolute top-3 right-3 transform translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm border border-white/20">
              {discount}
            </div>
          </div>
          
          {/* ENHANCED: Wishlist/favorite icon */}
          <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors duration-300">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
          
          {/* ENHANCED: Quick view overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300 border border-white/30">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* ENHANCED: Content section with glassmorphic design */}
        <div className="p-4 flex flex-col flex-grow backdrop-blur-sm bg-gradient-to-b from-gray-700/80 to-gray-800/80 group-hover:from-gray-600/80 group-hover:to-gray-700/80 transition-all duration-500">
          
          {/* ENHANCED: Title with better typography */}
          <h2 className="text-sm sm:text-base text-white font-bold mb-2 line-clamp-1 group-hover:text-emerald-100 transition-colors duration-300 tracking-wide">
            {name}
          </h2>
          
          {/* ENHANCED: Description with improved readability */}
          <p className="text-xs sm:text-sm text-gray-300 mb-3 flex-grow line-clamp-2 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>
          
          {/* ENHANCED: Action section with better layout */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-600/30">
            
            {/* ENHANCED: Shop now button with modern design */}
            <button 
              type="button" 
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs sm:text-sm font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ring-2 ring-emerald-500/20 hover:ring-emerald-400/40"
            >
              Shop Now
            </button>
            
            {/* ENHANCED: Add to cart icon button */}
            <button 
              type="button" 
              className="w-8 h-8 bg-gray-600/50 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group/btn border border-gray-500/30 hover:border-emerald-400/50"
              onClick={(e) => {
                e.preventDefault();
                // Add to cart logic here
              }}
            >
              <svg className="w-4 h-4 text-gray-300 group-hover/btn:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m7.5-5a2 2 0 11-4 0 2 2 0 014 0zm-7 0a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>
          
          {/* ENHANCED: Product rating/quality indicator */}
          <div className="flex items-center justify-between mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <div className="flex items-center space-x-1">
              <div className="flex space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-400">(4.8)</span>
            </div>
            
            <span className="text-xs text-emerald-400 font-medium">Eco-Friendly</span>
          </div>
        </div>
        
        {/* ENHANCED: Subtle border glow effect */}
        <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-emerald-400/20 transition-all duration-500 pointer-events-none"></div>
      </div>
    </Link>
  );
}

export default LatestInMarketCard;