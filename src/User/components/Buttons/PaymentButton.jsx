// src/components/Payment/PaymentButton.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const PaymentButton = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const loadRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadRazorpay('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: totalAmount * 100, // Use totalAmount from Redux store
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo',
      handler: function (response) {
        alert(`Payment ID: ${response.razorpay_payment_id}`);
        alert(`Order ID: ${response.razorpay_order_id}`);
        alert(`Signature: ${response.razorpay_signature}`);
        // You can send the response to your backend to verify payment
      },
      prefill: {
        name: 'Your Name',
        email: 'example@example.com',
        contact: '9999999999'
      },
      notes: {
        address: 'Razorpay Corporate Office'
      },
      theme: {
        color: '#3399cc'
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <button className="bg-green-500 text-white font-medium py-2 px-4 rounded-lg w-full mt-4" onClick={displayRazorpay}>
      Pay ₹{totalAmount}
    </button>
  );
};

export default PaymentButton;