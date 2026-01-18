import React, { useEffect } from "react";
import TUMBLER from "../../../assets/TUMBLER.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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
    <Link to="/orderDetails" className="text-blue-600 mt-2 md:mt-0">
      View order details
    </Link>
  </div>
);

const ProductCard = ({
  arrivalDate,
  productName,
  productDescription,
  productImage,
}) => (
  <div
    className={`${containerBg} p-4 rounded-lg mb-4`}
    style={{ border: "1px solid black" }}>
    <p className="text-green-700 font-semibold mb-2">{arrivalDate}</p>
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

const Breadcrumbs = () => (
  <div
    className="text-sm text-zinc-500 mb-2 relative"
    style={{ left: "1vw", top: ".5vh" }}>
    <Link to="/dashboard" className="hover:underline">
      Dashboard
    </Link>{" "}
    &gt;
    <Link to="/cart" className="hover:underline">
      Cart
    </Link>{" "}
    &gt;
    <Link to="/myorders" className="hover:underline">
      My Orders
    </Link>{" "}
    &gt;
    <Link to="/orderDetails" className="hover:underline">
      Order Details
    </Link>
  </div>
);

const Orders = () => {
  useEffect(() => {
    document.title = "VigyBag | My Orders";
  }, []);

  return (
    <div className="bg-[#fff0e3ff] flex justify-center mt-1 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>VigyBag | My Orders</title>
        <meta
          name="description"
          content="Review and manage your orders on VigyBag. Track shipments, view details, and edit your order."
        />
        <meta
          name="keywords"
          content="VigyBag, eco-friendly products, order management, order tracking"
        />
      </Helmet>
      <div className="bg-[#fff0e3ff] p-6 rounded-lg shadow-md w-full max-w-6xl mt-24 mb-10">
        <h1 className={`text-2xl font-bold mb-4 ${textColor}`}>Your Orders</h1>
        <Breadcrumbs />

        <div style={{ borderRadius: "20px" }}>
          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 bg-[#d8e6d3ff] p-4"
            style={{
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}>
            <OrderInfo label="ORDER PLACED" value="8 JUNE 2024" />
            <OrderInfo label="TOTAL ITEMS" value="2" />
            <OrderInfo label="TOTAL" value="₹350" />
            <OrderInfo label="SHIP TO" value="Anuja Singh" />
          </div>
          <OrderDetails orderNumber="123-456789-0987654" />
        </div>
        <ProductCard
          arrivalDate="Arriving Wednesday"
          productName="BAMBOO PRODUCT - TUMBLER"
          productDescription="This eco-friendly bamboo tumbler offers a stylish and sustainable alternative for your beverage needs. Its natural bamboo exterior provides excellent insulation while ensuring a unique and elegant look."
          productImage={TUMBLER}
        />
        <ProductCard
          arrivalDate="Arriving Wednesday"
          productName="BAMBOO PRODUCT - TUMBLER"
          productDescription="This eco-friendly bamboo tumbler offers a stylish and sustainable alternative for your beverage needs. Its natural bamboo exterior provides excellent insulation while ensuring a unique and elegant look."
          productImage={TUMBLER}
        />
      </div>
    </div>
  );
};

export default Orders;
