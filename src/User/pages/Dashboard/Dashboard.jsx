import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import granola from "../../../assets/granola.jpg";
import cuttery from "../../../assets/cuttery-set.jpg";
import basket from "../../../assets/basket.png";
import shawls from "../../../assets/shawals.jpg";
import notebooks from "../../../assets/eco-friendly-notebooks.jpeg";
import toothbrushes from "../../../assets/Bamboo-Toothbrush-Set.jpeg";
import towels from "../../../assets/Organic Cotton Towels.jpg";
import shoppingBags from "../../../assets/Reusable-Shopping-Bags.jpeg";
import phoneCase from "../../../assets/Biodegradable-Phone-Case.jpeg";
import journals from "../../../assets/Recycled-Paper-Journals.webp";
import waterBottle from "../../../assets/Glass-Water-Bottle.webp";
import teaSet from "../../../assets/Organic-Tea-Set.webp";
import ProductCard from "../../components/ProductCard/ProductCard";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Dashboard/Header";
import SearchBar from "../../components/Dashboard/SearchBar";
import SeeMore from "../../components/Buttons/SeeMore";
import ViewLess from "../../components/Buttons/ViewLess";
import Dropdown from "../../components/Dashboard/Dropdown";

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // HIGHLIGHT: Yeh useEffect Google se redirect hokar aaye token ko handle karega
  useEffect(() => {
    const token = searchParams.get("token");
    const usernameFromUrl = searchParams.get("username");

    // Skip if already logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      return;
    }

    // Agar URL mein token hai, to yeh Google se login hokar aaya hai
    if (token && usernameFromUrl) {
      // Data ko localStorage mein save karein
      localStorage.setItem("accessToken", token);
      localStorage.setItem("username", usernameFromUrl);
      localStorage.setItem("isLoggedIn", "true");

      try {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const padded = base64 + "=".repeat((4 - (base64.length % 4)) % 4);
        const payload = JSON.parse(atob(padded));
        const role = payload?.role ?? 0;
        localStorage.setItem("role", String(role));
      } catch (error) {
        console.warn("Unable to decode role from token.", error);
        localStorage.setItem("role", "0");
      }

      // Success message dikhayein
      Swal.fire({
        title: "Login Successful!",
        text: `Welcome, ${usernameFromUrl}!`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });

      // URL ko saaf karein taaki token dikhna band ho jaye
      navigate("/dashboard", { replace: true });
    }
  }, [searchParams, navigate]);

  // Aapka baaki ka code...
  const initialProducts = [
    {
      image: granola,
      title: "Snacker's Special Granola",
      price: 350,
      rating: 5,
    },
    {
      image: cuttery,
      title: "Wooden Cutlery Set of 7",
      price: 1200,
      rating: 4,
    },
    { image: basket, title: "Jute Cotton Basket", price: 399, rating: 4 },
    { image: shawls, title: "Premium Woolen Shawls", price: 5000, rating: 5 },
  ];

  const moreProducts = [
    { image: notebooks, title: "Eco-Friendly Notebook", price: 250, rating: 4 },
    {
      image: toothbrushes,
      title: "Bamboo Toothbrush Set",
      price: 150,
      rating: 5,
    },
    { image: towels, title: "Organic Cotton Towels", price: 600, rating: 4 },
    {
      image: shoppingBags,
      title: "Reusable Shopping Bags",
      price: 300,
      rating: 5,
    },
    {
      image: phoneCase,
      title: "Biodegradable Phone Case",
      price: 450,
      rating: 5,
    },
    {
      image: journals,
      title: "Recycled Paper Journals",
      price: 200,
      rating: 4,
    },
    { image: waterBottle, title: "Glass Water Bottle", price: 350, rating: 5 },
    { image: teaSet, title: "Organic Tea Set", price: 750, rating: 5 },
  ];

  const [products] = useState([...initialProducts, ...moreProducts]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [clicked, setClicked] = useState(0);
  const [showViewLess, setShowViewLess] = useState(false);

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleDropdown = (dropdown) => setOpenDropdown(dropdown);
  const handleDropdownLeave = () => setOpenDropdown(null);

  const handleSeeMore = () => {
    if (clicked === 0) {
      setVisibleProducts(visibleProducts + 4);
    } else if (clicked === 1) {
      setVisibleProducts(products.length);
      setShowViewLess(true);
    }
    setClicked(clicked + 1);
  };

  const handleViewLess = () => {
    setVisibleProducts(4);
    setClicked(0);
    setShowViewLess(false);
  };

  // HIGHLIGHT: Logout function ko Swal se update kiya gaya hai
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Saare login-related items ko clear karein
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("email");
        localStorage.removeItem("username");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("role");

        navigate("/home");
      }
    });
  };

  return (
    <div className="flex min-h-screen bg-[#fff1e6]">
      {/* Sidebar */}
      <Aside />

      {/* Main Content */}
      <main className="flex-1 p-6 mt-10">
        {/* Header */}
        <Header handleLogout={handleLogout} />{" "}
        {/* Pass handleLogout to Header */}
        {/* Search Bar */}
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
        {/* New Today Section */}
        <section>
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-4">New Today</h2>
            <Dropdown
              isOpen={openDropdown === "products"}
              onMouseEnter={() => handleDropdown("products")}
              onMouseLeave={handleDropdownLeave}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, visibleProducts).map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            {clicked < 2 && <SeeMore onClick={handleSeeMore} />}
            {showViewLess && <ViewLess onClick={handleViewLess} />}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
