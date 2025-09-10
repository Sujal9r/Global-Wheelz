"use client";
import React, { useState, useEffect } from "react";

const Section1 = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image:
        "/Air.jpeg",
      title: "AIR FREIGHT",
      description:
        "Fast and reliable air cargo solutions for your urgent shipments worldwide.",
      icon: "✈️",
    },
    {
      id: 2,
      image:
        "/Ship.jpg",
      title: "SEA FREIGHT",
      description:
        "Cost-effective international shipping with complete tracking and support.",
      icon: "🚢",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/1200x/0c/6c/0e/0c6c0ea6c5daa70eb54301a679cb3bca.jpg",
      title: "CUSTOM CLEARANCE",
      description:
        "Seamless customs handling for quick, hassle-free international deliveries.",
      icon: "📦",
    },
    {
      id: 4,
      image:
        "/Transport.png",
      title: "INTERNATIONAL TRANSPORTATION",
      description:
        "Worldwide transportation services to connect your business globally.",
      icon: "🌍",
    },
    {
      id: 5,
      image:
        "Door.png",
      title: "DOOR TO DOOR SERVICES",
      description:
        "End-to-end delivery service right from your location to the destination.",
      icon: "🏠",
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  const handleBoxClick = (index) => {
    setActiveSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <div className="relative w-full mt-[5rem] h-screen overflow-hidden bg-gradient-to-br from-red-50 to-white">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === activeSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Floating Content Boxes */}
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              onClick={() => handleBoxClick(index)}
              className={`group cursor-pointer transition-all duration-500 ${
                index === activeSlide ? "scale-105 z-20" : "scale-100 z-10"
              }`}
            >
              <div
                className={`relative w-full h-48 sm:h-56 lg:h-64 p-6 rounded-2xl backdrop-blur-md shadow-2xl border flex flex-col items-center justify-center text-center transition-all duration-500 ${
                  index === activeSlide
                    ? "bg-red-600 text-white border-red-400 shadow-red-500/30"
                    : "bg-white/90 hover:bg-white text-gray-800 border-white/50 hover:border-red-200"
                }`}
              >
                {/* Glowing effect for active box */}
                {index === activeSlide && (
                  <div className="absolute inset-0 rounded-2xl bg-red-500/20 animate-pulse"></div>
                )}

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-3xl mb-3">{slide.icon}</div>
                  <h3
                    className={`text-sm md:text-lg font-bold mb-2 transition-colors duration-300 ${
                      index === activeSlide
                        ? "text-white"
                        : "text-gray-800 group-hover:text-red-600"
                    }`}
                  >
                    {slide.title}
                  </h3>
                  <p
                    className={`text-xs md:text-sm leading-relaxed transition-colors duration-300 ${
                      index === activeSlide
                        ? "text-red-100"
                        : "text-gray-600 group-hover:text-gray-700"
                    }`}
                  >
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots with Animated Button Style */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleBoxClick(index)}
            className={`relative w-3 h-3 rounded-full overflow-hidden group bg-transparent border transition-all duration-500 hover:scale-125 ${
              index === activeSlide
                ? "bg-red-600 scale-125 shadow-lg shadow-red-600/50 border-red-600"
                : "border-red-600 hover:border-red-400"
            }`}
          >
            {/* Background gradients for hover effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-red-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
            <span className="absolute inset-0 bg-gradient-to-l from-red-900 via-red-500 to-red-700 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-150 origin-bottom"></span>
            <span className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent rounded-full transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000 delay-300"></span>
          </button>
        ))}
      </div>

      {/* Auto-play indicator with Animated Button Style */}
      <div className="absolute top-8 right-8 z-30">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="relative px-4 py-2 rounded-full backdrop-blur-md border overflow-hidden group bg-transparent transition-all duration-500 hover:scale-105 border-red-400 text-red-600 hover:text-white"
        >
          {/* Background gradients */}
          <span className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-red-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
          <span className="absolute inset-0 bg-gradient-to-l from-red-900 via-red-500 to-red-700 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-150 origin-bottom"></span>
          <span className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent rounded-full transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000 delay-300"></span>
          
          <div className="relative z-10 flex items-center space-x-2 text-sm font-medium group-hover:drop-shadow-lg transition-all duration-300">
            <div
              className={`w-2 h-2 rounded-full ${
                isAutoPlaying ? "bg-red-600 group-hover:bg-white animate-pulse" : "bg-gray-400 group-hover:bg-white"
              }`}
            ></div>
            <span>{isAutoPlaying ? "Auto" : "Manual"}</span>
          </div>
        </button>
      </div>

      {/* Mobile Overlay */}
      <div className="absolute bottom-20 left-4 right-4 md:hidden z-20">
        <div className="bg-black/80 backdrop-blur-md rounded-xl p-4 text-center">
          <h2 className="text-white text-lg font-bold mb-2">
            {slides[activeSlide].title}
          </h2>
          <p className="text-gray-200 text-sm">
            {slides[activeSlide].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;