"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const GridBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-white">
            <style jsx>{`
                @keyframes aura-wave-1 {
                    0%, 100% { transform: translate(-20%, -10%) rotate(0deg) scale(1); }
                    33% { transform: translate(10%, 5%) rotate(5deg) scale(1.1); }
                    66% { transform: translate(-5%, 15%) rotate(-5deg) scale(0.9); }
                }
                @keyframes aura-wave-2 {
                    0%, 100% { transform: translate(20%, -15%) rotate(0deg) scale(1.1); }
                    33% { transform: translate(-10%, 10%) rotate(-8deg) scale(1); }
                    66% { transform: translate(5%, -5%) rotate(8deg) scale(1.05); }
                }
                @keyframes aura-wave-3 {
            `}</style>

            {/* Wave Aura Layer (Top Focused) - Smoothly faded using mask */}
            <div
                className="absolute top-0 left-0 w-full h-full opacity-[0.14]"
                style={{
                    maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 45%, transparent 85%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 45%, transparent 85%)'
                }}
            >
                <div
                    className="absolute top-[-15%] left-[-15%] w-[80%] h-[90%] rounded-full bg-[#5049f9] blur-[150px]"
                    style={{ animation: 'aura-wave-1 25s ease-in-out infinite' }}
                />
                <div
                    className="absolute top-[-20%] right-[-20%] w-[90%] h-[100%] rounded-full bg-[#AB5FCE] blur-[170px]"
                    style={{ animation: 'aura-wave-2 30s ease-in-out infinite' }}
                />
            </div>

            {/* Floating Deepblue Accents - Smoothly faded */}
            <div
                className="absolute bottom-0 left-0 w-full h-full opacity-[0.03]"
                style={{
                    maskImage: 'linear-gradient(to top, transparent, black 20%, transparent 80%)',
                    WebkitMaskImage: 'linear-gradient(to top, transparent, black 20%, transparent 80%)'
                }}
            >
                <div
                    className="absolute bottom-[-5%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#141E41] blur-[120px]"
                    style={{ animation: 'aura-wave-1 35s ease-in-out infinite' }}
                />
                <div
                    className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-[#141E41] blur-[140px]"
                    style={{ animation: 'aura-wave-2 40s ease-in-out infinite' }}
                />
            </div>

            {/* Grid Lines (ON TOP of Aura) */}
            <div
                className="absolute inset-0 z-10 opacity-[0.35]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(0,0,0,0.15) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0,0,0,0.15) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at 50% 40%, black, transparent 95%)'
                }}
            ></div>

            {/* Subtle White Shine Overlap */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/40 via-transparent to-transparent z-20"></div>
        </div>
    );
};

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white py-4 px-6 md:px-12 border-b border-gray-100 transition-all duration-300" style={{
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
                        <a href="#what-we-do" className="text-gray-600 hover:text-black transition-colors duration-300 font-medium text-sm">
                            What We Do
                        </a>
                        <a href="#who-we-serve" className="text-gray-600 hover:text-black transition-colors duration-300 font-medium text-sm">
                            Who We Serve
                        </a>
                        <a href="#resources" className="text-gray-600 hover:text-black transition-colors duration-300 font-medium text-sm">
                            Resources
                        </a>
                        <button className="text-black hover:text-gray-600 px-4 py-2 font-medium text-sm">
                            Login
                        </button>
                        <button className="bg-[#5049f9] hover:bg-[#4039d9] text-white px-5 py-2 rounded-md transition-all duration-300 transform hover:scale-105 font-medium text-sm shadow-sm">
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
                    <div className="md:hidden mt-4 bg-white rounded-lg p-4 animate-fadeIn shadow-lg border border-gray-100">
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
        <section className="relative h-screen flex items-center overflow-hidden w-full bg-white">
            <GridBackground />
            <Navbar />

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 h-full flex flex-col justify-between pt-24 pb-12">
                <div className="flex-1 w-full flex justify-center items-center relative">

                    {/* Subtle Spotlight for Depth */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-100/30 blur-[100px] rounded-full pointer-events-none z-0"></div>

                    <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_minmax(auto,800px)_1fr] gap-8 items-center relative z-10">

                        {/* Left Column Icons */}
                        <div className="hidden lg:flex flex-col gap-6 items-end animate-fadeIn animation-delay-500 opacity-0" style={{ animationFillMode: 'forwards' }}>
                            {/* AI Discovery */}
                            <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl px-6 py-4 flex items-center gap-3 w-fit hover:bg-white hover:border-gray-300 hover:shadow-xl transition-all duration-300 shadow-sm group cursor-default">
                                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:scale-110 group-hover:bg-[#5049f9] group-hover:text-white transition-all duration-300">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <span className="text-slate-900 font-medium text-sm whitespace-nowrap tracking-wide">AI Discovery</span>
                            </div>

                            {/* Shadow AI */}
                            <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl px-6 py-4 flex items-center gap-3 w-fit mr-12 hover:bg-white hover:border-gray-300 hover:shadow-xl transition-all duration-300 shadow-sm group cursor-default">
                                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:scale-110 group-hover:bg-[#5049f9] group-hover:text-white transition-all duration-300">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <span className="text-slate-900 font-medium text-sm whitespace-nowrap tracking-wide">Shadow AI</span>
                            </div>

                            {/* LLM Testing */}
                            <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl px-6 py-4 flex items-center gap-3 w-fit mr-4 hover:bg-white hover:border-gray-300 hover:shadow-xl transition-all duration-300 shadow-sm group cursor-default">
                                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:scale-110 group-hover:bg-[#5049f9] group-hover:text-white transition-all duration-300">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                </div>
                                <span className="text-slate-900 font-medium text-sm whitespace-nowrap tracking-wide">LLM Testing</span>
                            </div>

                            {/* EU AI Act */}
                            <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl px-6 py-4 flex items-center gap-3 w-fit hover:bg-white hover:border-gray-300 hover:shadow-xl transition-all duration-300 shadow-sm group cursor-default">
                                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:scale-110 group-hover:bg-[#5049f9] group-hover:text-white transition-all duration-300">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                    </svg>
                                </div>
                                <span className="text-slate-900 font-medium text-sm whitespace-nowrap tracking-wide">EU AI Act</span>
                            </div>
                        </div>

                        {/* Center Content */}
                        <div className="space-y-8 animate-fadeIn text-center flex flex-col items-center relative z-10 p-4">
                            <h1 className="text-slate-900 leading-[1.05] font-semibold text-[clamp(2rem,5.5vw,4.5rem)] tracking-tight" style={{
                                fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',
                                fontWeight: 600,
                                textRendering: 'optimizeLegibility',
                                WebkitFontSmoothing: 'antialiased'
                            }}>
                                Defining the future<br />of AI governance.
                            </h1>

                            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto tracking-wide" style={{
                                fontSize: 'clamp(1rem, 1.2vw, 1.125rem)'
                            }}>
                                Our industry-leading governance platform delivers continuous oversight across the full AI lifecycle, enabling confident innovation at scale.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center w-full">
                                <button className="bg-[#5049f9] hover:bg-[#4039d9] text-white px-8 py-3.5 rounded-lg transition-all duration-300 font-medium text-base inline-flex items-center justify-center gap-2 w-fit transform hover:-translate-y-0.5">
                                    <span>Get a demo</span>
                                </button>
                                <button className="bg-white hover:bg-gray-50 text-slate-700 border border-gray-200 px-8 py-3.5 rounded-lg transition-all duration-300 font-medium text-base inline-flex items-center justify-center gap-2 w-fit transform hover:-translate-y-0.5">
                                    <span>View Platform</span>
                                </button>
                            </div>
                        </div>

                        {/* Right Column Icons */}
                        <div className="hidden lg:flex flex-col gap-6 items-start animate-fadeIn animation-delay-700 opacity-0" style={{ animationFillMode: 'forwards' }}>
                            {/* AI Red Teaming */}
                            <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl px-6 py-4 flex items-center gap-3 w-fit mt-12 hover:bg-white hover:border-gray-300 hover:shadow-xl transition-all duration-300 shadow-sm group cursor-default">
                                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:scale-110 group-hover:bg-[#5049f9] group-hover:text-white transition-all duration-300">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <span className="text-slate-900 font-medium text-sm whitespace-nowrap tracking-wide">AI Red Teaming</span>
                            </div>

                            {/* AI Bias Audit */}
                            <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl px-6 py-4 flex items-center gap-3 w-fit ml-12 hover:bg-white hover:border-gray-300 hover:shadow-xl transition-all duration-300 shadow-sm group cursor-default">
                                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:scale-110 group-hover:bg-[#5049f9] group-hover:text-white transition-all duration-300">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <span className="text-slate-900 font-medium text-sm whitespace-nowrap tracking-wide">AI Bias Audit</span>
                            </div>

                            {/* NIST AI Framework */}
                            <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl px-6 py-4 flex items-center gap-3 w-fit ml-6 hover:bg-white hover:border-gray-300 hover:shadow-xl transition-all duration-300 shadow-sm group cursor-default">
                                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:scale-110 group-hover:bg-[#5049f9] group-hover:text-white transition-all duration-300">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-slate-900 font-medium text-sm whitespace-nowrap tracking-wide">NIST AI Framework</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Trusted Companies Section */}
                <div className="space-y-5 flex flex-col items-center text-center pb-8 border-t border-gray-100 pt-8">
                    <p className="text-slate-400 font-medium text-xs uppercase tracking-[0.2em]">
                        Trusted by industry leaders
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <div className="text-slate-900 font-bold text-lg flex items-center gap-2">
                            Lovable
                        </div>
                        <div className="text-slate-900 font-bold text-lg">
                            11x
                        </div>
                        <div className="text-slate-900 font-bold text-lg">
                            micro1.
                        </div>
                        <div className="text-slate-900 font-bold text-lg flex items-center gap-1.5 font-space">
                            <span className="inline-block w-0.5 h-6 bg-slate-900"></span>
                            <span className="inline-block w-0.5 h-6 bg-slate-900"></span>
                            <span className="inline-block w-0.5 h-6 bg-slate-900"></span>
                            <span className="ml-1 tracking-widest uppercase text-sm">Flow</span>
                        </div>
                        <div className="text-slate-900 font-bold text-lg">
                            Bland®
                        </div>
                        <div className="text-slate-900 font-bold text-lg italic">
                            greptile
                        </div>
                        <div className="text-slate-900 font-bold text-lg tracking-tight">
                            Cluely
                        </div>
                        <div className="text-slate-900 font-bold text-lg">
                            levels.fyi
                        </div>
                        <div className="text-slate-900 font-bold text-lg flex items-center gap-1">
                            Browser Use
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
