// UserAuth.jsx
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  FaFacebook,
  FaEnvelope,
  FaLock,
  FaUser,
  FaPhone,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { auth, FacebookAuthProvider, signInWithPopup } from "./firebase";
import axios from "axios";
import Swal from "sweetalert2";
import { DotLoader } from "react-spinners";
import "./UserAuth.css";
import { SlLogin } from "react-icons/sl";
import { MdAssignmentInd } from "react-icons/md";

const AuthForm = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Signup state
  const [username, setUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  // Error states for inline validation
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const isPhoneValid = (number) => /^\d+$/.test(number) && number.length === 10;

  // Real-time validation functions
  const validateUsername = (value) => {
    if (value.length < 3) {
      setUsernameError("Username must be at least 3 characters");
      return false;
    }
    setUsernameError("");
    return true;
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePhone = (value) => {
    if (!isPhoneValid(value)) {
      setPhoneError("Phone number must be exactly 10 digits");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const validatePassword = (value) => {
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const validateConfirmPassword = (value) => {
    if (value !== signupPassword) {
      setConfirmPasswordError("Passwords do not match");
      return false;
    }
    setConfirmPasswordError("");
    return true;
  };

  // HIGHLIGHT: Ek unified function jo login ke baad ke saare kaam karega
  const handleLoginSuccess = (data) => {
    const { accessToken, username, role } = data;

    // User data ko localStorage mein save karein
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("username", username);
    localStorage.setItem("isLoggedIn", "true");
    if (role !== undefined) {
      localStorage.setItem("role", role);
    }

    // Admin ke liye alag redirect
    if (role === 1) {
      Swal.fire({
        title: "Admin login detected",
        text: `Welcome, ${username}! Redirecting...`,
        icon: "warning",
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        navigate("/admin-verification");
        window.location.reload();
      });
    } else {
      // Normal user ke liye dashboard par redirect
      Swal.fire({
        title: "Login Successful!",
        text: `Welcome, ${username}! Thanks for choosing VigyBag!`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        navigate("/dashboard"); // Sabko dashboard par bhejein
        window.location.reload(); // Page reload karein taaki Navbar update ho
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    // HIGHLIGHT: Ab API URL hardcoded nahi hai .env file se aayega
    // Use the Environment variable if it exists (Live), otherwise use localhost (Local)
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email: loginEmail,
        password: loginPassword,
      });

      handleLoginSuccess(response.data); // Login success ke baad kaam karein
    } catch (error) {
      await Swal.fire({
        title: "Login failed",
        text: error.response?.data?.message,
        icon: "error",
        confirmButtonText: "Ok",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    
    // Frontend validation before making API call
    if (signupPassword !== confirmPassword) {
      await Swal.fire({
        title: "Passwords do not match",
        text: "Please ensure both password fields match.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    // Validate phone number
    if (!isPhoneValid(phone)) {
      await Swal.fire({
        title: "Invalid Phone Number",
        text: "Phone number must be exactly 10 digits.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    // Validate password strength
    if (signupPassword.length < 8) {
      await Swal.fire({
        title: "Weak Password",
        text: "Password must be at least 8 characters long.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    // Validate username length
    if (username.length < 3) {
      await Swal.fire({
        title: "Invalid Username",
        text: "Username must be at least 3 characters long.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    setLoading(true);

    // Use the Environment variable if it exists (Live), otherwise use localhost (Local)
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
    
    try {
      console.log("🚀 Attempting signup with:", {
        username,
        email: signupEmail,
        phone,
        apiUrl: `${apiUrl}/auth/signup`
      });

      const response = await axios.post(`${apiUrl}/auth/signup`, {
        username,
        email: signupEmail,
        password: signupPassword,
        phone,
      });

      console.log("✅ Signup successful:", response.data);

      // Clear form fields after successful signup
      setUsername("");
      setSignupEmail("");
      setPhone("");
      setSignupPassword("");
      setConfirmPassword("");
      setPasswordStrength(0);

      // Show success message and redirect to login
      await Swal.fire({
        title: "Account Created Successfully!",
        text: "Welcome to VigyBag! Please log in with your new account.",
        icon: "success",
        confirmButtonText: "Login Now",
        timer: 3000,
      });

      // Switch to login form
      setIsFlipped(false);

    } catch (error) {
      console.error("❌ Signup error:", error);

      // Handle different types of errors
      let errorTitle = "Signup Failed";
      let errorMessage = "Something went wrong. Please try again.";

      if (error.response) {
        // Server responded with error status
        const status = error.response.status;
        const data = error.response.data;

        console.log("📡 Server response:", { status, data });

        switch (status) {
          case 400:
            errorTitle = "Invalid Input";
            errorMessage = data.message || "Please check your input and try again.";
            break;
          case 409:
            errorTitle = "Account Already Exists";
            errorMessage = data.message || "An account with this email or username already exists.";
            break;
          case 500:
            errorTitle = "Server Error";
            errorMessage = "Our server encountered an error. Please try again later.";
            break;
          default:
            errorMessage = data.message || "An unexpected error occurred.";
        }
      } else if (error.request) {
        // Request was made but no response received
        console.error("🔌 No response from server:", error.request);
        errorTitle = "Connection Error";
        errorMessage = "Unable to reach the server. Please check your internet connection and try again.";
      } else {
        // Error in setting up the request
        console.error("⚙️ Request setup error:", error.message);
        errorMessage = error.message;
      }

      await Swal.fire({
        title: errorTitle,
        text: errorMessage,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    } finally {
      setLoading(false);
    }
  };

  // HIGHLIGHT: Facebook login code is now restored and working alongside Google login.
  const handleSocialLogin = (provider) => {
    if (provider === "facebook") {
      const facebookProvider = new FacebookAuthProvider();
      signInWithPopup(auth, facebookProvider)
        .then((result) => {
          // HIGHLIGHT: Facebook se mile data ko backend jaisa format dein aur success function call karein
          const loginData = {
            // Note: Firebase se direct accessToken milta hai, use use karein ya fir is user ko apne backend par bhejkar naya token lein. Abhi ke liye Firebase wala use kar rahe hain.
            accessToken: result.user.accessToken,
            username: result.user.displayName,
            role: 0, // Facebook se role nahi milega
          };
          handleLoginSuccess(loginData);
        })
        .catch((error) => {
          Swal.fire({
            title: "Login failed",
            text: error.message,
            icon: "error",
          });
        });
    } else if (provider === "google") {
      const apiUrl =
        "http://localhost:3000";
      // Google ke liye backend par redirect karein
      window.location.href = `${apiUrl}/auth/google`;
    }
  };

  const checkPasswordStrength = (password) => {
    const lengthCriteria = password.length >= 8;
    const numberCriteria = /\d/.test(password);
    const letterCriteria = /[a-zA-Z]/.test(password);
    return (
      (lengthCriteria ? 1 : 0) +
      (numberCriteria ? 1 : 0) +
      (letterCriteria ? 1 : 0)
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-[#f9efe4] to-sky-50 flex items-center justify-center px-0 sm:px-4">
      <div
        className="bg-[#e7f0e7]/80 backdrop-blur-lg rounded-2xl p-0 md:p-10 shadow-2xl 
                      border border-white/60 flex flex-col md:flex-row w-full items-center justify-center max-w-sm sm:max-w-7xl mx-auto my-auto 
                      gap-8 md:gap-16 lg:gap-20 min-h-[77vh] sm:min-h-[70vh]"
      >
        {/* Left side */}
        <div className="md:flex-1 hidden md:block mt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d3e40] mb-4">
            Welcome to VigyBag!!
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#4a7c59] mb-8">
            Make Your Shopping <br /> Eco-Friendly
          </h2>
          <div className="space-x-4">
            <Link
              to="/admin-verification"
              className="bg-[#2d3e40] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition duration-300"
            >
              Login as Admin
            </Link>
            <Link
              to="/vigy-login"
              className="bg-[#f9efe4] text-[#2d3e40] px-6 py-2 rounded-full border border-[#2d3e40] hover:bg-[#2d3e40] hover:text-white transition duration-300"
            >
              Login as Vigy
            </Link>
          </div>
        </div>

        {/* Right side - Login/Signup Form */}
        <div className="flex-1 w-full max-w-sm sm:max-w-md mx-auto min-h-full mobile-form-container">
          <div className={`flip-container ${isFlipped ? "flipped" : ""}`}>
            <div className="flipper">
              {/* Login Form */}
              <div className="front">
                <div className="bg-[#2d3e40] rounded-xl p-6 shadow-xl text-white my-auto border border-white/10">
                  <h2 className="text-2xl font-semibold text-center mb-6 text-[#4caf50] flex items-center justify-center">
                    <SlLogin className="mr-2" /> Login as a User
                  </h2>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-lg bg-white/90 text-gray-900 placeholder:text-gray-500 pl-10 pr-3 py-2.5 border border-gray-200 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="relative">
                      <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type={showLoginPassword ? "text" : "password"}
                        placeholder="Password"
                        className="w-full rounded-lg bg-white/90 text-gray-900 placeholder:text-gray-500 pl-10 pr-10 py-2.5 border border-gray-200 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showLoginPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="rememberMe"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="mr-2 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                        />
                        <label htmlFor="rememberMe" className="text-sm">
                          Remember me
                        </label>
                      </div>
                      <a
                        href="#"
                        className="text-sm text-[#4caf50] hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-2.5 rounded-lg hover:from-blue-700 hover:to-emerald-700 transition duration-300 shadow-lg"
                    >
                      {loading ? (
                        <DotLoader color="#ffffff" size={24} />
                      ) : (
                        "Log in"
                      )}
                    </button>
                  </form>

                  <div className="mt-6 flex flex-col md:flex-row gap-3">
                    <button
                      onClick={() => handleSocialLogin("google")}
                      className="flex-1 flex items-center justify-center bg-white text-black px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition duration-300"
                    >
                      <FcGoogle className="mr-2" />{" "}
                      <span className="social-btn-text">Login with Google</span>
                    </button>
                    <button
                      onClick={() => handleSocialLogin("facebook")}
                      className="flex-1 flex items-center justify-center bg-[#1877f2] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#166fe5] transition duration-300"
                    >
                      <FaFacebook className="mr-2" />{" "}
                      <span className="social-btn-text">
                        Login with Facebook
                      </span>
                    </button>
                  </div>

                  <p className="text-xs text-center mt-4">
                    By continuing, you agree to our{" "}
                    <Link
                      to="/terms-and-condition"
                      className="text-[#4caf50] hover:underline"
                    >
                      Terms of Use
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy-policy"
                      className="text-[#4caf50] hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                  <p className="text-sm text-center mt-4">
                    Don’t have an account?{" "}
                    <button
                      onClick={() => setIsFlipped(true)}
                      className="text-[#4caf50] hover:underline"
                    >
                      Sign up
                    </button>
                  </p>
                  <p className="sm:hidden text-sm text-center  pb-0 mt-2">
                    <Link
                      to="/admin-verification"
                      className="bg-[#2d3e40] text-green-500 px-6 rounded-full hover:bg-opacity-90 transition duration-300"
                    >
                      Login as Admin
                    </Link>
                  </p>
                </div>
              </div>

              {/* Signup Form */}
              <div className="back">
                <div className="bg-[#2d3e40] rounded-xl p-5 shadow-xl text-white border border-white/10">
                  <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center text-[#4caf50]">
                    <MdAssignmentInd className="mr-2" /> Sign Up as a User
                  </h2>
                  <form onSubmit={handleSignup} className="space-y-3">
                    {/* Username Field */}
                    <div>
                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Username"
                          className={`w-full rounded-lg bg-white/90 text-gray-900 placeholder:text-gray-500 pl-10 pr-3 py-2.5 border ${
                            usernameError ? 'border-red-500' : 'border-gray-200'
                          } outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500`}
                          value={username}
                          onChange={(e) => {
                            setUsername(e.target.value);
                            if (e.target.value.length >= 3) validateUsername(e.target.value);
                          }}
                          onBlur={(e) => validateUsername(e.target.value)}
                          required
                        />
                      </div>
                      {usernameError && (
                        <p className="text-red-400 text-xs mt-1 ml-1">{usernameError}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          placeholder="Email"
                          className={`w-full rounded-lg bg-white/90 text-gray-900 placeholder:text-gray-500 pl-10 pr-3 py-2.5 border ${
                            emailError ? 'border-red-500' : 'border-gray-200'
                          } outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500`}
                          value={signupEmail}
                          onChange={(e) => {
                            setSignupEmail(e.target.value);
                            if (e.target.value.includes('@')) validateEmail(e.target.value);
                          }}
                          onBlur={(e) => validateEmail(e.target.value)}
                          required
                        />
                      </div>
                      {emailError && (
                        <p className="text-red-400 text-xs mt-1 ml-1">{emailError}</p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <div className="relative">
                        <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className={`w-full rounded-lg bg-white/90 text-gray-900 placeholder:text-gray-500 pl-10 pr-3 py-2.5 border ${
                            phoneError ? 'border-red-500' : 'border-gray-200'
                          } outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 mobile-input`}
                          value={phone}
                          onChange={(e) => {
                            if (/^\d*$/.test(e.target.value)) {
                              setPhone(e.target.value);
                              if (e.target.value.length === 10) validatePhone(e.target.value);
                            }
                          }}
                          onBlur={(e) => validatePhone(e.target.value)}
                          maxLength={10}
                          required
                        />
                      </div>
                      {phoneError && (
                        <p className="text-red-400 text-xs mt-1 ml-1">{phoneError}</p>
                      )}
                    </div>

                    {/* Password Field */}
                    <div>
                      <div className="relative">
                        <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type={showSignupPassword ? "text" : "password"}
                          placeholder="Password"
                          className={`w-full rounded-lg bg-white/90 text-gray-900 placeholder:text-gray-500 pl-10 pr-10 py-2.5 border ${
                            passwordError ? 'border-red-500' : 'border-gray-200'
                          } outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500`}
                          value={signupPassword}
                          onChange={(e) => {
                            setSignupPassword(e.target.value);
                            setPasswordStrength(
                              checkPasswordStrength(e.target.value)
                            );
                            if (e.target.value.length >= 8) validatePassword(e.target.value);
                            if (confirmPassword) validateConfirmPassword(confirmPassword);
                          }}
                          onBlur={(e) => validatePassword(e.target.value)}
                          required
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowSignupPassword(!showSignupPassword)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showSignupPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                      {passwordError && (
                        <p className="text-red-400 text-xs mt-1 ml-1">{passwordError}</p>
                      )}
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div
                          className={`password-strength-bar h-full rounded-full ${
                            passwordStrength === 3
                              ? "bg-green-500"
                              : passwordStrength === 2
                              ? "bg-yellow-500"
                              : passwordStrength === 1
                              ? "bg-red-500"
                              : "bg-gray-400"
                          }`}
                          style={{ width: `${(passwordStrength / 3) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-xs mt-1">
                        Password Strength: {passwordStrength === 3
                          ? "Strong"
                          : passwordStrength === 2
                          ? "Medium"
                          : passwordStrength === 1
                          ? "Weak"
                          : "Very Weak"}
                      </p>
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                      <div className="relative">
                        <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm Password"
                          className={`w-full rounded-lg bg-white/90 text-gray-900 placeholder:text-gray-500 pl-10 pr-10 py-2.5 border ${
                            confirmPasswordError ? 'border-red-500' : 'border-gray-200'
                          } outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500`}
                          value={confirmPassword}
                          onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            if (e.target.value.length >= signupPassword.length) {
                              validateConfirmPassword(e.target.value);
                            }
                          }}
                          onBlur={(e) => validateConfirmPassword(e.target.value)}
                          required
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                      {confirmPasswordError && (
                        <p className="text-red-400 text-xs mt-1 ml-1">{confirmPasswordError}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={loading || usernameError || emailError || phoneError || passwordError || confirmPasswordError}
                      className={`w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-2.5 rounded-lg transition duration-300 shadow-lg ${
                        loading || usernameError || emailError || phoneError || passwordError || confirmPasswordError
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:from-blue-700 hover:to-emerald-700'
                      }`}
                    >
                      {loading ? (
                        <div className="flex items-center justify-center">
                          <DotLoader color="#ffffff" size={24} />
                          <span className="ml-2">Creating Account...</span>
                        </div>
                      ) : (
                        "Sign Up"
                      )}
                    </button>
                  </form>
                  <p className="text-sm text-center mt-4">
                    Already have an account?{" "}
                    <button
                      onClick={() => setIsFlipped(false)}
                      className="text-[#4caf50] hover:underline"
                    >
                      Log in
                    </button>
                  </p>
                  <p className="sm:hidden text-sm text-center  pb-0 mt-2">
                    <Link
                      to="/admin-verification"
                      className="bg-[#2d3e40] text-green-500 px-6 rounded-full hover:bg-opacity-90 transition duration-300"
                    >
                      Login as Admin
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
