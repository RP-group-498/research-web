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
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all hover:scale-[1.02]">
                <span className="font-bebas text-sm text-[#FF6BB3] tracking-[2px]">
                  {milestone.date}
                </span>
                <h3 className="font-bebas text-xl text-white mt-2">
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
      <div className="max-w-4xl mx-auto mt-20 bg-white/10 rounded-3xl p-10">
        <div className="h-8 bg-white/20 rounded-full relative overflow-hidden mb-6">
          <div 
            className="h-full rounded-full animate-progress-pulse"
            style={{
              width: '65%',
              background: 'linear-gradient(90deg, #E91E8C, #FF6BB3)'
            }}
          />
        </div>

        <div className="flex justify-between flex-wrap gap-3">
          {progressMarkers.map((marker, index) => (
            <div key={index} className="text-center flex-1 min-w-[60px]">
              <span className="block text-xs font-semibold text-[#FF6BB3]">{marker.label}</span>
              <span className="block text-xs text-white/60">{marker.short}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
