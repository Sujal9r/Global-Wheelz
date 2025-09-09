'use client';

import React from 'react';
import '../../app/globals.css';

const companies = [
  'https://deeporion.com/_next/image?url=https%3A%2F%2Fdeeporion.s3.ap-south-1.amazonaws.com%2Fimages%2FDoody_calls.webp&w=1920&q=75',
  'https://deeporion.com/_next/image?url=https%3A%2F%2Fdeeporion.s3.ap-south-1.amazonaws.com%2Fimages%2FAmp_AI.webp&w=1920&q=75',
  'https://deeporion.com/_next/image?url=https%3A%2F%2Fdeeporion.s3.ap-south-1.amazonaws.com%2Fimages%2FBox29.webp&w=1920&q=75',
  'https://deeporion.com/_next/image?url=https%3A%2F%2Fdeeporion.s3.ap-south-1.amazonaws.com%2Fimages%2FCoco_%26_More.webp&w=1920&q=75',
  'https://deeporion.com/_next/image?url=https%3A%2F%2Fdeeporion.s3.ap-south-1.amazonaws.com%2Fimages%2FHealthpe.webp&w=1920&q=75',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7Mod9KWPmNxyb4qDEmvt22WXR61xJgJ64NWJki0DFglu3ohLbkuz0I1W-kHtPrdcRsQ&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5K3ml24wdjHM0ygFZmOVBYko8rfAE6QwJzg&src=1',
];

export default function Slider() {
  return (
    <div className="relative overflow-hidden bg-white py-6 px-4 sm:py-8 sm:px-10 border-t border-red-200 border-b border-red-200">
      <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0">
        
        <div className="flex-shrink-0 text-center sm:text-left sm:border-r sm:pr-6">
          <h1 className="text-red-600 text-lg sm:text-3xl font-medium">
            Innovating with  <br className="hidden sm:block" /> Global Brands
          </h1>
        </div>

        <div className="w-full overflow-hidden">
          <div className="flex w-max animate-scroll">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="mx-4 sm:mx-8 flex items-center justify-center"
              >
                <img
                  src={company}
                  alt={`Company ${index + 1}`}
                  className="h-[40px] sm:h-[70px] w-auto object-contain cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
