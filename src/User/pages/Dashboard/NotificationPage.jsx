import React, { useState } from 'react';
import Aside from '../../components/Aside/Aside'; // Adjust the path as necessary
import SearchBar from "../../components/Dashboard/SearchBar"; // If you want a search bar
import Header from "../../components/Dashboard/Header"; // If you have a header component

const cardClass = "p-4 bg-white rounded-lg shadow-md";
const buttonBgClass = "bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out";
const deleteButtonClass = "text-red-600 hover:text-red-800 cursor-pointer ml-2";

const NotificationItem = ({ notification, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${cardClass} mb-4`} style={{ border: "1px solid black", position: 'relative' }}>
      <h2 className="text-xl font-semibold">{notification.title}</h2>
      <p>{isExpanded ? notification.body : `${notification.body.substring(0, 50)}...`}</p>
      <button
        className={deleteButtonClass}
        onClick={() => onDelete(notification.id)}
        style={{ position: 'absolute', top: '50px', right: '10px' }}
      >
        &times;
      </button>
      <button
        className={buttonBgClass}
        onClick={toggleContent}
        style={{ marginTop: '10px' }}
      >
        {isExpanded ? 'View Less' : 'View More'}
      </button>
    </div>
  );
};

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Welcome', body: 'Welcome To Vigy Bag. Our aim is to Bring Eco-Friendly Products. Vigy Bag offers a wide range of products that are sustainable and environmentally friendly. Our products are made from natural materials and are designed to reduce waste and pollution.' },
    { id: 2, title: '50% Off on your First Order', body: 'Get flat 50% off on your first order For the following Products. This offer is valid for a limited time only. Don\'t miss out on this great opportunity to save on our eco-friendly products.' },
    // { id: 3, title: 'Notification 3', body: 'This is the third notification.' },
    // { id: 4, title: 'Notification 4', body: 'This is the fourth notification.' },
    // { id: 5, title: 'Notification 5', body: 'This is the fifth notification.' },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleDelete = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const filteredNotifications = notifications.filter(notification =>
    notification.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-[#fff1e6]">
      {/* Sidebar */}
      <Aside />

      {/* Main Content */}
      <main className="flex-1 p-6 mt-20">
        {/* Header */}
        <Header />

        {/* Search Bar */}
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />

        {/* Notifications Section */}
        <div className="container mx-auto p-4 w-full max-w-7xl mt-4">
          <h1 className="text-2xl font-bold mb-4">Notifications</h1>
          <ul className="space-y-4">
            {filteredNotifications.length === 0 ? (
              <p>No notifications available.</p>
            ) : (
              filteredNotifications.map(notification => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  onDelete={handleDelete}
                />
              ))
            )}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default NotificationPage;
