import React, { useState } from "react";
import Aside from "../../components/Aside/Aside";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Dashboard/Header";
import SearchBar from "../../components/Dashboard/SearchBar";
import TUMBLER from "../../../assets/TUMBLER.png";

const textColor = "text-zinc-800";
const subTextColor = "text-zinc-600";
const containerBg = "bg-[#fcf1e8ff]";
const buttonBase = "px-4 py-2 rounded-lg";

const OrderInfo = ({ label, value }) => (
  <div>
    <p className={subTextColor}>{label}</p>
    <p className={`font-semibold ${textColor}`}>{value}</p>
  </div>
);

const copyToClipboard = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Order ID copied to clipboard!");
    })
    .catch((err) => {
      alert("Failed to copy. Please try again!");
      console.error("Clipboard copy failed:", err);
    });
};

const OrderDetails = ({ orderNumber }) => (
  <div
    className="flex flex-col md:flex-row justify-between items-center mb-6 -mt-7 p-4"
    style={{
      backgroundColor: "#d8e6d3ff",
      borderBottomLeftRadius: "20px",
      borderBottomRightRadius: "20px",
    }}>
    <div className="flex items-center">
      <p className={subTextColor}>ORDER #{orderNumber}</p>
      <button
        onClick={() => copyToClipboard(orderNumber)}
        type="button"
        className="ml-2 p-1 bg-zinc-200 hover:bg-zinc-300 rounded"
        aria-label="Copy order ID">
        📋
      </button>
    </div>
  </div>
);

const ProductCard = ({
  arrivalDate,
  productName,
  productDescription,
  productImage,
  orderPlaced,
  totalItems,
  totalAmount,
  shipTo,
  orderId
}) => (
  <div
    className={`${containerBg} p-4 rounded-lg mb-4`}
    style={{ border: "1px solid black" }}>
    {/* Arrival Date */}
    <p className="text-green-700 font-semibold mb-2">{arrivalDate}</p>
    
    {/* Order Info */}
    <div
      className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 bg-[#d8e6d3ff] p-4"
      style={{
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
      }}>
      <OrderInfo label="ORDER PLACED" value={orderPlaced} />
      <OrderInfo label="TOTAL ITEMS" value={totalItems} />
      <OrderInfo label="TOTAL" value={totalAmount} />
      <OrderInfo label="SHIP TO" value={shipTo} />
    </div>
    
    {/* Order Details */}
    <OrderDetails orderNumber={orderId} />
    
    {/* Product Info */}
    <div className="flex flex-col md:flex-row items-center">
      <img
        src={productImage}
        alt={productName}
        className="w-20 h-20 rounded-lg mb-4 md:mb-0 md:mr-4"
      />
      <div className="flex-1 mb-4 md:mb-0">
        <h3 className={`font-bold text-lg ${textColor}`}>{productName}</h3>
        <p className={subTextColor}>{productDescription}</p>
      </div>
      <div className="flex flex-col space-y-2">
        <button
          type="button"
          className={`bg-green-600 text-white ${buttonBase}`}>
          Track Package
        </button>
        <button
          type="button"
          className={`bg-zinc-200 text-zinc-700 ${buttonBase}`}
          style={{ border: "1px solid black" }}>
          View or edit order
        </button>
      </div>
    </div>
  </div>
);

const DashboardOrders = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => setSearchTerm(e.target.value);

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

        {/* New Today Section */}
        <div className="bg-[#fff0e3ff] p-6 rounded-lg shadow-md w-full max-w-6xl mt-4 mb-10">
          <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
            Your Orders
          </h2>

          <ProductCard
            arrivalDate="Arriving Wednesday"
            productName="BAMBOO PRODUCT - TUMBLER"
            productDescription="This eco-friendly bamboo tumbler offers a stylish and sustainable alternative for your beverage needs. Its natural bamboo exterior provides excellent insulation while ensuring a unique and elegant look."
            productImage={TUMBLER}
            orderPlaced="8 JUNE 2024"
            totalItems="1"
            totalAmount="₹350"
            shipTo="Sai Pradyumna"
            orderId="123-456789-0987654"
          />
          <ProductCard
            arrivalDate="Arriving Friday"
            productName="BAMBOO PRODUCT - BOTTLE"
            productDescription="A sleek bamboo bottle designed for durability and style. Perfect for keeping your drinks hot or cold."
            productImage={TUMBLER}
            orderPlaced="9 JUNE 2024"
            totalItems="1"
            totalAmount="₹250"
            shipTo="Sai Pradyumna"
            orderId="123-456789-0987655"
          />
        </div>
      </main>
    </div>
  );
};

export default DashboardOrders;
