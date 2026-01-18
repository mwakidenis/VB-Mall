import React from 'react';

const VigyTable = ({ currentItems, handleViewProfile }) => (
    <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vigy ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sell Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pending Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Return Order</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Income</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {currentItems.map((row, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{row.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{row.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{row.totalProduct}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{row.sellProduct}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{row.pendingProduct}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{row.returnOrder}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{row.totalIncome}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{row.status}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <button onClick={() => handleViewProfile(row)} className="text-indigo-600 hover:text-indigo-900">View Profile</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default VigyTable;