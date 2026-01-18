import React, { useState } from "react";
import Aside from "../../components/Aside/Aside";
import { Link, useNavigate } from "react-router-dom";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import CartEmpty from "../Order/CartEmpty";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Dashboard/Header";
import SearchBar from "../../components/Dashboard/SearchBar";
import { clearCart, manageCartItem } from "../../redux/cartSlice";
import toast from "react-hot-toast";
import OrderSummary from "../../components/Order/OrderSummary";
import Swal from "sweetalert2";

const cardClass = "p-4 bg-white rounded-lg shadow-md";
const textClass = "text-zinc-500";
const buttonBgClass =
  "bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out";
const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

const CartItem = ({ product, onUpdate }) => (
  <div
    className={`${cardClass} flex items-center justify-between mb-4 mt-12`}
    style={{ border: "1px solid black" }}>
    <div className="flex items-center">
      <img
        src={product.image}
        alt={product.title}
        className="w-32 h-32 md:w-20 md:h-20 rounded-lg mr-4"
      />
      <div>
        <h3 className="text-lg font-semibold text-zinc-800">{product.title}</h3>
        <p className={textClass}>
          <p className="text-gray-600 text-lg my-2 flex items-center gap-2">
            {currencyFormatter.format(product.total)}
            <span className="text-sm text-green-500 line-through">
              {currencyFormatter.format(product.oldPrice * product.quantity)}
            </span>
          </p>
        </p>
        <p className="flex gap-3 items-center">
          <span onClick={() => onUpdate(product, -1)}>
            <FaMinusCircle />
          </span>
          <span>{product.quantity}</span>
          <span onClick={() => onUpdate(product, 1)}>
            <FaPlusCircle />
          </span>
        </p>
      </div>
    </div>
    <script src="https://cdn.lordicon.com/lordicon.js"></script>
    <lord-icon
      src="https://cdn.lordicon.com/skkahier.json"
      trigger="hover"
      colors="primary:#ff0000"
      style={{ width: "30px", height: "30px", cursor: "pointer" }}
      onClick={() => {
        onUpdate(product, -1 * product.quantity);
        toast.success("Successfully deleted");
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter") onUpdate(product, -1 * product.quantity);
      }}
      tabIndex="0"></lord-icon>
  </div>
);

const Subtotal = ({ items }) => {
  const itemsTotal = items.reduce((acc, item) => acc + item.total, 0);

  const shippingThreshold = 500.0;
  const shippingRate = 40.0;

  let shipping = itemsTotal >= shippingThreshold ? 0.0 : shippingRate;
  let total = itemsTotal + shipping;

  if (itemsTotal === 0) {
    return <></>;
  }

  return (
    <div className="mb-5">
      <h2 className="text-2xl font-bold mb-6 text-black">Subtotal</h2>
      <div
        className={`${cardClass} space-y-2`}
        style={{ border: "1px solid black" }}>
        <p className="text-lg font-semibold text-zinc-800">Order Summary</p>
        <ul className="list-inside text-zinc-700 space-y-1 list-none">
          <hr />
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between gap-5 py-1">
              <span>{item.title}</span>
              <span>{currencyFormatter.format(item.total)}</span>
            </li>
          ))}
          <li className="flex items-center justify-between gap-5 font-bold">
            <span>Shipping</span>
            <span>{currencyFormatter.format(shipping)}</span>
          </li>
          <hr />
          <li className="flex items-center justify-between gap-5 font-bold text-xl">
            <span>Total</span>
            <span>{currencyFormatter.format(total)}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const ProceedToCheckout = () => {
  return (
    <div className="mt-6">
      <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
        <input
          type="text"
          placeholder="Enter coupon code"
          className="p-2 border border-gray-300 rounded-md w-full"
        />
        <button type="button" className={`${buttonBgClass} w-full sm:w-auto`}>
          Redeem
        </button>
      </div>
      <div className="mt-4 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-8">
        <Link to="/Checkout">
          <button
            type="button"
            className={`${buttonBgClass} w-full sm:w-auto`}
            style={{ minWidth: "375px" }}>
            Check Out
          </button>
        </Link>
      </div>
    </div>
  );
};

const LoginToContinue = () => {
  return (
    <div>
      <p className="text-lg font-bold">
        Seems like you are not logged in yet. Please login to proceed to
        Checkout.
      </p>
      <div className="mt-4 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-8">
        <Link to="/auth">
          <button
            type="button"
            className={`${buttonBgClass} w-full sm:w-auto`}
            style={{ minWidth: "425px" }}>
            Login now
          </button>
        </Link>
      </div>
    </div>
  );
};

const DashboardCart = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => setSearchTerm(e.target.value);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const onUpdate = (product, quantity) => {
    dispatch(manageCartItem({ product, quantity }));
  };
  // const onClearCart = () => {
  //   const confirmed = window.confirm(
  //     "Are you sure you want to clear your cart?"
  //   );
  //   if (confirmed) {
  //     dispatch(clearCart());
  //     toast.success(`Cart successfully cleared!`);
  //   }
  // };
  const onClearCart = () => {
    Swal.fire({
      title: "Do you really want to clear?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      customClass: {
        popup: "custom-popup",
        title: "custom-title",
        content: "custom-content",
        confirmButton: "custom-confirm-button",
        cancelButton: "custom-cancel-button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Cleared successfully!",
          text: "Thanks for clearing!",
          icon: "success",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-popup",
            title: "custom-title",
            content: "custom-content",
            confirmButton: "custom-confirm-button",
          },
        }).then(() => {
          dispatch(clearCart());
        });
      }
    });
  };

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
        <div className="container mx-auto p-4 w-full max-w-7xl mt-4">
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="w-full lg:w-2/3">
              <h2 className="text-2xl font-bold mb-6 text-zinc-800">
                Your Cart
              </h2>
              {cartItems.length === 0 ? (
                <CartEmpty />
              ) : (
                <>
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <CartItem
                        key={item.id}
                        product={item}
                        onUpdate={onUpdate}
                      />
                    ))}
                  </div>
                  <div className="mt-6 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                      type="button"
                      className={`${buttonBgClass} w-full sm:w-auto`}
                      onClick={onClearCart}>
                      Clear Cart
                    </button>
                  </div>
                </>
              )}
            </div>
            <div className="w-full lg:w-1/3 mt-8 lg:mt-10">
              <OrderSummary />

              <ProceedToCheckout />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardCart;
