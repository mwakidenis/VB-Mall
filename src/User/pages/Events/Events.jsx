import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const EventsPage = () => {
  // Sample data
  const events = [
    {
      id: 1,
      title: 'Summer Sale',
      date: 'August 15, 2024',
      description: 'Enjoy up to 50% off on selected items during our Summer Sale.',
      registrationLink: '#'
    },
    {
      id: 2,
      title: 'New Product Launch',
      date: 'September 10, 2024',
      description: 'Join us for the launch of our new eco-friendly product line.',
      registrationLink: '#'
    },
    {
      id: 3,
      title: 'Customer Appreciation Day',
      date: 'October 5, 2024',
      description: 'Celebrate with us and enjoy special discounts and giveaways.',
      registrationLink: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-purple-100 flex flex-col items-center p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 w-full max-w-4xl"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-purple-800 mb-6 sm:mb-8">Upcoming Events</h1>
        <hr className='border-2 border-purple-500 w-1/2 mx-auto mb-6 sm:mb-10' />

        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">Event Calendar</h2>
          <div className="space-y-4 sm:space-y-6">
            {events.map(event => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-white to-purple-50 p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-purple-600">{event.title}</h3>
                <p className="text-gray-700 mt-1 sm:mt-2"><strong>Date:</strong> {event.date}</p>
                <p className="text-gray-700 mt-1 sm:mt-2">{event.description}</p>
                <div className="mt-3 sm:mt-4">
                  <a href={event.registrationLink} className="bg-purple-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300">Register</a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">Sales Events</h2>
          <div className="bg-gradient-to-r from-white to-purple-50 p-4 sm:p-6 rounded-2xl shadow-lg">
            <p className="text-gray-700 mb-4">
              Stay tuned for our exclusive sales events. Make sure to register early to take advantage of the best deals!
            </p>
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your-email@example.com"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <button className="bg-teal-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-300">Subscribe</button>
            </form>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default EventsPage;
