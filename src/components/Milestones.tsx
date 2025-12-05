'use client';

import { useEffect, useRef } from 'react';

const milestones = [
  { date: 'February 2024', title: 'Project Proposal' },
  { date: 'April 2024', title: 'Release 1.0' },
  { date: 'May 2024', title: 'Progress Presentation I' },
  { date: 'July 2024', title: 'Release 2.0' },
  { date: 'August 2024', title: 'Progress Presentation 2' },
  { date: 'September 2024', title: 'Research Paper' },
  { date: 'October 2024', title: 'Website Assessment' },
  { date: 'November 2024', title: 'Logbook' },
  { date: 'December 2024', title: 'Final Report' },
  { date: 'January 2025', title: 'Final Presentation & Viva' }
];

const progressMarkers = [
  { label: 'Proposal', short: 'Feb' },
  { label: 'R1.0', short: 'Apr' },
  { label: 'PP1', short: 'May' },
  { label: 'R2.0', short: 'Jul' },
  { label: 'PP2', short: 'Aug' },
  { label: 'Paper', short: 'Sep' },
  { label: 'Web', short: 'Oct' },
  { label: 'Log', short: 'Nov' },
  { label: 'Report', short: 'Dec' },
  { label: 'Viva', short: 'Jan' }
];

export default function Milestones() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="milestones" 
      className="py-24 px-4 md:px-8 lg:px-16 text-white bg-gradient-to-br from-[#1E293B] to-[#334155]"
    >
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-white text-center mb-4">
        Milestones
      </h2>
      <p className="text-center text-[#FF6BB3] text-lg font-semibold tracking-tight mb-20 px-4">
        Our Research Journey
      </p>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto relative">
        {/* Center Line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#FF6BB3] to-[#E91E8C] rounded-full hidden md:block" />
        <div className="absolute left-5 w-1 h-full bg-gradient-to-b from-[#FF6BB3] to-[#E91E8C] rounded-full md:hidden" />

        {milestones.map((milestone, index) => (
          <div
            key={index}
            ref={(el) => { itemsRef.current[index] = el; }}
            className={`flex items-center mb-12 relative opacity-0 translate-y-8 transition-all duration-700 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Content */}
            <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
              <div className="bg-white border-4 border-black p-8 brutal-shadow transition-all hover:brutal-shadow-hover hover:-translate-x-1 hover:-translate-y-1">
                <span className="font-bebas text-sm text-[#E91E8C] tracking-[2px] uppercase">
                  {milestone.date}
                </span>
                <h3 className="font-bebas text-xl text-[#1E293B] mt-2 uppercase">
                  {milestone.title}
                </h3>
              </div>
            </div>

            {/* Dot */}
            <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-5 h-5 bg-[#E91E8C] rounded-full shadow-lg shadow-[#E91E8C] z-10" />
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto mt-20 bg-white border-4 border-black p-10 brutal-shadow-lg">
        <div className="h-8 bg-gray-200 border-3 border-black relative overflow-hidden mb-6">
          <div 
            className="h-full bg-[#FFD700] border-r-3 border-black"
            style={{
              width: '65%'
            }}
          />
        </div>

        <div className="flex justify-between flex-wrap gap-3">
          {progressMarkers.map((marker, index) => (
            <div key={index} className="text-center flex-1 min-w-[60px]">
              <span className="block text-xs font-bold text-[#1E293B] uppercase">{marker.label}</span>
              <span className="block text-xs text-[#64748B] font-medium">{marker.short}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
