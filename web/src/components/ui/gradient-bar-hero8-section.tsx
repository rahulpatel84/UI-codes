"use client";

import React, { useState } from 'react';
import { Menu, X, Play } from 'lucide-react';

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
            `}</style>

            {/* Wave Aura Layer (Top Focused) - Focused on Blurple only */}
            <div
                className="absolute top-0 left-0 w-full h-full opacity-[0.12]"
                style={{
                    maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 45%, transparent 85%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 45%, transparent 85%)'
                }}
            >
                <div
                    className="absolute top-[-10%] left-[-20%] w-[100%] h-[100%] rounded-full bg-[#5049f9] blur-[150px]"
                    style={{ animation: 'aura-wave-1 25s ease-in-out infinite' }}
                />
                <div
                    className="absolute top-[-5%] right-[-10%] w-[80%] h-[90%] rounded-full bg-[#5049f9] opacity-70 blur-[130px]"
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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md py-4 px-6 md:px-12 border-b border-gray-100 transition-all duration-300">
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
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden w-full bg-white">
            <GridBackground />
            <Navbar />

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-[0.48fr_0.52fr] gap-8 lg:gap-16 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-8 animate-fadeIn">
                        <h1 className="text-slate-900 leading-[1.15] font-sans font-bold text-[clamp(2.5rem,4.5vw,3.75rem)]" style={{
                            fontWeight: 500,
                            letterSpacing: '-0.02em',
                            fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'
                        }}>
                            Defining the future of AI governance.
                        </h1>

                        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
                            Our industry-leading governance platform delivers continuous oversight across the full AI lifecycle, enabling confident innovation at scale.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="bg-[#5049f9] hover:bg-[#4039d9] text-white px-8 py-3.5 rounded-lg transition-all duration-200 text-base font-medium shadow-sm">
                                Get a demo
                            </button>
                            <button className="bg-white hover:bg-gray-50 text-slate-700 border border-gray-200 px-8 py-3.5 rounded-lg transition-all duration-200 text-base font-medium flex items-center justify-center gap-2 group">
                                <span>Watch Demo</span>
                                <Play size={16} className="fill-slate-700" />
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Graphics */}
                    <div className="relative hidden lg:flex justify-end items-center animate-fadeIn animation-delay-500 -mr-12">
                        <div
                            className="relative w-[140%] max-w-[900px] perspective-1000"
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
                                className="w-full h-auto rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 ease-out"
                                style={{
                                    transform: isHovering
                                        ? `perspective(1000px) rotateY(${mousePosition.x * 15}deg) rotateX(${-mousePosition.y * 15}deg) scale(1.05)`
                                        : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)',
                                    transformStyle: 'preserve-3d',
                                }}
                            />

                            {/* Glow effect behind the image */}
                            <div className="absolute -inset-8 bg-gradient-to-r from-[#5049f9]/10 to-[#AB5FCE]/10 blur-3xl -z-10 rounded-xl opacity-60 transition-opacity duration-300"
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
