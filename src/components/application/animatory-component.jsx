import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiPause, FiPlay } from "react-icons/fi";
import { FaTools, FaCode, FaCogs } from "react-icons/fa";

const CartoonAnimation = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleAnimation = () => setIsPlaying(!isPlaying);

  const characterAnimation = {
    animate:
      isPlaying && !prefersReducedMotion
        ? {
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }
        : { y: 0, rotate: 0 },
  };

  const toolsAnimation = {
    animate:
      isPlaying && !prefersReducedMotion
        ? {
            rotate: [0, 360],
            transition: { duration: 5, repeat: Infinity, ease: "linear" },
          }
        : { rotate: 0 },
  };

  const codeBlockAnimation = {
    animate:
      isPlaying && !prefersReducedMotion
        ? {
            x: [0, 30, 0],
            opacity: [1, 0.7, 1],
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }
        : { x: 0, opacity: 1 },
  };

  return (
    <div className=" bg-gradient-to-br from-blue-100 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600">
            App Building Animation
          </h1>
          <button
            onClick={toggleAnimation}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            aria-label={isPlaying ? "Pause animation" : "Play animation"}
          >
            {isPlaying ? (
              <FiPause className="text-blue-600" />
            ) : (
              <FiPlay className="text-blue-600" />
            )}
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
          <motion.div
            className="flex justify-center items-center"
            {...characterAnimation}
          >
            {/* Character */}
            <div className="relative">
              <motion.div className="w-48 h-48 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-36 h-36 bg-white rounded-full flex items-center justify-center">
                  <motion.div
                    className="text-4xl text-blue-500"
                    {...toolsAnimation}
                  >
                    <FaTools />
                  </motion.div>
                </div>
              </motion.div>
              {/* Accessories */}
              <div className="absolute top-8 right-4 w-12 h-6 bg-gray-800 rounded-lg" />{" "}
              {/* Glasses */}
            </div>
          </motion.div>

          {/* Animated Elements */}
          <div className="flex justify-around mt-12">
            <motion.div
              className="p-6 bg-green-100 rounded-lg flex items-center"
              {...codeBlockAnimation}
            >
              <FaCode className="text-3xl text-green-600" />
              <span className="ml-2 font-mono">Code Block</span>
            </motion.div>

            <motion.div
              className="p-6 bg-purple-100 rounded-lg flex items-center"
              {...toolsAnimation}
            >
              <FaCogs className="text-3xl text-purple-600" />
              <span className="ml-2">Building</span>
            </motion.div>
          </div>

          {/* Accessibility Notice */}
          {prefersReducedMotion && (
            <div className="mt-8 p-4 bg-yellow-50 rounded-lg text-yellow-800 text-sm">
              Reduced motion is enabled. Some animations are disabled for your
              comfort.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartoonAnimation;
