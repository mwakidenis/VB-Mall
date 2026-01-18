import React, { useState } from "react";
import InputField from "../components/ProductForm/InputField";
import TextArea from "../components/ProductForm/TextArea";
import FileInput from "../components/ProductForm/FileInput";
import PriceInput from "../components/ProductForm/PriceInput";

const ProductForm = () => {
  const [activeTab, setActiveTab] = useState("basic");
  const [price, setPrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");

  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d+(\.\d{0,2})?$/.test(value)) {
      setPrice(value);
    }
  };

  const handleDiscountedPriceChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d+(\.\d{0,2})?$/.test(value)) {
      setDiscountedPrice(value);
    }
  };

  const tabs = [
    { id: "basic", label: "Basic Info" },
    { id: "pricing", label: "Pricing & Inventory" },
    { id: "images", label: "Images & Variants" },
    { id: "shipping", label: "Shipping" },
    { id: "seo", label: "SEO & Attributes" },
    { id: "additional", label: "Additional Details" },
  ];

  const handleTabChange = (direction) => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    let newIndex;

    if (direction === "next") {
      newIndex = Math.min(currentIndex + 1, tabs.length - 1);
      if (newIndex !== currentIndex) {
        const saveDetails = window.confirm(
          "Do you want to save your details before moving to the next tab?"
        );
        if (saveDetails) {
          // Here you would typically save the data
          console.log("Saving data...");
        }
      }
    } else {
      newIndex = Math.max(currentIndex - 1, 0);
    }

    setActiveTab(tabs[newIndex].id);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "basic":
        return (
          <>
            <InputField label="Product Name" placeholder="Enter product name" />
            <TextArea
              label="Product Description"
              placeholder="Describe your product"
            />
            <InputField label="Category" placeholder="Product category" />
            <InputField label="Brand" placeholder="Brand name" />
            <InputField label="SKU" placeholder="Stock Keeping Unit" />
          </>
        );
      case "pricing":
        return (
          <>
            <PriceInput
              label="Price (₹)"
              value={price}
              onChange={handlePriceChange}
            />
            <PriceInput
              label="Discounted Price (₹)"
              value={discountedPrice}
              onChange={handleDiscountedPriceChange}
            />
            <InputField
              label="Currency"
              placeholder="INR"
              value="INR"
              readOnly
            />
            <InputField label="Stock Quantity" type="number" placeholder="0" />
            <InputField
              label="Minimum Order Quantity"
              type="number"
              placeholder="1"
            />
            <InputField
              label="Maximum Order Quantity"
              type="number"
              placeholder="Optional"
            />
          </>
        );
      case "images":
        return (
          <>
            <FileInput label="Primary Image" accept="image/*" />
            <FileInput
              label="Additional Images (Max 3)"
              accept="image/*"
              multiple
              maxFiles={3}
            />
            <InputField label="Size" placeholder="If applicable" />
            <InputField label="Color" placeholder="If applicable" />
            <InputField label="Material" placeholder="If applicable" />
          </>
        );
      case "shipping":
        return (
          <>
            <InputField label="Weight" type="number" placeholder="In kg" />
            <InputField label="Dimensions" placeholder="L x W x H" />
            <InputField
              label="Shipping Options"
              placeholder="e.g., Standard, Express"
            />
            <InputField
              label="Shipping Cost"
              type="number"
              placeholder="0.00"
            />
          </>
        );
      case "seo":
        return (
          <>
            <InputField label="Meta Title" placeholder="SEO title" />
            <TextArea label="Meta Description" placeholder="SEO description" />
            <InputField
              label="Keywords"
              placeholder="Comma-separated keywords"
            />
            <TextArea
              label="Specifications"
              placeholder="Product specifications"
            />
            <InputField label="Features" placeholder="Key features" />
          </>
        );
      case "additional":
        return (
          <>
            <InputField label="Manufacturer" placeholder="Manufacturer name" />
            <InputField label="MPN" placeholder="Manufacturer Part Number" />
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Condition
              </label>
              <select className="w-full p-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none">
                <option value="">Select condition</option>
                <option value="new">New</option>
                <option value="used">Used</option>
                <option value="refurbished">Refurbished</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Availability Status
              </label>
              <select className="w-full p-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none">
                <option value="">Select status</option>
                <option value="in-stock">In Stock</option>
                <option value="out-of-stock">Out of Stock</option>
                <option value="pre-order">Pre-order</option>
              </select>
            </div>
            <TextArea
              label="Warranty Information"
              placeholder="Warranty details"
            />
            <TextArea
              label="Return Policy"
              placeholder="Return policy details"
            />
            <InputField
              label="Country of Origin"
              placeholder="Manufacturing country"
            />
            <InputField label="Certification" placeholder="If any" />
            <InputField label="Tags" placeholder="Comma-separated tags" />
          </>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="bg-[#fff5edff]">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white shadow-lg rounded-lg mt-1 mb-3 ">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800 mt-20">
          Product Information
        </h1>

        <div className="mb-6 overflow-x-auto ">
          <div className="flex border-b whitespace-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-2 text-sm sm:text-base ${
                  activeTab === tab.id
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(tab.id)}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {renderTabContent()}

          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => handleTabChange("previous")}
              className="px-4 py-2 bg-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out shadow-md"
              disabled={activeTab === tabs[0].id}>
              Previous
            </button>
            {activeTab !== tabs[tabs.length - 1].id ? (
              <button
                type="button"
                onClick={() => handleTabChange("next")}
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out shadow-md">
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out shadow-md">
                Submit Product
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
