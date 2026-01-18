import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://www.vigybag.com//api/admin", {
        email,
        password,
      });
      setMessage(response.data.message);
      if (response.status === 200) {
        navigate("/loggedin");
      }
    } catch (error) {
      console.error("Error details:", error);
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-[#d4c3b0] to-[#b8d0bd]">
      <div className="mb-8">
        <img src={Logo} alt="VigiBag Logo" className="w-32" />
      </div>
      <div className="bg-[#3E4A4B] p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">
          LOGIN
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="w-full p-2 rounded bg-white text-gray-800"
              type="email"
              placeholder="UserName"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full p-2 rounded bg-white text-gray-800"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-white text-sm">
              Remember me
            </label>
          </div>
          <button
            className="w-full bg-[#4CAF50] text-white p-2 rounded hover:bg-[#45a049]"
            type="submit"
          >
            Log in
          </button>
        </form>
        {message && <p className="mt-4 text-red-500">{message}</p>}
        <p className="text-white text-xs mt-4 text-center">
          By continuing, you agree to follow our Terms of Use and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
