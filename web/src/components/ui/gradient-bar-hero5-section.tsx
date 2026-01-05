"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
      'linear-gradient(to top, #1a1670, rgba(26, 22, 112, 0.4), transparent)',  // Deep indigo
      'linear-gradient(to top, #221d8f, rgba(34, 29, 143, 0.3), transparent)',  // Rich blue-purple
      'linear-gradient(to top, #2d27a8, rgba(45, 39, 168, 0.3), transparent)',  // Medium indigo
      'linear-gradient(to top, #14124f, rgba(20, 18, 79, 0.5), transparent)',  // Darkest blue
      'linear-gradient(to top, #2a2190, rgba(42, 33, 144, 0.3), transparent)',  // Muted purple
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
                animation: 'shining 6s ease-in-out infinite',
                animationDelay: `${index * 0.25}s`, // Staggered delay for smooth left-to-right sweep
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

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white py-4 px-6 md:px-12 shadow-sm transition-all duration-300" style={{
      fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'
    }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-black font-bold text-xl tracking-tighter">
              Holistic AI
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#what-we-do" className="text-gray-600 hover:text-black transition-colors duration-300 font-medium">
              What We Do
            </a>
            <a href="#who-we-serve" className="text-gray-600 hover:text-black transition-colors duration-300 font-medium">
              Who We Serve
            </a>
            <a href="#resources" className="text-gray-600 hover:text-black transition-colors duration-300 font-medium">
              Resources
            </a>
            <button className="text-black hover:text-gray-600 px-4 py-2 font-medium">
              Login
            </button>
            <button className="bg-[#5049f9] hover:bg-[#4039d9] text-white px-5 py-2 rounded-md transition-all duration-300 transform hover:scale-105 font-medium">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg p-4 animate-fadeIn shadow-lg">
            <div className="flex flex-col space-y-4">
              <a href="#what-we-do" className="text-gray-600 hover:text-black transition-colors duration-300 py-2 font-medium">
                What We Do
              </a>
              <a href="#who-we-serve" className="text-gray-600 hover:text-black transition-colors duration-300 py-2 font-medium">
                Who We Serve
              </a>
              <a href="#resources" className="text-gray-600 hover:text-black transition-colors duration-300 py-2 font-medium">
                Resources
              </a>
              <button className="bg-[#5049f9] hover:bg-[#4039d9] text-white px-5 py-2 rounded-md transition-all duration-300 w-full font-medium">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export const Component: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden w-full">
      <div className="absolute inset-0" style={{ backgroundColor: '#0a0a2e' }}></div>
      <GradientBars />
      <Navbar />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 h-full flex flex-col justify-between pt-24 pb-12">
        <div className="flex-1 w-full flex justify-center items-center">
          <div className="w-full grid grid-cols-1 xl:grid-cols-[1fr_minmax(auto,800px)_1fr] gap-8 items-center">

            {/* Left Column Icons */}
            <div className="hidden xl:flex flex-col gap-5 items-end animate-fadeIn animation-delay-500 opacity-0" style={{ animationFillMode: 'forwards' }}>
              {/* AI Discovery */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3 w-fit hover:bg-white/10 transition-colors duration-300">
                <div className="w-5 h-5 rounded flex items-center justify-center text-white/70">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <span className="text-white/90 font-medium text-sm whitespace-nowrap">AI Discovery</span>
              </div>

              {/* Shadow AI */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3 w-fit mr-8 hover:bg-white/10 transition-colors duration-300">
                <div className="w-5 h-5 rounded flex items-center justify-center text-white/70">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <span className="text-white/90 font-medium text-sm whitespace-nowrap">Shadow AI</span>
              </div>

              {/* LLM Testing */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3 w-fit mr-4 hover:bg-white/10 transition-colors duration-300">
                <div className="w-5 h-5 rounded flex items-center justify-center text-white/70">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <span className="text-white/90 font-medium text-sm whitespace-nowrap">LLM Testing</span>
              </div>

              {/* EU AI Act */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3 w-fit hover:bg-white/10 transition-colors duration-300">
                <div className="w-5 h-5 rounded flex items-center justify-center text-white/70">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <span className="text-white/90 font-medium text-sm whitespace-nowrap">EU AI Act</span>
              </div>
            </div>

            {/* Center Content */}
            <div className="space-y-6 animate-fadeIn text-center flex flex-col items-center relative z-10 p-4">
              <h1 className="text-white leading-[1.05] font-semibold text-[clamp(2.5rem,6vw,5.5rem)]" style={{
                fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',
                fontWeight: 600,
                letterSpacing: '-0.03em',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased'
              }}>
                Defining the future<br />of AI governance.
              </h1>

              <p className="text-base md:text-lg text-gray-200 leading-relaxed font-space max-w-2xl mx-auto" style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.125rem)'
              }}>
                Our industry-leading governance platform delivers continuous oversight across the full AI lifecycle, enabling confident innovation at scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center w-full">
                <button className="bg-white hover:bg-gray-100 text-black px-7 py-3 rounded-md transition-all duration-200 font-space text-base font-medium inline-flex items-center gap-2 w-fit">
                  <span>Book a Demo</span>
                  <span>→→</span>
                </button>
              </div>
            </div>

            {/* Right Column Icons */}
            <div className="hidden xl:flex flex-col gap-5 items-start animate-fadeIn animation-delay-700 opacity-0" style={{ animationFillMode: 'forwards' }}>
              {/* AI Red Teaming */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3 w-fit mt-8 hover:bg-white/10 transition-colors duration-300">
                <div className="w-5 h-5 rounded flex items-center justify-center text-white/70">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <span className="text-white/90 font-medium text-sm whitespace-nowrap">AI Red Teaming</span>
              </div>

              {/* AI Bias Audit */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3 w-fit ml-8 hover:bg-white/10 transition-colors duration-300">
                <div className="w-5 h-5 rounded flex items-center justify-center text-white/70">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-white/90 font-medium text-sm whitespace-nowrap">AI Bias Audit</span>
              </div>

              {/* NIST AI Framework */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3 w-fit ml-4 hover:bg-white/10 transition-colors duration-300">
                <div className="w-5 h-5 rounded flex items-center justify-center text-white/70">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-white/90 font-medium text-sm whitespace-nowrap">NIST AI Framework</span>
              </div>
            </div>

          </div>
        </div>

        {/* Trusted Companies Section */}
        <div className="space-y-5 flex flex-col items-center text-center pb-8">
          <p className="text-gray-300 font-space text-sm">
            Trusted by 1,000+ of the fastest-growing companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="text-white font-semibold text-lg flex items-center gap-2">
              <span className="text-xl">♥</span> Lovable
            </div>
            <div className="text-white font-semibold text-lg">
              11x
            </div>
            <div className="text-white font-semibold text-lg">
              micro1.
            </div>
            <div className="text-white font-semibold text-lg flex items-center gap-1.5">
              <span className="inline-block w-0.5 h-6 bg-white"></span>
              <span className="inline-block w-0.5 h-6 bg-white"></span>
              <span className="inline-block w-0.5 h-6 bg-white"></span>
              <span className="ml-1">Flow</span>
            </div>
            <div className="text-white font-semibold text-lg">
              Bland®
            </div>
            <div className="text-white font-semibold text-lg">
              greptile
            </div>
            <div className="text-white font-semibold text-lg">
              Cluely
            </div>
            <div className="text-white font-semibold text-lg">
              levels.fyi
            </div>
            <div className="text-white font-semibold text-lg">
              Browser Use
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
