"use client";

import React, { useState } from 'react';
import { Play } from 'lucide-react';

const GradientBars: React.FC = () => {
  const [numBars] = useState(15);

  const calculateHeight = (index: number, total: number) => {
    const position = index / (total - 1);
    const maxHeight = 100;
    const minHeight = 30;

    const center = 0.5;
    const distanceFromCenter = Math.abs(position - center);
    const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2);

    return minHeight + (maxHeight - minHeight) * heightPercentage;
  };

  const getBarGradient = (index: number) => {
    const gradients = [
      'linear-gradient(to top, rgba(80, 73, 249, 0.5), rgba(80, 73, 249, 0.3), transparent)',
      'linear-gradient(to top, rgba(80, 73, 249, 0.45), rgba(80, 73, 249, 0.25), transparent)',
      'linear-gradient(to top, rgba(80, 73, 249, 0.4), rgba(80, 73, 249, 0.2), transparent)',
      'linear-gradient(to top, rgba(80, 73, 249, 0.55), rgba(80, 73, 249, 0.28), transparent)',
      'linear-gradient(to top, rgba(80, 73, 249, 0.48), rgba(80, 73, 249, 0.22), transparent)',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="flex h-full"
        style={{
          width: '100%',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        {Array.from({ length: numBars }).map((_, index) => {
          const height = calculateHeight(index, numBars);
          return (
            <div
              key={index}
              style={{
                flex: '1 0 calc(100% / 15)',
                maxWidth: 'calc(100% / 15)',
                height: '100%',
                background: getBarGradient(index),
                transform: `scaleY(${height / 100})`,
                transformOrigin: 'bottom',
                transition: 'transform 0.5s ease-in-out',
                animation: 'pulseBar 2s ease-in-out infinite alternate',
                animationDelay: `${index * 0.1}s`,
                outline: '1px solid rgba(0, 0, 0, 0)',
                boxSizing: 'border-box',
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export const GradientBarSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden w-full">
      <div className="absolute inset-0" style={{ backgroundColor: '#141E41' }}></div>
      <GradientBars />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fadeIn">
            <h2 className="text-white leading-[1.1] tracking-tight">
              <span className="block font-inter font-semibold text-[clamp(2.5rem,4vw,3.5rem)]">
                Defining the future
              </span>
              <span className="block font-inter font-semibold text-[clamp(2.5rem,4vw,3.5rem)]">
                of AI governance.
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-space max-w-xl">
              Our industry-leading governance platform delivers continuous oversight across the full AI lifecycle, enabling confident innovation at scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 font-space text-lg font-medium">
                Get a demo
              </button>
              <button className="border border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 font-space text-lg font-medium flex items-center justify-center gap-2 group">
                <span>Watch Demo</span>
                <Play size={18} className="fill-current group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side - Graphics */}
          <div className="relative animate-fadeIn animation-delay-200">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-2 border-[#5049f9] opacity-20 animate-pulse"></div>
              </div>
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-2 border-[#7d77fb] opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              <div className="absolute inset-16 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-2 border-[#a6a1fc] opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>

              {/* Center element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#5049f9] to-[#a6a1fc] shadow-2xl shadow-[#5049f9]/50 animate-float"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
