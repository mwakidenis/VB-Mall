import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import confirm from '../../../assets/confirm.png'
import { NavLink } from 'react-router-dom';

const ConfirmationPage = () => {
  return (
    <div className="min-h-screen bg-[#FAEBD7] flex flex-col items-center justify-center">
      <main className="bg-[#FFF5EE] p-10 rounded-lg shadow-lg text-center max-w-3xl mx-auto" style={{border:'4px solid #605d61ff'}}>
        <div className="">
            <div style={{width: '120px',height: '120px',backgroundColor:'#605d61ff',display:'flex',alignItems:'center',borderRadius:'50%'
                ,position:'relative',padding:'5px',boxShadow:'0 0 10px #605d61ff',top:'-14vh'}}className="mx-auto"   >
            <img src={confirm} alt="Confirmation" className="mx-auto " style={{width: '80px'}} />
            </div>
          
          <h1 className="text-3xl font-bold text-green-900 relative "style={{top:'-8vh'}}>Thank you for Shopping!</h1>
        </div>
        <p className="text-gray-700 mb-6 relative"style={{top:'-5vh'}}>
          We are getting started on your order right away, and you will receive an order
          confirmation email that has been sent. In the meantime, explore the latest fashion
          and get inspired by new trends, just head over to
          <NavLink  to="/" className="text-green-700 underline ml-1">VigyBag homepage</NavLink>.
          
        </p>
        <div className="flex justify-center space-x-4 relative"style={{top:'-4vh'}}>
          <a href="#" className="text-gray-700 hover:text-green-700"><FaInstagram /></a>
          <a href="#" className="text-gray-700 hover:text-green-700"><FaTwitter /></a>
          <a href="#" className="text-gray-700 hover:text-green-700"><FaLinkedin /></a>
          <a href="#" className="text-gray-700 hover:text-green-700"><FaFacebook /></a>
        </div>
      </main>
    </div>
  );
};

export default ConfirmationPage;
