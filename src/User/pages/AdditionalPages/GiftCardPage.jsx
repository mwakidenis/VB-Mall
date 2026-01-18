// src/App.js
import React from "react";
import { motion } from "framer-motion";

const giftCards = [
  {
    id: 1,
    image: "https://via.placeholder.com/400x300.png?text=Gift+Card+1",
    title: "PinePerks Rupay Prime E-Gift (Instant Voucher)",
    discount: "1.5% OFF",
    description: "Flat 1.5% off. Applicable on payment via UPI.",
    code: "RUPAY15OFF",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/400x300.png?text=Gift+Card+2",
    title: "MakeMyTrip E-Gift (Instant Voucher)",
    discount: "7% OFF",
    description: "Flat 7% off. Applicable on payment via UPI.",
    code: "FLIGHT7",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/400x300.png?text=Gift+Card+3",
    title: "Reliance Smart Bazaar E-Gift (Instant Voucher)",
    discount: "4% OFF",
    description: "Flat 4% off. Applicable on payment via UPI.",
    code: "RSB4",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/400x300.png?text=Gift+Card+4",
    title: "Bigbasket E-Gift Card (Instant Voucher)",
    discount: "4% OFF",
    description: "Flat 4% off. Applicable on payment via UPI.",
    code: "BIG4",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/400x300.png?text=Gift+Card+5",
    title: "Gift Card 5",
    discount: "5% OFF",
    description: "Flat 5% off. Applicable on payment via UPI.",
    code: "CARD5",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/400x300.png?text=Gift+Card+6",
    title: "Gift Card 6",
    discount: "6% OFF",
    description: "Flat 6% off. Applicable on payment via UPI.",
    code: "CARD6",
  },
  {
    id: 7,
    image: "https://via.placeholder.com/400x300.png?text=Gift+Card+7",
    title: "Gift Card 7",
    discount: "7% OFF",
    description: "Flat 7% off. Applicable on payment via UPI.",
    code: "CARD7",
  },
  {
    id: 8,
    image: "https://via.placeholder.com/400x300.png?text=Gift+Card+8",
    title: "Gift Card 8",
    discount: "8% OFF",
    description: "Flat 8% off. Applicable on payment via UPI.",
    code: "CARD8",
  },
  {
    id: 9,
    image: "https://via.placeholder.com/400x300.png?text=Gift+Card+9",
    title: "Gift Card 9",
    discount: "9% OFF",
    description: "Flat 9% off. Applicable on payment via UPI.",
    code: "CARD9",
  },
];

const GiftCardsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-800 mt-[13vh]">Gift Cards</h1>
        <p className="text-lg text-gray-600">Give the gift of choice with our versatile gift cards.</p>
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {giftCards.map((card) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h2>
            <p className="text-green-500 font-bold mb-2">{card.discount}</p>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <p className="text-gray-800 font-semibold">Use Code: <span className="text-blue-500">{card.code}</span></p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GiftCardsPage;
