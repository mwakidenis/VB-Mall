import React, { useState,  useRef } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Certificate from "../../../assets/images/Certificate.png";
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';
// import { Route, Routes, Navigate } from "react-router-dom";

function Certification() {
  const [githubUsername, setGithubUsername] = useState("");
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [certificate, setCertificate] = useState(null);
  const [downloadFormat, setDownloadFormat] = useState("png");
  const [isVerified, setIsVerified] = useState(false);
  const certificateRef = useRef(null);

  const checkContribution = async (contributorUsername) => {
    const username = "codervivek5";
    const repo = "VigyBag";
    let page = 1;
    let hasMorePages = true;

    while (hasMorePages) {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${username}/${repo}/contributors?page=${page}&per_page=100`
        );

        if (response.data.length < 100) {
          hasMorePages = false;
        }

        const contributor = response.data.find(
          (c) => c.login.toLowerCase() === contributorUsername.toLowerCase()
        );

        if (contributor) {
          setUserId(contributor.id.toString());
          return true;
        }

        page++;
      } catch (error) {
        console.error("Error checking contribution:", error);
        throw new Error("Failed to check contribution");
      }
    }
    return false;
  };

  const fetchGitHubName = async (username) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      return response.data.name || username;
    } catch (error) {
      console.error("Error fetching GitHub name:", error);
      return username;
    }
  };

  const handleVerify = async () => {
    setLoading(true);
    setError("");
    setIsVerified(false);

    try {
      const hasContributed = await checkContribution(githubUsername);

      if (hasContributed) {
        const fetchedName = await fetchGitHubName(githubUsername);
        setName(fetchedName);
        setIsVerified(true);
      } else {
        setError(
          `The GitHub user ${githubUsername} has not contributed to the VigyBag repository.`
        );
      }
    } catch (error) {
      setError(
        "An error occurred while verifying the contribution. Please try again."
      );
      console.error("Error:", error);
    }

    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isVerified) {
      setCertificate({ name, githubUsername, userId });

      // Trigger confetti
      const end = Date.now() + (15 * 1000);
      const colors = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'];

      (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());

      // Show enhanced SweetAlert
      Swal.fire({
        title: '🎉 Certificate Generated!',
        html: `
          <div class="text-center">
            <div class="mb-4">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
            <p class="text-lg font-semibold text-gray-800">Congratulations <span class="text-emerald-600">${name}</span>!</p>
            <p class="text-gray-600 mt-2">Your contribution certificate has been successfully generated.</p>
          </div>
        `,
        icon: 'success',
        confirmButtonText: 'Awesome! 🚀',
        confirmButtonColor: '#10b981',
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
        customClass: {
          popup: 'rounded-2xl shadow-2xl',
          title: 'text-2xl font-bold text-gray-800',
          confirmButton: 'rounded-full px-6 py-3 font-semibold'
        }
      });
    }
  };

  const downloadAsPNG = () => {
    html2canvas(certificateRef.current, {
      scale: 4,
      useCORS: true,
      logging: true,
      letterRendering: 1,
    }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "certificate.png";
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
    });
  };

  const downloadAsPDF = () => {
    html2canvas(certificateRef.current, {
      scale: 10,
      useCORS: true,
      logging: true,
      letterRendering: 1,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        canvas.width,
        canvas.height,
        "",
        "FAST"
      );
      pdf.save("certificate.pdf");
    });
  };

  const handleDownload = () => {
    if (downloadFormat === "png") {
      downloadAsPNG();
    } else {
      downloadAsPDF();
    }
  };

  // Function to verify certificate by ID against GitHub contributors
  const verifyCertificateById = async (certificateId) => {
    try {
      setLoading(true);
      setError("");
      
      // In a real app, you would verify against your backend/database
      // For now, we'll just check if it's a valid GitHub ID format
      if (!/^\d+$/.test(certificateId)) {
        throw new Error("Invalid certificate ID format");
      }
      
      // Fetch contributors from GitHub API
      const response = await axios.get(
        'https://api.github.com/repos/codervivek5/VigyBag/contributors'
      );
      
      // Find contributor with matching ID
      const contributor = response.data.find(
        (c) => c.id.toString() === certificateId
      );
      
      if (contributor) {
        // Show success message with contributor info
        // Fetch user's contributions to VigyBag
        const contributionsResponse = await axios.get(
          `https://api.github.com/repos/codervivek5/VigyBag/commits?author=${contributor.login}`
        );
        
        const contributions = contributionsResponse.data || [];
        const contributionCount = contributions.length;
        const lastContribution = contributions[0] ? new Date(contributions[0].commit.author.date).toLocaleDateString() : 'N/A';
        
        // Prepare commits list HTML
        const commitsList = contributions.slice(0, 5).map(commit => `
          <div class="text-left py-2 border-b border-gray-100 last:border-0">
            <p class="text-sm font-medium text-gray-800 truncate">${commit.commit.message.split('\n')[0]}</p>
            <p class="text-xs text-gray-500">${new Date(commit.commit.author.date).toLocaleString()}</p>
          </div>
        `).join('');
        
        Swal.fire({
          title: '✅ Certificate Verified!',
          html: `
            <div class="text-center">
              <img 
                src="${contributor.avatar_url}" 
                alt="${contributor.login}" 
                class="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p class="text-lg font-semibold text-gray-800">${contributor.login}</p>
              <p class="text-sm text-gray-600">Total Contributions: ${contributor.contributions}</p>
              
              <div class="mt-4 p-4 bg-gray-50 rounded-lg text-left">
                <h4 class="font-medium text-gray-800 mb-2">VigyBag Contributions:</h4>
                <p class="text-sm text-gray-700">
                  <span class="font-medium">${contributionCount}</span> commits
                  ${lastContribution !== 'N/A' ? `<span class="text-gray-500 text-xs block mt-1">Last contribution: ${lastContribution}</span>` : ''}
                </p>
                
                ${contributionCount > 0 ? `
                  <div class="mt-3 max-h-40 overflow-y-auto border rounded p-2 bg-white">
                    <p class="text-xs font-medium text-gray-500 mb-2">Recent Commits:</p>
                    ${commitsList}
                    ${contributionCount > 5 ? `<p class="text-xs text-gray-500 mt-2">+ ${contributionCount - 5} more commits</p>` : ''}
                  </div>
                ` : '<p class="text-sm text-gray-500 mt-2">No commits found in the main repository.</p>'}
              </div>
              
              <div class="mt-4 p-3 bg-green-50 rounded-lg">
                <p class="text-sm text-green-700">This certificate is valid and verified.</p>
                <p class="text-xs text-green-600 mt-1">User ID: ${contributor.id}</p>
              </div>
            </div>
          `,
          confirmButtonText: 'View GitHub Profile',
          confirmButtonColor: '#10b981',
          showCancelButton: true,
          cancelButtonText: 'Close',
          cancelButtonColor: '#6b7280',
          showDenyButton: contributionCount > 0,
          denyButtonText: 'View All Commits',
          denyButtonColor: '#3b82f6',
          width: '500px'
        }).then((result) => {
          if (result.isConfirmed) {
            window.open(contributor.html_url, '_blank');
          } else if (result.isDenied) {
            window.open(`https://github.com/codervivek5/VigyBag/commits?author=${contributor.login}`, '_blank');
          }
        });
      } else {
        throw new Error("No contributor found with this ID in the VigyBag repository.");
      }
      
    } catch (error) {
      setError(error.response?.status === 403 
        ? 'GitHub API rate limit exceeded. Please try again later.'
        : error.message || 'Failed to verify certificate');
      
      if (error.response?.status === 403) {
        console.error('GitHub API rate limit exceeded:', error);
      } else {
        console.error('Verification error:', error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* ENHANCED: Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* ENHANCED: Header section */}
        <div className="text-center mb-8">
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-emerald-700 to-teal-700 bg-clip-text text-transparent mb-2">
            Contribution Certificate
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Verify your GitHub contributions and generate your personalized certificate
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* ENHANCED: Form Section */}
          <div className="order-2 lg:order-1">
            <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* ENHANCED: GitHub Username Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    GitHub Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter your GitHub username"
                      value={githubUsername}
                      onChange={(e) => setGithubUsername(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                {/* ENHANCED: Verify Button */}
                <button
                  type="button"
                  onClick={handleVerify}
                  disabled={loading || !githubUsername.trim()}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-2xl transform hover:scale-[1.02] disabled:hover:scale-100 transition-all duration-300 shadow-lg hover:shadow-xl disabled:shadow-md flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Verifying...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Verify Contribution</span>
                    </>
                  )}
                </button>

                {/* ENHANCED: Name Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full pl-12 pr-4 py-3 border rounded-2xl transition-all duration-300 ${
                        isVerified 
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-800' 
                          : 'bg-gray-50/80 border-gray-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500'
                      }`}
                      required
                      readOnly={isVerified}
                    />
                    {isVerified && (
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                        <svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* ENHANCED: Generate Certificate Button */}
                <button
                  type="submit"
                  disabled={!isVerified || loading}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-2xl transform hover:scale-[1.02] disabled:hover:scale-100 transition-all duration-300 shadow-lg hover:shadow-xl disabled:shadow-md flex items-center justify-center space-x-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span>Generate Certificate</span>
                </button>

                {/* ENHANCED: Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start space-x-3 animate-fadeIn">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-red-700 text-sm font-medium">{error}</p>
                  </div>
                )}

                {/* ENHANCED: Success Message */}
                {isVerified && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center space-x-3 animate-fadeIn">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-emerald-700 text-sm font-medium">
                      ✅ Contribution verified! Ready to generate certificate.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* ENHANCED: Certificate Preview Section */}
          <div className="order-1 lg:order-2">
            {certificate ? (
              <div className="space-y-6">
                {/* Certificate Display */}
                <div className="backdrop-blur-xl bg-white/90 rounded-3xl shadow-2xl border border-white/30 p-6 transform hover:scale-[1.02] transition-all duration-500">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span>Your Certificate</span>
                  </h3>
                  
                  <div className="relative rounded-2xl overflow-hidden shadow-xl" ref={certificateRef}>
                    <img src={Certificate} alt="Certificate" className="w-full h-auto" />
                    <div
                      className="absolute text-center w-full font-bold text-black"
                      style={{
                        top: "48.5%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "clamp(8px, 2.5vw, 12px)",
                        textShadow: "1px 1px 2px white",
                        fontFamily: "Copperplate, Papyrus, fantasy",
                      }}>
                      {certificate.name}
                    </div>
                    <div
                      className="absolute text-center"
                      style={{
                        bottom: "3%",
                        left: "80%",
                        transform: "translateX(-50%)",
                        fontSize: "clamp(4px, 1.2vw, 6px)",
                        color: "black",
                        fontFamily: "Arial, sans-serif",
                      }}>
                      ID: {certificate.userId}
                    </div>
                  </div>
                </div>

                {/* Download Options */}
                <div className="backdrop-blur-xl bg-white/90 rounded-3xl shadow-2xl border border-white/30 p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Download Options</span>
                  </h4>
                  
                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <div className="flex-1 w-full sm:w-auto">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
                      <select
                        value={downloadFormat}
                        onChange={(e) => setDownloadFormat(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                      >
                        <option value="png">PNG Image</option>
                        <option value="pdf">PDF Document</option>
                      </select>
                    </div>
                    
                    <div className="w-full sm:w-auto sm:mt-6">
                      <button
                        onClick={handleDownload}
                        className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Download {downloadFormat.toUpperCase()}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* ENHANCED: Preview Placeholder */
              <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-xl border border-white/20 p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Certificate Preview</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your certificate will appear here once you verify your GitHub contribution and generate it.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full w-1/3 animate-pulse"></div>
                  </div>
                  <p className="text-sm text-gray-500">Ready to verify your contributions...</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ENHANCED: Info Cards Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-6 border border-white/30 text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Verify Contributions</h3>
            <p className="text-sm text-gray-600">We check your GitHub contributions to the VigyBag repository</p>
          </div>

          <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-6 border border-white/30 text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Generate Certificate</h3>
            <p className="text-sm text-gray-600">Get your personalized contribution certificate instantly</p>
          </div>

          <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-6 border border-white/30 text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Download & Share</h3>
            <p className="text-sm text-gray-600">Download in PNG or PDF format and showcase your achievements</p>
          </div>
        </div>

        {/* Certificate Verification Section */}
        <div className="mt-12 backdrop-blur-xl bg-white/90 rounded-3xl shadow-2xl border border-white/30 p-6 sm:p-8 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              Verify Certificate
            </h2>
            <p className="text-gray-600">Enter a certificate ID to verify its authenticity</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="flex-1 w-full">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Certificate ID
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="certificateId"
                  placeholder="Enter certificate ID"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                />
              </div>
            </div>
            <button
              onClick={() => {
                const certId = document.getElementById('certificateId').value;
                if (certId) {
                  verifyCertificateById(certId);
                } else {
                  setError('Please enter a certificate ID');
                }
              }}
              disabled={loading}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-2xl transform hover:scale-[1.02] disabled:hover:scale-100 transition-all duration-300 shadow-lg hover:shadow-xl disabled:shadow-md flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Verify Certificate</span>
                </>
              )}
            </button>
          </div>
          
          {error && (
            <div className="mt-4 bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start space-x-3 animate-fadeIn">
              <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-700 text-sm font-medium">{error}</p>
            </div>
          )}
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Lost your certificate? Contact support with your GitHub username
            </p>
          </div>
        </div>
      </div>

      {/* ENHANCED: Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        @media (max-width: 640px) {
          .certificate-text {
            font-size: 8px !important;
          }
        }
        
        @media (min-width: 641px) and (max-width: 1024px) {
          .certificate-text {
            font-size: 10px !important;
          }
        }
        
        @media (min-width: 1025px) {
          .certificate-text {
            font-size: 12px !important;
          }
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #10b981, #059669);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #059669, #047857);
        }

        /* Enhanced SweetAlert styling */
        .swal2-container {
          backdrop-filter: blur(10px) !important;
          background: rgba(0, 0, 0, 0.3) !important;
        }
        
        .swal2-popup {
          border-radius: 24px !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
        }
      `}</style>
    </div>
  );
}

export default Certification;