import React from 'react';

// HIGHLIGHT: handleLogout prop ko yahan receive karein
const Header = ({ handleLogout }) => { 
  // localStorage se username nikalein
  const username = localStorage.getItem("username");

  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
      
      {/* Welcome Message Section */}
      <div>
        {/* HIGHLIGHT: User ka naam aur welcome message */}
        <h1 className="text-3xl font-bold text-gray-800">Welcome, {username || 'User'}!</h1>
        <p className="text-gray-500">Here's what's new and trending today.</p>
      </div>

      {/* Logout Button Section */}
      <div>
        {/* HIGHLIGHT: Logout button jo Dashboard se pass kiye gaye function ko call karta hai */}
        <button 
          onClick={handleLogout} 
          className="bg-red-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-600 transition shadow-md"
        >
          Logout
        </button>
      </div>
      
    </header>
  );
};

export default Header;

