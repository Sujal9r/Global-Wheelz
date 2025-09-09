"use client"

const Section6 = () => {
  return (
    <div className="bg-white text-gray-800 py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-black via-red-600 to-white bg-clip-text text-transparent">
            The core values and<br />
            principles that drive us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-16">

          <div className="text-center">
            <div className="mb-6 lg:mb-8 flex justify-center">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center">
              <img src="/Handshake.png" alt="Logo" className="" />
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 text-red-600">
              Long-term<br />commitment
            </h3>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              25+ years of running a profitable organization gives us a good sense of challenges that a 
              growing business faces. We take pride in running a sustainable business that's powered by you, 
              our customer.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-6 lg:mb-8 flex justify-center">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center">
              <img src="/Target.png" alt="Logo" className="" />
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 text-red-600">
              Focus on research &<br />development
            </h3>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Software is our craft and we back it up with our relentless investments in R&D. So much so 
              that we prefer to own the entire technology stack, including running our data centers globally.
            </p>
          </div>

          <div className="text-center md:col-span-2 md:mx-auto md:max-w-sm lg:col-span-1 lg:max-w-none">
            <div className="mb-6 lg:mb-8 flex justify-center">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center">
              <img src="/Users.png" alt="Logo" className="" />
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 text-red-600">
              Customer-first<br />philosophy
            </h3>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              In all these years, it's our customers' trust and goodwill that has helped us establish a strong 
              position in the market. No matter the size of your business, we're here to help you grow.
            </p>
          </div>
        </div>

        <div className="text-center">
          {/* <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg text-base lg:text-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
            Read our story
            <svg className="ml-2 w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Section6;