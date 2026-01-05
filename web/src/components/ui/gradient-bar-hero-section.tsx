"use client";

import React, { useState } from 'react';
import { Menu, X, Play } from 'lucide-react';

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
                animation: 'shining 8s ease-in-out infinite',
                animationDelay: `${index * 0.4}s`, // Staggered delay for "one by one" shine
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent py-6 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl tracking-tighter font-space">
              Holistic AI
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#what-we-do" className="text-gray-300 hover:text-white transition-colors duration-300 font-space">
              What We Do
            </a>
            <a href="#who-we-serve" className="text-gray-300 hover:text-white transition-colors duration-300 font-space">
              Who We Serve
            </a>
            <a href="#resources" className="text-gray-300 hover:text-white transition-colors duration-300 font-space">
              Resources
            </a>
            <button className="text-white hover:text-gray-300 px-4 py-2 font-space">
              Login
            </button>
            <button className="bg-[#5049f9] hover:bg-[#4039d9] text-white px-5 py-2 rounded-md transition-all duration-300 transform hover:scale-105 font-space">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-900 bg-opacity-95 backdrop-blur-sm rounded-lg p-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a href="#what-we-do" className="text-gray-300 hover:text-white transition-colors duration-300 py-2 font-space">
                What We Do
              </a>
              <a href="#who-we-serve" className="text-gray-300 hover:text-white transition-colors duration-300 py-2 font-space">
                Who We Serve
              </a>
              <a href="#resources" className="text-gray-300 hover:text-white transition-colors duration-300 py-2 font-space">
                Resources
              </a>
              <button className="bg-[#5049f9] hover:bg-[#4039d9] text-white px-5 py-2 rounded-md transition-all duration-300 w-full font-space">
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden w-full">
      <div className="absolute inset-0" style={{ backgroundColor: '#0a0a2e' }}></div>
      <GradientBars />
      <Navbar />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[0.52fr_0.48fr] gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fadeIn">
            <style jsx>{`
              .btn-underline {
                position: relative;
              }
              .btn-underline::after {
                content: '';
                position: absolute;
                width: 0;
                height: 1.5px;
                bottom: -2px;
                left: 0;
                background-color: currentColor;
                transition: width 0.3s ease;
              }
              button:hover .btn-underline::after {
                width: 100%;
              }
            `}</style>
            <h1 className="leading-[1.1] font-sans text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 text-[clamp(2.5rem,5.5vw,4.5rem)]" style={{
              fontWeight: 600,
              letterSpacing: '-0.03em',
              textRendering: 'optimizeLegibility'
            }}>
              Defining the future<br />of AI governance.
            </h1>

            <p className="text-white/90 leading-relaxed font-space max-w-xl" style={{
              fontSize: 'clamp(1.1rem, 1.4vw, 1.3rem)'
            }}>
              Our industry-leading governance platform delivers continuous oversight across the full AI lifecycle, enabling confident innovation at scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button className="bg-[#5049f9] hover:bg-[#4039d9] text-white px-8 py-3 rounded-xl transition-all duration-300 font-space text-base font-medium shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95">
                <span className="btn-underline">Get a demo</span>
              </button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-8 py-3 rounded-xl transition-all duration-300 font-space text-base font-medium flex items-center justify-center gap-3 backdrop-blur-sm group hover:scale-105 active:scale-95">
                <span className="btn-underline">Watch Demo</span>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#5049f9] transition-colors duration-300">
                  <Play size={12} className="fill-white ml-0.5" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Side - Graphics */}
          <div className="relative hidden lg:flex justify-end items-center animate-fadeIn animation-delay-500 -mr-24">
            <div
              className="relative w-[150%] max-w-[1100px] perspective-1000"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => {
                setIsHovering(false);
                setMousePosition({ x: 0, y: 0 });
              }}
            >
              <img
                src="/6881290df923a533a8c05b55_680038287b18a4cac2bf36a0_07d8765e2d849bfeb453ef2e698cdb46_Dash.png"
                alt="AI Governance Dashboard"
                className="w-full h-auto rounded-xl shadow-2xl border border-white/10 transition-all duration-300 ease-out"
                style={{
                  transform: isHovering
                    ? `perspective(1000px) rotateY(${mousePosition.x * 15}deg) rotateX(${-mousePosition.y * 15}deg) scale(1.05)`
                    : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)',
                  transformStyle: 'preserve-3d',
                }}
              />

              {/* Glow effect behind the image */}
              <div className="absolute -inset-8 bg-gradient-to-r from-[#5049f9]/20 to-[#AB5FCE]/20 blur-3xl -z-10 rounded-xl opacity-60 transition-opacity duration-300"
                style={{
                  opacity: isHovering ? 0.8 : 0.6
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};