import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { animate } from "framer-motion";

const SocialMediaIcons = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState(null);

  const socialPlatforms = [
    {
      name: "Facebook",
      followers: 1200000,
      icon: FaFacebook,
      color: "text-blue-600",
      hoverColor: "hover:bg-blue-50",
    },
    {
      name: "Instagram",
      followers: 850000,
      icon: FaInstagram,
      color: "text-pink-600",
      hoverColor: "hover:bg-pink-50",
    },
    {
      name: "YouTube",
      followers: 2000000,
      icon: FaYoutube,
      color: "text-red-600",
      hoverColor: "hover:bg-red-50",
    },
    {
      name: "LinkedIn",
      followers: 500000,
      icon: FaLinkedin,
      color: "text-blue-700",
      hoverColor: "hover:bg-blue-50",
    },
  ];

  const formatFollowers = (count, element) => {
    if (element) {
      animate(0, count, {
        duration: 1,
        onUpdate: (value) => {
          if (value >= 1000000) {
            element.textContent = `${(value / 1000000).toFixed(1)}M`;
          } else if (value >= 1000) {
            element.textContent = `${(value / 1000).toFixed(1)}K`;
          } else {
            element.textContent = Math.floor(value).toString();
          }
        },
      });
    }
    return "0";
  };

  return (
    <div className="flex justify-center items-center  ">
      <div className="flex space-x-6 p-1 bg-gray-900 rounded-xl ">
        {socialPlatforms.map((platform) => (
          <div
            key={platform.name}
            className="relative group"
            onMouseEnter={() => setHoveredPlatform(platform.name)}
            onMouseLeave={() => setHoveredPlatform(null)}
          >
            <div
              className={`p-4 rounded-full transition-all duration-300 ease-in-out transform
                hover:scale-110 cursor-pointer ${platform.hoverColor}`}
              aria-label={`${platform.name} social icon`}
              role="button"
              tabIndex={0}
            >
              <platform.icon
                className={`text-3xl ${platform.color} transition-colors duration-300`}
              />
            </div>

            {hoveredPlatform === platform.name && (
              <div
                className="absolute -top-16 left-1/2 transform -translate-x-1/2
                  bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium
                  shadow-lg opacity-100 transition-all duration-300 ease-in-out"
                style={{ minWidth: "120px" }}
              >
                <div className="text-center">
                  <p
                    className="font-bold"
                    ref={(el) => el && formatFollowers(platform.followers, el)}
                  >
                    0
                  </p>
                  <p className="text-xs">Followers</p>
                </div>
                <div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2
                    border-8 border-transparent border-t-gray-800"
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaIcons;
