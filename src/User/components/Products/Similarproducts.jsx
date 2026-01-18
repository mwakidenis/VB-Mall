import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Similarproducts = ({category}) => {
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [products, setProducts] = useState([])
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getProductsPerRow = () => {
    if (screenSize >= 1024) return 4;
    if (screenSize >= 768) return 3;
    if (screenSize >= 640) return 2;
    return 2;
  };

  const handleSeeMore = () => {
    setVisibleProducts((prevCount) => prevCount + getProductsPerRow());
  };

  const handleViewLess = () => {
    setVisibleProducts(getProductsPerRow());
  };

  function getNewPrice(discountPercent, actualPrice) {
    return ((100 - discountPercent) * actualPrice / 100).toFixed(2)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        if (response.data && Array.isArray(response.data.products) && response.data.products.length > 0) {
          const mappedProducts = response.data.products.map((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            category: product.category,
            image: product.images[0] || "",
            discountPercentage: product.discountPercentage,
            newPrice: getNewPrice(product.discountPercentage, product.price),
            rating: {
              rate: product.rating,
              count: product.reviews ? product.reviews.length : 0,
            },
          }));
          setProducts([...mappedProducts.filter(product => product.category === category), ...mappedProducts.filter(product => product.category !== category)]);
        } else {
          setProducts([]);
          toast.error("No products found.");
        }
      } catch (error) {
        toast.error("Oops, can't get your products, sorry! Try refreshing the page.");
        console.error("Fetching products failed:", error);
      }
    };
    fetchData();
  }, [category]);


  return (
    <div className="mt-8 px-4 ">
      <h3 className="text-lg font-bold mb-4 text-gray-800 dark:black">Similar Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {
          
          products.slice(0, visibleProducts).map((product) => (
              <SimilarProductCard key={product?.id} product={product}/>
            ))
        }
      </div>
      <div className="flex justify-center mt-4">
        {visibleProducts < products.length/2 ? (
          <button
            onClick={handleSeeMore}
            className="px-4 py-2 bg-[#15a349ff] text-white rounded-lg mr-4 hover:bg-green-600 focus:outline-none transition duration-300"
          >
            See More
          </button>
        ) : (
          <button
            onClick={handleViewLess}
            className="px-4 py-2 bg-red-500 text-white rounded-lg mr-4 hover:bg-red-600 focus:outline-none transition duration-300"
          >
            View Less
          </button>
        )}
      </div>
    </div>
  );
};

const SimilarProductCard = ({product}) => (
  <div className="bg-white dark:bg-white p-4 rounded-lg shadow-md transition duration-300">
    <img src={product?.image} alt="Similar Product" className="w-full h-40 object-cover rounded-lg mb-2" />
    <h4 className="text-md font-semibold mb-1 text-gray-800 dark:black">{product?.title}</h4>
    <p className="text-gray-600 dark:black text-sm mb-1">
      ₹{product?.newPrice} <span className="line-through text-gray-500 dark:text-gray-400">₹{product?.price}</span>
    </p>
    <p className="text-green-600 dark:text-green-700 text-sm font-bold">{product.discountPercentage}% OFF</p>
  </div>
);

export default Similarproducts;