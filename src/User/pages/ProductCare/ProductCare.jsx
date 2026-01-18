import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const ProductCareInstructionsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-200 flex flex-col items-center p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 w-full max-w-4xl"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-teal-800 mb-6 sm:mb-8">Product Care Instructions</h1>
        <hr className='border-2 border-teal-500 w-1/2 mx-auto mb-6 sm:mb-10' />

        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">Care Tips</h2>
          <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6">
            Proper care is essential to ensure the longevity and optimal performance of your product. Follow these care tips to keep your item in excellent condition:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 sm:space-y-4">
            <li>Store in a cool, dry place away from direct sunlight.</li>
            <li>Avoid exposing the product to extreme temperatures or humidity.</li>
            <li>Regularly check for signs of wear and address any issues promptly.</li>
            <li>Follow any specific instructions provided by the manufacturer.</li>
          </ul>
        </section>

        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">Maintenance Guides</h2>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl shadow-lg">
            <p className="text-gray-700 mb-4">
              To keep your product performing at its best, regular maintenance is crucial. Here are some general maintenance guidelines:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 sm:space-y-4">
              <li>Inspect the product regularly for any signs of damage.</li>
              <li>Lubricate moving parts if applicable, using recommended products.</li>
              <li>Replace any worn or damaged components promptly.</li>
              <li>Consult the product manual for specific maintenance recommendations.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">Cleaning Instructions</h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold">1</div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-teal-600">Read the Label</h3>
                <p className="text-gray-700">Always check the cleaning instructions provided by the manufacturer to ensure you're using the right methods and products.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold">2</div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-teal-600">Use Gentle Cleaners</h3>
                <p className="text-gray-700">Opt for mild, non-abrasive cleaners to avoid damaging the surface of your product.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold">3</div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-teal-600">Avoid Excessive Moisture</h3>
                <p className="text-gray-700">Do not soak the product or use excessive amounts of water, as this may cause damage.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold">4</div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-teal-600">Dry Thoroughly</h3>
                <p className="text-gray-700">After cleaning, ensure the product is thoroughly dried before storing or using it again.</p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default ProductCareInstructionsPage;
