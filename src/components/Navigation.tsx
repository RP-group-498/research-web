'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[1000] px-4 md:px-8 lg:px-16 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled 
          ? 'bg-white border-b-4 border-black' 
          : 'bg-white/95 border-b-3 border-gray-300'
      } backdrop-blur-sm`}
    >
      <Link href="/" className="flex items-center gap-2 no-underline">
        <div className="w-11 h-11 bg-[#FFD700] border-3 border-black flex items-center justify-center brutal-shadow-sm">
          <span className="text-2xl">🧠</span>
        </div>
        <span className="font-bebas text-2xl text-[#1E293B] uppercase">FOCUS</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-1 items-center">
        <Link href="#what-is-focus" className="px-4 py-2 text-[#64748B] font-medium text-sm hover:text-[#E91E8C] transition-colors">
          What is Focus
        </Link>
        <Link href="#milestones" className="px-4 py-2 text-[#64748B] font-medium text-sm hover:text-[#E91E8C] transition-colors">
          Milestones
        </Link>
        <Link href="#about" className="px-4 py-2 text-[#64748B] font-medium text-sm hover:text-[#E91E8C] transition-colors">
          About Us
        </Link>
        <Link 
          href="#downloads" 
          className="px-6 py-2.5 bg-white border-3 border-black text-[#1E293B] font-bold hover:bg-[#FFD700] transition-all ml-2 brutal-shadow-sm"
        >
          Downloads
        </Link>
        <Link 
          href="#contact" 
          className="px-6 py-2.5 bg-[#E91E8C] text-white font-bold border-3 border-black brutal-shadow-sm hover:brutal-shadow transition-all"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
      >
        <span className={`w-6 h-0.5 bg-[#64748B] transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-0.5 bg-[#64748B] transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 bg-[#64748B] transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white backdrop-blur-sm p-8 flex flex-col gap-2 lg:hidden shadow-lg border-b border-gray-100">
          <Link href="#what-is-focus" onClick={() => setMobileMenuOpen(false)} className="py-3 text-[#64748B] font-medium hover:text-[#E91E8C]">
            What is Focus
          </Link>
          <Link href="#milestones" onClick={() => setMobileMenuOpen(false)} className="py-3 text-[#64748B] font-medium hover:text-[#E91E8C]">
            Milestones
          </Link>
          <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="py-3 text-[#64748B] font-medium hover:text-[#E91E8C]">
            About Us
          </Link>
          <Link href="#downloads" onClick={() => setMobileMenuOpen(false)} className="py-3 text-[#64748B] font-medium hover:text-[#E91E8C]">
            Downloads
          </Link>
          <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-3 text-[#64748B] font-medium hover:text-[#E91E8C]">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
