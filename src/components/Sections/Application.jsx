"use client";
import React from "react";

const Application = () => {
  return (
    <div className="w-full bg-gradient-to-br from-white via-red-50 to-white py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 sm:px-6 md:px-12 relative z-10">
        <div className="flex justify-center order-1 md:order-none">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-red-600 via-red-500 to-red-700 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 scale-110"></div>
              <img
                src="/Phone.png"
                alt=" Mobile App"
                className="w-[220px] rounded-lg sm:w-[260px] md:w-[320px] drop-shadow-2xl transition-transform duration-300 hover:scale-105"
              />
          </div>
        </div> 

        <div className="text-left space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
              <span className="bg-gradient-to-r from-black via-red-600 to-white bg-clip-text text-transparent">
                One logistics platform, trusted by
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent font-extrabold animate-pulse">
                10,000+ Businesses Worldwide
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Real-time Shipment Tracking",
                description:
                  "Track your shipments in real-time with our advanced GPS and IoT-enabled tracking system.",
                gradient: "from-emerald-500 to-teal-500",
              },
              {
                title: "Instant Quote Generation",
                description:
                  "Get instant shipping quotes for air, sea, and land freight with transparent pricing.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Digital Documentation",
                description:
                  "Manage all shipping documents digitally with automated customs and compliance handling.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "24/7 Customer Support",
                description:
                  "Round-the-clock customer support with dedicated logistics experts for your business needs.",
                gradient: "from-orange-500 to-red-500",
              },
              {
                title: "Customized Logistics Solutions",
                description:
                  "Tailored logistics solutions designed specifically for your industry and business requirements.",
                gradient: "from-violet-500 to-purple-500",
              },
              {
                title: "Global Network Access",
                description:
                  "Access our extensive global network of partners and facilities for seamless worldwide shipping.",
                gradient: "from-indigo-500 to-blue-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-red-50 p-6 rounded-2xl border border-red-200 hover:border-red-300 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative z-10 space-y-3">
                  <h3 className="font-semibold text-red-600 text-base sm:text-lg group-hover:text-red-700 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
