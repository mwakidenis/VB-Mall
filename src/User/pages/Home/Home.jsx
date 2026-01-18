import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../../components/HomPageCard/CategoryCard";
import LatestInMarketCard from "../../components/HomPageCard/LatestInMarketCard";
import background from "../../../assets/background.png";
import app from "../../../assets/app.png";
import SearchBar from "../../pages/Home/SearchBar";
import DownArrow from "../../components/DownArrow/downArrow";
import { AnimatePresence, motion } from "framer-motion";

// Category Images
import customisedGiftsImg from "../../../assets/Customized-Gifts.png";
import HealthSupplementsImg from "../../../assets/Health-supplements.png";
import PrintingAndStationary from "../../../assets/Printing-Stationary.png";
import BodyCare from "../../../assets/Body-Care.png";
import FurnitureAndDecor from "../../../assets/Furniture-Decor.jpeg";
import BeautyAndWellness from "../../../assets/Beauty-Wellness.png";
import FoodAndBeverages from "../../../assets/Food-Beverages.png";
import fashionAndAccessories from "../../../assets/Fashion-Accessories.png";

// Latest Products Images
import HandmadeSoapsImg from "../../../assets/Handmade-Soaps.png";
import ArtSuppliesImg from "../../../assets/Art-Supplies.png";
import CeramicDinnerwareImg from "../../../assets/Ceramic-Dinnerware.png";
import BambooProductsImg from "../../../assets/Bamboo-Products.png";
import StorageBasketsImg from "../../../assets/Storage-Baskets.png";

// Popular Categories
const popularCategories = [
  {
    name: "Fashion & Accessories",
    image: fashionAndAccessories,
    path: "/popularCategories/fashionAccessories",
  },
  {
    name: "Printing & Stationery",
    image: PrintingAndStationary,
    path: "/popularCategories/printingStationery",
  },
  {
    name: "Food & Beverages",
    image: FoodAndBeverages,
    path: "/popularCategories/foodBeverages",
  },
  {
    name: "Beauty & Wellness",
    image: BeautyAndWellness,
    path: "/popularCategories/beautyWellness",
  },
  {
    name: "Furniture & Decor",
    image: FurnitureAndDecor,
    path: "/popularCategories/furnitureDecor",
  },
  { name: "Body Care", image: BodyCare, path: "/popularCategories/bodyCare" },
  {
    name: "Health Supplements",
    image: HealthSupplementsImg,
    path: "/popularCategories/healthSupplements",
  },
  {
    name: "Customized Gifts",
    image: customisedGiftsImg,
    path: "/popularCategories/customizedGifts",
  },
];

// Latest Products
const latestProducts = [
  {
    img: HandmadeSoapsImg,
    name: "Handmade Soaps",
    description:
      "A vibrant collection of artisan soaps that are 100% natural and biodegradable.",
    discount: "15% Off",
    path: "/latestInMarket/handMadeSoaps",
  },
  {
    img: ArtSuppliesImg,
    name: "Art Supplies",
    description: "Natural and cruelty-free selection of art supplies.",
    discount: "Up to 50% Off",
    path: "/latestInMarket/artSupplies",
  },
  {
    img: CeramicDinnerwareImg,
    name: "Ceramic Dinnerware",
    description: "Long-lasting and durable eco-friendly dinnerware.",
    discount: "Buy 1 Get 1",
    path: "/latestInMarket/ceramicDinnerware",
  },
  {
    img: BambooProductsImg,
    name: "Bamboo Products",
    description:
      "Natural, non-toxic, biodegradable household and bath products.",
    discount: "20% Off",
    path: "/latestInMarket/bambooProducts",
  },
  {
    img: StorageBasketsImg,
    name: "Storage Baskets",
    description:
      "Natural basket collection featuring hand-woven sustainable materials.",
    discount: "20% Off",
    path: "/latestInMarket/storageBaskets",
  },
];

