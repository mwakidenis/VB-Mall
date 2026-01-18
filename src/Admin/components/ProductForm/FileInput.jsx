import React, { useState, useRef } from 'react';

const FileInput = ({ label, accept, multiple = false, maxFiles = Infinity, maxSize = 5 * 1024 * 1024 }) => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const validFiles = selectedFiles.filter(file => file.size <= maxSize);
    
    if (validFiles.length < selectedFiles.length) {
      setError(`Some files exceed the ${maxSize / 1024 / 1024}MB limit and were not included.`);
    } else {
      setError('');
    }

    setFiles(prevFiles => {
      const newFiles = multiple ? [...prevFiles, ...validFiles] : validFiles;
      if (newFiles.length > maxFiles) {
        setError(`You can only upload up to ${maxFiles} file${maxFiles > 1 ? 's' : ''}.`);
        return newFiles.slice(0, maxFiles);
      }
      return newFiles;
    });
  };

  const handleRemove = (index) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    if (files.length === 1) {
      fileInputRef.current.value = '';
    }
  };

  const renderPreview = (file, index) => {
    if (file.type.startsWith('image/')) {
      return (
        <div key={index} className="mt-2 relative">
          <img src={URL.createObjectURL(file)} alt="Preview" className="max-w-full h-40 object-contain" />
          <button
            type="button"
            onClick={() => handleRemove(index)}
            className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
          >
            ×
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
        className="w-full p-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
        disabled={files.length >= maxFiles}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {files.length > 0 && (
        <div className="mt-2">
          <p className="text-green-600 text-sm">
            {files.length} file(s) selected
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {files.map((file, index) => renderPreview(file, index))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileInput;