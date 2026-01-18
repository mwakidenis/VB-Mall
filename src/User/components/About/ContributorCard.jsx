import React from 'react';

const ContributorCard = ({ name, role, image, socialLinks }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg max-w-sm transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-72 object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
          <p className="text-sm text-green-300 font-medium">{role}</p>
        </div>
      </div>
      <div className="p-6 bg-gray-50">
        <p className="text-sm text-gray-600 mb-3 font-medium">Let's Connect On:</p>
        <div className="flex space-x-3">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer" 
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {link.icon} {/* Render the icon component directly */}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContributorCard;
