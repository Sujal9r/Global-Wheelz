"use client";
import React from "react";

const Tabs = () => {
  const features = [
    {
      icon: "🚚",
      title: "Freight Forwarding",
      description:
        "Comprehensive freight forwarding solutions connecting businesses worldwide with seamless logistics.",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-500/10 to-blue-500/10",
      hoverGradient: "from-cyan-600 to-blue-600",
    },
    {
      icon: "🌍",
      title: "Global Network",
      description:
        "Extensive worldwide network ensuring your cargo reaches every corner of the globe efficiently.",
      gradient: "from-emerald-500 to-green-500",
      bgGradient: "from-emerald-500/10 to-green-500/10",
      hoverGradient: "from-emerald-600 to-green-600",
    },
    {
      icon: "📦",
      title: "Warehousing",
      description:
        "State-of-the-art warehousing facilities with advanced inventory management and security systems.",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-500/10 to-rose-500/10",
      hoverGradient: "from-pink-600 to-rose-600",
    },
    {
      icon: "📋",
      title: "Custom Clearance",
      description:
        "Expert customs clearance services ensuring smooth border crossings and regulatory compliance.",
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-500/10 to-amber-500/10",
      hoverGradient: "from-orange-600 to-amber-600",
    },
    {
      icon: "📊",
      title: "Supply Chain Management",
      description:
        "End-to-end supply chain solutions optimizing your logistics operations for maximum efficiency.",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-500/10 to-purple-500/10",
      hoverGradient: "from-indigo-600 to-purple-600",
    },
    {
      icon: "⚡",
      title: "Express Delivery",
      description:
        "Fast and reliable express delivery services with real-time tracking and guaranteed delivery times.",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/10 to-orange-500/10",
      hoverGradient: "from-yellow-600 to-orange-600",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-white to-red-50 py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-red-500 to-red-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-red-400 to-red-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-red-600 to-red-700 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-black via-red-600 to-white bg-clip-text text-transparent">
              Everything you need for
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
              global logistics excellence
            </span>
          </h1>

          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/80 to-red-50/80 backdrop-blur-sm p-8 rounded-3xl border border-red-200/50 hover:border-red-300/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl`}
              ></div>

              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 p-[1px]`}
              >
                <div className="w-full h-full bg-gradient-to-br from-white to-red-50 rounded-3xl"></div>
              </div>

              <div className="relative z-10 space-y-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500`}
                >
                  <span className="filter drop-shadow-sm">{feature.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-red-600 group-hover:text-red-700 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                <div>
                  <button
                    className={`group/btn relative inline-flex items-center space-x-2 text-transparent bg-gradient-to-r ${feature.gradient} bg-clip-text font-semibold hover:scale-105 transition-all duration-300`}
                  >
                    <span>Learn more</span>
                    <div
                      className={`w-5 h-5 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center group-hover/btn:translate-x-1 transition-transform duration-300`}
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-white to-gray-300 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-700 animate-ping"></div>
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-gradient-to-r from-gray-300 to-white rounded-full opacity-0 group-hover:opacity-40 transition-all duration-700 animate-ping delay-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
