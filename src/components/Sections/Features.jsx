"use client";
import React, { useState } from "react";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      title: "Air Freight Services",
      description:
        "Fast and reliable air cargo solutions for urgent shipments worldwide with real-time tracking",
    },
    {
      id: 1,
      title: "Sea Freight Services",
      description:
        "Cost-effective ocean freight solutions for large volume shipments with comprehensive logistics support",
    },
    {
      id: 2,
      title: "Custom Clearance",
      description:
        "Expert customs clearance services ensuring smooth border crossings and compliance with international regulations",
    },
    {
      id: 3,
      title: "International Transportation",
      description:
        "Comprehensive transportation solutions connecting businesses across continents with seamless logistics",
    },
    {
      id: 4,
      title: "Door to Door Services",
      description:
        "Complete end-to-end delivery solutions from pickup to final destination with full visibility",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-6 sm:p-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">
          Global Logistics Solutions for International Success
        </h1>
        <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
          The world of international trade is constantly evolving. Global wheels helps
          your business navigate global markets with confidence and efficiency.
          From air freight to sea freight, custom clearance to door-to-door delivery,
          we provide comprehensive logistics solutions that connect your business
          to the world with precision and reliability.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-6">
        {/* Left - Feature list */}
        <div className="w-full lg:w-1/3 space-y-4">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              onClick={() => setActiveFeature(index)}
              className={`p-5 rounded-lg cursor-pointer transition-all duration-300 ${
                activeFeature === index
                  ? "bg-gradient-to-r from-red-50 via-red-100 to-red-50 text-red-600 shadow-lg border-l-4 border-red-600"
                  : "bg-white hover:bg-red-50 text-gray-700 border border-red-200"
              }`}
            >
              <h3
                className={`text-lg sm:text-xl font-semibold mb-2 ${
                  activeFeature === index ? "text-red-600" : "text-gray-700"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-sm ${
                  activeFeature === index ? "text-red-500" : "text-gray-600"
                }`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-2/3 relative overflow-hidden rounded-lg bg-white shadow-lg border border-red-200">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${activeFeature * 100}%)` }}
          >
            <div className="w-full flex-shrink-0 flex justify-center">
              <img
                src="https://www.patel-india.com/uploads/images/678bd185-cdef-4203-b419-88f8b83a5faf_air-logistics%20(2).jpg"
                alt=""
              />
            </div>

            <div className="w-full flex-shrink-0 flex justify-center">
              <img
                src="https://www.bombinoexp.com/img/banner-img2.png"
                alt=""
              />
            </div>

            <div className="w-full flex-shrink-0 flex justify-center">
              <img
                src="/Clear.png"
                alt=""
              />
            </div>

            <div className="w-full flex-shrink-0 flex justify-center">
              <img
                src="/Transport.png"
                alt=""
              />
            </div>

            <div className="w-full flex-shrink-0 flex justify-center">
              <img
                src="Dtod.png"
                alt=""
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
