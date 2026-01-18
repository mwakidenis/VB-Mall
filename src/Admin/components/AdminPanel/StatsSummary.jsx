import React from 'react';

const StatsSummary = ({ data }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-orange-100 p-4 rounded">
            <h3 className="text-xl font-bold">{data.length}</h3>
            <p>Total Vigy</p>
        </div>
        <div className="bg-green-100 p-4 rounded">
            <h3 className="text-xl font-bold">{data.reduce((sum, item) => sum + item.totalProduct, 0)}</h3>
            <p>Total Products</p>
        </div>
        <div className="bg-green-100 p-4 rounded">
            <h3 className="text-xl font-bold">{data.reduce((sum, item) => sum + item.sellProduct, 0)}</h3>
            <p>Total Selled product</p>
        </div>
        <div className="bg-purple-100 p-4 rounded">
            <h3 className="text-xl font-bold">{data.reduce((sum, item) => sum + (item.totalProduct - item.pendingProduct), 0)}</h3>
            <p>Total Delivered product</p>
        </div>
    </div>
);

export default StatsSummary;