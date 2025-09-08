"use client";
import React, { useState } from "react";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      title: "People data & Analytics",
      description:
        "Connect all your people together in one place and gain powerful insights",
    },
    {
      id: 1,
      title: "Payroll & Expense tracking",
      description:
        "Automate and Pay employees in 6 steps- like clockwork. Stay 100% Compliant.",
    },
    {
      id: 2,
      title: "Performance and Culture",
      description:
        "Employ SMART Goals and OKRs to measure & maximize talent performance.",
    },
    {
      id: 3,
      title: "Hiring and Onboarding",
      description:
        "Source, hire and onboard top talent. Personalized dashboards for insights.",
    },
    {
      id: 4,
      title: "Timesheets & Projects (PSA)",
      description:
        "Manage time, resource and project profitability efficiently",
    },
  ];

  return (
    <div className="min-h-screen bg-black p-6 sm:p-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Smart HR to outsmart the changing world
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
          The world has changed, and it's going to keep changing. Global-Wheelz HR helps
          your teams to adapt, evolve, and scale by working more effectively.
          Spend less time on mundane tasks and focus more on strategy. Turn data
          into smarter decisions and create experiences your employees will
          love.
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
                  ? "bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-lg border-l-4 border-blue-800"
                  : "bg-gray-900 hover:bg-gray-500 text-gray-800"
              }`}
            >
              <h3
                className={`text-lg sm:text-xl font-semibold mb-2 ${
                  activeFeature === index ? "text-white" : "text-gray-50"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-sm ${
                  activeFeature === index ? "text-gray-200" : "text-gray-400"
                }`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-2/3 relative overflow-hidden rounded-lg bg-gray-900 shadow-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${activeFeature * 100}%)` }}
          >
            <div className="w-full flex-shrink-0 p-6 flex justify-center">
              <img
                src="/Jobopen.jpg"
                alt=""
              />
            </div>

            <div className="w-full flex-shrink-0 p-6 flex justify-center">
              <img
                src="/OurPayroll.png"
                alt=""
              />
            </div>

            <div className="w-full flex-shrink-0 p-6 flex justify-center">
              <img
                src="/Performancepage.png"
                alt=""
              />
            </div>

            <div className="w-full flex-shrink-0 p-6 flex justify-center">
              <img
                src="/Myteam.png"
                alt=""
              />
            </div>

            <div className="w-full flex-shrink-0 p-6 flex justify-center">
              <img
                src="/Timesheet.png"
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
