// src/pages/PaymentPage.jsx
import React, { useState } from "react";
import OrderSummary from "../../components/Order/OrderSummary";
import PaymentButton from "../../components/Buttons/PaymentButton";

const PaymentPage = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.id);
  };
  console.log(selectedPaymentMethod)

  return (
    <div className="flex flex-col items-center bg-[#fff0e3ff] p-4">
      <div className="w-full max-w-6xl mt-20 mb-20">
        <div className="flex flex-col lg:flex-row w-full space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Payment Method Selection */}
          <div className="w-full lg:w-1/2 bg-[#fff0e3ff] shadow-lg rounded-lg p-6 mb-4 mt-2 lg:mb-0">
            <h2 className="text-lg font-medium mb-4">Select a payment method</h2>
            <div className="border p-4 rounded-lg">
              <div className="mb-4">
                <input type="radio" id="cod" name="payment-method" className="mr-2" onChange={handlePaymentMethodChange}/>
                <label htmlFor="cod" className="font-medium">
                  Cash on Delivery / Pay on Delivery
                </label>
                <p className="text-sm text-gray-600">Cash and UPI accepted. Know more.</p>
              </div>
              <div className="mb-4">
                <input type="radio" id="upi" name="payment-method" className="mr-2"  onChange={handlePaymentMethodChange}/>
                <label htmlFor="upi" className="font-medium">
                  UPI (Pay via any app)
                </label>
                <p className="text-sm text-gray-600">Google Pay, PhonePe, Paytm and more</p>
              </div>
              <div className="mb-4">
                <input type="radio" id="card" name="payment-method" className="mr-2"  onChange={handlePaymentMethodChange}/>
                <label htmlFor="card" className="font-medium">
                  Credit or debit card
                </label>
              </div>
              <div className="mb-4">
                <input type="radio" id="netbanking" name="payment-method" className="mr-2"  onChange={handlePaymentMethodChange}/>
                <label htmlFor="netbanking" className="font-medium">
                  Net Banking
                </label>
              </div>
            </div>
            <PaymentButton amount={totalAmount} paymentMethod={selectedPaymentMethod} />
          </div>
          {/* Order Summary */}
          <OrderSummary setTotalAmount={setTotalAmount} />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
