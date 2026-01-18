import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
    <div className="flex-grow mr-0 sm:mr-4 mb-4 sm:mb-0">
        <input
            type="text"
            placeholder="Search by name..."
            className="w-full px-4 py-2 border rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>
);

export default SearchBar;