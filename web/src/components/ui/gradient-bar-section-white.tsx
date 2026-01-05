"use client";

import React from 'react';
import { Play } from 'lucide-react';

export const GradientBarSectionWhite: React.FC = () => {
  // Deterministic pseudo-random number generator
  // Using a stable integer-hashing algorithm (Mulberry32-style) to avoid floating-point 
  // differences between server (Node.js) and client (Browser) that occur with Math.sin()
  const getPseudoRandom = (seed: number) => {
    let t = seed + 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };

  const haiColors = {
    blurple: '#5049f9',
    amethyst: '#AB5FCE',
    cerulean: '#36B1FE',
    deepblue: '#141E41'
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden w-full bg-white">
      {/* Base gradient using HAI colors */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg,
            rgba(20, 30, 65, 0.02) 0%,
            rgba(255, 255, 255, 1) 30%,
            rgba(80, 73, 249, 0.03) 100%)`
        }}
      ></div>

      {/* Animated gradient orbs - HAI colors */}
      <div className="absolute inset-0">
        {/* Large Blurple orb - top right */}
        <div
          className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            background: `radial-gradient(circle, ${haiColors.blurple} 0%, transparent 70%)`,
            animationDuration: '8s'
          }}
        ></div>

        {/* Medium Amethyst orb - middle left */}
        <div
          className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full opacity-18 blur-3xl animate-pulse"
          style={{
            background: `radial-gradient(circle, ${haiColors.amethyst} 0%, transparent 70%)`,
            animationDuration: '10s',
            animationDelay: '2s'
          }}
        ></div>

        {/* Cerulean orb - bottom right */}
        <div
          className="absolute -bottom-20 right-0 w-[550px] h-[550px] rounded-full opacity-15 blur-3xl animate-pulse"
          style={{
            background: `radial-gradient(circle, ${haiColors.cerulean} 0%, transparent 70%)`,
            animationDuration: '12s',
            animationDelay: '4s'
          }}
        ></div>

        {/* Deepblue orb - center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl animate-pulse"
          style={{
            background: `radial-gradient(circle, ${haiColors.deepblue} 0%, transparent 70%)`,
            animationDuration: '15s',
            animationDelay: '1s'
          }}
        ></div>

        {/* Small floating accent orbs */}
        <div
          className="absolute top-1/4 right-1/3 w-[200px] h-[200px] rounded-full opacity-12 blur-2xl animate-float"
          style={{
            background: `radial-gradient(circle, ${haiColors.blurple} 0%, transparent 70%)`,
          }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-[180px] h-[180px] rounded-full opacity-12 blur-2xl animate-float"
          style={{
            background: `radial-gradient(circle, ${haiColors.cerulean} 0%, transparent 70%)`,
            animationDelay: '3s'
          }}
        ></div>
      </div>

      {/* Animated diagonal stripes - HAI colors alternating */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0 animate-slide-diagonal"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 80px,
              ${haiColors.blurple} 80px,
              ${haiColors.blurple} 81px,
              transparent 81px,
              transparent 160px,
              ${haiColors.amethyst} 160px,
              ${haiColors.amethyst} 161px
            )`
          }}
        ></div>
      </div>

      {/* Dot matrix pattern - HAI Blurple */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, ${haiColors.blurple} 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      ></div>

      {/* Animated Network Effect with SVG */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <svg className="w-full h-full" style={{ position: 'absolute' }}>
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <animate attributeName="x1" values="0%;100%;0%" dur="20s" repeatCount="indefinite" />
              <animate attributeName="y1" values="0%;100%;0%" dur="15s" repeatCount="indefinite" />
              <stop offset="0%" stopColor={haiColors.blurple} stopOpacity="0.3" />
              <stop offset="100%" stopColor={haiColors.cerulean} stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={haiColors.amethyst} stopOpacity="0.3" />
              <stop offset="100%" stopColor={haiColors.blurple} stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Animated connection lines */}
          {[...Array(15)].map((_, i) => {
            const x1 = getPseudoRandom(i * 13 + 1) * 100;
            const y1 = getPseudoRandom(i * 13 + 2) * 100;
            const x2 = getPseudoRandom(i * 13 + 3) * 100;
            const y2 = getPseudoRandom(i * 13 + 4) * 100;

            return (
              <g key={i}>
                <line
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke={`url(#lineGradient${(i % 2) + 1})`}
                  strokeWidth="1"
                  strokeDasharray="5,5"
                >
                  <animate
                    attributeName="x1"
                    values={`${x1}%;${(x1 + 20) % 100}%;${x1}%`}
                    dur={`${20 + i * 2}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y1"
                    values={`${y1}%;${(y1 + 15) % 100}%;${y1}%`}
                    dur={`${25 + i * 2}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="x2"
                    values={`${x2}%;${(x2 - 15) % 100}%;${x2}%`}
                    dur={`${22 + i * 2}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y2"
                    values={`${y2}%;${(y2 - 20) % 100}%;${y2}%`}
                    dur={`${27 + i * 2}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="10"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </line>
              </g>
            );
          })}

          {/* Animated network nodes */}
          {[...Array(12)].map((_, i) => {
            const cx = getPseudoRandom(i * 17 + 1) * 100;
            const cy = getPseudoRandom(i * 17 + 2) * 100;
            const colors = [haiColors.blurple, haiColors.amethyst, haiColors.cerulean];
            const nodeColor = colors[i % colors.length];

            return (
              <circle
                key={`node-${i}`}
                cx={`${cx}%`}
                cy={`${cy}%`}
                r="3"
                fill={nodeColor}
                opacity="0.4"
              >
                <animate
                  attributeName="cx"
                  values={`${cx}%;${(cx + 25) % 100}%;${cx}%`}
                  dur={`${30 + i * 3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values={`${cy}%;${(cy + 20) % 100}%;${cy}%`}
                  dur={`${35 + i * 3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  values="3;5;3"
                  dur="4s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;0.6;0.2"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}
        </svg>
      </div>

      {/* Floating particles - Mixed HAI colors */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const colors = [haiColors.blurple, haiColors.amethyst, haiColors.cerulean, haiColors.deepblue];
          const randomColor = colors[i % colors.length];
          return (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-20 animate-float"
              style={{
                backgroundColor: randomColor,
                left: `${getPseudoRandom(i * 23 + 1) * 100}%`,
                top: `${getPseudoRandom(i * 23 + 2) * 100}%`,
                animationDelay: `${getPseudoRandom(i * 23 + 3) * 5}s`,
                animationDuration: `${15 + getPseudoRandom(i * 23 + 4) * 10}s`
              }}
            ></div>
          );
        })}
      </div>

      {/* Gradient rays - HAI colors */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="absolute inset-0 animate-spin-slow"
          style={{
            background: `conic-gradient(
              from 0deg at 50% 50%,
              transparent 0deg,
              ${haiColors.blurple} 30deg,
              transparent 60deg,
              transparent 120deg,
              ${haiColors.amethyst} 150deg,
              transparent 180deg,
              transparent 240deg,
              ${haiColors.cerulean} 270deg,
              transparent 300deg,
              transparent 360deg
            )`
          }}
        ></div>
      </div>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/40"></div>

      <style jsx>{`
        @keyframes slide-diagonal {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(113px, 113px);
          }
        }
        .animate-slide-diagonal {
          animation: slide-diagonal 20s linear infinite;
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
      `}</style>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="leading-[1.1] tracking-tight mb-6">
                <span className="block font-inter font-extrabold text-[clamp(2.5rem,4vw,3.5rem)] text-gray-900">
                  Defining the future
                </span>
                <span className="block font-inter font-extrabold text-[clamp(2.5rem,4vw,3.5rem)] text-[#5049f9]">
                  of AI governance.
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Our industry-leading governance platform delivers continuous oversight across the full AI lifecycle, enabling confident innovation at scale.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#5049f9] hover:bg-[#4039d9] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-[#5049f9]/20 hover:shadow-xl hover:shadow-[#5049f9]/30">
                Get a demo
              </button>
              <button className="border-2 border-gray-300 hover:border-[#5049f9] text-gray-700 hover:text-[#5049f9] px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 group">
                <span>Watch Demo</span>
                <Play size={18} className="fill-current group-hover:scale-110 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[#5049f9]">50K+</div>
                <div className="text-sm text-gray-500">Users</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[#5049f9]">99.9%</div>
                <div className="text-sm text-gray-500">Uptime</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-[#5049f9]">24/7</div>
                <div className="text-sm text-gray-500">Support</div>
              </div>
            </div>
          </div>

          {/* Right Side - Graphics */}
          <div className="relative h-[500px] hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Main feature card */}
              <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5049f9] to-[#6b5ffb] flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">AI Automation</div>
                      <div className="text-sm text-gray-500">Active</div>
                    </div>
                  </div>

                  {/* Progress bars */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Processing</span>
                        <span className="font-semibold text-[#5049f9]">87%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-[87%] bg-gradient-to-r from-[#5049f9] to-[#6b5ffb] rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Optimization</span>
                        <span className="font-semibold text-[#5049f9]">94%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-[94%] bg-gradient-to-r from-[#5049f9] to-[#6b5ffb] rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Performance</span>
                        <span className="font-semibold text-[#5049f9]">99%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-[99%] bg-gradient-to-r from-[#5049f9] to-[#6b5ffb] rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-[#5049f9]">2.4K</div>
                      <div className="text-xs text-gray-500">Tasks Completed</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-[#5049f9]">156</div>
                      <div className="text-xs text-gray-500">Active Workflows</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#5049f9]/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#5049f9]/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
