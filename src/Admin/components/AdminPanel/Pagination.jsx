import React from 'react';

const Pagination = ({ currentPage, setCurrentPage, pageNumbers }) => (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
        <button
            className="bg-indigo-600 text-white px-4 py-2 rounded mb-2 sm:mb-0"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
        >
            Previous
        </button>
        <div className="flex flex-wrap justify-center space-x-2 mb-2 sm:mb-0">
            {Array.from({ length: pageNumbers }, (_, i) => i + 1).map(page => (
                <button
                    key={page}
                    className={`w-8 h-8 rounded-full mb-2 ${currentPage === page ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 border'}`}
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </button>
            ))}
        </div>
        <button
            className="bg-indigo-600 text-white px-4 py-2 rounded"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageNumbers))}
            disabled={currentPage === pageNumbers}
        >
            Next
        </button>
    </div>
);

export default Pagination;