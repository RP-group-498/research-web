'use client';

import BrainCharacter from './BrainCharacter';

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center relative px-4 md:px-8 pt-24 pb-8 overflow-hidden bg-white"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #C490B8 1px, transparent 1px),
            linear-gradient(to bottom, #C490B8 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Brain Character */}
      <BrainCharacter />

      {/* Hero Content */}
      <div className="text-center relative z-10 max-w-5xl mx-auto px-4">
        <h1 
          className="font-bebas text-[5rem] md:text-[7rem] lg:text-[9rem] leading-[0.9] text-[#1E293B] tracking-tight mb-8"
        >
          FOCUS
        </h1>
        <p className="text-xl md:text-2xl text-[#E91E8C] font-semibold tracking-tight mt-4 mb-6">
          Overcome Procrastination with Cognitive Science
        </p>
        <p className="text-base md:text-lg text-[#64748B] mt-4 max-w-2xl mx-auto leading-relaxed px-6">
          A research-backed productivity app designed to rewire your brain for peak performance and sustained concentration
        </p>
        
        <div className="flex gap-4 justify-center mt-10 flex-wrap px-4">
          <a 
            href="#what-is-focus"
            className="px-8 py-3.5 bg-[#E91E8C] text-white font-semibold border-3 border-black brutal-shadow transition-all hover:brutal-shadow-hover hover:translate-x-[-2px] hover:translate-y-[-2px]"
          >
            Learn More
          </a>
          <a 
            href="#downloads"
            className="px-8 py-3.5 bg-[#FFD700] text-black border-3 border-black font-bold brutal-shadow transition-all hover:brutal-shadow-hover hover:translate-x-[-2px] hover:translate-y-[-2px]"
          >
            Download
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-[#64748B] uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-6 h-10 border-2 border-[#CBD5E1] rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#64748B] rounded-full" />
        </div>
      </div>
    </section>
  );
}
