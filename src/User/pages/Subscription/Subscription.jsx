import React, { useState } from 'react';
import logo from "../../../assets/images/Logo.svg";
import visa from "../../../assets/visa.png";
import mastercard from "../../../assets/mastercard.png";

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('Team Plan');
  const [paymentPlan, setPaymentPlan] = useState('Quarterly');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [teamAccounts, setTeamAccounts] = useState(5);
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  const handleApplyDiscount = () => {
    if (discountCode === '30KCELEB') {
      setDiscountApplied(true);
    }
  };

  const calculateTotalPrice = () => {
    const basePrice = selectedPlan === 'Pro Plan' ? 59.99 : 189.00;
    const discount = discountApplied ? basePrice * 0.30 : 0;
    return basePrice - discount;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 max-w-3xl w-full mt-20">
        <div className="flex flex-col sm:flex-row items-center mb-6">
          <div className="bg-orange-100 rounded-full p-3 mb-4 sm:mb-0 sm:mr-4">
            <img src={logo} alt="Logo" className="h-8 w-8 sm:h-10 sm:w-10"/>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold">Subscription Plan</h2>
            <p className="text-sm text-gray-600">Unlock instant access to all existing products and daily new releases.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-2">Choose Plan</h3>
            <div className="flex space-x-2">
              <button 
                className={`px-4 py-1 rounded-full text-sm ${paymentPlan === 'Quarterly' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`} 
                onClick={() => setPaymentPlan('Quarterly')}
              >
                Quarterly
              </button>
              <button 
                className={`px-4 py-1 rounded-full text-sm ${paymentPlan === 'Yearly' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`} 
                onClick={() => setPaymentPlan('Yearly')}
              >
                Yearly
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Payment Plan</h3>
            <div className="flex space-x-2">
              <button 
                className={`px-4 py-1 rounded-full text-sm ${paymentMethod === 'Credit Card' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`} 
                onClick={() => setPaymentMethod('Credit Card')}
              >
                Credit Card
              </button>
              <button 
                className={`px-4 py-1 rounded-full text-sm ${paymentMethod === 'Paypal' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`} 
                onClick={() => setPaymentMethod('Paypal')}
              >
                Paypal
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            {/* Plan selection and features */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">Pro Plan</h3>
                <p className="text-xs text-gray-500">Perfect for individuals</p>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-xl mr-2">₹59.99</span>
                <input 
                  type="radio" 
                  className="form-radio" 
                  name="plan" 
                  value="Pro Plan" 
                  checked={selectedPlan === 'Pro Plan'} 
                  onChange={() => setSelectedPlan('Pro Plan')} 
                />
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">Team Plan</h3>
                <p className="text-xs text-gray-500">Perfect for small teams or business</p>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-xl mr-2">₹189.00</span>
                <input 
                  type="radio" 
                  className="form-radio" 
                  name="plan" 
                  value="Team Plan" 
                  checked={selectedPlan === 'Team Plan'} 
                  onChange={() => setSelectedPlan('Team Plan')} 
                />
              </div>
            </div>
            {/* Features list */}
            <ul className="text-sm text-gray-600 mt-4">
              <li className="flex items-center mb-2">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                50 downloads per day
              </li>
              <li className="flex items-center mb-2">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Access to all products or bundles
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Early access to new/beta release features
              </li>
            </ul>
            {/* Team accounts */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Team accounts</label>
              <div className="flex items-center">
                <button 
                  className="bg-gray-100 px-3 py-1 rounded-l" 
                  onClick={() => setTeamAccounts(prev => Math.max(1, prev - 1))}
                >
                  -
                </button>
                <input 
                  type="number" 
                  className="w-12 text-center border-t border-b" 
                  value={teamAccounts} 
                  readOnly 
                />
                <button 
                  className="bg-gray-100 px-3 py-1 rounded-r" 
                  onClick={() => setTeamAccounts(prev => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            {/* Payment methods */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <img src={visa} alt="Visa" className="h-8 w-10 sm:h-10 sm:w-10" />
                <h3 className="font-semibold mb-0">**** 4470</h3>
              </div>
              <p className="text-xs text-gray-500">Visa Card <span className="text-blue-500 cursor-pointer">Edit</span></p>
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <img src={mastercard} alt="Mastercard" className="h-8 w-10 sm:h-10 sm:w-10" />
                <h3 className="font-semibold mb-0">**** 0900</h3>
              </div>
              <p className="text-xs text-gray-500">Mastercard <span className="text-blue-500 cursor-pointer">Edit</span></p>
            </div>
            <button className="w-full bg-gray-800 text-white py-2 rounded text-sm mb-6">
              + Add New Card
            </button>
            {/* Discount code */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Discount Code</label>
              <div className="flex">
                <input
                  type="text"
                  className="flex-grow border rounded-l px-3 py-2 text-sm"
                  placeholder="30KCELEB"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                />
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-r text-sm"
                  onClick={handleApplyDiscount}
                >
                  Apply
                </button>
              </div>
              {discountApplied && <p className="text-green-500 text-sm mt-2">Discount Applied!</p>}
            </div>
            {/* Order summary */}
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold mb-2">Team Plan</h3>
              <p className="text-xs text-gray-500 mb-4">5 Users Quarterly</p>
              <div className="flex justify-between text-sm mb-2">
                <span>Team Plan</span>
                <span>$189.00</span>
              </div>
              <div className="flex justify-between text-sm mb-2 text-green-500">
                <span>Discount (30%)</span>
                <span>-$63.85</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4">
                <span>Total</span>
                <span>$126.15</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Next payment will charge 12th of January, 2023</p>
            </div>
            <button className="w-full bg-blue-500 text-white py-3 rounded font-semibold mt-6">
              PAY NOW
            </button>
          </div>
          </div>
        </div>
      </div>
    
    
  );
};

export default SubscriptionPage;
