import React from 'react';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ExportButton = ({ showExportOptions, setShowExportOptions, filteredData }) => {
    const exportToCSV = () => {
        const csvContent = [
            ['Vigy ID', 'Full Name', 'Total Product', 'Sell Product', 'Pending Product', 'Return Order', 'Total Income'],
            ...filteredData.map(row => [row.id, row.name, row.totalProduct, row.sellProduct, row.pendingProduct, row.returnOrder, row.totalIncome])
        ].map(e => e.join(",")).join("\n");

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, "vigy_data.csv");
        setShowExportOptions(false);
    };

    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.autoTable({
            head: [['Vigy ID', 'Full Name', 'Total Product', 'Sell Product', 'Pending Product', 'Return Order', 'Total Income']],
            body: filteredData.map(row => [row.id, row.name, row.totalProduct, row.sellProduct, row.pendingProduct, row.returnOrder, row.totalIncome]),
        });
        doc.save("vigy_data.pdf");
        setShowExportOptions(false);
    };

    return (
        <div className="relative">
            <button onClick={() => setShowExportOptions(!showExportOptions)} className="bg-green-500 text-white px-4 py-2 rounded">Export</button>
            {showExportOptions && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg">
                    <button onClick={exportToCSV} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Export as CSV</button>
                    <button onClick={exportToPDF} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Export as PDF</button>
                </div>
            )}
        </div>
    );
};

export default ExportButton;