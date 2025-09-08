"use client";
import React from "react";

const Tabs = () => {
  const features = [
    {
      icon: "💰",
      title: "Payroll",
      description:
        "We redefined Payroll industry back in 2016. 6 simple steps. No manual tasks— All on cloud.",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-500/10 to-blue-500/10",
      hoverGradient: "from-cyan-600 to-blue-600",
    },
    {
      icon: "👤",
      title: "Modern HR",
      description:
        "All your people information in one place to create a connected digital workplace.",
      gradient: "from-emerald-500 to-green-500",
      bgGradient: "from-emerald-500/10 to-green-500/10",
      hoverGradient: "from-emerald-600 to-green-600",
    },
    {
      icon: "💖",
      title: "Performance",
      description:
        "Build a high-performing culture driven by contextual feedback and goal alignment.",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-500/10 to-rose-500/10",
      hoverGradient: "from-pink-600 to-rose-600",
    },
    {
      icon: "👥",
      title: "Hiring & Onboarding",
      description:
        "Empower your recruiter to discover, hire, and onboard the best talent.",
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-500/10 to-amber-500/10",
      hoverGradient: "from-orange-600 to-amber-600",
    },
    {
      icon: "📊",
      title: "Project timesheet",
      description:
        "Track your employee time and maintain effective utilization to grow your services business.",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-500/10 to-purple-500/10",
      hoverGradient: "from-indigo-600 to-purple-600",
    },
    {
      icon: "⏰",
      title: "Time & Attendance",
      description:
        "Automated Attendance and leave — unified with payroll. Biometric and GPS Tracking.",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/10 to-orange-500/10",
      hoverGradient: "from-yellow-600 to-orange-600",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-black via-gray-900 to-black py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Everything you need to create a
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              high performance culture
            </span>
          </h1>

          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl`}
              ></div>

              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 p-[1px]`}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl"></div>
              </div>

              <div className="relative z-10 space-y-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500`}
                >
                  <span className="filter drop-shadow-sm">{feature.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
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
