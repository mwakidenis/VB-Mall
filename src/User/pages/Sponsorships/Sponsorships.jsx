import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const Sponsorships = () => {
  // Sample data
  const causes = [
    { id: 1, title: 'Education for All', description: 'Providing education resources to underprivileged children.', impact: '5000+ students educated' },
    { id: 2, title: 'Clean Water Initiative', description: 'Ensuring clean and safe drinking water in rural areas.', impact: '2000+ communities served' },
    { id: 3, title: 'Health and Wellness', description: 'Offering medical aid and health programs.', impact: '3000+ people benefited' }
  ];

  const donationOptions = [
    { id: 1, amount: '$50', description: 'Basic Support' },
    { id: 2, amount: '$100', description: 'Intermediate Support' },
    { id: 3, amount: '$200', description: 'Premium Support' }
  ];

  return (
    <div className="min-h-screen bg-[#fff5edff] flex flex-col items-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-5xl"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6 mt-[8vh]">Support Our Causes</h1>
        <hr className="border-2 border-blue-500 w-3/4 md:w-1/2 mx-auto my-4 mb-6" />

        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 md:mb-6">Supported Causes</h2>
          <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {causes.map(cause => (
              <motion.div
                key={cause.id}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-blue-500">{cause.title}</h3>
                <p className="text-gray-700 mt-2">{cause.description}</p>
                <p className="text-green-600 mt-2 font-semibold">{cause.impact}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 md:mb-6">Donation Options</h2>
          <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {donationOptions.map(option => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-r from-green-400 to-green-600 p-4 md:p-6 rounded-xl text-center text-white shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <p className="text-xl md:text-2xl font-bold">{option.amount}</p>
                <p className="mt-2">{option.description}</p>
                <button className="mt-4 bg-white text-green-600 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300">Donate</button>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Sponsorships;
