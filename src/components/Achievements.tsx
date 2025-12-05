'use client';

import { useEffect, useRef } from 'react';

const achievements = [
  {
    icon: '🏆',
    number: '1',
    label: 'Research Paper Published'
  },
  {
    icon: '👥',
    number: '500+',
    label: 'Beta Testers'
  },
  {
    icon: '📈',
    number: '40%',
    label: 'Productivity Increase'
  },
  {
    icon: '⭐',
    number: '4.8',
    label: 'User Rating'
  }
];

export default function Achievements() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'scale-100');
            entry.target.classList.remove('opacity-0', 'scale-90');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="achievements" 
      className="py-24 px-4 md:px-8 lg:px-16 text-white"
      style={{
        background: 'linear-gradient(135deg, #4A2C7A 0%, #3A1C5A 100%)'
      }}
    >
      <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-white text-center mb-6">
        Achievements
      </h2>
      <p className="text-center text-[#FF6BB3] text-lg uppercase tracking-[2px] mb-20 px-4">
        Our Research Impact
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {achievements.map((item, index) => (
          <div
            key={index}
            ref={(el) => { cardsRef.current[index] = el; }}
            className="bg-[#FFD700] border-4 border-black p-10 text-center transition-all duration-700 ease-out opacity-0 scale-90 brutal-shadow hover:brutal-shadow-hover hover:-translate-x-1 hover:-translate-y-1"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="text-5xl mb-6">{item.icon}</div>
            <div className="font-bebas text-4xl md:text-5xl text-[#1E293B] leading-none mb-3">
              {item.number}
            </div>
            <p className="text-sm text-[#1E293B] font-bold uppercase">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
