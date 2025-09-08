import React from 'react';
import Button from '../Common/Button';

const Section1 = () => {
  return (

    <div className="relative w-full overflow-hidden bg-black top-[5rem]">

      <img src="/Frame1.png" alt="Globe" className="absolute inset-0 w-full object-cover" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8 sm:mb-12 w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[40vw] mt-[5vh] sm:mt-[10vh] mx-auto">
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[2vw] xl:text-[3vw] font-bold text-white leading-tight mb-2">
            Your life's work,<br /> powered by our life's work
          </h1>
        </div>

        <div className="bg-black bg-opacity-80 rounded-3xl p-8 sm:p-12 lg:p-16 max-w-5xl w-full mx-auto backdrop-blur-sm">

          <div className="flex justify-center mb-8">
            <img src="/Logo.png" alt="Logo" className="h-[10vh] w-[30vw] sm:h-20 sm:w-30" />
          </div>

          <div className="text-center mb-8 sm:mb-12">
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed mb-4 max-w-3xl mx-auto">
              A unique and powerful software suite to transform the way you work.
              Designed for businesses of all sizes, built by a company that values your privacy.
            </p>
          </div>

          <div className="flex justify-center mb-12 sm:mb-16">
             <Button 
                label="Get Started For Free " 
              />
          </div>

          <div className="w-full">
            <h3 className="text-lg sm:text-xl lg:text-2xl text-gray-300 text-center mb-8 sm:mb-12 font-medium">
              Featured Apps
            </h3>

            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16 mb-8 sm:mb-12">

              <div className="flex flex-col items-center text-center group cursor-pointer bg-gradient-to-br from-gray-900 via-black to-gray-800 gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 w-24 h-28 sm:w-32 sm:h-36 md:w-36 md:h-40 rounded-2xl sm:rounded-3xl border border-gray-700/30 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-1 sm:hover:-translate-y-2 backdrop-blur-sm">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 p-1.5 sm:p-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/Producticon.png"
                    alt="Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium sm:font-semibold group-hover:text-emerald-300 transition-colors duration-300">
                  Payroll
                </span>
              </div>

              <div className="flex flex-col items-center text-center group cursor-pointer bg-gradient-to-br from-gray-900 via-black to-gray-800 gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 w-24 h-28 sm:w-32 sm:h-36 md:w-36 md:h-40 rounded-2xl sm:rounded-3xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1 sm:hover:-translate-y-2 backdrop-blur-sm">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 p-1.5 sm:p-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/Producticon.png"
                    alt="Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium sm:font-semibold group-hover:text-purple-300 transition-colors duration-300">
                  Performance
                </span>
              </div>

              <div className="flex flex-col items-center text-center group cursor-pointer bg-gradient-to-br from-gray-900 via-black to-gray-800 gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 w-24 h-28 sm:w-32 sm:h-36 md:w-36 md:h-40 rounded-2xl sm:rounded-3xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 sm:hover:-translate-y-2 backdrop-blur-sm">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 p-1.5 sm:p-2 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/Producticon.png"
                    alt="Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium sm:font-semibold group-hover:text-blue-300 transition-colors duration-300">
                  Carrers
                </span>
              </div>

              <div className="flex flex-col items-center text-center group cursor-pointer bg-gradient-to-br from-gray-900 via-black to-gray-800 gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 w-24 h-28 sm:w-32 sm:h-36 md:w-36 md:h-40 rounded-2xl sm:rounded-3xl border border-gray-700/30 hover:border-orange-500/50 transition-all duration-500 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-1 sm:hover:-translate-y-2 backdrop-blur-sm">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 p-1.5 sm:p-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/Producticon.png"
                    alt="Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium sm:font-semibold group-hover:text-orange-300 transition-colors duration-300">
                  Modern HR
                </span>
              </div>

              <div className="flex flex-col items-center text-center group cursor-pointer bg-gradient-to-br from-gray-900 via-black to-gray-800 gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 w-24 h-28 sm:w-32 sm:h-36 md:w-36 md:h-40 rounded-2xl sm:rounded-3xl border border-gray-700/30 hover:border-pink-500/50 transition-all duration-500 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-1 sm:hover:-translate-y-2 backdrop-blur-sm">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 p-1.5 sm:p-2 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/Producticon.png"
                    alt="Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium sm:font-semibold group-hover:text-pink-300 transition-colors duration-300">
                  Attendance
                </span>
              </div>

               <div className="flex flex-col items-center text-center group cursor-pointer bg-gradient-to-br from-gray-900 via-black to-gray-800 gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 w-24 h-28 sm:w-32 sm:h-36 md:w-36 md:h-40 rounded-2xl sm:rounded-3xl border border-gray-700/30 hover:border-gray-200/50 transition-all duration-500 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-1 sm:hover:-translate-y-2 backdrop-blur-sm">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 p-1.5 sm:p-2 bg-gradient-to-r from-gray-500 to-white-600 rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/Producticon.png"
                    alt="Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium sm:font-semibold group-hover:text-gray-400 transition-colors duration-300">
                  Hiring & Onboarding
                </span>
              </div>

               <div className="flex flex-col items-center text-center group cursor-pointer bg-gradient-to-br from-gray-900 via-black to-gray-800 gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 w-24 h-28 sm:w-32 sm:h-36 md:w-36 md:h-40 rounded-2xl sm:rounded-3xl border border-gray-700/30 hover:border-yellow-300/50 transition-all duration-500 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1 sm:hover:-translate-y-2 backdrop-blur-sm">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 p-1.5 sm:p-2 bg-gradient-to-r from-yellow-500 to-gray-600 rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/Producticon.png"
                    alt="Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium sm:font-semibold group-hover:text-yellow-500 transition-colors duration-300">
                  Project Timesheet
                </span>
              </div>

            </div>

            <div className="text-center">
              <Button 
                label="Explore all products" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
