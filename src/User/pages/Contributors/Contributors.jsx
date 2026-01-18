import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import anuja from "../../../assets/ANUJA-SINGH.png";
import tanmay from "../../../assets/tanmay.jpg";
import archana from "../../../assets/ARCHANA-KRISHNA.png";
import yatra from "../../../assets/YATRA-VISHWAKARMA.png";
import harshita from "../../../assets/HARSHITA-BHAMBHANI.png";
import anshuman from "../../../assets/ANSHUMAN-TIWARI.png";
import sadaf from "../../../assets/sadaf.png";
import syed from "../../../assets/syed.png";
import mahima from "../../../assets/mahima.png";

import ContributorCard from "../../components/About/ContributorCard";
import coFounder from "../../../assets/co-founder.jpeg";
import founder from "../../../assets/founder.jpeg";
import Networkdiagram from "../../components/About/Networkdiagram";
import Header from "../../components/About/Header";

const Contributors = () => {
  const [showAll, setShowAll] = useState(false);

  const contributorsData = [
    {
      name: "ANUJA SINGH",
      role: "UI/UX DESIGNER",
      image: anuja,
      socialLinks: [
        { name: "Instagram", url: "#", icon: <FaInstagram /> },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/anuja-singh-864068250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          icon: <FaLinkedin />,
        },
        {
          name: "Twitter",
          url: "https://x.com/AnujaSingh34074?t=JfS-9apI0wkVS1PbTGtFKw&s=09",
          icon: <FaXTwitter />,
        },
        {
          name: "GitHub",
          url: "https://github.com/Anuja1227",
          icon: <FaGithub />,
        },
      ],
    },
    {
      name: "TANMAY MIRGAL",
      role: "FRONTEND DEVELOPER",
      image: tanmay,
      socialLinks: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/https.tanmay_mirgal/",
          icon: <FaInstagram />,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/tanmay-mirgal-1402792a2/",
          icon: <FaLinkedin />,
        },
        {
          name: "Twitter",
          url: "https://x.com/TanmayMirgal?t=mJp5zJZ_iKDrFF4jw-UF4w&s=08",
          icon: <FaXTwitter />,
        },
        {
          name: "GitHub",
          url: "https://github.com/Tanmay-Mirgal",
          icon: <FaGithub />,
        },
      ],
    },
    {
      name: "ARCHANA KRISHNA",
      role: "UI/UX DESIGNER",
      image: archana,
      socialLinks: [
        { name: "Instagram", url: "#", icon: <FaInstagram /> },
        { name: "LinkedIn", url: "#", icon: <FaLinkedin /> },
        { name: "Twitter", url: "#", icon: <FaXTwitter /> },
        { name: "GitHub", url: "#", icon: <FaGithub /> },
      ],
    },
    {
      name: "YATRA VISHWAKARMA",
      role: "ANDROID DEVELOPER",
      image: yatra,
      socialLinks: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/yatra.vishwa?igsh=MTNnc2Z5bXRpYnYxcw==",
          icon: <FaInstagram />,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/yatra-vishwakarma-25905a293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          icon: <FaLinkedin />,
        },
        {
          name: "Twitter",
          url: "https://x.com/YatraVishw11?s=09",
          icon: <FaXTwitter />,
        },
        {
          name: "GitHub",
          url: "https://github.com/Yatra052",
          icon: <FaGithub />,
        },
      ],
    },
    {
      name: "HARSHITA BHAMBHANI",
      role: "Full Stack Developer",
      image: harshita,
      socialLinks: [
        { name: "Instagram", url: "#", icon: <FaInstagram /> },
        { name: "LinkedIn", url: "#", icon: <FaLinkedin /> },
        { name: "Twitter", url: "#", icon: <FaXTwitter /> },
        { name: "GitHub", url: "#", icon: <FaGithub /> },
      ],
    },
    {
      name: "ANSHUMAN TIWARI",
      role: "Full Stack Developer",
      image: anshuman,
      socialLinks: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/ansh_.5911/",
          icon: <FaInstagram />,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/anshumantiiwari/",
          icon: <FaLinkedin />,
        },
        {
          name: "Twitter",
          url: "https://x.com/Realthugus",
          icon: <FaXTwitter />,
        },
        {
          name: "GitHub",
          url: "https://github.com/Ansh101112",
          icon: <FaGithub />,
        },
      ],
    },
    {
      name: "SADAF KAUSAR",
      role: "FRONTEND DEVELOPER",
      image: sadaf,
      socialLinks: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/",
          icon: <FaInstagram />,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/sadaf-kausar-788456244/",
          icon: <FaLinkedin />,
        },
        {
          name: "Twitter",
          url: "https://x.com/SadafKausa69884",
          icon: <FaXTwitter />,
        },
        {
          name: "GitHub",
          url: "https://github.com/SadafKausar2025",
          icon: <FaGithub />,
        },
      ],
    },
    {
      name: "Mahima Gupta",
      role: "FRONTEND DEVELOPER",
      image: mahima,
      socialLinks: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/",
          icon: <FaInstagram />,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/mahima-gupta-30b4a9230/",
          icon: <FaLinkedin />,
        },
        {
          name: "Twitter",
          url: "https://twitter.com/MahimatestGithub",
          icon: <FaXTwitter />,
        },
        {
          name: "GitHub",
          url: "https://github.com/Mahimatestgithub",
          icon: <FaGithub />,
        },
      ],
    },
    {
      name: "Syed Imtiyaz Ali",
      role: "MERN STACK DEVELOPER",
      image: syed,
      socialLinks: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/",
          icon: <FaInstagram />,
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/imtiyaz-sde",
          icon: <FaLinkedin />,
        },
        {
          name: "Twitter",
          url: "https://x.com/SadafKausa69884",
          icon: <FaXTwitter />,
        },
        {
          name: "GitHub",
          url: "https://github.com/SyedImtiyaz-1",
          icon: <FaGithub />,
        },
      ],
    },
  ];

  const leadershipData = [
    {
      name: "Vivek Prajapati",
      role: "Founder",
      image: founder,
      description:
        "Vivek Prajapati, the visionary founder of VigyBag, is an expert in web and app development with a keen interest in Android development.",
      socialLinks: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/coder_vivek/",
          icon: <FaInstagram />,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/codervivek/",
          icon: <FaLinkedin />,
        },
        {
          name: "GitHub",
          url: "https://github.com/codervivek5",
          icon: <FaGithub />,
        },
        {
          name: "Twitter",
          url: "https://x.com/codervivek5?mx=2",
          icon: <FaXTwitter />,
        },
      ],
    },
    {
      name: "Gyan Sharma",
      role: "Co-Founder",
      image: coFounder,
      description:
        "Co-founder Gyan Sharma complements Vivek's technical prowess with strategic vision and operational expertise in sustainable business practices.",
      socialLinks: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/gyan5195/",
          icon: <FaInstagram />,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/gyan-sharma",
          icon: <FaLinkedin />,
        },
        {
          name: "GitHub",
          url: "https://github.com/gyansharma",
          icon: <FaGithub />,
        },
        {
          name: "Twitter",
          url: "https://twitter.com/gyansharma",
          icon: <FaXTwitter />,
        },
      ],
    },
  ];

  const displayedContributors = showAll ? contributorsData : contributorsData.slice(0, 6);

  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-emerald-50 min-h-screen">
      {/* ENHANCED: Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 w-40 h-40 bg-emerald-200 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-48 h-48 bg-orange-200 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-200 rounded-full opacity-10 blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10">
        <Header />
      </div>

      {/* ENHANCED: Leadership Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-orange-400 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* ENHANCED: Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-emerald-700 to-teal-700 bg-clip-text text-transparent">
              Our Leadership
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the visionary leaders driving VigyBag's mission towards sustainable e-commerce
            </p>
          </div>

          {/* ENHANCED: Leadership cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {leadershipData.map((leader, index) => (
              <div
                key={index}
                className="group backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl border border-white/20 overflow-hidden transform transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* ENHANCED: Multi-layered overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* ENHANCED: Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-emerald-100 transition-colors duration-300">
                      {leader.name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <p className="text-emerald-300 font-semibold tracking-wide uppercase text-sm">
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  {/* ENHANCED: Floating badge */}
                  <div className="absolute top-6 right-6 transform translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* ENHANCED: Card content */}
                <div className="p-6 md:p-8 bg-gradient-to-br from-white via-white to-gray-50">
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
                    {leader.description}
                  </p>

                  {/* ENHANCED: Social links */}
                  <div className="flex justify-start space-x-4">
                    {leader.socialLinks.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        className="group/social relative w-12 h-12 bg-gray-100 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="text-xl text-gray-600 group-hover/social:text-white transition-colors duration-300">
                          {link.icon}
                        </div>
                        
                        {/* Tooltip */}
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {link.name}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* ENHANCED: Border glow effect */}
                <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-2 ring-emerald-400/30 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENHANCED: Contributors Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-orange-50 relative">
        <div className="container mx-auto px-4">
          {/* ENHANCED: Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-orange-700 to-red-700 bg-clip-text text-transparent">
              Meet Our Contributors
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Talented individuals who make VigyBag's success possible through their dedication and expertise
            </p>
          </div>

          {/* ENHANCED: Contributors grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {displayedContributors.map((contributor, index) => (
              <div
                key={index}
                className="group backdrop-blur-sm bg-white/90 rounded-2xl shadow-xl border border-white/50 overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <ContributorCard
                  {...contributor}
                  roleColor="text-emerald-600"
                />
                
                {/* ENHANCED: Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
              </div>
            ))}
          </div>

          {/* ENHANCED: Show more/less button */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-3"
            >
              <span>{showAll ? "View Less" : "See More Contributors"}</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              
              {/* Button glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
            </button>
          </div>

          {/* ENHANCED: Statistics */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 backdrop-blur-sm bg-white/60 rounded-2xl border border-white/30">
              <div className="text-3xl font-bold text-emerald-600 mb-2">{contributorsData.length}+</div>
              <div className="text-gray-600 font-medium">Contributors</div>
            </div>
            <div className="text-center p-6 backdrop-blur-sm bg-white/60 rounded-2xl border border-white/30">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Projects</div>
            </div>
            <div className="text-center p-6 backdrop-blur-sm bg-white/60 rounded-2xl border border-white/30">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Dedication</div>
            </div>
          </div>
        </div>
      </section>

      {/* ENHANCED: Network Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, #f59e0b 2px, transparent 2px)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* ENHANCED: Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 bg-clip-text text-transparent">
              Our Network
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our interconnected ecosystem of partnerships and collaborations
            </p>
          </div>

          {/* Network diagram container */}
          <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl border border-white/20 p-8 transform hover:scale-[1.01] transition-all duration-500">
            <Networkdiagram />
          </div>
        </div>
      </section>

      {/* ENHANCED: Custom styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
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
      `}</style>
    </div>
  );
};

export default Contributors;