import React from 'react';

const InputField = ({ 
  label , 
  name,
  type = 'text', 
  placeholder, 
  required = false, 
  value,
  onChange,
  maxLength,
  minLength,
  pattern,
  title,
  validate,
  errorMessage,
  style
}) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
    if (validate) {
      const isValid = validate(e.target.value);
      e.target.setCustomValidity(isValid ? '' : (errorMessage || 'Invalid input'));
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        title={title}
        style={style}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default InputField;