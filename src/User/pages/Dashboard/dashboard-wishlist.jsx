import React, { useState } from "react";
import Aside from "../../components/Aside/Aside";
// import { Link, useNavigate } from "react-router-dom";
import WishlistEmpty from "../Order/WishlistEmpty";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Dashboard/Header";
import SearchBar from "../../components/Dashboard/SearchBar";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { clearWishlist, manageWishlistItem } from "../../redux/wishlist";
import { manageCartItem } from "../../redux/cartSlice";

const cardClass = "p-4 bg-white rounded-lg shadow-md";
const textClass = "text-zinc-500";
const buttonBgClass =
  "bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out";

const WishlistItem = ({ product, onUpdate, onAddToCart, isExistsInTheCart }) => (
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
        <p className="text-gray-600 text-lg font-semibold mt-2 flex items-center gap-2">
          ₹{product.newPrice}
          <span className="text-sm text-green-500 line-through">
            ₹{product.price.toFixed(2)}
          </span>
        </p>
        <button
          className="mt-4 bg-[#166635ff] text-white px-4 py-2 rounded text-sm hover:bg-[#3d9970ff] transition-colors disabled:opacity-45 disabled:pointer-events-none"
          onClick={() => {
            onAddToCart(product);
          }}
          disabled={isExistsInTheCart}>
          {isExistsInTheCart
            ? "Added to cart"
            : "Add to Cart"}
        </button>
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

const DashboardWishlist = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => setSearchTerm(e.target.value);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const onUpdate = (product, quantity) => {
    dispatch(manageWishlistItem({ product, quantity }));
  };

  const onClearWishlist = () => {
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
          dispatch(clearWishlist());
        });
      }
    });
  };

  const onAddToCart = (product) => {
    const quantity = 1;
    dispatch(manageCartItem({ product, quantity }));
    toast.success(`Item added to cart!`);
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
                Your Wishlist ❤️
              </h2>
              {wishlistItems.length === 0 ? (
                <WishlistEmpty />
              ) : (
                <>
                  <div className="space-y-6">
                    {wishlistItems.map((item) => (
                      <WishlistItem
                        key={item.id}
                        product={item}
                        onUpdate={onUpdate}
                        isExistsInTheCart={cartItems.find((product) => item.id === product.id)}
                        onAddToCart={onAddToCart}
                      />
                    ))}
                  </div>
                  <div className="mt-6 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                      type="button"
                      className={`${buttonBgClass} w-full sm:w-auto`}
                      onClick={onClearWishlist}>
                      Clear Wishlist ❤️a
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardWishlist;
