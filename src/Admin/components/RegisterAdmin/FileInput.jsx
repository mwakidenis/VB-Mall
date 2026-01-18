import React, { useState, useRef } from 'react';

const FileInput = ({ 
  label , 
  name,
  accept, 
  required = false, 
  maxSize = 50 * 1024,
  onChange
}) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [preview, setPreview] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.size <= maxSize) {
      setFile(selectedFile);
      setError('');
      setPreview(URL.createObjectURL(selectedFile));
      if (onChange) {
        onChange({ target: { name, value: selectedFile } });
      }
    } else {
      setFile(null);
      setError(`File size exceeds ${maxSize / 1024} KB limit`);
      setPreview('');
      if (onChange) {
        onChange({ target: { name, value: null } });
      }
    }
  };

  const handleRemove = () => {
    setFile(null);
    setError('');
    setPreview('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    if (onChange) {
      onChange({ target: { name, value: null } });
    }
  };

  const renderPreview = () => {
    if (!preview) return null;

    if (file.type.startsWith('image/')) {
      return <img src={preview} alt="Preview" className="mt-2 max-w-full h-40 object-contain" />;
    } else if (file.type === 'application/pdf') {
      return (
        <div className="mt-2">
          <p>PDF Preview not available. Filename: {file.name}</p>
          <a href={preview} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Open PDF
          </a>
        </div>
      );
    }

    return <p className="mt-2">File type not supported for preview.</p>;
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="flex items-center">
        <input
          ref={fileInputRef}
          type="file"
          name={name}
          accept={accept}
          required={required}
          onChange={handleFileChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {file && (
          <button
            type="button"
            onClick={handleRemove}
            className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Remove
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {file && (
        <div className="mt-2">
          <p className="text-green-600 text-sm">
            File name: {file.name}, Size: {(file.size / 1024).toFixed(2)} KB
          </p>
          {renderPreview()}
        </div>
      )}
    </div>
  );
};

export default FileInput;