const Home = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // Search
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filtered = [
      ...popularCategories.filter((c) =>
        c.name.toLowerCase().includes(term.toLowerCase())
      ),
      ...latestProducts.filter((p) =>
        p.name.toLowerCase().includes(term.toLowerCase())
      ),
    ];
    setSuggestions(filtered);
  };
  const handleSuggestionClick = (s) => navigate(s.path);

  const scrollToSection = () =>
    sectionRef.current.scrollIntoView({ behavior: "smooth" });

  // Subscription
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
  // backend URL

  // Subscribe handler
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const normalized = email.trim().toLowerCase();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!normalized || !emailPattern.test(normalized)) {
      setMessage("⚠️ Please enter a valid email address.");
      setIsError(true);
      setIsSubmitting(false);
      return;
    }

    try {
      // Construct endpoint safely, handle trailing slash
      const endpoint = `${API_BASE.replace(/\/$/, "")}/api/subscribe`;

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email: normalized }),
      });

      let data = {};
      const ct = res.headers.get("content-type") || "";
      if (ct.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        data = { message: text };
      }

      if (res.ok) {
        setMessage(data.message || "🎉 Subscribed successfully!");
        setIsError(false);
        setEmail("");
      } else {
        setMessage(data.message || "❌ Subscription failed");
        setIsError(true);
      }

      setTimeout(() => setMessage(""), 4000);
    } catch (err) {
      console.error("Subscribe error:", err);
      setMessage("❌ Server error. Try again later.");
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bg-[#fff0e3ff] min-h-screen">
      <main>
        {/* Mobile Search */}
        <div className="sm:block md:hidden bg-[#eff0f1] pt-5">
          <SearchBar
            searchTerm={searchTerm}
            handleSearch={handleSearch}
            suggestions={suggestions}
            handleSuggestionClick={handleSuggestionClick}
          />
        </div>

        {/* Hero Section */}
        <section
          className="bg-[#FFF5EA] py-12 md:py-20 lg:py-24 flex items-center"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 lg:w-1/2 text-center md:text-left md:mt-20">
              <h1 className="text-[33px] sm:text-4xl md:text-[53px] font-bold mb-4">
                Welcome to <span className="text-green-700">VigyBag!</span>
              </h1>
              <h2 className="text-[25px] sm:text-2xl md:text-[33px] font-semibold mb-6">
                Your Eco-Friendly Shopping Heaven
              </h2>
              <p className="mb-6 text-gray-700 text-[20px] sm:text-[23px]">
                At VigyBag, we curate the finest earth-friendly essentials to
                help you reduce your environmental footprint without
                compromising on quality or style.
              </p>
              <button
                onClick={scrollToSection}
                className="bg-green-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-green-800 transition duration-300"
              >
                Shop Now
              </button>
              <DownArrow />
            </div>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="py-8 sm:py-12 md:py-16 bg-[#fff0e3ff]">
          <div className="container mx-auto px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-black">
              Popular Categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {popularCategories.map((cat, i) => (
                <CategoryCard
                  key={i}
                  name={cat.name}
                  image={cat.image}
                  path={cat.path}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Latest Products */}
        <section
          className="bg-[#fff0e3ff] py-8 sm:py-12 md:py-16"
          id="sect"
          ref={sectionRef}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-black">
              Latest in the Market
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {latestProducts.map((prod, i) => (
                <LatestInMarketCard key={i} product={prod} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section
          className="py-8 sm:py-12 md:py-16 relative mb-[-1px]"
          style={{
            backgroundImage: `url(${app})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="bg-[#373b3aff] rounded-lg p-6 sm:p-8 md:p-12 max-w-3xl mx-auto backdrop-blur-lg text-center text-white">
              <h2 className="text-2xl font-bold mb-2">
                Stay Updated with Our Latest News
              </h2>
              <p className="mb-4">
                Subscribe to our newsletter to receive exclusive updates,
                promotions, and tips.
              </p>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col items-center space-y-3"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full p-3 rounded-lg text-black border ${isError ? "border-red-500" : "border-gray-300"
                    }`}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-2 rounded-xl font-medium text-white transition-all duration-300 ${isSubmitting
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-600"
                    }`}
                >
                  {isSubmitting ? "Processing..." : "Subscribe"}
                </button>
              </form>

              <AnimatePresence>
                {message && (
                  <motion.div
                    key={message}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mt-4 px-4 py-3 rounded-xl font-medium text-center w-full ${isError
                        ? "bg-red-500 text-white"
                        : "bg-green-500 text-white"
                      }`}
                    role="status"
                    aria-live="polite"
                  >
                    {message}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </section>
      </main>
    </div>
  );
};

export default Home;
