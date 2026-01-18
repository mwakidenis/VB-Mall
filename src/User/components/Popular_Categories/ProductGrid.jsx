import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { manageCartItem } from "../../redux/cartSlice";
import { manageWishlistItem } from "../../redux/wishlist";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
// import PaymentPage from "../../pages/Payment/Payment";

// ProductGrid component to display a grid of products
function ProductGrid({ products, headingText }) {
  function getNewPrice(discountPercent, actualPrice) {
    return (((100 - discountPercent) * actualPrice) / 100).toFixed(2);
  }

  return (
    <div className="w-full lg:w-3/4 lg:ml-auto -ml-4 md:mt-28 mt-8 mb-9 mr-5">
      <h1 className="mb-10 font-bold ml-10" style={{ fontSize: "23px" }}>
        {headingText}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ml-10">
        {products.map((product) => {
          product.newPrice = getNewPrice(
            product.discountPercentage,
            product.price
          );
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

// ProductCard component to display individual product details
function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const handleClick = (productId) => {
    navigate(`/productDetails/${productId}`);
  };

  const handleBuyNow = () => {
    navigate(`/checkout`);
  };

  // Function to add product to cart
  const onAddToCart = (product) => {
    const quantity = 1;
    dispatch(manageCartItem({ product, quantity }));
    toast.success("Successfully added to cart!");
  };

  // Function to add or remove product from wishlist
  const onAddToWishlist = (product) => {
    const quantity = 1;
    dispatch(manageWishlistItem({ product, quantity }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:cursor-pointer relative w-full max-w-sm">
      {/* Wishlist heart */}
      {wishlistItems.find((item) => item.id === product.id) ? (
        <button
          className="mt-2 md:ml-48 ml-80 text-red-600 absolute top-0 right-2 p-2 bg-red-100 rounded-full hover:bg-red-200 transition"
          onClick={() => {
            onAddToWishlist(product);
            toast.success("Item removed from wishlist!");
          }}>
          <FaHeart size={18} />
        </button>
      ) : (
        <button
          className="mt-2 md:ml-48 ml-80 text-red-600 absolute top-0 right-2 p-2 bg-red-100 rounded-full hover:bg-red-200 transition"
          onClick={() => {
            onAddToWishlist(product);
            toast.success("Item added to wishlist!");
          }}>
          <FaRegHeart size={18} />
        </button>
      )}
      {/* Product image */}
      <img
        onClick={() => handleClick(product.id)}
        src={product.image}
        alt={product.title}
        className="w-full h-60 object-contain"
      />
      {/* Product details */}
      <div className="p-4">
        {/* Title */}
        <h3
          onClick={() => handleClick(product.id)}
          className="font-bold text-sm overflow-hidden">
          {product.title}
        </h3>
        {/* Price */}
        <p className="text-gray-600 text-lg font-semibold flex items-center gap-2">
          ₹{product.newPrice}
          <span className="text-sm text-green-500 line-through">
            ₹{product.price.toFixed(2)}
          </span>
        </p>
        {/* Rating */}
        <div className="flex items-center ">
          {[...Array(Math.round(product.rating.rate))].map((_, i) => (
            <span key={i} className="text-yellow-400">
              ⭐
            </span>
          ))}
          <span className="text-gray-500 ml-1">({product.rating.count})</span>
        </div>
        {/* Add to cart button */}
        <div className="flex h-13 gap-2">
          <button
            className="mt-1 bg-[#166635ff] text-white px-4 py-2 rounded text-sm w-full hover:bg-[#3d9970ff] transition-colors disabled:opacity-45 disabled:pointer-events-none"
            onClick={() => {
              onAddToCart(product);
            }}
            disabled={cartItems.find((item) => item.id === product.id)}>
            {cartItems.find((item) => item.id === product.id)
              ? "Added"
              : "Add to Cart"}
          </button>
          <button
            onClick={() => {
              onAddToCart(product); // First, add the product to the cart
              handleBuyNow(); // Then, navigate to the payment page
            }}
            className="mt-1 bg-orange-600 text-white px-4 py-2 rounded text-sm w-full hover:bg-orange-700 transition-colors disabled:opacity-45 disabled:pointer-events-none"
            disabled={cartItems.find((item) => item.id === product.id)}>
            {cartItems.find((item) => item.id === product.id)
              ? "⚡Buy Now"
              : "⚡Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
