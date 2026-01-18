import React, { useState, useEffect } from "react";
import Filters from "../../components/Popular_Categories/Filters";
import ProductGrid from "../../components/Popular_Categories/ProductGrid";
import toast from "react-hot-toast";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { normalizeAndFilterByRating } from "../../utils/productFilters";





function CeramicDinnerware() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]); // Dynamic categories based on products
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesToFetch = ["kitchen-accessories"]; // desired categories
        let allProducts = [];

        // Fetch products from each category
        for (let category of categoriesToFetch) {
          const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
          if (response.data && Array.isArray(response.data.products)) {
            const mappedProducts = response.data.products.map((product) => ({
              id: product.id,
              title: product.title,
              price: product.price,
              category: product.category,
              image: product.images[0] || "",
              discountPercentage: product.discountPercentage,
              rating: {
                rate:  Math.round(product.rating),
                count: product.reviews ? product.reviews.length : 0,
              },
            }));
            allProducts = [...allProducts, ...mappedProducts];
          }
        }

        setProducts(allProducts);
        setFilteredProducts(allProducts);

        // Extract unique categories from the fetched products
        const uniqueCategories = [...new Set(allProducts.map(product => product.category))];
        setAvailableCategories(uniqueCategories); // Update available categories

      } catch (error) {
        toast.error("Oops, can't get your products, sorry! Try refreshing the page.");
        console.error("Fetching products failed:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterProducts = () => {
      let updatedProducts = products;
      if (categoryFilter) {
        updatedProducts = updatedProducts.filter(
          (product) => product.category === categoryFilter
        );
      }
      if (priceFilter) {
        updatedProducts = updatedProducts.filter(
          (product) => product.price <= parseInt(priceFilter)
        );
      }
     updatedProducts = normalizeAndFilterByRating(updatedProducts, ratingFilter);

      setFilteredProducts(updatedProducts);
    };

    filterProducts();
  }, [products, categoryFilter, priceFilter, ratingFilter]);

  return (
    <div className="bg-[#fff5edff] min-h-screen">
      <Helmet>
        <title>Ceramic Dinnerware | VigyBag</title>
        <meta name="description" content="Explore a wide range of beauty and wellness products at VigyBag. Find the best products to enhance your beauty and wellbeing." />
      </Helmet>
      <main className="container">
        <div className="flex flex-col lg:flex-row gap-8 relative">
          <Filters
            availableCategories={availableCategories} // Use dynamically generated categories
            setCategoryFilter={setCategoryFilter}
            setPriceFilter={setPriceFilter}
            setRatingFilter={setRatingFilter}
            backgroundColor="#e5ebe4ff"
          />
          <ProductGrid
            products={filteredProducts}
            headingText="CeramicDinnerware"
          />
        </div>
      </main>
    </div>
  );
}

export default CeramicDinnerware;
