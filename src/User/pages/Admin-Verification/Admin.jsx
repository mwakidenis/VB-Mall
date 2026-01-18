import React, {useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {ClipLoader} from "react-spinners";
import {useNavigate} from "react-router-dom";

const AdminVerificationPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [otpSent, setOtpSent] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSendOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(
                "https://vigybag-backend.onrender.com/api/auth/send-otp",
                {email}
            );
            setOtpSent(true);
            await Swal.fire({
                title: "OTP Sent!",
                text: "Please check your email for the OTP.",
                icon: "success",
                confirmButtonText: "Ok",
                customClass: {
                    popup: "custom-popup",
                    title: "custom-title",
                    content: "custom-content",
                    confirmButton: "custom-confirm-button",
                },
            });
        } catch (error) {
            await Swal.fire({
                title: "Error",
                text: "Failed to send OTP. Please try again.",
                icon: "error",
                confirmButtonText: "Ok",
                customClass: {
                    popup: "custom-popup",
                    title: "custom-title",
                    content: "custom-content",
                    confirmButton: "custom-confirm-button",
                },
            });
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(
                "https://vigybag-backend.onrender.com/api/auth/verify-otp",
                {email, otp}
            );
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("isAdmin", "true");
            await Swal.fire({
                title: "OTP Verified!",
                text: "The OTP is correct.",
                icon: "success",
                confirmButtonText: "Ok",
                customClass: {
                    popup: "custom-popup",
                    title: "custom-title",
                    content: "custom-content",
                    confirmButton: "custom-confirm-button",
                },
            });
            navigate("/admin");
        } catch (error) {
            await Swal.fire({
                title: "Error",
                text: "Invalid OTP. Please try again.",
                icon: "error",
                confirmButtonText: "Ok",
                customClass: {
                    popup: "custom-popup",
                    title: "custom-title",
                    content: "custom-content",
                    confirmButton: "custom-confirm-button",
                },
            });
        } finally {
            setLoading(false);
        }
    };

    const handleResendOtp = async () => {
        setLoading(true);
        try {
            const response = await axios.post(
                "https://vigybag-backend.onrender.com/api/auth/send-otp",
                {email}
            );
            await Swal.fire({
                title: "OTP Resent!",
                text: "Please check your email for the new OTP.",
                icon: "success",
                confirmButtonText: "Ok",
                customClass: {
                    popup: "custom-popup",
                    title: "custom-title",
                    content: "custom-content",
                    confirmButton: "custom-confirm-button",
                },
            });
        } catch (error) {
            await Swal.fire({
                title: "Error",
                text: "Failed to resend OTP. Please try again.",
                icon: "error",
                confirmButtonText: "Ok",
                customClass: {
                    popup: "custom-popup",
                    title: "custom-title",
                    content: "custom-content",
                    confirmButton: "custom-confirm-button",
                },
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="min-h-[94vh] relative flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-blue-50">
            <div
                className="pointer-events-none absolute -top-10 -left-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl"/>
            <div
                className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"/>

            <div
                className="relative w-full max-w-md rounded-2xl border border-white/60 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
                <div className="mb-6 text-center">
                    <div
                        className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 shadow-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75v2.036c0 .54-.217 1.06-.603 1.44l-1.32 1.301a.75.75 0 0 0 .012 1.087l1.321 1.197c.39.354.59.86.59 1.38v1.309c0 1.86 1.508 3.368 3.368 3.368h7.764a3.368 3.368 0 0 0 3.368-3.368v-1.309c0-.52.2-1.026.59-1.38l1.321-1.197a.75.75 0 0 0 .012-1.087l-1.32-1.301a2.043 2.043 0 0 1-.603-1.44V9c0-3.728-3.022-6.75-6.75-6.75Zm-1.03 11.28 3.75-3.75a.75.75 0 1 1 1.06 1.06l-4.28 4.28a.75.75 0 0 1-1.06 0l-1.72-1.72a.75.75 0 0 1 1.06-1.06l1.19 1.19Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-emerald-700">
                        Admin Verification
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">
                        Secure access to your admin panel.{" "}
                        {otpSent
                            ? "Enter the OTP we emailed to you."
                            : "We will send a 6-digit code to your registered email."}
                    </p>
                </div>

                <div className="mb-6 flex items-center justify-center gap-3 text-xs font-medium">
          <span className={`${otpSent ? "text-gray-400" : "text-emerald-700"}`}>
            1. Email
          </span>
                    <span className="h-px w-10 bg-gray-300"/>
                    <span className={`${otpSent ? "text-emerald-700" : "text-gray-400"}`}>
            2. OTP
          </span>
                </div>

                <form
                    onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}
                    className="space-y-6"
                >
                    <div className="relative">
                        <label
                            htmlFor="email"
                            className="mb-1 block text-sm font-semibold text-gray-800"
                        >
                            Registered Email Address
                        </label>
                        <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                  <path
                      d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5A2.25 2.25 0 0 1 22.5 6.75v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75A2.25 2.25 0 0 1 1.5 17.25V6.75Zm1.8-.45a.75.75 0 0 0-.3.6v.1l8.4 5.25a.75.75 0 0 0 .8 0l8.4-5.25v-.1a.75.75 0 0 0-.3-.6.75.75 0 0 0-.45-.15H3.75a.75.75 0 0 0-.45.15Z"/>
                </svg>
              </span>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                                disabled={otpSent}
                                placeholder="you@company.com"
                                className="mt-1 block w-full rounded-lg border border-gray-200 bg-white/70 py-2.5 pl-10 pr-3 text-sm shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 disabled:cursor-not-allowed disabled:opacity-75"
                            />
                        </div>
                    </div>

                    {otpSent && (
                        <div className="relative">
                            <label
                                htmlFor="otp"
                                className="mb-1 block text-sm font-semibold text-gray-800"
                            >
                                OTP
                            </label>
                            <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                  >
                    <path
                        fillRule="evenodd"
                        d="M12 2.25a6 6 0 0 0-6 6v2.25a3 3 0 0 1-.879 2.121l-.5.5a1.5 1.5 0 0 0 0 2.121l.5.5A3 3 0 0 1 6 17.25h12a3 3 0 0 1 2.121-.879l.5-.5a1.5 1.5 0 0 0 0-2.121l-.5-.5A3 3 0 0 1 18 10.5V8.25a6 6 0 0 0-6-6Zm0 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                        clipRule="evenodd"
                    />
                  </svg>
                </span>
                                <input
                                    type="text"
                                    id="otp"
                                    name="otp"
                                    value={otp}
                                    onChange={handleOtpChange}
                                    required
                                    placeholder="Enter 6-digit code"
                                    className="mt-1 block w-full rounded-lg border border-gray-200 bg-white/70 py-2.5 pl-10 pr-3 text-sm tracking-widest shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                            <p className="mt-1 text-xs text-gray-500">
                                Tip: Check your inbox and spam folder.
                            </p>
                        </div>
                    )}

                    <button
                        type="submit"
                        className={`w-full transform rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 py-2.5 px-4 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:from-blue-700 hover:to-emerald-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                            loading ? "opacity-60 cursor-not-allowed" : ""
                        }`}
                        disabled={loading}
                    >
                        {loading ? (
                            <ClipLoader color="#ffffff" size={24}/>
                        ) : otpSent ? (
                            "Verify OTP"
                        ) : (
                            "Send OTP"
                        )}
                    </button>

                    {otpSent && (
                        <button
                            type="button"
                            onClick={handleResendOtp}
                            className={`w-full rounded-lg border border-gray-200 bg-white py-2.5 px-4 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 ${
                                loading ? "opacity-60 cursor-not-allowed" : ""
                            }`}
                            disabled={loading}
                        >
                            {loading ? (
                                <ClipLoader color="#111827" size={24}/>
                            ) : (
                                "Resend OTP"
                            )}
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default AdminVerificationPage;
