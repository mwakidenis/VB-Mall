import React from "react";
import { Helmet } from "react-helmet-async";  // Import Helmet for SEO
import TUMBLER from "../../../assets/TUMBLER.png";
import tick from "../../../assets/tick.png";
import { Link } from "react-router-dom";
import OrderTrackingBar from './OrderTrackingBar';  // Import the new component

const OrderDetails = () => (
  <div className="bg-[#fff0e3ff] p-4 sm:p-6">
    <Helmet>
      <title>Order Details | VigyBag</title>
      <meta
        name="description"
        content="View detailed information about your order including shipping address, payment methods, order summary, and order status. Track your package and manage your order."
      />
      <meta name="robots" content="index, follow" />
    </Helmet>
    <Breadcrumbs />
    <h1 className="text-xl sm:text-2xl font-bold mb-4 mt-20">Order Details</h1>
    <OrderInfo />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card title="Shipping Address">
        <Address />
      </Card>
      <Card title="Payment Methods">
        <p>Pay on Delivery</p>
      </Card>
      <OrderSummary />
    </div>
    <OrderStatus />
  </div>
);

const Breadcrumbs = () => (
  <nav
    aria-label="breadcrumb"
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
  </nav>
);

const OrderInfo = () => (
  <p className="text-sm text-zinc-600 mb-4">
    Ordered on 8 June 2024 | ORDER #123-456789-0987654
  </p>
);

const Card = ({ title, children }) => (
  <div className="bg-white p-4 rounded shadow bg-[#fff0e3ff] border-2 border-black">
    <h2 className="font-bold mb-2">{title}</h2>
    {children}
  </div>
);

const Address = () => (
  <address>
    <p>Anuja Singh</p>
    <p>4/783 Gurudwara Gali</p>
    <p>Vigyan Nagar</p>
    <p>KANAKPUR, UTTAR PRADESH</p>
    <p>342200</p>
    <p>India</p>
  </address>
);

const OrderSummary = () => (
  <Card title="Order Summary">
    <ul className="mb-2">
      {[
        { name: "Eco-friendly Coffee Mug", price: "₹300" },
        { name: "Handwoven Doormat", price: "₹275" },
        { name: "Bamboo Insulated Tumbler with Strainer", price: "₹350" },
        { name: "Storage basket and container", price: "₹175" },
      ].map((item, index) => (
        <li key={index} className="flex justify-between">
          <span>{item.name}</span>
          <span>{item.price}</span>
        </li>
      ))}
    </ul>
    <div className="flex justify-between font-bold">
      <span>Shipping Charges:</span>
      <span>Free</span>
    </div>
    <div className="flex justify-between font-bold">
      <span>Total</span>
      <span>₹1100</span>
    </div>
  </Card>
);

const OrderStatus = () => (
  <Card title="Arriving Wednesday">
    <OrderTrackingBar currentStep={2} />  {/* Use the component and set current step */}
    <p className="text-sm text-zinc-600 mb-4">Not Yet Dispatched</p>
    <div className="flex flex-col sm:flex-row items-start">
      <img
        src={TUMBLER}
        alt="Bamboo Tumbler"
        className="w-24 h-24 object-cover rounded mr-4 mb-4 sm:mb-0"
      />
      <div className="flex-1">
        <h3 className="font-bold">BAMBOO PRODUCT - TUMBLER</h3>
        <p className="text-sm text-zinc-600 mb-2">
          Crafted from 100% natural bamboo with a stainless steel interior, this
          tumbler keeps beverages hot or cold for hours. Features a spill-proof
          lid and a sleek, modern design.<br></br>
          This eco-conscious travel tumbler has a bamboo exterior and
          double-wall insulation to maintain drink temperature. It includes a
          leak-proof lid, ideal for on-the-go use.
        </p>
        <p className="text-sm text-zinc-600 mb-2">Sold by - Bamboo India</p>
        <p className="font-bold">₹350</p>
        <p className="text-sm text-zinc-600 mb-2">New</p>
        <div className="flex items-center">
          <img
            src={tick}
            alt="Verified"
            className="w-6 h-6 object-cover rounded-full mr-2"
          />
          <span className="text-sm text-zinc-600">Verified</span>
        </div>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row justify-between mt-4">
      <button
        type="button"
        className="bg-green-600 text-white px-4 py-2 rounded mb-2 sm:mb-0">
        Track Package
      </button>
      <button
        type="button"
        className="bg-zinc-600 text-white px-4 py-2 rounded">
        Cancel Order
      </button>
    </div>
    <p className="text-sm text-zinc-600 mt-2">
      Shipping Speed: Standard Delivery
    </p>
  </Card>
);

export default OrderDetails;
