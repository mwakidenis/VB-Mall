import React, { useState } from "react";
import axios from "axios";
import forgetill from "../../assets/images/forget-ill.svg";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://vigybag-backend.onrender.com/api/forgot-password",
        { email }
      );
      setMessage("Password reset email sent.");
      setError(false);
    } catch (error) {
      setMessage("Error sending password reset email.");
      setError(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col md:flex-row w-full max-w-4xl">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-6">
          <img
            src={forgetill}
            alt="Illustration"
            className="w-72 h-72 object-cover mb-4"
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full md:w-1/2 p-6">
          <h2 className="text-4xl font-bold mb-6 text-gray-700">Forgot Password?</h2>
          <p className="mb-4 text-gray-600">Enter the email address associated with your account.</p>
          <form onSubmit={handleSubmit} className="w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="flex justify-between items-center w-full">
              <a href="#" className="text-indigo-500 hover:underline">Try another way</a>
              <button
                type="submit"
                className="bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-indigo-600 transition duration-300"
              >
                Next
              </button>
            </div>
            {message && (
              <p
                className={`mt-4 ${error ? 'text-red-500' : 'text-green-500'}`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
