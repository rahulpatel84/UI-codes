"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const GradientGrid: React.FC = () => {
    const columns = 12;
    const rows = 8;
    const rowsCenter = (rows - 1) / 2;

    const getCellGradient = (col: number, row: number) => {
        // Holistic AI Blurple (#5049f9) based palette, dark to light
        const gradients = [
            'linear-gradient(135deg, #100b4a 0%, rgba(16, 11, 74, 0.4) 100%)',
            'linear-gradient(135deg, #181270 0%, rgba(24, 18, 112, 0.3) 100%)',
            'linear-gradient(135deg, #251d9b 0%, rgba(37, 29, 155, 0.3) 100%)',
            'linear-gradient(135deg, #3d34d1 0%, rgba(61, 52, 209, 0.3) 100%)',
            'linear-gradient(135deg, #5049f9 0%, rgba(80, 73, 249, 0.3) 100%)',
        ];
        // Distribute from bottom-left (dark) to top-right (light)
        // Or simply cycle based on col/row
        return gradients[(col + row) % gradients.length];
    };

    const badges = [
        { col: 8, row: 2, icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>, text: "AI Discovery" },
        { col: 10, row: 2, icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>, text: "AI Red Teaming" },
        { col: 8, row: 3, icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>, text: "Shadow AI" },
        { col: 10, row: 3, icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, text: "AI Bias Audit" },
        { col: 8, row: 4, icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>, text: "LLM Testing" },
        { col: 10, row: 4, icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>, text: "NIST AI Framework" },
        { col: 8, row: 5, icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>, text: "EU AI Act" },
    ];

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <style jsx>{`
                .grid-cell::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        90deg,
                        transparent 0%,
                        rgba(255, 255, 255, 0) 20%,
                        rgba(255, 255, 255, 0.15) 50%,
                        rgba(255, 255, 255, 0) 80%,
                        transparent 100%
                    );
                    transform: translateX(-100%);
                    animation: cellSweep 8s ease-in-out infinite;
                    animation-delay: inherit;
                }
                @keyframes cellSweep {
                    0%, 40% { transform: translateX(-100%); opacity: 0; }
                    50% { opacity: 1; }
                    60%, 100% { transform: translateX(100%); opacity: 0; }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .badge-float {
                    animation: float 4s ease-in-out infinite;
                }
            `}</style>
            <div
                className="grid h-full w-full"
                style={{
                    gridTemplateColumns: `repeat(${columns}, 1fr)`,
                    gridTemplateRows: `repeat(${rows}, 1fr)`,
                }}
            >
                {Array.from({ length: columns * rows }).map((_, index) => {
                    const col = index % columns;
                    const row = Math.floor(index / columns);

                    const distFromCenter = Math.abs(row - rowsCenter);
                    const delay = (col * 0.5) + (Math.pow(distFromCenter, 2) * 0.15);

                    const badge = badges.find(b => b.col === col && b.row === row);

                    return (
                        <div
                            key={index}
                            className="grid-cell relative border-[0.5px] border-white/10 transition-all duration-700 overflow-hidden flex items-center justify-center"
                            style={{
                                background: getCellGradient(col, row),
                                animation: 'shining 8s ease-in-out infinite',
                                animationDelay: `${delay}s`,
                                opacity: 0.9,
                            }}
                        >
                            {badge && (
                                <div className="badge-float relative z-10" style={{ animationDelay: `${delay}s` }}>
                                    <Badge icon={badge.icon} text={badge.text} delay={`${delay}s`} />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    );
                })}
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-[#080521]/60 via-transparent to-[#080521]/90 pointer-events-none" />
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

const Badge: React.FC<{ icon: React.ReactNode; text: string; delay: string }> = ({ icon, text, delay }) => (
    <div
        className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2.5 flex items-center gap-2 animate-fadeIn hover:bg-white/20 transition-all duration-500 group pointer-events-auto"
        style={{ animationDelay: delay }}
    >
        <div className="w-5 h-5 rounded flex items-center justify-center text-white/80 group-hover:text-white transition-colors duration-300">
            {icon}
        </div>
        <span className="text-white/90 font-medium text-sm whitespace-nowrap group-hover:text-white transition-colors duration-300">{text}</span>
    </div>
);

export const Component: React.FC = () => {
    return (
        <section className="relative h-screen flex items-center overflow-hidden w-full">
            <style jsx global>{`
                @keyframes shining {
                    0%, 40%, 65%, 100% { filter: brightness(1) saturate(1); }
                    50% { filter: brightness(1.8) saturate(1.5); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animation-delay-200 { animation-delay: 200ms; }
                .animation-delay-300 { animation-delay: 300ms; }
                .animation-delay-400 { animation-delay: 400ms; }
                .animation-delay-500 { animation-delay: 500ms; }
                .animation-delay-600 { animation-delay: 600ms; }
                .animation-delay-700 { animation-delay: 700ms; }
            `}</style>
            <div className="absolute inset-0" style={{ backgroundColor: '#080521' }}></div>
            <GradientGrid />
            <Navbar />

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 h-full flex flex-col justify-between pt-24 pb-12">
                <div className="flex-1 flex flex-col justify-center">
                    {/* Left-aligned Content */}
                    <div className="space-y-6 animate-fadeIn max-w-7xl">
                        <h1 className="text-white leading-[1.05] font-semibold text-[clamp(3rem,7vw,6rem)]" style={{
                            fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',
                            fontWeight: 600,
                            letterSpacing: '-0.03em',
                            textRendering: 'optimizeLegibility',
                            WebkitFontSmoothing: 'antialiased'
                        }}>
                            Defining the future<br />of AI governance.
                        </h1>

                        <p className="text-base md:text-lg text-gray-200 leading-relaxed font-space max-w-2xl" style={{
                            fontSize: 'clamp(1rem, 1.2vw, 1.125rem)'
                        }}>
                            Our industry-leading governance platform delivers continuous oversight across the full AI lifecycle, enabling confident innovation at scale.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <button className="bg-[#5049f9] hover:bg-[#4039d9] text-white px-7 py-3 rounded-md transition-all duration-200 font-space text-base font-medium inline-flex items-center gap-2 w-fit">
                                <span>Book a Demo</span>
                                <span>→→</span>
                            </button>
                        </div>
                    </div>

                </div>

                {/* Trusted Companies Section */}
                <div className="space-y-5">
                    <p className="text-gray-300 font-space text-sm">
                        Trusted by 1,000+ of the fastest-growing companies
                    </p>
                    <div className="flex flex-wrap items-center gap-6 md:gap-10">
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
