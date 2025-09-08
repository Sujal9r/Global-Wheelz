"use client";
import Image from "next/image";
import Link from "next/link";

const Section5 = () => {
  return (
    <div className="w-full bg-black flex items-center justify-center p-4">
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="relative w-full h-[600px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]">
          <div className="hidden md:block relative w-full h-full">
            <Image
              src="/RingFrame.png"
              alt="Background Frame"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <div className="md:hidden relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 rounded-3xl border border-gray-800/50"></div>
            
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-400/30 to-transparent rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-purple-500/30 to-transparent rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-gray-400/50 to-transparent"></div>
            <div className="absolute top-1/2 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-gray-400/50 to-transparent"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="relative text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative z-10">
                <img src="/RightMark.png" alt="Right Mark" className="mx-auto mb-6 w-20 sm:w-24 md:w-28 h-[12vh]" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                  Your Privacy is our responsibility
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8">
                  We believe that trust is paramount in a relationship. We do not own or sell your data, and we most certainly do not bank on advertising-based business models. The only way we make money is from the software license fees you pay us.
                </p>
                <Link href="#" className="inline-block">
                  {/* <button className="bg-[#004EE6] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-xs sm:text-sm hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Watch video
                  </button> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;