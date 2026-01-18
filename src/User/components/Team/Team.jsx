import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import coFounder from "../../../assets/co-founder.jpeg";
import founder from "../../../assets/founder.jpeg";
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import Card from './Card';
import anuja from "../../../assets/ANUJA-SINGH.png";
import tanmay from "../../../assets/tanmay.jpg";
import yatra from "../../../assets/YATRA-VISHWAKARMA.png";
import harshita from "../../../assets/HARSHITA-BHAMBHANI.png";
import anshuman from "../../../assets/ANSHUMAN-TIWARI.png";
import sadaf from "../../../assets/sadaf.png";
import mahima from "../../../assets/mahima.png";
import damini from "../../../assets/damini.jpg";
import garima from "../../../assets/garima.jpg";

const username = "codervivek5";
const repo = "VigyBag";

function Team() {
  const [contributors, setContributors] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const contributorsList = [
    {
      name: "ANUJA SINGH",
      role: "UI/UX DESIGNER",
      imageUrl: anuja,
      socialLinks: {
        github: "https://github.com/Anuja1227",
        linkedin: "https://www.linkedin.com/in/anuja-singh-864068250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "https://x.com/AnujaSingh34074?t=JfS-9apI0wkVS1PbTGtFKw&s=09",
        // instagram: "https://www.instagram.com/anuja"
      }
    },
    {
      name: "TANMAY MIRGAL",
      role: "FRONTEND DEVELOPER",
      imageUrl: tanmay,
      socialLinks: {
        github: "https://github.com/Tanmay-Mirgal",
        linkedin: "https://www.linkedin.com/in/tanmay-mirgal-1402792a2/",
        twitter: "https://x.com/TanmayMirgal?t=mJp5zJZ_iKDrFF4jw-UF4w&s=08",
        instagram: "https://www.instagram.com/https.tanmay_mirgal/"
      }
    },
    {
      name: "YATRA VISHWAKARMA",
      role: "ANDROID DEVELOPER",
      imageUrl: yatra,
      socialLinks: {
        github: "https://github.com/Yatra052",
        linkedin: "hhttps://www.linkedin.com/in/yatra-vishwakarma-25905a293/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "https://x.com/YatraVishw11?s=09",
       // instagram: "https://www.instagram.com/yatra"
      }
    },
    {
      name: "HARSHITA BHAMBHANI",
      role: "Full Stack Developer",
      imageUrl: harshita,
      socialLinks: {
        github: "https://github.com/harshita1611",
        linkedin: "https://www.linkedin.com/in/harshitaa16/",
        twitter: "https://x.com/harshitab16",
        instagram: "https://www.instagram.com/harshita__016__/"
      }
    },
    {
      name: "ANSHUMAN TIWARI",
      role: "Full Stack Developer",
      imageUrl: anshuman,
      socialLinks: {
        github: "https://github.com/Ansh101112",
        linkedin: "https://www.linkedin.com/in/anshumantiiwari/",
        twitter: "https://x.com/Realthugus",
        instagram: "https://www.instagram.com/ansh_.5911/"
      }
    },
    {
      name: "SADAF KAUSAR",
      role: "FRONTEND DEVELOPER",
      imageUrl: sadaf,
      socialLinks: {
        github: "https://github.com/SadafKausar2025",
        linkedin: "https://www.linkedin.com/in/sadaf-kausar-788456244",
       // twitter: "https://twitter.com/sadaf",
       // instagram: "https://www.instagram.com/sadaf"
      }
    },
    {
      name: "MAHIMA GUPTA",
      role: "FRONTEND DEVELOPER",
      imageUrl: mahima,
      socialLinks: {
        github: "https://github.com/Mahimatestgithub",
        linkedin: "https://www.linkedin.com/in/mahima-gupta-30b4a9230/",
        twitter: "https://x.com/MahimaGupt6433",
        //instagram: "https://www.instagram.com/mahima"
      }
    },
    
    {
      name: "DAMINI CHACHANE",
      role: "FRONTEND DEVELOPER",
      imageUrl: damini,
      socialLinks: {
        github: "https://github.com/Damini2004",
        linkedin: "https://www.linkedin.com/in/damini-chachane-82a210252",
       // twitter: "https://twitter.com/garima",
        instagram: "https://www.instagram.com/_.divcxl._?igsh=MWM2emgzNWJodW55"
      }
    },
    {
      name: "GARIMA",
      role: "FRONTEND DEVELOPER",
      imageUrl: garima,
      socialLinks: {
        github: "https://github.com/techy4shri",
        linkedin: "https://www.linkedin.com/in/garima-shrivastav/",
        //twitter: "https://twitter.com/tanmay",
        //instagram: "https://www.instagram.com/tanmay"
      }
    },

    // ... add more contributors as needed
  ];

  const Carousel = () => {
    const [currentGroup, setCurrentGroup] = useState(0);
    const totalGroups = Math.ceil(contributorsList.length / 3);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentGroup((prevGroup) => (prevGroup + 1) % totalGroups);
      }, 5000); // Change group every 5 seconds
  
      return () => clearInterval(timer);
    }, [totalGroups]);
  
    return (
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-8 mt-10">Meet Our Developers</h1>
        <div className="w-full h-1 bg-green-600 mb-8"></div>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentGroup * 100}%)` }}
        >
          {Array.from({ length: totalGroups }).map((_, groupIndex) => (
            <div key={groupIndex} className="flex-shrink-0 w-full flex justify-center">
              {contributorsList.slice(groupIndex * 3, groupIndex * 3 + 3).map((contributor) => (
                <Card key={contributor.name} {...contributor} />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

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
          icon: <FiLinkedin />,
        },
        {
          name: "GitHub",
          url: "https://github.com/codervivek5",
          icon: <FiGithub />,
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
          icon: <FiLinkedin />,
        },
        {
          name: "GitHub",
          url: "https://github.com/gyansharma",
          icon: <FiGithub />,
        },
        {
          name: "Twitter",
          url: "https://twitter.com/gyansharma",
          icon: <FaXTwitter />,
        },
      ],
    },
  ];

  useEffect(() => {
    fetchContributors();
  }, [page]);

  const fetchContributors = () => {
    setLoading(true);
    fetch(`https://api.github.com/repos/${username}/${repo}/contributors?page=${page}&per_page=100`)
      .then(response => response.json())
      .then(data => {
        setContributors(prevContributors => [...prevContributors, ...data]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching GitHub data:', error);
        setLoading(false);
      });
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const renderSocialIcons = (login) => {
    return (
      <div className="flex mt-2">
        <a
          href={`https://github.com/${login}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-green-500 mx-1"
        >
          <FiGithub size={20} />
        </a>
        <a
          href={`https://twitter.com/${login}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-green-500 mx-1"
        >
          <FiTwitter size={20} />
        </a>
        <a
          href={`https://linkedin.com/in/${login}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-green-500 mx-1"
        >
          <FiLinkedin size={20} />
        </a>
        {/* Add more social icons as needed */}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 text-center mb-8 mt-[10vh]">Our Leadership </h1>
      <div className="w-full h-1 bg-green-600 mb-8"></div>

      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {leadershipData.map((leader, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={leader.image} alt={leader.name} className="w-full h-56 object-cover" />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{leader.name}</h2>
                    <p className="text-green-600 font-semibold mb-4">{leader.role}</p>
                    <p className="text-gray-600 mb-4">{leader.description}</p>
                  </div>
                  <div className="mt-4 flex justify-start">
                    {leader.socialLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-green-500 mx-2"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Carousel />
      <h1 className="text-3xl font-bold text-green-800 text-center mb-8 mt-[10vh]">Our Contributors</h1>
      <div className="w-full h-1 bg-green-600 mb-8"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {contributors.map((contributor, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={`https://avatars.githubusercontent.com/${contributor.login}`}
              alt={contributor.login}
              className="w-32 h-32 object-cover rounded-full mt-4"
            />
            <div className="p-4 flex flex-col items-center">
              <h2 className="text-xl font-bold text-gray-800">{contributor.login}</h2>
              <p className="text-green-600 font-semibold mb-4">Contributions: {contributor.contributions}</p>
              {renderSocialIcons(contributor.login)}
            </div>
          </motion.div>
        ))}
      </div>
      
    </div>
  );
}

export default Team;
