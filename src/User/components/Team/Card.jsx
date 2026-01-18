import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Card = ({ name, role, imageUrl, socialLinks }) => (
  <div className="w-96 bg-white rounded-lg overflow-hidden shadow-lg m-4">
    <div className="relative h-64">
      <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
        <h2 className="text-white text-2xl font-bold">{name}</h2>
        <p className="text-green-400 uppercase text-base">{role}</p>
      </div>
    </div>
    <div className="p-6">
      <p className="text-gray-600 mb-4 text-lg">Let's Connect On:</p>
      <div className="flex space-x-4">
        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-600 hover:text-green-600 cursor-pointer text-2xl" />
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-gray-600 hover:text-green-600 cursor-pointer text-2xl" />
        </a>
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-gray-600 hover:text-green-600 cursor-pointer text-2xl" />
        </a>
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-600 hover:text-green-600 cursor-pointer text-2xl" />
        </a>
      </div>
    </div>
  </div>
);

export default Card;
