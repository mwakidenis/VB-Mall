import React, { useState, useEffect } from 'react';
import SearchBar from '../components/AdminPanel/SearchBar';
import ExportButton from '../components/AdminPanel/ExportButton';
import StatsSummary from '../components/AdminPanel/StatsSummary';
import VigyTable from '../components/AdminPanel/VigyTable';
import Pagination from '../components/AdminPanel/Pagination';
import ProfileModal from '../components/AdminPanel/ProfileModal';
import {Link} from "react-router-dom";

const AdminPanel = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [selectedVigy, setSelectedVigy] = useState(null);
    const [showExportOptions, setShowExportOptions] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const savedData = localStorage.getItem('vigyData');
        if (savedData) {
            setData(JSON.parse(savedData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('vigyData', JSON.stringify(data));
    }, [data]);

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const itemsPerPage = 15;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const pageNumbers = Math.ceil(filteredData.length / itemsPerPage);

 
    const handleViewProfile = (vigy) => {
        setSelectedVigy(vigy);
        setShowProfileModal(true);
    };

    const handleDeleteVigy = (id) => {
        setData(prevData => prevData.filter(vigy => vigy.id !== id));
        setShowProfileModal(false);
    };

    return (
        <div className="min-h-screen bg-gray-100">
           
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col sm:flex-row justify-between mb-6">
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <div className="flex space-x-2">
                        <Link to="/admin/vigy_form" >
                        <button onClick={() => setShowAddModal(true)} className="bg-blue-500 text-white px-4 py-2 rounded">+ Add New Vigy</button></Link>
                        <ExportButton 
                            showExportOptions={showExportOptions} 
                            setShowExportOptions={setShowExportOptions} 
                            filteredData={filteredData} 
                        />
                    </div>
                </div>

                <StatsSummary data={data} />

                <VigyTable 
                    currentItems={currentItems} 
                    handleViewProfile={handleViewProfile} 
                />

                <Pagination 
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageNumbers={pageNumbers}
                />
            </main>

            {/* <button>+ Add New Vigy Modal</button> */}

            {showProfileModal && selectedVigy && (
                <ProfileModal 
                    selectedVigy={selectedVigy} 
                    setShowProfileModal={setShowProfileModal} 
                    handleDeleteVigy={handleDeleteVigy} 
                />
            )}
        </div>
    );
};

export default AdminPanel;