"use client";
import { useState, useEffect, useRef } from "react";
import Button from "../Common/Button";

const Commitments = () => {
  const targetNumbers = {
    revenue: 245,
    audience: 130,
    brands: 50,
    awards: 24,
  };

  const duration = 2000;
  const [counts, setCounts] = useState({
    revenue: 0,
    audience: 0,
    brands: 0,
    awards: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); 
  const sectionRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Reset counts to zero to re-trigger animation
          setCounts({
            revenue: 0,
            audience: 0,
            brands: 0,
            awards: 0,
          });
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );
  
    observerRef.current = observer;
  
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  

  useEffect(() => {
    if (isVisible) {
      Object.keys(targetNumbers).forEach((key) => {
        const target = targetNumbers[key];
        let start = 0;
        const step = target / (duration / 30);
  
        const interval = setInterval(() => {
          start += step;
          setCounts((prev) => ({
            ...prev,
            [key]: Math.min(Math.floor(start), target),
          }));
          if (start >= target) clearInterval(interval);
        }, 30);
      });
    }
  }, [isVisible]);
  

  const statsData = [
    {
      key: 'revenue',
      value: counts.revenue,
      suffix: '%',
      label: 'More revenues for the brand'
    },
    {
      key: 'audience',
      value: counts.audience,
      suffix: 'K+',
      label: 'Audiences reached'
    },
    {
      key: 'brands',
      value: counts.brands,
      suffix: '+',
      label: 'Brands trust us'
    },
    {
      key: 'awards',
      value: counts.awards,
      suffix: '+',
      label: 'Worldwide Awards'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white min-h-screen flex items-center px-4 py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          <div className="grid grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {statsData.map((stat) => (
              <div key={stat.key} className="text-left">
                <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-2 md:mb-3">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed max-w-[200px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="text-left lg:pl-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl leading-tight mb-6 md:mb-8">
              Made In India. <br/>Made For The World.
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-10 leading-relaxed max-w-lg">
              We are committed to working with you collaboratively to understand your goals and create a strategy that will achieve them.
            </p>
            <Button 
            label="Learn More"
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      </div>
    </section>
  );
};

export default Commitments;