import React from 'react';

const InputField = ({ label, type = 'text', placeholder, value, onChange, readOnly = false }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      className="w-full p-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
    />
  </div>
);

export default InputField;