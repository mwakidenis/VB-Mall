import React from 'react';

const TextArea = ({ label, placeholder, rows = 3, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
    <textarea
      placeholder={placeholder}
      rows={rows}
      value={value}
      onChange={onChange}
      className="w-full p-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none transition-colors resize-none"
    ></textarea>
  </div>
);

export default TextArea;