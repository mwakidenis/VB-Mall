// CartIcon.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartIcon() {
  const cartItems = useSelector(state => state.cart.items)

  const noOfItems = cartItems.reduce((a, b) => a + b.quantity, 0);

  return (
    <Link to="/cart" className=" text-green-800 hover:text-gray-600 relative h-full">
      <lord-icon
        style={{
          width: "40px",
          height: "40px",
          paddingTop: "2px",
          paddingLeft: "1px",
        }}
        src="https://cdn.lordicon.com/pbrgppbb.json"
        trigger="hover"
        colors="primary:#15803D"
      ></lord-icon>
      <div 
        className='absolute w-6 h-6 p-2 flex items-center justify-center -top-3 -right-2 rounded-full bg-red-600 text-white'
      >
        {noOfItems}
      </div>
    </Link>
  )
}

export default CartIcon;