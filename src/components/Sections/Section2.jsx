"use client"

import Button from "../Common/Button";

const Section2 = () => {
  return (
    <div className="relative bg-gradient-to-br from-white via-red-50 to-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[60%] bg-gradient-to-b from-red-100 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-red-100 to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-20 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="text-gray-800 space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 lg:space-y-4">
              <p className="text-xs sm:text-sm lg:text-base font-medium tracking-wide uppercase text-red-600">
                International Logistics
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl leading-tight text-red-600">
                Global Wheelz
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-medium">
                Your Gateway to Global Markets
              </p>
            </div>
            
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg text-gray-700">
              Connect your business to global markets with Global Wheelz comprehensive international logistics services. From air freight to sea freight, custom clearance to door-to-door delivery, we provide seamless logistics solutions that break down barriers and expand your reach worldwide.
            </p>
            
            <Button 
            label="Get Quote Now"
            />
          </div>
          
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-30"></div>
          
          <div className="text-gray-800 space-y-6 lg:space-y-8 order-1 lg:order-2">
            <img src="https://wallpapers.com/images/featured/tyres-png-q9h2c4y9nd0gy6e4.jpg" className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-red-300 rounded-full flex items-center justify-center animate-spin"/>            
            
            <blockquote className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light leading-relaxed text-gray-700">
              "Whether you're a startup, mid-sized company, or enterprise —Global Wheelz delivers logistics excellence for all."
            </blockquote>
            
            {/* <div className="flex items-center space-x-3 sm:space-x-4 pt-2 sm:pt-4">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
                <div className="absolute -top-2 -left-2 w-full h-full border-2 border-[#fff] rounded-[24px] opacity-40 z-[-1]"></div>

                <img src="/Person.png" alt="" />
              </div>
              
              <div className="space-y-1">
                <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-white">
                  Prakarsh Gagdani
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-400">
                  CEO, 5paisa.com (an IIFL subsidiary)
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;