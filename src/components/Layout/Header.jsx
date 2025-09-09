"use client";
import React, { useState, useEffect } from "react";

const Section1 = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/736x/7a/47/cf/7a47cf31a8dc802771263a917f15fe1d.jpg",
      title: "AIR FREIGHT",
      description:
        "Fast and reliable air cargo solutions for your urgent shipments worldwide.",
      icon: "✈️",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/42/9b/88/429b8834df42ed7d678277dd9b3a97a6.jpg",
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
        "https://i.pinimg.com/736x/46/7f/d4/467fd489422e345c357387cb068a9f14.jpg",
      title: "INTERNATIONAL TRANSPORTATION",
      description:
        "Worldwide transportation services to connect your business globally.",
      icon: "🌍",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/736x/41/94/c4/4194c429396a3c7a7747ea65591933ed.jpg",
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

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleBoxClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeSlide
                ? "bg-red-600 scale-125 shadow-lg shadow-red-600/50"
                : "bg-white/70 hover:bg-white hover:scale-110"
            }`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-8 right-8 z-30">
        <div
          className={`px-4 py-2 rounded-full backdrop-blur-md border transition-colors duration-300 ${
            isAutoPlaying
              ? "bg-red-600/90 text-white border-red-400"
              : "bg-white/90 text-gray-800 border-white/50"
          }`}
        >
          <div className="flex items-center space-x-2 text-sm font-medium">
            <div
              className={`w-2 h-2 rounded-full ${
                isAutoPlaying ? "bg-white animate-pulse" : "bg-gray-400"
              }`}
            ></div>
            <span>{isAutoPlaying ? "Auto" : "Manual"}</span>
          </div>
        </div>
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
