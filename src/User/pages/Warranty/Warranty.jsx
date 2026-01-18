import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const WarrantyInformationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-200 flex flex-col items-center p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white rounded-3xl shadow-xl p-8 md:p-12 w-full max-w-4xl"
      >
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-6">Warranty Information</h1>
        <hr className='border-2 border-blue-500 w-1/2 mx-auto mb-8' />

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Warranty Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            Our products come with a comprehensive warranty to ensure your peace of mind. This warranty covers manufacturing defects and certain operational issues under normal use conditions. Please review the specific terms of the warranty provided with your product.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Coverage Details</h2>
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
            <ul className="list-disc list-inside text-gray-700 space-y-4">
              <li><strong>Duration:</strong> Our standard warranty lasts for 12 months from the date of purchase.</li>
              <li><strong>What’s Covered:</strong> Defects in material or workmanship under normal use.</li>
              <li><strong>What’s Not Covered:</strong> Damage caused by misuse, unauthorized repairs, or accidents.</li>
              <li><strong>Extended Coverage:</strong> Optional extended warranty plans are available for purchase.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Claims Process</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">1</div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600">Contact Us</h3>
                <p className="text-gray-700">Reach out to our customer service team via email or phone with your warranty claim details.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">2</div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600">Provide Proof of Purchase</h3>
                <p className="text-gray-700">Submit a copy of your receipt or order confirmation along with the warranty claim.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">3</div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600">Receive Instructions</h3>
                <p className="text-gray-700">Follow the instructions provided by our team to return the product or receive a replacement.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">4</div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600">Resolution</h3>
                <p className="text-gray-700">Receive a resolution, whether it be a repair, replacement, or refund as per the warranty terms.</p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default WarrantyInformationPage;
