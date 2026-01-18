import React from 'react';

const ProfileModal = ({ selectedVigy, setShowProfileModal, handleDeleteVigy }) => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-full max-w-md shadow-lg rounded-md bg-white">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-gray-900">Vigy Profile</h3>
                    <button onClick={() => setShowProfileModal(false)} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Close</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="mt-2">
                    <p className="text-sm text-gray-600"><strong>ID:</strong> {selectedVigy.id}</p>
                    <p className="text-sm text-gray-600"><strong>Name:</strong> {selectedVigy.name}</p>
                    <p className="text-sm text-gray-600"><strong>Total Product:</strong> {selectedVigy.totalProduct}</p>
                    <p className="text-sm text-gray-600"><strong>Sell Product:</strong> {selectedVigy.sellProduct}</p>
                    <p className="text-sm text-gray-600"><strong>Pending Product:</strong> {selectedVigy.pendingProduct}</p>
                    <p className="text-sm text-gray-600"><strong>Return Order:</strong> {selectedVigy.returnOrder}</p>
                    <p className="text-sm text-gray-600"><strong>Total Income:</strong> {selectedVigy.totalIncome}</p>
                </div>
                <div className="mt-4">
                    <button
                        onClick={() => handleDeleteVigy(selectedVigy.id)}
                        className="w-full px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                    >
                        Delete Vigy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileModal;