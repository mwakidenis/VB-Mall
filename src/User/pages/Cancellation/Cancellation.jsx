import React, { useState } from 'react';
import cancel from '../../../assets/cancel.png';

const CancellationPage = () => {
  const [reason, setReason] = useState('');

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  return (
    <div className="min-h-screen bg-[#FAEBD7] flex flex-col items-center justify-center">
      <main className="bg-[#FFF5EE] p-10 rounded-lg shadow-lg text-center max-w-3xl mx-auto mt-6" style={{ border: '2px solid #E1E1E1' }}>
        <div className="mb-6">
          <img src={cancel} alt="Sad Box" className="mx-auto mb-4" style={{ width: '200px', borderRadius: '50%' }} />
          <h1 className="text-3xl font-bold text-green-900">Are you sure you want to cancel?</h1>
        </div>
        <p className="text-gray-700 mb-6">
          Sorry to see you cancel. Please tell us the reason and we will try to make your
          shopping experience better! It may take a few days to return, please wait patiently.
        </p>
        <div className="mb-6">
          <select
            className="w-full p-4 rounded-lg border border-gray-300 mb-4 bg-[#E1E1E1] text-black overflow-auto"
            style={{ maxHeight: '100px' }}
            value={reason}
            onChange={handleReasonChange}
          >
            <option value="">Select a reason</option>
            <option value="not_described">Item not as described</option>
            <option value="better_price">Found a better price elsewhere</option>
            <option value="ordered_mistake">Ordered by mistake</option>
            <option value="late_arrival">Item arrived too late</option>
            <option value="no_longer_needed">Item no longer needed</option>
            <option value="poor_service">Poor customer service</option>
            <option value="high_shipping">High shipping costs</option>
            <option value="product_quality">Concerns about product quality</option>
            <option value="change_circumstances">Change in personal circumstances</option>
            <option value="others">Others</option>
          </select>
          {reason === 'others' && (
            <textarea
              className="w-full p-4 rounded-lg border border-gray-300 resize-none h-32 bg-[#E1E1E1] text-black"
              placeholder="Please tell us the reason."
            />
          )}
        </div>
        <button 
        type='submit' 
        className="bg-[#AD8C74] text-white py-2 px-6 rounded-lg hover:bg-[#966e5a] transition-colors duration-300">
          Cancel Order
        </button>
      </main>
    </div>
  );
};

export default CancellationPage;
